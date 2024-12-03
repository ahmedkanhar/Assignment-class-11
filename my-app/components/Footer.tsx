const Footer = () => {
    return (
      <footer className="bg-red-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-bold">CarShowcase</span>. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with ❤️ by <span className="text-yellow-400 font-medium">Ahmed Ali</span>.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  