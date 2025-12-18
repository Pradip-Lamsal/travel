"use client";

interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface WhyChooseUsSectionProps {
  features: Feature[];
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  features,
}) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            Why Choose Devaaya Holidays?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We make travel planning easy, affordable, and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
