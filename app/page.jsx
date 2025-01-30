"use client"; // Add this directive to mark the component as a Client Component
import { FaLaptopCode, FaCogs  } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Path to your CV file in the public directory
    link.download = "Ahmad_AL_Bouchi_CV.pdf"; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-4xl text-gray-300 font-light flex items-center gap-2">
          Software Engineer <FaLaptopCode className="text-2xl text-accent" />
          
          </span>
            <h1 className="h1 mb-6 font-light">
              Hello I'm <br />
              <span className="text-accent font-light block">Ahmad</span>
              <span className="text-accent font-light">AL Bouchi</span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 ">
            I excel at designing and developing user-friendly websites and full-stack projects. My expertise
             spans a variety of programming languages and technologies, enabling me to create seamless
              and engaging user interfaces.  I am also proficient in database design and management, furthermore, excel in Connecting these databases to user-friendly
             interfaces and making it easy for users to interact with and manage the data effectively.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 rounded-full"
                onClick={handleDownloadCV}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;