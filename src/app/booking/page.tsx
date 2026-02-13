import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { CheckCircleIcon, MapPinIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book Currie Wayne Clayton - Live Acoustic Music',
  description:
    'Book professional acoustic covers and originals for your venue, event, wedding, or private party. Delaware, Maryland, Pennsylvania, and New Jersey.',
}

function BookingHero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="text-center">
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-7xl/[0.8] md:text-8xl/[0.8]">
              Book Your Event
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Professional acoustic music for bars, restaurants, weddings, and private events throughout the Mid-Atlantic region.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

function WhatIOffer() {
  const offerings = [
    {
      title: '2–3 Hour Sets',
      description: 'Full evening entertainment with carefully curated song selections'
    },
    {
      title: 'Break Music Playlist',
      description: 'Seamless background music during breaks to maintain atmosphere'
    },
    {
      title: 'Own PA & Lighting',
      description: 'Professional sound system and stage lighting included'
    },
    {
      title: 'Indoor / Outdoor Setups',
      description: 'Versatile equipment suitable for any venue type'
    },
    {
      title: 'Flexible Volume Control',
      description: 'Adaptable sound levels for dinner ambiance or party atmosphere'
    }
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>What You Get</Subheading>
        <Heading as="h2" className="mt-2">
          Professional Service, Every Time
        </Heading>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Complete acoustic entertainment package with everything you need for a memorable event.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offerings.map((offer, index) => (
          <div key={index} className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
            <div className="flex-shrink-0">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function BookingTypes() {
  const bookingTypes = [
    {
      icon: '🍺',
      title: 'Bars & Restaurants',
      description: 'Create the perfect dining atmosphere with acoustic covers that enhance conversation while entertaining guests.'
    },
    {
      icon: '🍷',
      title: 'Breweries & Wineries',
      description: 'Craft brewery and winery events with music that complements your artisanal environment.'
    },
    {
      icon: '🎉',
      title: 'Private Parties',
      description: 'Birthday parties, anniversaries, and celebrations with personalized song requests and dedications.'
    },
    {
      icon: '💒',
      title: 'Weddings / Cocktail Hour',
      description: 'Elegant acoustic music for ceremony, cocktail hour, and reception entertainment.'
    },
    {
      icon: '🏢',
      title: 'Corporate Events',
      description: 'Professional background music for company parties, networking events, and holiday celebrations.'
    }
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Event Types</Subheading>
          <Heading as="h2" className="mt-2">
            Perfect for Any Occasion
          </Heading>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookingTypes.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServiceArea() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Service Area</Subheading>
        <Heading as="h2" className="mt-2">
          Mid-Atlantic Region Coverage
        </Heading>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <MapPinIcon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-medium text-gray-900">
            <div>Delaware</div>
            <div>Maryland</div>
            <div>Pennsylvania</div>
            <div>New Jersey</div>
          </div>
          <p className="mt-6 text-gray-600">
            Available for events throughout the Mid-Atlantic region. Travel fees may apply for locations over 50 miles.
          </p>
        </div>
      </div>
    </Container>
  )
}

function ContactForm() {
  return (
    <div className="bg-gray-900 py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <Subheading dark>Get Started</Subheading>
            <Heading as="h2" dark className="mt-2">
              Let&apos;s Plan Your Event
            </Heading>
            <p className="mt-6 text-gray-300">
              Fill out the form below and I&apos;ll get back to you within 24 hours with availability and pricing.
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="venue-type" className="block text-sm font-medium text-gray-300 mb-2">
                Venue / Event Type *
              </label>
              <select 
                id="venue-type" 
                name="venue-type" 
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select event type</option>
                <option value="bar-restaurant">Bar / Restaurant</option>
                <option value="brewery-winery">Brewery / Winery</option>
                <option value="private-party">Private Party</option>
                <option value="wedding">Wedding / Cocktail Hour</option>
                <option value="corporate">Corporate Event</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                Event Date *
              </label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
                Event Location *
              </label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="City, State or Venue Name"
              />
            </div>
            
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                Budget Range
              </label>
              <select 
                id="budget" 
                name="budget"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="">Select budget range</option>
                <option value="under-500">Under $500</option>
                <option value="500-1000">$500 - $1,000</option>
                <option value="1000-1500">$1,000 - $1,500</option>
                <option value="1500-2500">$1,500 - $2,500</option>
                <option value="over-2500">Over $2,500</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Additional Details
              </label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-vertical"
                placeholder="Tell me about your event, special requests, preferred music style, etc."
              ></textarea>
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Send Booking Request
            </Button>
          </form>
          
          <div className="mt-8 text-center text-gray-400">
            <p>Or call/text directly: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-300">(123) 456-7890</a></p>
            <p>Email: <a href="mailto:booking@example.com" className="text-blue-400 hover:text-blue-300">booking@example.com</a></p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function BookingPage() {
  return (
    <div className="overflow-hidden">
      <BookingHero />
      <main>
        <WhatIOffer />
        <BookingTypes />
        <ServiceArea />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
