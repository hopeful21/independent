const Hero: React.FC = () => {
    return (
      <section className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12 text-center lg:text-left">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
              Your One-Stop <span className="text-yellow-400">Digital Printing</span> Solution
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-100">
              From business cards to banners, we provide high-quality printing services to make your brand stand out. Let us bring your ideas to life!
            </p>
            <div className="mt-8 flex flex-col lg:flex-row items-center gap-4">
              <a
                href="#services"
                className="bg-yellow-400 text-blue-800 py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition transform hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href="https://wa.me/087765061856"
                className="border-2 border-yellow-400 text-yellow-400 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-800 transition transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Image */}
        <div className="absolute inset-y-0 right-0 lg:w-1/2 hidden lg:block">
          <img
            src="/pexels-jakubzerdzicki-17536002.jpg"
            alt="Digital Printing"
            className="object-cover h-full"
          />
        </div>
        {/* Animated Decorative Circle */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      </section>
    );
  };
  
  export default Hero;
  