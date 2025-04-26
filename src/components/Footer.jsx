// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-white text-gray-700 text-center py-8 px-4">
        <div className="space-y-2">
          <p className="text-sm">&copy; 2025 Cuisine Careers - All Rights Reserved.</p>
          <p className="text-sm">
            Contact us:{" "}
            <a
              href="mailto:cuisineCareers@fusion-foodies.com"
              className="text-blue-600 hover:underline"
            >
              cuisineCareers@fusion-foodies.com
            </a>
          </p>
        </div>
  
        {/* <nav className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-black">HOME</a>
          <a href="/about" className="hover:text-black">ABOUT</a>
          <a href="/jobs" className="hover:text-black">VIEW JOBS</a>
          <a href="/seekers" className="hover:text-black">JOB SEEKERS</a>
          <a href="/pricing" className="hover:text-black">PRICE</a>
          <a href="/contact" className="hover:text-black">CONTACT US</a>
        </nav> */}
      </footer>
    );
  }
  