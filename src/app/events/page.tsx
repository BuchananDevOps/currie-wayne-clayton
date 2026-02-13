'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { events } from '@/data/events'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  TicketIcon,
  ChevronUpDownIcon,
} from '@heroicons/react/16/solid'
import { useState } from 'react'

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Live Shows & Events</Heading>
      <Lead className="mt-6 max-w-3xl">
        Catch Currie Wayne Clayton performing live at venues across the Mid-Atlantic. 
        From intimate bar settings to festival stages, find your next acoustic music experience.
      </Lead>
    </Container>
  )
}

function EventCard({ event }: { event: typeof events[0] }) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour24 = parseInt(hours);
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24;
    const ampm = hour24 >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };

  const getEventTypeColor = (type: string) => {
    const colors = {
      bar: 'bg-blue-100 text-blue-800',
      brewery: 'bg-amber-100 text-amber-800', 
      restaurant: 'bg-green-100 text-green-800',
      wedding: 'bg-pink-100 text-pink-800',
      'private-party': 'bg-purple-100 text-purple-800',
      corporate: 'bg-gray-100 text-gray-800',
      festival: 'bg-red-100 text-red-800',
      winery: 'bg-violet-100 text-violet-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const isUpcoming = () => {
    const eventDate = new Date(event.date);
    const now = new Date();
    return eventDate >= now;
  };

  const isPastEvent = !isUpcoming();

  return (
    <div className={`relative rounded-2xl border p-6 shadow-sm ${isPastEvent ? 'opacity-60 bg-gray-50' : 'bg-white'} hover:shadow-md transition-shadow`}>
      {isPastEvent && (
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
            Past Event
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getEventTypeColor(event.eventType)}`}>
              {event.eventType.replace('-', ' ')}
            </span>
            {event.status === 'tentative' && (
              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                Tentative
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {event.title}
          </h3>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">{event.venue.name}</div>
                <div>{event.venue.address}</div>
                <div>{event.venue.city}, {event.venue.state} {event.venue.zipCode}</div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 flex-shrink-0" />
              <span>{formatDate(event.date)}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4 flex-shrink-0" />
              <span>
                {formatTime(event.startTime)}
                {event.endTime && ` - ${formatTime(event.endTime)}`}
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <TicketIcon className="h-4 w-4 flex-shrink-0" />
              <span className="font-medium text-gray-900">{event.coverCharge}</span>
              {event.ageRestriction && (
                <span className="text-gray-500">• {event.ageRestriction}</span>
              )}
            </div>
          </div>
          
          {event.description && (
            <p className="mt-3 text-sm text-gray-600 line-clamp-2">
              {event.description}
            </p>
          )}
          
          {event.specialNotes && (
            <p className="mt-2 text-xs text-blue-600 italic">
              {event.specialNotes}
            </p>
          )}
          
          <div className="mt-3 text-xs text-gray-500">
            <span className="font-medium">Music Style:</span> {event.musicStyle}
          </div>
        </div>
      </div>
    </div>
  );
}

function EventFilters({ 
  selectedType, 
  selectedState, 
  onTypeChange, 
  onStateChange 
}: {
  selectedType: string;
  selectedState: string;
  onTypeChange: (type: string) => void;
  onStateChange: (state: string) => void;
}) {
  const eventTypes = ['All', 'bar', 'brewery', 'restaurant', 'wedding', 'private-party', 'corporate', 'festival', 'winery'];
  const states = ['All', 'DE', 'MD', 'PA', 'NJ', 'WV'];

  return (
    <div className="flex gap-4 mb-8">
      <Menu as="div" className="relative">
        <MenuButton className="flex items-center gap-2 bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
          Event Type: {selectedType}
          <ChevronUpDownIcon className="h-4 w-4" />
        </MenuButton>
        <MenuItems className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          {eventTypes.map((type) => (
            <MenuItem key={type}>
              <button
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 w-full text-left"
                onClick={() => onTypeChange(type)}
              >
                {type === 'All' ? 'All Types' : type.replace('-', ' ')}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>

      <Menu as="div" className="relative">
        <MenuButton className="flex items-center gap-2 bg-white px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
          State: {selectedState}
          <ChevronUpDownIcon className="h-4 w-4" />
        </MenuButton>
        <MenuItems className="absolute z-10 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg">
          {states.map((state) => (
            <MenuItem key={state}>
              <button
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 w-full text-left"
                onClick={() => onStateChange(state)}
              >
                {state === 'All' ? 'All States' : state}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}

function EventsList() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [showPastEvents, setShowPastEvents] = useState(false);

  const now = new Date();

  // Filter events based on selections
  const filteredEvents = events
    .filter(event => {
      const matchesType = selectedType === 'All' || event.eventType === selectedType;
      const matchesState = selectedState === 'All' || event.venue.state === selectedState;
      const isUpcoming = new Date(event.date) >= now;
      const showEvent = showPastEvents || isUpcoming;
      
      return matchesType && matchesState && showEvent && event.status !== 'cancelled';
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const upcomingCount = events.filter(event => new Date(event.date) >= now && event.status !== 'cancelled').length;
  const totalCount = events.filter(event => event.status !== 'cancelled').length;

  return (
    <Container className="mt-16 mb-24">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Subheading>
            {showPastEvents ? `All Events (${totalCount})` : `Upcoming Shows (${upcomingCount})`}
          </Subheading>
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={showPastEvents}
              onChange={(e) => setShowPastEvents(e.target.checked)}
              className="rounded border-gray-300"
            />
            Show past events
          </label>
        </div>
      </div>
      
      <EventFilters
        selectedType={selectedType}
        selectedState={selectedState}
        onTypeChange={setSelectedType}
        onStateChange={setSelectedState}
      />
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500">
            <CalendarIcon className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
            <p>Try adjusting your filters to see more events.</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
      
      <div className="mt-12 text-center">
        <Button href="/booking">
          Book CWC for Your Event
        </Button>
      </div>
    </Container>
  );
}

export default function Events() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <EventsList />
      <Footer />
    </main>
  )
}
