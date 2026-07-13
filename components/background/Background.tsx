"use client";

export default function Background() {
  return (
    <>
      {/* Base Background */}
      <div className="fixed inset-0 -z-50 bg-[#050505]" />

      {/* Radial Glow */}
      <div className="fixed inset-0 -z-40 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      {/* Tiny Dots */}
      <div
        className="
          fixed
          inset-0
          -z-30
          opacity-[0.23]
          bg-[radial-gradient(circle,white_0.8px,transparent_0.8px)]
          [background-size:20px_20px]
        "
      />

      {/* Bottom Fade */}
      <div className="fixed bottom-0 left-0 right-0 h-96 -z-20 bg-gradient-to-t from-black via-transparent to-transparent" />
    </>
  );
}