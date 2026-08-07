"use client";

import { motion } from "framer-motion";
import { MapPin, Video, Users } from "lucide-react";
import { fadeUpVariant, UI } from "@/lib/constants";
import Footer from "@/components/Footer";
import GlobalHero from "@/components/layout/GlobalHero";
import { Button } from "@/components/Button";

export default function EventsPage() {
  const events = [
    { title: "FlutoCon 2026", type: "In-Person", location: "San Francisco, CA", date: "Oct 12-14, 2026", desc: "Our annual flagship user conference. Join 5,000+ operations leaders for 3 days of product keynotes and workshops.", icon: <MapPin className="w-5 h-5" /> },
    { title: "Building Custom CRM Workflows", type: "Virtual Webinar", location: "Online", date: "Nov 5, 2026", desc: "A deep dive into Fluto CRM's new workflow automation engine hosted by our Lead Product Manager.", icon: <Video className="w-5 h-5" /> },
    { title: "European Partner Summit", type: "In-Person", location: "London, UK", date: "Dec 2, 2026", desc: "Exclusive networking event for our Platinum and Silver tier integration partners in Europe.", icon: <MapPin className="w-5 h-5" /> }
  ];

  return (
    <main className={UI.pageWrapper}>
      
      <GlobalHero 
        badgeText="Fluto Global Community"
        badgeIcon={<Users className="w-4 h-4" />}
        titleTop="Global Events &"
        titleGradient="Fluto Meetups."
        description="Discover upcoming conferences, hands-on developer workshops, and virtual webinars happening around the globe."
      >
      </GlobalHero>

      {/* EVENTS LIST */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 -mt-8 relative z-20">
        <div className="flex justify-between items-center mb-10">
          <h2 className={`${UI.sectionHeading} ${UI.headingColor}`}>Upcoming Events</h2>
        </div>

        <div className="space-y-6">
          {events.map((evt, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-[#0A0A0A] border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row gap-8 items-start md:items-center group">
              <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-500/10 rounded-2xl flex flex-col items-center justify-center border border-indigo-100 dark:border-indigo-500/20 shrink-0">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">{evt.date.split(' ')[0]}</span>
                <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{evt.date.split(' ')[1].replace(',', '')}</span>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 rounded-full flex items-center gap-1">
                    {evt.icon} {evt.type}
                  </span>
                  <span className="text-xs font-bold text-gray-500">{evt.location}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{evt.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium max-w-2xl">{evt.desc}</p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <Button variant="secondary" size="md">
                  View Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}