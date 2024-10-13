import Image from "next/image";

const events = [
  {
    title: "Practical Insights for Aspiring Tech Professionals",
    time: "Sunday, October 20 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/john.jpg",
  },
];

export function UpcomingEventsTab() {
  return (
    <section className="p-4 sm:p-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg text-start border-purple-500 border-opacity-40 bg-gray-800"
          >
            <Image
              src={event.img} 
              alt={event.title}
              width={1000}
              height={96}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg sm:text-xl font-semibold">{event.title}</h3>
              <p className="text-purple-600 font-semibold">{event.time}</p>
              <p className="text-white">{event.location}</p>
              <button className="mt-4 w-full px-4 py-2 bg-purple-500 text-black hover:bg-purple-700 rounded-md">
                View details &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
