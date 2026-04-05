import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getContactInfo, saveContactInfo, getNotifications, saveNotifications } from '../../lib/admin';

export default function AdminContent() {
  const [contact, setContact] = useState(null);
  const [hero, setHero] = useState({
    subtitle: '',
    description: '',
  });
  const [saved, setSaved] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  useEffect(() => {
    setContact(getContactInfo());
    const rawNotifications = localStorage.getItem('dub-admin-site-content');
    if (rawNotifications) {
      setHero(JSON.parse(rawNotifications));
    } else {
      setHero({
        subtitle: 'A place of knowledge, devotion, and the pursuit of Islamic excellence',
        description: 'Nurturing minds and hearts in the light of the Quran and Sunnah.',
        admissionOpen: false,
      });
    }
  }, []);

  const triggerSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const handleSave = () => {
    localStorage.setItem('dub-admin-site-content', JSON.stringify(hero));
    saveContactInfo(contact);
    triggerSave();
  };

  if (!contact) return null;

  return (
    <AdminLayout>
      <div className="page-enter">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Content</h1>
            <p className="text-gray-500 text-sm mt-1">Edit website text, contact info, and hero section</p>
          </div>
          <button
            onClick={handleSave}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            Save Changes
          </button>
        </div>

        {saved && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 animate-fade-in-up">
            Saved successfully!
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Hero Section */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-semibold">Home</span>
              Hero Section
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={hero.subtitle}
                  onChange={(e) => setHero({ ...hero, subtitle: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={hero.description}
                  onChange={(e) => setHero({ ...hero, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Admission Settings */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold">Admission</span>
              Status
            </h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-50 rounded-xl">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={hero.admissionOpen}
                    onChange={(e) => setHero({ ...hero, admissionOpen: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-300 transition-colors"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow peer-checked:translate-x-5 transition-transform"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Admissions Open</p>
                  <p className="text-xs text-gray-500">Show admissions banner on homepage</p>
                </div>
              </label>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-100 lg:col-span-2">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-semibold">Footer</span>
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Primary Phone</span>
                  <input type="text" value={contact.phone1 || ''} onChange={(e) => setContact({ ...contact, phone1: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Phone 2</span>
                  <input type="text" value={contact.phone2 || ''} onChange={(e) => setContact({ ...contact, phone2: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </label>
              </div>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Phone 3</span>
                  <input type="text" value={contact.phone3 || ''} onChange={(e) => setContact({ ...contact, phone3: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Phone 4</span>
                  <input type="text" value={contact.phone4 || ''} onChange={(e) => setContact({ ...contact, phone4: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </label>
              </div>
              <div className="md:col-span-2">
                <label className="block">
                  <span className="text-sm font-medium text-gray-700 mb-1 block">Address</span>
                  <textarea value={contact.address || ''} onChange={(e) => setContact({ ...contact, address: e.target.value })} rows={2} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 resize-none" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
