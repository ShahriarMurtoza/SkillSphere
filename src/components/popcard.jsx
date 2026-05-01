import { Card } from "@heroui/react";
import Image from "next/image";


const Popcard = ({ course }) => {
    return (
      <Card className="">
        <div>
            <Image
             src={course.image}
             
             width={200}
             height={200} 
             alt={course.title}
            />
        </div>
      </Card>
          );
};

export default Popcard; 