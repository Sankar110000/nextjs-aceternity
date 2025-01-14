import { div, h1 } from "framer-motion/client";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

export default function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="bg-gray-900 h-auto p-4">
      <div className="text-center pt-[4rem]">
        <h2 className="uppercase text-lime-300 text-xl">Featured Courses</h2>
        <p className="text-6xl font-bold tracking-normal">Lern with the best</p>
      </div>
      <div>
        <div className="flex justify-center gap-4 p-6 mt-10 mb-6 flex-wrap">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 flex flex-col items-center text-center flex-grow h-[10rem] w-[20rem]">
                  <p className="text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href={"/courses"}
          className="bg-white w-[8rem] px-3 py-[0.5rem] text-sm text-black text-center tracking-tight rounded"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}
