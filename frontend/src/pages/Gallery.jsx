import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { getGalleryProjects, getCloudinaryUrl, getResponsiveImageSrcSet, heroImages } from '../config/imageConfig';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  const galleryProjects = getGalleryProjects();
  const categories = ['All', 'Painting', 'Masonry', 'Renovation'];

  const filteredProjects = selectedCategory === 'All' 
    ? galleryProjects 
    : galleryProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getCloudinaryUrl(heroImages.gallery, { w: 1920, c: 'fill' })})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Gallery
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            See our craftsmanship in action - real projects, real results
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-2 hover:border-red-600 transition-all hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={getCloudinaryUrl(project.publicId, { w: 600 })}
                      srcSet={project.responsive ? getResponsiveImageSrcSet(project.publicId) : undefined}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full mb-2">
                          {project.category}
                        </span>
                        <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-700 font-medium">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">15+</div>
              <p className="text-gray-700 font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">100%</div>
              <p className="text-gray-700 font-medium">Quality Work</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">5★</div>
              <p className="text-gray-700 font-medium">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want Your Project Featured Here?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with the same quality and attention to detail
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6" onClick={() => navigate('/contact')}>
            Start Your Project Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
