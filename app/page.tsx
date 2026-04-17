// app/page.tsx

"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaGitlab, FaGraduationCap } from "react-icons/fa";
import { SiOrcid } from "react-icons/si";
import { ResearchGateIcon, ScopusIcon } from "@/components/Icons";
import { useEffect } from "react";
import FlipCard from "@/components/FlipCard";

const skillstech = [
  "Mechanistic Modeling",
  "Data-driven Modeling",
  "Process Design",
  "Process Modeling",
  "Process Simulation",
  "Process Optimization",
  "Parametric / Sensitivity Analysis",
  "Uncertainty Analysis",
  "Techno-economic Analysis",
  "Linear Programming",
  "Mixed-Integer Linear Programming",
  "Thermal Modeling",
  "gPROMS",
  "Unisim",
  "Python",
  "GAMS",
  "MATLAB",
  "Fortran",
  "ESATAN-TMS",
  "Ubuntu",
  "Virtual Machines",
  "Git",
  "LaTeX"
];

const skillssoft = [
  "Teamwork",
  "Effective communication",
  "Independence",
  "Organization",
  "Curiosity",
  "Creativity",
  "Interdisciplinary collaboration",
  "Critical thinking",
  "Problem solving",
  "Adaptability",
  "Resilience",
  "Discipline",
  "Leadership",
  "Project management",
  "Attention to detail",
  "Ethical research",
];

