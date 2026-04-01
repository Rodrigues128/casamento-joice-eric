import { useState } from 'react';
import EnvelopeHero from '../components/wedding/EnvelopeHero';
import Navigation from '../components/wedding/Navigation';
import HeroSection from '../components/wedding/HeroSection';
import GiftList from '../components/wedding/GiftList';
import Countdown from '../components/wedding/Countdown';
import EventDetails from '../components/wedding/EventDetails';
import RSVPSection from '../components/wedding/RSVPSection';
import Gallery from '../components/wedding/Gallery';
import OurStory from '../components/wedding/OurStory';
import Footer from '../components/wedding/Footer';
import MusicPlayer from '../components/wedding/MusicPlayer';

import FloatingElements from '../components/wedding/FloatingElements';

export default function Home() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blush relative">
      {!envelopeOpen && <EnvelopeHero onOpen={() => setEnvelopeOpen(true)} />}
      
      {envelopeOpen && (
        <>
          <FloatingElements />
          <Navigation />
          <HeroSection />
          <OurStory />
          <GiftList />
          <Countdown />
          <EventDetails />
          <RSVPSection />
          <Gallery />
          <Footer />
          <MusicPlayer />
        </>
      )}
    </div>
  );
}
