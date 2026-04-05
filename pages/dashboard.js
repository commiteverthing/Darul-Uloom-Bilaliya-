export default function Dashboard() {
  const studentInfo = {
    name: 'Abdul Qadir',
    studentId: 'DUB-2025-001',
    program: 'Hifz Program',
    since: '2023',
  };

  const results = [
    { subject: 'Quran Memorization (Hifz)', grade: 'A+', marks: '95/100' },
    { subject: 'Quran Recitation (Tajweed)', grade: 'A', marks: '90/100' },
    { subject: 'Hadith Studies', grade: 'A-', marks: '87/100' },
    { subject: 'Fiqh', grade: 'B+', marks: '82/100' },
    { subject: 'Arabic Language', grade: 'A', marks: '91/100' },
  ];

  const attendance = [
    { month: 'December 2025', days: 24, total: 26, pct: 92 },
    { month: 'January 2026', days: 23, total: 24, pct: 96 },
    { month: 'February 2026', days: 22, total: 24, pct: 92 },
    { month: 'March 2026', days: 25, total: 25, pct: 100 },
    { month: 'April 2026', days: 1, total: 1, pct: 100 },
  ];

  const complaints = [
    { date: '2026-03-15', subject: 'Library book request', status: 'Open' },
    { date: '2026-02-20', subject: 'Uniform replacement', status: 'Resolved' },
  ];

  const announcements = [
    { date: '2026-04-05', title: 'Monthly assessment begins next week', urgent: true },
    { date: '2026-04-01', title: 'Guest lecture by Mufti Sahib on Friday', urgent: false },
    { date: '2026-03-25', title: 'Ramadan schedule update for students', urgent: false },
  ];

  const overallAttendance = attendance.reduce((sum, m) => sum + m.pct, 0) / attendance.length;
  const topGrade = results[0].grade;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-5">
              <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                {studentInfo.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">Assalamu Alaikum, {studentInfo.name}</h1>
                <p className="text-emerald-100 text-sm">{studentInfo.program} · {studentInfo.studentId}</p>
              </div>
            </div>
            <div className="md:text-right text-sm text-emerald-200">
              <p>Since {studentInfo.since}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Overall Attendance</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{Math.round(overallAttendance)}%</p>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${overallAttendance}%` }}></div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Top Grade</p>
            <p className="text-2xl font-bold text-emerald-600 mt-1">{topGrade}</p>
            <p className="text-xs text-gray-400 mt-1">Quran Hifz</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Subjects</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{results.length}</p>
            <p className="text-xs text-gray-400 mt-1">Active</p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <p className="text-xs text-gray-500 uppercase tracking-wide">Open Requests</p>
            <p className="text-2xl font-bold text-orange-600 mt-1">{complaints.filter(c => c.status === 'Open').length}</p>
            <p className="text-xs text-gray-400 mt-1">{complaints.length} total</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Results */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Academic Results</h2>
              <p className="text-sm text-gray-400">Current semester performance</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
                    <th className="text-left px-6 py-3">Subject</th>
                    <th className="text-center px-6 py-3">Marks</th>
                    <th className="text-center px-6 py-3">Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i} className="border-t border-gray-50 hover:bg-gray-50">
                      <td className="px-6 py-3 font-medium text-gray-900">{r.subject}</td>
                      <td className="px-6 py-3 text-center text-gray-600">{r.marks}</td>
                      <td className="px-6 py-3 text-center">
                        <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold">{r.grade}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attendance */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Attendance</h2>
              <p className="text-sm text-gray-400">Monthly attendance record</p>
            </div>
            <div className="p-6 space-y-4">
              {attendance.map((m, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium text-gray-700">{m.month}</div>
                  <div className="flex-1">
                    <div className="w-full bg-gray-100 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${m.pct >= 95 ? 'bg-emerald-500' : m.pct >= 90 ? 'bg-amber-500' : 'bg-red-500'}`}
                        style={{ width: `${m.pct}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold w-12 text-right ${
                    m.pct >= 95 ? 'text-emerald-600' : m.pct >= 90 ? 'text-amber-600' : 'text-red-600'
                  }`}>{m.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Announcements</h2>
              <p className="text-sm text-gray-400">Latest updates from the office</p>
            </div>
            <div className="divide-y divide-gray-50">
              {announcements.map((item, i) => (
                <div key={i} className="px-6 py-4 flex items-start gap-3">
                  {item.urgent && (
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-0.5 rounded-full shrink-0">Urgent</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Complaints & Requests</h2>
                <p className="text-sm text-gray-400">Track your submissions</p>
              </div>
              <button className="text-sm text-emerald-600 font-semibold hover:underline">+ New</button>
            </div>
            <div className="divide-y divide-gray-50">
              {complaints.map((item, i) => (
                <div key={i} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.subject}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    item.status === 'Resolved'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-orange-50 text-orange-700'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
