import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


const Popcard = ({ course }) => {
    return (
      <Card className=" border items-center ">
        <div className=" h-full w-full ">
            <Image className="w-full h-48 object-cover"
             src={course.image}
             
             width={300}
             height={300} 
             alt={course.title}
            />
        </div>
        <div className="w-full p-4">
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
          <Link href={`/all-course/${course.id}`} >
            <Button variant="outline" className={"w-full "}>  View Details
            </Button>
            
          </Link>
      </Card>
          );
};

export default Popcard; 