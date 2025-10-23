import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown, Sparkles } from 'lucide-react';

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started with AI",
      monthlyPrice: 9,
      yearlyPrice: 90,
      savings: 17,
      popular: false,
      icon: <Sparkles className="w-6 h-6" />,
      features: [
        { text: "100 AI prompts per month", included: true },
        { text: "Basic prompt templates", included: true },
        { text: "Standard AI models", included: true },
        { text: "Email support", included: true },
        { text: "Advanced AI models", included: false },
        { text: "Custom templates", included: false },
        { text: "Team collaboration", included: false },
        { text: "Priority support", included: false },
      ],
      cta: "Get Started",
      color: "blue"
    },
    {
      name: "Pro",
      description: "Ideal for professionals and small teams",
      monthlyPrice: 29,
      yearlyPrice: 290,
      savings: 17,
      popular: true,
      icon: <Zap className="w-6 h-6" />,
      features: [
        { text: "1,000 AI prompts per month", included: true },
        { text: "Advanced prompt templates", included: true },
        { text: "All AI models access", included: true },
        { text: "Custom templates", included: true },
        { text: "Team collaboration (up to 3 users)", included: true },
        { text: "Priority email support", included: true },
        { text: "API access", included: false },
        { text: "Dedicated account manager", included: false },
      ],
      cta: "Go Pro",
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large teams and organizations",
      monthlyPrice: 99,
      yearlyPrice: 990,
      savings: 17,
      popular: false,
      icon: <Crown className="w-6 h-6" />,
      features: [
        { text: "Unlimited AI prompts", included: true },
        { text: "All premium templates", included: true },
        { text: "All AI models + early access", included: true },
        { text: "Unlimited custom templates", included: true },
        { text: "Team collaboration (unlimited users)", included: true },
        { text: "24/7 priority support", included: true },
        { text: "Full API access", included: true },
        { text: "Dedicated account manager", included: true },
      ],
      cta: "Contact Sales",
      color: "amber"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        gradient: 'from-blue-500 to-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-500 to-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        text: 'text-amber-600',
        gradient: 'from-amber-500 to-amber-600',
        button: 'bg-amber-600 hover:bg-amber-700'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-gradient-to-b ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-5xl font-bold nextBento mb-6">
            Choose Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Perfect Plan</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto mb-8">
            Start for free, upgrade as you grow. No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-2xl p-2 border border-gray-200 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : 'text-black'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                  : ' text-black'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const colorClasses = getColorClasses(plan.color);
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;
            const perMonth = billingCycle === 'yearly' ? (plan.yearlyPrice / 12).toFixed(0) : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? `border-purple-300 shadow-2xl shadow-purple-500/10`
                    : `border-gray-200 shadow-lg hover:shadow-xl`
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8 h-full flex flex-col">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-12 h-12 ${colorClasses.bg} ${colorClasses.text} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold nextBento mb-2">{plan.name}</h3>
                    <p className="">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center gap-2 mb-2">
                      <span className="text-5xl font-bold nextBento">${price}</span>
                      {billingCycle === 'yearly' && (
                        <span className=" text-lg">/year</span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="">
                        <span className="font-semibold">${perMonth}</span> per month
                      </p>
                    )}
                    {billingCycle === 'monthly' && (
                      <p className="">per month</p>
                    )}
                  </div>

                  {/* Features List */}
                  <div className="flex-grow mb-8">
                    <ul className="space-y-4">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          ) : (
                            <X className="w-5 h-5  mt-0.5 flex-shrink-0" />
                          )}
                          <span className={feature.included ? "" : ""}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                        : `${colorClasses.button} shadow-md hover:shadow-lg`
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingTable;