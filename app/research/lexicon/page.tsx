// app/research/lexicon/page.tsx

export const metadata = {
  title: "Lexicon | Athina Bampzeli",
};

export default function Lexicon() {
  return (
    <section className="px-6 py-30 ">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">Lexicon</h2>

        <p className="text-gray-700 mb-8">
          Find definitions of technical terminology relevant to my research and studies
          in both formal/technical ways and simple ways for a non-expert to understand!
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Term</th>
                <th className="border px-4 py-2">Formal</th>
                <th className="border px-4 py-2">Source</th>
                <th className="border px-4 py-2">My approach</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Chemical Engineering</td>
                <td className="border px-4 py-2 text-justify">Chemical engineering is an engineering field which
                  deals with the study of the operation and design of chemical plants as well as methods
                  of improving production. Chemical engineers develop economical commercial processes
                  to convert raw materials into useful products. Chemical engineering uses principles
                  of chemistry, physics, mathematics, biology, and economics to efficiently use, produce,
                  design, transport and transform energy and materials. </td>
                <td className="border px-4 py-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Chemical_engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                </td>
                <td className="border px-4 py-2 text-justify">Chemical engineering uses knowledge from physics,
                  chemistry, and biology to understand how processes work at the microscopic (molecular)
                  level and apply this understanding to large-scale industrial production. It studies how
                  small-scale phenomena change when they are scaled up, helping design and operate pilot
                  plants and factories that convert raw materials into products such as medicines,
                  food, plastics, fuels... </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Model</td>
                <td className="border px-4 py-2 text-justify">A model is an informative representation of an object, person, or system.
                  Models can be divided into physical models and abstract/conceptual models. While a model seeks only to represent reality
                  with the purpose of better understanding or predicting the world, a theory claims to be an explanation of reality.</td>
                <td className="border px-4 py-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                </td>
                <td className="border px-4 py-2 text-justify">Models are ways to mimic/represent the real world in order to enhance our understanding on how it works.
                  By making predictions using a model, it can be tested how different conditions lead to different outcomes without changing the real system.
                  Thus, less money, time and effort is needed compared to experimenting with the real system.  </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Conceptual Model</td>
                <td className="border px-4 py-2 text-justify">The term conceptual model refers to any model that is the direct output of a conceptualization
                  or generalization process. Conceptual models are often abstractions of things in the real world, whether physical or social. 
                  Types of conceptual models are scientific models, statistical models, economic models, business process models, mathematical models... </td>
                <td className="border px-4 py-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Conceptual_model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                </td>
                <td className="border px-4 py-2 text-justify">The attempt to describe a real system theoretically is a conceptual model. This representation can either
                  develop into a physical model, where the geometry between the model and the system is similar, or remain theoretical. In the latter case
                  the model might represent phenomena and physical processes (scientific models), probabilities (statistical models), economic processes (economic models)
                  anticipation of what a process should look like (business process models).   </td>
              </tr>
            </tbody>

            <tbody>
              <tr>
                <td className="border px-4 py-2">Mathematical Model</td>
                <td className="border px-4 py-2 text-justify">A mathematical model is an abstract description of a concrete system using mathematical concepts
                  and language. Mathematical models are used in many fields, including applied mathematics, natural sciences, social sciences, engineering, 
                  operations research studies. Mathematical modeling problems are often classified into black box or white box models, according
                  to how much a priori information on the system is available. </td>
                <td className="border px-4 py-2">
                  <a
                    href="https://en.wikipedia.org/wiki/Mathematical_model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Wikipedia
                  </a>
                </td>
                <td className="border px-4 py-2 text-justify">Mathematical models are a type of conceptual models which uses math to describe the real system. They include
                  equations, assumptions and constraints. They may describe how a system evolves in time, the rate of change of a property, probabilities.
                  In order to build an accurate model (a representation close to the real system), we want to use as much information from the real system as possible (white-box
                  models). Lack of data leads to building black-box models.</td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}

