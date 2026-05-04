import "animate.css";

const LearningTips = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Title */}
      <h3 className="text-center text-3xl md:text-4xl font-bold mb-10 animate__animated animate__fadeInDown">
         Learning Tips
      </h3>
      <p className="text-center text-gray-600 mb-10 animate__animated animate__fadeInDown">
        Discover effective strategies to enhance your learning experience and achieve better academic results.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Study Techniques */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white  animate__animated animate__fadeInLeft">
          <h4 className="text-xl font-semibold mb-3 text-blue-600">
            📚 Study Techniques
          </h4>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Effective study techniques include active recall, spaced repetition, and summarization to improve retention. 
            Breaking content into smaller sections, practicing regularly, and testing yourself enhances understanding. 
            Using visual aids like diagrams and teaching others also strengthens memory. Consistency and focus are key 
            to mastering subjects efficiently and achieving long-term academic success.
          </p>
        </div>

        {/* Time Management */}
        <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-white animate__animated animate__fadeInRight">
          <h4 className="text-xl font-semibold mb-3 text-green-600">
            ⏰ Time Management
          </h4>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Time management involves planning tasks, setting priorities, and allocating time efficiently. Techniques like 
            scheduling, goal setting, and avoiding distractions improve productivity. Breaking tasks into manageable parts 
            and using tools like calendars helps maintain consistency. Proper time management reduces stress, increases 
            efficiency, and ensures timely completion of academic and personal responsibilities.
          </p>
        </div>

      </div>
    </div>
  );
};

export default LearningTips;