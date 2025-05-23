
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ContactCard } from "@/components/ContactCard";
import { AddContactDialog } from "@/components/AddContactDialog";
import { Plus, Search, Users } from "lucide-react";

// Mock contact data - this will be replaced with Supabase data
const mockContacts = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    notes: "Met at tech conference. Interested in collaboration."
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@company.com",
    phone: "+1 (555) 987-6543",
    notes: "Project manager at ABC Corp. Follow up next month."
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.chen@startup.io",
    phone: "+1 (555) 456-7890",
    notes: "Startup founder. Potential investor contact."
  }
];

const Dashboard = () => {
  const [contacts, setContacts] = useState(mockContacts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  );

  const handleAddContact = (contactData: any) => {
    const newContact = {
      id: Date.now().toString(),
      ...contactData
    };
    setContacts(prev => [newContact, ...prev]);
    toast({
      title: "Contact added",
      description: `${contactData.name} has been added to your contacts.`,
    });
  };

  const handleEditContact = (id: string, updatedData: any) => {
    setContacts(prev => prev.map(contact => 
      contact.id === id ? { ...contact, ...updatedData } : contact
    ));
    toast({
      title: "Contact updated",
      description: "Contact information has been updated successfully.",
    });
  };

  const handleDeleteContact = (id: string) => {
    const contact = contacts.find(c => c.id === id);
    setContacts(prev => prev.filter(contact => contact.id !== id));
    toast({
      title: "Contact deleted",
      description: `${contact?.name} has been removed from your contacts.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Contacts
            </span>
          </h1>
          <p className="text-gray-600">Manage and organize your professional and personal connections</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
                  <p className="text-gray-600">Total Contacts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg md:col-span-2">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <Button 
                onClick={() => setIsAddDialogOpen(true)}
                className="w-full"
                size="lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Contact
              </Button>
            </CardContent>
          </Card>
        </div>

        {filteredContacts.length === 0 ? (
          <Card className="border-0 shadow-lg">
            <CardContent className="p-12 text-center">
              <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchTerm ? "No contacts found" : "No contacts yet"}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchTerm 
                  ? "Try adjusting your search terms" 
                  : "Get started by adding your first contact"
                }
              </p>
              {!searchTerm && (
                <Button onClick={() => setIsAddDialogOpen(true)}>
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Contact
                </Button>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContacts.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
                onEdit={handleEditContact}
                onDelete={handleDeleteContact}
              />
            ))}
          </div>
        )}

        <AddContactDialog
          open={isAddDialogOpen}
          onOpenChange={setIsAddDialogOpen}
          onAddContact={handleAddContact}
        />
      </div>
    </div>
  );
};

export default Dashboard;
