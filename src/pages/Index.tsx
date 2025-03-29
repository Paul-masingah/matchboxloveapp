
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Calendar, Search, Star, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Find Your Perfect Event Match
          </h1>
          <p className="text-xl mb-10 text-gray-700 max-w-3xl mx-auto">
            Connect with events and people that perfectly align with your interests, powered by AI matching technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <Link to="/auth?tab=login">
                <LogIn className="h-5 w-5" />
                Login
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link to="/auth?tab=register">
                <UserPlus className="h-5 w-5" />
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How EventMatch Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Discover Events</h3>
              <p className="text-gray-600 text-center">
                Browse through thousands of events across various categories, from tech conferences to art exhibitions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Star className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">AI Matching</h3>
              <p className="text-gray-600 text-center">
                Our advanced AI analyzes your interests and previous events to recommend perfect matches for you.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Connect</h3>
              <p className="text-gray-600 text-center">
                Connect with like-minded attendees before, during, and after events to expand your network.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Next Great Event?</h2>
          <p className="text-xl mb-10 text-gray-700">
            Join thousands of users who have found their perfect event matches with our AI-powered platform.
          </p>
          <Button asChild size="lg">
            <Link to="/auth?tab=register">Get Started For Free</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-gray-500 text-sm">
            <p>© 2023 EventMatch. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
