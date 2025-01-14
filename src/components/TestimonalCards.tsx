"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function TestimonialCards() {
  return (
    <div className="h-[50rem] px-10 py-10 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <h1 className="text-center text-extrabold text-2xl">Hear our Harmony: Voices of success</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
        className="w-[80%] mt-6"
      />
    </div>
  );
}

const testimonials = [
    {
      quote: "Without music, life would be a mistake. Music is the art of expressing the inexpressible, the bridge between emotion and the soul that touches every corner of human experience.",
      title: "The Power of Music",
      name: "Friedrich Nietzsche"
    },
    {
      quote: "Music can change the world because it can change people. It transcends boundaries, speaks to the heart, and inspires action in ways that words alone never could.",
      title: "Transformative Melody",
      name: "Bono"
    },
    {
      quote: "Music is the universal language of mankind. It speaks directly to our emotions and connects us across cultures, reminding us of our shared humanity and common experiences.",
      title: "Harmony of the World",
      name: "Henry Wadsworth Longfellow"
    },
    {
      quote: "One good thing about music, when it hits you, you feel no pain. It provides comfort in sorrow, energy in celebration, and a rhythm to carry us through every stage of life.",
      title: "Soul Healer",
      name: "Bob Marley"
    },
    {
      quote: "Music is the divine way to tell beautiful, poetic things to the heart. It elevates our spirits, unlocks our creativity, and brings a sense of peace to a chaotic world.",
      title: "Divine Notes",
      name: "Pablo Casals"
    }
  ];
  
