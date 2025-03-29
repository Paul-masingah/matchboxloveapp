
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MessageCircle, Users, Calendar, Star, Sparkles, MicIcon, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced algorithm analyzes compatibility factors to find your perfect match.",
    icon: Sparkles,
  },
  {
    title: "Voice-Guided Onboarding",
    description: "Get started with our friendly AI voice assistant that guides you through setup.",
    icon: MicIcon,
  },
  {
    title: "Smart Event Matching",
    description: "Discover events where you're likely to meet compatible partners.",
    icon: Calendar,
  },
  {
    title: "Intelligent Chat",
    description: "Our AI chatbot helps facilitate meaningful conversations.",
    icon: MessageCircle,
  },
  {
    title: "Compatibility Scoring",
    description: "See detailed compatibility scores based on interests, values, and goals.",
    icon: Zap,
  },
  {
    title: "Community Events",
    description: "Join curated events designed for maximum connection potential.",
    icon: Users,
  },
];

const testimonials = [
  {
    name: "Jessica M.",
    text: "The AI matchmaking was spot on! I met my partner at an event suggested by the app.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael T.",
    text: "The voice onboarding made setup so easy, and the matches I get are much more relevant than other apps.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Sarah L.",
    text: "I love how the app suggests events where I'm likely to connect with compatible people.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Index = () => {
  const { toast } = useToast();

  const handleDemoClick = () => {
    toast({
      title: "Demo Mode Activated",
      description: "You're experiencing MatchboxLove in demo mode.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-rose-500" />
            <h1 className="text-xl font-bold">MatchboxLove</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary">How It Works</Link>
            <Link to="/about#services" className="text-sm font-medium hover:text-primary">Services</Link>
            <Link to="/about#areas" className="text-sm font-medium hover:text-primary">Areas We Serve</Link>
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
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            Find Your Perfect Match with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            MatchboxLove uses advanced AI to connect you with compatible partners and suggest events where you're likely to hit it off.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding">
              <Button size="lg" className="px-8 py-6 text-lg rounded-full">
                Start Your Journey
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-lg rounded-full"
              onClick={handleDemoClick}
            >
              Try Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Meet Your Match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join MatchboxLove today and experience the power of AI-driven matchmaking.
          </p>
          <Link to="/auth?signup=true">
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg rounded-full bg-white text-primary hover:bg-gray-100">
              Create Your Profile
            </Button>
          </Link>
        </div>
      </section>

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

export default Index;
