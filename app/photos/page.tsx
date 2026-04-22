// app/photos/page.tsx
import FlipCard from "@/components/FlipCard";
import { FaGithub, FaLinkedin} from "react-icons/fa";

export const metadata = {
  title: "Photos",
};

export default function Photos() {
  return (
    <main className="px-6 py-30">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Photos</h2>

        <div className="break-inside-avoid mb-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

        
            
            <FlipCard
              height="h-135"
              width="w-90"
              front={
                
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/graduation.jpg"
                    alt="Graduation"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Graduation</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        Aristotle University of Thessaloniki, Greece, December 2025
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_chemicalengineering-tutor-phd-activity-7417651261426073600-o2Ef?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>
              }
            />

            <FlipCard
              height="h-71.5"
              width="w-90"
              front={
                
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/diploma.jpg"
                    alt="Thesis presentation"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Thesis Presentation</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        Aristotle University of Thessaloniki, Greece, December 2025
                    </p>

                    <div className="flex items-center gap-4">
                        <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_gproms-publication-phd-activity-7404163995844100097-D1PJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700 transition"
                        >
                        <FaLinkedin size={24} />
                        </a>

                        <a
                        href="https://github.com/athina-bampzeli/Diploma-Thesis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-gray-700 transition"
                        >
                        <FaGithub size={24} />
                        </a>
                    </div>
                </div>

              }
            />

            <FlipCard
              height="h-70"
              width="w-90"
              front={
 
                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/TVAC.jpg"
                    alt="TVAC"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Payload TVAC Campaign</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        ESEC-Galaxia, Transinne, Belgium, October 2025
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/esaeduacademy_esaacademy-activity-7399500627799801856-O7rc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />
            
            <FlipCard
              height="h-68"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/spacestandards.jpg"
                    alt="Space Standards"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Space Standards Course</h3>
                  </div>

                </div>
              }
              back={


                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        ESEC-Galaxia, Transinne, Belgium, June 2025
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_esaacademy-management-controlengineering-activity-7337820309938434048-HPEb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />

            <FlipCard
              height="h-101"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/cybersecurity.jpg"
                    alt="Cybersecurity"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Cybersecurity and Mathematics</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        15th International Week Dedicated to Maths, International Hellenic University, Thessaloniki, Greece, May 2025
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_cybersecurity-mathematics-interdisciplinarity-activity-7327009827488976896-5wht?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />

            <FlipCard
              height="h-90"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/ecotrophelia.jpg"
                    alt="Ecotrophelia"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Ecotrophelia</h3>
                  </div>

                </div>
              }
              back={


                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        Federation of Hellenic Food Industries, Athens, Greece, June 2024
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/nikoletamavropoulou_ecotrophelia-brewfizz-ecotrophelia2024-ugcPost-7210333010649358337-syor?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />


            <FlipCard
              height="h-67"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/UAE.jpg"
                    alt="UAE"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Civil Engineering Trip</h3>
                  </div>

                </div>
              }
              back={


                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        Khalifa University, Abu Dhabi, UAE, April 2024
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_technology-industry-universities-activity-7193600630505005056-oKa0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />
            
            <FlipCard
              height="h-61"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/turin.jpg"
                    alt="Turin"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Space Economy Course</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                        Politecnico di Torino, Italy, April 2023
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_best-course-travel-activity-7064616668596977664-xvgx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                

              }
            />

            <FlipCard
              height="h-68"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/JobFair.jpg"
                    alt="JobFair"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">JobFair by BEST Thessaloniki</h3>
                  </div>

                </div>
              }
              back={

                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                    Aristotle University of Thessaloniki, Greece, March 2023
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_organizing-responsible-communicating-activity-7039996733040275456-XiKt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />

            <FlipCard
              height="h-60"
              width="w-90"
              front={

                <div className="absolute inset-0 border rounded-xl shadow-sm overflow-hidden group-hover:shadow-md">

                  <img
                    src="/photos/euroscola.jpg"
                    alt="Euroscola"
                    className="w-full h-full object-contain"
                  />

                  <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3">
                    <h3 className="text-lg font-semibold">Euroscola</h3>
                  </div>

                </div>
              }
              back={


                <div className="absolute inset-0 flex flex-col items-center justify-center border rounded-xl bg-gray-100 p-4 text-center gap-4">
                    <p className="text-gray-700">
                    European Parliament, Strasbourg, France, February 2019
                    </p>

                    <a
                        href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_distinguish-europeanparliament-energy-activity-7028716189241466880-U_pr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center text-black hover:text-gray-700 transition"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

              }
            />

          </div>
        </div>

      </div>
    </main>
  );
}

