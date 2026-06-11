// app/qa/educational/EducationalQAClient.tsx

"use client";

import { useState } from "react";


const qanda1 = [
  {
    question: "How to choose what to study?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          It depends on your personal goals, your interests, your character, your background, and the things
          you are naturally good at. A general piece of advice I would give is, if you have the opportunity,
          choose something that you <strong>genuinely like</strong> rather than something others expect you to do. At the same
          time, it is important to consider <strong>practical aspects</strong> such as financial prospects, working hours and the
          lifestyle associated with a particular profession.
        </p>
        <p>
          Use the internet to learn more about different fields of study and the career opportunities available after graduation. 
          Talk to people from different backgrounds and listen to their perspectives, even if they differ from your own. 
          This can help you develop a broader and more balanced understanding.
        </p>
        <p>
          Keep in mind that we live in an era where many people eventually work in fields different from the ones they originally studied. 
          Even if you later decide to change direction, the skills, experiences, and way of thinking you gain from your studies will still be valuable. 
          There is no need to stress excessively about making the “perfect” choice. Instead, try to make the most <strong>informed decision</strong> possible by using
          the many sources of information available to you.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "What are 4 essential skills to develop during school? Why? How?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <ul className="space-y-4">
          <li>
            a) <strong>Teamwork and collaboration</strong> are very important because they are skills you will need throughout your life. We are all part of small and large communities, and in order to feel good, work effectively, achieve goals, and live harmoniously, we need to learn how to cooperate and interact with others.
          </li>
          <li>
            b) Another important skill is the motivation to keep growing and <strong>learning</strong> throughout life, irrespective of the field each person chooses, from theoretical study to practical work. Personal growth and having long-term goals are important both for individual development and for society as a whole.
          </li>
          <li>
            c) <strong>Research and independence</strong> are also essential skills in an era where so much information is freely available. This does not only mean academic research. It means being able to find the information you need, examine it critically, and make decisions based on it.
          </li>
          <li>
            d) <strong>Technological skills</strong>, at least at a basic level, are also necessary. This includes understanding how to use digital tools effectively and being aware of potential dangers. From using e-class platforms to find homework, to learning how to use social media and YouTube in an efficient and safe way, technology can support personal growth when used wisely.
          </li>
        </ul>        
        <p>
          Learning these skills <strong>through experience</strong> is often more effective than learning them only in theory. I would suggest taking part
          in team activities and projects outside the classroom so that you can practice collaboration, take initiative, and work toward
          goals beyond school assignments. Working on projects related to technology, with guidance from teachers, can also help you learn
          how to use these tools effectively.
        </p>
      </div>
    ),
  },
  {
    question: "How to focus on studying? How should I study?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          This can be different from person to person. What helps me is <strong>minimizing distractions</strong> while studying, for example by keeping my
          phone in another room, muting notifications, and having a quiet personal space. It also helps to start with shorter periods of
          focused study and gradually increase them over time. Setting a <strong>clear goal</strong> with a specific time limit can make studying feel more
          manageable and help you stay motivated.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "Do I need to learn foreign languages? Which ones? Why? Should I get language certificates?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          English is very important for communication when traveling, for using services, for finding information online,
          and for educational and professional opportunities after school, especially in a globalized world. In general,
          learning languages helps you grow as a person and better understand other cultures. If someone has the opportunity
          and interest, I would definitely suggest getting some exposure to at least one additional language.
        </p>
        <p>
          Language certificates can motivate some people to study in a more focused and systematic way, and they may also be required for certain opportunities
          such as Erasmus programs, competitions, applications. At the same time, a certificate is not always a perfect reflection of
          someone's actual language ability.
        </p>
        <p>
          Read about the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_distinguish-europeanparliament-energy-share-7028716188247502849-bpka?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            first time
          </a>{" "}
          I spoke English in an international environment.
        </p>
      </div>
    ),
  },
  {
    question: "Should I practice and develop programming skills?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          If you enjoy it, programming is definitely a useful skill to develop. Almost every application and digital tool we use involves coding in some way, so learning it can help you understand how technology works. Programming also develops the way you think because it combines logic, problem solving, and structured thinking. If you do not like it, that is also fine. Different careers require different skills. There are always courses, books, and online resources available if you decide to delve into programming later.
        </p>
        <p>
          Explore one of my{" "}
          <a
            href="https://github.com/athina-bampzeli/Titer-Prediction/blob/main/Code_Titer_Prediction_Athina_Bampzeli.ipynb"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Python
          </a>{" "}
          codes.
        </p>
      </div>
    ),
  },
  {
    question: "Should I participate in competitions?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Participating in student competitions broadened the way I understand and approach challenges. Most of the competitions I joined 
          during school were focused on solving STEM-related problems in{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%CE%B1%CF%83%CE%B7%CE%BC%CE%AD%CE%BD%CE%B9%CE%BF-%CE%BC%CE%B5%CF%84%CE%AC%CE%BB%CE%BB%CE%B9%CE%BF-%CF%83%CF%84%CE%B7%CE%BD-34%CE%B7-%CE%B5%CE%B8%CE%BD%CE%B9%CE%BA%CE%AE-%CE%BC%CE%B1%CE%B8%CE%B7%CE%BC/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            mathematics
          </a>,{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%CE%B2%CF%81%CE%B1%CE%B2%CE%B5%CE%AF%CE%B1-%CE%BA%CF%8D%CF%80%CE%B5%CE%BB%CE%BB%CE%B1-%CE%BA%CE%B1%CE%B9-%CE%B1%CF%81%CE%B9%CF%83%CF%84%CE%B5%CE%AF%CE%B1-%CF%83%CE%B5-95-%CE%BC%CE%B1%CE%B8%CE%B7/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            physics
          </a>, chemistry and biology.
        </p>
        <p>
          Preparing for these competitions taught me much more than the subjects themselves. I developed <strong>discipline</strong> through studying 
          consistently toward a goal beyond regular school assignments. I learned <strong>persistance</strong> by gradually improving my skills and 
          knowledge over time. I also learned how to deal with mistakes and failures, how to manage success with humility, and how 
          to continue working consistently regardless of the outcome.
        </p>
        <p>
          During competitions, I had to <strong>manage time</strong> effectively, stay concentrated under pressure, and combine different pieces of 
          knowledge to <strong>solve unfamiliar problems</strong>. Beyond individual competitions, I also participated in an{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%ce%b2%cf%81%ce%b1%ce%b2%ce%b5%ce%af%ce%b1-%cf%83%cf%84%ce%bf%cf%85%cf%82-%ce%b4%ce%b9%ce%b1%ce%b3%cf%89%ce%bd%ce%b9%cf%83%ce%bc%ce%bf%cf%8d%cf%82-%cf%80%ce%b5%ce%b9%cf%81%ce%b1%ce%bc%ce%ac%cf%84/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            experimental science
          </a>{" "}competition as part of a team. This experience challenged me in different ways: communicating ideas clearly, listening to 
          different perspectives, deciding collectively on the best approach, and collaborating efficiently to solve a problem.{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%cf%83%cf%85%ce%bd%ce%ad%cf%87%ce%b5%ce%b9%ce%b1-%ce%b5%cf%80%ce%b9%cf%84%cf%85%cf%87%ce%b9%cf%8e%ce%bd-%ce%b3%ce%b9%ce%b1-%cf%84%ce%b7%ce%bd-%ce%bf%ce%bc%ce%ac%ce%b4%ce%b1-%cf%83%ce%ba%ce%ac%ce%ba/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Chess tournaments
          </a>{" "}also played an important role in shaping my way of thinking. They strengthened my concentration, <strong>strategic thinking</strong>, and 
          ability to learn from past mistakes and continue improving, both individually and as part of a team.
        </p>
        <p>
          At the same time, I pursued competitions outside the STEM field, including essay,{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%ce%bc%ce%b5%ce%b3%ce%ac%ce%bb%ce%b7-%ce%b5%cf%80%ce%b9%cf%84%cf%85%cf%87%ce%af%ce%b1-%cf%83%cf%84%ce%bf%cf%85%cf%82-%ce%b1%ce%b3%cf%8e%ce%bd%ce%b5%cf%82-%ce%b5%cf%80%ce%b9%cf%87%ce%b5%ce%b9%cf%81/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            debate
          </a>{" "}and {" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%ce%b4%ce%b9%ce%ac%ce%ba%cf%81%ce%b9%cf%83%ce%b7-%cf%83%cf%84%ce%bf%cf%85%cf%82-%ce%b1%ce%b3%cf%8e%ce%bd%ce%b5%cf%82-%cf%81%ce%b7%cf%84%ce%bf%cf%81%ce%b9%ce%ba%ce%ae%cf%82/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            public speaking
          </a>{" "} competitions, 
          because I always valued a more holistic education during my school years. These experiences helped me develop <strong>creative thinking</strong>, adaptability, 
          and the ability to <strong>communicate</strong> and support my arguments effectively.

        </p>
        <p>
          Today, many new forms of competitions exist, reflecting the advancement of technology and the needs of the modern era, such as robotics, 
          artificial intelligence, programming, and entrepreneurship. Although the methods and topics may differ, I believe the core skills developed 
          through participation remain similar: independent preparation, discipline, persistence, teamwork, collaboration, and learning how to handle 
          both failure and success. For this reason, I believe participating in such activities is worthwhile, even when they are outside the standard curriculum. 
        </p>
        <p>
          Read about the full-circle experience of volunteering to{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_mathematics-chemicalengineering-engineering-activity-7459632977690558464-Cb8W?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            organize a competition
          </a>{" "}
          as a graduate.
        </p>
      </div>
    ),
  },
  {
    question: "Should I participate in interdisciplinary and extracurricular projects?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Working on projects outside your specialization, or on projects that combine different fields, is an excellent 
          first step toward understanding how real-world work often happens. People with <strong>different backgrounds and skills</strong> collaborate 
          toward a common goal. Such experiences teach you how to approach problems creatively and from multiple perspectives. How to
          make decisions while considering different constraints and thinking more holistically. On a personal level, 
          they can also help you become more open-minded and realize that many important issues are rarely simply black or white.
        </p>
        <p>
          Regarding my own experiences, during the{" "}
          <a
            href="https://youtu.be/1Zlnx-vJlQM?si=vSW8zo4JFjIJjW9o"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Ecomobility
          </a>{" "}
          project our team developed creative ways to raise awareness 
          about environmental issues. Through {" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%ce%bc%ce%b5%ce%b3%ce%ac%ce%bb%ce%b7-%ce%b5%cf%80%ce%b9%cf%84%cf%85%cf%87%ce%af%ce%b1-%cf%84%ce%bf%cf%85-%ce%b5%ce%bb%ce%bb%ce%b7%ce%bd%ce%b9%ce%ba%ce%bf%cf%8d-%ce%ba%ce%bf%ce%bb%ce%bb%ce%b5%ce%b3-2/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            EUropa S.T.E.EN.S.
          </a>,{" "}
          we participated in discussions as representatives defending national interests while also considering 
          broader global well-being. We also worked on raising awareness about the importance of participating in democratic processes 
          such as elections. During{" "}
          <a
            href="https://hellenic-college.gr/gumnasio-lukeio/%ce%b4%ce%b9%ce%ac%ce%ba%cf%81%ce%b9%cf%83%ce%b7-%cf%84%ce%bf%cf%85-%ce%b5%ce%bb%ce%bb%ce%b7%ce%bd%ce%b9%ce%ba%ce%bf%cf%8d-%ce%ba%ce%bf%ce%bb%ce%bb%ce%b5%ce%b3%ce%af%ce%bf%cf%85-%cf%83%cf%84%ce%bf-2/"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Euroscola
          </a>,{" "}
          we discussed possible approaches to real-world global challenges together with students from different backgrounds and countries.

        </p>
        <p>
          I believe that being an engineer with political, social, and environmental awareness is important, because the problems 
          engineers solve and the decisions they make often affect a wide range of people and communities.
        </p>
      </div>
    ),
  },
  {
    question: "Should I travel abroad?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Traveling broadens your perspective because you get to know other cultures and observe how people in different places live
          and think. You also understand geography and history in a more practical way. Traveling can have educational benefits,
          contribute to personal growth and self-awareness. 
        </p>
        <p>
          I pursue to participate in{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_artificialintelligence-multicultural-coorganizer-activity-7093924122379919360-PwaE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            international courses
          </a>{" "}
          as I value traveling abroad.
        </p>
      </div>
    ),
  },
  {
    question: "How to stand out? Does the grade matter?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          A first question might be: does it really matter to stand out, and what does that actually mean?
          In school, I think the most important thing is to <strong>develop yourself</strong> and better understand who you are
          and what you enjoy. Standing out is not always only about what you do. It can also depend on the environment,
          the situation, and timing, things you cannot always control. High grades can often help <strong>create opportunities</strong>,
          especially in competitive environments where only a limited number of people can be selected. At the same time,
          many students and adults succeed without necessarily having what society considers high grades.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "Should students use Artificial Intelligence?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Artificial intelligence is becoming part of everyday life, and knowing how to use it can definitely be an advantage.
          With the right guidance from school and family, students can learn to use AI effectively for studying,
          finding information, and improving productivity. At the same time, it is important to use AI in a way
          that does not weaken critical thinking, personal initiative, human creativity, or real human connection.
        </p>
        
      </div>
    ),
  },

];

const qanda2 = [
  {
    question: "How many years is university in Greece and abroad? What degree/title do you get? ",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Undergraduate studies differ from country to country, both in duration and structure.
          In Greece, university studies typically last 4 to 6 years, depending on the department.
          Engineering schools usually last 5 years and are considered an integrated master's degree,
          meaning that students graduate with both a bachelor and a master's-level qualification.
        </p>
        <p>
          Abroad, undergraduate studies are often 3 years, followed by an optional 1 or 2-year
          master's degree for those who want to continue studying. Many students also choose to
          specialize in different fields during their bachelor's and master's studies.
        </p>
        <p>
          I encourage students to search for official government and university sources for each specific
          case, as systems vary and it is important to understand how each one works. Read a summary of my
          5 years as a{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_chemicalengineering-tutor-phd-ugcPost-7417651260423557121-q6fx?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Chemical Engineering
          </a>{" "}
          student at Aristotle University of Thessaloniki, Greece.
         
        </p>
      </div>
    ),
  },
  {
    question: "Would you change something if you could go back to your first year of university?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          My first year at university was during the COVID period, so it was quite different from the typical experience. 
          A general piece of advice I would give is to stay open to new experiences, to learning, and to making mistakes.
          You do not have to get everything right from the beginning.    
        </p>
      </div>
    ),
  },
  {
    question: "What are the 5 most important skills to develop during university? Why? How?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        This is a difficult question, as the answer depends heavily on the path someone chooses after university and 
        there are many possible directions. I will answer based on the general skills that I believe are valuable 
        throughout life, rather than for a specific profession.
        </p> 
        <ul className="space-y-4">
          <li>
            a) University is the home of ideas, discussions and self-growth. Undergraduate studies usually take place between 
            the ages of 18 and 30, when you are more mature than during school years but often have fewer responsibilities than 
            later in life. Therefore, it is a good opportunity to <strong>learn about yourself</strong>, evaluate your character in a more mature 
            way, understand how you behave, identify your goals, and discover your passions. These are important things to know 
            so that you can shape your life in a way that fits you by taking consistent steps toward your objectives. And what 
            better way to do that than by meeting new people, exploring opportunities, and taking initiatives?
          </li>
          <li>
            b) Knowing how to find information and make <strong>independent decisions</strong> is very important as an adult. Nowadays, 
            we are overwhelmed with information, but we do not always know how to filter it or determine what is useful for 
            making effective decisions aligned with our goals. University is a good place to develop this skill, as you are 
            responsible for finding ways to pass your courses, taking advantage of the opportunities available to students, 
            and building your own path toward a career that interests you.
          </li>
            <li>
            c) Being <strong>flexible and adaptable</strong> to change, new environments, and new people is important in today's world, which never 
            stops evolving. Transitioning from school to university and working your way toward graduation is already a good first 
            step in learning how to adapt, in a more protected environment than the job market. By participating in extracurricular 
            courses, projects, and teams, you develop these skills even further, as you need to balance the responsibilities of 
            being a student with those of your additional activities. In practice, this means balancing relationships with supervisors, 
            managing the expectations of collaborators, and handling your own personal expectations. It also means not being afraid to 
            change your way of working or approaching problems if your previous approach does not fit a new situation. It means finding 
            the necessary resources, managing your time, and working under pressure. At the same time, it means keeping your core values, 
            redefining yourself when needed, while remaining true to who you are.
          </li>
          <li>
            d) Undergraduate studies is also a time to learn how to <strong>build a network</strong> of people, which includes developing communication skills and 
            emotional intelligence. We are part of a society and continuously depend on other people, just as they depend on us. 
            By studying a specific field, even as an undergraduate, you are already becoming specialized. Your classmates, whether 
            younger or older, your professors, and students from other departments may become future collaborators. They might 
            inform you about an open position, or you might help them make a better decision based on your own experiences. 
            Learning how to build and maintain professional relationships during university is a valuable first step in a 
            relatively protected environment. Later, in the workplace, factors such as competition and financial interests can 
            make these dynamics more challenging to navigate.
          </li>
          <li>
            e) <strong>Collaboration</strong> is another important skill, and I separate it from networking, even though both are related to 
            interacting with other people. Knowing how to collaborate goes deeper than knowing how to initiate and maintain 
            a connection. It involves sharing your opinion, listening to the opinions of others, being willing to argue 
            constructively for the benefit of the team, accepting feedback and criticism, and providing constructive feedback 
            yourself. Sometimes it means taking the lead, while other times it means taking a step back. It means investing time 
            in achieving a collective result, prioritizing tasks, and setting boundaries. It also means celebrating small successes 
            with humility and accepting significant failures without assigning blame. As the saying goes, alone you can go fast, 
            but together you can go far. 
          </li>
        </ul>       
        <p>
          You can read more about a successful teamwork effort regarding the launch of{" "}
          <a
            href="https://www.linkedin.com/posts/aristotle-university-of-thessaloniki-auth-_auth-thessaloniki-space-ugcPost-7444397972274143232-ONrv?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            PeakSat
          </a>.
        </p>
      </div>
    ),
  },
  {
    question: "How to transition from school to university?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Transitioning from school to university can be challenging. In Greece, the school system often focuses on learning
          a relatively smaller amount of material in depth over a long period of time, especially in preparation for Panhellenic exams. 
          At university you need to process large amounts of information in a much shorter time. These are different types of learning,
          and each develops different skills. Being <strong>flexible and adaptable</strong> becomes very important. Some practical advice:
        </p>
        <ul className="space-y-4">
          <li>
            a) Start studying early, not only before exams.
          </li>
          <li>
            b) Attend classes regularly.
          </li>
          <li>
            c) Take notes.
          </li>
          <li>
            d) Communicate with classmates and help each other.
          </li>
          <li>
            e) Ask professors for advice when needed.
          </li>
          <li>
            f) Join class group chats or student communities for support.
          </li>
        </ul> 
        <p>
          Some students also collaborate by sharing notes, studying together, or helping each other understand difficult topics. AI tools
          can also help with organization and studying in ways that were not available in the past. 
          There are many study methods suggested online, but the important thing is to find what works best for you.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "What is the advantage of a first-year student compared to a final-year student, even without much knowledge or experience?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          A final-year student may know themselves better, understand how they work, and have a clearer idea of what they want. 
          A first-year student is still discovering these things and adapting to a new environment. However, first-year students
          have more <strong>time and freedom to explore</strong>. At that stage, there is usually less pressure to specialize, make career decisions,
          or find a job. This gives students the opportunity to try different experiences, meet people, and discover what they enjoy.
        </p>
        <p>
          There are many opportunities available even for younger students, so do not fall into the trap of thinking you are not
          capable enough because you are still at the beginning. Take the first step: search, ask, apply.
        </p>
        <p>
          Read about the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_logisticsresponsible-responsible-organisation-activity-7013916017437372416-5MWI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Cultural Exchange
          </a>{" "}
          event I organized as a 2nd year undergraduate student.
         
        </p>
      </div>
    ),
  },
  {
    question: "When should I focus on studying in university? In the first years or the last years?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         If you have ambitious goals, such as maintaining good grades, pursuing research, or making the most of university opportunities, I would suggest
         trying to stay engaged with studying <strong>from the beginning</strong>, not only in the final years. Many students become more focused later in university, especially
         when they start specializing, but postponing everything can increase stress, pressure, and reduce performance. In the first years, courses are often more
         general, especially in fields such as engineering, where students study subjects like mathematics, physics, and chemistry. These foundational
         subjects may feel less exciting at first, but they often become important later on. If students postpone them for too long, they may find it harder
         to stay motivated when more specialized courses arrive.
        </p>
        <p>
          That said, the beginning of university is also a transition period, and it is normal to need time to adjust. Some helpful habits from the beginning are:
        </p>
        <ul className="space-y-4">
          <li>
            a) Attending classes regularly.
          </li>
          <li>
            b) Understanding which topics the professor emphasizes.
          </li>
          <li>
            c) Taking notes.
          </li>
          <li>
            d) Meeting classmates and building a support network.
          </li>
          <li>
            e) Collaborating and helping each other.
          </li>
        </ul> 
        <p>
          University is not a sprint. It is usually easier when you build consistency over time. For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "How much English do I need? At what level? Do I need a certificate?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          If you are reading this text in its original English version rather than a translated one, you already 
          understand one reason why English is important. It is the most commonly used language for <strong>communication</strong> between
          people from different countries. It is useful when travelling, watching movies, using your 
          computer, and accessing information online.
        </p>
        <p>
          For some professions, however, English is not only useful but necessary. Technical documents, scientific 
          papers, conferences, multinational companies, and multicultural universities often operate primarily in 
          English. When applying for <strong>master's or PhD programs</strong>, you are usually required to provide proof of 
          English proficiency. In some cases, universities ask for specific certifications such as TOEFL or 
          IELTS, and they may require the certificate to have been obtained within a certain period before 
          the application. Therefore, always check the requirements of the specific program. Beyond the certificate 
          itself, consider the actual value of knowing English. It allows your work to <strong>reach people</strong> all over the world, 
          enables others to reproduce and build upon your work, and helps you understand what researchers and 
          professionals are doing beyond the borders of your own country.
        </p>
        <p>
          Watching movies in English without subtitles, reading books in English, speaking English while travelling, 
          participating in multicultural events, writing your thoughts in English, and changing your phone or laptop 
          settings to English are all ways to improve your listening, reading, speaking, and writing skills beyond 
          the traditional classroom approach. For aspiring researchers, listening to scientific podcasts, watching 
          technical videos, reading papers, and writing your own technical content in English are particularly useful 
          for becoming familiar with the <strong>terminology</strong> of your field.    
        </p>
      </div>
    ),
  },
  {
    question: "How to reduce stress during exams?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          This depends a lot on the person and the situation, so there is no single answer that works for everyone. 
          In general, being better prepared can reduce anxiety, although stress may still be present. Talking with
          classmates, family, professors, people you trust can also help. Exam anxiety is common, and learning how
          to manage it is part of the process. When it stays at manageable levels, it can actually be beneficial
          by motivating you to study more, stay focused and prepare for possible scenarios.
        </p>
      </div>
    ),
  },
  {
    question: "How to manage time?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Time management is different for each person. What helps me personally is having both short-term 
          and long-term goals and writing down my daily tasks so I can organize my time depending on the priorities of that day. 
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "How to maintain work-life balance?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        That is a serious question and the answer varies from person to person. I cannot provide specific advice, 
        but in general I believe that maintaining good communication with family and friends, spending time outside 
        the house and office, exercising, staying connected with nature, eating healthily, sleeping well, and 
        limiting excessive screen time are good practices. Remember that these habits are not only beneficial 
        for your personal well-being. A productive mind and effective work also require balanced physical, mental and emotional health.
        </p>
      </div>
    ),
  },
  {
    question: "How can I identify my strengths and areas for improvement?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Since I started reading the work of philosophers in high school, I have shared Aristotle's view on the 
         importance of <strong>self-knowledge</strong>. Understanding who you are and recognizing your personal characteristics is 
         essential for making decisions, setting goals, and achieving them. This becomes particularly useful when 
         preparing application documents, attending interviews, or taking on responsibilities in your professional 
         life. Knowing yourself allows you to organize your efforts more effectively.
        </p>
        <p>
          One approach is to <strong>write down</strong> your current thoughts about your strengths and weaknesses and revisit them 
          periodically. As you gain new experiences, you can <strong>update</strong> your perspective based on facts and reflection. 
          You can also <strong>ask</strong> people who know you well for their opinion and compare their observations with your own 
          self-assessment. <strong>Searching online</strong> for common strengths and weaknesses, either in general or related to a 
          specific position, may also help you identify areas where you already perform well or need further 
          development. Another useful framework is the <strong>SWOT analysis</strong>, which is commonly used in projects and 
          organizations but can also be applied to personal development and career planning.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "When should I start my thesis?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          This depends on the type of project and your circumstances. For example, experimental work may require more time than theoretical work, 
          computational work may require development/debugging/validation, literature-based work may require extensive reading and synthesis. 
          Other questions to consider:
        </p>
        <ul className="space-y-4">
          <li>
            a) Do you already have <strong>background</strong> knowledge in the topic?
          </li>
          <li>
            b) Are you familiar with reading scientific literature?
          </li>
          <li>
            c) Will you work on the thesis <strong>full-time</strong> or alongside courses?
          </li>
          <li>
            d) Do you want a basic completion, or a higher-quality and more <strong>ambitious project</strong>?
          </li>
        </ul>

      <p>
        In general, <strong>starting earlier</strong> usually gives you more flexibility, reduces pressure and allows more time for unexpected problems, revisions, and deeper learning.
      </p>
       
      </div>
    ),
  },
  {
    question: "How to decide on an undergraduate or master's thesis?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          A good starting point is to think about which fields or topics genuinely <strong>interest</strong> you. You can reflect on courses you enjoyed, 
          think about projects or assignments you completed and what you liked or disliked, consider whether there is a field you would like
          to specialize in after graduation.
        </p>
        <p>
          Once you identify some areas of interest, you can search for <strong>professors</strong> in your department who
          work on those topics. It can help to read about their research areas, look at previous theses they have supervised, explore publications
          or projects from their research group. This can give you a better idea of whether their work matches your interests. You can then contact
          professors to ask about available thesis topics, or in some cases propose your own idea. It is usually better to contact them early, 
          for example at least one semester before you plan to begin, because available positions may be limited, professors may organize student projects in advance,
          in laboratory work physical space and equipment may also be limited.
        </p>
        <p>
          A thesis can also become an important first project that represents your <strong>independent work</strong>. The topic, the final document and the skills 
          you gain through this project, may help present your profile to future employers, supervisors or academic programs, depending on your plans after graduation.
          It is also useful to think from the beginning whether there are data available for development or validation, whether the project
          is feasible within the available time, whether the methods and resources are accessible. 
        </p>
        <p>
          You can read my{" "}
          <a
            href="https://github.com/athina-bampzeli/Diploma-Thesis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            diploma thesis
          </a>{" "}
          as part of my undergraduate studies in chemical engineering.
        </p>
      </div>
    ),
  },
  {
    question: "What are possible problems during a thesis? How to approach them?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         A thesis is often a student's first real experience with independent research, so difficulties are common. Some challenges may include lack of motivation, 
         burnout, stress, uncertainty about how to proceed, technical problems, unsolved research questions, time management difficulties...Being aware that
         these <strong>challenges are common</strong> can make them easier to manage. It helps to:
        </p>
        <ul className="space-y-4">
          <li>
            a) Communicate with classmates or your support network.
          </li>
          <li>
            b) Ask for feedback.
          </li>
          <li>
            c) Seek advice when needed.
          </li>
          <li>
            d) Break problems into smaller steps.
          </li>
          <li>
            e) Give yourself time and organize the work from the beginnin.
          </li>
        </ul> 
        <p>
          Your supervisor can be very important in helping with research-related difficulties. At the same time, trying to think independently about
          a problem before asking for help can also be a valuable learning experience.
        </p>
      </div>
    ),
  },
  {
    question: "What is a general methodology for working on a thesis?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Good organization can make a major difference. Some helpful habits are to keep a <strong>work diary</strong> or research log (hand-written notes, digital notes, git version control)
         and organize files so you can easily find past work. To <strong>manage literature</strong> you can take notes while reading so you do not need to reread everything in a later stage. 
         As for the collaboration with your supervisor and any other involved collaborators, keep <strong>communication organized</strong> (e.g. email threads with relevant naming) and 
         write down their advice, feedback and expectations so you can refer to later. Schedule meetings to discuss progress and receive guidance.
        </p>
        <p>
         A <strong>steady rhythm</strong> of work usually helps more than long periods of inactivity followed by intense work close to deadlines. Good documentation
         helps later when writing the final thesis, reproducing results, or explaining your work to others. Ask people with experience in your
         specific type of project for practical advice.
        </p>
      </div>
    ),
  },
  {
    question: "What is a general methodology for working on a computational project?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          For research work, computational or not, it helps to begin by <strong>understanding</strong> what research question you are trying to answer, why this problem is important, 
          what is already known in the field, what approach you will use. Some practical advice for computational projects:
        </p>
        <ul className="space-y-4">
          <li>
            a) Start familiarizing with <strong>literature</strong>. Read an initial set of relevant papers, take notes and categorize information. Write comments
            about what may be useful for your work.
          </li>
          <li>
            b) Choose <strong>tools</strong> appropriately. Try to choose software or methods based on what best fits the problem (e.g. type of modeling approach, data availability, funding), not only
            based on what you already know.
          </li>
          <li>
            c)  Build an <strong>initial simplified model</strong> first to understand the main variables, identify possible problems early, estimate required data, 
            check feasibility and computational cost. Develop the model step by step to save time. If you make too many changes at once, debugging becomes harder. When
            transitioning from the high level to the more detailed approach, check the robustness of the model. 
          </li>
          <li>
            d) <strong>Documenting</strong> the work will help later when analyzing results, writing the thesis/report or making the presentation. Write down parameter values, 
            assumptions, data sources, versions of models, naming conventions for files.
          </li>
          <li>
            e) Even if a model runs without errors, check the <strong>results critically</strong>. Do the results make physical or practical sense? Can you verify them with
            simple hand calculations? Can you compare them with literature or expert feedback? A working simulation is not automatically a correct simulation.
          </li>
          <li>
            f)  Focus on <strong>impactful parameters</strong> to avoid spending too much time on variables that do not meaningfully affect the results. For uncertain values 
            estimate ranges and test sensitivity where possible.
          </li>
        </ul> 
        <p>
          You can read my{" "}
          <a
            href="https://github.com/athina-bampzeli/Diploma-Thesis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            diploma thesis
          </a>{" "}
          as part of my undergraduate studies in chemical engineering, in which I used the gPROMS FormulatedProducts tool to model, simulate and optimize processes.
        </p>
      </div>
    ),
  },
  {
    question: "How to choose a supervising professor for a thesis?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Choosing a supervisor is often as important as choosing the topic of the thesis. Is their current/past work, 
         research area and <strong>expertise</strong> in a field you would like to specialize in? What is their level of experience
         and their <strong>network</strong> with industry, research groups or other universities? 
         What is their <strong>style of supervision and communication</strong>? More specifically, how often do they meet with students, how do they provide feedback, 
         do they encourage independence? A good supervisor is not only an expert in the topic, but also someone whose working style helps you develop and matches your needs.

        </p>
       
      </div>
    ),
  },
  {
    question: "How to contact professors? Why and when?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          The way you approach professors, and people in general as an adult, can influence your future. These interactions shape how others
          perceive you, and some of these people may later become colleagues, supervisors, mentors, or provide recommendations. This does not
          mean you should be afraid to contact people. It means that it is good to approach such situations with <strong>awareness, responsibility and respect</strong>.
        </p>
        <p>
          You can approach professors <strong>in person or by email</strong>. Speaking in person may feel more direct and immediate, while email allows you to organize your
          thoughts more carefully. It is also helpful to check whether they have specific office hours for student meetings.
          Some general advice I would give is to be respectful of their time, to be polite and professional, to be clear about why you are contacting them.
        </p>
        <p>
          Professors can often support students in ways that go beyond teaching a course. They may offer advice about studying, academic life, research,
          career paths, or opportunities in their field. Some examples of things you might ask them:
        </p>
        <ul className="space-y-4">
          <li>
            a) How to approach a difficult course or lecture?
          </li>
          <li>
            b) What are effective study strategies?
          </li>
          <li>
            c) What is their experience in academia or industry?
          </li>
          <li>
            d) What do they see as the future of their scientific field?
          </li>
          <li>
            e) What activities or opportunities would they recommend for students?
          </li>
        </ul>
        <p>
          In some universities, there may also be professors, advisors, or support services specifically dedicated to helping students with academic,
          career, or psychological concerns, so it is worth checking the <strong>university website</strong>.
          Different professors will also have different perspectives, so do not limit yourself to only one conversation.
        </p>
        <p>
          It is also important to remember that you do not have to wait until your final years of university, or until you have everything figured out,
          to contact professors. You do not need to have top grades or a fully formed career plan. 
          
        </p>
      </div>
    ),
  },
  {
    question: "How to email professors?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Learning how to email professors is also good practice for future communication with colleagues, supervisors, employers, or academics from other institutions. 
         Written communication does not include tone of voice or body language, so being <strong>clear, polite and professional</strong> helps avoid misunderstandings. Some practical tips:
        </p>
        <ul className="space-y-4">
          <li>
            a) Use a clear subject line.
          </li>
          <li>
            b) Use a polite opening and closing. Start by introducing yourself briefly. Explain why you are contacting them.
          </li>
          <li>
            c) Keep your message concise and respectful. <strong>Proofread</strong> before sending.
          </li>
          <li>
            d) Use your academic email address when contacting professors or make sure your email address looks professional and includes your name.
          </li>
          <li>
            e) If you use a profile photo, make sure it is appropriate for academic or professional communication.
          </li>
          <li>
            f) You may also include a formal email signature with relevant contact information.
          </li>
        </ul> 
        <p>
          If you are contacting professors from abroad, use <strong>English</strong>, unless you know another language is appropriate. 
          It can also be useful to pay attention to <strong>timing</strong>. If needed, you can schedule an email to be sent at a more appropriate hour. 
          Remember that professors receive many emails, so if they do not reply, it is acceptable to send a polite <strong>reminder</strong> after a reasonable amount of time 
          depending on the urgency, usually from a few days to a week or more.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "When should I start preparing my CV? How to structure it?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Start preparing your CV…yesterday. Many students wait until they need to apply somewhere, but preparing a CV early can help 
         you <strong>understand/organize</strong> what experiences you already have and what areas you may want to strengthen. 
         It can also help you build <strong>confidence</strong>, set future goals and remember activities before time passes. Even before university, you may already 
         have experiences worth reflecting on, such as projects, competitions, volunteering, leadership roles, hobbies or activities that developed your skills. 
         Do not think that only very special awards and positions are worth adding. Search online what to include or ask peers for sections they have 
         added.
        </p>        
        <p>
         Some general advice is to <strong>keep it updated</strong> regularly and to <strong>adapt</strong> it depending on the application. 
         For example, a CV for a research position, a master's application, an industrial job, a seminar, may emphasize different experiences and skills. 
         Templates such as Europass can help, but many people also prefer creating their own structure or using tools such as LaTeX. Many 
         positions use an AI system to initially filter CVs they receive, based on specific <strong>keywords</strong> relevant to the position/topic, so make sure to include them
         in yours. In general, student CVs are often 1 page, while academic CVs can become longer over time.
        </p>
        <p>
          You can read my{" "}
          <a
            href="https://athinabampzeli.com/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            CV
          </a>{" "}
          to get ideas.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "What is a motivational letter / cover letter? How do you write it?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         A cover letter or motivational letter is usually a short written document (1-2 pages) submitted alongside your CV. While the CV lists your 
         experiences and achievements, the cover letter is more <strong>narrative</strong> and gives you an opportunity to explain:
        </p>
        <ul className="space-y-4">
          <li>
            a) Why you want the position. What motivates you.
          </li>
          <li>
            b) Why you chose that specific organization or program.
          </li>
          <li>
            c) What relevant experiences make you a strong candidate.
          </li>
        </ul>           
        <p>
          A strong cover letter is not simply a summary of your CV. It should <strong>connect</strong> your experiences with the specific role, 
          organization, supervisor. It should be <strong>adapted</strong> for each application. Two people with similar CVs may still write 
          very different letters because they have different motivations, ways of thinking, goals and communication styles. Writing a 
          good cover letter requires understanding both yourself and the position or organization you are applying to. You could 
          read examples online, learn common structure and style, ask for feedback.
        </p>
        <p>
          What helped me personally when preparing cover letters for PhD applications was the experience I had gained from writing 
          similar documents for the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_cybersecurity-chemicalengineer-interdisciplinarity-activity-7333213758426710016-cvyl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            cybersecurity seminar
          </a>, the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_optimization-modeling-chemicalengineering-activity-7218930335378489345-3YWN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            workshop
          </a>{" "}“Optimization Methods for Energy Systems Engineering” and other applications earlier in my academic journey.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "How to prepare presentations?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         A good presentation should help the audience understand your message clearly. If you are free to design your own presentation, 
         some useful elements are:
        </p>
        <ul className="space-y-4">
          <li>
            a) A title slide with your name, topic and organization.
          </li>
          <li>
            b) An outline or agenda.
          </li>
          <li>
            c) Clear section structure, number of pages.
          </li>
          <li>
            d) A summary or conclusions slide.
          </li>
          <li>
            e) Future work or discussion points.
          </li>
        </ul>
        <p>
          You may want to skip the traditional “Thank you for your attention” slide at the end of your presentation. The final 
          slide is often displayed during the <strong>discussion</strong> and Q&A session, so it can be more useful to leave your audience with a 
          slide containing your main conclusions, a summary of the work, future directions, or your contact information and that of 
          your collaborators. It is also worth dedicating a slide to <strong>acknowledging</strong> and thanking your collaborators and contributors. 
          When including tables and figures, add titles where useful and cite sources appropriately. 
          If your presentation is in Greek, try to avoid unnecessarily mixing Greek and English on your slides. Use 
          English only when required, such as for technical terms, references, or concepts that are more commonly expressed in 
          English. For more in-depth presentations, it can be helpful to clearly <strong>define the scope</strong> of your work at the beginning. 
          Positioning your work within the broader field and explaining its boundaries can help the audience understand exactly 
          what your contribution addresses and prevent misunderstandings about the extent of your results. <strong>Comparing</strong> your 
          work with related studies or existing approaches can help highlight the significance of your contribution and 
          explain why your work adds value to the field.</p>          
        <p>
          Some general advice is to keep slides <strong>visually clear</strong>. Avoid unnecessary formatting, excessive colors, 
          decorative elements, or crowded slides. Visual simplicity often helps the audience focus on the content. Use readable text 
          and figures considering that the audience may sit far away, lighting may affect readability, fancy fonts or small text may be difficult to 
          read. Try to <strong>minimize text</strong>, as people cannot easily read and listen at the same time. Slides usually work better when they 
          communicate key ideas visually and briefly, while the presenter explains the details. Developing the ability to transform ideas, 
          methods and results into clear visual representations is a valuable skill in both academia and industry.
        </p>
        <p>
          Good presentations are not about putting as much information as possible on the screen. Instead, they are about guiding the audience 
          through a clear and coherent story. The audience should always understand where they are in the presentation, how the different 
          topics connect to one another, and why each section is important. At the same time, speakers should be prepared to <strong>answer questions</strong> about 
          anything included in their slides.
        </p>
        <p>
          You can read about my{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_gproms-publication-phd-activity-7404163995844100097-D1PJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            diploma thesis
          </a>{" "}presentation. My presentations on{" "}
          <a
            href="https://github.com/athina-bampzeli/Cybersecurity-Presentations"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            cybersecurity
          </a>{" "}do not follow all of the above guidelines, as they are not intended to be presented but to be read asynchronously.
          When preparing these, my main goals were to fully understand the content myself, disseminate the work I carried out as an 
          intern, develop an effective presentation structure and respect copyright requirements. Because of the latter, I generally 
          avoided using many images. However, for your own projects and personal work, I would encourage you to create original 
          graphical content whenever possible to effectively transmit the information in multiple ways.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "Is an internship worth it? In Greece or abroad? In a big or small company?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Every internship is different, depending on your background, the responsibilities of the role, the company culture, the quality of supervision, the field itself.
         For many students, an internship is one of the first experiences outside the university environment where they 
         work as <strong>part of an organization</strong>. It often teaches 
         skills that are difficult to learn in class, such as responsibility, workplace communication, completing tasks under deadlines, 
         working with colleagues and supervisors, adapting to a professional environment. Internships may help you understand:
        </p>
        <ul className="space-y-4">
          <li>
            a) Whether you enjoy a certain work environment.
          </li>
          <li>
            b) Whether a field suits you.
          </li>
          <li>
            c) What <strong>professional work</strong> actually looks like.
          </li>
          <li>
            d) What skills you still need to develop.
          </li>
        </ul>        
        <p>
          If you are interested in industry, internship experience is often seen positively by employers. However, the value usually comes more 
          from <strong>what you actually did and learned</strong> than simply having the title of “intern”. During interviews, employers often ask about tasks you completed, 
          challenges you faced, skills you developed, initiatives you took. So try to focus on gaining real experience, not only adding a line to your CV.
        </p>
        <p>
          Internships abroad, such as Erasmus placements or other international opportunities, may also broaden your perspective and expose you to 
          new professional cultures, although they often require more <strong>preparation and adaptability</strong>. As for choosing between a big or small 
          company, there is no universal answer. Both can offer advantages and disadvantages. It is often more useful to evaluate the actual 
          role, the people you will work with, the responsibilities you will have, the learning opportunities available. Do not be disappointed 
          if you get your first rejections. It has happened to all. You might choose to exploit an opportunity that you get the chance, 
          rather than waiting for the ideal one you had in mind, and still get value you did not expect.
        </p>
        <p>
          You can read about my{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_cybersecurity-presentation-activity-7426901388045049856-p-u1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            internship
          </a>{" "}
          in the field of cybersecurity.
        </p>
        
      </div>
    ),
  },
  {
    question: "Should I do an Erasmus study exchange or internship?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         I have not personally participated in an Erasmus study exchange or internship. However, based on the experiences 
         of other people and my participation in a seven-day Erasmus{" "}
         <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_course-entrepreneurship-business-activity-7013938283537698816-z4vs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            training course
          </a>,{" "}I believe it is a valuable opportunity to <strong>step outside your comfort zone and develop yourself</strong> in ways you may not currently imagine.
        </p>     
        <p>
          You can experience how a university or company in another country is structured and operates. At the same 
          time, you will need to handle various <strong>challenges independently</strong>, from submitting application documents and 
          finding accommodation to contacting professors and matching courses with those of your home university. 
          If you are in the later years of your studies, an Erasmus exchange may also provide the opportunity to 
          complete your thesis with a co-supervisor from the host institution. These experiences can also <strong>strengthen 
          your CV</strong>, as they demonstrate independence, flexibility, adaptability, and the ability to study or work in 
          an international environment.
        </p>
        <p>
          A summer internship may not interfere with your university courses during 
          the semester, although it can overlap with examination periods. An Erasmus study exchange, especially 
          when not all courses can be fully recognized by your home institution, may require additional effort 
          after your return to balance the remaining obligations of your degree.
        </p>        
      </div>
    ),
  },
  {
    question: "Should I participate in conferences, seminars and courses as a student?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          In my experience, participating in conferences and seminars as a student can be very valuable. For example, attending the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_pesxm14-chemeng-engineering-activity-7204479932616368128-l1ZY?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            14th Panhellenic Scientific Conference on Chemical Engineering
          </a>{" "}
          during my fourth year helped me better understand the broad applications and specializations within
          my field. It exposed me to topics and innovations that I had not considered before and gave me a clearer picture of the wider scientific community. 
          Experiences like these can <strong>broaden your perspective</strong>, expose you to new ideas and technologies, help you understand possible career paths, 
          introduce you to researchers and professionals, motivate you to engage more deeply with your field.
        </p>
        <p>
         If you have worked on a research project, <strong>presenting your work</strong> at a conference can be even more impactful, as it gives you an opportunity
         to discuss your project with others and gain experience in scientific communication. Conference participation can also be something
         valuable to include in your CV. Keep in mind that some conferences require registration fees, even for student attendees. In some cases, 
         volunteering as part of the organizing team may provide free participation or reduced costs. Major conferences and relevant opportunities 
         on chemical engineering are provided by the{" "}
          <a
            href="https://www.aiche.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            AIChE
          </a>{" "}
          and the{" "}
          <a
            href="https://www.icheme.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            IChemE
          </a>.
        </p>
        <p>
          There are also many other opportunities beyond conferences, such as seminars, courses, workshops and summer schools. Depending on the organizer
          and the topic, these experiences may contribute differently to your learning and CV, but in general they can help you meet new people, 
          learn interdisciplinary topics, experience different teaching styles, understand what interests you, explore future directions.
        </p>
        <p>
          You can read about the workshop I participated on{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_optimization-modeling-chemicalengineering-activity-7218930335378489345-3YWN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            "Optimization Methods for Energy Systems Engineering"
          </a>{" "}
          taught by professor Christos Maravelias. You can explore (and apply to) upcoming events/opportunities in my{" "}
          <a
            href="https://athinabampzeli.com/news"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            website
          </a>.
        </p>
      </div>
    ),
  },
  {
    question: "Is volunteering worth spending time? Scientific student teams or event organizing?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Every experience changes you, not only because of its title or structure, but also because of the timing, the people you meet,
          and the way you engage with it. I would say it is rarely too early to participate in student teams or organizations. There will
          always be reasons to think you are too busy, too inexperienced, or not ready enough. If you feel comfortable exploring different
          experiences, this can be a very valuable period to do so, especially before feeling pressure to specialize. Before joining, it is
          important to ask about the <strong>time commitment and responsibilities</strong> involved, just like in a job interview. This helps avoid
          misunderstandings and ensures that you can commit responsibly. The positive side is that the more effort you invest, the more you
          usually gain in terms of skills, confidence, and personal growth. This is not wasted time, even if it is not directly connected to
          your degree. University is not only about courses and exams. It is also about <strong>understanding yourself</strong> better and preparing for <strong>future work</strong> and life. 
        </p>
        <p>
         A <strong>scientific student team</strong> may give you research and technical experience, expose you to interdisciplinary work, help you collaborate with
         people working toward a common goal, introduce you to passionate people who may inspire you. This can be especially useful if you are
         considering specializing in that field. 
        </p>
        <p>
          An <strong>event organizing student team</strong> may help you develop responsibility and teamwork, teach you practical organization and communication skills,
          give you experience in leadership and coordination, help you understand how complex projects happen behind the scenes. One thing I personally
          learned from event organizing was that, as a participant, I only saw the final result. I did not realize the amount of planning, effort
          and coordination happening behind the scenes. That experience helped me understand why some events run smoothly and where others may have room for improvement. 
        </p>
        <p>
          Another advantage of student teams is that they involve many different roles, from human resources and marketing to technical work and operations. 
          Even if you are mainly interested in one role, you can learn a lot by observing and talking to people in other positions. Volunteering also allows
          you to meet people who are motivated by more than personal gain. These are often people who want to contribute, grow, collaborate, and support
          a shared goal. Building relationships with such people can become an important <strong>networking opportunity</strong> far beyond the team itself. 
        </p>
        <p>
          You can explore the{" "}
          <a
            href="https://gitlab.com/acubesat/thermal/esatan-model/-/work_items/30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Payload thermal model
          </a>{" "}
          I developed as a Thermal Engineer at{" "}
          <a
            href="https://spacedot.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            SpaceDot
          </a>{" "}
          and the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_organizing-responsible-communicating-activity-7039996733040275456-XiKt?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            JobFair
          </a>{" "}
          I coordinated as the Corporate Relations responsible at{" "}
          <a
            href="https://www.best.eu.org/aboutBEST/structure/lbgView.jsp?lbginfo=th"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            BEST Thessaloniki
          </a>.
        </p>
        <p>
          You can explore one of the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_represented-interviewed-folkdance-activity-7014554612498100225-B7_J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADx6YDUBc0-qX57jBY3JmoEyhcmnyPBLPgA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            festivals
          </a>{" "}
          I participated as a volunteer dancer at{" "}
          <a
            href="https://likhelthes.gr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Lyceum Club of Greek Women of Thessaloniki
          </a>. Participating in such cultural activities is about engaging with tradition, history, and collective memory. 
          Respecting and sharing the traditions of my country is something I see as closely connected to education and self-awareness. 
          For me education is not limited to academic knowledge. It also includes understanding where you come from, how history and culture shapes identity.
        </p>
      </div>
    ),
  },
  {
    question: "Are teamwork and independence mutually exclusive skills?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Both skills are essential to develop, regardless of the profession you choose. I have already mentioned 
         their importance and suggested ways to cultivate them. Here, I would simply like to offer a thought. These 
         skills are not as independent from one another as we sometimes assume.
        </p>
        <p>
          When we work in a team, <strong>we remain individuals</strong> with our own responsibilities. We still need to organize 
          ourselves, complete our tasks, and contribute independently. Think about a team sport: each athlete must 
          train individually, maintain their physical condition, and take personal initiative in order to perform 
          well as part of the team. On the other hand, when we think of independent work, such as a PhD project, are we ever completely independent? 
          We still communicate with supervisors, universities, collaborators, and external partners. We may <strong>rely on</strong> data 
          provided by others or <strong>seek advice</strong> from more experienced colleagues. 
        </p> 
        <p>
         As members of society, it is difficult to achieve even personal goals entirely alone. Independence and 
         collaboration are therefore not opposing qualities, they often complement one another.
        </p>       
      </div>
    ),
  },
  {
    question: "Is interdisciplinarity important?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         I have already mentioned how much I value interdisciplinary thinking and why. Here, I would like to share a few 
         examples from my own experiences that demonstrate why interdisciplinarity is a defining characteristic of our era.
        </p>
        <p>
          Cybersecurity is often viewed primarily as a field of <strong>computer science</strong>, and indeed mathematics and computing are 
          essential components of it. However, cybersecurity is also closely connected to <strong>law</strong>, which constantly evolves to 
          keep pace with rapid technological developments. It is also connected to <strong>education</strong>, as informing people about 
          simple ways to protect themselves remains one of the most effective forms of defense. In this sense,{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_cybersecurity-chemicalengineer-interdisciplinarity-activity-7333213758426710016-cvyl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            legal and educational professions
          </a>{" "} are also relevant to cybersecurity. There are also cybersecurity attacks that target 
          industrial systems, interfere with sensors, or manipulate the data used to train models. In such cases,
          a <strong>chemical engineer</strong> could contribute to designing systems that are more resilient to these attacks and better 
          able to withstand the effects of such tampering.
        </p>  
        <p>
         Another example is aerospace. I fully appreciated this during the{" "}
         <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_esaacademy-management-controlengineering-activity-7337820309938434048-HPEb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Space Standards training course
          </a>{" "} by the European Space Agency Academy. Before that experience, 
         I mostly associated aerospace with <strong>electrical and mechanical engineering</strong>. However, chemical engineers can contribute 
         to propulsion systems, materials and chemicals,{" "}
         <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_modeling-thermalanalysis-orbitalanalysis-activity-7381032172549406720-Pvl9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            thermal modeling
          </a>, and the transition from manufacturing satellites 
         individually to producing them at an industrial scale. With additional specialized training, there are likely many 
         more opportunities.
        </p>   
        <p>
          My visits to the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_distinguish-europeanparliament-energy-activity-7028716189241466880-U_pr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            European Parliament
          </a>{" "}in Strasbourg and the United Nations Office at Geneva, although at a younger age, also gave me valuable 
          insights into the importance of decision-making at a high level. <strong>Politicians</strong> with an engineering or STEM background, 
          for example, may bring a practical perspective and greater awareness of issues related to the environment, 
          healthcare, food production, and water resources.
        </p>   
        <p>
          These are only a few examples from everyday life that demonstrate how important it is to collaborate across 
          disciplines or to develop an interdisciplinary mindset yourself. Doing so can lead to a more holistic understanding 
          of problems and more effective decision-making.
        </p>
      </div>
    ),
  },
  {
    question: "What is the point of networking? How can I do it effectively?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Building connections with people relevant to your interests and goals can be helpful for learning, problem-solving, gaining perspective, 
         and finding support. Networking is not simply about “getting something” from more experienced people. At its best, it is about 
         building genuine professional relationships through <strong>discussion, collaboration, shared interests and mutual support</strong>. As with all 
         human relationships, strong connections are usually built through genuine interest, respect, honesty, consistency. 
         Depending on your field, networking opportunities may come through conferences/seminars/courses, competitions, student organizations, 
         volunteering, research collaborations, internships.
        </p>
        <p>
          In practice, be open to <strong>communicate</strong> your work and interests, <strong>share</strong> your aspirations, <strong>ask</strong> thoughtful 
          questions, seek feedback, <strong>offer</strong> help. 
          If you plan to contact a specific person, it often helps to learn about their background beforehand and prepare relevant questions. 
          Platforms such as LinkedIn can also help maintain professional connections over time. In my opinion, one of the most effective ways 
          to build meaningful professional relationships is by <strong>working</strong> with people on real projects, because collaboration often reveals much 
          more than brief conversations.
        </p>        
      </div>
    ),
  },
  {
    question: "Should I take part in mentorship programs as a mentee?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Mentoring has been an important part of my personal development from my school years until today. 
         I have always tried to ask people for advice and listen to their <strong>perspectives</strong>, because I believe that 
         having multiple sources of information helps you make better-informed decisions. Mentoring has helped me 
         make important choices, explore paths I would not have otherwise considered, and learn from the 
         experiences and mistakes of others. The critical part is understanding <strong>who you are talking to</strong>. 
         Consider their background, experiences and achievements, and try to connect those factors with the 
         advice they provide. At the same time, think about whether their experiences are relevant to your 
         own situation, personality, and aspirations. In the end, you are responsible for your own decisions.
        </p>      
        <p>
          I would not say that I have formally mentored someone, but I have certainly tried to help people 
          who asked for my opinion or advice. I greatly admire education and the work of professors, as they 
          help shape the minds of <strong>future generations</strong>. They communicate innovative ideas, evidence-based knowledge, 
          and the value of lifelong learning. Because I value this work so highly, I have always tried to develop 
          my own skills in explaining complex concepts, presenting ideas, and continuously improving through 
          reading, writing, listening, and learning. 
        </p>
        <p>
          You can read about how{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_phd-processsystemsengineering-hybridmodeling-share-7465443054775263233-NOfX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            mentoring
          </a>{" "}
          helped me shape my own plan.{" "}
        </p>
      </div>
    ),
  },
  {
    question: "Is social media engagement important? ",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        I believe that social media can be a powerful tool when used effectively and with caution. Like many 
        modern technologies, it creates opportunities to make your content available to people around the world, 
        free of charge, whenever you decide, and in whatever format best serves your purpose. This is already 
        widely used in <strong>entrepreneurship and marketing</strong>. From what I have observed, platforms such as LinkedIn 
        are often used in <strong>academia</strong> to promote publications, books, and other aspects of someone's work. They 
        can also be used to advertise available positions and opportunities for collaboration. Social media 
        can help you build a network of people with similar interests and professional backgrounds. It can 
        also help you stay informed and inspired by experts in your field without having to search for them actively.   
        </p>
        <p>
          However, it is important to be careful about what you publish and how much time you spend on these 
          platforms. They are primarily tools for communicating ideas and information. They provide access to 
          resources, but not necessarily to knowledge itself. Through them, you can develop skills related 
          to <strong>communication and self-promotion</strong>, but genuine learning still requires dedicated study and practice.     
        </p>
      </div>
    ),
  },
  {
    question: "When should I start thinking about my next career steps after university?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         In life, there is a balance between focusing on the present and planning for the future. My view is that by the <strong>middle years</strong> of university,
         most students have gained a basic understanding of their degree, explored some opportunities, and started to understand what they enjoy and
         what they are good at. At that point, it becomes easier to think more intentionally about possible next steps. Depending on your goals,
         this may influence choices such as elective courses, research projects, conferences and seminars, internships, exchange programs or opportunities abroad.
        </p>
        <p>
        For applications to master's or PhD programs, factors such as grades, research experience, publications, conference participation and recommendations
        from professors matter. For industry roles, internships, practical experience, projects and extracurricular involvement may be especially valuable. 
        Many of these opportunities require preparation and time, so it can help to think ahead rather than wait until graduation approaches. That does not 
        mean you need to have everything figured out early. It means that exploring possibilities sooner can help you make more informed decisions later.
        </p>
        <p>
          You can read about how{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_phd-processsystemsengineering-hybridmodeling-share-7465443054775263233-NOfX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            mentoring
          </a>{" "}
          helped me shape my own plan.{" "}
        </p>
        
      </div>
    ),
  },
  {
    question: "Should I pursue a master's degree? Another bachelor's degree?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          The answer depends on your background, previous decisions, career goals, whether you want to transition to 
          a different field, and whether you can invest the required time and financial resources. In general, we 
          live in an era of <strong>increasing specialization</strong>. Modern working environments often require people to develop 
          deep expertise in their field, perform their specific tasks effectively, and then collaborate with other 
          specialists to achieve broader goals.
        </p>   
        <p>
          A bachelor's degree is usually designed to provide a broad foundation in a discipline, whereas a 
          master's degree allows you to begin specializing in a particular area. It is also worth considering 
          that a bachelor's degree typically requires a larger time commitment than a master's program. 
          In my opinion, master's programs should help <strong>connect students</strong> with potential employers through 
          industrial collaborations, internships, practical projects, and networking opportunities. The primary 
          goal of a bachelor's degree, on the other hand, is usually to <strong>teach the fundamentals</strong> of the discipline 
          rather than provide direct exposure to the job market. A master's degree is also required for many PhD applications.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "What should I do during university if I want to pursue an industrial career and become more competitive?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          As I am not currently working in industry, my perspective is limited. However, based on my experiences and interactions, 
          I would recommend taking on both <strong>personal and team projects</strong> to develop problem-solving, independence, communication, 
          and teamwork skills. I have often heard that industry tends to place less emphasis on high grades and more emphasis on practical 
          experience. This is one reason why work experience, internships, and volunteering are often valued.
          Participating in teams helps you build a network, learn how to 
          collaborate in a more structured way, and potentially work with external organisations and partners. Internships 
          provide practical experience outside the relatively protected environment of the university. You can find more 
          about internships and vollunteering in my previous Q&As.       
        </p>
        <p>
          It is also important to remember that during university you <strong>cannot realistically learn every tool</strong> or process 
          required for a junior position. There are countless software tools and workflows, and different organisations 
          use different solutions depending on their needs. However, if you already know that you want to pursue a specific industrial 
          career, you can align your activities accordingly. For example, in computational fields, you can work on projects 
          involving relevant software tools. For laboratory-oriented careers, you may benefit from pursuing an experimental 
          thesis. For research and development (R&D) positions, developing your research potential through research projects or 
          even a PhD may be useful.       
        </p>
      </div>
    ),
  },
  {
    question: "How to prepare for industrial applications and interviews?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        My experience with industrial applications and interviews is relatively limited and mainly comes from my internship 
        as a{" "}
        <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_cybersecurity-presentation-activity-7426901388045049856-p-u1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            cybersecurity intern
          </a>{" "}
          at Olympia Electronics. From my observations, companies are primarily interested in your skills, the value 
          you can bring through your work, and your <strong>reliability and trustworthiness</strong>. I also believe that practical 
          experience and completed projects are often valued more highly than grades alone. That being said, strong 
          academic performance combined with communication skills and collaborative experiences can demonstrate dedication, 
          discipline, and the ability to adapt to challenges and perform well.
        </p>
        <p>
          When preparing your CV, cover letter, or interview answers, take time to reflect on the <strong>specific tasks</strong> you 
          performed during previous projects, internships, or work experiences. If the project was collaborative, 
          be clear about your own contribution to the team. It is also useful to explain which <strong>skills</strong> you developed 
          through these experiences and how those skills <strong>connect to the position</strong> you are applying for.

        </p>
      </div>
    ),
  },
  {
    question: "What should I do during university if I want to pursue an academic career and become more competitive? ",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Based on my experience applying for PhD positions, I believe that <strong>research experience</strong> is highly valued, as it 
         demonstrates both your motivation for research and your ability to succeed in it. Publications are particularly 
         important, especially when you are the first author, because they allow evaluators to read your work and 
         understand your way of thinking, conducting research, and communicating ideas. Research experiences are especially 
         useful when they are related to the field you are applying to, but in general you can take advantage of opportunities 
         such as undergraduate or master's theses, voluntary work in a professor's laboratory, research internships, 
         research-oriented student teams, and personal research projects.       
        </p>
        <p>
          Participation in <strong>academic conferences</strong> is also valuable, particularly when you present your work 
          through an oral presentation or a poster. <strong>Networking</strong> with people in your field can also help you 
          learn about relevant opportunities, obtain recommendations, receive feedback, and gain useful advice and insights.     
        </p>
        <p>
          As a PhD is mandatory for pursuing an academic career, there is a separate Q&A section below specialized in PhD applications.
        </p>
      </div>
    ),
  },
  {
    question: "What is the Technical Chamber of Greece (TEE) registration process?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        You can register with the Technical Chamber of Greece (TEE) after graduation, if you plan to work 
        as an <strong>engineer in Greece</strong> and undertake projects that require your professional signature. In this 
        way, you secure your professional rights as an engineer.
        </p>
        <p>
          The process is relatively straightforward. You can find the relevant instructions on the
          TEE <strong>website</strong>, where the application procedure is explained in detail. After submitting the required 
          documents and paying the relevant fee, you wait for your application to be verified. Once approved, 
          you are invited to select an examination date. You can choose to be examined either on your <strong>diploma 
          thesis</strong> or on a set of <strong>modules provided by TEE</strong>. I chose to be examined on my diploma thesis, as it 
          was a topic I already knew very well.
        </p>
        <p>
          Detailed information about the examination process is available on the website. On the examination day, 
          you first wait in a video-call lobby with other candidates while your identity is verified. You are then 
          admitted to a video call with three examiners, who are typically university professors and TEE members. 
          They ask you to summarize your thesis and answer a few questions about it, such as why you chose the 
          topic, what your main results were, and what conclusions you reached. In my experience, the discussion 
          lasted approximately 5-10 minutes. Keep in mind that after being accepted, you will also need to pay 
          an annual <strong>membership fee</strong> of approximately 20 euros.
        </p>
      </div>
    ),
  },
  {
    question: "What should I know or have achieved by the time I finish university? Where should I focus?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         University is a different experience for everyone and each person finishes with different lessons and feelings. 
         One useful exercise is to imagine yourself at graduation and ask:
        </p>
        <ul className="space-y-4">
          <li>
            a) What personal goals would I like to have achieved?
          </li>
          <li>
            b) What kind of people would I like to have met?
          </li>
          <li>
            c) How much and in which fields would I like to have grown?
          </li>
          <li>
            d) Do I feel proud of the choices I made?
          </li>
        </ul> 
        <p>
          Your degree matters, but university is also about self-awareness, personal growth, relationships, and preparing
          yourself for life after graduation. Reflecting on these questions can help you decide whether you want to
          continue on your current path or change direction.
        </p>
        <p>
          You can read about how{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_phd-processsystemsengineering-hybridmodeling-share-7465443054775263233-NOfX/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            mentoring
          </a>{" "}
          helped me shape my own plan.{" "}
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "In which ways could university enhance the student experience?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         Additional support during the <strong>transition</strong> from school to university, and later, from university to employment would be valuable. 
         Many universities already offer resources such as career offices, professors willing to mentor students, and career events 
         that connect companies with students. One positive aspect of these opportunities is that students must actively search for 
         and take advantage of them, which is itself an important skill to develop.
        </p>
        <p>
          More collaborations with <strong>industry</strong> and more company visits would also help students gain a clearer and more practical 
          understanding of potential career paths, something that is particularly important for engineers. The Technical Chamber 
          of Greece (TEE) could also play a stronger role in informing students about their <strong>professional rights</strong> and how they 
          can benefit from being part of the engineering community.
        </p> 
        <p>
         Working with software tools through case studies and projects often leads to deeper learning 
         than studying theory alone. Universities and professors should continue exploring new teaching approaches that take 
         advantage of <strong>modern technologies</strong> and the opportunities they provide.
        </p>   
        <p>
         Equally important is helping students transition from purely individual learning and problem-solving toward working 
         effectively in <strong>teams</strong> with their classmates.  
        </p>    
      </div>
    ),
  },

];

