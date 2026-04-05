import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAdminAuthenticated } from '../lib/auth';

export default function withAuth(WrappedComponent) {
  return function ProtectedRoute(props) {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      if (!isAdminAuthenticated()) {
        router.replace('/admin/login');
      } else {
        setChecking(false);
      }
    }, []);

    if (checking) {
      return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-emerald-600 border-t-transparent mx-auto"></div>
            <p className="text-gray-500 mt-4 text-sm">Verifying access...</p>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
}
