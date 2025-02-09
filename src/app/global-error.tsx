"use client";

const GlobalError: React.FC<{ error: string; reset: () => void }> = ({
  error,
  reset,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-red-100 bg-opacity-75">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h2 className="text-xl font-bold text-red-600 mb-4">
          An Error Occurred
        </h2>
        <p className="text-gray-700 mb-4">{error}</p>
        <button
          onClick={reset}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default GlobalError;
