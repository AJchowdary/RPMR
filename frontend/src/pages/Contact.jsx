import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { businessInfo, serviceTypes } from '../utils/mockData';
import { submitFormToWeb3Forms } from '../config/web3formsConfig';
import { TermsCheckbox } from '../components/TermsCheckbox';
import { getCloudinaryUrl, heroImages } from '../config/imageConfig';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    location: '',
    description: '',
    website: '', // Honeypot/spam protection field
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [errors, setErrors] = useState({});
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, serviceType: value }));
    if (errors.serviceType) {
      setErrors(prev => ({ ...prev, serviceType: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^[\d\-\+\s\(\)]+$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service type';
    if (!acceptTerms) newErrors.acceptTerms = 'You must accept the Terms & Conditions and Privacy Policy to submit.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Spam check: if honeypot field has value, it's likely a bot
    if (formData.website) {
      console.warn('Potential spam detected');
      setIsSubmitted(true);
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    try {
      const result = await submitFormToWeb3Forms({
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        serviceType: formData.serviceType,
        location: formData.location,
        description: formData.description,
        subject: `New Service Request from ${formData.fullName}`,
        from_name: formData.fullName,
        reply_to: formData.email || businessInfo.email,
      });

      if (result.success) {
        setIsSubmitted(true);
        setAcceptTerms(false);
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceType: '',
          location: '',
          description: '',
          website: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError('Failed to submit form. Please try again or call us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('An error occurred while submitting the form. Please try again or call us at ' + businessInfo.phone);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${getCloudinaryUrl(heroImages.contact, { w: 1920, c: 'fill' })})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Your Free Estimate
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Let's discuss your project - no obligation, completely free
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Estimate</h2>
                  
                  {isSubmitted && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-green-900 mb-1">Thank You!</h3>
                        <p className="text-green-800">We've received your request and will contact you shortly to discuss your project.</p>
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-red-900 mb-1">Submission Error</h3>
                        <p className="text-red-800">{submitError}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-gray-900 font-medium mb-2">
                          Full Name <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className={errors.fullName ? 'border-red-500' : ''}
                        />
                        {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-gray-900 font-medium mb-2">
                          Phone Number <span className="text-red-600">*</span>
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(555) 123-4567"
                          className={errors.phone ? 'border-red-500' : ''}
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-medium mb-2">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="serviceType" className="text-gray-900 font-medium mb-2">
                        Type of Service <span className="text-red-600">*</span>
                      </Label>
                      <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                        <SelectTrigger className={errors.serviceType ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.serviceType && <p className="text-red-600 text-sm mt-1">{errors.serviceType}</p>}
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-gray-900 font-medium mb-2">
                        Project Location
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City or Address"
                      />
                    </div>

                    <div>
                      <Label htmlFor="description" className="text-gray-900 font-medium mb-2">
                        Project Description
                      </Label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                        rows={5}
                      />
                    </div>

                    {/* Honeypot field - hidden from users but visible to bots */}
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      style={{ display: 'none' }}
                      tabIndex="-1"
                      autoComplete="off"
                    />

                    <TermsCheckbox
                      checked={acceptTerms}
                      onChange={setAcceptTerms}
                      error={errors.acceptTerms}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-6"
                      disabled={isLoading}
                    >
                      {isLoading ? 'Submitting...' : 'Get My Free Estimate'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <a href={`tel:${businessInfo.phone}`} className="flex items-start gap-3 text-gray-700 hover:text-red-600 transition-colors group">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                        <Phone className="w-5 h-5 text-red-600 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Call Us</p>
                        <p className="font-bold">{businessInfo.phone}</p>
                      </div>
                    </a>

                    <a href={`mailto:${businessInfo.email}`} className="flex items-start gap-3 text-gray-700 hover:text-red-600 transition-colors group">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                        <Mail className="w-5 h-5 text-red-600 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Email Us</p>
                        <p className="font-bold break-all">{businessInfo.email}</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-3 text-gray-700">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Service Area</p>
                        <p className="font-bold">{businessInfo.serviceArea}</p>
                      </div>
                    </div>

                    <a href={businessInfo.facebook} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-gray-700 hover:text-red-600 transition-colors group">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                        <Facebook className="w-5 h-5 text-red-600 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-gray-500 mb-1">Follow Us</p>
                        <p className="font-bold">Facebook Messenger</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-semibold text-gray-900">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-red-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">Free Estimates!</h3>
                  <p className="text-sm">No obligation, completely free consultation and project estimate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
