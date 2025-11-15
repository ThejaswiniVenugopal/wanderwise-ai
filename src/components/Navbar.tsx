import { Link, useNavigate } from 'react-router-dom';
import { Plane, Map, MessageCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground">TravelAI</span>
        </Link>

        {user && (
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/trips">
                <Plane className="mr-2 h-4 w-4" />
                My Trips
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/map">
                <Map className="mr-2 h-4 w-4" />
                Explore
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/chat">
                <MessageCircle className="mr-2 h-4 w-4" />
                AI Assistant
              </Link>
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
