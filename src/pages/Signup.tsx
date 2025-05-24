
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { Loader2, Eye, EyeOff, ArrowLeft, CheckCircle } from "lucide-react";

const Signup = () => {
  const { signUp, user } = useAuth();
  const [passToggle, setPassToggle] = useState(false);
  const [confirmPassToggle, setConfirmPassToggle] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    navigate("/dashboard");
    return null;
  }

  const benefits = [
    "Unlimited contact storage",
    "Real-time sync across devices",
    "Advanced search & filtering",
    "Secure data encryption"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms required",
        description: "Please agree to the terms of service to continue.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await signUp(formData.email, formData.password, formData.name);

      if (error) {
        toast({
          title: "Signup failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Account created successfully!",
          description: "Your account has been created. Please login to start managing your contacts.",
        });
        navigate("/login");
      }
    } catch (error) {
      toast({
        title: "Signup failed",
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
      
      <div className="relative max-w-4xl w-full mx-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Benefits */}
        <div className="text-center lg:text-left animate-fade-in">
          <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 animate-scale-in">
            <img 
              src="/lovable-uploads/32e92af5-4414-4483-849c-f89a5b3edd5d.png" 
              alt="Contact Book" 
              className="w-full h-full transition-transform duration-300 hover:scale-110"
            />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join{" "}
            <span className="text-[#4678f3]">Contact Book</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Start organizing your contacts like never before. Join thousands of professionals who trust Contact Book.
          </p>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center lg:justify-start animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CheckCircle className="w-5 h-5 text-[#4678f3] mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <Card className="border-0 shadow-2xl backdrop-blur-sm bg-white/95 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl font-bold text-gray-900">Create Your Account</CardTitle>
            <p className="text-gray-600">Get started with your free account today</p>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 h-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300"
                  placeholder="Your full name"
                  disabled={loading}
                />
              </div>
              
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
                    placeholder="Create a strong password"
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
              
              <div>
                <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={confirmPassToggle ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="h-12 pr-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300"
                    placeholder="Confirm your password"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#4678f3] focus:outline-none transition-colors duration-300"
                    onClick={() => setConfirmPassToggle(!confirmPassToggle)}
                    tabIndex={-1}
                    disabled={loading}
                  >
                    {confirmPassToggle ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start space-x-3 py-2">
                <Checkbox
                  id="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToTerms: !!checked }))}
                  disabled={loading}
                  className="mt-1"
                />
                <Label htmlFor="agreeToTerms" className="text-sm text-gray-600 leading-relaxed">
                  I agree to the{" "}
                  <Link to="/terms" className="text-[#4678f3] hover:text-[#4678f3]/80 transition-colors duration-300">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-[#4678f3] hover:text-[#4678f3]/80 transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </Label>
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
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-4">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-[#4678f3] hover:text-[#4678f3]/80 font-medium transition-colors duration-300">
                  Sign in here
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

export default Signup;
