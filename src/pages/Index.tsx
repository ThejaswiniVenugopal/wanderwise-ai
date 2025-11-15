import { Link } from 'react-router-dom';
import { Plane, Map, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';

const Index = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent via-background to-secondary/20">
      <nav className="border-b border-border bg-card/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <Plane className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">TravelAI</span>
          </div>
          <div>
            {user ? (
              <Button asChild>
                <Link to="/trips">Go to Dashboard</Link>
              </Button>
            ) : (
              <Button asChild>
                <Link to="/auth">Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-5xl font-bold text-foreground md:text-6xl">
            Plan Your Perfect Trip with AI
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Let our AI assistant help you discover destinations, create personalized itineraries, and manage your
            travel adventures all in one place.
          </p>
          {!user && (
            <Button asChild size="lg" className="mt-8">
              <Link to="/auth">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Planning Free
              </Link>
            </Button>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>AI Travel Assistant</CardTitle>
              <CardDescription>
                Chat with our AI to get personalized travel recommendations and instant answers to your questions
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Sparkles className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle>AI-Generated Itineraries</CardTitle>
              <CardDescription>
                Get custom day-by-day travel plans tailored to your preferences, budget, and travel style
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Map className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Interactive Map</CardTitle>
              <CardDescription>
                Explore destinations visually and discover hidden gems with our interactive map interface
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 rounded-lg bg-card p-8 text-center shadow-lg">
          <h2 className="mb-4 text-3xl font-bold text-foreground">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-muted-foreground">
            Create an account to unlock all features and start planning your next adventure
          </p>
          {!user && (
            <Button asChild size="lg">
              <Link to="/auth">Sign Up Now</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
