import React, { useState } from 'react';
import { ChevronRightIcon } from 'lucide-react';
export function OnboardingScreen({
  onComplete
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [{
    title: 'Welcome to Influenco',
    subtitle: 'Your gateway to brand partnerships',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Connect with brands that match your audience and content style'
  }, {
    title: 'Get Paid for Your Influence',
    subtitle: 'Monetize your social media presence',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Apply for campaigns and receive payments directly to your account'
  }, {
    title: 'Track Your Performance',
    subtitle: 'Analytics that help you grow',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Monitor your campaigns and engagement metrics in one place'
  }];
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };
  const currentSlideData = slides[currentSlide];
  return <div className="h-screen flex flex-col">
      <div className="flex-1 flex flex-col">
        <img src={currentSlideData.image} alt={currentSlideData.title} className="w-full h-1/2 object-cover" />
        <div className="p-6 flex-1 flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{currentSlideData.title}</h1>
          <p className="text-lg text-blue-600 mb-4">
            {currentSlideData.subtitle}
          </p>
          <p className="text-gray-600 mb-8">{currentSlideData.description}</p>
          <div className="mt-auto">
            <div className="flex justify-center mb-8">
              {slides.map((_, index) => <div key={index} className={`w-2 h-2 rounded-full mx-1 ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`} />)}
            </div>
            <button onClick={nextSlide} className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium flex items-center justify-center">
              {currentSlide < slides.length - 1 ? 'Continue' : 'Get Started'}
              <ChevronRightIcon size={20} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>;
}