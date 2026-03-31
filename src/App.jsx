import "./App.css";

function App() {
  const courses = [
    { title: "System Administration and IT Infrastructure Services" },
    { title: "Operating Systems Becoming a Power User" },
    { title: "The Bits and Bytes of Computer Networking" },
    { title: "Technical Support Fundamentals" },
    { title: "How to Succeed at: Writing Applications" },
    { title: "Medicine Administration for Carers" },
  ];

  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {courses.map((course, index) => (
        <div key={index} className="shadow rounded-lg overflow-hidden bg-white">
          <img
            src="https://www.placehold.co/300x200"
            alt={course.title}
            className="w-full"
          />

          <div className="p-4 bg-red-100">
            <h3 className="text-lg font-semibold mb-4">{course.title}</h3>

            <div className="bg-red-50 p-3 rounded-lg mb-4">
              <div className="text-sm text-gray-500 flex justify-between mt-2">
                <span>👥 123 users</span>
                <span>⏱ 60 min</span>
              </div>

              <div className="mt-3 mb-2 flex items-center gap-2">
                <img
                  src="https://www.placehold.co/50x50"
                  alt="Author's Avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium">Author's Name</p>
                  <p className="text-xs text-gray-500">Designer</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="bg-white py-2 px-4 rounded">$123</div>
              <button className="bg-red-700 hover:bg-red-900 active:bg-red-500 text-white px-4 py-2 rounded text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;