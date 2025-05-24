import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, User, Users, Zap, MessageSquare } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the perfect plan for your contact management needs. No hidden fees, cancel anytime.</p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md p-1 bg-gray-100">
            <button
              className={`px-4 py-2 rounded-md font-medium text-sm ${billingPeriod === "monthly" ? "bg-white shadow-sm" : "text-gray-600"}`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md font-medium text-sm ${billingPeriod === "yearly" ? "bg-white shadow-sm" : "text-gray-600"}`}
              onClick={() => setBillingPeriod("yearly")}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {displayPlans.map((plan, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${
                plan.popular ? "ring-2 ring-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-xs font-semibold transform rotate-45 translate-x-5 translate-y-3">
                    Popular
                  </div>
                </div>
              )}
              <CardHeader className="pb-0">
                <CardTitle>
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                    <div className="mt-3">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-600 ml-1">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-600 to-purple-600" : ""}`}
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/signup">{plan.ctaText}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Lifetime and Custom Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lifetime Plan */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-900 to-purple-900 text-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 mr-3" />
                <h3 className="text-2xl font-bold">Lifetime Access</h3>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">$1,000</span>
                <span className="text-blue-200 ml-2">one-time payment</span>
              </div>
              <p className="text-blue-100 mb-6">Unlock unlimited access forever. All features, unlimited storage, and all future updates included.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>Unlimited contact storage</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>All current and future features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>VIP priority support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span>No recurring payments ever</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg" className="w-full" asChild>
                <Link to="/contact?plan=lifetime">Get Lifetime Access</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Custom Plan */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Custom Plan</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Need something special? We offer custom plans for teams, enterprises, and organizations with unique requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Tailored to your exact needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Custom storage limits</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Team collaboration features</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
              </ul>
              <div className="flex space-x-4">
                <Button variant="outline" size="lg" className="flex-1" asChild>
                  <Link to="/contact?plan=custom">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contact Sales
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my contact limit?</h3>
                <p className="text-gray-600">You'll need to upgrade to a higher plan to add more contacts or remove some existing contacts.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a trial period?</h3>
                <p className="text-gray-600">Our Free plan is available forever with no credit card required. You can upgrade anytime.</p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">We accept all major credit cards, PayPal, and bank transfers for annual plans.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Join thousands of users who trust ContactBook to manage their contacts efficiently. Start with our free plan today — no credit card required.
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/signup">Create Your Free Account</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
