
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, Eye, EyeOff, ArrowLeft } from "lucide-react";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const [passToggle, setPassToggle] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await signIn(formData.email, formData.password);

      if (error) {
        toast({
          title: "Login failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Welcome back!",
          description: "You have successfully logged in.",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234678f3" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative max-w-md w-full mx-4">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 animate-scale-in">
            <img 
              src="/lovable-uploads/32e92af5-4414-4483-849c-f89a5b3edd5d.png" 
              alt="Contact Book" 
              className="w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Welcome back</h1>
          <p className="text-gray-600 text-lg">Sign in to your Contact Book account</p>
        </div>

        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/95 animate-fade-in" style={{animationDelay: '0.1s'}}>
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-gray-900">Sign In</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300"
                  placeholder="your.email@example.com"
                  disabled={loading}
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    name="password"
                    type={passToggle ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="h-12 pr-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#4678f3] focus:outline-none transition-colors duration-300"
                    onClick={() => setPassToggle(!passToggle)}
                    tabIndex={-1}
                    disabled={loading}
                  >
                    {passToggle ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-12 bg-[#4678f3] hover:bg-[#4678f3]/90 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl" 
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>

            <div className="mt-8 text-center space-y-4">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-[#4678f3] hover:text-[#4678f3]/80 font-medium transition-colors duration-300">
                  Sign up for free
                </Link>
              </p>
              
              <Link 
                to="/" 
                className="inline-flex items-center text-sm text-gray-500 hover:text-[#4678f3] transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
