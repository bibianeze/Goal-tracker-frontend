import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">
          Stay Focused. <br /> Track Your Goals.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Goal Tracker helps you organize your life, set clear intentions, and
          stay accountable every day.
        </p>
        <Link
          to="/goals"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          View My Goals
        </Link>

        {/* Optional Illustration */}
        <div className="mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2972/2972255.png"
            alt="goal"
            className="w-40 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
