
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown, Heart, Calendar, MessageSquare, Users } from "lucide-react";

const Index = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [preference, setPreference] = useState("");
  const [activeFeature, setActiveFeature] = useState(0);

  const showNotification = () => {
    toast({
      title: "Welcome to LoveConnect",
      description: "Your AI-powered matchmaking journey begins here",
    });
  };

  const handleQuickMatchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !gender || !preference) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields to find your match",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Profile Submitted!",
      description: "We're finding your perfect matches now",
    });
  };

  const features = [
    {
      title: "AI-Powered Matching",
      description: "Our algorithm analyzes 100+ compatibility factors to find your perfect match",
      icon: <Heart className="h-10 w-10 text-pink-600" />,
    },
    {
      title: "Curated Events",
      description: "Meet your matches in person at our exclusive, thoughtfully designed events",
      icon: <Calendar className="h-10 w-10 text-purple-600" />,
    },
    {
      title: "Meaningful Conversations",
      description: "Our prompts help you skip the small talk and connect on a deeper level",
      icon: <MessageSquare className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Community Focus",
      description: "Join a community of like-minded individuals seeking genuine connections",
      icon: <Users className="h-10 w-10 text-blue-600" />,
    },
  ];

  const faqs = [
    {
      question: "How does the AI matching algorithm work?",
      answer: "Our proprietary algorithm analyzes over 100 personality traits and preferences using a combination of your profile information, interaction patterns, and compatibility metrics developed by relationship psychologists.",
    },
    {
      question: "How are the in-person events organized?",
      answer: "We host curated events monthly in major cities, ranging from intimate dinners to activity-based meetups. All events are designed to facilitate meaningful conversations in comfortable settings.",
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use enterprise-grade encryption and never share your personal data with third parties. Your privacy is our top priority.",
    },
    {
      question: "Can I specify my preferences for matching?",
      answer: "Yes, you can set detailed preferences for age range, location, interests, and relationship goals. Our AI takes these into account while also identifying compatible matches you might not have considered.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-pulse">
            LoveConnect
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            AI-powered matchmaking for meaningful connections
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  Find Your Match
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Quick Match Profile</DialogTitle>
                  <DialogDescription>
                    Fill out this brief form to start finding your perfect matches.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleQuickMatchSubmit}>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        Name
                      </Label>
                      <Input 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="age" className="text-right">
                        Age
                      </Label>
                      <Input 
                        id="age" 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                        className="col-span-3" 
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="gender" className="text-right">
                        Gender
                      </Label>
                      <Select value={gender} onValueChange={setGender}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="nonbinary">Non-binary</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="preference" className="text-right">
                        Looking for
                      </Label>
                      <Select value={preference} onValueChange={setPreference}>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="men">Men</SelectItem>
                          <SelectItem value="women">Women</SelectItem>
                          <SelectItem value="nonbinary">Non-binary</SelectItem>
                          <SelectItem value="everyone">Everyone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit">Start Matching</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button variant="outline" onClick={showNotification}>
              Learn More
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-500" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Connect Hearts
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-sm">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? "bg-white shadow-md" 
                      : "hover:bg-white/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      {activeFeature === index && (
                        <p className="text-gray-600 mt-2 animate-fade-in">{feature.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="mb-4">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-xl font-bold">{features[activeFeature].title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{features[activeFeature].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Sarah & Michael</h4>
                  <p className="text-sm text-gray-500">Matched 8 months ago</p>
                </div>
              </div>
              <p className="text-gray-600">"The compatibility questionnaire was spot on! We connected instantly at the first event and have been together ever since."</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm transform transition-transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-pink-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">David & Emma</h4>
                  <p className="text-sm text-gray-500">Matched 1 year ago</p>
                </div>
              </div>
              <p className="text-gray-600">"I was skeptical about AI matchmaking, but the questions were so thoughtful. Meeting at the curated dinner event felt natural and comfortable."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-gray-600 mb-8">
            Join over 750,000 people who have found meaningful connections through our AI-powered matchmaking.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 animate-pulse"
              >
                Get Started Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Quick Match Profile</DialogTitle>
                <DialogDescription>
                  Fill out this brief form to start finding your perfect matches.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleQuickMatchSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name-2" className="text-right">
                      Name
                    </Label>
                    <Input 
                      id="name-2" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      className="col-span-3" 
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age-2" className="text-right">
                      Age
                    </Label>
                    <Input 
                      id="age-2" 
                      type="number" 
                      value={age} 
                      onChange={(e) => setAge(e.target.value)} 
                      className="col-span-3" 
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="gender-2" className="text-right">
                      Gender
                    </Label>
                    <Select value={gender} onValueChange={setGender}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="nonbinary">Non-binary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="preference-2" className="text-right">
                      Looking for
                    </Label>
                    <Select value={preference} onValueChange={setPreference}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="men">Men</SelectItem>
                        <SelectItem value="women">Women</SelectItem>
                        <SelectItem value="nonbinary">Non-binary</SelectItem>
                        <SelectItem value="everyone">Everyone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Start Matching</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                LoveConnect
              </h3>
              <p className="text-gray-500 mt-2">AI-powered matchmaking for meaningful connections</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} LoveConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
