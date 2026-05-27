// app/qa/publication/PublicationQAClient.tsx

"use client";

import { useState } from "react";

const publications = [
  {
    citation: (
      <>
        Bampzeli, A., Charakleias, E., & Georgiadis, M. C. (2026). Modeling, simulation and optimization of integrated milk pasteurization and membrane filtration processes.{" "}
        <i>Food and Bioproducts Processing</i>, <i>157</i>, 583-599.{" "}
        <a
          href="https://doi.org/10.1016/j.fbp.2026.04.006"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          https://doi.org/10.1016/j.fbp.2026.04.006
        </a>
      </>
    ),


    qa: [
      {
        question: "Why did you choose to work in the dairy industry? Is this study useful for industry? Can it be applied to other units or processes?",
        answer: (
          <>
            <p>
              Despite its long history and economic importance, the dairy industry still shows limited adoption of modern computer-aided modeling, 
              simulation, and optimization tools. Efficient monitoring and control of 
              milk-processing operations are critical for <strong>minimizing energy and water 
              consumption</strong> while extending production cycles without compromising 
              hygienic standards. In this context, the application of <strong>specialized process 
              simulation software</strong> has become increasingly significant.
            </p>
            <p>
              This study highlights the key factors affecting energy use, water consumption, product quality, and cost in the pasteurization and 
              membrane filtration stages of milk powder production. Advanced simulation and sensitivity analyses provide a clear understanding of 
              how operating conditions and process variables affect overall performance, helping reduce uncertainty, support informed decision-making 
              in plant operations, and focus control and experimentation efforts where there is the greatest impact. Coordinated optimization of the 
              two process stages ensures quality and hygiene standards are maintained while improving efficiency. The method supports more <strong>sustainable, 
              cost-effective and robust</strong> milk powder manufacturing.
            </p>
            <p>
              This integrated approach offers a framework for extending optimization to <strong>additional stages</strong> of the dairy production line. Given that 
              the milk flow rate is an operational variable influencing multiple aspects of both pasteurization and membrane filtration, a broader 
              evaluation could assess its impact on the entire milk powder production chain.
            </p>
          </>
        ),
      },
      {
        question: "What was your main goal in this work? What is your main conclusion?",
        answer: (
          <>
            <p>
              This work presents a model-based, computer-aided framework for the modeling, simulation, and optimization of integrated 
              pasteurization and membrane filtration processes of a dairy plant producing milk powder. One of the key objectives is to 
              evaluate how <strong>key physicochemical and biological phenomena</strong>, such as protein denaturation, fouling, enzyme inactivation, 
              and microbial growth, affect process operating conditions, product-quality constraints, cleaning requirements, and utility consumption.
            </p>
            <p>
              The findings emphasize the importance of <strong>integrated</strong> process design and optimization strategies, that leverage synergistic 
              interactions between process units.
            </p>
          </>
        ),
      },
      {
        question: "What types of models did you use? Were the equations ordinary (ODEs) or partial differential (PDEs)? Which solver did you use for optimization?",
        answer: (
          <>
            <p>
              The processes are described by a system of <strong>nonlinear differential-algebraic equations</strong> (DAEs) comprising mass and energy balances, 
              kinetic rate expressions, and empirical fouling correlations. Spatially distributed equations are discretized, resulting in a large-scale 
              dynamic DAE system. Dynamic simulations are performed using the DAEBDF integrator implemented in gPROMS™, with BDNLSOL for nonlinear 
              algebraic initialization and MA48 for sparse linear algebra. Optimization problems are formulated as <strong>large-scale nonlinear programs</strong> (NLPs) 
              constrained by the DAE model and solved using a control vector parameterization (CVP) approach (CVP_SS solver). Uncertainty propagation is 
              carried out using Monte Carlo simulations with Sobol sampling.
            </p>
          </>
        ),
      },
      {
        question: "Did you modify the default gPROMS equations and implement your own models?",
        answer: (
          <>
            <p>
              As gPROMS is proprietary software, access to the default source equations was restricted, so I could not directly modify them. 
              Developing custom models was considered <strong>beyond the scope of the study</strong> because it would have significantly increased the modeling 
              complexity. Therefore, the pre-trained gPROMS models for the heat exchangers and UF membrane were used. To enable 
              integration between these units, the Siemens customer support team provided a patched library specifically developed for this work.
            </p>
          </>
        ),
      },
      {
        question: "Did you encounter errors during simulation or optimization? Why did they occur? How did you manage them?",
        answer: (
          <>
            <p>
              I encountered convergence and simulation errors mainly due to the complexity of the integrated model. The system combined <strong>reaction kinetics</strong> for 
              protein denaturation, enzyme inactivation, fouling, and microbial growth with <strong>mass and energy balances</strong> for 
              both the heat exchangers and the UF membrane. In addition, the <strong>recycle stream</strong> and the <strong>controllers</strong> increased the numerical 
              difficulty of the problem. During optimization, <strong>multiple constraints</strong> related to safety, product quality, and economic 
              performance also had to be satisfied simultaneously.
            </p>
            <p>
              To manage these issues, I first analysed the pasteurization and membrane filtration models separately before integrating 
              them into a single framework. I also reduced model complexity by excluding controllers from the integrated model and keeping 
              utility flow rates constant, based on the optimization results of the individual models. For parameters that I could define, 
              I tested different values within ranges supported by literature and industrial practice to improve convergence. Since gPROMS 
              is proprietary software and some equations were inaccessible, issues related to the software implementation itself required 
              support from the Siemens customer support team. After updating to the latest software version, they provided a patched library 
              that enabled integration between the heat exchanger and membrane models.
            </p>
          </>
        ),
      },
      {
        question: "Were the kinetic parameters taken from literature, estimated, or fitted in some other way?",
        answer: (
          <>
            <p>
              Reaction kinetics are adopted from <strong>literature</strong> sources without experimental validation under the exact operating conditions simulated.
            </p>
          </>
        ),
      },
      {
        question: "Which temperature did you actually measure and use in your calculations: bulk fluid temperature, wall temperature or another reference temperature?",
        answer: (
          <>
            <p>
              For the <strong>energy balances</strong> in the pasteurization section, the temperatures used correspond to the bulk temperatures of the milk and utility streams.
            </p>
            <p>
              For the <strong>kinetic models</strong>, the reference temperatures depended on the specific mechanism involved. Together with the reference kinetic constants they were 
              obtained from literature sources. The &alpha;-lactalbumin and immunoglobulin denaturation, &beta;-lactoglobulin unfolding and aggregation, and phosphatase 
              inactivation rate constants were all calculated using the bulk milk temperature. In contrast, the adhesion rate constant associated with β-lactoglobulin fouling 
              was defined at the wall temperature, since fouling occurs at the surface.
            </p>
            <p>
              The <strong>pasteurization unit</strong> was also evaluated using the bulk milk temperature. The reference temperature and the temperature increase 
              required to achieve a tenfold reduction in the D-value (z-value) for <i>Coxiella burnetii</i> were taken from literature. 
            </p>
            <p>
              Similarly, for the <strong><i>S. thermophilus</i> kinetics</strong>, the specific growth rate in the liquid phase and the destruction constant were evaluated 
              at the bulk milk temperature, whereas the wall growth rate and adsorption constant were evaluated at the wall temperature.
            </p>
          </>
        ),
      },
      {
        question: "Did you calculate the Biot number? Did you assume a uniform temperature distribution in the milk?",
        answer: (
          <>
            <p>
              I did not explicitly calculate the Biot number because the heat exchanger model in gPROMS assumes a one-dimensional plug 
              flow representation with no radial temperature gradients or radial dispersion. Under these assumptions, the bulk fluid temperature 
              is considered representative of the fluid phase. Therefore, the model effectively assumes negligible internal temperature gradients 
              within the flowing milk stream. Since the study focused on process-level simulation rather than detailed CFD or local heat transfer 
              phenomena, calculating the Biot number was <strong>beyond the intended modeling scope</strong>.
            </p>
          </>
        ),
      },
      {
        question: "Did you consider using ulta-high temperature (UHT) pasteurization instead of high-temperature short-time (HTST)?",
        answer: (
          <>
            <p>
              I did not consider UHT pasteurization because the objective of the study was to <strong>preserve the whey proteins</strong> while 
              ensuring microbial safety. UHT treatment generally causes substantially higher protein denaturation than HTST pasteurization. 
              Maintaining relatively mild thermal conditions below approximately 75 °C helps preserve proteins such as lactoferrin, 
              immunoglobulins, and lactoperoxidase, while also supporting the <strong>bacteriostatic activity</strong> of whey. In addition, UHT processing 
              would require <strong>higher thermal energy</strong> input, making it less aligned with the financial process objectives of this study.
            </p>

          </>
        ),
      },
      {
        question: "What is diafiltration water? Why is it used? What properties did you assume for it?",
        answer: (
          <>
            <p>
              Diafiltration water is introduced together with the feed to <strong>dilute the milk</strong> during concentration, because membrane operation 
              at high solids content is limited by increased viscosity and reduced flux. As permeable components are progressively 
              removed, the retentate becomes increasingly <strong>enriched in protein</strong> relative to other soluble solids, resulting in selective 
              protein concentration rather than simple bulk solids accumulation. The diafiltration water was modeled using the 
              same thermophysical properties as the hot and chilled water streams, since all were defined using the “water” component 
              available in the gPROMS material database.

            </p>

          </>
        ),
      },
      {
        question: "What type of membrane did you use? What were its characteristics, material, key properties?",
        answer: (
          <>
            <p>
              The membrane filtration section consisted of three stages, each incorporating a single <strong>ultrafiltration</strong> (UF) membrane unit. The 
              model is based on the following assumptions:
            </p>
            <ul>
              <li>
                a) the pressure drop across the membrane is uniform in all modules,
              </li>
              <li>
                b) transmembrane pressure is the driving force for mass transfer in the membrane separation process,
              </li>
              <li>
                c)  all permeate streams operate at the same pressure because the product is collected in the retentate stream, 
              </li>
              <li>
                d) the transmembrane pressure remains positive along the full membrane length.
              </li>
            </ul>
            <p>
              Ultrafiltration is widely used in the production of milk protein concentrates (MPC) because it enables selective <strong>retention of proteins</strong> while 
              allowing smaller solutes to permeate. A specific membrane material was not explicitly 
              defined in this work. Instead, a generic UF membrane model provided within the gPROMS library was employed, and the 
              relevant design parameters (retention factors, static and dynamic resistance coefficients) were specified based on <strong>literature</strong> data.
            </p>

          </>
        ),
      },
      
      {
        question: "Was fouling modeled in the membrane filtration process?",
        answer: (
          <>
            <p>
              Yes. The static resistance captures the intrinsic resistance of the membrane material 
              and its dependence on process conditions, while the <strong>dynamic resistance</strong> accounts for time-dependent phenomena such as fouling 
              or cake layer formation. Static resistance is particularly important for capturing rapid changes in flux behavior that 
              cannot be modeled by the dynamic term alone. The dynamic membrane resistance is calculated by Eq. 27. 
            </p>

          </>
        ),
      },
      
      {
        question: "Was the equipment size and characteristics based on literature, industrial practice, or was it a novel design?",
        answer: (
          <>
            <p>
              Equipment sizing and characteristics are based on available <strong>literature</strong> data and have not been validated against industrial data. 
              Therefore, they may not correspond to specific real-life industrial systems. However, the following industrial practices were considered.
            </p>
            <p>
              Dairy process optimization is generally achieved through careful design, balancing capital investment against operational performance. 
              A common trade-off exists between equipment size and energy efficiency. For instance, the <strong>regenerative unit</strong> is typically made relatively 
              large to reduce overall energy consumption. By increasing the size of the regeneration section the demand for hot water is reduced and 
              it can even remove the need for cooling utility. However, regeneration levels should remain below 90% to maintain proper controllability of the system.
            </p>
            <p>
              The <strong>heater</strong> is usually designed with sufficient surface area to allow a temperature difference of around 5 °C, which helps limit fouling. 
              It is also important to note that the <strong>holding section</strong> cannot be eliminated. Without it, fouling would increase on the hot side of the regenerative 
              unit, leading to channel blockages. This would require more frequent cleaning cycles and cause earlier interruptions in plant operation.
            </p>
          </>
        ),
      },
      
      {
        question: "Did you test different equipment sequences, for example placing the membrane before pasteurization?",
        answer: (
          <>
            <p>
              I did not investigate alternative equipment sequences such as placing the membrane before pasteurization because this configuration 
              raises hygiene and microbial safety concerns, as raw milk should undergo thermal treatment before downstream processing. The focus 
              of this study was primarily on <strong>operational decisions, equipment sizing and parameter uncertainty</strong> within the selected process configuration. 
              However, the same modeling framework could be <strong>extended</strong> in future work to evaluate alternative process layouts and design-level decisions.
            </p>
          </>
        ),
      },
      {
        question: "What were the hygiene and quality criteria in your study? How did you evaluate them and include them in the model?",
        answer: (
          <>
            <p>
             The study considered both hygiene and product quality criteria within the integrated pasteurization and membrane filtration process. 
             In the pasteurization section, the main quality-related phenomena were <strong>whey protein denaturation and fouling</strong>, while the hygiene-related 
             criteria focused on <strong>phosphatase inactivation and microbial growth</strong>. In the membrane filtration section, the primary quality objective was 
             achieving the target <strong>milk concentration</strong> while avoiding excessive fouling.
            </p>
            <p>
              Pasteurization effectiveness was evaluated through alkaline phosphatase inactivation, with successful pasteurization defined as reducing 
              phosphatase activity below 3.5 x 10⁻⁴ units/mL. In addition, the <strong>pasteurization unit</strong> (PU) was used as a standardized measure of thermal 
              lethality relative to <i>Coxiella burnetii</i>, which is commonly used as a reference microorganism because of its high thermal resistance.
            </p>
            <p>
              Protein denaturation was included because excessive heating negatively affects nutritional quality and contributes to fouling. The 
              denaturation of &alpha;-lactalbumin and immunoglobulin, together with phosphatase inactivation, was represented using irreversible n-th order <strong>reaction kinetics</strong>. Since &beta;-lactoglobulin 
              is the main contributor to fouling, its behaviour was modeled in greater detail through unfolding, 
              aggregation and wall adsorption reactions. The adsorption step represented deposit formation on the heat exchanger surface. 
            </p>
            <p>
              Microbial hygiene was further evaluated using <i>Streptococcus thermophilus</i> as a model thermotolerant microorganism. The model included <strong>microbial 
              growth</strong> both in the liquid bulk and on the equipment wall using Ratkowsky-type growth kinetics, together with thermal <strong>destruction</strong> kinetics. <strong>Adsorption and desorption</strong> between 
              the wall and liquid phases were also considered to represent biofilm formation and possible recontamination 
              of the bulk fluid.
            </p>
            <p>
              For the membrane filtration section, the <strong>retentate solids fraction</strong> was fixed at 20%, which is a common industrial operating target. Higher 
              concentrations would significantly increase membrane fouling and pore blockage, while further concentration is typically achieved later 
              through spray drying. Membrane separation performance was represented using retention factors for each component that were assumed constant 
              throughout the simulation.
            </p>
          </>
        ),
      },
      {
        question: "If experimental data were available, how would you validate the model?",
        answer: (
          <>
            <p>
              To this end, the systematic model-based estimation of macroscopic model parameters by minimizing deviations between model predictions and 
              experimental or industrial measurements is a promising strategy.
            </p>
          </>
        ),
      },
      
    ],
  },
  
];

