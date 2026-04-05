import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLang } from '../contexts/LanguageContext';

export default function Login() {
  const router = useRouter();
  const { t } = useLang();
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: wire up real authentication
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-8 py-8 text-center">
            <img
              src="/assets/images/logo.png"
              alt="Darul Uloom Bilaliya"
              className="h-20 w-20 object-cover rounded-full mx-auto mb-3 ring-4 ring-white/30 shadow-lg"
            />
            <h1 className="text-2xl font-bold text-white">{t('login.title')}</h1>
            <p className="text-emerald-100/80 text-sm mt-1">{t('login.subtitle')}</p>
          </div>

          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div>
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1.5">{t('login.student_id')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 start-0 ps-4 flex items-center pointer-events-none rtl:right-0 rtl:left-auto rtl:pl-0 rtl:pr-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="studentId"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. DUB-2025-001"
                  required
                  className="w-full ps-11 pe-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">{t('login.password')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none rtl:right-0 rtl:left-auto rtl:pl-0 rtl:pr-4">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full ps-11 pe-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-gray-900 placeholder-gray-400 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 bg-gray-200 rounded peer-checked:bg-emerald-500 peer-focus:ring-2 peer-focus:ring-emerald-300 transition-colors flex items-center justify-center">
                    {rememberMe && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">{t('login.remember')}</span>
              </label>
              <a href="#" className="text-sm text-emerald-600 font-medium hover:text-emerald-700 hover:underline">{t('login.forgot')}</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white py-3 rounded-xl font-semibold transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {t('login.submit')}
            </button>
          </form>

          <div className="px-8 pb-8 pt-0 text-center">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-600 mb-1">{t('login.help')}</p>
              <p className="text-xs text-gray-400">Ph: 0194-2420536 / 9419018978</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">Darul Uloom Bilaliya</p>
      </div>
    </div>
  );
}
