import { useRouter } from "next/router";
import Header from "@/components/Header";

const serviceData = [
    {
      id: 1,
      title: "Business Cards",
      description: "Create a lasting impression with professionally designed business cards.",
      details:
        "Tailored to showcase your brand's personality, our business cards are crafted with precision and premium materials. Choose from multiple sizes, textures, and finishes—matte, glossy, or textured—to elevate your networking game.",
      image: "/micheile-henderson-b-OFeL7Yr08-unsplash.jpg",
    },
    {
      id: 2,
      title: "Brochures",
      description: "Engage your audience with vibrant, foldable brochures.",
      details:
        "Whether it's for a product launch, event, or general branding, our brochures deliver. We offer bi-fold, tri-fold, and z-fold styles, printed on high-quality paper with crisp, vivid colors that captivate attention.",
      image: "/mauricio-santos-P0-DUEOPU-w-unsplash.jpg",
    },
    {
      id: 3,
      title: "Posters",
      description: "Command attention with bold, eye-catching posters.",
      details:
        "Perfect for events, promotions, or decor, our posters are designed to grab the spotlight. Printed on durable materials with high-resolution imagery, they're guaranteed to make your message pop.",
      image: "/sinitta-leunen-IpS5832v2Yg-unsplash (1).jpg",
    },
    {
      id: 4,
      title: "Flyers",
      description: "Spread your message effectively with sleek, impactful flyers.",
      details:
        "Affordable and versatile, our flyers are ideal for promotions, events, and more. Available in various sizes and finishes to meet your specific needs.",
      image: "/pexels-rdne-8292889.jpg",
    },
    {
      id: 5,
      title: "Banners",
      description: "Make a big statement with high-quality custom banners.",
      details:
        "Perfect for events, trade shows, or outdoor advertising, our banners are durable and visually striking. Choose from various sizes, materials, and finishing options for maximum impact.",
      image: "/pexels-timo-1192514-10010406.jpg",
    },
    {
      id: 6,
      title: "Custom Stickers",
      description: "Add a personal touch with creative custom stickers.",
      details:
        "Our stickers are perfect for branding, packaging, or personal use. Choose from various shapes, sizes, and finishes to bring your ideas to life.",
      image: "/chuttersnap-pLZP9cUU904-unsplash.jpg",
    },
    {
      id: 7,
      title: "Calendars",
      description: "Stay organized with beautifully designed custom calendars.",
      details:
        "Keep your brand front and center all year long with our personalized calendars. Available in wall, desk, and pocket formats, they're both practical and stylish.",
      image: "/pexels-leeloothefirst-5386754.jpg",
    },
    {
      id: 8,
      title: "Photo Books",
      description: "Treasure your memories with stunning photo books.",
      details:
        "Perfect for weddings, birthdays, or any special occasion, our photo books are crafted with high-quality materials to preserve your cherished moments.",
      image: "/yearbook.jpg",
    },
    {
      id: 9,
      title: "Envelopes",
      description: "Deliver your message in style with custom-designed envelopes.",
      details:
        "Our envelopes are available in various sizes and designs, tailored to match your branding. Ideal for business correspondence or invitations.",
      image: "/pexels-nietjuh-1809342.jpg",
    },
    {
      id: 10,
      title: "Certificates",
      description: "Celebrate achievements with premium certificates.",
      details:
        "Perfect for academic, professional, or personal recognitions, our certificates are printed on high-quality paper with elegant designs to honor success.",
      image: "/pexels-rdne-7821927.jpg",
    },
  ];
  
const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the service matching the ID
  const service = serviceData.find((item) => item.id === parseInt(id as string));

  if (!service) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-700">Service Not Found</h1>
        <p className="mt-4 text-gray-500">The service you are looking for does not exist.</p>
      </div>
    );
  }

  // WhatsApp message with pre-filled content
  const whatsappNumber = "085695503944";
  const whatsappMessage = encodeURIComponent(
    `Hi, I am interested in your "${service.title}" service. Could you please provide more details?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div>
      <Header />
      <main className="container mx-auto py-16 px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image Section */}
          <img
            src={service.image}
            alt={service.title}
            className="w-full lg:w-1/2 h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105"
          />
          
          {/* Content Section */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-blue-700 mb-4">{service.title}</h1>
            <p className="text-lg text-gray-700">{service.description}</p>
            <p className="mt-4 text-gray-600">{service.details}</p>

            {/* Interactive WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold hover:from-green-500 hover:to-green-700 transition-transform transform hover:scale-105"
            >
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetails;
