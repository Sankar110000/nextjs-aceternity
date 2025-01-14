import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Music Theory",
    description:
      "Dive deep into the fundamentals of music theory and enhance your musical skills.",
    slug: "understanding-music-theory",
    isFeatured: true,
  },
  {
    title: "The Art of Songwriting",
    description:
      "Learn the craft of songwriting from experienced musicians and songwriters.",
    slug: "the-art-of-songwriting",
    isFeatured: true,
  },
  {
    title: "Mastering Your Instrument",
    description:
      "Advanced techniques to master your musical instrument of choice.",
    slug: "mastering-your-instrument",
    isFeatured: true,
  },
  {
    title: "Music Production Essentials",
    description:
      "Get started with music production with this comprehensive overview.",
    slug: "music-production-essentials",
    isFeatured: true,
  },
  {
    title: "Live Performance Techniques",
    description:
      "Enhance your live performance skills with expert tips and strategies.",
    slug: "live-performance-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Music Marketing",
    description:
      "Learn how to promote your music effectively in the digital age.",
    slug: "digital-music-marketing",
    isFeatured: true,
  },
];

export default function UpcomingWebinars() {
  return (
    <div className="px-[10rem] py-10">
      <div className="text-center py-6">
        <h1 className="text-lime-300 text-xl">FEATURED WEBINARS</h1>
        <p className="font-bold text-5xl tracking-tight">Enhance Your Musical Journey</p>
      </div>
      <div>
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: webinar.slug,
          }))}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        <Link href={"/webinars"}>
            <p className="bg-white w-[8rem] px-3 py-[0.5rem] text-sm text-black text-center tracking-tight rounded">Vew all webinars</p>  
        </Link>
      </div>
    </div>
  );
}
