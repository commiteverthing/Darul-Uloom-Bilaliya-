export default function Donate() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mt-2">Donate</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Support our students with your generous contributions</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* Expenditure Cards */}
        <section className="opacity-0 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
            <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-6">Average Expenditure Per Student</h2>
            <div className="flex justify-center gap-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl px-10 py-6 border border-emerald-100 card-hover transition-all duration-300">
                <span className="block text-emerald-600 text-sm uppercase tracking-wide mb-2">Monthly</span>
                <span className="text-3xl font-bold text-gray-900">Rs. 4,000</span>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl px-10 py-6 border border-emerald-100 card-hover transition-all duration-300">
                <span className="block text-emerald-600 text-sm uppercase tracking-wide mb-2">Yearly</span>
                <span className="text-3xl font-bold text-gray-900">Rs. 48,000</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4 max-w-xl mx-auto">Covers education, training, accommodation, meals, and daily necessities — all provided free of cost to students.</p>
          </div>
        </section>

        {/* Appeal */}
        <section className="opacity-0 animate-fade-in-up stagger-1">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl border border-emerald-200 p-8 text-center shadow-lg">
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              We humbly request generous donors to consider the needs of the institution and support it with their sincere contributions, and also encourage their friends and acquaintances to do the same. <strong>May Allah accept your support and grant you the best reward in both worlds.</strong>
            </p>
          </div>
        </section>

        {/* Bank Accounts */}
        <section>
          <h2 className="text-2xl font-bold text-black mb-6 text-center opacity-0 animate-fade-in-up stagger-2">Bank Transfer Details</h2>

          {/* QR Codes Side by Side */}
          <div className="grid md:grid-cols-2 gap-6 mb-6 opacity-0 animate-fade-in-up stagger-2">
            {/* Imdad via QR */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-4">Imdad (via QR)</h3>
              <div className="bg-gray-50 rounded-xl w-48 h-48 flex items-center justify-center mx-auto border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm text-center">QR Code<br/>Coming Soon</p>
              </div>
            </div>

            {/* Zakat via QR */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
              <h3 className="text-lg font-bold text-black mb-4">Zakat (via QR)</h3>
              <div className="bg-gray-50 rounded-xl w-48 h-48 flex items-center justify-center mx-auto border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-sm text-center">QR Code<br/>Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Zakat Bank */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100 opacity-0 animate-fade-in-up stagger-3">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-semibold">Zakat</span>
              Bank Transfer
            </h3>
            <div className="space-y-3">
              {[
                { acc: '1501 0101 0000 1756', ifsc: 'JAKADEXPORT' },
                { acc: '0346 0101 0000 5792', ifsc: 'JAKAOBOTSHA' },
              ].map((bank, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-purple-200 transition-all">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">Account</span>
                    <p className="text-lg font-mono font-bold text-black">{bank.acc}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">IFSC Code</span>
                    <p className="text-lg font-mono font-bold text-gray-900">{bank.ifsc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imdad Bank */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100 opacity-0 animate-fade-in-up stagger-4">
            <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-semibold">Imdad</span>
              Bank Transfer
            </h3>
            <div className="space-y-3">
              {[
                { acc: '1501 0101 0000 0283', ifsc: 'JAKAGEXPORT' },
                { acc: '1501 0101 0000 0284', ifsc: 'JAKACEXPORT' },
              ].map((bank, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-emerald-200 transition-all">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">Account</span>
                    <p className="text-lg font-mono font-bold text-black">{bank.acc}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wide block">IFSC Code</span>
                    <p className="text-lg font-mono font-bold text-gray-900">{bank.ifsc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="opacity-0 animate-fade-in-up stagger-5">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h2 className="text-xl font-bold text-black mb-2 text-center">Contact for Donations</h2>
            <p className="text-gray-500 text-center mb-6">You may also contact the office by phone, and a representative can be sent to you.</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Phone Numbers
                </h3>
                <div className="space-y-1 text-gray-600">
                  <p>9419018978</p>
                  <p>7006774464</p>
                  <p>7780969812</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-black mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Darul-Uloom Bilaliya<br />
                  Ahmada Kadal, Lal Bazar<br />
                  & Ashrafabad, Khimber, Srinagar<br />
                  <span className="text-sm">Ph: 0194-2420536, 9419018978</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
