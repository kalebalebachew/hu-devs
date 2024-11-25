import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How can I join the community?',
      answer: 'Simply signup with your information Join our social media channels.',
    },
    {
      question: 'What events are hosted?',
      answer: 'We host workshops, hackathons, and collaborative learning sessions.',
    },
    {
      question: 'Can I contribute to the community?',
      answer: "Absolutely! We're open to mentorship, sponsorship, and more.",
    },
    {
      question: 'Who can join the community?',
      answer: 'Anyone with an interest in technology and collaboration is welcome!',
    },
    {
      question: 'Can I volunteer to organize events?',
      answer: 'Yes! We welcome volunteers to help organize and run events.',
    },
  ];
  

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="space-y-4 p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-500 pb-8">
            <h4
              className="text-lg font-semi cursor-pointer flex justify-between items-center"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {openIndex === index ? '-' : '+'}
              </motion.span>
            </h4>
            {openIndex === index && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 mt-2"
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQs;
