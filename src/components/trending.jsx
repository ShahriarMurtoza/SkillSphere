import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.9,
    level: "Beginner",
    description: "Learn full-stack web development from scratch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Development"
  },
  {
    id: 2,
    title: "Python for Data Science",
    instructor: "Emily Chen",
    duration: "22 hours",
    rating: 4.9,
    level: "Intermediate",
    description: "Analyze data and build models using Python.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Mobile App Development with Flutter",
    instructor: "Ayesha Rahman",
    duration: "19 hours",
    rating: 4.9,
    level: "Intermediate",
    description: "Build cross-platform mobile apps using Flutter.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Development"
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative w-full h-44 sm:h-48 md:h-52">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
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

        <span className="inline-block mt-1 px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
          {course.level}
        </span>
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="bg-gray-100 px-4 py-10">

      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        🔥 Trending Courses
      </h2>

      {/* Responsive Grid */}
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
};

export default Trending;