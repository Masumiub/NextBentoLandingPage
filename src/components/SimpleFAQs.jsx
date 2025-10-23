import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const SimpleFAQs = () => {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 1,
      question: "How do I get started with PromptPal?",
      answer: "Sign up for a free account and you'll have immediate access to our AI prompt library. Start creating content right away with our pre-built templates."
    },
    {
      id: 2,
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial for all paid plans with full access to all features. No credit card required."
    },
    {
      id: 3,
      question: "What's the difference between Free and Pro plans?",
      answer: "Free includes 50 prompts monthly with basic features. Pro offers 1,000 prompts, advanced templates, team collaboration, and priority support."
    },
    {
      id: 4,
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely! You can upgrade, downgrade, or cancel your plan at any time with no long-term contracts."
    },
    {
      id: 5,
      question: "Which AI models does PromptPal support?",
      answer: "We support multiple state-of-the-art AI models including GPT-4 and Claude, with continuous updates to ensure best performance."
    },
    {
      id: 6,
      question: "Is my data secure with PromptPal?",
      answer: "Yes! We use enterprise-grade encryption and comply with GDPR/CCPA regulations. Your data is never used to train models without permission."
    },
    {
      id: 7,
      question: "Do you offer team plans?",
      answer: "Yes! Our Pro and Enterprise plans include team collaboration features with different access levels and real-time collaboration."
    },
    {
      id: 8,
      question: "What kind of content can I create?",
      answer: "PromptPal helps create blog posts, social media content, product descriptions, emails, creative writing, and much more."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-20 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl ">
            Everything you need to know about PromptPal. Can't find the answer you're looking for? 
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
              Contact our support team.
            </a>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                {openItems[faq.id] ? (
                  <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems[faq.id] && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className=" mb-6">
            Still have questions?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimpleFAQs;