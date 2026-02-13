import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Testimonials } from '@/components/testimonials'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon, CalendarIcon, ClockIcon, MapPinIcon, TicketIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'
import { events } from '@/data/events'
import { covers } from '@/data/covers'

export const metadata: Metadata = {
  description:
    'Professional acoustic covers and original music for bars, patios, and private events.',
}

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0 -z-10">
        {/* Placeholder background - replace with your performance photo */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('/recording-studio/studio-1.jpg')] bg-cover bg-center opacity-30" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Navigation */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Container>
          <Navbar theme="dark" />
        </Container>
      </div>
      
      {/* Hero Content */}
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Artist Name */}
          <h1 className="font-display text-6xl/[0.9] font-bold tracking-tight text-white sm:text-7xl/[0.8] md:text-8xl/[0.8] mb-6">
            CWC. Live.
          </h1>
          
          {/* Tagline */}
          <p className="text-2xl/6 font-medium text-yellow-400 sm:text-3xl/7 mb-4">
            Acoustic Covers & Originals
          </p>
          <p className="text-xl/6 text-gray-300 sm:text-2xl/7 mb-8">
            for Bars, Patios & Private Events
          </p>
          
          {/* Value Statement */}
          <p className="max-w-2xl mx-auto text-lg/7 text-gray-200 mb-12 sm:text-xl/8">
            3-hour crowd-pleasing sets from James Taylor to Tom Petty.<br />
            Professional sound, reliable performance, unforgettable atmosphere.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              href="#" 
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 py-4 text-xl font-bold border-0 shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </Button>
            <Button 
              variant="secondary" 
              href="#" 
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-10 py-4 text-lg font-semibold backdrop-blur-sm"
            >
              Check Availability
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function SongRepertoire() {
  const songCategories = [
    {
      title: 'Classic Rock Anthems',
      description: 'Timeless hits that get everyone singing along',
      songs: ['Hotel California', 'Sweet Caroline', 'Wonderwall', 'American Pie', 'Don&apos;t Stop Believin&apos;'],
      icon: '🎸',
      eyebrow: 'Crowd Favorites'
    },
    {
      title: 'Country Standards',
      description: 'From honky-tonk to modern country favorites',
      songs: ['Wagon Wheel', 'Friends in Low Places', 'Tennessee Whiskey', 'Cruise', 'Chicken Fried'],
      icon: '🤠',
      eyebrow: 'Country'
    },
    {
      title: '90s & 2000s Hits',
      description: 'Nostalgic favorites from the golden era',
      songs: ['Mr. Brightside', 'Hey Ya!', 'I\'m Yours', 'Counting Stars', 'Use Somebody'],
      icon: '💿',
      eyebrow: 'Throwbacks'
    },
    {
      title: 'Sophisticated Dinner Music',
      description: 'Perfect ambiance for dining and conversation',
      songs: ['Fire and Rain', 'The Way You Look Tonight', 'Isn\'t She Lovely', 'Come Away With Me', 'At Last'],
      icon: '🍷',
      eyebrow: 'Ambiance'
    },
    {
      title: 'Singalong Classics',
      description: 'High-energy songs that unite the room',
      songs: ['Piano Man', 'Sweet Child O\' Mine', 'Living on a Prayer', 'Brown Eyed Girl', 'Build Me Up Buttercup'],
      icon: '🎤',
      eyebrow: 'Energy'
    },
    {
      title: 'Original Compositions',
      description: 'Heartfelt songs written and performed by CWC',
      songs: ['Sunset Highway', 'Delaware Nights', 'Coffee Shop Dreams', 'Small Town Stories', 'Backporch Blues'],
      icon: '✍️',
      eyebrow: 'Originals'
    }
  ]

  return (
    <Container className="pb-24">
      <div className="text-center mb-16">
        <Subheading>Song Repertoire</Subheading>
        <Heading as="h2" className="mt-2 max-w-4xl mx-auto">
          Extensive catalog for every venue and crowd
        </Heading>
        <p className="mt-6 max-w-2xl mx-auto text-lg/8 text-gray-600">
          From intimate dinner music to high-energy crowd favorites, I&apos;ve got the perfect soundtrack for your event.
        </p>
      </div>
      
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow={songCategories[0].eyebrow}
          title={songCategories[0].title}
          description={songCategories[0].description}
          graphic={
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{songCategories[0].icon}</div>
                <div className="space-y-1 text-sm text-gray-600">
                  {songCategories[0].songs.slice(0, 4).map((song, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {song}
                    </div>
                  ))}
                  <div className="text-xs text-gray-400 mt-2">+ many more</div>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        
        <BentoCard
          eyebrow={songCategories[1].eyebrow}
          title={songCategories[1].title}
          description={songCategories[1].description}
          graphic={
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">{songCategories[1].icon}</div>
                <div className="space-y-1 text-sm text-gray-600">
                  {songCategories[1].songs.slice(0, 4).map((song, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2" />
                      {song}
                    </div>
                  ))}
                  <div className="text-xs text-gray-400 mt-2">+ many more</div>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        
        <BentoCard
          eyebrow={songCategories[2].eyebrow}
          title={songCategories[2].title}
          description={songCategories[2].description}
          graphic={
            <div className="flex size-full items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">{songCategories[2].icon}</div>
                <div className="space-y-1 text-xs text-gray-600">
                  {songCategories[2].songs.slice(0, 3).map((song, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1" />
                      {song}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        
        <BentoCard
          eyebrow={songCategories[3].eyebrow}
          title={songCategories[3].title}
          description={songCategories[3].description}
          graphic={
            <div className="flex size-full items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">{songCategories[3].icon}</div>
                <div className="space-y-1 text-xs text-gray-600">
                  {songCategories[3].songs.slice(0, 3).map((song, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1" />
                      {song}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2"
        />
        
        <BentoCard
          eyebrow={songCategories[4].eyebrow}
          title={songCategories[4].title}
          description={songCategories[4].description}
          graphic={
            <div className="flex size-full items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">{songCategories[4].icon}</div>
                <div className="space-y-1 text-xs text-gray-600">
                  {songCategories[4].songs.slice(0, 3).map((song, index) => (
                    <div key={index} className="flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1" />
                      {song}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
      
      <div className="mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-3xl" />
        <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-3xl">✍️</span>
              <h3 className="text-xl font-semibold text-gray-900">Original Compositions</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Experience heartfelt original songs alongside beloved covers. Each original tells a story of life, 
              love, and the beauty of small-town America.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {songCategories[5].songs.map((song, index) => (
                <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800">
                  {song}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/api/song-list" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
                target="_blank"
              >
                Download Complete Song List (PDF)
              </Button>
              <Button 
                variant="secondary"
                href="/booking"
                className="border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Request Custom Songs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>Professional Services</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        Everything you need for the perfect event.
      </Heading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Performance"
          title="Complete 3-Hour Sets"
          description="Professional acoustic performances featuring crowd favorites, dinner music, and high-energy singalongs. Tailored setlists for every venue and audience."
          graphic={
            <div className="flex h-80 items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🎤</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    3-Hour Professional Sets
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    100+ Song Repertoire
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    Custom Requests Available
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                    Original Compositions
                  </div>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Equipment"
          title="Professional Sound System"
          description="Complete PA system, microphones, and acoustic guitar setup. No venue sound system required - we bring everything you need."
          graphic={
            <div className="flex h-80 items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🔊</div>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                    Professional PA System
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                    Wireless Microphones
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    Acoustic Guitar & Amps
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                    Full Setup & Breakdown
                  </div>
                </div>
              </div>
            </div>
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Experience"
          title="Proven Track Record"
          description="Years of experience performing at venues across the Mid-Atlantic. Professional, reliable, and crowd-tested performances."
          graphic={
            <div className="flex size-full items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⭐</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div className="font-semibold">500+ Shows</div>
                  <div>Professional Experience</div>
                  <div>Repeat Bookings</div>
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Venues"
          title="All Event Types"
          description="From intimate dinner music to high-energy bar performances. Weddings, corporate events, private parties, and more."
          graphic={
            <div className="flex size-full items-center justify-center pt-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🏛️</div>
                <div className="space-y-1 text-xs text-gray-600">
                  <div>Bars & Restaurants</div>
                  <div>Weddings & Parties</div>
                  <div>Corporate Events</div>
                </div>
              </div>
            </div>
          }
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Coverage"
          title="Mid-Atlantic Region"
          description="Serving Delaware, Maryland, Pennsylvania, and New Jersey. Professional travel and setup for venues throughout the region."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Live Media</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Hear the difference live performance makes.
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            dark
            eyebrow="Stage"
            title="Stage Presence Photo"
            description="Add a photo of CWC performing live to show off the energy and atmosphere of our shows."
            graphic={
              <div className="h-80 bg-[url(/temp/temp-hero.jpg)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Demo Media Reel"
            title="Video Live Performance"
            description="Create Demo video to integrate CWC live performance."
            graphic={
              <div className="flex h-80 items-center justify-center p-4">
                <div className="w-full space-y-3">
                  <div className="text-white/60 text-sm font-medium mb-4 text-center">Featured Cover Songs</div>
                  <div className="grid grid-cols-1 gap-2">
                    {covers.slice(0, 8).map((song, index) => (
                      <div key={index} className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                        <div className="text-left flex-1 min-w-0">
                          <div className="text-white font-medium text-xs truncate">{song.title}</div>
                          <div className="text-white/60 text-xs truncate">{song.originalArtist}</div>
                        </div>
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0 ml-2" />
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-white/40 text-xs mt-3">+ {covers.length - 8} more songs</div>
                </div>
              </div>
            }
            // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
            className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
          />
          <BentoCard
            dark
            eyebrow="Audio"
            title="Cover Songs Playlist"
            description="Classic covers performed acoustic-style with professional quality sound."
            graphic={
              <div className="flex h-80 items-center justify-center p-4">
                <div className="w-full max-w-sm space-y-3">
                  <div className="text-white/60 text-xs font-medium mb-4 text-center">🎵 Now Playing</div>
                  <div className="space-y-2">
                    {covers.slice(0, 5).map((song, index) => (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                        index === 0 
                          ? 'bg-yellow-500/20 border border-yellow-400/30' 
                          : 'bg-white/5 hover:bg-white/10'
                      }`}>
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            index === 0 
                              ? 'bg-yellow-400 text-black' 
                              : 'bg-white/10 text-white/60'
                          }`}>
                            {index === 0 ? '▶' : index + 1}
                          </div>
                          <div className="text-left">
                            <div className={`font-medium text-sm ${
                              index === 0 ? 'text-yellow-300' : 'text-white'
                            }`}>
                              {song.title}
                            </div>
                            <div className="text-white/50 text-xs">{song.originalArtist}</div>
                          </div>
                        </div>
                        <div className="text-white/40 text-xs">3:42</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-white/40 text-xs mt-3">
                    {covers.length - 5} more songs available
                  </div>
                </div>
              </div>
            }
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Video"
            title="Video Live Performance"
            description="Really unsure, will fill out the website later. This is an active placeholder."
            graphic={
              <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
            }
            fade={['top']}
            className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function UpcomingEvents() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
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

  const now = new Date();
  const upcomingEvents = events
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= now && event.status !== 'cancelled';
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 6);

  if (upcomingEvents.length === 0) {
    return null;
  }

  return (
    <div className="bg-white py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Upcoming Shows</Subheading>
          <Heading as="h2" className="mt-2">
            Catch CWC Live
          </Heading>
          <p className="mt-6 text-lg text-gray-600">
            Don&apos;t miss these upcoming performances across Delaware, Maryland, Pennsylvania, and New Jersey.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="relative rounded-2xl border p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
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
                        <div>{event.venue.city}, {event.venue.state}</div>
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
                    </div>
                  </div>
                  
                  <div className="mt-3 text-xs text-gray-500">
                    <span className="font-medium">Music Style:</span> {event.musicStyle}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/events">
            View All Events
            <ChevronRightIcon className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <UpcomingEvents />
          <BentoSection />
        </div>
        <DarkBentoSection />
      </main>
      <SongRepertoire />
      <Testimonials />
      <Footer />
    </div>
  )
}
