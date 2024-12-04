import { useState } from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const services = [
    { id: 1, name: "Business Cards" },
    { id: 2, name: "Brochures" },
    { id: 3, name: "Posters" },
    { id: 4, name: "Flyers" },
    { id: 5, name: "Banners" },
    { id: 6, name: "Custom Stickers" },
    { id: 7, name: "Calendars" },
    { id: 8, name: "Photo Books" },
    { id: 9, name: "Envelopes" },
    { id: 10, name: "Certificates" },
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query) {
      const filteredSuggestions = services
        .filter((service) =>
          service.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((service) => service.name);
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    const service = services.find(
      (service) => service.name.toLowerCase() === suggestion.toLowerCase()
    );
    if (service) {
      router.push(`/service/${service.id}`);
      setSearchQuery(""); // Clear the search query
      setSuggestions([]); // Clear suggestions
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
    <header className="bg-blue-700 text-white py-4">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Centered Logo on Mobile */}
        <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <a href="/" aria-label="Home" className="flex items-center">
            <img
              src="/BackgroundEraser_20240906_100628191.png"
              alt="Logo"
              className="mx-auto md:mx-0"
              width={150}
              height={80}
            />
          </a>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-1/3 lg:w-1/4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 rounded-lg text-gray-800 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Search services"
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 text-gray-500 hover:text-gray-800"
                aria-label="Clear search"
              >
                ✖
              </button>
            )}
          </div>
          {suggestions.length > 0 && (
            <ul className="absolute z-10 bg-white text-gray-800 w-full mt-2 rounded-lg shadow-lg overflow-hidden transition duration-300">
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
