import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import OrderFormSection from './components/OrderFormSection';
import Article from './components/Article';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="root-app" className="min-h-screen bg-ink-950">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <SocialProof />
        <OrderFormSection />
        <Article />
      </main>
      <Footer />
    </div>
  );
}
