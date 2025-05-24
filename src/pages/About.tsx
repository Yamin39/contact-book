
import { Card, CardContent } from "@/components/ui/card";
import { User, Bell, Search, Users, Target, Heart, Shield, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're dedicated to simplifying how people organize and access their professional networks."
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Every feature is designed with our users' needs and feedback at the center of our decisions."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your data belongs to you. We implement industry-leading security to keep it that way."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly push boundaries to deliver the best contact management experience."
    }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      description: "Former product lead at major tech companies with 10+ years in user experience design."
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      description: "Security expert and full-stack engineer passionate about building scalable, secure systems."
    },
    {
      name: "Michael Chen",
      role: "Head of Design",
      description: "Award-winning designer focused on creating beautiful, intuitive user experiences."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%234678f3" fill-opacity="0.03"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              About{" "}
              <span className="text-[#4678f3] relative">
                Contact Book
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 150 0 298 10" stroke="#4678f3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that managing contacts should be simple, secure, and beautiful. 
              That's why we built Contact Book - the modern solution for today's connected world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-[#4678f3] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  To simplify how people organize and access their professional and personal connections. 
                  We're building tools that help you maintain meaningful relationships in an increasingly connected world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-[#4678f3] rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  A world where managing contacts is effortless, secure, and accessible from anywhere. 
                  We envision Contact Book as the bridge that connects people to their networks seamlessly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Contact Book?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on principles that put users first and technology second
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="w-20 h-20 bg-[#4678f3] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#4678f3] transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Passionate professionals dedicated to building the future of contact management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-[#4678f3]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <User className="w-12 h-12 text-[#4678f3]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#4678f3] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#4678f3] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Journey</h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Whether you're a busy professional, entrepreneur, or someone who values staying connected, 
            Contact Book adapts to your needs. We're constantly evolving based on user feedback to 
            create the best possible experience for managing your contacts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
