import React from 'react';
import { 
  Building2, 
  Users, 
  Megaphone, 
  Calendar, 
  GraduationCap, 
  Plus 
} from 'lucide-react';

const OurCourses = () => {
  const courses = [
    {
      icon: <Building2 className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Business Administration",
      description: "Manage the success of people and organisations through the development of highly sought-after generalist business skills."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Leadership & Management",
      description: "Pathway to future leadership by gaining skills to thrive in the dynamic world of business."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Marketing & Branding",
      description: "Take the lead by being equipped to develop and analyse marketing intelligence to inform business and marketing strategies."
    },
    {
      icon: <Calendar className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Event Management",
      description: "Develop key knowledge and skills to create, plan and execute events of any scale and successfully bringing them to life."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Short Courses",
      description: "Range of Courses, including Security, CPR, First Aid, Fitness & Training and Workplace Skills."
    },
    {
      icon: <Plus className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Additional Courses",
      description: "Courses continually added, please contact us with specific requests."
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Courses</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We facilitate study pathways through short courses, vocational education and training and industry accredited programs.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => (
              <div 
                key={index} 
                className="group flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
