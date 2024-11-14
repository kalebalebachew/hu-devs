import { useState } from "react";
import Image from "next/image";

const events = [
  {
    title:"Stories from gugt podcast, Freelancing and AASTU",
    time: "Saturday, November 16 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/biruk.jpg",
    description:"This time, we're hosting Brook Belihu ,the former co-host of Gugut Podcast —a name many of you already know and love! Now making waves with PulseERP, We will start right from the AASTU days, dive into his freelancing journey, and cover everything in between!"
  },
  {
    title:"Campus Innovation the Kuraztech's Journey",
    time: "Saturday, November 9 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/tito.jpg",
    description: "HUDC is excited to bring you special live session featuring Tito Frezer, one of the key figures behind KurazTech —a company that started as a university club and grew into a successful tech company."
  },
  {
    title: "A Journey started in Haramaya University",
    time: "Sunday, October 20 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/john.jpg",
    description:
      "We’re excited to have Yohannes, a former Haramaya lecturer, student, and now a Senior Data Engineer at Excellerent Solutions.\n\nYohannes went from sitting in the same classrooms you're in as a student, to teaching in them as a lecturer, and now he’s working in the tech industry.\n\nIn this session, he’ll share:\n\n• How he moved from learning and teaching to tech.\n• The challenges he faced along the way.\n• Practical tips for anyone wanting to start in tech."
  }
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
