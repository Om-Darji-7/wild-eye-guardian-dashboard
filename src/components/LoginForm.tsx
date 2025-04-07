
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import Logo from "./Logo";
import { toast } from "sonner";

const LoginForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Mock authentication - in production, this would call an API
    toast.success(isLogin ? "Logged in successfully" : "Account created successfully");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 px-6 lg:px-8 bg-gradient-to-b from-[#C1E1C1] to-[#4CAF50]">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-white">
          {isLogin ? "Sign in to Wild Eye" : "Create your account"}
        </h2>
        <p className="mt-2 text-center text-sm text-green-100">
          {isLogin
            ? "Enter your credentials to access the dashboard"
            : "Join us in monitoring and protecting wildlife"}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-6 bg-white/10 backdrop-blur-sm border border-white/20 shadow rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-green-700/30 rounded-md shadow-sm placeholder-green-700/50 focus:outline-none focus:ring-green-500 focus:border-green-500 bg-white/20 text-white sm:text-sm"
                  placeholder="ranger@wildeye.org"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-green-700/30 rounded-md shadow-sm placeholder-green-700/50 focus:outline-none focus:ring-green-500 focus:border-green-500 bg-white/20 text-white sm:text-sm"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-green-200 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <div className="text-sm">
                  <a href="#" className="font-medium text-green-200 hover:text-white">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-green-900 bg-green-200 hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 focus:ring-offset-green-800"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-green-700/30"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-green-800/30 backdrop-blur-sm text-green-100">
                  {isLogin ? "New to Wild Eye?" : "Already have an account?"}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-white/20 rounded-md shadow-sm text-sm font-medium text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-300 focus:ring-offset-green-800"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Create a new account" : "Sign in to your account"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
