import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">Welcome to My Todo App</h1>
        <p className="text-lg mb-8">
          Organize your tasks and boost your productivity!
        </p>
      </div>

      <div className="mt-16 flex flex-col items-center">
        {" "}
        {/* Center content */}
        <h2 className="text-2xl font-semibold mb-4">Get Started Today!</h2>
        <Link
          className="bg-cyan-500 text-white rounded-full py-3 px-6 text-lg font-semibold hover:bg-cyan-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 mb-4"
          href="/todo"
        >
          Click to open the Todo List
        </Link>
      </div>
    </main>
  );
}
