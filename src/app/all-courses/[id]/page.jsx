import { Button } from "@heroui/react";
import Image from "next/image";


const allcoursesPage = async() => {
    const res = await fetch("https://skill-sphere-zeta-gray.vercel.app/data.json");
    const data = await res.json();
    return (
        <div>
            <h1 className="text-3xl text-center">All Courses</h1>

            <div className="grid grid-cols-3 gap-3">
                {data.map(course => (
                    <div key={course.id}  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border">
                       {/* Image Section */}
                         <div className="relative w-full h-48 overflow-hidden">
                           <Image
                            src={`${course.image}?auto=format&fit=crop&w=800&q=80`}
                            //  src={course.image}
                             fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            height={300}
                             width={300}
                             alt={course.title}
                             className="object-cover rounded-xl"
                           />
                       
                           {/* Rating badge */}
                           <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-lg">
                             ⭐ {course.rating}
                           </div>
                         </div>
                       
                         {/* Content */}
                         <div className="p-5 space-y-3">
                       
                           {/* Title */}
                           <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                             {course.title}
                           </h3>
                       
                           {/* Instructor */}
                           <p className="text-sm text-gray-500">
                             by {course.instructor}
                           </p>
                       
                           {/* Meta Info */}
                           <div className="flex justify-between items-center text-sm text-gray-600">
                                 <span>{course.duration}</span>
                                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs">
                                   {course.level}
                                 </span>
                               </div>
                           
                               {/* Button */}
                               <Button className="w-full mt-3 bg-black text-white hover:bg-gray-800 rounded-xl">
                                 View Details
                               </Button>
                           
                             </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default allcoursesPage;