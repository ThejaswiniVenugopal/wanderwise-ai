import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '@/components/Navbar';

export const MapView = () => {
  const [search, setSearch] = useState('');

  // Placeholder destinations - in real app, this would come from your backend
  const destinations = [
    { name: 'Paris', country: 'France', description: 'The City of Light' },
    { name: 'Tokyo', country: 'Japan', description: 'Modern metropolis meets tradition' },
    { name: 'Bali', country: 'Indonesia', description: 'Tropical paradise' },
    { name: 'New York', country: 'USA', description: 'The city that never sleeps' },
  ];

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(search.toLowerCase()) ||
      dest.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Explore Destinations</h1>
          <p className="text-muted-foreground">Discover your next adventure</p>
        </div>

        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search destinations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg border border-border bg-muted">
          <div className="flex h-96 items-center justify-center">
            <p className="text-muted-foreground">
              Map integration placeholder - Connect your preferred map service (Google Maps, Mapbox, etc.)
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((dest, index) => (
            <Card key={index} className="transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{dest.name}</CardTitle>
                <CardDescription>{dest.country}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{dest.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapView;
