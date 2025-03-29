
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Heart, Users, Calendar, Camera, MessageCircle, User, Settings, LogOut, Image as ImageIcon } from "lucide-react";

// Mock user data
const userData = {
  name: "Alex Johnson",
  age: 28,
  location: "San Francisco, CA",
  bio: "I'm a tech enthusiast and hiking addict. Love trying new foods and traveling to new places!",
  interests: ["Hiking", "Photography", "Reading", "Cooking", "Travel"],
  photos: [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  memoryPhotos: [
    {
      image: "https://images.unsplash.com/photo-1592861611647-9968624995ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Hiking at Yosemite, Summer 2023"
    },
    {
      image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Beach day with friends"
    },
    {
      image: "https://images.unsplash.com/photo-1605908492171-ad12a6877df8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      caption: "Concert night downtown"
    }
  ],
  compatibilityStats: {
    personalityMatch: 85,
    interestsOverlap: 72,
    communicationStyle: 90,
    relationshipGoals: 88,
    overallScore: 84
  },
  matchPreferences: {
    ageRange: "25-35",
    distance: "25 miles",
    relationshipType: "Long-term",
    dealBreakers: ["Smoking"]
  }
};

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(userData);

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile has been successfully updated.",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({
      ...profileData,
      [name]: value
    });
  };

  const handleAddPhoto = () => {
    toast({
      title: "Photo Added",
      description: "Your new photo has been added to your profile.",
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
              <Link to="/dashboard" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                <Users className="mr-2 h-4 w-4" />
                Matches
              </Link>
              <Link to="/chat" className="flex items-center text-sm font-medium text-gray-600 hover:text-primary">
                <MessageCircle className="mr-2 h-4 w-4" />
                Messages
              </Link>
              <Link to="/profile" className="flex items-center text-sm font-medium text-primary">
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
          {/* Profile Sidebar */}
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle>My Profile</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <Avatar className="h-24 w-24 mx-auto mb-4">
                  <AvatarImage src={profileData.photos[0]} />
                  <AvatarFallback>{profileData.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>

                {isEditing ? (
                  <div className="space-y-4 text-left">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={profileData.name} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        name="age" 
                        type="number" 
                        value={profileData.age} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location" 
                        name="location" 
                        value={profileData.location} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <div>
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea 
                        id="bio" 
                        name="bio" 
                        value={profileData.bio} 
                        onChange={handleInputChange} 
                      />
                    </div>
                    <Button 
                      onClick={handleSaveProfile} 
                      className="w-full"
                    >
                      Save Changes
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold">{profileData.name}, {profileData.age}</h2>
                    <p className="text-gray-500 mb-4">{profileData.location}</p>
                    <p className="text-sm text-gray-700 mb-6">{profileData.bio}</p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-sm font-medium text-left mb-2">My Interests</h3>
                        <div className="flex flex-wrap gap-2">
                          {profileData.interests.map((interest, index) => (
                            <span 
                              key={index} 
                              className="bg-primary/10 text-primary text-xs rounded-full px-3 py-1"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Match Preferences</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Age Range</p>
                    <p>{profileData.matchPreferences.ageRange}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Distance</p>
                    <p>{profileData.matchPreferences.distance}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Looking For</p>
                    <p>{profileData.matchPreferences.relationshipType}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Deal Breakers</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {profileData.matchPreferences.dealBreakers.map((item, index) => (
                        <span 
                          key={index} 
                          className="bg-red-100 text-red-600 text-xs rounded-full px-3 py-1"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Edit Preferences</Button>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <Tabs defaultValue="photos">
              <TabsList className="w-full mb-6">
                <TabsTrigger value="photos" className="flex-1">Photos</TabsTrigger>
                <TabsTrigger value="memories" className="flex-1">Memories</TabsTrigger>
                <TabsTrigger value="compatibility" className="flex-1">Compatibility Profile</TabsTrigger>
                <TabsTrigger value="activity" className="flex-1">Recent Activity</TabsTrigger>
              </TabsList>
              
              <TabsContent value="photos" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Photos</CardTitle>
                    <CardDescription>Manage your profile photos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {profileData.photos.map((photo, index) => (
                        <div key={index} className="aspect-square relative group rounded-md overflow-hidden">
                          <img 
                            src={photo} 
                            alt={`Photo ${index + 1}`} 
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="bg-white rounded-full p-2 mr-2">
                                <Settings className="h-4 w-4" />
                              </button>
                              <button className="bg-red-500 text-white rounded-full p-2">
                                <Settings className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="aspect-square border-2 border-dashed border-gray-300 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
                            <div className="text-center">
                              <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm text-gray-500">Add Photo</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add a New Photo</DialogTitle>
                            <DialogDescription>
                              Upload a photo to enhance your profile. Choose a clear photo where your face is visible.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                              <Camera className="h-10 w-10 text-gray-400 mb-4" />
                              <p className="text-sm text-gray-500 mb-2">Drag and drop your photo here, or click to browse</p>
                              <Input type="file" className="max-w-xs" />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={handleAddPhoto}>Upload Photo</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="memories" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>My Memories</CardTitle>
                    <CardDescription>Special moments from your journey</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-6">
                      {userData.memoryPhotos.map((memory, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="aspect-video relative">
                            <img 
                              src={memory.image} 
                              alt={memory.caption} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-4">
                            <p className="font-medium">{memory.caption}</p>
                            <div className="flex items-center mt-2 text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>Added on June 15, 2023</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex items-center justify-center cursor-pointer hover:bg-gray-50">
                            <div className="text-center">
                              <ImageIcon className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                              <p className="text-sm font-medium text-gray-700">Add a Memory</p>
                              <p className="text-xs text-gray-500 mt-1">Share a special moment with potential matches</p>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Add a New Memory</DialogTitle>
                            <DialogDescription>
                              Share a special moment that shows your personality and interests.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4 space-y-4">
                            <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                              <ImageIcon className="h-10 w-10 text-gray-400 mb-4" />
                              <p className="text-sm text-gray-500 mb-2">Drag and drop your photo here, or click to browse</p>
                              <Input type="file" className="max-w-xs" />
                            </div>
                            <div>
                              <Label htmlFor="caption">Caption</Label>
                              <Input id="caption" placeholder="Describe this memory..." />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button onClick={() => {
                              toast({
                                title: "Memory Added",
                                description: "Your memory has been added to your profile.",
                              });
                            }}>Add Memory</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="compatibility" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>AI Compatibility Profile</CardTitle>
                    <CardDescription>
                      Our AI has analyzed your profile and interactions to create your compatibility profile
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Compatibility Scores</h3>
                        <div className="space-y-4">
                          {Object.entries(profileData.compatibilityStats).map(([key, value]) => (
                            <div key={key}>
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-sm capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                </span>
                                <span className="text-sm font-medium">{value}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-primary rounded-full h-2" 
                                  style={{ width: `${value}%` }}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Personality Insights</h3>
                        <p className="text-gray-700">
                          You're an outgoing individual with a strong sense of adventure. You value meaningful conversations and emotional connections. You're likely to connect well with partners who share your enthusiasm for exploration and can engage in deep discussions.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Communication Style</h3>
                        <p className="text-gray-700">
                          You communicate directly and expressively. You appreciate honest, open conversations and are good at articulating your thoughts and feelings. You respond well to partners who are equally communicative and transparent.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="activity" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your recent interactions and events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Upcoming Events</h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4 p-4 rounded-lg border">
                            <Calendar className="h-10 w-10 text-primary flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Tech Networking Mixer</h4>
                              <p className="text-sm text-gray-500">Friday, June 24 • 7:00 PM</p>
                              <p className="text-sm text-gray-500">San Francisco Convention Center</p>
                              <p className="text-sm mt-2">
                                <span className="text-green-600 font-medium">3 potential matches</span> will be attending this event
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-4 p-4 rounded-lg border">
                            <Calendar className="h-10 w-10 text-primary flex-shrink-0" />
                            <div>
                              <h4 className="font-medium">Wine Tasting Tour</h4>
                              <p className="text-sm text-gray-500">Saturday, July 2 • 2:00 PM</p>
                              <p className="text-sm text-gray-500">Napa Valley Vineyards</p>
                              <p className="text-sm mt-2">
                                <span className="text-green-600 font-medium">5 potential matches</span> will be attending this event
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Recent Matches</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 rounded-lg border">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" />
                                <AvatarFallback>JD</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Jamie Dawson</h4>
                                <p className="text-sm text-gray-500">Matched 2 days ago</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">View Profile</Button>
                              <Button size="sm">Message</Button>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between p-4 rounded-lg border">
                            <div className="flex items-center space-x-3">
                              <Avatar>
                                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80" />
                                <AvatarFallback>CR</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium">Chris Rodriguez</h4>
                                <p className="text-sm text-gray-500">Matched 5 days ago</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">View Profile</Button>
                              <Button size="sm">Message</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
