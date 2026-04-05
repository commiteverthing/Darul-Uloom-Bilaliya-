export default function Error({ statusCode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-black">{statusCode || 500}</h1>
        <p className="text-gray-500 mt-4 text-lg">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
        <a href="/" className="mt-6 inline-block text-emerald-600 hover:underline">
          Back to Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
