
import Popcard from "@/components/popcard";


const allcoursesPage = async() => {
    const res = await fetch("https://skill-sphere-zeta-gray.vercel.app/data.json");
    const data = await res.json();
    console.log(data);n
    return (
        <div>
            <h1 className="text-3xl text-center">All Courses</h1>

            <div className="grid grid-cols-3 gap-5">
                {data.map(course => (
                    <Popcard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default allcoursesPage;