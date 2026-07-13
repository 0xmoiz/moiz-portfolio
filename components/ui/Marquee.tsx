"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface MarqueeProps {
  items: Skill[];
  reverse?: boolean;
}

export default function Marquee({
  items,
  reverse = false,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    // Width of ONE copy
    const distance = track.scrollWidth / 4;

    const tween = gsap.fromTo(
      track,
      {
        x: reverse ? -distance : 0,
      },
      {
        x: reverse ? 0 : -distance,
        ease: "none",
        duration: 20,
        repeat: -1,
      }
    );

    const enter = () => tween.pause();
    const leave = () => tween.resume();

    track.addEventListener("mouseenter", enter);
    track.addEventListener("mouseleave", leave);

    return () => {
      tween.kill();
      track.removeEventListener("mouseenter", enter);
      track.removeEventListener("mouseleave", leave);
    };
  }, [reverse]);

  // 4 copies so there is NEVER empty space
  const data = [
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  return (
    <div className="overflow-hidden w-full">

      <div
        ref={trackRef}
        className="flex w-max gap-5"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="
              flex
              shrink-0
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:scale-105
              hover:border-white/20
              hover:bg-white/[0.06]
            "
          >
            <div className="text-lg text-white">
              {item.icon}
            </div>

            <span className="whitespace-nowrap text-white/80">
              {item.name}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}