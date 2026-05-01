import Popcard from "@/components/popcard";
const Popular = async() => {
    const res = await fetch("https://skill-sphere-zeta-gray.vercel.app/data.json");
    const data = await res.json();
    const topCourses= data.slice(0,3);
    return (
        <div>
            <h1 className="text-3xl font-bold mt-5 text-center">Popular Courses</h1>
            <div>
                {topCourses.map(course => <Popcard key={course.id} course={course}/>)
                }
            </div>
            
        </div>
    );
};

export default Popular;