"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import Contact from "../contact/page";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Your vision, my expertise. I collaborate closely with you to understand your needs and create a website that reflects your brand identity and resonates with your target audience.  Let's build something amazing together.",
    href:"",
  },
  {
    num: "02",
    title: "Ui/Ux Design",
    description: "From concept to pixel-perfect design, I guide you through the entire UI/UX process.  I'll help you define your target audience, create user flows, and develop a design system that ensures consistency and scalability.",
    href:"",
  },
  {
    num: "03",
    title: "Database Development",
    description: "Your data is your most valuable asset. I design and develop robust and reliable databases that ensure data integrity, security, and accessibility.  Let me help you unlock the power of your data.",
    href:"",
  },
  {
    num: "04",
    title: "Backend Development",
    description: "I'm not just a developer, I'm your long-term technology partner. I provide ongoing support and maintenance for the backend systems I build, ensuring your applications remain stable, secure, and performant.  I'm here to help you scale and adapt your backend as your business grows.",
    href:"",
  },
  {
    num: "05",
    title: "Software Development",
    description: "From concept to deployment, I deliver robust and scalable software solutions tailored to your business needs. Proficient in Java, C#, and Python, I can build applications for a variety of platforms, including web, desktop, and mobile. Let's bring your software vision to life.",
    href:"",
  },
  {
    num: "06",
    title: "Android Development",
    description: "Building bridges between your vision and your audience. I create Android apps that foster meaningful connections, turning users into loyal fans.",
    href:"",
  },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div

           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.4, duration: 0.1, ease: "easeIn" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"

          >

           {services.map((service, index) => {
            return (
            <div key={index} 
            className="flex-1 flex flex-col justify-center gap-6 group"
            >
            <div className="w-full flex justify-between items-center" >
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 " >
                {service.num}</div>
                <Link href={service.href} 
                className="w-[70px] h-[70px] rounded-full bg-white 
                group-hover:bg-accent transition-all duration-500 flex 
                justify-center items-center hover:-rotate-45"
                >
                <BsArrowDownRight className="text-primary text-3xl" />

                </Link>
             </div>
             {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white
                    group-hover:text-accent transition-all duration-500"> 
                    
                    {service.title}</h2>

                {/* description */}
              <p className="text-white/60"> {service.description}</p>

                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
             </div>
             );
            })}

          </motion.div>
        </div>
      </section>
    );
  };

export default Services;