
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234678f3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Terms of{" "}
              <span className="text-[#4678f3] relative">
                Service
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Agreement to Terms</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    By accessing and using Contact Book, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to abide by the above, please do not 
                    use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Use License</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Permission is granted to temporarily access Contact Book for personal, non-commercial 
                    transitory viewing only. This is the grant of a license, not a transfer of title, and 
                    under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 ml-6">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on Contact Book</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">3. User Account</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    When you create an account with us, you must provide information that is accurate, 
                    complete, and current at all times. You are responsible for safeguarding the password 
                    and for all activities that occur under your account.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Privacy Policy</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of the Service, to understand our practices.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Prohibited Uses</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    You may not use our service:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 text-lg space-y-3 ml-6">
                    <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                    <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                    <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                    <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                    <li>To submit false or misleading information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Service Availability</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We strive to provide continuous service availability, but we do not guarantee that our 
                    service will be available at all times. We may experience hardware, software, or other 
                    problems or need to perform maintenance related to the service.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Limitation of Liability</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    In no case shall Contact Book, its directors, officers, employees, affiliates, agents, 
                    contractors, interns, suppliers, service providers, or licensors be liable for any 
                    injury, loss, claim, or any direct, indirect, incidental, punitive, special, or 
                    consequential damages of any kind.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Changes to Terms</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any 
                    time. If a revision is material, we will try to provide at least 30 days notice prior 
                    to any new terms taking effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Contact Information</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at 
                    legal@contactbook.com.
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

export default Terms;
