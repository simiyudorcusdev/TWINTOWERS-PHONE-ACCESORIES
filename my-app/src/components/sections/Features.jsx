// src/components/sections/Features.jsx
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Latest Tech Trends",
      desc: "Stay ahead with the newest smartphones, wearables, and accessories curated for true gadget lovers.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: "Trusted Quality",
      desc: "Every product is handpicked and tested to meet premium performance and durability standards.",
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      title: "Fast Delivery",
      desc: "Get your gadgets delivered nationwide with speed and care — from checkout to your doorstep.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="features">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Why Choose <span className="text-primary">TwinTowers</span>
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-12">
          Your one-stop destination for premium tech gadgets and accessories — combining innovation, quality, and style.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-8 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
              <p className="text-neutral-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
