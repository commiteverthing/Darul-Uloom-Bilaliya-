import { useState, useEffect } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getStudents, saveStudents, storage } from '../../lib/admin';

export default function AdminStudents() {
  const [students, setStudents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: '', studentId: '', program: 'Hifz Program', year: '', phone: '', status: 'Active' });
  const [search, setSearch] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => { setStudents(getStudents()); }, []);

  const triggerSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const openAdd = () => {
    setEditingId(null);
    setForm({ name: '', studentId: '', program: 'Hifz Program', year: '', phone: '', status: 'Active' });
    setShowForm(true);
  };

  const openEdit = (s) => {
    setEditingId(s.id);
    setForm({ name: s.name, studentId: s.studentId, program: s.program, year: s.year, phone: s.phone, status: s.status });
    setShowForm(true);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.studentId.trim()) return;
    let updated;
    if (editingId) {
      updated = students.map((s) => s.id === editingId ? { ...s, ...form } : s);
    } else {
      updated = [{ id: storage.generateId(), ...form }, ...students];
    }
    setStudents(updated);
    saveStudents(updated);
    setShowForm(false);
    triggerSave();
  };

  const handleDelete = (id) => {
    const updated = students.filter((s) => s.id !== id);
    setStudents(updated);
    saveStudents(updated);
  };

  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.studentId.toLowerCase().includes(search.toLowerCase()) ||
      s.program.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="page-enter">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Students</h1>
            <p className="text-gray-500 text-sm mt-1">Manage student records</p>
          </div>
          <button
            onClick={openAdd}
            className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20"
          >
            + Add Student
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, ID, or program..."
            className="w-full sm:w-80 px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900 text-sm"
          />
        </div>

        {saved && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 rounded-xl mb-4 animate-fade-in-up">
            Saved successfully!
          </div>
        )}

        {/* Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-scale-in">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">
                  {editingId ? 'Edit Student' : 'Add Student'}
                </h2>
                <button onClick={() => setShowForm(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                  <input type="text" value={form.studentId} onChange={(e) => setForm({ ...form, studentId: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" placeholder="DUB-2025-XXX" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                    <select value={form.program} onChange={(e) => setForm({ ...form, program: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900">
                      <option>Hifz Program</option>
                      <option>Alim Course</option>
                      <option>Qirat Program</option>
                      <option>Fiqh Studies</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                    <input type="text" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" placeholder="2025" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="text" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-900">
                    <option>Active</option>
                    <option>Suspended</option>
                    <option>Graduated</option>
                  </select>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
                <button onClick={() => setShowForm(false)} className="px-5 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-100 transition-all">Cancel</button>
                <button onClick={handleSave} className="bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all">{editingId ? 'Update' : 'Add Student'}</button>
              </div>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          {filtered.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <th className="text-left px-6 py-3">Name</th>
                    <th className="text-left px-6 py-3">ID</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Program</th>
                    <th className="text-left px-6 py-3 hidden md:table-cell">Year</th>
                    <th className="text-center px-6 py-3">Status</th>
                    <th className="text-center px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s) => (
                    <tr key={s.id} className="border-t border-gray-50 hover:bg-gray-50 transition-all">
                      <td className="px-6 py-4 font-medium text-gray-900">{s.name}</td>
                      <td className="px-6 py-4 text-gray-500 font-mono text-xs">{s.studentId}</td>
                      <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{s.program}</td>
                      <td className="px-6 py-4 text-gray-600 hidden md:table-cell">{s.year}</td>
                      <td className="px-6 py-4 text-center">
                        <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                          s.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                          s.status === 'Graduated' ? 'bg-blue-50 text-blue-700' :
                          'bg-red-50 text-red-700'
                        }`}>{s.status}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center gap-1">
                          <button onClick={() => openEdit(s)} className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                          </button>
                          <button onClick={() => handleDelete(s.id)} className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="px-6 py-12 text-center text-gray-400">
              <p className="text-lg">{search ? 'No students found.' : 'No students yet.'}</p>
              {!search && <p className="text-sm mt-1">Click &quot;+ Add Student&quot; to add the first student.</p>}
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
