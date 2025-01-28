"use client";

import { Description } from "@radix-ui/react-dialog";
import { Item } from "@radix-ui/react-select";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

//about data
const about = {
    title: "About me",
    description: "anything I will edit it later on edit from app/resume/page.jsx.",
    info:[
        {
            fieldName : "Name",
            fieldValue: " Ahmad AL Bouchi",
        },
        
        {
            fieldName : "Phone",
            fieldValue: "+1(437)-665-3146",
        },
        
        {
            fieldName : "Experience",
            fieldValue: " 12+ Months",
        },
        
        {
            fieldName : "Address",
            fieldValue: "Toronto ON, Canada",
        },
        
        {
            fieldName : "Email",
            fieldValue: "ahmad@gmail.com",
        },
        
        {
            fieldName : "Freelance",
            fieldValue: "Avaliable"
        },
        
        {
            fieldName : "Language",
            fieldValue: "English, Arabic",
        },
    ]
     
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description:"rnhtgiort ijtioj irtjiorj i jriojriojg jrgioroughorughrhguo ruo ru  hguohuhdr ",
    items:[
        {
            company : "MicroSoft.ca",
            position:"Full Stack Developer",
            duration:"2022-Present",
        },
        
        {
            company : "Google.ca",
            position:"Front-end developer",
            duration:"2024-Present",
        },
        
        {
            company : "Amazon.ca",
            position:"Data Designer",
            duration:"2021 Summer",
        },
        
        {
            company : "facebooke.ca",
            position:"Back-end Developer",
            duration:"1987-Present",
        },
        
        {
            company : "Walmart.ca",
            position:"UI/Ux Designer",
            duration:"2022-2012",
        },
        
        {
            company : "Centennial-Colleg",
            position:"Teaching Assistance",
            duration:"2025-Present",
        },
        
        {
            company : "Soctia Bank",
            position:"Software Developer",
            duration:"1999-2010",
        },
    ]




};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description:"edit again",
    items:[
        {
            instituation : "Online Course Platform",
            degree:"Full Stack Web Developer",
            duration:"2023",
        },
        {
            instituation : "Codeademy",
            degree:"Front-end Track",
            duration:"2022",
        },
        {
            instituation : "Centennial Collge",
            degree:"Diploma Advanced in Software Engineering ",
            duration:"2022-present",
        },
       
      
    ]




};

//skills data
const skills = {
title: "My skills",
description:
"dohtji tpdjhpitj hitj thijr itjt hiojti jtrj htrjiojiortjh oijtrhoio toj",

skillList:[
    {
        icon: <FaHtml5 />,
        name: "html 5",
      },
      {
        icon: <FaCss3 />,
        name: "css 3",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <FaFigma />,
        name: "figma",
      },
]

};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto ">
            <Tabs
            defaultValue="experince"
          className="flex flex-col xl:flex-row gap-[60px]"
            >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>

            {/* content */}
            <div className="min-h-[70vh] w-full">
                     {/* experience */}
                    <TabsContent value="experience" className="w-full">
                 <div className="flex flex-col gap-[30px] text-center xl:text-left">
                 <h3 className="text-4xl font-bold">{experience.title}</h3>
                 <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                    </p>

                    <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"  >
                        {experience.items.map((item, index) => {
                        return (
                            <li key={index}
                            className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                            >
                            <span className="text-accent" >{item.duration}</span>
                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{item.position}


                            </h3>
                            <div className="flex items-center gap-3">
                                {/* dot */}
                                <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                                <p className="text-white/60" >{item.company}</p>
                            </div>
                            </li>
                        );
                        })}
                    </ul>
                    </ScrollArea>
                    </div>

                 </TabsContent>


                   {/* education */}
                    <TabsContent value="education" className="w-full">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {education.description}
                        </p>

                        <ScrollArea className="h-[400px]">
                        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"  >
                            {education.items.map((item, index) => {
                            return (
                                <li key={index}
                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                >
                                <span className="text-accent" >{item.duration}</span>
                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left" >{item.degree}


                                </h3>
                                <div className="flex items-center gap-3">
                                    {/* dot */}
                                    <span className="w-[6px] h-[6px] rounded-full bg-accent" ></span>
                                    <p className="text-white/60" >{item.instituation}</p>
                                </div>
                                </li>
                            );
                            })}
                        </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>

                  {/* skills */}
                  <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{skills.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                        {skills.description}
                        </p>
                        </div>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                        {skills.skillList.map((skill, index) => {
                        return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group" >
                            <div className="text-6xl group-hover:text-accent transition-all duration-300" > {skill.icon}</div> 
                            </TooltipTrigger>

                            <TooltipContent>
                            <p className="capitalize" >{skill.name}</p>
                            </TooltipContent>

                        </Tooltip>
                        </TooltipProvider>

                        

                        </li>;
                        })}
                    </ul>
                </div>
                 </TabsContent>


                  {/* about */}
                  <TabsContent value="about" className="w-full text-center xl:text-left ">
                  
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl font-bold " >{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0" >{about.description}
                    </p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0" > 
                        {about.info.map((item, index) => {
                        return (
                            <li key={index} className=" flex items-center justify-center xl:justify-start gap-4  ">

                            <span className="text-white/60" >{item.fieldName}</span> 
                            <span className="text-xl ">{item.fieldValue}</span>
                            </li>
                        );
                        })}
                    </ul>
                    </div>
                  
                 </TabsContent>

            </div>
         
            </Tabs>
        </div>
        </motion.div>
      );
};



export default Resume;