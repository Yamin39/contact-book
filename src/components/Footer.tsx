
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/32e92af5-4414-4483-849c-f89a5b3edd5d.png" 
                alt="Contact Book" 
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-gray-900">
                Contact Book
              </span>
            </div>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed mb-6">
              The modern way to organize and manage your contacts. Simple, secure, and always accessible.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#4678f3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#4678f3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#4678f3] hover:text-white transition-all duration-300 cursor-pointer">
                <span className="text-sm font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  About
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-[#4678f3] transition-colors duration-300 text-lg">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <p className="text-gray-600 text-lg">
              © 2024 Contact Book. All rights reserved.
            </p>
            <p className="text-gray-500 mt-4 md:mt-0">
              Made with ❤️ for better connections
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