export default function Home() {

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* <Navbar /> */}

      {/* Home screen */}
      <main id="home" className="px-6 py-30 flex flex-col md:flex-row md:items-center justify-start md:justify-center pt-6 md:pt-24 px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Image */}
          <div className="flex justify-center">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Athina Bampzeli
            </h1>

            <p className="text-gray-600 mb-6">
              Hello! Welcome to my website :) I am Athina, a chemical
              engineer from Thessaloniki looking for opportunities in research end education.
            </p>

            <div className="flex flex-wrap gap-4 max-w-[240px] justify-center md:justify-start">
              <a
                href="/cv.pdf"
                target="_blank"
                className="px-4 py-3 bg-black text-white rounded-xl text-center flex-shrink-0 hover:bg-gray-800 transition"
              >
                CV
              </a>

              <a 
                href="https://github.com/athina-bampzeli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <FaGithub size={24} />
              </a>

              <a 
                href="https://gitlab.com/users/Athina_Bampzeli" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <FaGitlab size={24} />
              </a>

              <a 
                href="https://www.linkedin.com/in/athina-bampzeli-53197b243/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <FaLinkedin size={24} />
              </a>

              <a 
                href="https://orcid.org/0009-0007-9879-8952" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"

              >
                <SiOrcid size={24} />
              </a>

              {/* ResearchGate */}
              <a
                href="https://www.researchgate.net/profile/Athina-Bampzeli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <ResearchGateIcon size={24} />
              </a>

              {/* Google Scholar */}
              <a
                href="https://scholar.google.com/citations?hl=en&authuser=1&user=JnwBfVAAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <FaGraduationCap size={24} />
              </a>

              
              {/* <a
                href="https://www.scopus.com/authid/detail.uri?authorId=YOUR_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl"
              >
                <ScopusIcon size={24} />
              </a> */}
            </div>

          </div>

        </div>
      </main>

      {/* About section */}
      <section id="about" className="px-6 py-30 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            I hold an Integrated Master's degree in Chemical Engineering with first-class honours 
            from Aristotle University of Thessaloniki, Greece. I am passionate about research and
            the dissemination of knowledge, and I aspire to pursue a career in academia, while
            remaining open to the diverse opportunities that may arise along the way.

            My interests lie in the application of technology to industrial production systems,
            particularly in computer-aided modeling, simulation, and optimization. I am
            especially interested in hybrid modeling of bioprocesses, a field I am currently
            exploring in greater depth and aim to specialize in during my PhD.
            
            I strongly value lifelong learning and interdisciplinarity, and I am driven by
            intellectual curiosity. You can explore my work through my{" "}
            
            <a
              href="/cv.pdf"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              CV
            </a>

            {" "}and{" "}

            <a
              href="https://github.com/athina-bampzeli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>

            {" "}projects, or{" "}

            <a
              href="#contact"
              className="text-blue-600 hover:underline"
            >
              contact me
            </a>

            {" "}if you are interested in collaboration.
          </p>
    
        </div>
      </section>

      {/* Research interests section */}
      <section id="research-interests" className="px-6 py-30">
        <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-6">Research Interests</h2>

            <ul className="text-gray-700 space-y-3 text-center">
              <li>Mechanistic, data-driven and hybrid modeling of bioprocesses</li>
              <li>Process modeling, simulation and optimization</li>
              <li>Process systems engineering</li>
            </ul>

        </div>
      </section>

      {/* Publications section */}
      <section id="publications" className="px-6 py-30">
        <div className="max-w-6xl mx-auto text-center">

            <h2 className="text-3xl font-bold mb-6">Publications</h2>

            <ul className="text-gray-700 space-y-3 text-center">
              <li>
              Bampzeli, A., Charakleias, E., & Georgiadis, M. C. (2026). Modeling, simulation and optimization of integrated milk pasteurization and membrane filtration processes. <i>Food and Bioproducts Processing</i>, <i>157</i>, 583-599. 
              <a 
                href="https://doi.org/10.1016/j.fbp.2026.04.006" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://doi.org/10.1016/j.fbp.2026.04.006
              </a>
              </li>
            </ul>

            {/* 🔽 Image below publication */}
            <div className="mt-8 flex justify-center">
              <Image
                src="/publication.png"   
                alt="Publication figure"
                width={1000}
                height={600}
                className="rounded-xl shadow-md"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-gray-700">
              <span>Find more on</span>

              <a
                href="https://orcid.org/0009-0007-9879-8952"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition"
              >
                <SiOrcid size={18} />
              </a>

              <a
                href="https://www.researchgate.net/profile/Athina-Bampzeli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition"
              >
                <ResearchGateIcon size={18} />
              </a>

              <a
                href="https://scholar.google.com/citations?hl=en&authuser=1&user=JnwBfVAAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition"
              >
                <FaGraduationCap size={18} />
              </a>
            </div>

        </div>
      </section>

      {/* Skills section */}
      <section id="skills" className="px-6 py-30 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skillstech.map((skill, i) => (
                <div
                  key={i}
                  className="animate-on-scroll bg-black text-white px-4 py-2 rounded-lg opacity-0 translate-y-6 transition-all duration-700 text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 flex items-center justify-center gap-3 text-gray-700">
            Additional digital skills: Basic web development, cybersecurity tools
          </p>

          <h2 className="text-3xl font-bold mt-16 mb-6">Soft Skills</h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {skillssoft.map((skill, i) => (
                <div
                  key={i}
                  className="animate-on-scroll bg-black text-white px-4 py-2 rounded-lg opacity-0 translate-y-6 transition-all duration-700 text-center"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-gray-700">
            <span>Developed through activities mentioned in</span>
             <a
              href="/cv.pdf"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
             CV
            </a>

            {' '}and{' '}

            <a 
              href="https://www.linkedin.com/in/athina-bampzeli-53197b243/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>
      </section>


      {/* Services section */}
      <section id="services" className="px-6 py-30">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">Services</h2>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-10 max-w-4xl w-full">
              

              {/* Teaching courses */}
              {/* <div className="group [perspective:1000px]">
                <div className="relative h-90 w-90 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  
                  <div className="absolute inset-0 flex items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md">
                    <h3 className="text-2xl font-semibold">Teaching Courses</h3>
                  </div>

                  
                  <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 [transform:rotateY(180deg)] backface-hidden p-4 text-center">
                    <p className="text-gray-700">I support students from the Chemical Engineering department of Aristotle University of Thessaloniki with understanding and passing exams on the courses </p>
                      <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Technical Production Sceduling</li>
                        <li>Prgramming Languages</li>
                        <li>Chemical Reactor Design</li>
                        <li>Advanced Methods for Design, Synthesis and Optimization of Processes</li>
                        <li>Chemical Plant Design</li>
                        <li>Techno-economic Study</li>
                      </ul>
                    <p className="text-gray-700">I can help in formulating project/assignment/presentation if needed but not do the work </p>

                  </div>

                </div>
              </div> */}

            {/* Research collaboration */}
              <FlipCard
                front={
                  <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm text-center gap-3">
                    <img
                      src="/collaboration.png"
                      alt="collaboration"
                    />
                    <h3 className="text-2xl font-semibold">
                      Research Collaboration
                    </h3>
                  </div>
                }
                back={
                  <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                    <p>
                      Collaborating on academic projects and publications in the fields of process systems
                      engineering and machine learning. You can explore some of my coding projects in Python
                      focused on{" "}

                      <a
                        href="https://github.com/athina-bampzeli/Programming-Languages-1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        data analysis
                      </a>

                      ,{" "}

                      <a
                        href="https://github.com/athina-bampzeli/Programming-Languages-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        machine learning
                      </a>

                      {" "}and{" "}

                      <a
                        href="https://github.com/athina-bampzeli/Titer-Prediction"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        predictive modeling
                      </a>

                      ,{" "}as well as educational presentations on{" "}

                      <a
                        href="https://github.com/athina-bampzeli/Cybersecurity-Presentations"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        cybersecurity
                      </a>.
                    </p>
                  </div>
                }
              />

              {/* Career Development */}
              <FlipCard
                front={
                                   
                  <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md text-center gap-3">
                  
                    <img
                      src="/career.png"
                      alt="career"
                    />                    
                    <h3 className="text-2xl font-semibold">Career Development</h3>
                    
                  </div>
                }

                back={
                  
                  <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                    <p className="text-gray-700">Providing tailored guidance on preparing high-quality CVs and motivational/cover
                                                 letters for industrial and academic positions in Greece and internationally,
                                                 along with detailed, constructive feedback on your documents.

                                                 Supporting the full application process, including
                                                 identifying suitable opportunities, interview preparation, personal presentation,
                                                 and strategic follow-up.
                                                 
                                                 Offering mock interviews and presentation sessions designed to strengthen
                                                 your communication skills and boost your confidence.</p>
                  </div>

                }
              />

            </div>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section id="contact" className="px-6 py-30 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <p>
            Reach me at{' '}
            <a
              href="mailto:athbabzeli@gmail.com"
              className="text-blue-600 hover:underline"
            >
              athbabzeli@gmail.com
            </a>
            {' '} or{' '}

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/athina-bampzeli-53197b243/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:underline align-middle"
            >
              <FaLinkedin className="h-6 w-6 align-middle" />
            </a>
          </p>
          
          {/* <p className="mb-6 text-gray-700">
            Reach me at <a href="mailto:athbabzeli@gmail.com" className="text-blue-600 hover:underline">athbabzeli@gmail.com</a> or use the form below:
          </p>

          <form 
            action="https://formspree.io/f/xdapwzdz" 
            method="POST"
            className="flex flex-col gap-4 max-w-md mx-auto"
          >
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              required 
              className="border p-3 rounded"
            />

            <textarea 
              name="message" 
              placeholder="Your message" 
              required 
              className="border p-3 rounded"
            />

            <button 
              type="submit" 
              className="bg-black text-white p-3 rounded"
            >
              Send
            </button>
          </form> */}
        </div>
      </section>

      
    </>
  );
}