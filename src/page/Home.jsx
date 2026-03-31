import React from "react";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
      
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          🚀 Dashboard
        </h1>

        <div className="space-y-4">
          
          <Link
            to="/fariz"
            className="block bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
          >
            Ke Fariz
          </Link>

          <Link
            to="/fahmi"
            className="block bg-green-500 text-white py-2 rounded-xl hover:bg-green-600 transition"
          >
            Ke Fahmi
          </Link>

          <Link
            to="/bagas"
            className="block bg-purple-500 text-white py-2 rounded-xl hover:bg-purple-600 transition"
          >
            Ke Bagas
          </Link>

        </div>

      </div>
    </div>
  );
}

export default App;