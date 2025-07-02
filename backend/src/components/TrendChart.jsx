// import React from "react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   CartesianGrid
// } from "recharts";

// const TrendChart = ({ trends }) => {
//   return (
//     <div className="mt-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {Object.entries(trends).map(([parameter, data]) => (
//           <div
//             key={parameter}
//             className="bg-white border border-gray-200 rounded-lg shadow p-4"
//           >
//             <h4 className="text-md font-semibold text-blue-700 mb-2">
//               {parameter}
//             </h4>
//             <ResponsiveContainer width="100%" height={200}>
//               <LineChart data={data}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="date" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="#2563EB"
//                   strokeWidth={2}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrendChart;

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

const TrendChart = ({ trends }) => {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📈 Lab Parameter Trends
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {Object.entries(trends).map(([parameter, data], index) => (
          <motion.div
            key={parameter}
            className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h4 className="text-lg font-semibold text-blue-700 mb-2 flex items-center">
              <span className="mr-2">🧪</span> {parameter}
            </h4>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ fontSize: '14px', borderRadius: '8px' }}
                  formatter={(value) => [`${value}`, 'Value']}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#2563EB"
                  strokeWidth={2.5}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrendChart;
