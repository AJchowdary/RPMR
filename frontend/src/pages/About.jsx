import React from 'react';
import { Shield, Award, Users, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1525909002-1b05e0c869d8')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About RPMR LLC
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Quality craftsmanship and reliable service you can trust
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                At Renovations Painting and Masonry Restorations LLC, we pride ourselves on delivering exceptional quality and craftsmanship on every project. With years of experience serving residential and commercial clients throughout Springfield and surrounding areas, we've built our reputation on reliability, skill, and attention to detail.
              </p>
              <p>
                Our team of experienced professionals brings passion and precision to each job, whether it's a simple interior paint refresh or a complex masonry restoration. We understand that your property is a significant investment, and we treat every project with the care and expertise it deserves.
              </p>
              <p>
                What sets us apart is our commitment to honest communication, quality materials, and workmanship that stands the test of time. We're not satisfied until you're completely happy with the results, and our growing list of satisfied customers speaks to our dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">What We Stand For</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on materials or workmanship. Every project receives our highest standard of care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Our skilled team brings years of hands-on experience and specialized training to every job.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
                <p className="text-gray-600">
                  Your satisfaction is our priority. We listen, communicate clearly, and deliver on our promises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Service</h3>
                <p className="text-gray-600">
                  We respect your time and property. Projects are completed on schedule with minimal disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/13474086/pexels-photo-13474086.jpeg"
                alt="Professional contractor"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  <strong className="text-gray-900">Licensed & Insured:</strong> We carry full licensing and comprehensive insurance for your complete peace of mind and protection.
                </p>
                <p className="text-lg">
                  <strong className="text-gray-900">Free Estimates:</strong> Every project begins with a detailed, no-obligation estimate so you know exactly what to expect.
                </p>
                <p className="text-lg">
                  <strong className="text-gray-900">Quality Materials:</strong> We use only premium paints, materials, and products designed for durability and lasting beauty.
                </p>
                <p className="text-lg">
                  <strong className="text-gray-900">Clean Worksite:</strong> We maintain a clean, organized work area and leave your property spotless when the job is complete.
                </p>
                <p className="text-lg">
                  <strong className="text-gray-900">Clear Communication:</strong> You'll always know the project status, timeline, and any updates throughout the process.
                </p>
                <p className="text-lg">
                  <strong className="text-gray-900">Satisfaction Guaranteed:</strong> We're not done until you're completely satisfied with our work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Serving Your Community</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We serve residential and commercial clients throughout Springfield and the surrounding areas. Our local expertise and commitment to community make us your trusted partner for all painting, masonry, and renovation needs.
          </p>
          <p className="text-2xl font-semibold text-red-500">
            Springfield & Surrounding Areas
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
