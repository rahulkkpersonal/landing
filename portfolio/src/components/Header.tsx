import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-300">
          Jules
        </Link>
        <div className="space-x-4">
          <Link href="#projects" className="hover:text-blue-400 transition-colors duration-300">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-blue-400 transition-colors duration-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;