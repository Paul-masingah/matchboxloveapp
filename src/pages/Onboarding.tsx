
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Mic, MicOff, ArrowRight, Heart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Mock voice assistant responses
const voiceAssistantScript = [
  "Welcome to MatchboxLove! I'm your AI assistant and I'll help you set up your profile.",
  "Let's start with some basic information. What's your name?",
  "Great! Now, how old are you?",
  "Perfect. Now, I'd like to know about your interests to help find compatible matches.",
  "Thank you! Let's talk about what you're looking for in a partner.",
  "Excellent! Now, let's upload a profile photo to help others get to know you.",
  "Fantastic! Finally, tell me about your ideal date scenario.",
  "Thank you for completing your profile! I've analyzed your preferences and we're ready to find your matches!"
];

const OnboardingSteps = [
  {
    title: "Welcome",
    description: "Let's get to know you",
    fields: []
  },
  {
    title: "Basic Information",
    description: "Tell us who you are",
    fields: [
      { name: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
      { name: "age", label: "Your Age", type: "number", placeholder: "25" },
    ]
  },
  {
    title: "Your Interests",
    description: "What do you enjoy doing?",
    fields: [
      { name: "interests", label: "Your Interests", type: "textarea", placeholder: "Reading, hiking, cooking..." },
    ]
  },
  {
    title: "Partner Preferences",
    description: "What are you looking for in a partner?",
    fields: [
      { name: "partnerPreferences", label: "Describe Your Ideal Partner", type: "textarea", placeholder: "Honest, kind, adventurous..." },
    ]
  },
  {
    title: "Profile Photo",
    description: "Add a photo to your profile",
    fields: [
      { name: "photo", label: "Upload Photo", type: "file" },
    ]
  },
  {
    title: "Ideal Date",
    description: "Describe your perfect date scenario",
    fields: [
      { name: "idealDate", label: "Your Ideal Date", type: "textarea", placeholder: "A hike followed by dinner under the stars..." },
    ]
  },
  {
    title: "All Set!",
    description: "Your profile is complete",
    fields: []
  }
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    interests: "",
    partnerPreferences: "",
    photo: null,
    idealDate: ""
  });
  const [voiceActive, setVoiceActive] = useState(true);
  const [speaking, setSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [photoPreview, setPhotoPreview] = useState("");

  useEffect(() => {
    // Calculate progress percentage
    setProgress((currentStep / (OnboardingSteps.length - 1)) * 100);
    
    // Simulate voice assistant speaking
    if (voiceActive) {
      setSpeaking(true);
      // In a real app, this would use a text-to-speech API
      const timer = setTimeout(() => {
        setSpeaking(false);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [currentStep, voiceActive]);

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === "file" && files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
      setPhotoPreview(URL.createObjectURL(files[0]));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleNext = () => {
    // In a real app, validate each step before proceeding
    if (currentStep < OnboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      toast({
        title: "Onboarding Complete!",
        description: "Welcome to MatchboxLove! We've found some great matches for you.",
      });
      navigate("/dashboard");
    }
  };

  const toggleVoiceAssistant = () => {
    setVoiceActive(!voiceActive);
    toast({
      title: voiceActive ? "Voice Assistant Disabled" : "Voice Assistant Enabled",
      description: voiceActive ? "You can enable it again anytime." : "I'll guide you through the process.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <header className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <h1 className="text-xl font-bold">MatchboxLove</h1>
          </Link>
          <Progress value={progress} className="w-1/3" />
          <Button variant="ghost" size="icon" onClick={toggleVoiceAssistant}>
            {voiceActive ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Voice Assistant */}
        {voiceActive && (
          <div className="mb-12 flex items-center justify-center">
            <Card className={`w-full max-w-2xl relative ${speaking ? "border-primary" : ""}`}>
              <CardContent className="p-6 flex items-center space-x-4">
                <div className={`relative ${speaking ? "animate-pulse" : ""}`}>
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarImage src="https://images.unsplash.com/photo-1525373698358-041e3a460346?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                  {speaking && (
                    <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-green-500 border-2 border-white" />
                  )}
                </div>
                <div>
                  <p className="text-lg font-medium">AI Assistant</p>
                  <p className="text-gray-600">{voiceAssistantScript[currentStep]}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Onboarding Form */}
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>{OnboardingSteps[currentStep].title}</CardTitle>
            <CardDescription>{OnboardingSteps[currentStep].description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {OnboardingSteps[currentStep].fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name}>{field.label}</Label>
                
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                ) : field.type === "file" ? (
                  <div className="space-y-4">
                    <Input
                      id={field.name}
                      name={field.name}
                      type="file"
                      accept="image/*"
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <label 
                      htmlFor={field.name}
                      className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      {photoPreview ? (
                        <img src={photoPreview} alt="Preview" className="h-full object-contain" />
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <p className="mb-2 text-sm text-gray-500">Click to upload a photo</p>
                          <p className="text-xs text-gray-500">PNG, JPG or GIF</p>
                        </div>
                      )}
                    </label>
                  </div>
                ) : (
                  <Input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            ))}

            {currentStep === OnboardingSteps.length - 1 && (
              <div className="py-4 text-center">
                <p className="text-xl font-semibold text-green-600">You're all set!</p>
                <p className="text-gray-600 mt-2">Based on your profile, we've found some great matches for you.</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {currentStep > 0 && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Back
              </Button>
            )}
            <div className={currentStep === 0 ? "w-full flex justify-center" : "ml-auto"}>
              <Button onClick={handleNext}>
                {currentStep < OnboardingSteps.length - 1 ? "Continue" : "Find Matches"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default Onboarding;
