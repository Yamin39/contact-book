
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/hooks/use-toast";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, signOut, loading } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/32e92af5-4414-4483-849c-f89a5b3edd5d.png" 
                    alt="Contact Book" 
                    className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#4678f3]">Contact Book</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/lovable-uploads/32e92af5-4414-4483-849c-f89a5b3edd5d.png" 
                  alt="Contact Book" 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#4678f3]">Contact Book</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "relative text-gray-700 hover:text-[#4678f3] px-3 py-2 text-sm font-medium transition-all duration-300 group",
                  isActive(item.href) && "text-[#4678f3] font-semibold"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-[#4678f3] transition-transform duration-300 origin-left",
                  isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )}></span>
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button variant="ghost" asChild className="text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 transition-all duration-300">
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="ghost" asChild className="text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 transition-all duration-300">
                  <Link to="/profile">Profile</Link>
                </Button>
                <Button variant="outline" size="sm" onClick={handleSignOut} className="border-[#4678f3] text-[#4678f3] hover:bg-[#4678f3] hover:text-white transition-all duration-300">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild className="text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 transition-all duration-300">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-[#4678f3] transition-colors duration-300">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300",
                  isActive(item.href) ? "text-[#4678f3] bg-[#4678f3]/10" : "text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-200">
              {user ? (
                <>
                  <Link to="/dashboard" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
                    Profile
                  </Link>
                  <button
                    className="block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 rounded-lg transition-all duration-300"
                    onClick={() => {
                      handleSignOut();
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-[#4678f3] hover:bg-[#4678f3]/5 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
                    Login
                  </Link>
                  <Link to="/signup" className="block px-3 py-3 text-base font-medium text-[#4678f3] hover:text-[#4678f3]/80 hover:bg-[#4678f3]/5 rounded-lg transition-all duration-300" onClick={() => setIsOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
