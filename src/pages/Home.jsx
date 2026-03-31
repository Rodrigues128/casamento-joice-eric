import { useState } from 'react';
import EnvelopeHero from '../components/wedding/EnvelopeHero';
import Navigation from '../components/wedding/Navigation';
import HeroSection from '../components/wedding/HeroSection';
import GiftList from '../components/wedding/GiftList';
import Countdown from '../components/wedding/Countdown';
import EventDetails from '../components/wedding/EventDetails';
import RSVPSection from '../components/wedding/RSVPSection';
import Messages from '../components/wedding/Messages';
import Gallery from '../components/wedding/Gallery';
import OurStory from '../components/wedding/OurStory';
import Footer from '../components/wedding/Footer';
import MusicPlayer from '../components/wedding/MusicPlayer';

export default function Home() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-blush">
      {!envelopeOpen && <EnvelopeHero onOpen={() => setEnvelopeOpen(true)} />}
      
      {envelopeOpen && (
        <>
          <Navigation />
          <HeroSection />
          <OurStory />
          <GiftList />
          <Countdown />
          <EventDetails />
          <Messages />
          <RSVPSection />
          <Gallery />
          <Footer />
          <MusicPlayer />
        </>
      )}
    </div>
  );
}
