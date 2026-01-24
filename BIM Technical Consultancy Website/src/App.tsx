import { Hero } from './components/Hero';
import { Expertise } from './components/Expertise';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />
      <Expertise />
      <Methodology />
      <Footer />
    </div>
  );
}
