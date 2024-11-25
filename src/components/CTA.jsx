import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTA = () => (
  <div className="w-full bg-black py-10">
    <motion.div
      className="container mx-auto px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col text-center items-center gap-6">
        {/* Title Section */}
        <motion.h3
          className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight max-w-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Empower Future Innovators
        </motion.h3>

        <motion.div
          className="p-2 rounded-lg shadow-lg bg-gray-900/30 max-w-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-md text-gray-400 leading-relaxed">
            Your support helps us foster creativity and innovation among tech
            enthusiasts. By supporting HUDC, you empower the next generation of
            tech innovators.
          </p>
          <p className="text-md text-gray-400 leading-relaxed ">
            Whether you want to mentor rising stars, sponsor educational events,
            or contribute resources, every effort makes a lasting impact.
          </p>
        </motion.div>

        <motion.div
          className="p-2  bg-gray-800/40 rounded-lg max-w-xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-md text-gray-400">
            Join us in creating a vibrant community of tech enthusiasts who
            share a passion for learning and innovation. Together, we can build
            a stronger future by supporting talent and fostering collaboration.
          </p>
        </motion.div>

        {/* Button Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            className="px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition"
            onClick={() => {
              window.location.href =
                "mailto:kalebalebachew4@gmail.com?subject=Support%20HUDC&body=I%20would%20like%20to%20support%20the%20HUDC%20community.";
            }}
          >
            Support HUDC
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </div>
);
