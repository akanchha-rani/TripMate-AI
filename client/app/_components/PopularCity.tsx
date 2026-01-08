"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function PopularCity() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Popular Destinations to Visit.
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  const travelContent = [
    {
      title: "Plan Smarter, Travel Better ✈️",
      text: "Your perfect getaway is now just a tap away. Trip AI builds personalized itineraries based on your mood, budget, and travel style—so you spend less time planning and more time exploring.",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Find the Best Stays in Seconds 🏨",
      text: "From cozy homestays to luxury hotels, Trip AI compares thousands of options instantly. Get smart suggestions tailored to comfort, proximity, and price.",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60"
    },
    {
      title: "Explore Local Gems Like a Pro 🌍",
      text: "Discover hidden cafes, adventure spots, food tours, and scenic routes curated by AI. No more missing out—the world’s best-kept secrets are now in your pocket.",
      img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=60"
    }
  ];

  return (
    <>
      {travelContent.map((item, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              {item.title}
            </span>{" "}
            {item.text}
          </p>

          <img
            src={item.img}
            alt="Trip AI mock image"
            height="500"
            width="500"
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain rounded-xl"
          />
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "Smart Trip Planner",
    title: "AI-generated itineraries, day plans, and personalized travel routes.",
    src: "https://m.media-amazon.com/images/I/81hzrFrTgIL.png",
    content: <DummyContent />,
  },
  {
    category: "Hotel & Stay Finder",
    title: "Find the best hotels, homestays, and budget stays with smart recommendations.",
    src: "https://m.media-amazon.com/images/I/919fmTgIL9L.png",
    content: <DummyContent />,
  },
  {
    category: "Flight & Transport Assistant",
    title: "Compare flights, trains, cabs, and receive real-time travel insights.",
    src: "https://m.media-amazon.com/images/I/81sOK8pLycL.png",
    content: <DummyContent />,
  },

  {
    category: "Local Experiences & Activities",
    title: "AI-curated suggestions for attractions, adventures, food spots, and hidden gems.",
    src: "https://m.media-amazon.com/images/I/81IyXIqx6ML.png",
    content: <DummyContent />,
  },
  {
    category: "Budget & Cost Optimizer",
    title: "Track expenses, get estimated trip budgets, and find cost-efficient options.",
    src: "https://m.media-amazon.com/images/I/91+zIMR138L.png",
    content: <DummyContent />,
  },
  {
    category: "Travel Safety & Support Hub",
    title: "Emergency info, weather alerts, local rules, and AI-powered help during travel.",
    src: "https://m.media-amazon.com/images/I/81ECivowcqL.png",
    content: <DummyContent />,
  },
];





