
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, User, Users, Map, Settings, LogOut, Mail, Phone, Sparkles, Brain, Shield, Clock, Zap } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "CEO & Founder",
    bio: "Sarah is a data scientist with a PhD in AI and psychology. She founded MatchboxLove to revolutionize the way people connect.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Michael leads our AI development team with over 15 years experience in machine learning and compatibility algorithms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Lisa Rodriguez",
    role: "Head of User Experience",
    bio: "Lisa ensures our platform provides a seamless, intuitive experience for users seeking meaningful connections.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "James Wilson",
    role: "Director of Events",
    bio: "James curates our events platform, creating opportunities for compatible matches to meet in engaging, real-world settings.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const services = [
  {
    title: "AI Matchmaking",
    description: "Our proprietary algorithm analyzes over 100 compatibility factors to find your ideal match.",
    icon: Brain,
  },
  {
    title: "Event-Based Connections",
    description: "Meet compatible matches at curated events designed for meaningful interaction.",
    icon: Users,
  },
  {
    title: "Voice-Guided Onboarding",
    description: "Our AI assistant helps you create a profile that truly represents who you are.",
    icon: MessageCircle,
  },
  {
    title: "Intelligent Conversation",
    description: "Get personalized conversation starters and communication guidance.",
    icon: Sparkles,
  },
  {
    title: "Safety & Verification",
    description: "Advanced identity verification and safety features for secure connections.",
    icon: Shield,
  },
  {
    title: "Relationship Insights",
    description: "Gain valuable insights about your communication styles and compatibility.",
    icon: Zap,
  },
];

const locations = [
  { city: "San Francisco", state: "CA", members: "15,000+" },
  { city: "New York", state: "NY", members: "12,000+" },
  { city: "Los Angeles", state: "CA", members: "10,000+" },
  { city: "Chicago", state: "IL", members: "8,000+" },
  { city: "Austin", state: "TX", members: "7,500+" },
  { city: "Boston", state: "MA", members: "6,000+" },
  { city: "Seattle", state: "WA", members: "5,500+" },
  { city: "Denver", state: "CO", members: "5,000+" },
  { city: "Miami", state: "FL", members: "4,500+" },
];

const faqs = [
  {
    question: "How does the AI matchmaking algorithm work?",
    answer: "Our proprietary algorithm analyzes over 100 compatibility factors including personality traits, interests, values, and communication styles. We use machine learning to continuously improve match quality based on successful connections."
  },
  {
    question: "Are my personal data and conversations private?",
    answer: "Absolutely. We implement bank-level encryption for all personal data and conversations. Your information is never sold to third parties, and you have complete control over what information is visible to other users."
  },
  {
    question: "How are the events organized and vetted?",
    answer: "Our events team carefully curates and vets each event partner to ensure high-quality experiences. Events are selected based on their potential for meaningful interaction and are matched to your interests and preferences."
  },
  {
    question: "Can I use MatchboxLove if I'm looking for friendship rather than dating?",
    answer: "Yes! MatchboxLove can be used for finding compatible friends as well. Simply specify your relationship goals during onboarding, and our algorithm will focus on friendship compatibility."
  },
  {
    question: "How much does MatchboxLove cost?",
    answer: "MatchboxLove offers a free tier with basic matching features. Premium subscriptions start at $19.99/month and include advanced AI matching, unlimited messaging, and exclusive event access."
  },
  {
    question: "How is MatchboxLove different from other dating apps?",
    answer: "Unlike traditional dating apps that focus primarily on photos and simple swiping, MatchboxLove uses advanced AI to understand deeper compatibility factors and emphasizes real-world connections through curated events."
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <h1 className="text-xl font-bold">MatchboxLove</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium text-gray-600 hover:text-primary">Home</Link>
              <Link to="/about" className="text-sm font-medium text-primary">About Us</Link>
              <Link to="/about#services" className="text-sm font-medium text-gray-600 hover:text-primary">Services</Link>
              <Link to="/about#areas" className="text-sm font-medium text-gray-600 hover:text-primary">Areas We Serve</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="outline" size="sm">Log In</Button>
              </Link>
              <Link to="/auth?signup=true">
                <Button size="sm">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              At MatchboxLove, we're revolutionizing the way people form meaningful connections using the power of AI and real-world experiences.
            </p>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm border">
              <p className="text-lg italic text-gray-600">
                "We believe that true compatibility goes beyond surface-level attraction. Our mission is to use technology to help people find deeper, more meaningful connections based on who they truly are."
              </p>
              <div className="mt-4 flex items-center justify-center">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={teamMembers[0].image} />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="font-medium">{teamMembers[0].name}</p>
                  <p className="text-sm text-gray-500">{teamMembers[0].role}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    MatchboxLove was founded in 2020 by Dr. Sarah Johnson, who saw an opportunity to combine her expertise in AI and psychology to transform the online dating landscape.
                  </p>
                  <p>
                    After years of research into what makes relationships successful, Sarah developed a revolutionary algorithm that could identify compatibility factors with unprecedented accuracy.
                  </p>
                  <p>
                    But she also recognized that digital connections alone weren't enough. That's why MatchboxLove pioneered the integration of AI-matched events, bringing compatible people together in real-world settings designed for meaningful interaction.
                  </p>
                  <p>
                    Today, MatchboxLove has helped create over 50,000 relationships and continues to evolve its technology to make connections more meaningful than ever.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Team collaboration" 
                    className="rounded-lg object-cover w-full h-48"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="AI technology" 
                    className="rounded-lg object-cover w-full h-64"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Couple at event" 
                    className="rounded-lg object-cover w-full h-64"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Digital connection" 
                    className="rounded-lg object-cover w-full h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index}>
                  <CardHeader className="text-center pb-2">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.image} />
                      <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              MatchboxLove offers a comprehensive suite of AI-powered services designed to create meaningful connections.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section id="areas" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
              MatchboxLove is available in major cities across the United States, with new locations added regularly.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="text-center">
                  <CardHeader className="pb-2">
                    <Map className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle>{location.city}, {location.state}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-medium">{location.members} Members</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your city? We're expanding rapidly!</p>
              <Button variant="outline">Request Your City</Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Still have questions?</p>
                <Button>Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Mail className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <h3 className="font-medium">Email Us</h3>
                      <p className="text-gray-600">support@matchboxlove.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <Phone className="h-8 w-8 text-primary mr-4" />
                    <div className="text-left">
                      <h3 className="font-medium">Call Us</h3>
                      <p className="text-gray-600">(800) 555-LOVE</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="text-center">
                <Link to="/auth?signup=true">
                  <Button size="lg" className="px-8">Start Finding Matches Today</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-rose-500" />
                <h3 className="text-xl font-bold">MatchboxLove</h3>
              </div>
              <p className="text-gray-400">
                AI-powered matchmaking for meaningful connections.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/about#careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                <li><Link to="/about#press" className="text-gray-400 hover:text-white">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link to="/about#blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link to="/about#community" className="text-gray-400 hover:text-white">Community</Link></li>
                <li><Link to="/about#support" className="text-gray-400 hover:text-white">Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/about#privacy" className="text-gray-400 hover:text-white">Privacy</Link></li>
                <li><Link to="/about#terms" className="text-gray-400 hover:text-white">Terms</Link></li>
                <li><Link to="/about#cookies" className="text-gray-400 hover:text-white">Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MatchboxLove. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;
