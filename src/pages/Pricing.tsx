
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, MessageSquare, Star } from "lucide-react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");

  const monthlyPlans = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for getting started",
      features: [
        { name: "500 contact storage", included: true },
        { name: "Basic contact fields", included: true },
        { name: "CSV import/export", included: true },
        { name: "Email & phone storage", included: true },
        { name: "Basic search", included: true },
        { name: "Cloud sync", included: false },
        { name: "Contact groups", included: false },
        { name: "Advanced search", included: false },
        { name: "Priority support", included: false },
      ],
      ctaText: "Get Started",
      popular: false,
    },
    {
      name: "Plus",
      price: "4.99",
      description: "Perfect for professionals",
      features: [
        { name: "1,000 contact storage", included: true },
        { name: "Basic contact fields", included: true },
        { name: "CSV import/export", included: true },
        { name: "Email & phone storage", included: true },
        { name: "Basic search", included: true },
        { name: "Cloud sync", included: true },
        { name: "Contact groups", included: true },
        { name: "Advanced search", included: true },
        { name: "Priority support", included: false },
      ],
      ctaText: "Upgrade Now",
      popular: true,
    },
    {
      name: "Pro",
      price: "9.99",
      description: "For businesses and teams",
      features: [
        { name: "2,000 contact storage", included: true },
        { name: "Advanced contact fields", included: true },
        { name: "CSV import/export", included: true },
        { name: "Email & phone storage", included: true },
        { name: "Basic search", included: true },
        { name: "Cloud sync", included: true },
        { name: "Contact groups", included: true },
        { name: "Advanced search", included: true },
        { name: "Priority support", included: true },
      ],
      ctaText: "Upgrade Now",
      popular: false,
    },
  ];

  // Calculate yearly prices with 20% discount
  const yearlyPlans = monthlyPlans.map((plan) => ({
    ...plan,
    price: plan.price === "0" ? "0" : (parseFloat(plan.price) * 0.8 * 12).toFixed(2),
    description: plan.description,
  }));

  const displayPlans = billingPeriod === "monthly" ? monthlyPlans : yearlyPlans;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="absolute inset-0" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234678f3' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Simple, Transparent{" "}
              <span className="text-[#4678f3] relative">
                Pricing
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 5 150 0 298 10" stroke="#4678f3" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the perfect plan for your contact management needs. No hidden fees, cancel anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-16">
            <div className="inline-flex rounded-2xl p-2 bg-gray-100 animate-fade-in">
              <button
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  billingPeriod === "monthly" 
                    ? "bg-white shadow-lg text-[#4678f3] transform scale-105" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setBillingPeriod("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  billingPeriod === "yearly" 
                    ? "bg-white shadow-lg text-[#4678f3] transform scale-105" 
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setBillingPeriod("yearly")}
              >
                Yearly
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Save 20%</span>
              </button>
            </div>
          </div>

          {/* Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {displayPlans.map((plan, index) => (
              <Card
                key={index}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden animate-fade-in ${
                  plan.popular ? "ring-2 ring-[#4678f3] transform scale-105" : ""
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#4678f3] text-white px-6 py-2 text-sm font-bold transform rotate-45 translate-x-6 translate-y-4">
                      <Star className="w-4 h-4 inline mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <CardHeader className="pb-4 pt-8">
                  <CardTitle>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-5xl font-bold text-[#4678f3]">${plan.price}</span>
                        <span className="text-gray-600 ml-2 text-lg">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                      </div>
                      <p className="text-gray-600 text-lg">{plan.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 pb-8 px-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-6 w-6 text-gray-300 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-lg ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full text-lg py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      plan.popular 
                        ? "bg-[#4678f3] hover:bg-[#4678f3]/90 text-white" 
                        : "border-2 border-gray-300 hover:border-[#4678f3] hover:text-[#4678f3] bg-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/signup">{plan.ctaText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Lifetime Plan */}
            <Card className="border-0 shadow-xl bg-[#4678f3] text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <Zap className="h-10 w-10 mr-4" />
                  <h3 className="text-3xl font-bold">Lifetime Access</h3>
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-bold">$1,000</span>
                  <span className="text-white/80 ml-3 text-lg">one-time payment</span>
                </div>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Unlock unlimited access forever. All features, unlimited storage, and all future updates included.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                    <span>Unlimited contact storage</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                    <span>All current and future features</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                    <span>VIP priority support</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-300 mr-3 flex-shrink-0" />
                    <span>No recurring payments ever</span>
                  </li>
                </ul>
                <Button variant="secondary" size="lg" className="w-full text-lg py-3 bg-white text-[#4678f3] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105" asChild>
                  <Link to="/contact?plan=lifetime">Get Lifetime Access</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Custom Plan */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-10">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-10 w-10 mr-4 text-[#4678f3]" />
                  <h3 className="text-3xl font-bold text-gray-900">Custom Plan</h3>
                </div>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Need something special? We offer custom plans for teams, enterprises, and organizations with unique requirements.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Tailored to your exact needs</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Custom storage limits</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Team collaboration features</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Dedicated account manager</span>
                  </li>
                </ul>
                <Button variant="outline" size="lg" className="w-full text-lg py-3 border-2 border-[#4678f3] text-[#4678f3] hover:bg-[#4678f3] hover:text-white transition-all duration-300 transform hover:scale-105" asChild>
                  <Link to="/contact?plan=custom">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 animate-fade-in">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
                },
                {
                  question: "What happens if I exceed my contact limit?",
                  answer: "You'll need to upgrade to a higher plan to add more contacts or remove some existing contacts."
                },
                {
                  question: "Is there a trial period?",
                  answer: "Our Free plan is available forever with no credit card required. You can upgrade anytime."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <Card className="border-0 shadow-xl bg-[#4678f3] animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to get started?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-xl leading-relaxed">
                Join thousands of users who trust Contact Book to manage their contacts efficiently. Start with our free plan today — no credit card required.
              </p>
              <Button variant="secondary" size="lg" asChild className="text-lg px-10 py-4 bg-white text-[#4678f3] hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                <Link to="/signup">Create Your Free Account</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
