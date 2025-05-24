import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactCard } from "@/components/ContactCard";
import { AddContactDialog } from "@/components/AddContactDialog";
import { useContacts } from "@/hooks/useContacts";
import { useAuth } from "@/contexts/AuthContext";
import { Plus, Search, Users, Loader2, Filter, Grid, List } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { contacts, loading, addContact, updateContact, deleteContact } = useContacts();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<string | null>(null);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login");
    }
  }, [user, authLoading, navigate]);

  // Don't render anything while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#4678f3] mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!user) {
    return null;
  }

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (contact.email && contact.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (contact.phone && contact.phone.includes(searchTerm))
  );

  const handleAddContact = async (contactData: any) => {
    const result = await addContact(contactData);
    if (result) {
      setIsAddDialogOpen(false);
    }
  };

  const handleEditContact = async (id: string, updatedData: any) => {
    await updateContact(id, updatedData);
  };

  const handleDeleteContact = async (id: string) => {
    const contact = contacts.find((c) => c.id === id);
    if (contact) {
      setContactToDelete(id);
      setDeleteDialogOpen(true);
    }
  };

  const confirmDelete = async () => {
    if (contactToDelete) {
      await deleteContact(contactToDelete);
      setDeleteDialogOpen(false);
      setContactToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-[#4678f3] mx-auto mb-4" />
          <p className="text-gray-600">Loading your contacts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Your{" "}
                <span className="text-[#4678f3] relative">
                  Contacts
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 3 100 1 198 6" stroke="#4678f3" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="text-gray-600 text-lg">Manage and organize your professional and personal connections</p>
            </div>
            <div className="mt-6 md:mt-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <Button
                onClick={() => setIsAddDialogOpen(true)}
                size="lg"
                className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats and Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#4678f3] rounded-2xl flex items-center justify-center">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="text-3xl font-bold text-gray-900">{contacts.length}</p>
                    <p className="text-gray-600 font-medium">Total Contacts</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg md:col-span-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search contacts by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 h-12 border-gray-200 focus:border-[#4678f3] focus:ring-[#4678f3] transition-all duration-300 text-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Filter className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-600 font-medium">View</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === "grid" ? "bg-white shadow-sm text-[#4678f3]" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-2 rounded-md transition-all duration-200 ${
                        viewMode === "list" ? "bg-white shadow-sm text-[#4678f3]" : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredContacts.length === 0 ? (
            <Card className="border-0 shadow-xl animate-fade-in">
              <CardContent className="p-16 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{searchTerm ? "No contacts found" : "No contacts yet"}</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  {searchTerm ? "Try adjusting your search terms or add a new contact" : "Get started by adding your first contact to build your network"}
                </p>
                {!searchTerm && (
                  <Button
                    onClick={() => setIsAddDialogOpen(true)}
                    size="lg"
                    className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Your First Contact
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {filteredContacts.map((contact, index) => (
                <div key={contact.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ContactCard contact={contact} onEdit={handleEditContact} onDelete={handleDeleteContact} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <AddContactDialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen} onAddContact={handleAddContact} />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="border-0 shadow-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-gray-900">Confirm Deletion</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-600 text-base mt-2">
              Are you sure you want to delete {contacts.find((c) => c.id === contactToDelete)?.name}? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6">
            <AlertDialogCancel className="border-gray-300 text-gray-700 hover:text-gray-900 hover:border-gray-400 transition-all duration-300">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-[#4678f3] hover:bg-[#4678f3]/90 text-white transition-all duration-300 transform hover:scale-105"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dashboard;
