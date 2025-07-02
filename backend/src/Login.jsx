// import React, { useState } from "react";
// import { login } from "./Api";

// const Login = ({ setToken }) => {
//   const [username, setUsername] = useState("");   // State for username input
//   const [password, setPassword] = useState("");   // State for password input

//   const handleLogin = async () => {                           // Function to handle login
//     try {
//       const token = await login(username, password);
//       setToken(token);                                          // Set the token in the parent component
//       localStorage.setItem("authToken", token);
//     } catch (err) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
//         <h1 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h1>

//         <input
//           className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//           onClick={handleLogin}
//         >
//           Log In
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Login;
 
import React, { useState } from "react";
import { login } from "./Api";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      setToken(token);
      localStorage.setItem("authToken", token);
    } catch {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5E5D7] via-[#E8C4A8] to-[#DFA16A] relative overflow-hidden">
      {/* Background elements matching card's earthy tones */}
      <div className="absolute w-72 h-72 bg-[#A15A3E] opacity-20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
      <div className="absolute w-72 h-72 bg-[#7F3D27] opacity-20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

      {/* Deco elements for earthy feel */}
      <div className="absolute top-20 left-20 w-40 h-40 opacity-10">
        <img src="https://placehold.co/160/7F3D27/F5E5D7?text=Leaf+Pattern" alt="Decorative leaf pattern" />
      </div>
      <div className="absolute bottom-20 right-20 w-40 h-40 opacity-10">
        <img src="https://placehold.co/160/7F3D27/F5E5D7?text=Leaf+Pattern" alt="Decorative leaf pattern" />
      </div>

      <motion.div
        className="z-10 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="form rounded-md shadow-xl overflow-hidden relative cursor-pointer py-5 px-6 bg-[#DFA16A] flex flex-col items-center justify-center gap-3 transition-all duration-300 border-2 border-[#7F3D27]">
          <p className="text-[#A15A3E] translate-x-[46%] -rotate-90 tracking-[20px] transition-all hover:translate-x-[50%] -translate-y-1/2 font-semibold text-2xl absolute right-0">
            Welcome
          </p>

          <div className="capitalize">
            <motion.h1
              className="text-4xl font-bold text-center text-[#7F3D27] tracking-wide"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              MediScan AI
            </motion.h1>

            <p className="text-center text-[#7F3D27] text-sm pb-4">
              Log in to analyze your reports
            </p>

            <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
              <div className="flex flex-col items-start w-full">
                <label htmlFor="username" className="text-sm text-[#7F3D27] font-semibold">Username</label>
                <div className="relative w-full">
                  <FaUser className="absolute left-3 top-3 text-[#7F3D27]" />
                  <input
                    type="text"
                    placeholder="Enter Your Username"
                    className="w-full pl-10 py-1 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start w-full">
                <label htmlFor="password" className="text-sm text-[#7F3D27] font-semibold">Password</label>
                <div className="relative w-full">
                  <FaLock className="absolute left-3 top-3 text-[#7F3D27]" />
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="w-full pl-10 py-1 bg-transparent outline-none focus:ring-0 border-0 border-b-2 border-[#7F3D27] placeholder:text-[#A15A3E] focus:outline-none text-[#7F3D27] placeholder:text-xs"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="inline-flex gap-2 items-center text-[#A15A3E] pt-1">
                <input
                  type="checkbox"
                  className="w-3 h-3 focus:border-0 focus:outline-none focus:accent-[#7F3D27] checked:accent-[#A15A3E] checked:text-[#A15A3E] px-1 py-1"
                  checked
                />
                <p className="text-xs">
                  By Signing Agree with
                  <span className="font-semibold"> Term & Policy</span>
                </p>
              </div>

              <div className="inline-flex gap-5 pt-2">
                <motion.button
                  className="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all text-[#F5E5D7] bg-[#7F3D27] shadow-[#7F3D27] shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                >
                  Log In
                </motion.button>
                <button
                  className="px-6 focus:outline-none focus:scale-110 font-semibold text-xs py-2 rounded-[5px] hover:scale-110 transition-all text-[#7F3D27] bg-[#F5E5D7] shadow-[#7F3D27] shadow-lg"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="text-xs text-center text-[#7F3D27] pt-4">
          Your reports. Your AI insights. Instantly.
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
