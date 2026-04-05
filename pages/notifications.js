export default function Notifications() {
  const notifications = [
    {
      date: '2026-04-05',
      title: 'Monthly assessment begins next week',
      desc: 'All students are informed to prepare for the monthly assessment starting from next Monday.',
      urgent: true,
    },
    {
      date: '2026-04-01',
      title: 'Guest lecture by Mufti Sahib on Friday',
      desc: 'A guest lecture will be delivered by Mufti Sahib after Asr prayer in the main prayer hall.',
      urgent: false,
    },
    {
      date: '2026-03-25',
      title: 'Ramadan schedule update',
      desc: 'The daily schedule for Ramadan has been updated. Please check the new timetable at the office.',
      urgent: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {notifications.length > 0 ? (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center mb-10 opacity-0 animate-fade-in-up">
            <h1 className="text-4xl font-bold text-black">Notifications</h1>
            <p className="text-gray-500 mt-3">Stay updated with the latest announcements</p>
          </div>

          <div className="space-y-4">
            {notifications.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                {item.urgent && (
                  <div className="bg-red-50 border-b border-red-100 px-6 py-2 flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-red-600 text-sm font-semibold">Urgent</span>
                  </div>
                )}
                <div className="px-6 py-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-black">{item.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white text-center py-8 px-4">
          <h1 className="text-4xl font-bold text-black">Notifications</h1>
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="bg-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">No notifications at this time.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
