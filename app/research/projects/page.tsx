// app/research/projects/page.tsx

import FlipCard from "@/components/FlipCard";

export const metadata = {
  title: "Research Projects | Athina Bampzeli",
};

export default function Projects() {
  return (
    <section className="px-6 py-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Research Projects</h2>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-20 max-w-4xl w-full">

        
            {/* Thesis */}
            <FlipCard
              height="h-150"
              width="w-90"
              front={
                
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/thesis.png"
                    alt="Diagram from diploma thesis"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Diploma Thesis</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">This thesis presents a dynamic, integrated process design 
                  and simulation framework for the pasteurization and membrane filtration sections of a
                  dairy plant producing milk powder. The aim is to evaluate how key physicochemical and
                  biological phenomena such as protein denaturation, fouling, enzyme inactivation, and microbial
                  growth affect process conditions, product quality, cleaning requirements, and utility
                  consumption. Three process models are developed using the gPROMS™ FormulatedProducts platform
                  to compare the performance of separate pasteurization and membrane filtration models with that
                  of an integrated configuration. Global System Analyses are applied to capture interactions
                  among key process variables and quantify variability under parameter uncertainty. Optimization
                  is performed first for individual process stages and then for the integrated system. Visit{" "}
                    <a
                      href="https://github.com/athina-bampzeli/Diploma-Thesis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      GitHub
                    </a>{" "}
                    for more.
                  </p>
                </div>
              }
            />

        

            {/* Capstone Design Project */}
            <FlipCard
              height="h-150"
              width="w-90"
              front={
                
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/technoeconomic.png"
                    alt="Diagram from capstone design project"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Capstone Design Project</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">This techno-economic study investigates the production
                    of high-purity propylene ({'>'}99 wt%) from methanol using the Lurgi MTP process.
                    The proposed plant, located in Sindos Industrial Area, processes 252,500 kg/h of methanol
                    to produce 65,820 kg/h of propylene, achieving an overall yield of 26%. The process
                    includes reaction, separation, and compression units, supported by auxiliary systems
                    such as methanol recycling, a Rankine cycle, steam generation, and cooling towers.
                    The study covers mass and energy balances, equipment design, process optimization,
                    and energy integration. Additional analyses include waste management, plant layout
                    design, HAZOP safety assessment, life cycle analysis (LCA), and economic evaluation.
                    Sensitivity analysis and alternative scenarios are also examined. Results show a negative
                    net present value (NPV) of approximately -11 billion € over 30 years,
                    indicating that the project is not economically viable in Greece. Visit{" "}
                    <a
                      href="https://github.com/athina-bampzeli/Techno-economic-study"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      GitHub
                    </a>{" "}
                    for more.
                  </p>
                </div>

              }
            />

            {/* Thermal Engineer */}
            <FlipCard
              front={
 
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/thermal.png"
                    alt="AcubeSAT ESATAN thermal model"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Thermal Engineer</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">As a Thermal Engineer at the AcubeSAT project of{" "}

                    <a
                      href="https://spacedot.gr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      SpaceDot
                    </a>

                    , I performed thermal analyses
                    using ESATAN TMS and Simcenter and supported experimental testing of nanosatellite components.
                    I not only developed the geometric model of the satellite, meshing, thermal interfaces,
                    but also executed radiative analyses for in-orbit conditions. I further refined the model using data
                    from the{" "}

                    <a
                      href="https://www.esa.int/Education/Educational_Satellites/AcubeSAT_clears_Thermal-Vacuum_testing_and_sets_course_for_Manufacturing_Readiness_Review"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      TVAC campaign
                    </a>
                    {" "}(Thermal Vacuum Chamber) conducted at ESA facilities in Belgium.
                    In addition, I created a training video on the use of ESATAN and documented
                    all work on{" "}

                    <a
                      href="https://gitlab.com/Athina_Bampzeli"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      GitLab
                    </a>

                    {" "}to support knowledge sharing.</p>
                </div>

              }
            />
            
            {/* Ecotrophelia */}
            <FlipCard
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/ecotrophelia.jpeg"
                    alt="Effervescent coffee tablet for ecotrophelia"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Ecotrophelia</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex items-center justify-center border rounded-xl bg-gray-100 p-4 text-center">
                  <p className="text-gray-700">The competition organised by Hellenic Food Industries Association
                  was about developing innovative food and beverages that are produced, packaged and transported
                  in an eco-friendly and economic way. The product that we developed was an effervescent tonic
                  beverage containing caffeine in the form of a tablet. We took care of both the product itself
                  and its packaging as if it was going to be released to the market the next day. We presented
                  the technical study (manufacturing plan, HACCP), the environmental impact, the business and
                  marketing plan of our product to the evaluation committee and we also prepared over 100 tablets
                  for the attendees at the competition to try.</p>
                </div>

              }
            />

          </div>
        </div>

      </div>
    </section>
  );
}

