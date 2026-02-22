import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('news');
  const [news, setNews] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [jobs, setJobs] = useState<any[]>([]);
  const [applications, setApplications] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any>({ address: '', phone: '', email: '' });
  const [settings, setSettings] = useState<any>({ logo: null });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    const headers = { 'Authorization': `Bearer ${localStorage.getItem('token')}` };
    try {
      const newsRes = await fetch('/api/news', { headers });
      const clientsRes = await fetch('/api/clients', { headers });
      const jobsRes = await fetch('/api/jobs', { headers });
      const appsRes = await fetch('/api/applications', { headers });
      const settingsRes = await fetch('/api/settings');
      
      const publicDataRes = await fetch('/api/public-data');
      const publicData = await publicDataRes.json();

      if (newsRes.ok) setNews(await newsRes.json());
      if (clientsRes.ok) setClients(await clientsRes.json());
      if (jobsRes.ok) setJobs(await jobsRes.json());
      if (appsRes.ok) setApplications(await appsRes.json());
      if (settingsRes.ok) setSettings(await settingsRes.json());
      if (publicData.contacts) setContacts(publicData.contacts);

    } catch (err) {
      console.error("Failed to fetch data", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  // --- Handlers for Forms ---

  const handleUpdateContacts = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await fetch('/api/contacts', {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(contacts)
    });
    alert('¡Contactos actualizados!');
  };

  // News Handlers
  const handleAddNews = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = localStorage.getItem('token');
    
    const res = await fetch('/api/news', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    if (res.ok) {
      fetchData();
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleDeleteNews = async (id: number) => {
    if (!confirm('¿Estás seguro?')) return;
    const token = localStorage.getItem('token');
    await fetch(`/api/news/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchData();
  };

  // Clients Handlers
  const handleAddClient = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = localStorage.getItem('token');
    
    const res = await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    if (res.ok) {
      fetchData();
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleDeleteClient = async (id: number) => {
    if (!confirm('¿Estás seguro?')) return;
    const token = localStorage.getItem('token');
    await fetch(`/api/clients/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchData();
  };

  // Jobs Handlers
  const handleAddJob = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const token = localStorage.getItem('token');
    
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(data)
    });
    if (res.ok) {
      fetchData();
      (e.target as HTMLFormElement).reset();
    }
  };

  const handleDeleteJob = async (id: number) => {
    if (!confirm('¿Estás seguro?')) return;
    const token = localStorage.getItem('token');
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    fetchData();
  };

  // Settings Handlers
  const handleUpdateSettings = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const token = localStorage.getItem('token');
    
    const res = await fetch('/api/settings', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      body: formData
    });
    if (res.ok) {
      alert('¡Configuración actualizada!');
      fetchData();
    }
  };

  const tabs = [
    { id: 'news', label: 'Noticias' },
    { id: 'clients', label: 'Clientes' },
    { id: 'jobs', label: 'Empleos' },
    { id: 'contacts', label: 'Contactos' },
    { id: 'applications', label: 'Candidaturas' },
    { id: 'settings', label: 'Configuración' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">Panel de Administración</h1>
        <button onClick={handleLogout} className="text-red-600 hover:text-red-800">Cerrar Sesión</button>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="col-span-3 bg-white rounded-lg shadow p-4 h-fit">
          <ul className="space-y-2">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left px-4 py-2 rounded ${activeTab === tab.id ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="col-span-9 bg-white rounded-lg shadow p-8">
          {activeTab === 'contacts' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Editar Contactos</h2>
              <form onSubmit={handleUpdateContacts} className="space-y-4 max-w-lg">
                <div>
                  <label className="block text-sm font-medium mb-1">Dirección</label>
                  <input
                    type="text"
                    value={contacts.address}
                    onChange={e => setContacts({...contacts, address: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Teléfono</label>
                  <input
                    type="text"
                    value={contacts.phone}
                    onChange={e => setContacts({...contacts, phone: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Correo Electrónico</label>
                  <input
                    type="text"
                    value={contacts.email}
                    onChange={e => setContacts({...contacts, email: e.target.value})}
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar Cambios</button>
              </form>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Candidaturas de Empleo</h2>
              <ul className="space-y-4">
                {applications.map((app: any) => (
                  <li key={app.id} className="border p-4 rounded bg-white">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-bold text-lg">{app.firstName} {app.lastName}</div>
                        <div className="text-gray-600">{app.email}</div>
                        <div className="text-sm text-gray-400 mt-1">{new Date(app.date).toLocaleString('es-ES')}</div>
                      </div>
                      <a 
                        href={app.cvPath} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
                      >
                        Descargar CV
                      </a>
                    </div>
                  </li>
                ))}
                {applications.length === 0 && <p className="text-gray-500 italic">Aún no se han recibido candidaturas.</p>}
              </ul>
            </div>
          )}

          {activeTab === 'news' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Gestionar Noticias</h2>
              
              {/* Add News Form */}
              <form onSubmit={handleAddNews} className="mb-8 p-6 bg-gray-50 rounded border space-y-4">
                <h3 className="font-semibold text-lg">Añadir Noticia</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input name="title" placeholder="Título" required className="border p-2 rounded w-full" />
                  <input name="category" placeholder="Categoría" required className="border p-2 rounded w-full" />
                </div>
                <input name="excerpt" placeholder="Extracto" required className="border p-2 rounded w-full" />
                <input name="date" type="date" required className="border p-2 rounded w-full" />
                <input name="image" type="file" accept="image/*" className="border p-2 rounded w-full" />
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Añadir Noticia</button>
              </form>

              <ul className="space-y-4">
                {news.map((item: any) => (
                  <li key={item.id} className="border p-4 rounded flex justify-between items-center bg-white">
                    <div className="flex items-center gap-4">
                      {item.image && <img src={item.image} alt="" className="w-12 h-12 object-cover rounded" />}
                      <div>
                        <div className="font-bold">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.date} - {item.category}</div>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteNews(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Eliminar</button>
                  </li>
                ))}
                {news.length === 0 && <p className="text-gray-500 italic">No se encontraron noticias.</p>}
              </ul>
            </div>
          )}

          {activeTab === 'clients' && (
             <div>
              <h2 className="text-2xl font-bold mb-6">Gestionar Clientes</h2>
              
              {/* Add Client Form */}
              <form onSubmit={handleAddClient} className="mb-8 p-6 bg-gray-50 rounded border space-y-4">
                <h3 className="font-semibold text-lg">Añadir Cliente</h3>
                <div className="flex gap-4">
                  <input name="name" placeholder="Nombre del Cliente" required className="border p-2 rounded flex-1" />
                  <input name="logo" type="file" accept="image/*" className="border p-2 rounded flex-1" />
                </div>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Añadir Cliente</button>
              </form>

              <ul className="grid grid-cols-2 gap-4">
                {clients.map((item: any) => (
                  <li key={item.id} className="border p-4 rounded flex justify-between items-center bg-white">
                    <div className="flex items-center gap-3">
                      {item.logo ? (
                        <img src={item.logo} alt={item.name} className="h-8 w-auto object-contain" />
                      ) : (
                        <span className="font-bold text-gray-400">{item.name}</span>
                      )}
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <button onClick={() => handleDeleteClient(item.id)} className="text-red-500 hover:text-red-700 text-sm">Eliminar</button>
                  </li>
                ))}
                 {clients.length === 0 && <p className="col-span-2 text-gray-500 italic">No se encontraron clientes.</p>}
              </ul>
            </div>
          )}

           {activeTab === 'jobs' && (
             <div>
              <h2 className="text-2xl font-bold mb-6">Gestionar Empleos</h2>
              
              {/* Add Job Form */}
              <form onSubmit={handleAddJob} className="mb-8 p-6 bg-gray-50 rounded border space-y-4">
                <h3 className="font-semibold text-lg">Añadir Oferta de Empleo</h3>
                <div className="grid grid-cols-3 gap-4">
                  <input name="title" placeholder="Título del Puesto" required className="border p-2 rounded w-full" />
                  <input name="location" placeholder="Ubicación" required className="border p-2 rounded w-full" />
                  <input name="type" placeholder="Tipo (ej. Jornada Completa)" required className="border p-2 rounded w-full" />
                </div>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Añadir Empleo</button>
              </form>

              <ul className="space-y-4">
                {jobs.map((item: any) => (
                  <li key={item.id} className="border p-4 rounded flex justify-between items-center bg-white">
                    <div>
                      <div className="font-bold">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.location} • {item.type}</div>
                    </div>
                    <button onClick={() => handleDeleteJob(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Eliminar</button>
                  </li>
                ))}
                 {jobs.length === 0 && <p className="text-gray-500 italic">No se encontraron empleos.</p>}
              </ul>
            </div>
          )}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Configuración del Sitio</h2>
              <form onSubmit={handleUpdateSettings} className="space-y-6 max-w-lg">
                <div className="bg-gray-50 p-6 rounded border">
                  <h3 className="font-semibold mb-4">Logotipo</h3>
                  {settings.logo && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Logotipo Actual:</p>
                      <img src={settings.logo} alt="Current Logo" className="h-16 w-auto object-contain bg-gray-200 p-2 rounded" />
                    </div>
                  )}
                  <label className="block text-sm font-medium mb-1">Subir Nuevo Logotipo</label>
                  <input name="logo" type="file" accept="image/*" className="border p-2 rounded w-full bg-white" />
                </div>

                <div className="bg-gray-50 p-6 rounded border">
                  <h3 className="font-semibold mb-4">Imagen Principal</h3>
                  {settings.heroImage && (
                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Imagen Principal Actual:</p>
                      <img src={settings.heroImage} alt="Current Hero" className="h-32 w-auto object-cover bg-gray-200 p-2 rounded" />
                    </div>
                  )}
                  <label className="block text-sm font-medium mb-1">Subir Nueva Imagen Principal</label>
                  <input name="heroImage" type="file" accept="image/*" className="border p-2 rounded w-full bg-white" />
                </div>

                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Guardar Configuración</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
