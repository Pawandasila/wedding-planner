'use client';
import React, { useState, useEffect, useCallback } from 'react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  venueName: string;
  totalPrice: number;
  selectedPackage: string;
  selectedAddOns: string[];
}

const BookingForm: React.FC<BookingFormProps> = ({
  isOpen,
  onClose,
  venueName,
  totalPrice,
  selectedPackage,
  selectedAddOns
}) => {
  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    contactNumber: '',
    email: '',
    weddingDate: '',
    guestCount: '',
    eventType: 'wedding',
    preferredContactTime: '',
    budgetFlexibility: 'fixed'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Memoized validation result to prevent infinite re-renders
  const [isCurrentStepValid, setIsCurrentStepValid] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    // Note: validation will be updated by the useEffect hook
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', {
      ...formData,
      venue: venueName,
      package: selectedPackage,
      addOns: selectedAddOns,
      totalPrice
    });
    
    setIsSubmitting(false);
    alert('Booking request submitted successfully! We will contact you within 2 hours.');
    onClose();
  };

  const validateCurrentStep = useCallback(() => {
    const errors: Record<string, string> = {};
    
    switch (currentStep) {
      case 1:
        if (!formData.brideName.trim()) errors.brideName = "Bride's name is required";
        if (!formData.groomName.trim()) errors.groomName = "Groom's name is required";
        if (!formData.contactNumber.trim()) errors.contactNumber = "Contact number is required";
        if (!formData.email.trim()) errors.email = "Email address is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Please enter a valid email";
        break;
      case 2:
        if (!formData.weddingDate) errors.weddingDate = "Wedding date is required";
        if (!formData.guestCount) errors.guestCount = "Guest count is required";
        break;
    }
    
    setValidationErrors(errors);
    const isValid = Object.keys(errors).length === 0;
    setIsCurrentStepValid(isValid);
  }, [formData, currentStep]);

  // Update validation when form data or step changes
  useEffect(() => {
    validateCurrentStep();
  }, [formData, currentStep, validateCurrentStep]);

  

  const nextStep = () => {
    if (currentStep < 3) {
      if (isCurrentStepValid) {
        setCurrentStep(currentStep + 1);
        setValidationErrors({}); // Clear errors when moving to next step
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
      onScroll={(e) => e.preventDefault()}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-secondary-border p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-marcellus text-secondary-heading text-2xl font-bold">
                Book Your Venue
              </h2>
              <p className="font-montserrat text-secondary-paragraphs text-sm">
                {venueName} • Step {currentStep} of 3
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-secondary-paragraphs hover:text-secondary-accent transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex-1 flex items-center">
                  <div
                    className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                      step < currentStep ? 'bg-green-500' : 
                      step === currentStep ? 'bg-secondary-accent' : 
                      'bg-secondary-background'
                    }`}
                  />
                  {step < 3 && (
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ml-2 mr-2 text-xs font-bold transition-all duration-300 ${
                      step < currentStep ? 'bg-green-500 text-white' : 
                      step === currentStep ? 'bg-secondary-accent text-white' : 
                      'bg-secondary-background text-secondary-paragraphs'
                    }`}>
                      {step < currentStep ? '✓' : step}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs font-medium">
              <span className={currentStep >= 1 ? 'text-secondary-accent' : 'text-secondary-paragraphs'}>
                Basic Info
              </span>
              <span className={currentStep >= 2 ? 'text-secondary-accent' : 'text-secondary-paragraphs'}>
                Event Details
              </span>
              <span className={currentStep >= 3 ? 'text-secondary-accent' : 'text-secondary-paragraphs'}>
                Review & Submit
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div 
          className="flex-1 overflow-y-auto"
          onWheel={(e) => {
            // Allow scrolling within the modal content
            const element = e.currentTarget;
            const { scrollTop, scrollHeight, clientHeight } = element;
            
            // If we're at the top and trying to scroll up, or at bottom and trying to scroll down
            if ((scrollTop === 0 && e.deltaY < 0) || (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0)) {
              e.preventDefault();
            }
          }}
        >
          <form onSubmit={(e) => e.preventDefault()} className="p-6">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-4">
                Basic Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Bride&apos;s Name *
                  </label>
                  <input
                    type="text"
                    name="brideName"
                    value={formData.brideName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.brideName 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                    placeholder="Enter bride's name"
                  />
                  {validationErrors.brideName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.brideName}</p>
                  )}
                </div>
                
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Groom&apos;s Name *
                  </label>
                  <input
                    type="text"
                    name="groomName"
                    value={formData.groomName}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.groomName 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                    placeholder="Enter groom's name"
                  />
                  {validationErrors.groomName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.groomName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.contactNumber 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {validationErrors.contactNumber && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.contactNumber}</p>
                  )}
                </div>
                
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.email 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                    placeholder="your@email.com"
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-4">
                Event Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Wedding Date *
                  </label>
                  <input
                    type="date"
                    name="weddingDate"
                    value={formData.weddingDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.weddingDate 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                  />
                  {validationErrors.weddingDate && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.weddingDate}</p>
                  )}
                </div>
                
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Expected Guest Count *
                  </label>
                  <select
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 transition-colors duration-200 ${
                      validationErrors.guestCount 
                        ? 'border-red-500 focus:ring-red-500/20 focus:border-red-500' 
                        : 'border-secondary-border focus:ring-secondary-accent/20 focus:border-secondary-accent'
                    }`}
                  >
                    <option value="">Select guest count</option>
                    <option value="50-100">50-100 guests</option>
                    <option value="100-200">100-200 guests</option>
                    <option value="200-300">200-300 guests</option>
                    <option value="300-500">300-500 guests</option>
                    <option value="500-800">500-800 guests</option>
                    <option value="800+">800+ guests</option>
                  </select>
                  {validationErrors.guestCount && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.guestCount}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-secondary-border rounded-lg focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200"
                  >
                    <option value="wedding">Complete Wedding</option>
                    <option value="engagement">Engagement Only</option>
                    <option value="mehendi">Mehendi Ceremony</option>
                    <option value="sangam">Sangam Ceremony</option>
                    <option value="reception">Reception Only</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                    Budget Flexibility
                  </label>
                  <select
                    name="budgetFlexibility"
                    value={formData.budgetFlexibility}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-secondary-border rounded-lg focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200"
                  >
                    <option value="fixed">Fixed Budget</option>
                    <option value="flexible-10">+10% Flexible</option>
                    <option value="flexible-20">+20% Flexible</option>
                    <option value="very-flexible">Very Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-montserrat text-secondary-heading text-sm font-medium mb-2">
                  Preferred Contact Time
                </label>
                <select
                  name="preferredContactTime"
                  value={formData.preferredContactTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-secondary-border rounded-lg focus:ring-2 focus:ring-secondary-accent/20 focus:border-secondary-accent transition-colors duration-200"
                >
                  <option value="">Any time</option>
                  <option value="morning">Morning (9 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 8 PM)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3: Review & Submit */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h3 className="font-marcellus text-secondary-heading text-xl font-semibold mb-4">
                Review Your Booking
              </h3>
              
              {/* Booking Summary */}
              <div className="bg-secondary-background/30 rounded-lg p-4 space-y-3">
                <div className="flex justify-between">
                  <span className="font-montserrat text-secondary-paragraphs">Selected Package:</span>
                  <span className="font-montserrat text-secondary-heading font-semibold capitalize">
                    {selectedPackage.replace('-', ' ')}
                  </span>
                </div>
                {selectedAddOns.length > 0 && (
                  <div className="flex justify-between">
                    <span className="font-montserrat text-secondary-paragraphs">Add-on Services:</span>
                    <span className="font-montserrat text-secondary-heading font-semibold">
                      {selectedAddOns.length} services
                    </span>
                  </div>
                )}
                <div className="flex justify-between pt-2 border-t border-secondary-border">
                  <span className="font-marcellus text-secondary-heading text-lg font-bold">Total:</span>
                  <span className="font-marcellus text-secondary-accent text-lg font-bold">
                    ₹{(totalPrice / 100000).toFixed(1)}L
                  </span>
                </div>
              </div>

              {/* Personal Details Summary */}
              <div className="space-y-2 text-sm">
                <p><span className="font-semibold">Couple:</span> {formData.brideName} & {formData.groomName}</p>
                <p><span className="font-semibold">Contact:</span> {formData.contactNumber}</p>
                <p><span className="font-semibold">Email:</span> {formData.email}</p>
                <p><span className="font-semibold">Wedding Date:</span> {formData.weddingDate}</p>
                <p><span className="font-semibold">Guest Count:</span> {formData.guestCount}</p>
              </div>


              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <svg className="w-5 h-5 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <div className="text-sm">
                    <p className="font-semibold text-yellow-800 mb-1">Important Note:</p>
                    <p className="text-yellow-700">
                      This is a booking request. Our team will contact you within 2 hours to confirm availability 
                      and finalize the details. A 25% advance payment will be required to secure your date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-2 pt-6 border-t border-secondary-border">
            <div>
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 border border-secondary-border text-secondary-paragraphs rounded-lg hover:bg-secondary-background transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Previous</span>
                </button>
              )}
            </div>
            
            <div className="flex space-x-3">
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className={`px-6 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 ${
                    isCurrentStepValid
                      ? 'bg-secondary-accent text-white hover:bg-secondary-accent/90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                
                  <span>Next Step</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="px-8 py-2 bg-secondary-accent text-white rounded-lg hover:bg-secondary-accent/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Submit Booking Request</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
