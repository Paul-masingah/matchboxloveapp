
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Heart, MessageCircle, User, Settings, LogOut, Calendar, MapPin,
  ThumbsUp, ThumbsDown, Star, Filter, Sparkles, Zap, Users, ImageIcon
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Mock data for potential matches
const potentialMatches = [
  {
    id: 1,
    name: "Olivia Parker",
    age: 27,
    location: "San Francisco, CA",
    distance: "3 miles away",
    bio: "Art curator by day, amateur chef by night. Love hiking, photography, and exploring new restaurants.",
    interests: ["Art", "Cooking", "Hiking", "Photography", "Travel"],
    photos: [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    lifestylePhotos: [
      {
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        caption: "At my favorite museum"
      },
      {
        image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        caption: "Cooking my signature dish"
      }
    ],
    compatibility: 94,
    commonInterests: 5,
    recommendedEvents: [
      { id: 1, name: "Art Gallery Opening", date: "June 15" },
      { id: 2, name: "Food Festival", date: "June 22" }
    ],
    conversationStarters: [
      "I noticed you like photography. What's your favorite subject to shoot?",
      "Have you tried any new restaurants in the city lately?",
      "What's your favorite hiking trail in the area?"
    ]
  },
  {
    id: 2,
    name: "Ethan Miller",
    age: 29,
    location: "Oakland, CA",
    distance: "8 miles away",
    bio: "Software engineer who loves outdoor adventures. Passionate about rock climbing, craft beer, and live music.",
    interests: ["Climbing", "Music", "Craft Beer", "Coding", "Camping"],
    photos: [
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    lifestylePhotos: [
      {
        image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        caption: "Rock climbing in Yosemite"
      },
      {
        image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        caption: "At a music festival last summer"
      }
    ],
    compatibility: 89,
    commonInterests: 3,
    recommendedEvents: [
      { id: 3, name: "Rock Climbing Competition", date: "June 18" },
      { id: 4, name: "Craft Beer Festival", date: "July 2" }
    ],
    conversationStarters: [
      "What's the most challenging climb you've ever done?",
      "Have you been to any good concerts lately?",
      "What's your favorite local brewery?"
    ]
  },
  {
    id: 3,
    name: "Sophia Chen",
    age: 26,
    location: "San Jose, CA",
    distance: "15 miles away",
    bio: "UX designer and yoga enthusiast. Love reading, meditation, and trying new vegetarian recipes.",
    interests: ["Yoga", "Design", "Reading", "Cooking", "Mindfulness"],
    photos: [
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581518671845-6f76bd6a3241?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    compatibility: 87,
    commonInterests: 2,
    recommendedEvents: [
      { id: 5, name: "Wellness Retreat", date: "June 25" },
      { id: 6, name: "Design Conference", date: "July 8" }
    ],
    conversationStarters: [
      "What's your favorite yoga pose?",
      "Have you read any good books lately?",
      "Do you have a go-to vegetarian recipe?"
    ]
  },
  {
    id: 4,
    name: "James Wilson",
    age: 30,
    location: "San Francisco, CA",
    distance: "5 miles away",
    bio: "Financial analyst by day, jazz musician by night. Passionate about travel, good wine, and classic films.",
    interests: ["Music", "Travel", "Wine", "Movies", "Finance"],
    photos: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542176281-1e2b306dd6a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    compatibility: 84,
    commonInterests: 4,
    recommendedEvents: [
      { id: 7, name: "Jazz in the Park", date: "June 17" },
      { id: 8, name: "Wine Tasting Tour", date: "June 30" }
    ],
    conversationStarters: [
      "What instrument do you play?",
      "What's the most memorable place you've traveled to?",
      "Do you have a favorite film director?"
    ]
  },
];

// Mock events data
const eventsData = [
  {
    id: 1,
    name: "Art Gallery Opening",
    description: "Exclusive opening night for a new modern art exhibition featuring local artists.",
    date: "June 15, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "Modern Art Gallery, San Francisco",
    attendees: 120,
    potentialMatches: 8,
    compatibility: 92,
    image: "https://images.unsplash.com/photo-1532883130916-5216f9e90904?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    name: "Food Festival",
    description: "Sample cuisines from top local chefs and restaurants in this culinary celebration.",
    date: "June 22, 2023",
    time: "12:00 PM - 6:00 PM",
    location: "Civic Center Plaza, San Francisco",
    attendees: 350,
    potentialMatches: 15,
    compatibility: 89,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    name: "Rock Climbing Competition",
    description: "Watch professional climbers compete or join the amateur division for a chance to win prizes.",
    date: "June 18, 2023",
    time: "10:00 AM - 5:00 PM",
    location: "Boulder Gym, Oakland",
    attendees: 85,
    potentialMatches: 6,
    compatibility: 87,
    image: "https://images.unsplash.com/photo-1516592673884-4a382d1124c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    name: "Craft Beer Festival",
    description: "Featuring over 50 local breweries with special tastings and food pairings.",
    date: "July 2, 2023",
    time: "1:00 PM - 7:00 PM",
    location: "Waterfront Park, San Francisco",
    attendees: 275,
    potentialMatches: 12,
    compatibility: 85,
    image: "https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
];

const Matches = () => {
  const { toast } = useToast();
  const [currentMatch, setCurrentMatch] = useState(potentialMatches[0]);
  const [filters, setFilters] = useState({
    distance: [25],
    age: [25, 35],
    showOnlyHighCompatibility: false,
  });
  const [showFilters, setShowFilters] = useState(false);

  const handleLike = () => {
    toast({
      title: "It's a Match!",
      description: `You and ${currentMatch.name} have liked each other. Start a conversation!`,
    });
    
    // Move to the next match
    const currentIndex = potentialMatches.findIndex(match => match.id === currentMatch.id);
    const nextIndex = (currentIndex + 1) % potentialMatches.length;
    setCurrentMatch(potentialMatches[nextIndex]);
  };

  const handlePass = () => {
    toast({
      title: "Passed",
      description: "We'll keep looking for great matches for you!",
    });
    
    // Move to the next match
    const currentIndex = potentialMatches.findIndex(match => match.id === currentMatch.id);
    const nextIndex = (currentIndex + 1) % potentialMatches.length;
    setCurrentMatch(potentialMatches[nextIndex]);
  };

  const handleRegisterForEvent = (eventId) => {
    toast({
      title: "Event Registration Successful",
      description: "We've added this event to your calendar. Get ready to meet some great matches!",
    });
  };

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    setShowFilters(false);
    toast({
      title: "Filters Applied",
      description: "Your match preferences have been updated.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-rose-500" />
              <h1 className="text-xl font-bold">MatchboxLove</h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/dashboard" className="flex items-center text-sm font-medium text-primary">
                <Users className="mr-2 h-4 w-4" />
                Matches
              </Link>
              <Link to="/chat" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
              </Link>
              <Link to="/profile" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                <User className="mr-2 h-4 w-4" />
                Profile
              </Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Match Preferences */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Match Preferences</CardTitle>
                    <CardDescription>Refine your matching criteria</CardDescription>
                  </div>
                  <Dialog open={showFilters} onOpenChange={setShowFilters}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filters
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Match Filters</DialogTitle>
                        <DialogDescription>
                          Adjust your preferences to find your ideal match
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-4">
                        <div className="space-y-2">
                          <Label>Distance (miles)</Label>
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>0</span>
                            <span>{filters.distance[0]}</span>
                            <span>50</span>
                          </div>
                          <Slider
                            value={filters.distance}
                            min={0}
                            max={50}
                            step={1}
                            onValueChange={(value) => handleFilterChange("distance", value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Age Range</Label>
                          <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>18</span>
                            <span>{filters.age[0]} - {filters.age[1]}</span>
                            <span>50</span>
                          </div>
                          <Slider
                            value={filters.age}
                            min={18}
                            max={50}
                            step={1}
                            onValueChange={(value) => handleFilterChange("age", value)}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Label htmlFor="highCompatibility">Show only high compatibility (85%+)</Label>
                          <Switch
                            id="highCompatibility"
                            checked={filters.showOnlyHighCompatibility}
                            onCheckedChange={(value) => handleFilterChange("showOnlyHighCompatibility", value)}
                          />
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <Button onClick={applyFilters}>Apply Filters</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Your Top Compatibility Factors</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Shared Interests</span>
                        <span className="font-medium">90%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Communication Style</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Values Alignment</span>
                        <span className="font-medium">88%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-primary rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">AI Matching Insights</h3>
                  <Card className="bg-gray-50 border-dashed">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm">
                            Based on your profile and interactions, you tend to connect best with creative individuals who share your love for outdoor activities and meaningful conversations.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Daily Match Statistics</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">89%</p>
                      <p className="text-xs text-gray-500">Average Compatibility</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">8</p>
                      <p className="text-xs text-gray-500">New Matches Today</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Matching Interface */}
          <div className="md:col-span-2">
            <Tabs defaultValue="discover">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="discover" className="flex-1">Discover</TabsTrigger>
                <TabsTrigger value="lifestyle" className="flex-1">Lifestyle Photos</TabsTrigger>
                <TabsTrigger value="events" className="flex-1">Recommended Events</TabsTrigger>
              </TabsList>
              
              <TabsContent value="discover" className="space-y-6">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="relative">
                      <Carousel>
                        <CarouselContent>
                          {currentMatch.photos.map((photo, index) => (
                            <CarouselItem key={index}>
                              <div className="aspect-[3/4] overflow-hidden">
                                <img 
                                  src={photo} 
                                  alt={`${currentMatch.name} photo ${index + 1}`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                      
                      <div className="absolute top-4 right-4 bg-gray-900/70 text-white rounded-full px-3 py-1 flex items-center">
                        <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                        <span className="text-sm font-medium">{currentMatch.compatibility}% Match</span>
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold flex items-center">
                          {currentMatch.name}, {currentMatch.age}
                          
                        </h2>
                        <p className="text-gray-500 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {currentMatch.distance}
                        </p>
                      </div>
                      
                      <p className="text-gray-700">{currentMatch.bio}</p>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2">Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {currentMatch.interests.map((interest, index) => (
                            <span
                              key={index}
                              className="bg-primary/10 text-primary text-xs rounded-full px-3 py-1"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1 text-primary" />
                          AI Recommended Conversation Starters
                        </h3>
                        <div className="space-y-2">
                          {currentMatch.conversationStarters.map((starter, index) => (
                            <div 
                              key={index} 
                              className="bg-gray-50 p-3 rounded-lg text-sm cursor-pointer hover:bg-gray-100"
                              onClick={() => {
                                toast({
                                  title: "Conversation Starter Copied",
                                  description: "Ready to paste in your conversation!",
                                });
                              }}
                            >
                              "{starter}"
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between py-4">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="rounded-full h-14 w-14 p-0" 
                      onClick={handlePass}
                    >
                      <ThumbsDown className="h-6 w-6 text-gray-500" />
                    </Button>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="rounded-full h-14 w-14 p-0" 
                        >
                          <Calendar className="h-6 w-6 text-primary" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Suggested Events with {currentMatch.name}</DialogTitle>
                          <DialogDescription>
                            Our AI has identified these events as perfect opportunities to connect
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          {currentMatch.recommendedEvents.map((event) => (
                            <div key={event.id} className="border rounded-lg p-4">
                              <h4 className="font-medium">{event.name}</h4>
                              <p className="text-sm text-gray-500">{event.date}</p>
                              <Button 
                                className="mt-2" 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleRegisterForEvent(event.id)}
                              >
                                Register Together
                              </Button>
                            </div>
                          ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="rounded-full h-14 w-14 p-0 bg-gradient-to-r from-pink-500 to-rose-500" 
                      onClick={handleLike}
                    >
                      <Heart className="h-6 w-6" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="lifestyle" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lifestyle Photos</CardTitle>
                    <CardDescription>Get a glimpse into {currentMatch.name}'s daily life</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentMatch.lifestylePhotos?.map((photo, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="aspect-video relative">
                            <img 
                              src={photo.image} 
                              alt={photo.caption} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="font-medium">{photo.caption}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Heart className="h-4 w-4 mr-1" />
                              <span>Shared interest: {currentMatch.interests[index % currentMatch.interests.length]}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-dashed">
                      <div className="flex items-start space-x-3">
                        <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm font-medium">Lifestyle Compatibility</p>
                          <p className="text-sm text-gray-600 mt-1">
                            You and {currentMatch.name} share similar lifestyle preferences in 
                            {currentMatch.interests.slice(0, 2).join(" and ")}. These shared activities 
                            could form a great foundation for your connection!
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      onClick={() => {
                        toast({
                          title: "Message Sent",
                          description: `You've started a conversation with ${currentMatch.name} about their lifestyle photos!`,
                        });
                      }}
                      className="w-full"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Start a Conversation
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {eventsData.map((event) => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={event.image} 
                          alt={event.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-black/70 text-white rounded-full px-3 py-1 flex items-center">
                          <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                          <span className="text-sm">{event.compatibility}% Match</span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.name}</CardTitle>
                        <CardDescription>{event.date} • {event.time}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-gray-700">{event.description}</p>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-1" />
                          {event.location}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Users className="h-4 w-4 mr-1" />
                            {event.attendees} attending
                          </div>
                          <div className="text-sm text-green-600 font-medium">
                            {event.potentialMatches} potential matches
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          className="w-full"
                          onClick={() => handleRegisterForEvent(event.id)}
                        >
                          Register for Event
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Matches;
