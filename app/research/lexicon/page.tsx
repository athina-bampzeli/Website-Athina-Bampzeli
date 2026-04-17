// app/research/lexicon/page.tsx

export default function Lexicon() {
  return (
    <main className="px-6 py-30 bg-gray-50">
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
                <td className="border px-4 py-2">Chemical engineering is an engineering field which
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
                <td className="border px-4 py-2">Chemical engineering uses knowledge from physics,
                  chemistry, and biology to understand how processes work at the microscopic (molecular)
                  level and apply this understanding to large-scale industrial production. It studies how
                  small-scale phenomena change when they are scaled up, helping design and operate pilot
                  plants and factories that convert raw materials into products such as medicines,
                  food, plastics, fuels... </td>
              </tr>
            </tbody>

          </table>
        </div>

      </div>
    </main>
  );
}

