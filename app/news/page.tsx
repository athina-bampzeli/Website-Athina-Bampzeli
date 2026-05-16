// app/news/page.tsx

import FlipCard from "@/components/FlipCard";

export const metadata = {
  title: "News",
};

export default function News() {
  return (
    <section className="px-6 py-30">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">News</h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-20 max-w-4xl w-full">

        
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
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">The conference will focus on highlighting interdisciplinary areas
                    of Chemical Engineering, as
                    well as current trends, recent developments, and research in fields such as Biochemical
                    Engineering, Biomedical Engineering, Nanotechnology, Electrochemistry, Green Chemistry,
                    Sustainable and Circular Development, Machine Learning, Safety and Hygiene in Chemical
                    Processes, Environmental Protection, Energy Transition, and the mitigation of Climate Change
                    impacts.
                  </p>
                  <p className="text-gray-700">
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

            {/* datahow course */}
            <FlipCard
              front={
                
                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    Advanced Process Data Analytics
                  </h3>

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      15-17 June 2026 <br />
                      ETH, Zurich, Switzerland
                    </div>
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">This course aims to provide an overview and advanced insight into data analytics and modeling
                    methodologies for process data. The lectures will present fundamental concepts to visualize high-dimensional and highly
                    correlated process and product quality data, identify the important process drivers, and forecast the process and product
                    quality behavior. Hands-on and brainstorming sessions will be used to solve case studies from the (biopharmaceutical)
                    industry. After the course, the participants will be aware of relevant techniques and literature for process data
                    analysis and will be able to evaluate different analysis paths for a given problem.
                  </p>
                  <p className="text-gray-700">
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
                  
                </div>
              }
              back={

                
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">The symposium aims to create a space where industry
                    professionals can connect with peers who are driving digital bioprocessing practices within their organisations, exchange
                    learnings, and build a strong community around best practice. Participants will have the opportunity to hear directly
                    from industry experts and academic innovators, who will share insights, real-world applications, and forward-looking
                    perspectives through dedicated talks and panel discussions. The symposium also offers hands-on exposure to the latest
                    technologies driving digital bioprocessing, including interactive demonstrations, live use-case showcases, and facilitated
                    sessions with the tools and platforms accelerating digital transformation.
                  </p>
                  <p className="text-gray-700">
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
            
          </div>
        </div>
        

      </div>
    </section>
  );
}