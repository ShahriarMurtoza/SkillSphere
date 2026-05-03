import Image from "next/image";




const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.8,
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
    rating: 4.8,
    level: "Intermediate",
    description: "Build cross-platform mobile apps using Flutter.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Development"
  }
];

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <Image
        src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold">{course.title}</h3>

        <p className="text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        <div className="flex justify-between items-center mt-2 text-sm">
          <span>⭐ {course.rating}</span>
          <span>{course.duration}</span>
        </div>

        <span className="inline-block mt-2 px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
          {course.level}
        </span>

       
      </div>
    </div>
  );
};

const Trending = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6">
        🔥 Trending Courses
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Trending;