import React from 'react';
import { Star, Quote, Sparkles, Zap, Heart } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Content Strategist",
      company: "TechFlow",
      avatar: "SC",
      content: "PromptPal has completely transformed how we create content. Our team's productivity has increased by 300% and the quality of our AI-generated content is consistently outstanding.",
      rating: 5,
      featured: true,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Marketing Director",
      company: "GrowthLabs",
      avatar: "MR",
      content: "The custom templates feature alone is worth the subscription. We've standardized our brand voice across all AI-generated content effortlessly.",
      rating: 5,
      featured: false,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Startup Founder",
      company: "NovaTech",
      avatar: "EW",
      content: "As a non-technical founder, PromptPal made AI accessible to me. I went from zero to creating professional marketing copy in days, not weeks.",
      rating: 5,
      featured: false,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Product Manager",
      company: "InnovateAI",
      avatar: "DK",
      content: "The team collaboration features are game-changing. We've onboarded our entire content team and the workflow is seamless.",
      rating: 5,
      featured: false,
      color: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Creative Director",
      company: "Artisan Studios",
      avatar: "LT",
      content: "I've tried every AI writing tool out there. PromptPal stands out with its intuitive interface and consistently brilliant results.",
      rating: 5,
      featured: true,
      color: "bg-gradient-to-r from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Alex Johnson",
      role: "SEO Specialist",
      company: "DigitalBoost",
      avatar: "AJ",
      content: "Our organic traffic increased by 45% after implementing PromptPal for content creation. The AI understands context better than any other tool we've used.",
      rating: 5,
      featured: false,
      color: "bg-gradient-to-r from-rose-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Users" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "98%", label: "Would Recommend" },
    { number: "2.5M+", label: "Prompts Generated" }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? "text-yellow-400 fill-current" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-200">
            <Heart className="w-4 h-4 text-red-500" />
            <span>Loved by Thousands</span>
          </div>
          <h2 className="text-5xl font-bold  mb-6">
            What Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Users Say</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Join thousands of content creators, marketers, and businesses who have transformed their workflow with PromptPal
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold  mb-2">
                {stat.number}
              </div>
              <div className=" font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                testimonial.featured ? 'border-2 border-blue-200' : 'border border-gray-100'
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-gray-400" />
              </div>

              {/* Featured Badge */}
              {testimonial.featured && (
                <div className="absolute -top-3 left-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-2xl flex items-center justify-center text-white font-semibold text-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-black">
                      {testimonial.role} · {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Transform Your Content Creation?
            </h3>
            <p className=" mb-6 max-w-2xl mx-auto text-black">
              Join thousands of satisfied users and experience the power of AI-driven prompt engineering
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border border-gray-300 text-black hover:bg-gray-50 font-semibold py-3 px-8 rounded-2xl transition-all duration-200">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;