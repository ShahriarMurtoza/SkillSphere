"use client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";


const handleSubmit = async () => {
  try {
    // your submit logic
    toast.success("View Success 👋");
  } catch (error) {
    toast.error("Something went wrong ❌");
  }
};

const Popcard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-xl transition duration-300 flex flex-col">

      {/* Image */}
      <div className="relative w-full h-40 sm:h-44 md:h-48">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-4 space-y-2">

        <h3 className="text-base sm:text-lg font-semibold">
          {course.title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span>⭐ {course.rating}</span>
          <span>{course.duration}</span>
        </div>

        <span className="inline-block w-fit px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
          {course.level}
        </span>

      </div>

      {/* Button */}
      <div className="p-4 pt-0"><Link href={`/all-courses/${course.id}`}>
          <button className="w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition text-sm sm:text-base" onClick={handleSubmit}>
            View Details
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Popcard;