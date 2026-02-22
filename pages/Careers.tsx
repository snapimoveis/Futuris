import React, { useEffect, useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Upload, Briefcase, UserCheck, Clock, MapPin } from 'lucide-react';

const Careers: React.FC = () => {
  const { t } = useLanguage();
  const [file, setFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'uploading' | 'error'>('idle');
  const [jobs, setJobs] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/jobs')
      .then(res => res.json())
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          setJobs(data);
        } else {
          // Fallback
          setJobs([
            { title: t.careers.jobs.mechEng, location: "Barcelona", type: "Full-time" },
            { title: t.careers.jobs.electrician, location: "Lyon, France", type: "Contract" },
            { title: t.careers.jobs.safety, location: "Lisbon, Portugal", type: "Full-time" },
          ]);
        }
      })
      .catch(() => {
          setJobs([
            { title: t.careers.jobs.mechEng, location: "Barcelona", type: "Full-time" },
            { title: t.careers.jobs.electrician, location: "Lyon, France", type: "Contract" },
            { title: t.careers.jobs.safety, location: "Lisbon, Portugal", type: "Full-time" },
          ]);
      });
  }, [t.careers.jobs]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      setStatus('uploading');
      const data = new FormData();
      data.append('cv', file);
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      
      try {
        const res = await fetch('/api/upload-cv', {
          method: 'POST',
          body: data
        });
        
        if (res.ok) {
          setStatus('success');
          setFile(null);
          setFormData({ firstName: '', lastName: '', email: '' });
          setTimeout(() => setStatus('idle'), 3000);
        } else {
          setStatus('error');
        }
      } catch (err) {
        setStatus('error');
      }
    }
  };

  return (
    <div className="pt-24 pb-16">
       <div className="bg-corporate-gray py-16 border-b border-zinc-800 mb-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <h1 className="text-4xl font-bold text-white mb-4">{t.careers.title}</h1>
             <p className="text-zinc-400 text-lg">{t.careers.subtitle}</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {/* Job List */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">{t.careers.openPositions}</h2>
            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-sm hover:border-zinc-600 transition-colors cursor-pointer group">
                   <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-corporate-accent transition-colors">{job.title}</h3>
                      <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded">{job.type}</span>
                   </div>
                   <div className="flex items-center text-zinc-500 text-sm">
                      <MapPin size={14} className="mr-1" /> {job.location}
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-zinc-900/50 p-6 border-l-2 border-corporate-accent">
               <h4 className="text-white font-bold mb-2">{t.careers.whyUs}</h4>
               <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center"><UserCheck size={14} className="mr-2" /> {t.careers.whyUsList.training}</li>
                  <li className="flex items-center"><Briefcase size={14} className="mr-2" /> {t.careers.whyUsList.projects}</li>
                  <li className="flex items-center"><Clock size={14} className="mr-2" /> {t.careers.whyUsList.shifts}</li>
               </ul>
            </div>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">{t.careers.spontaneous}</h2>
            <div className="bg-corporate-gray border border-zinc-800 p-8 rounded-sm">
               {status === 'success' ? (
                 <div className="text-center py-8">
                   <div className="text-green-500 text-xl font-bold mb-2">Application Sent!</div>
                   <p className="text-zinc-400">Thank you for your interest.</p>
                 </div>
               ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-xs uppercase text-zinc-500 mb-2">{t.careers.form.firstName}</label>
                        <input 
                          type="text" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 focus:border-corporate-accent outline-none" 
                        />
                     </div>
                     <div>
                        <label className="block text-xs uppercase text-zinc-500 mb-2">{t.careers.form.lastName}</label>
                        <input 
                          type="text" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 focus:border-corporate-accent outline-none" 
                        />
                     </div>
                  </div>
                  <div>
                      <label className="block text-xs uppercase text-zinc-500 mb-2">{t.careers.form.email}</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 focus:border-corporate-accent outline-none" 
                      />
                  </div>
                  
                  {/* File Upload */}
                  <div>
                    <label className="block text-xs uppercase text-zinc-500 mb-2">{t.careers.form.cv}</label>
                    <div className="relative border-2 border-dashed border-zinc-700 hover:border-corporate-accent transition-colors rounded-sm p-6 text-center">
                       <input 
                          type="file" 
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                       />
                       <Upload className="mx-auto text-zinc-500 mb-2" />
                       <p className="text-sm text-zinc-400 font-medium">{file ? file.name : t.careers.upload}</p>
                       <p className="text-xs text-zinc-600 mt-1">{t.careers.form.fileType}</p>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={!file || status === 'uploading'}
                    className="w-full bg-corporate-accent text-white font-bold py-3 hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'uploading' ? 'Uploading...' : t.careers.apply}
                  </button>
                  {status === 'error' && <p className="text-red-500 text-sm text-center">Upload failed. Please try again.</p>}
               </form>
               )}
            </div>
          </div>
       </div>
    </div>
  );
};

export default Careers;