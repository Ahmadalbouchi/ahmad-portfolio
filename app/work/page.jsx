"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
      num: "01",
      category: "Fullstack",
      title: "Project 1",
      description:
      "Find your next favorite read! Our book finder website lets you easily search our extensive library, create a personalized collection by adding books to your favorites or archive, and even download them.  Start your literary journey today - sign up and explore!",
      stack : [{name: "React.js"}, {name: "Css 3"}, {name: "Html 5"}, {name: "MongoDB"}],
      image : '/assets/work/bookfinder.png',
      live: "http://bookfinderappv2.onrender.com",
      github:"https://github.com/ro-bala/bookFinderAppV2",
    },
    {
        num: "02",
        category: "Front-end",
        title: "Project 2",
        description:
        "Think you're a trivia whiz? Play TriviaMaster now! Select a category, answer 5 quick questions, and find out your score. Challenge your friends and see who comes out on top!",
        stack : [{name: "Javascript(react.js)"}, {name: "Css 3"}, {name: "Html 5"}],
        image : '/assets/work/Triviamaster.png',
        live: "https://triviamastergame.netlify.app/",
        github:"https://github.com/Ahmadalbouchi/assignment2",
    },
    {
        num: "03",
        category: "Front-end",
        title: "Project 3",
        description:
        " Is it sunny? Rainy?  Find out in a flash! This city weather app makes checking the forecast a breeze.",
        stack : [{name: "Html 5"}, {name: "Css 3"}, {name: "Javascript"}],
        image : '/assets/work/weather1.png',
        live: "https://weather2023ca.netlify.app/",
        github:"https://github.com/Ahmadalbouchi/Weatherapp",
    },
    {
      num: "04",
      category: "Front-end ",
      title: "Project 4",
      description:
      "Challenge your friend to a timeless battle of Xs and Os in this sleek and minimalist Tic-Tac-Toe game.",
      stack : [{name: "JavaScript"},{name:"Html 5"},{name:"Css 3"}],
      image : '/assets/work/Tic.png',
      live: "https://tictacgame2023.netlify.app/",
      github:"https://github.com/Ahmadalbouchi/TicTac",
  },
    {
      num: "05",
      category: "Software Requirement Specification",
      title: "Project 5",
      description:
      "Tired of phone tag and endless waiting rooms? Queue.Me is your pocket-sized portal to seamless scheduling.  This innovative app lets you effortlessly book appointments, manage your medical records, and even share feedback, all from the convenience of your phone.  Reclaim your time and say goodbye to appointment stress with Queue.Me – because your time is valuable.",
      stack : [{name: "Figma"},],
      image : '/assets/work/Queue.png',
      live: "https://drive.google.com/file/d/1J_DRRxZTXkf5sPRUhXgM3h5Ew3AMD56g/view?usp=sharing",
      github:"",
  },
  {
    num: "06",
    category: "Database & javafx",
    title: "Project 6",
    description:
    "A sleek JavaFX interface acting as a portal to a tin, database (SQLite).  Users can effortlessly sculpt their data – conjuring new entries, peering at existing records, reshaping details, and banishing unwanted information – all through intuitive forms and dynamic displays.  This is the essence of CRUD operations brought to life.",
    stack : [{name: "JavaFx"},{name:"SQL"}],
    image : '/assets/work/db.png',
    live: "",
    github:"",
},
{
  num: "07",
  category: "Javafx UI ",
  title: "Project 7",
  description:
  "Simple, sleek, and strong interface built with JavaFX, efficiently managing student data with clarity and ease.",
  stack : [{name: "JavaFx"},{name:"Java"}],
  image : '/assets/work/javafx.png',
  live: "",
  github:"",
},
{
  num: "08",
  category: "C# Windows Forms UI ",
  title: "Project 8",
  description:
  "This C# Windows Form application manages pizza orders, capturing customer information, pizza selections, and order summaries within a straightforward interface.",
  stack : [{name: "C#"},{name:"C# Windows Form"}],
  image : '/assets/work/C.png',
  live: "",
  github:"",
},
{
  num: "09",
  category: "Database  ",
  title: "Project 9",
  description:
  "In a strong and high-quality database, the mission becomes easier for law enforcement to effectively manage and analyze critical information related to officers, crimes, weapons, criminals, victims, cases, and contacts, ultimately contributing to enhanced public safety and efficient justice administration.",
  stack : [{name: "SQL/PLSQL"},],
  image : '/assets/work/DB1.jpg',
  live: "",
  github:"",
},
  ];

  const Work = () => {
    const [project, setProject] = useState(projects[0]); 
  
    const handleSlideChange = (swiper) => {
      // get current slide index
      const currentIndex = swiper.activeIndex;
    
      // update project state based on current slide index
      setProject(projects[currentIndex]);
    };

    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1,
          transition :{delay:2.4, duration:0.4, ease:"easeIn"}
         }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
        <div className="container mx-auto">
         <div className="flex flex-col xl:flex-row xl:gap-[30px]">

          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%] ">
          {/* outline numb */}
          <div className="text-8xl leading-non font-extrabold text-transparent text-outline ">
          {project.num}
          </div>
          {/* project category*/}
          <h2  className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize" >{project.category} project </h2>
          {/* project description */}
          <p className="text-white/60">{project.description}</p>
          {/* stack */}
          <ul className="flex gap-4">
            {project.stack.map((item, index) => {
              return(
              <li key={index} className="text-xl text-accent">
                {item.name}
                {/*reomve the last comma */}
                {index !== project.stack.length - 1 && ","}
              </li>
              ); 
            })}
          </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4">
                  {/* Live project button*/}
                      <Link href={project.live}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                              <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>

                      {/* github project button*/}
                      <Link href={project.github}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Github repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>

                </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]"> 
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
        >
          {projects.map((project, index) => {
            return <SwiperSlide key={index} className="w-full">
              <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
              
              {/* overlay */}

                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" ></div>
                {/* image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>;
           })}
           {/* WorkSlidersBtns */}
            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"

              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"

            />

            </Swiper>
        </div>
        </div>
        </div>
      </motion.section>
    );
  };

export default Work;