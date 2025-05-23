
import { Card, CardContent } from "@/components/ui/card";
import { User, Bell, Search, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ContactBook
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that managing contacts should be simple, secure, and beautiful. 
            That's why we built ContactBook - the modern solution for today's connected world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To simplify how people organize and access their professional and personal connections. 
                We're building tools that help you maintain meaningful relationships in an increasingly connected world.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A world where managing contacts is effortless, secure, and accessible from anywhere. 
                We envision ContactBook as the bridge that connects people to their networks seamlessly.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose ContactBook?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">User-Centric Design</h3>
              <p className="text-gray-600 text-sm">Built with your workflow in mind</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Powerful Search</h3>
              <p className="text-gray-600 text-sm">Find anyone instantly</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Sync</h3>
              <p className="text-gray-600 text-sm">Always up to date, everywhere</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600 text-sm">Your data, protected and secure</p>
            </div>
          </div>
        </div>

        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Built for Everyone</h2>
            <p className="text-blue-100 leading-relaxed">
              Whether you're a busy professional, entrepreneur, or someone who values staying connected, 
              ContactBook adapts to your needs. We're constantly evolving based on user feedback to 
              create the best possible experience for managing your contacts.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
