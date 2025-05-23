
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { EditContactDialog } from "@/components/EditContactDialog";
import { Mail, Phone, User, Edit, Trash2 } from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  notes?: string;
}

interface ContactCardProps {
  contact: Contact;
  onEdit: (id: string, updatedData: any) => void;
  onDelete: (id: string) => void;
}

export const ContactCard = ({ contact, onEdit, onDelete }: ContactCardProps) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleEdit = (updatedData: any) => {
    onEdit(contact.id, updatedData);
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${contact.name}?`)) {
      onDelete(contact.id);
    }
  };

  return (
    <>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditDialogOpen(true)}
                className="text-gray-600 hover:text-blue-600"
              >
                <Edit className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDelete}
                className="text-gray-600 hover:text-red-600"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="text-sm truncate">{contact.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="text-sm">{contact.phone}</span>
            </div>
            {contact.notes && (
              <div className="mt-3 pt-3 border-t border-gray-200">
                <p className="text-sm text-gray-600 line-clamp-3">{contact.notes}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <EditContactDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        contact={contact}
        onEditContact={handleEdit}
      />
    </>
  );
};