export default function PublicationQAClient() {
  const [open, setOpen] = useState<number[]>([]);

  const isAllOpen =
    publications.every((p, i) => open.includes(i)) && publications.length > 0;

  const toggleAll = () => {
    if (isAllOpen) {
      setOpen([]);
    } else {
      setOpen(publications.map((_, i) => i));
    }
  };

  const togglePublication = (index: number) => {
    setOpen((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="px-6 py-30 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Publication Q&A
      </h2>
      
      <p className="text-gray-700 mb-8">
          Here you can find questions that I was asked about my publication during presentations and interviews, along with my answers.
        </p>

      <button
        onClick={toggleAll}
        className="mb-8 px-4 py-2 bg-black text-white rounded"
      >
        {isAllOpen ? "Close all" : "Open all"}
      </button>

      <div className="space-y-10">
        {publications.map((pub, pubIndex) => (
          <div key={pubIndex} className="border rounded-xl p-5">

            {/* Publication header */}
            <p className="text-gray-700 text-center leading-relaxed">
              {pub.citation}
            </p>

            {/* Toggle publication Q&A */}
            <button
              onClick={() => togglePublication(pubIndex)}
              className="text-sm text-gray-700 mb-4 underline"
            >
              {open.includes(pubIndex)
                ? "Hide Q&A"
                : "Show Q&A"}
            </button>

            {/* Questions and answers */}
            {open.includes(pubIndex) && (
              <div className="space-y-4 mt-3">
                {pub.qa.map((item, qIndex) => (
                  <div key={qIndex} className="border-t pt-3">
                    <p className="font-medium">
                      {qIndex + 1}. {item.question}
                    </p>
                    <div className="text-gray-700 space-y-4 text-justify leading-relaxed mt-5">{item.answer}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}