import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

export function EventsTab({ events = [], pastEvents = [] }) {
  const sortedUpcomingEvents = events.sort((a, b) => {
    const dateA = new Date(a.date || a.time);
    const dateB = new Date(b.date || b.time);
    return dateA - dateB;
  });

  const sortedPastEvents = pastEvents.sort((a, b) => {
    const dateA = new Date(a.date || a.time);
    const dateB = new Date(b.date || b.time);
    return dateB - dateA;
  });

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Events
      </h2>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Upcoming Events
        </h3>
        {sortedUpcomingEvents.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No upcoming events stay tuned.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedUpcomingEvents.map((event, index) => (
              <Card key={index} className="flex flex-col">
                {event.img && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.img}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date || event.time).toLocaleDateString()}
                  </p>
                  {event.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <Button as="a" href={`/register/${index}`} className="w-full">
                    Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Past Events
        </h3>
        {sortedPastEvents.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No past events to display.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPastEvents.map((event, index) => (
              <Card key={index} className="flex flex-col">
                {event.img && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.img}
                      alt={event.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date || event.time).toLocaleDateString()}
                  </p>
                  {event.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  <Button
                    as="a"
                    href={`/events/${index}`}
                    variant="outline"
                    className="w-full"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
