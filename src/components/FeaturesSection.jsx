import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Palette, 
  Rocket 
} from 'lucide-react';

const FeaturesSectionGradient = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Smart AI Prompts",
      description: "Intelligent prompt suggestions based on your writing style",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Lightning Fast",
      description: "Generate high-quality content in seconds",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure & Private",
      description: "Enterprise-grade security for your data",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Team Collaboration",
      description: "Share and collaborate in real-time",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Custom Templates",
      description: "Create templates for different use cases",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your tools",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>✨</span>
            <span>Why Choose PromptPal</span>
          </div>
          <h2 className="text-5xl font-bold mb-6">
            Features That Make
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> You Shine</span>
          </h2>
          <p className="text-xl  max-w-3xl mx-auto">
            Discover the powerful features that will transform your AI prompt creation experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Icon with Gradient Border */}
                <div className="mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5`}>
                    <div className="w-full h-full  rounded-2xl flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
                
                {/* Learn More Link */}
                <div className="mt-6 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-600 transition-colors duration-300">
                  <span>Learn more</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionGradient;