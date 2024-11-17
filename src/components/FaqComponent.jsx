"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqComponent() {
  const faqItems = [
    {
      question: "What is HUDC?",
      answer: "HUDC stands for Haramaya University Developers Community, a group of passionate student developers dedicated to fostering innovation and collaboration in technology."
    },
    {
      question: "How do I join the community?",
      answer: "You can join our community by signing up for membership on our website or connecting with us on Telegram. We welcome developers of all skill levels!"
    },
    {
      question: "Are there any exclusive benefits?",
      answer: "Yes, exclusive members can showcase their projects, get free access to paid courses, participate in members-only hackathons, and receive mentorship from experienced developers."
    },
    {
      question: "What kind of events does HUDC organize?",
      answer: "HUDC organizes a variety of events including coding workshops, tech talks, hackathons, and networking sessions with industry professionals."
    },
    {
      question: "Can I contribute to HUDC projects?",
      answer: "We encourage all members to contribute to our open-source projects. It's a great way to gain experience and collaborate with fellow developers."
    }
  ]

  return (
    <section className="py-12 md:py-6 lg:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-500 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="space-y-4 max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={`item-${index + 1}`} 
              value={`item-${index + 1}`} 
              className="border-b border-purple-500 border-opacity-20 last:border-b-0"
            >
              <AccordionTrigger className="font-semibold text-lg text-purple-400 py-6 transition-all duration-300 ease-in-out hover:text-purple-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 transition-all duration-300 ease-in-out">
                <div className="mt-2 opacity-90">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}