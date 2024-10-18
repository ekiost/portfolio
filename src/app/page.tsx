import { About, Contact, Experience, Footer, Header, Hero, Projects, Skills } from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header loader={true} />
        <main className="flex-1">
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="experience"><Experience /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </div>
      <Cursor />
    </SmoothScroll>
  );
}
