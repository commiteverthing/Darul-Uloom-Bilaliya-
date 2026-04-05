import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getNotifications, saveNotifications, storage } from '../../lib/admin';

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: '', desc: '', urgent: false });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setNotifications(getNotifications());
  }, []);

  const triggerSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const openAdd = () => {
    setEditingId(null);
    setForm({ title: '', desc: '', urgent: false });
    setShowForm(true);
  };

  const openEdit = (notif) => {
    setEditingId(notif.id);
    setForm({ title: notif.title, desc: notif.desc, urgent: notif.urgent });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.title.trim()) return;
    let updated;
    if (editingId) {
      updated = notifications.map((n) =>
        n.id === editingId ? { ...n, ...form } : n
      );
    } else {
      updated = [
        {
          id: storage.generateId(),
          date: new Date().toISOString().split('T')[0],
          ...form,
        },
        ...notifications,
      ];
    }
    setNotifications(updated);
    saveNotifications(updated);
    setShowForm(false);
    setForm({ title: '', desc: '', urgent: false });
    triggerSave();
  };

  const handleDelete = (id) => {
    const updated = notifications.filter((n) => n.id !== id);
    setNotifications(updated);
    saveNotifications(updated);
  };

  return (
    <AdminLayout>
      <div className="page-enter">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-500 text-sm mt-1">Push, edit, or remove website announcements</p>
          </div>
          <button
            onClick={openAdd}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            + New Notification
          </button>
        </div>

        {saved && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-6 animate-fade-in-up">
            Saved successfully!
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-scale-in">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  {editingId ? 'Edit Notification' : 'New Notification'}
                </h2>
                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="Enter notification title..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    value={form.desc}
                    onChange={(e) => setForm({ ...form, desc: e.target.value })}
                    placeholder="Enter details..."
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 resize-none"
                  />
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.urgent}
                    onChange={(e) => setForm({ ...form, urgent: e.target.checked })}
                    className="w-4 h-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="text-sm text-gray-700">Mark as urgent</span>
                </label>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
                <button
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
                >
                  {editingId ? 'Update' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Notification List */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {notifications.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {notifications.map((item) => (
                <div key={item.id} className="px-6 py-4 flex items-start gap-4 hover:bg-gray-50 transition-all">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                      {item.urgent && (
                        <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full font-semibold">Urgent</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
                    <p className="text-xs text-gray-400 mt-2">{item.date}</p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => openEdit(item)}
                      className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all"
                      title="Edit"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                      title="Delete"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-16 text-center text-gray-400">
              <p className="text-lg">No notifications yet.</p>
              <p className="text-sm mt-1">Click &quot;+ New Notification&quot; to push your first announcement.</p>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
