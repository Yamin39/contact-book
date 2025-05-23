
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              It Works
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with ContactBook is simple. Follow these four easy steps 
            to transform how you manage your contacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-3 font-medium">
                      {step.description}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.details}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Unlimited contact storage
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Real-time synchronization
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Advanced search and filtering
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Secure data encryption
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Mobile-responsive design
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Export and backup options
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security & Privacy</h2>
              <p className="text-gray-600 mb-4">
                Your contacts are precious, and we treat them that way. ContactBook uses 
                enterprise-grade security measures to protect your data.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  End-to-end encryption
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  GDPR compliant
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  Regular security audits
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  No data selling, ever
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6">
              Join thousands of users who have simplified their contact management with ContactBook.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
              <Link to="/signup">Create Your Free Account</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
