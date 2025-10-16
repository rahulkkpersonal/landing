const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-4">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Jules. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;