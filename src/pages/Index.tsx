
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Bell, Search, Users } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: User,
      title: "Easy Contact Management",
      description: "Add, edit, and organize your contacts with a simple and intuitive interface."
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Find any contact instantly with our powerful search functionality."
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "All changes are synced in real-time across all your devices."
    },
    {
      icon: Users,
      title: "Secure & Private",
      description: "Your contacts are encrypted and stored securely with enterprise-grade security."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Contacts,{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Beautifully Organized
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The modern contact book that grows with you. Simple, secure, and always accessible. 
              Manage your professional and personal contacts with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/signup">Get Started Free</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Cards Animation */}
        <div className="absolute top-20 left-10 w-64 h-32 bg-white rounded-lg shadow-lg opacity-20 transform rotate-12 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg opacity-20 transform -rotate-12 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for modern professionals who value simplicity and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to get organized?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who trust ContactBook to manage their connections.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-3">
            <Link to="/signup">Start Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
