'use client';

import React, { useRef } from 'react';
import TextReveal from '@/components/motion/text-reveal';

function Hero() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96]"
      ref={container}
    >
      <div className="relative z-10 h-[42.5dvh] md:h-[51.2dvh] md:min-h-[50dvh] xl:h-[61.2dvh]">
        <div className="relative flex h-full flex-col items-center justify-center">
          {/* items-center */}
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
              <TextReveal>Hi, I&#39;m Choon Keat</TextReveal>
              <br />
              <TextReveal>I&#39;m a Software Engineering student with a passion for innovation.</TextReveal>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
