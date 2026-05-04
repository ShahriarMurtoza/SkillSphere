import Image from "next/image";



const CourseDetailsPage = async ({params}) => {

  const {id} = await params;
    const res = await fetch('https://skill-sphere-zeta-gray.vercel.app/data.json')
    const courses = await res.json()
  
    const course = courses.find(c => c.id == id)

  return (
   <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-2xl shadow-md p-6 m-9 space-y-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-blue-400 cursor-pointer">
                        
   
     <h1 className="text-xl font-bold text-gray-800">
       {course.title}
     </h1>
        <Image
          src={course.image}
          alt={course?.title}
          width={400}
          height={200}
          className="object-cover rounded-lg"
        />
     <p className="text-sm text-gray-500">
       Instructor: <span className="text-gray-700 font-medium">{course.instructor}</span>
     </p>
   
     <p className="text-gray-600 text-sm leading-relaxed">
       {course.description}
     </p>
   
     <p className="text-sm text-gray-600">
       ⏱ {course.duration}
     </p>
   
     <p className="text-sm text-blue-600 font-medium">
       🎯 {course.level}
     </p>
   
     <p className="text-sm text-yellow-500 font-medium">
       ⭐ {course.rating}
     </p>
   
     <p className="text-sm text-gray-600">
       📂 {course.category}
     </p>
   
   </div>
  );
};

export default CourseDetailsPage;