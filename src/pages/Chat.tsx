
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Heart, Search, Send, Sparkles, Info, Phone, VideoIcon, User, Settings, LogOut } from "lucide-react";

// Mock conversation data
const conversations = [
  {
    id: 1,
    name: "Emma Thompson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "Looking forward to the art exhibition this weekend!",
    time: "2m ago",
    unread: 3,
    online: true,
    compatibility: 92,
  },
  {
    id: 2,
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "That hiking trail sounds perfect. When were you thinking of going?",
    time: "1h ago",
    unread: 0,
    online: true,
    compatibility: 88,
  },
  {
    id: 3,
    name: "Sophie Miller",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "I loved that book too! Have you read any others by that author?",
    time: "3h ago",
    unread: 0,
    online: false,
    compatibility: 85,
  },
  {
    id: 4,
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastMessage: "Dinner was great, thanks for the recommendation!",
    time: "1d ago",
    unread: 0,
    online: false,
    compatibility: 79,
  },
];

// Mock messages for conversation
const mockMessages = [
  {
    id: 1,
    sender: "Emma Thompson",
    content: "Hi! I noticed we both love modern art. Have you been to the new exhibition at MoMA?",
    time: "10:30 AM",
    isUser: false,
  },
  {
    id: 2,
    sender: "You",
    content: "Hey! Yes, I went last weekend actually. The new installations were amazing!",
    time: "10:32 AM",
    isUser: true,
  },
  {
    id: 3,
    sender: "Emma Thompson",
    content: "That's awesome! I'm planning to go this weekend. Any particular pieces you'd recommend looking out for?",
    time: "10:35 AM",
    isUser: false,
  },
  {
    id: 4,
    sender: "You",
    content: "Definitely check out the interactive media exhibit on the second floor. It's mind-blowing!",
    time: "10:38 AM",
    isUser: true,
  },
  {
    id: 5,
    sender: "Emma Thompson",
    content: "Thanks for the tip! Would you be interested in going together sometime? Maybe we could grab coffee after and discuss?",
    time: "10:42 AM",
    isUser: false,
  },
  {
    id: 6,
    sender: "You",
    content: "That sounds great! I'd love to. How about next Saturday?",
    time: "10:45 AM",
    isUser: true,
  },
  {
    id: 7,
    sender: "Emma Thompson",
    content: "Perfect! Saturday works for me. Let's meet at the main entrance around 2pm?",
    time: "10:47 AM",
    isUser: false,
  },
  {
    id: 8,
    sender: "Emma Thompson",
    content: "Also, I've been meaning to ask, did you see they're having a special film screening at the art house cinema next week?",
    time: "10:48 AM",
    isUser: false,
  },
];

// AI suggestions for conversation
const aiSuggestions = [
  "I'd love to meet at 2pm on Saturday! Looking forward to it.",
  "Yes, I heard about the film screening. Would you be interested in going together?",
  "What kind of art do you enjoy the most?",
  "Do you have any other favorite museums in the area?"
];

const Chat = () => {
  const { toast } = useToast();
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAiSuggestions, setShowAiSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      content: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage("");
    
    // Simulate response after a delay
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: activeConversation.name,
        content: "That sounds great! I'm really looking forward to it. Do you have any other favorite art galleries?",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false,
      };
      
      setMessages(prev => [...prev, response]);
      setShowAiSuggestions(true);
    }, 2000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleAiSuggestion = (suggestion) => {
    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      content: suggestion,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isUser: true,
    };
    
    setMessages([...messages, newMsg]);
    setShowAiSuggestions(false);
    
    // Simulate response after a delay
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: activeConversation.name,
        content: "That's wonderful! I'm excited to learn more about your artistic interests. The film is a documentary about contemporary artists - it's playing Thursday at 7pm if you'd like to join!",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isUser: false,
      };
      
      setMessages(prev => [...prev, response]);
      setShowAiSuggestions(true);
    }, 2000);
  };

  const filteredConversations = conversations.filter(convo =>
    convo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAiSuggestions = () => {
    setShowAiSuggestions(prev => !prev);
    
    toast({
      title: showAiSuggestions ? "AI Suggestions Disabled" : "AI Suggestions Enabled",
      description: showAiSuggestions ? "You can enable them again anytime." : "Smart replies will help you keep the conversation flowing."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
                <User className="mr-2 h-4 w-4" />
                Matches
              </Link>
              <Link to="/chat" className="flex items-center text-sm font-medium text-primary">
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

      <div className="flex-1 flex container mx-auto my-6">
        <Card className="flex-1 flex overflow-hidden">
          {/* Conversations Sidebar */}
          <div className="w-1/3 border-r">
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search conversations..." 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <ScrollArea className="h-[calc(100vh-12rem)]">
                <div className="space-y-2 pr-4">
                  {filteredConversations.map((convo) => (
                    <div
                      key={convo.id}
                      className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer hover:bg-gray-100 ${
                        activeConversation.id === convo.id ? "bg-gray-100" : ""
                      }`}
                      onClick={() => setActiveConversation(convo)}
                    >
                      <div className="relative">
                        <Avatar>
                          <AvatarImage src={convo.avatar} />
                          <AvatarFallback>{convo.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        {convo.online && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-medium truncate">{convo.name}</h3>
                          <p className="text-xs text-gray-500">{convo.time}</p>
                        </div>
                        <p className="text-xs text-gray-500 truncate">{convo.lastMessage}</p>
                      </div>
                      {convo.unread > 0 && (
                        <span className="bg-primary text-white text-xs rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center">
                          {convo.unread}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={activeConversation.avatar} />
                  <AvatarFallback>
                    {activeConversation.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <h2 className="text-sm font-medium">{activeConversation.name}</h2>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full flex items-center">
                      <span className="mr-1">{activeConversation.compatibility}%</span> match
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">
                    {activeConversation.online ? "Online now" : "Last seen recently"}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <VideoIcon className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-lg p-3 ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p className={`text-xs mt-1 ${message.isUser ? "text-primary-foreground/70" : "text-gray-500"}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>
            
            {/* AI Suggestions */}
            {showAiSuggestions && (
              <div className="p-2 border-t">
                <div className="flex items-center mb-2">
                  <Sparkles className="h-4 w-4 text-primary mr-2" />
                  <p className="text-xs text-primary font-medium">AI Suggested Replies</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="ml-auto h-6 text-xs"
                    onClick={toggleAiSuggestions}
                  >
                    Hide
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {aiSuggestions.map((suggestion, i) => (
                    <button
                      key={i}
                      className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 rounded-full"
                      onClick={() => handleAiSuggestion(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Message Input */}
            <div className="p-4 border-t flex space-x-2">
              <Input
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Chat;
