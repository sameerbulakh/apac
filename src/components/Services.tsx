import React, { useState } from 'react';
import { GraduationCap, Briefcase, Handshake, Send } from 'lucide-react';

const Services = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setActiveForm(null);
  };

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for education, career development, and business partnerships in the sports industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education for Successful Careers */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <GraduationCap className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education for Successful Careers</h3>
              <div className="text-gray-600">
                We introduce Australian VET curriculum to overseas colleges under ASQA standards, benefiting RTOs (Registered Training Organisations) and CRICOS providers.
              </div>
              <button
                onClick={() => setActiveForm('education')}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
            {activeForm === 'education' && (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 border-t">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="rtoName" className="block text-sm font-medium text-gray-700">RTO (Registered Training Organisation) Name</label>
                    <input
                      type="text"
                      id="rtoName"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="rtoNumber" className="block text-sm font-medium text-gray-700">RTO (Registered Training Organisation) Number</label>
                    <input
                      type="text"
                      id="rtoNumber"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cricosNumber" className="block text-sm font-medium text-gray-700">CRICOS Number</label>
                    <input
                      type="text"
                      id="cricosNumber"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Now
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Traineeships and Careers */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <Briefcase className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Traineeships and Careers</h3>
              <p className="text-gray-600 mb-6">
                Occupational Traineeship opportunities under Australian Visa Sub-Class 407, with three types of training programs.
              </p>
              <button
                onClick={() => setActiveForm('traineeships')}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
            {activeForm === 'traineeships' && (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 border-t">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Contact Number (Mobile)</label>
                    <input
                      type="tel"
                      id="mobile"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700">Qualification of Interest</label>
                    <select
                      id="qualification"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a qualification</option>
                      <option value="registration">Training for Registration</option>
                      <option value="skills">Skills Improvement</option>
                      <option value="capacity">Capacity Building Overseas</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Resume</label>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="mt-1 block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Employment & Business Partnerships */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <Handshake className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Employment & Business Partnerships</h3>
              <p className="text-gray-600 mb-6">
                Connect with qualified candidates and explore partnership opportunities in the sports industry.
              </p>
              <button
                onClick={() => setActiveForm('partnerships')}
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
            {activeForm === 'partnerships' && (
              <form onSubmit={handleSubmit} className="bg-gray-50 p-8 border-t">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">Contact Person</label>
                    <input
                      type="text"
                      id="contactPerson"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="partnerEmail" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="partnerEmail"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      id="country"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;