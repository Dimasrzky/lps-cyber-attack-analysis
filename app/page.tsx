import Hero from '@/components/Hero';
import AttackForm from '@/components/AttackForm';
import Timeline from '@/components/Timeline';
import Impact from '@/components/Impact';
import Causes from '@/components/Causes';
import Mitigation from '@/components/Mitigation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AttackForm />
      <Timeline />
      <Impact />
      <Causes />
      <Mitigation />
      <Footer />
    </main>
  );
}
