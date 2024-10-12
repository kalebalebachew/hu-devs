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
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-8">UPCOMING EVENTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          {events.map((event, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg text-start border-purple-500"
            >
              <Image
                src={event.img} 
                alt={event.title}
                width={1000}
                height={96}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-purple-600 font-semibold">{event.time}</p>
                <p className="text-white">{event.location}</p>
                <button className="mt-4 px-4 py-2 bg-purple-500 text-black hover:bg-purple-700 rounded-sm">
                  VIEW DETAIL &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  