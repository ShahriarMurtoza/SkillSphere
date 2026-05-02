import Image from "next/image";


const Detailspage = async ({params}) => {
    const {id} =await params;
    const res = await fetch("https://skill-sphere-zeta-gray.vercel.app/data.json");
    const datas = await res.json();
    const course = datas.find(c => c.id == id);
    
    return (
        <div>
            {/* <Image 
             src={course?.image}
             alt={course.title}
              width={600} height={400} 
              className="rounded-lg mb-4" /> */}

            <h1>Name:{course.title}</h1>
            <h3>Instructor: {course.instructor}</h3>
            <p>{course.description}</p>
            <p>Category: {course.category}</p>
            <p>Duration: {course.duration}</p>
            <p>Rating: {course.rating}</p>
        </div>
    );
};

export default Detailspage;