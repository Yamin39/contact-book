
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="animate-fade-in">
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="text-9xl font-bold text-[#4678f3] mb-4">404</div>
            <div className="w-32 h-32 bg-[#4678f3]/10 rounded-full flex items-center justify-center mx-auto">
              <div className="w-16 h-16 bg-[#4678f3]/20 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#4678f3] rounded-full"></div>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Oops! Page not found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild 
              className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="border-2 border-gray-300 hover:border-[#4678f3] hover:text-[#4678f3] px-8 py-3 text-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
