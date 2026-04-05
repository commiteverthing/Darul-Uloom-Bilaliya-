export default function Admission() {
  return (
    <div className="min-h-screen bg-gray-50 page-enter">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="relative text-center py-16 px-4">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mt-2">Admission</h1>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">Begin your journey of Islamic scholarship</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
        {/* Admission Process */}
        <section className="opacity-0 animate-fade-in-up stagger-1">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-8">Admission Process</h2>
            <div className="space-y-0">
              {[
                {
                  num: '1',
                  text: 'Submit the completed admission application form along with required documents.',
                },
                {
                  num: '2',
                  text: 'Attend an introductory interview or assessment session scheduled by the seminary.',
                },
                {
                  num: '3',
                  text: 'Receive the admission decision and enrollment confirmation via email or phone.',
                },
                {
                  num: '4',
                  text: 'Complete registration by paying the applicable fees and attending the orientation.',
                },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-5 pb-6 last:pb-0">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full w-10 h-10 flex items-center justify-center shrink-0 text-lg font-bold shadow-lg shadow-emerald-500/20">
                    {step.num}
                  </div>
                  <div className="pt-2">
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                    {i < 3 && (
                      <div className="w-0.5 h-6 bg-emerald-200 mx-auto mt-2 ml-5 -translate-x-1/2 hidden"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Dates */}
        <section className="opacity-0 animate-fade-in-up stagger-2">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-black mb-6">Important Dates</h2>
            <div className="space-y-3">
              {[
                { label: 'Application Period Opens', value: 'To Be Announced' },
                { label: 'Application Deadline', value: 'To Be Announced' },
                { label: 'Assessment / Interview', value: 'To Be Announced' },
                { label: 'Orientation Day', value: 'To Be Announced' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 hover:border-emerald-200 transition-all">
                  <span className="font-medium text-black">{item.label}</span>
                  <span className="text-gray-500 text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="opacity-0 animate-fade-in-up stagger-3">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100 card-hover transition-all duration-300">
            <div className="bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center text-emerald-600 mx-auto mb-5">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-black mb-3">Application Form</h2>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              The online application form will be available here soon.
            </p>
            <div className="bg-gray-50 rounded-xl p-12 border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-lg">Coming Soon</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
