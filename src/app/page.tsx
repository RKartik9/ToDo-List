import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400">
      <h1 className="text-4xl font-semibold text-white mb-8">
        Welcome to My Todo App
      </h1>
      <p className="text-lg text-white mb-12">
        Start organizing your tasks and getting things done!
      </p>
      <Link href="/todo">
        <a className="bg-white text-cyan-500 rounded-full py-3 px-6 text-lg font-semibold hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-105">
          Go to Todo List
        </a>
      </Link>
      <div className="mt-8 text-white text-sm opacity-70">
        Created by Your Name &copy; {new Date().getFullYear()}
      </div>
    </main>
  );
}