const qanda3 = [
  {
    question: "What is the current situation regarding PhD applications in the United States, Europe and Greece?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          As I do not work in academia, I do not have direct personal insight into the current PhD application landscape. My understanding is based on my applications, my personal research, and opinions from professors and PhD candidates. In recent years, due to geopolitical and economic instability, there has been increased pressure on <strong>research funding</strong>. This often results in fewer available positions, higher competitiveness, and more strict selection criteria.
        </p>
        <p>
          The PhD <strong>application process</strong> differs significantly between regions. In the United States, applicants typically apply to a department rather than a specific project. If accepted, there is usually a later process of matching with a supervisor and defining a research topic. In Europe, the system varies by country and institution. In some cases, you apply for a specific PhD project that is already defined, similar to a job position. In other cases, you contact a professor with an open position or propose a research topic yourself. Networking can be important in this context, as it helps you learn about available positions and connect with research groups.
        </p>
        <p>
          There are also differences in <strong>funding structures</strong>. For example, in countries such as Denmark, PhD candidates are considered employees and receive a salary. In contrast, in countries like the UK, PhD candidates are considered students and need to pay tuition fees. These fees are covered through scholarships or funded positions that also provide a stipend. After Brexit, some fully funded PhD positions in the UK have become more limited for non-UK students.
          In Greece, some PhD projects are not funded, while others are supported through collaborations with industry, research institutions, or European Union funding programs. Many candidates combine research with teaching or assistant duties depending on the institution. Some also take part-time jobs to cover their living expenses.
        </p>
        <p>
          The <strong>duration</strong> of PhD studies also varies. In the United States, they often last around five years, while in Europe they typically range from three to four years, depending on the country and program structure.
        </p>
        <p>
          Overall, the PhD application process is highly dependent on the country, institution, and field. For the most accurate and up-to-date information, it is always best to consult individual university websites and official program descriptions.
        </p>
      </div>
    ),
  },
  {
    question: "What documents and qualifications do they ask for in PhD applications?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         It depends on the case, but in general they ask for your <strong>CV</strong>, a <strong>cover letter</strong>, one or two <strong>recommendation letters</strong> from professors,
         your bachelor's and master's <strong>diploma</strong>, <strong>transcripts</strong>, and proof of <strong>English proficiency</strong>. When applying to a department, 
         you might also have to complete an <strong>application form</strong> with questions about your background and qualifications. In some cases, 
         you may be asked to submit a <strong>research proposal</strong>. Some American universities also required <strong>GRE or GMAT</strong> examination results.
        </p>   
        <p>
          From my experience, they value high grades, research experience relevant to the position, publications (even if you are not the 
          first author), and strong recommendation letters. They also value cover letters that are tailored to the specific position, 
          university, or professor, rather than generic or AI-generated ones.
        </p>          
        <p>
          Make sure you have a clear overview of the application <strong>timeline</strong>, as deadlines and procedures differ between universities 
          and countries. Even when it is not mandatory, it can be beneficial to contact a potential supervisor beforehand through 
          a <strong>cold email</strong>. This gives you an overview of their work and any available positions, allows them to get to know you, and 
          helps both sides evaluate whether there is a good fit before the official application process.
        </p>
        <p>
          For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "How to request recommendation letters?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         I do not have experience writing recommendation letters, but I do have experience requesting them. 
         First, it is useful to reflect on why universities ask for recommendation letters. They want to understand 
         how people who have worked with you <strong>perceive you</strong>, independently of how you present yourself. Since your goal 
         is to convince them that you are a good fit for the position, you want someone who has collaborated with you 
         to discuss your skills, motivation, and ability to succeed in that role.
        </p>   
        <p>
         The arguments in a recommendation letter are usually based on <strong>past collaborations and interactions</strong>. Therefore, 
         it is important to ask for a letter from someone who has relevant experience working with you. Ideally, this 
         would be a professor or researcher with whom you have collaborated closely on research projects. It can also 
         help if the person has an established career and reputation in the field, as their opinion may carry additional 
         weight. In some cases, the application committee may also value whether the professor has connections with the 
         department, such as research collaborations or previous studies there. This is one reason why it is important to 
         think about recommendation letters <strong>long before you start preparing applications</strong>. If you would like a recommendation 
         from a specific professor, attend their courses, join their research group, volunteer in their laboratory, or 
         choose them as a thesis supervisor.
        </p>          
        <p>
          When contacting a professor, make sure to <strong>introduce yourself</strong>, explain <strong>why</strong> you are reaching out, provide information 
          about the <strong>position</strong> you are applying for, remind them of your previous interactions, and ask whether they would be 
          willing to write a recommendation letter. It is also important to communicate the <strong>deadline</strong> clearly. Application 
          timelines are often strict, and you are responsible for requesting the letter early enough, ideally at least one 
          week before the deadline. If the professor is unavailable, you should still have enough time to contact another 
          referee. Some professors may send the recommendation letter directly to you, but in many cases they submit it 
          themselves through the university platform.
        </p>
      </div>
    ),
  },
  {
    question: "How to structure my CV?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         When applying for PhD positions, a concise (1 page) CV is usually sufficient. It is important to understand the 
         difference between applying for industrial and academic positions. For academic applications, you should emphasize 
         the experiences that demonstrate your <strong>research potential</strong>. Include your education, publications, conferences 
         and seminars, research experience, and relevant work experience. Follow a chronological order, typically listing 
         the most recent experiences first. Include accurate dates and contact information. Personally, I would not 
         include a photograph or additional personal details such as age. If space allows, you can also mention relevant 
         university courses, language qualifications, and soft or technical skills that are relevant to the position.
        </p>           
        <p>
          My current{" "}
          <a
            href="https://athinabampzeli.com/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            CV
          </a>{" "}
          follows the structure expected after being accepted into a PhD position, so I would not necessarily recommend using it 
          directly as a template for applications, as it is quite detailed. However, you may still find useful ideas from it, such 
          as writing it in LaTeX.
        </p>
      </div>
    ),
  },
  {
    question: "How to cold email professors?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
        The most important step before contacting professors is researching their work. This helps you 
        understand whether their research interests align with yours, whether their methods match the skills 
        you would like to develop, and how to tailor your application documents effectively. It may 
        also help you identify <strong>open positions</strong> and determine whether they require a 
        specific <strong>application process</strong>. You can explore their 
        ORCID profile, Google Scholar profile, LinkedIn page, university webpage, or laboratory website.
        </p>   
        <p>
          In a cold email, briefly <strong>introduce yourself</strong> and explain why you are contacting them. It 
          is also useful to include a clear <strong>call to action</strong>. For example, you may ask whether they have available 
          PhD positions or whether they would be willing to schedule a short video call to discuss their research 
          opportunities. This makes it easier for the professor to understand how they can respond and what type 
          of interaction you are seeking. You can attach <strong>supporting documents</strong> if you wish, 
          such as your CV, cover letter, and optionally your transcripts. Before contacting professors, it is 
          useful to have a general CV ready and <strong>adapt</strong> it slightly for each application. Similarly, you can prepare 
          a cover letter template that highlights your background, skills, and research interests. The part that 
          usually changes between applications is your motivation for the specific position and what attracts you 
          to that particular research group or collaboration. Using your academic 
          email address can help maintain a professional tone.

        </p>          
        
        <p>
          You can find more tips about contacting and emailing professors in my previous Q&As. For personalized advice, you can explore the{" "}
          <a
            href="https://athinabampzeli.com/#services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            services
          </a>{" "}
          I provide and{" "}
          <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            contact
          </a>{" "}
          me.
        </p>
      </div>
    ),
  },
  {
    question: "What was one difficult aspect of the application process?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
         One of the most challenging aspects was having to think deeply about the <strong>"why"</strong> and the <strong>"what"</strong> behind my 
         decisions. Why did you apply to this position? Why did you take that course? Why did you choose that 
         tool? Why should someone select you? What exactly were your responsibilities? What was the outcome? 
         What did you learn from the experience? What value does it provide to society?
        </p>   
        <p>
        At first, it was difficult to reflect on my past experiences at such a deep level and understand how 
        they had shaped me. Over time, however, this process helped me <strong>evaluate</strong> advantages and disadvantages 
        more critically, make more <strong>informed decisions</strong>, and better understand which skills I had developed, 
        how I developed them, and which skills still needed <strong>improvement</strong>. Although I initially went through 
        this reflection process because of job and PhD applications, I believe it is valuable to revisit it 
        periodically. It helps ensure that you continue moving in the direction that is most meaningful to you.
        </p>          
      </div>
    ),
  },
  {
    question: "What was your motivation for pursuing a PhD?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">          
        <p>
          My motivation to pursue a PhD started while <strong>working</strong> on the{" "} 
          <a
            href="https://github.com/athina-bampzeli/Techno-economic-study"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Capstone Design Project
          </a>{" "}
          and my{" "}
          <a
            href="https://github.com/athina-bampzeli/Diploma-Thesis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Diploma Thesis
          </a>,{" "}
          where I realized that I genuinely enjoyed research. After <strong>attending</strong> the{" "}
          <a
            href="https://www.linkedin.com/posts/athina-bampzeli-53197b243_circulareconomy-energysystems-processmodeling-ugcPost-7204479932196884481-Rn62/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD55CrwB-SAus2rff0cl1VMhrcOYKZYxhng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Panhellenic Scientific Conference of Chemical Engineering
          </a>,{" "}
          I became particularly interested in machine learning and digital tools for process development 
          and scale-up. Combined with my motivation to <strong>contribute</strong> to society by reducing pharmaceutical 
          production costs, improving medicine affordability and supporting the development of new 
          treatments, hybrid modeling of bioprocesses appeared to be a promising PhD topic. Finally, 
          my <strong>passion</strong> for education and the dissemination of knowledge, which has been with me since 
          childhood, has evolved into one of my core values. I would like this value to remain part 
          of my professional life in the future.
        </p>
      </div>
    ),
  },

];

