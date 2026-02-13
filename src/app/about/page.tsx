import { AnimatedNumber } from '@/components/animated-number'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { events } from '@/data/events'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Currie Wayne Clayton',
  description:
    'Multi-instrumentalist and songwriter from North Carolina with decades of performance experience and national recognition.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Multi-instrumentalist. Songwriter. Performer.</Heading>
      <Lead className="mt-6 max-w-3xl">
        Currie Wayne Clayton Jr. is a multi-instrumentalist and songwriter from Haw River, North Carolina, with decades of experience entertaining crowds across the Mid-Atlantic region.
      </Lead>
      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <h2 className="text-2xl font-medium tracking-tight">The Musical Journey</h2>
          <p className="mt-6 text-sm/6 text-gray-600">
            Raised in a musical family, Currie was inspired by his father, an accomplished guitarist influenced by Chet Atkins. This early exposure to music shaped his path as a multi-instrumentalist, mastering guitar, drums, bass, keyboard, and fiddle while developing skills in recording and producing his own music.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            His performing career began after winning his 6th-grade talent show, and he later claimed victory at the Delmarva Guitar Challenge in Ocean City, MD. Over the years, he has opened for national acts including Great White, Mitch Mitchell (Jimi Hendrix Experience), Slaughter, Brittany Fox, the Bellamy Brothers, and David Allan Coe.
          </p>
          <p className="mt-8 text-sm/6 text-gray-600">
            Currie writes songs centered on family—especially his son—combining personal storytelling with masterful instrumental arrangements. His songwriting earned recognition when he was named Songwriter of the Year by the Carolina Country Music Awards in 2021 for his song &ldquo;Right Then and There.&rdquo; He continues to perform as a solo artist and makes special appearances with local bands.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Currie performing live"
                src="/recording-studio/recording-studio-01.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Studio recording session"
                src="/recording-studio/recording-studio-05.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Multi-instrumentalist setup"
                src="/recording-studio/recording-studio-03.jpg"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Family and music"
                src="/recording-studio/recording-studio-04.jpg"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Career Highlights</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Years Performing</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={20} end={25} />+
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Instruments Played</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={3} end={5} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">National Acts Opened For</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                <AnimatedNumber start={5} end={8} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Award Year</dt>
              <dd className="order-first text-6xl font-medium tracking-tight">
                2021
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </Container>
  )
}

function Testimonial() {
  return (
    <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-5/4 lg:aspect-3/4">
      <img
        alt=""
        src="/testimonials/veronica-winton.jpg"
        className="absolute inset-0 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-10% to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
      />
      <figure className="relative p-10">
        <blockquote>
          <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
            We&apos;ve managed to put two of our main competitors out of
            business in 6 months.
          </p>
        </blockquote>
        <figcaption className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">Veronica Winton</p>
          <p className="text-sm/6 font-medium">
            <span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
              CSO, Planeteria
            </span>
          </p>
        </figcaption>
      </figure>
    </div>
  )
}

function UpcomingEvents() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
  const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  
  // Filter events that haven't passed
  const upcomingEvents = events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate >= now && event.status !== 'cancelled';
  });
  
  // Get current month events
  const currentMonthEvents = upcomingEvents
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
    })
    .slice(0, 3);
  
  // Get next month events
  const nextMonthEvents = upcomingEvents
    .filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getMonth() === nextMonth && eventDate.getFullYear() === nextYear;
    })
    .slice(0, 3);
  
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric'
    });
  };
  
  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour24 = parseInt(hours);
    const hour12 = hour24 > 12 ? hour24 - 12 : hour24 === 0 ? 12 : hour24;
    const ampm = hour24 >= 12 ? 'PM' : 'AM';
    return `${hour12}:${minutes} ${ampm}`;
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  return (
    <Container className="my-32">
      <Subheading>Upcoming Shows</Subheading>
      <Heading as="h3" className="mt-2">
        Catch CWC Live at these venues.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Check out where you can see Currie Wayne Clayton perform live. From intimate bars to festival stages across the Mid-Atlantic region.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Next shows</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
                <col className="w-1/5" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Event</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={4} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-blue-50 px-4 py-3 text-sm/6 font-semibold">
                      {monthNames[currentMonth]} {currentYear}
                    </div>
                  </th>
                </tr>
                {currentMonthEvents.length > 0 ? (
                  currentMonthEvents.map((event, index) => (
                    <tr key={event.id} className={`${index === currentMonthEvents.length - 1 ? '' : 'border-b border-dotted border-gray-200'} text-sm/6 font-normal`}>
                      <td className="px-0 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-gray-600">{event.venue.name}</div>
                          <div className="text-xs text-gray-500">{event.venue.city}, {event.venue.state}</div>
                        </div>
                      </td>
                      <td className="px-0 py-4 text-gray-600">
                        {formatDate(event.date)}
                      </td>
                      <td className="px-0 py-4 text-gray-600">
                        {formatTime(event.startTime)}
                      </td>
                      <td className="px-0 py-4 text-right">
                        <div className="text-xs">
                          <div className="font-medium text-gray-900">{event.coverCharge}</div>
                          <div className="text-gray-500">{event.ageRestriction}</div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-sm/6 font-normal">
                    <td colSpan={4} className="px-0 py-4 text-gray-500 italic">
                      No shows scheduled for {monthNames[currentMonth]}
                    </td>
                  </tr>
                )}
                <tr>
                  <th scope="colgroup" colSpan={4} className="px-0 pt-8 pb-0">
                    <div className="-mx-4 rounded-lg bg-yellow-50 px-4 py-3 text-sm/6 font-semibold">
                      {monthNames[nextMonth]} {nextYear}
                    </div>
                  </th>
                </tr>
                {nextMonthEvents.length > 0 ? (
                  nextMonthEvents.map((event, index) => (
                    <tr key={event.id} className={`${index === nextMonthEvents.length - 1 ? '' : 'border-b border-dotted border-gray-200'} text-sm/6 font-normal`}>
                      <td className="px-0 py-4">
                        <div>
                          <div className="font-medium text-gray-900">{event.title}</div>
                          <div className="text-gray-600">{event.venue.name}</div>
                          <div className="text-xs text-gray-500">{event.venue.city}, {event.venue.state}</div>
                        </div>
                      </td>
                      <td className="px-0 py-4 text-gray-600">
                        {formatDate(event.date)}
                      </td>
                      <td className="px-0 py-4 text-gray-600">
                        {formatTime(event.startTime)}
                      </td>
                      <td className="px-0 py-4 text-right">
                        <div className="text-xs">
                          <div className="font-medium text-gray-900">{event.coverCharge}</div>
                          <div className="text-gray-500">{event.ageRestriction}</div>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-sm/6 font-normal">
                    <td colSpan={4} className="px-0 py-4 text-gray-500 italic">
                      No shows scheduled for {monthNames[nextMonth]}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Button href="/booking" className="w-full sm:w-auto">
              Book Your Venue
            </Button>
          </div>
        </div>
        <Testimonial />
      </div>
    </Container>
  )
}

export default function About() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <UpcomingEvents />
      <Footer />
    </main>
  )
}
