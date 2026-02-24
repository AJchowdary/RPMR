import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Shield, DollarSign, Building, Award, ArrowRight, Paintbrush, Home as HomeIcon, Hammer, Wrench, Construction, HardHat } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, services, trustBadges, testimonials } from '../utils/mockData';

const HomePage = () => {
  const getIcon = (iconName) => {
    const icons = {
      PaintBrush: Paintbrush,
      Home: HomeIcon,
      Hammer: Hammer,
      Wrench: Wrench,
      Construction: Construction,
      HardHat: HardHat,
      Shield: Shield,
      DollarSign: DollarSign,
      Building: Building,
      Award: Award
    };
    return icons[iconName] || Hammer;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1563166423-482a8c14b2d6')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional Painting &<br />Masonry Restoration Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Residential & commercial renovations delivered with quality, durability, and precision
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                Get a Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {trustBadges.map((badge, index) => {
              const Icon = getIcon(badge.icon);
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-600 rounded-full mb-3">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-1">{badge.title}</h3>
                  <p className="text-gray-300 text-xs">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive painting, masonry, and renovation solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-red-600">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-white font-bold text-lg">{service.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <Link to="/contact">
                        <Button variant="outline" className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                          Request Quote
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose RPMR LLC?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide high-quality painting, masonry restoration, and renovation services designed to last. Our commitment to excellence and customer satisfaction sets us apart.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Experienced Professionals</h4>
                    <p className="text-gray-600">Years of hands-on experience delivering quality results</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Attention to Detail</h4>
                    <p className="text-gray-600">Meticulous craftsmanship on every project, large or small</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reliable Timeline</h4>
                    <p className="text-gray-600">Clear communication and on-schedule project completion</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Quality Materials</h4>
                    <p className="text-gray-600">Premium products for lasting beauty and protection</p>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/about">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1567954970774-58d6aa6c50dc"
                alt="Professional equipment"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-sm text-red-600 font-medium mt-1">{testimonial.project}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Property?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get your free, no-obligation estimate today and discover the RPMR difference
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6">
                <Phone className="mr-2 w-5 h-5" />
                {businessInfo.phone}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
