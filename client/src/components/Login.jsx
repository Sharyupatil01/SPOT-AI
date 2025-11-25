import React, { useState } from "react";

// --- START: Self-Contained SVG Icons (Replaced external react-icons) ---

// Icon for Google (Replaced FcGoogle)
const GoogleIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 533.5 544.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M515.366 261.432c0-18.74-1.5-37.126-4.238-55H269.48v104.72h140.09c-6.173 35.811-26.685 66.86-57.873 87.206l-.513 3.336 85.558 66.175 4.195.405c52.417-48.47 82.853-118.89 82.853-206.84zm-245.886 211.58c66.307 0 122.18-21.92 162.775-59.544l-85.558-66.175c-23.714 15.932-54.026 25.46-77.217 25.46-59.516 0-110.42-40.7-128.536-95.845h-4.04v68.804l4.04.385c39.998 79.16 120.375 132.895 232.086 132.895z"
    />
    <path
      fill="#34A853"
      d="M140.942 334.298c-4.482-12.222-7.058-25.26-7.058-38.648 0-13.388 2.576-26.426 7.058-38.648v-68.804l-4.04.385c-44.59 87.69-44.59 191.242 0 278.932l4.04-.385v-68.804z"
    />
    <path
      fill="#FBBC05"
      d="M269.48 107.58c32.483 0 62.067 11.884 85.066 34.621l75.52-75.52c-46.61-43.2-109.863-70.1-160.586-70.1-111.71 0-192.088 53.735-232.086 132.895l4.04.385 128.536 95.845c18.117-55.145 69.02-95.845 128.536-95.845z"
    />
    <path
      fill="#EA4335"
      d="M515.366 261.432c0-18.74-1.5-37.126-4.238-55H269.48v104.72h140.09c-6.173 35.811-26.685 66.86-57.873 87.206l-.513 3.336 85.558 66.175 4.195.405c52.417-48.47 82.853-118.89 82.853-206.84z"
      transform="translate(0, 0) scale(1, 1)"
    />
  </svg>
);

// Icon for Email (Replaced MdOutlineMarkEmailRead)
const EmailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,14 2,6" />
  </svg>
);

// Icon for Lock Closed (Replaced IoLockClosedOutline)
const LockClosedIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// Icon for Arrow Left (Back Button) - KEPT
const ArrowLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 19-7-7 7-7" /><path d="M19 12H5" />
  </svg>
);

// Icon for Clock (Custom Scenario Simulation) - KEPT
const ClockIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

// Icon for Shield (Instant Expert Feedback) - KEPT
const ShieldIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

// Icon for Globe (Actionable Progress Tracking) - KEPT
const GlobeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 0 4 10c0 1.2-1 2.5-3 3s-4 0-6-2c0 0-1 0-1 0-2-2-3-3.5-3-5 0-2.3 1.5-4 4-5.5" />
  </svg>
);

// --- END: Self-Contained SVG Icons ---


