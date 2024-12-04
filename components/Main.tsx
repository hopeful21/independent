const Main: React.FC = () => {
    const services = [
      { 
        id: 1, 
        name: "Business Cards", 
        image: "/micheile-henderson-b-OFeL7Yr08-unsplash.jpg", 
        description: "Make a lasting impression with professionally designed business cards."
      },
      { 
        id: 2, 
        name: "Brochures", 
        image: "/mauricio-santos-P0-DUEOPU-w-unsplash.jpg", 
        description: "Engage your audience with custom brochures for any purpose." 
      },
      { 
        id: 3, 
        name: "Posters", 
        image: "/sinitta-leunen-IpS5832v2Yg-unsplash (1).jpg", 
        description: "Create eye-catching posters to promote your brand or event."
      },
      { 
        id: 4, 
        name: "Flyers", 
        image: "/pexels-rdne-8292889.jpg", 
        description: "Distribute impactful flyers that grab attention instantly."
      },
      { 
        id: 5, 
        name: "Banners", 
        image: "/pexels-timo-1192514-10010406.jpg", 
        description: "Design banners that make a bold statement in any space." 
      },
      { 
        id: 6, 
        name: "Custom Stickers", 
        image: "/chuttersnap-pLZP9cUU904-unsplash.jpg", 
        description: "Express your creativity with personalized sticker designs."
      },
      { 
        id: 7, 
        name: "Calendars", 
        image: "/pexels-leeloothefirst-5386754.jpg", 
        description: "Keep track of important dates with stylish custom calendars."
      },
      { 
        id: 8, 
        name: "Photo Books", 
        image: "/yearbook.jpg", 
        description: "Preserve memories in beautifully crafted photo books."
      },
      { 
        id: 9, 
        name: "Envelopes", 
        image: "/pexels-nietjuh-1809342.jpg", 
        description: "Customize envelopes for personal or professional use."
      },
      { 
        id: 10, 
        name: "Certificates", 
        image: "/pexels-rdne-7821927.jpg", 
        description: "Recognize achievements with professionally designed certificates." 
      },
    ];
  
    return (
      <section className="container mx-auto py-16 px-4">
        <h3 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <a
              key={service.id}
              href={`/service/${service.id}`}
              className="group relative border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
                  {service.name}
                </h4>
                <p className="text-sm text-gray-600 mt-2">
                  {service.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-blue-500 bg-opacity-0 group-hover:bg-opacity-20 transition duration-300" />
            </a>
          ))}
        </div>
      </section>
    );
  };
  
  export default Main;
  