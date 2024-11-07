import { useState } from "react";
import Image from "next/image";

const events = [
  {
    title: "Campus Innovation the Kuraztech's Journey",
    time: "Saturday, November 9 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/tito.png",
    description:
      "HUDC is excited to bring you special live session featuring Tito Frezer, one of the key figures behind KurazTech —a company that started as a university club and grew into a successful tech company."
  },
];

export function UpcomingEventsTab() {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleExpand = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  return (
    <section className="p-4 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Upcoming Events
      </h2>
      <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-md sm:max-w-full border rounded-lg overflow-hidden shadow-lg text-start border-purple-500 border-opacity-40 bg-gray-800"
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
              <button
                className="mt-4 w-full px-4 py-2 bg-purple-500 text-black hover:bg-purple-700 rounded-md"
                onClick={() => toggleExpand(index)}
              >
                {expandedEvent === index ? "Hide details" : "View details"} &rarr;
              </button>
              {expandedEvent === index && (
                <div className="mt-4 text-gray-300">
                  <p>{event.description}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
