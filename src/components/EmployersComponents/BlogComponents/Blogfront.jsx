export default function Blogfront() {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-start relative bg-center bg-cover pt-24"
        style={{ 
          backgroundImage: "url('/images/BlogImages/blog.jpg')",
          transform: 'scaleY(-1)'
        }}
      >
        {/* Overlay - Flip back the content */}
        <div 
          className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4"
          style={{ transform: 'scaleY(-1)' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">MY BLOG</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-6">curriculum vitae</h2>
  
          {/* Nav Links */}
          <div className="space-x-4 mb-6">
            <a href="#" className="text-lg hover:text-gray-300">All Posts</a>
            <a href="#" className="text-lg hover:text-gray-300">Jobs</a>
          </div>
  
          {/* Blog Card with Glow and Grey Tint */}
          <div className="rounded-lg overflow-hidden w-full max-w-[20%] 
                          shadow-2xl ring-1 ring-white/30 
                          backdrop-blur-lg bg-white/50
                          border border-gray-200"
               style={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
          >
            <img
              src="/images/BlogImages/blogback.jpg"
              alt="Chef"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <p className="text-xs text-gray-500 mb-1">April 11, 2024</p>
              <h3 className="text-lg text-black font-semibold mb-2">Exploring Opportunities: Jobs in Canada's Food</h3>
              <a href="#" className="text-blue-500 hover:underline text-sm">Continue Reading</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  