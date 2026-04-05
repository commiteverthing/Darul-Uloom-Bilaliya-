export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(5, 150, 105, 0.2) 0%, transparent 50%)'
          }}></div>
        </div>
        <div className="relative text-center py-16 px-4">
          <h2 className="text-4xl font-arabic text-emerald-300/90 mb-4">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mt-2">About Darul Uloom Bilaliya</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">A legacy of Islamic education, character building, and community service in Jammu & Kashmir</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">

        {/* Introduction */}
        <section className="opacity-0 animate-fade-in-up stagger-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100 card-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Darul Uloom Bilaliya is one of the well-known Islamic institutions of Jammu & Kashmir. Established on 25th Shawwal 1411 AH, it is now progressing through its 36th year of journey. Around 875 students reside here for the memorization of the Holy Qur&apos;an and other Prophetic sciences (PBUH). Their education, training, accommodation, meals, and other daily necessities are provided completely free of cost.
            </p>
          </div>
        </section>

        {/* Staff & Students - Stats Grid */}
        <section className="opacity-0 animate-fade-in-up stagger-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gray-100 p-2 rounded-lg">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-black">Staff & Administration</h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-8">
              To ensure proper education, training, and administration, dedicated teachers and staff members remain actively engaged at all times.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '875', label: 'Students', color: 'emerald' },
                { value: '72', label: 'Teachers', color: 'emerald' },
                { value: '38', label: 'Staff', color: 'emerald' },
                { value: '36', label: 'Years', color: 'emerald' },
              ].map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center card-hover border border-gray-200/50">
                  <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 mt-2 text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graduates */}
        <section className="opacity-0 animate-fade-in-up stagger-3">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl shadow-lg p-8 md:p-10 border border-emerald-100">
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-emerald-200/50 p-2 rounded-lg">
                <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Graduates Serving the Ummah</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-8">
              Since its establishment, the institution has proudly produced distinguished scholars who are serving the Ummah in various capacities.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '583', label: 'Huffaz-e-Kiram' },
                { value: '150', label: 'Qurra-e-Ezam' },
                { value: '193', label: 'Ulama-e-Kiram' },
                { value: '92', label: 'Muftiyan-e-Kiram' },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center card-hover shadow-sm border border-emerald-100/50 opacity-0 animate-scale-in" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                  <p className="text-4xl font-bold text-emerald-600">{stat.value}</p>
                  <p className="text-gray-500 mt-2 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="opacity-0 animate-fade-in-up stagger-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To nurture students with authentic Islamic knowledge based on the Quran and Sunnah, along with sound Arabic language skills and good character, so they become beneficial members of society who carry the message of Islam with wisdom and understanding.
              </p>
            </div>
          </section>

          <section className="opacity-0 animate-fade-in-up stagger-5">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 h-full card-hover transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-black">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be a leading institution for Islamic education that produces knowledgeable and principled individuals who contribute positively to their communities and uphold the values of Islam with sincerity and integrity.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
