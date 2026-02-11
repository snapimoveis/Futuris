import React, { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      console.log("Form Submitted", formState);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-8">{t.contact.title}</h1>
            <p className="text-zinc-400 mb-12 leading-relaxed">
              {t.contact.intro}
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-sm text-corporate-accent mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.details.headquarters}</h4>
                  <p className="text-zinc-400 text-sm">Polígono Industrial Zona Franca,<br />Carrer D, 08040 Barcelona, España</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-sm text-corporate-accent mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.details.phone}</h4>
                  <p className="text-zinc-400 text-sm">+34 93 123 45 67 ({t.contact.details.mainOffice})</p>
                  <p className="text-zinc-400 text-sm">+34 900 00 00 00 ({t.contact.details.support247})</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-sm text-corporate-accent mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{t.contact.details.email}</h4>
                  <p className="text-zinc-400 text-sm">info@futuris.corp</p>
                  <p className="text-zinc-400 text-sm">careers@futuris.corp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-corporate-gray p-8 md:p-10 border border-zinc-800 rounded-sm">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-900/30 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <Send size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.successTitle}</h3>
                <p className="text-zinc-400">{t.contact.form.success}</p>
                <button onClick={() => setStatus('idle')} className="mt-8 text-sm text-corporate-accent hover:underline">{t.contact.form.reset}</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                    {t.contact.form.name}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-corporate-accent transition-colors placeholder-zinc-700"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                    {t.contact.form.email}
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-corporate-accent transition-colors placeholder-zinc-700"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2 font-semibold">
                    {t.contact.form.message}
                  </label>
                  <textarea 
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-zinc-900 border border-zinc-700 text-white px-4 py-3 focus:outline-none focus:border-corporate-accent transition-colors placeholder-zinc-700"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-white text-corporate-black font-bold py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? t.contact.form.sending : t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;