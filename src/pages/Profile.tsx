
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { User, Loader2, LogOut, Settings, Shield, Edit3 } from "lucide-react";

interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

const Profile = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: ""
  });

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchProfile();
  }, [user, navigate]);

  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        toast({
          title: "Error",
          description: "Failed to load profile data.",
          variant: "destructive"
        });
      } else {
        setProfile(data);
        setFormData({
          full_name: data.full_name || "",
          email: user.email || ""
        });
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setUpdating(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          updated_at: new Date().toISOString()
        })
        .eq('id', user.id);

      if (error) {
        toast({
          title: "Update failed",
          description: error.message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Profile updated",
          description: "Your profile has been updated successfully.",
        });
        fetchProfile(); // Refresh profile data
      }
    } catch (error) {
      toast({
        title: "Update failed",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!user) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#4678f3] mx-auto mb-4" />
          <p className="text-gray-600">Loading your profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center animate-fade-in">
            <div className="w-20 h-20 bg-[#4678f3] rounded-full flex items-center justify-center mx-auto mb-6">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Profile{" "}
              <span className="text-[#4678f3] relative">
                Settings
                <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 3 100 1 198 6" stroke="#4678f3" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-600 text-lg">Manage your account information and preferences</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {/* Personal Information */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in">
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  <Edit3 className="w-6 h-6 mr-3 text-[#4678f3]" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="full_name" className="text-gray-700 font-medium text-lg">Full Name</Label>
                      <Input
                        id="full_name"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        className="mt-2 h-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300"
                        placeholder="Enter your full name"
                        disabled={updating}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium text-lg">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        className="mt-2 h-12 border-gray-200 bg-gray-50 cursor-not-allowed"
                        disabled={true}
                        title="Email cannot be changed from this interface"
                      />
                      <p className="text-sm text-gray-500 mt-2">
                        Email cannot be changed from this interface
                      </p>
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    disabled={updating}
                    size="lg"
                    className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {updating ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      "Update Profile"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Account Information */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  <Shield className="w-6 h-6 mr-3 text-[#4678f3]" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label className="text-lg font-medium text-gray-700">Account Created</Label>
                    <p className="text-gray-600 text-lg mt-2">
                      {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </p>
                  </div>
                  <div>
                    <Label className="text-lg font-medium text-gray-700">Last Updated</Label>
                    <p className="text-gray-600 text-lg mt-2">
                      {profile?.updated_at ? new Date(profile.updated_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Actions */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="border-b border-gray-100">
                <CardTitle className="flex items-center text-2xl font-bold text-gray-900">
                  <Settings className="w-6 h-6 mr-3 text-[#4678f3]" />
                  Account Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="destructive" 
                    onClick={handleSignOut}
                    size="lg"
                    className="flex-1 sm:flex-none px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
