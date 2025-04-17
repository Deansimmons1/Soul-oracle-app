export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0f1a] to-[#1a1a2e] text-white p-8 font-sans">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          ✨ Soul Contract Oracle ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A mystical space for past life echoes, soul archetypes, and divine journaling.
        </p>
        <a
          href="https://github.com/deansimmons1/soul-contract-oracle"
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded-xl shadow-md hover:bg-gray-200 transition"
        >
          📜 View Oracle Scrolls
        </a>
      </div>
    </div>
  );
}