export default function EducationalQAClient() {

  const [openIndexes1, setOpenIndexes1] = useState<number[]>([]);
  const [openIndexes2, setOpenIndexes2] = useState<number[]>([]);
  const [openIndexes3, setOpenIndexes3] = useState<number[]>([]);

  const isAllOpen1 = openIndexes1.length === qanda1.length;
  const isAllOpen2 = openIndexes2.length === qanda2.length;
  const isAllOpen3 = openIndexes3.length === qanda3.length;


  const toggleOne1 = (index: number) => {
  setOpenIndexes1((prev) =>
    prev.includes(index)
      ? prev.filter((i) => i !== index)
      : [...prev, index]
  );
};

  const toggleOne2 = (index: number) => {
    setOpenIndexes2((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleOne3 = (index: number) => {
    setOpenIndexes3((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleAll1 = () => {
    if (isAllOpen1) {
      setOpenIndexes1([]);
    } else {
      setOpenIndexes1(qanda1.map((_, i) => i));
    }
  };

  const toggleAll2 = () => {
    if (isAllOpen2) {
      setOpenIndexes2([]);
    } else {
      setOpenIndexes2(qanda2.map((_, i) => i));
    }
  };

   const toggleAll3 = () => {
    if (isAllOpen3) {
      setOpenIndexes3([]);
    } else {
      setOpenIndexes3(qanda3.map((_, i) => i));
    }
  };

  return (
    <div className="px-6 py-30 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">
        Educational Q&A
      </h2>
      
      <p className="text-gray-700 mb-8">
          Below, I share my personal thoughts on several questions that have crossed my mind along the way and that may help
          students, from school to university, as well as researchers at different stages of their journey. These opinions are
          based on my personal experiences, studies and the perspectives of people I have met so far. I encourage you to use
          this information as inspiration to reflect further, discuss with more people to broaden your perspective and search
          online for additional insights. If you identify important questions that have not yet been addressed here, you are
          welcome to{" "}

            <a
            href="https://athinabampzeli.com/#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
            >
            contact
            </a> me so that I can add more content.

        </p>

      <h3 className="text-2xl font-bold mb-6">
        a) High school students
      </h3>

      {/* Toggle all button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleAll1}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isAllOpen1 ? "Close all answers" : "Open all answers"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {qanda1.map((item, index) => (
          <div key={index} className="border rounded-xl p-4">
            <button
              onClick={() => toggleOne1(index)}
              className="w-full font-medium flex justify-between text-left"
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <span>{openIndexes1.includes(index) ? "-" : "+"}</span>
            </button>

            {openIndexes1.includes(index) && (
              <div className="mt-3 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-6 mt-16">
        b) Undergraduate/master students
      </h3>

      {/* Toggle all button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleAll2}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isAllOpen2 ? "Close all answers" : "Open all answers"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {qanda2.map((item, index) => (
          <div key={index} className="border rounded-xl p-4">
            <button
              onClick={() => toggleOne2(index)}
              className="w-full font-medium flex justify-between text-left"
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <span>{openIndexes2.includes(index) ? "-" : "+"}</span>
            </button>

            {openIndexes2.includes(index) && (
              <div className="mt-3 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-6 mt-16">
        c) PhD applications
      </h3>

      {/* Toggle all button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleAll3}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isAllOpen3 ? "Close all answers" : "Open all answers"}
        </button>
      </div>

      {/* List */}
      <div className="space-y-4">
        {qanda3.map((item, index) => (
          <div key={index} className="border rounded-xl p-4">
            <button
              onClick={() => toggleOne3(index)}
              className="w-full font-medium flex justify-between text-left"
            >
              <span>
                {index + 1}. {item.question}
              </span>

              <span>{openIndexes3.includes(index) ? "-" : "+"}</span>
            </button>

            {openIndexes3.includes(index) && (
              <div className="mt-3 text-gray-700">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}