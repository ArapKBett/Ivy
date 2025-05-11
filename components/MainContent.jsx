function MainContent() {
  return (
    <main className="container mx-auto py-12 px-4 flex-grow">
      <section className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Ivy Chelimo’s Website</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover more about Ivy and her work.
        </p>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
          Learn More
        </button>
      </section>
    </main>
  );
}

export default MainContent;