export default function Login({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Integrate auth later
    setView("dashboard"); // Navigate after login
  };

  const handleGoogleLogin = () => {
    console.log("Google Login clicked");
    // Implement Google OAuth logic here
    setView("dashboard");
  };

  // Helper component for the professional feature list (matches inspiration layout)
  const FeatureItem = ({ IconComponent, title, description }) => (
    <div 
      className="
        flex flex-col space-y-1.5 mb-8 p-3 rounded-xl 
        transition-all duration-300 hover:bg-white/5 cursor-default
      "
    >
      <div className="flex items-center space-x-3 mb-1">
        <IconComponent className="w-7 h-7 text-blue-400" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 text-sm pl-10 leading-relaxed">{description}</p>
    </div>
  );


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 font-sans p-0">
      <div
        className="
          w-full h-screen flex flex-col lg:flex-row
          
        "
      >
        {/* Left Side: Why Spot AI? (Glassmorphic Panel 1) */}
        <div
          className="
            lg:w-1/2 p-12 flex flex-col justify-center
            bg-gray-900/60 backdrop-blur-xl
            lg:border-r border-white/10
          "
        >
          <div className="max-w-md mx-auto w-full">
            <h1 className="text-4xl font-extrabold text-blue-400 leading-tight mb-12">
              Why <span className="text-white">Spot AI</span>? 
            </h1>
          
            <FeatureItem
              IconComponent={ClockIcon}
              title="Custom Scenario Simulation"
              description="Practice interviews based on real job descriptions and behavioral frameworks. Schedule your practice sessions securely."
            />
            <FeatureItem
              IconComponent={ShieldIcon}
              title="Instant Expert Feedback"
              description="Get immediate analysis on your communication structure, tonal confidence, pace, and domain-specific content mastery."
            />
            <FeatureItem
              IconComponent={GlobeIcon}
              title="Access Anywhere"
              description="Retrieve your progress reports and practice sessions from any device, anywhere in the world. Your digital coach is always accessible."
            />
          </div>
        </div>
        
        {/* Right Side: Login Form (Glassmorphic Panel 2) */}
        <div
          className="
            lg:w-1/2 p-12 flex flex-col justify-center
            bg-gray-800/60 backdrop-blur-xl
          "
        >
          <div className="max-w-sm mx-auto w-full">
            {/* Header (Matching Inspiration) */}
            <div className="mb-10">
              <button onClick={() => setView("home")} className="text-blue-400 hover:text-blue-300 transition focus:outline-none">
                <ArrowLeftIcon className="w-6 h-6 inline mr-2" />
              </button>
              <h2 className="text-3xl font-bold text-white mt-2">Welcome Back</h2>
              <p className="text-gray-400 text-sm mt-1">
                Sign in to access your secure interview coach
              </p>
            </div>


            {/* Inputs */}
            <div className="space-y-6">
              {/* Email */}
              <div className="relative">
                <label className="block text-sm text-gray-200 mb-2">Email Address</label>
                {/* Replaced MdOutlineMarkEmailRead with EmailIcon */}
                <EmailIcon className="absolute left-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="
                    w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg
                    text-white placeholder-gray-500
                    focus:ring-blue-500 focus:border-blue-500 transition
                  "
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm text-gray-200 mb-2">Password</label>
                {/* Replaced IoLockClosedOutline with LockClosedIcon */}
                <LockClosedIcon className="absolute left-3 top-1/2 mt-1 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="
                    w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg
                    text-white placeholder-gray-500
                    focus:ring-blue-500 focus:border-blue-500 transition
                  "
                />
              </div>
              
              {/* Remember Me / Forgot Password */}
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500" />
                  <label htmlFor="remember-me" className="ml-2 text-gray-400">Remember me</label>
                </div>
                <button className="text-blue-400 hover:text-blue-300 transition">Forgot password?</button>
              </div>


              {/* Login Button (Made lighter blue: 500) */}
              <button
                onClick={handleLogin}
                className="
                  w-full py-3.5 rounded-lg text-lg font-semibold
                  bg-blue-500 border border-blue-400 text-white
                  shadow-lg shadow-blue-500/30
                  hover:bg-blue-600 active:scale-[0.99]
                  transition-all duration-200
                "
              >
                Sign In
              </button>
            </div>

            {/* OR Divider */}
            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-gray-700"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">Or continue with</span>
              <div className="flex-grow border-t border-gray-700"></div>
            </div>

            {/* Login with Google Button (Made smaller and fully rounded) */}
            <button
              onClick={handleGoogleLogin}
              className="
                w-full py-2.5 rounded-full text-base font-semibold
                bg-white text-gray-700 border border-gray-300
                shadow-md hover:shadow-lg active:scale-[0.99]
                transition-all duration-200 flex items-center justify-center space-x-3
              "
            >
              {/* Replaced FcGoogle with GoogleIcon */}
              <GoogleIcon className="h-5 w-5" />
              <span>Sign in with Google</span>
            </button>
            
            {/* Sign up Link */}
            <div className="text-center text-gray-400 pt-8 text-sm">
              Don't have an account? 
              <button
                onClick={() => setView("signup")}
                className="text-blue-400 font-bold ml-1 hover:text-blue-300 transition"
              >
                Sign up here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}