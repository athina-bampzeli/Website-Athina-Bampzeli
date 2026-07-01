// app/news/page.tsx

import FlipCard from "@/components/FlipCard";
import {FaLinkedin} from "react-icons/fa";

export const metadata = {
  title: "News",
};

export default function News() {
  return (
    <section className="px-6 py-30">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">News</h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 space-y-6 max-w-4xl">

        
            {/* datahow symposium */}
            <FlipCard
              front={
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    Digital Bioprocessing Symposium
                  </h3>

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      17-18 June 2026 <br />
                      ETH, Zurich, Switzerland
                    </div>
                    <a
                          href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_hybridmodeling-machinelearning-research-ugcPost-7474760603518152704-ptZY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center hover:opacity-80 transition text-[#0A66C2]"
                      >
                          <FaLinkedin size={24} />
                    </a>
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex items-center bg-gray-100 border rounded-xl p-4 text-justify">
                  <p className="text-gray-700">The symposium aims to create a space where industry
                    professionals can connect with peers who are driving digital bioprocessing practices within their organisations, exchange
                    learnings, and build a strong community around best practice. Participants had the opportunity to hear directly
                    from industry experts and academic innovators, who shared insights, real-world applications, and forward-looking
                    perspectives through dedicated talks and panel discussions. The symposium also offered hands-on exposure to the latest
                    technologies driving digital bioprocessing, including interactive demonstrations, live use-case showcases, and facilitated
                    sessions with the tools and platforms accelerating digital transformation.
                    Visit{" "}
                    <a
                      href="https://discover.datahow.ch/symposium-2026"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      DataHow website
                    </a>{" "}
                    for more.
                  </p>

                  
                </div>

              }
            />

            {/* datahow course */}
            <FlipCard
              front={
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    19th Advanced Process Data Analytics Course
                  </h3>

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      15-17 June 2026 <br />
                      ETH, Zurich, Switzerland
                    </div>
                    <a
                          href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_hybridmodeling-machinelearning-research-ugcPost-7474760603518152704-ptZY/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center hover:opacity-80 transition text-[#0A66C2]"
                      >
                          <FaLinkedin size={24} />
                    </a>
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex items-center bg-gray-100 border rounded-xl p-4 text-justify">
                  <p className="text-gray-700">The course aims to provide an overview and advanced insight into data analytics and modeling
                    methodologies for process data. The lectures presented fundamental concepts to visualize high-dimensional and highly
                    correlated process and product quality data, identify the important process drivers, and forecast the process and product
                    quality behavior. Hands-on and brainstorming sessions were used to solve case studies from the (biopharmaceutical)
                    industry. After the course, the participants were aware of relevant techniques and literature for process data
                    analysis and were able to evaluate different analysis paths for a given problem.
                    Visit{" "}
                    <a
                      href="https://datahow.ch/courses/summer-2026-advanced-process-data-analytics-course-eth-zurich/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      DataHow website
                    </a>{" "}
                    for more.
                  </p>

                  
                </div>

              }
            />


            {/* pesxm15 */}
            <FlipCard
              front={
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    15th Panhellenic Scientific Conference on Chemical Engineering
                  </h3>

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      3-5 June 2026 <br />
                      Technical University of Crete, Chania, Greece
                    </div>
                    <a
                          href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_presentations-publication-chemicalengineering-ugcPost-7471968794119294978-LFf-/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center hover:opacity-80 transition text-[#0A66C2]"
                      >
                          <FaLinkedin size={24} />
                    </a>
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex items-center bg-gray-100 border rounded-xl p-4 text-justify">
                  <p className="text-gray-700">The conference focused on highlighting interdisciplinary areas
                    of Chemical Engineering, as
                    well as current trends, recent developments, and research in fields such as Biochemical
                    Engineering, Biomedical Engineering, Nanotechnology, Electrochemistry, Green Chemistry,
                    Sustainable and Circular Development, Machine Learning, Safety and Hygiene in Chemical
                    Processes, Environmental Protection, Energy Transition, and the mitigation of Climate Change
                    impacts.                  
                    Visit{" "}
                    <a
                      href="https://pesxm15.tuc.gr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      pesxm15 website
                    </a>{" "}
                    for more.
                  </p>

                  
                </div>

              }
            />

            {/* pesxm14 */}
            <FlipCard
              front={
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    14th Panhellenic Scientific Conference on Chemical Engineering
                  </h3>

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      29-31 May 2024 <br />
                      Porto Palace Hotel, Thessaloniki, Greece
                    </div>
                    <a
                          href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_pesxm14-chemeng-engineering-activity-7204479932616368128-l1ZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center hover:opacity-80 transition text-[#0A66C2]"
                      >
                          <FaLinkedin size={24} />
                    </a>
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex items-center bg-gray-100 border rounded-xl p-4 text-justify">
                  <p className="text-gray-700">The conference aims to explore, encourage, and highlight
                    collaboration between fundamental and applied research institutions in order to create
                    innovative products and/or processes. The latter should ensure the robust operation of the domestic supply chain.            
                    Visit{" "}
                    <a
                      href="https://www.pesxm14.gr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      pesxm14 website
                    </a>{" "}
                    for more.
                  </p>

                  
                </div>

              }
            />

            
            
          </div>
        </div>
        

      </div>
    </section>
  );
}