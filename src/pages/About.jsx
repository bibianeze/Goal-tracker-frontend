export default function About() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          About Goal Tracker
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          <strong>Goal Tracker</strong> is a productivity tool designed to help
          you plan, manage, and achieve your personal or professional goals with
          ease.
        </p>

        <div className="text-left space-y-4">
          <p className="bg-blue-50 p-4 rounded-lg shadow">
            ✅ Create goals with a title and description
          </p>
          <p className="bg-blue-50 p-4 rounded-lg shadow">
            ✅ Edit or delete your goals as you progress
          </p>
          <p className="bg-blue-50 p-4 rounded-lg shadow">
            ✅ Mark goals as completed (optional feature)
          </p>
        </div>

        <div className="mt-10 text-sm text-gray-500">
          Built with ❤️ using React, Tailwind CSS, Node.js, and Express.
        </div>
      </div>
    </div>
  );
}
