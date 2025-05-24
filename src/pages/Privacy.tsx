
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234678f3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Privacy{" "}
              <span className="text-[#4678f3] relative">
                Policy
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 150 0 298 10" stroke="#4678f3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl animate-fade-in">
            <CardContent className="p-12 prose prose-gray max-w-none">
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Information We Collect</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 ml-6">
                    <li>Create or modify your account</li>
                    <li>Add contacts to your Contact Book</li>
                    <li>Contact us for support</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. How We Use Your Information</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 ml-6">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to comments, questions, and customer service requests</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Information Sharing</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties. 
                    This does not include trusted third parties who assist us in operating our website or 
                    servicing you, so long as those parties agree to keep this information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Data Security</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We implement a variety of security measures to maintain the safety of your personal 
                    information. Your personal information is contained behind secured networks and is only 
                    accessible by a limited number of persons who have special access rights and are 
                    required to keep the information confidential.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Data Retention</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We retain your information for as long as your account is active or as needed to provide 
                    you services. We will retain and use your information as necessary to comply with our 
                    legal obligations, resolve disputes, and enforce our agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Your Rights</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 ml-6">
                    <li>Access and update your personal information</li>
                    <li>Delete your account and associated data</li>
                    <li>Export your data in a portable format</li>
                    <li>Opt out of certain communications</li>
                    <li>Request information about how your data is processed</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Cookies and Tracking</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our service and 
                    hold certain information. You can instruct your browser to refuse all cookies or to 
                    indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Children's Privacy</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Our service does not address anyone under the age of 13. We do not knowingly collect 
                    personally identifiable information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Changes to Privacy Policy</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contact Us</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at 
                    privacy@contactbook.com.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
