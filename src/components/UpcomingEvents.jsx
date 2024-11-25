"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const events = [
  {
    title: "Stories from gugt podcast, Freelancing and AASTU",
    time: "Saturday, November 16 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/biruk.jpg",
    description:
      "This time, we're hosting Brook Belihu ,the former co-host of Gugut Podcast —a name many of you already know and love! Now making waves with PulseERP, We will start right from the AASTU days, dive into his freelancing journey, and cover everything in between!",
  },
  {
    title: "Campus Innovation the Kuraztech's Journey",
    time: "Saturday, November 9 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/tito.jpg",
    description:
      "HUDC is excited to bring you special live session featuring Tito Frezer, one of the key figures behind KurazTech —a company that started as a university club and grew into a successful tech company.",
  },
  {
    title: "A Journey started in Haramaya University",
    time: "Sunday, October 20 2:30 LT",
    location: "HUDC Telegram Channel",
    img: "/john.jpg",
    description:
      "We're excited to have Yohannes, a former Haramaya lecturer, student, and now a Senior Data Engineer at Excellerent Solutions.\n\nYohannes went from sitting in the same classrooms you're in as a student, to teaching in them as a lecturer, and now he's working in the tech industry.\n\nIn this session, he'll share:\n\n• How he moved from learning and teaching to tech.\n• The challenges he faced along the way.\n• Practical tips for anyone wanting to start in tech.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

export function UpcomingEventsTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = 'unset';
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Upcoming Events
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          Join our upcoming sessions with industry experts
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={event.img}
                alt={event.title}
                width={1000}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 line-clamp-2">
                {event.title}
              </h3>
              <p className="text-purple-400 font-medium mb-1">{event.time}</p>
              <p className="text-gray-400 mb-4">{event.location}</p>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(event)}
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                View Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={closeModal}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={handleModalClick}
              className="relative bg-gray-900/90 rounded-xl max-w-2xl w-full border border-white/10 overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full bg-black/20 backdrop-blur-sm z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64">
                <Image
                  src={selectedEvent.img}
                  alt={selectedEvent.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedEvent.title}
                </h2>
                <p className="text-purple-400 font-medium mb-1">
                  {selectedEvent.time}
                </p>
                <p className="text-gray-400 mb-4">{selectedEvent.location}</p>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 whitespace-pre-line">
                    {selectedEvent.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}