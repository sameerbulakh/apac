import React from 'react';

const OurCourses = () => {
  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sport Management */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sport Management</h3>
              <p className="text-gray-600">
                Comprehensive programs covering sports administration, event management, and strategic planning.
              </p>
            </div>
          </div>

          {/* Sport Science */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sport Science</h3>
              <p className="text-gray-600">
                Advanced courses in athlete development, performance analysis, and sports nutrition.
              </p>
            </div>
          </div>

          {/* Sport Coaching */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sport Coaching</h3>
              <p className="text-gray-600">
                Professional development programs for coaches at all levels of sport.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
