// import React from "react";

// const ResultTable = ({ data }) => {
//   const total = data.length;
//   const normal = data.filter((r) => r.attention === "Normal").length;
//   const abnormal = data.filter((r) => r.attention === "Needs Attention").length;
//   const critical = 0; // Optional: implement logic for critical if needed

//   return (
//     <div className="mt-10">
//       {/* Summary */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         <div className="bg-blue-50 text-blue-700 border border-blue-200 p-4 rounded shadow">
//           <p className="text-sm font-medium">Total Parameters</p>
//           <p className="text-2xl font-bold">{total}</p>
//         </div>
//         <div className="bg-green-50 text-green-700 border border-green-200 p-4 rounded shadow">
//           <p className="text-sm font-medium">Normal</p>
//           <p className="text-2xl font-bold">{normal}</p>
//         </div>
//         <div className="bg-yellow-50 text-yellow-700 border border-yellow-200 p-4 rounded shadow">
//           <p className="text-sm font-medium">Needs Attention</p>
//           <p className="text-2xl font-bold">{abnormal}</p>
//         </div>
//         <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded shadow">
//           <p className="text-sm font-medium">Critical</p>
//           <p className="text-2xl font-bold">{critical}</p>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg shadow-md">
//           <thead className="text-xs text-gray-100 uppercase bg-blue-600">
//             <tr>
//               <th scope="col" className="px-6 py-3">Parameter</th>
//               <th scope="col" className="px-6 py-3">Value</th>
//               <th scope="col" className="px-6 py-3">Unit</th>
//               <th scope="col" className="px-6 py-3">Reference Range</th>
//               <th scope="col" className="px-6 py-3">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((row, idx) => (
//               <tr
//                 key={idx}
//                 className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
//               >
//                 <td className="px-6 py-4 font-medium whitespace-nowrap">{row.parameter}</td>
//                 <td className="px-6 py-4 font-semibold">{row.value}</td>
//                 <td className="px-6 py-4">{row.unit}</td>
//                 <td className="px-6 py-4">{row.range}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm border ${
//                       row.attention === "Needs Attention"
//                         ? "bg-yellow-100 text-yellow-700 border-yellow-300"
//                         : "bg-green-100 text-green-700 border-green-300"
//                     }`}
//                   >
//                     {row.attention}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ResultTable;
 import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, HeartPulse, AlertTriangle, CircleGauge } from "lucide-react";

const ResultTable = ({ data }) => {
  const [selectedInsight, setSelectedInsight] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const total = data.length;
  const normal = data.filter((r) => r.attention === "Normal").length;
  const abnormal = data.filter((r) => r.attention === "Needs Attention").length;
  const critical = 0; // Placeholder for future logic

  const handleInsightClick = (row) => {
    setSelectedInsight(row);
    setShowModal(true);
  };

  return (
    <div className="mt-12 space-y-10">
      {/* Summary Cards */}
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="bg-white border shadow-lg rounded-xl p-5 flex flex-col items-center text-blue-700">
          <BarChart3 className="w-6 h-6 mb-2" />
          <p className="text-sm">Total Parameters</p>
          <p className="text-2xl font-bold">{total}</p>
        </div>
        <div className="bg-white border shadow-lg rounded-xl p-5 flex flex-col items-center text-green-700">
          <HeartPulse className="w-6 h-6 mb-2" />
          <p className="text-sm">Normal</p>
          <p className="text-2xl font-bold">{normal}</p>
        </div>
        <div className="bg-white border shadow-lg rounded-xl p-5 flex flex-col items-center text-yellow-700">
          <AlertTriangle className="w-6 h-6 mb-2" />
          <p className="text-sm">Needs Attention</p>
          <p className="text-2xl font-bold">{abnormal}</p>
        </div>
        <div className="bg-white border shadow-lg rounded-xl p-5 flex flex-col items-center text-red-700">
          <CircleGauge className="w-6 h-6 mb-2" />
          <p className="text-sm">Critical</p>
          <p className="text-2xl font-bold">{critical}</p>
        </div>
      </motion.div>

      {/* Table Section */}
      <motion.div 
        className="overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <table className="w-full text-sm text-left text-gray-800 border border-gray-200 rounded-lg shadow">
          <thead className="text-xs text-white uppercase bg-blue-600">
            <tr>
              <th className="px-6 py-3">Parameter</th>
              <th className="px-6 py-3">Value</th>
              <th className="px-6 py-3">Unit</th>
              <th className="px-6 py-3">Reference Range</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <motion.tr 
                key={idx} 
                className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleInsightClick(row)} // Click to show insight
              >
                <td className="px-6 py-4 font-medium whitespace-nowrap">{row.parameter}</td>
                <td className="px-6 py-4 font-semibold">{row.value}</td>
                <td className="px-6 py-4">{row.unit}</td>
                <td className="px-6 py-4">{row.range}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full shadow-sm border ${
                      row.attention === "Needs Attention"
                        ? "bg-yellow-100 text-yellow-700 border-yellow-300"
                        : "bg-green-100 text-green-700 border-green-300"
                    }`}
                  >
                    {row.attention}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Modal for AI Insights */}
      {showModal && selectedInsight && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Insight for: <span className="text-blue-600">{selectedInsight.parameter}</span>
            </h2>
            <p className="text-gray-700">Value: {selectedInsight.value}</p>
            <p className="text-gray-700">Unit: {selectedInsight.unit}</p>
            <p className="text-gray-700">Reference Range: {selectedInsight.range}</p>
            <p className="text-gray-700">Status: {selectedInsight.attention}</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default ResultTable;
