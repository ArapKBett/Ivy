import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="flex items-center">
          {/* Replace with logo.png or use initials as fallback */}
          <div className="bg-white text-purple-600 rounded-full h-12 w-12 flex items-center justify-center mr-3 font-bold text-xl">
            IC
          </div>
          <h1 className="text-2xl font-bold">Ivy Chelimo (Nothing but Love)</h1>
        </div>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
