import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Paintbrush, Home as HomeIcon, Hammer, Wrench, Construction, HardHat } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618832515490-e181c4794a45')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Comprehensive painting, masonry, and renovation solutions
          </p>
        </div>
      </section>

      {/* Interior Painting */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15"
                  alt="Interior Painting"
                  loading="lazy"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-lg flex items-center justify-center shadow-xl">
                  <Paintbrush className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Paintbrush className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Interior Painting</h2>
              </div>
              
              <p className="text-xl text-gray-700 font-medium mb-4">Transform your indoor spaces with precision painting that brings your vision to life.</p>
              <p className="text-lg text-gray-600 mb-6">Professional interior painting services for residential and commercial properties. We handle everything from color consultation to final touches.</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Premium quality paints and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Clean, professional finish</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Minimal disruption to your space</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Color consultation included</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Request Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exterior Painting */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c"
                  alt="Exterior Painting"
                  loading="lazy"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-lg flex items-center justify-center shadow-xl">
                  <HomeIcon className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <HomeIcon className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Exterior Painting</h2>
              </div>
              
              <p className="text-xl text-gray-700 font-medium mb-4">Protect and beautify your property with durable exterior painting designed to last.</p>
              <p className="text-lg text-gray-600 mb-6">Weather-resistant exterior painting that enhances curb appeal and protects your investment from the elements.</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Weather-resistant coatings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Surface preparation included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Extended warranty available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Increases property value</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Request Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Restoration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1566474949309-1ecedbf7382e"
                  alt="Masonry Restoration"
                  loading="lazy"
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-600 rounded-lg flex items-center justify-center shadow-xl">
                  <Hammer className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Masonry Restoration</h2>
              </div>
              
              <p className="text-xl text-gray-700 font-medium mb-4">Expert restoration of brick, stone, and masonry structures to their original beauty.</p>
              <p className="text-lg text-gray-600 mb-6">Comprehensive masonry restoration services including tuckpointing, brick replacement, and structural repairs.</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Preserves structural integrity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Authentic restoration techniques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Prevents further damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">Enhances property appearance</span>
                  </li>
                </ul>
              </div>
              
              <Link to="/contact">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  Request Free Estimate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Remaining 3 Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-lg text-gray-600">Expert solutions for all your construction needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brick & Stone Repair */}
            <Card className="border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1580863723632-061f02de8603"
                    alt="Brick & Stone Repair"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Wrench className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-white font-bold text-xl">Brick & Stone Repair</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Skilled repair services for damaged or deteriorating brick and stone work.</p>
                  <Link to="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Get Quote</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Concrete Repair */}
            <Card className="border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1599707254554-027aeb4deacd"
                    alt="Concrete Repair"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <Construction className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-white font-bold text-xl">Concrete Repair</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Professional concrete repair and restoration for driveways, walkways, and foundations.</p>
                  <Link to="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Get Quote</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Full Renovations */}
            <Card className="border-2 hover:border-red-600 transition-colors">
              <CardContent className="p-0">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4756489/pexels-photo-4756489.jpeg"
                    alt="Full Renovations"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <HardHat className="w-10 h-10 text-white mb-2" />
                    <h3 className="text-white font-bold text-xl">Full Renovations</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">Complete renovation services bringing your entire project from concept to completion.</p>
                  <Link to="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700">Get Quote</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats & Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-xl text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-xl text-gray-700 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-xl text-gray-700 font-medium">Satisfaction Rate</p>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-600">Simple, transparent, and designed to deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">Free on-site assessment and detailed estimate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Material selection and project timeline</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600">Professional work with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">4</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Completion</h3>
              <p className="text-gray-600">Final walkthrough and satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, detailed estimate on your project
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
