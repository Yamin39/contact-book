
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User, Bell, Search, Users, ArrowRight, CheckCircle, Star } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: User,
      title: "Easy Contact Management",
      description: "Add, edit, and organize your contacts with an intuitive interface designed for efficiency."
    },
    {
      icon: Search,
      title: "Instant Search",
      description: "Find any contact in milliseconds with our advanced search and filtering system."
    },
    {
      icon: Bell,
      title: "Real-time Updates",
      description: "All changes sync instantly across devices with enterprise-grade reliability."
    },
    {
      icon: Users,
      title: "Secure & Private",
      description: "Bank-level encryption protects your data with zero-knowledge architecture."
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users" },
    { number: "2M+", label: "Contacts Managed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      content: "Contact Book transformed how we manage client relationships. The interface is beautiful and incredibly fast.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sales Manager",
      company: "GrowthCo",
      content: "Finally, a contact manager that actually works. Clean, fast, and reliable. Couldn't be happier.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Entrepreneur",
      company: "StartupXYZ",
      content: "The search functionality is game-changing. I can find anyone in my network instantly.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 opacity-50" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234678f3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#4678f3]/10 text-[#4678f3] text-sm font-medium mb-8 animate-scale-in">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 50,000+ professionals worldwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your Contacts,{" "}
              <span className="text-[#4678f3] relative">
                Beautifully
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 150 0 298 10" stroke="#4678f3" strokeWidth="3" strokeLinecap="round" className="animate-pulse"/>
                </svg>
              </span>{" "}
              Organized
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              The modern contact manager that grows with you. Simple, secure, and always accessible. 
              Transform how you manage your professional and personal connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="text-lg px-10 py-4 bg-[#4678f3] hover:bg-[#4678f3]/90 text-white transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group">
                <Link to="/signup">
                  Get Started Free
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="text-lg px-10 py-4 border-2 border-gray-300 hover:border-[#4678f3] hover:text-[#4678f3] transition-all duration-300">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#4678f3]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-[#4678f3]/20 rounded-lg transform rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#4678f3]/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="text-3xl md:text-4xl font-bold text-[#4678f3] mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to manage contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for modern professionals who value simplicity, efficiency, and beautiful design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#4678f3] rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4678f3] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by professionals worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying about Contact Book
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#4678f3] relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Ready to get organized?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-in" style={{animationDelay: '0.1s'}}>
            Join thousands of professionals who trust Contact Book to manage their connections effortlessly.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg px-10 py-4 bg-white text-[#4678f3] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Link to="/signup">Start Your Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
