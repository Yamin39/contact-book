
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { User, Plus, Search, Bell } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      title: "Sign Up",
      description: "Create your free account in seconds. No credit card required.",
      details: "Simply provide your email and password to get started. Your account is secured with enterprise-grade encryption."
    },
    {
      icon: Plus,
      title: "Add Contacts",
      description: "Import existing contacts or add new ones with our intuitive interface.",
      details: "Add names, phone numbers, emails, and notes. Our smart forms make data entry quick and error-free."
    },
    {
      icon: Search,
      title: "Organize & Search",
      description: "Find any contact instantly with our powerful search functionality.",
      details: "Search by name, company, email, or any field. Advanced filters help you organize contacts by groups or tags."
    },
    {
      icon: Bell,
      title: "Stay Synced",
      description: "Access your contacts anywhere with real-time synchronization.",
      details: "Changes sync instantly across all your devices. Your contacts are always up-to-date, whether on desktop or mobile."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234678f3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              How{" "}
              <span className="text-[#4678f3] relative">
                It Works
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 150 0 298 10" stroke="#4678f3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started with Contact Book is simple. Follow these four easy steps 
              to transform how you manage your contacts.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-10">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#4678f3] rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <span className="w-8 h-8 bg-[#4678f3]/10 text-[#4678f3] rounded-full flex items-center justify-center text-sm font-bold mr-4">
                          {index + 1}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-4 font-medium text-lg">
                        {step.description}
                      </p>
                      <p className="text-gray-500 leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Unlimited contact storage</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Real-time synchronization</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Advanced search and filtering</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Secure data encryption</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Mobile-responsive design</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-[#4678f3] rounded-full mr-4"></div>
                    <span className="text-lg">Export and backup options</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Security & Privacy</h2>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Your contacts are precious, and we treat them that way. Contact Book uses 
                  enterprise-grade security measures to protect your data.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-lg">End-to-end encryption</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-lg">GDPR compliant</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-lg">Regular security audits</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                    <span className="text-lg">No data selling, ever</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4678f3] relative overflow-hidden">
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join thousands of users who have simplified their contact management with Contact Book.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-4 bg-white text-[#4678f3] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
            <Link to="/signup">Create Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
