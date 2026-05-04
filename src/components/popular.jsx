
import Popcard from "@/components/popcard";
const Popular = async () => {
  const res = await fetch("https://skill-sphere-u7la.vercel.app/data.json");
  const data = await res.json();
  const topCourses = data.slice(0, 3);

  return (
    <div className=" mx-auto px-4 py-10">

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">
         Popular Courses
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCourses.map((course) => (
          <Popcard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default Popular;