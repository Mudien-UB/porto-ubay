import React from "react";

export default function LoadingPage() {
  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="w-full h-full border-5 border-t-transparent border-golden-brown rounded-full animate-spin absolute"></div>
        <div className="w-full h-full -scale-75 border-5 border-t-transparent border-brunswick-green rounded-full animate-[spin_1.5s_linear_reverse_infinite] absolute"></div>
        <div className="w-full h-full -scale-50 border-5 border-t-transparent border-ivory rounded-full motion-safe:animate-[spin_2s_linear_infinite] absolute"></div>
      </div>
    </section>
  );
}
