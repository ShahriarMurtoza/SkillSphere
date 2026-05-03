

import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "Sameya Sultana Shithi",
    expertise: "Frontend Development",
    description:
      "Specializes in React and modern UI design. Helps students build real-world projects with clean and scalable code.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    id: 2,
    name: "Michael Brown",
    expertise: "Complete Web Development",
    description:
      "Expert in data-driven decision making. Teaches development tools used in software companies.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
  },
  {
    id: 3,
    name: "Sarah Khan",
    expertise: "Digital Marketing",
    description:
      "Focuses on SEO, social media growth, and brand strategy. Guides students to build strong online presence effectively.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
];

const TopInstructor = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Title */}
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-10">
        🏆 Top Instructors
      </h3>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">

        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="bg-white border rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
          >

            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={ins.image}
                alt={ins.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">

              <h4 className="text-lg font-semibold text-gray-800">
                {ins.name}
              </h4>

              <p className="text-sm text-blue-600 font-medium">
                {ins.expertise}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {ins.description}
              </p>

              {/* Rating */}
              <div className="flex justify-between items-center mt-3">
                <span className="text-yellow-500 font-medium">
                  ⭐ {ins.rating}
                </span>

                <button className="text-sm text-blue-600 hover:underline">
                  View Profile
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default TopInstructor;