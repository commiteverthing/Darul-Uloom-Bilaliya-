import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import { getStudents, getNotifications, getSiteStats } from '../../lib/admin';
import withAuth from '../../components/withAuth';

function AdminDashboard() {
  const [stats, setStats] = useState(null);
  const [recentNotifs, setRecentNotifs] = useState([]);
  const [totalStudents, setTotalStudents] = useState(0);

  useEffect(() => {
    const s = getSiteStats();
    setStats(s);
    setRecentNotifs(getNotifications().slice(0, 3));
    setTotalStudents(getStudents().length);
  }, []);

  if (!stats) return null;

  const quickLinks = [
    { label: 'Add Notification', href: '/admin/notifications', color: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/20' },
    { label: 'Manage Students', href: '/admin/students', color: 'from-emerald-500 to-emerald-600', shadow: 'shadow-emerald-500/20' },
    { label: 'Edit Content', href: '/admin/content', color: 'from-purple-500 to-purple-600', shadow: 'shadow-purple-500/20' },
    { label: 'Site Settings', href: '/admin/settings', color: 'from-gray-600 to-gray-700', shadow: 'shadow-gray-500/20' },
  ];

  return (
    <AdminLayout>
      <div className="page-enter">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h1>
          <p className="text-gray-500 mt-1">Here&apos;s an overview of your institution</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Students', value: stats.totalStudents, icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z' },
            { label: 'Teachers', value: stats.totalTeachers, icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
            { label: 'Huffaz Graduated', value: stats.huffazGraduated, icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 002.693.806 3.42 3.42 0 013.747 2.347 3.42 3.42 0 00.273 1.274 3.42 3.42 0 010 4.818 3.42 3.42 0 00-.273 1.274 3.42 3.42 0 01-3.747 2.347 3.42 3.42 0 00-2.693.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-2.693-.806 3.42 3.42 0 01-3.747-2.347 3.42 3.42 0 00-.273-1.274 3.42 3.42 0 010-4.818 3.42 3.42 0 00.273-1.274 3.42 3.42 0 013.747-2.347z' },
            { label: 'Notifications', value: getNotifications().length, icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 stat-card opacity-0 animate-fade-in-up" style={{ animationDelay: `${0.05 + i * 0.08}s` }}>
              <div className="bg-emerald-100 w-10 h-10 rounded-lg flex items-center justify-center text-emerald-600 mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{card.label}</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">{card.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 opacity-0 animate-fade-in-up stagger-4">
          {quickLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className={`bg-gradient-to-r ${link.color} text-white p-6 rounded-xl shadow-lg ${link.shadow} hover:shadow-xl transition-all hover:-translate-y-1`}
            >
              <p className="font-semibold text-lg">{link.label}</p>
              <p className="text-white/70 text-sm mt-1">Click to manage</p>
            </a>
          ))}
        </div>

        {/* Recent Notifications */}
        <div className="bg-white rounded-xl shadow overflow-hidden opacity-0 animate-fade-in-up stagger-5">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Recent Notifications</h2>
              <p className="text-sm text-gray-400">Latest announcements on the website</p>
            </div>
            <a href="/admin/notifications" className="text-sm text-emerald-600 font-semibold hover:underline">Manage All</a>
          </div>
          {recentNotifs.length > 0 ? (
            <div className="divide-y divide-gray-50">
              {recentNotifs.map((item) => (
                <div key={item.id} className="px-6 py-4 flex items-start gap-3">
                  {item.urgent && (
                    <span className="relative flex h-2.5 w-2.5 mt-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-12 text-center text-gray-400">No notifications yet.</div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

export default withAuth(AdminDashboard);
