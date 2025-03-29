
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, MapPin, Users, Star, MessageSquare, Search } from "lucide-react";

// Mock data for events and matches
const mockEvents = [
  { id: 1, title: "Tech Conference 2023", date: "2023-11-15", location: "San Francisco, CA", attendees: 1500, match: 92 },
  { id: 2, title: "Marketing Summit", date: "2023-11-25", location: "New York, NY", attendees: 800, match: 78 },
  { id: 3, title: "Design Workshop", date: "2023-12-05", location: "Austin, TX", attendees: 300, match: 95 },
  { id: 4, title: "Startup Networking", date: "2023-12-12", location: "Boston, MA", attendees: 250, match: 81 },
];

// Mock AI matching suggestions
const aiSuggestions = [
  "Based on your interests in tech and innovation, the 'Tech Conference 2023' would be a perfect match.",
  "Your design background suggests the 'Design Workshop' would provide valuable connections.",
  "Your recent activities show interest in entrepreneurship, making 'Startup Networking' a great opportunity.",
  "The 'Marketing Summit' aligns with your recent career exploration in digital marketing."
];

const Dashboard = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [interestInput, setInterestInput] = useState("");
  const [userInterests, setUserInterests] = useState<string[]>(["Technology", "Design", "Networking"]);
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  
  const handleAddInterest = () => {
    if (interestInput.trim() && !userInterests.includes(interestInput.trim())) {
      setUserInterests([...userInterests, interestInput.trim()]);
      setInterestInput("");
      toast({
        title: "Interest added",
        description: `'${interestInput.trim()}' has been added to your interests.`
      });
    }
  };
  
  const removeInterest = (interest: string) => {
    setUserInterests(userInterests.filter(i => i !== interest));
  };
  
  const generateMatches = () => {
    setShowAiSuggestions(true);
    toast({
      title: "AI Match Generation Complete",
      description: "We've analyzed your profile and found several excellent event matches!"
    });
  };
  
  const registerForEvent = (eventId: number) => {
    toast({
      title: "Registration Successful",
      description: `You've been registered for ${mockEvents.find(e => e.id === eventId)?.title}`,
    });
  };
  
  const filteredEvents = mockEvents.filter(event => 
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">EventMatch</h1>
          <Button variant="ghost">Logout</Button>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Profile & Interests Section */}
            <div className="md:col-span-1">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>My Profile</CardTitle>
                  <CardDescription>Update your interests to get better matches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Your Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {userInterests.map((interest, index) => (
                        <div key={index} className="bg-primary/10 text-primary text-sm rounded-full px-3 py-1 flex items-center gap-1">
                          {interest}
                          <button 
                            onClick={() => removeInterest(interest)}
                            className="text-primary hover:text-primary/80 ml-1"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Add new interest" 
                      value={interestInput}
                      onChange={(e) => setInterestInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddInterest()}
                    />
                    <Button onClick={handleAddInterest}>Add</Button>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    onClick={generateMatches}
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Generate AI Matches
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Events Section */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Upcoming Events</CardTitle>
                      <CardDescription>Discover events that match your interests</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search events..."
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {/* AI Suggestions */}
                  {showAiSuggestions && (
                    <div className="mb-6 p-4 bg-purple-50 rounded-lg border border-purple-200 animate-fade-in">
                      <h3 className="font-medium text-purple-800 flex items-center">
                        <Star className="mr-2 h-4 w-4" />
                        AI-Powered Event Recommendations
                      </h3>
                      <ul className="mt-2 space-y-2">
                        {aiSuggestions.map((suggestion, index) => (
                          <li key={index} className="text-sm text-gray-600 flex">
                            <span className="text-purple-500 mr-2">•</span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Events List */}
                  <div className="space-y-4">
                    {filteredEvents.length > 0 ? (
                      filteredEvents.map((event) => (
                        <div 
                          key={event.id} 
                          className="p-4 border rounded-lg hover:shadow-md transition-shadow flex justify-between items-center"
                        >
                          <div className="space-y-1">
                            <h3 className="font-medium">{event.title}</h3>
                            <div className="flex items-center text-sm text-gray-500 space-x-4">
                              <span className="flex items-center">
                                <Calendar className="mr-1 h-3 w-3" />
                                {event.date}
                              </span>
                              <span className="flex items-center">
                                <MapPin className="mr-1 h-3 w-3" />
                                {event.location}
                              </span>
                              <span className="flex items-center">
                                <Users className="mr-1 h-3 w-3" />
                                {event.attendees} attendees
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="text-right">
                              <div className="font-medium text-emerald-600">{event.match}%</div>
                              <div className="text-xs text-gray-500">match</div>
                            </div>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm">Register</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Register for {event.title}</DialogTitle>
                                  <DialogDescription>
                                    This event has a {event.match}% match with your interests.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">Name</Label>
                                    <Input id="name" defaultValue="John Doe" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">Email</Label>
                                    <Input id="email" defaultValue="john@example.com" className="col-span-3" />
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="message" className="text-right">Why interested?</Label>
                                    <Textarea id="message" placeholder="Share why you're interested in this event..." className="col-span-3" />
                                  </div>
                                </div>
                                <DialogFooter>
                                  <Button onClick={() => registerForEvent(event.id)}>Confirm Registration</Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No events found matching your search.
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
