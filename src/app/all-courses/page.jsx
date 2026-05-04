
"use client";

import { useEffect, useState } from "react";
import Popcard from "@/components/popcard";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false); // start false
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); //  start loading
      setError(null);

      try {
        const res = await fetch(
          "https://skill-sphere-zeta-gray.vercel.app/data.json"
        );

        const data = await res.json();
        setCourses(Array.isArray(data) ? data : data.courses || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch courses.");
      }

      setLoading(false); //  stop loading
    };

    fetchData();
  }, []);

  // search box
  const filteredCourses = courses.filter((course) =>
    course?.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">
        All Courses
      </h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search courses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        
        {loading && (
          <div className="col-span-3 text-center text-gray-500">
            Loading courses...
          </div>
        )}

       
        {error && (
          <div className="col-span-3 text-center text-red-500">
            {error}
          </div>
        )}

        
        {!loading && !error && filteredCourses.length > 0 &&
          filteredCourses.map((course) => (
            <Popcard key={course.id} course={course} />
          ))
        }

        
        {!loading && !error && filteredCourses.length === 0 && (
          <div className="col-span-3 text-center text-gray-500">
            No courses found.
          </div>
        )}

      </div>

    </div>
  );
};

export default AllCoursesPage;

