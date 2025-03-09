import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  GraduationCap, 
  Settings, 
  ClipboardCheck, 
  Network,
  LineChart 
} from 'lucide-react';

const HowWeDoIt = () => {
  const steps = [
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Step 1",
      description: "We partner with superior sporting organisations dedicated to supporting their fans, sponsors and networks in expanding their current and future opportunities."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: "Step 2",
      description: "We match the sporting organisation with suitable Australian Vocational Education and Training providers."
    },
    {
      icon: <Settings className="w-8 h-8 text-blue-600" />,
      title: "Step 3",
      description: "We customise the programs to meet the needs of the sporting organisation, local market and workforce skills requirements."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      title: "Step 4",
      description: "We administer and manage delivery of the qualifications."
    },
    {
      icon: <Network className="w-8 h-8 text-blue-600" />,
      title: "Step 5",
      description: "We collaborate with our local and international partners to link graduates with employers through our networks."
    },
    {
      icon: <LineChart className="w-8 h-8 text-blue-600" />,
      title: "Step 6",
      description: "We monitor performance, compliance and accountability to drive continual improvement and value creation for our partners and graduates."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="how-we-do-it" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How We Do It
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our proven six-step process for success
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex items-start p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-blue-50 rounded-full mr-6">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index !== steps.length - 1 && (
                <div className="absolute bottom-0 left-11 w-0.5 h-8 bg-blue-200 transform translate-y-full"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
