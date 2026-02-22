import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs-extra';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = 3000;
const SECRET_KEY = process.env.JWT_SECRET || 'supersecretkey'; // In production, use env var

// Ensure data and uploads directories exist
const DATA_DIR = path.join(__dirname, 'data');
const UPLOADS_DIR = path.join(__dirname, 'uploads');
fs.ensureDirSync(DATA_DIR);
fs.ensureDirSync(UPLOADS_DIR);

// Database file
const DB_FILE = path.join(DATA_DIR, 'db.json');

// Initialize DB if not exists
if (!fs.existsSync(DB_FILE)) {
  const initialData = {
    users: [
      {
        id: 1,
        username: 'admin',
        password: bcrypt.hashSync('admin123', 10) // Default password
      }
    ],
    news: [],
    clients: [],
    contacts: {
      address: 'Barcelona, Espanha',
      phone: '+34 605 31 89 20',
      email: 'info@futurislda.com'
    },
    settings: {
      logo: null,
      heroImage: null,
      heroSubtitle: null,
      stats: {
        countries: '4+',
        projects: '200+',
        safety: '98%',
        engineers: '500+',
        support: '24/7'
      }
    },
    jobs: [],
    applications: []
  };
  fs.writeJsonSync(DB_FILE, initialData, { spaces: 2 });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(UPLOADS_DIR));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Helper to read/write DB
const getDb = () => fs.readJsonSync(DB_FILE);
const saveDb = (data: any) => fs.writeJsonSync(DB_FILE, data, { spaces: 2 });

// Auth Middleware
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, SECRET_KEY, (err: any, user: any) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// --- API Routes ---

// Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const db = getDb();
  const user = db.users.find((u: any) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

// Get Public Data (News, Clients, Contacts, Jobs)
app.get('/api/public-data', (req, res) => {
  const db = getDb();
  const { users, ...publicData } = db;
  res.json(publicData);
});

// Update Contacts
app.put('/api/contacts', authenticateToken, (req, res) => {
  const db = getDb();
  db.contacts = req.body;
  saveDb(db);
  res.json(db.contacts);
});

// News CRUD
app.get('/api/news', (req, res) => {
  const db = getDb();
  res.json(db.news);
});
app.post('/api/news', authenticateToken, upload.single('image'), (req, res) => {
  const db = getDb();
  const newItem = {
    id: Date.now(),
    ...req.body,
    image: req.file ? `/uploads/${req.file.filename}` : null
  };
  db.news.push(newItem);
  saveDb(db);
  res.json(newItem);
});
app.delete('/api/news/:id', authenticateToken, (req, res) => {
  const db = getDb();
  db.news = db.news.filter((item: any) => item.id !== parseInt(req.params.id));
  saveDb(db);
  res.json({ success: true });
});

// Clients CRUD
app.get('/api/clients', (req, res) => {
  const db = getDb();
  res.json(db.clients);
});
app.post('/api/clients', authenticateToken, upload.single('logo'), (req, res) => {
  const db = getDb();
  const newItem = {
    id: Date.now(),
    name: req.body.name,
    logo: req.file ? `/uploads/${req.file.filename}` : null
  };
  db.clients.push(newItem);
  saveDb(db);
  res.json(newItem);
});
app.delete('/api/clients/:id', authenticateToken, (req, res) => {
  const db = getDb();
  db.clients = db.clients.filter((item: any) => item.id !== parseInt(req.params.id));
  saveDb(db);
  res.json({ success: true });
});

// Jobs CRUD (for CVs/Careers)
app.get('/api/jobs', (req, res) => {
  const db = getDb();
  res.json(db.jobs);
});
app.post('/api/jobs', authenticateToken, (req, res) => {
  const db = getDb();
  const newItem = {
    id: Date.now(),
    ...req.body
  };
  db.jobs.push(newItem);
  saveDb(db);
  res.json(newItem);
});
app.delete('/api/jobs/:id', authenticateToken, (req, res) => {
  const db = getDb();
  db.jobs = db.jobs.filter((item: any) => item.id !== parseInt(req.params.id));
  saveDb(db);
  res.json({ success: true });
});

// Upload CV (Public)
app.post('/api/upload-cv', upload.single('cv'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  
  const db = getDb();
  const application = {
    id: Date.now(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    cvPath: `/uploads/${req.file.filename}`,
    date: new Date().toISOString()
  };
  
  if (!db.applications) db.applications = [];
  db.applications.push(application);
  saveDb(db);
  
  res.json({ message: 'Application received successfully', id: application.id });
});

// Get Applications (Admin)
app.get('/api/applications', authenticateToken, (req, res) => {
  const db = getDb();
  res.json(db.applications || []);
});

// Settings (Logo, etc.)
app.get('/api/settings', (req, res) => {
  const db = getDb();
  res.json(db.settings || {});
});

app.post('/api/settings', authenticateToken, upload.fields([{ name: 'logo', maxCount: 1 }, { name: 'heroImage', maxCount: 1 }]), (req, res) => {
  const db = getDb();
  if (!db.settings) db.settings = {};
  
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  if (files && files['logo']) {
    db.settings.logo = `/uploads/${files['logo'][0].filename}`;
  }
  if (files && files['heroImage']) {
    db.settings.heroImage = `/uploads/${files['heroImage'][0].filename}`;
  }
  
  if (req.body.heroSubtitle) {
    db.settings.heroSubtitle = req.body.heroSubtitle;
  }

  if (!db.settings.stats) db.settings.stats = {};
  if (req.body.stats_countries) db.settings.stats.countries = req.body.stats_countries;
  if (req.body.stats_projects) db.settings.stats.projects = req.body.stats_projects;
  if (req.body.stats_safety) db.settings.stats.safety = req.body.stats_safety;
  if (req.body.stats_engineers) db.settings.stats.engineers = req.body.stats_engineers;
  if (req.body.stats_support) db.settings.stats.support = req.body.stats_support;
  
  saveDb(db);
  res.json(db.settings);
});


// Vite Middleware
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
