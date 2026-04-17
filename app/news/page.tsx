// app/news/page.tsx

export default function News() {
  return (
    <main className="px-6 py-30 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">News</h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-1 gap-2 max-w-4xl w-full">

        
            {/* pesxm15 */}
            <div className="group [perspective:1000px]">
              <div className="relative h-120 w-90 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* FRONT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl shadow-sm group-hover:shadow-md p-4 text-center">
                  <h3 className="text-2xl font-semibold">
                    15th Panhellenic Scientific Conference on Chemical Engineering

                    <div className="mt-3 text-lg font-normal text-gray-600">
                      3-5 June 2026 <br />
                      Technical University of Crete, Chania, Greece
                    </div>
                  </h3>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 [transform:rotateY(180deg)] backface-hidden p-4 text-center">
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

              </div>
            </div>
          </div>
        </div>
        

      </div>
    </main>
  );
}