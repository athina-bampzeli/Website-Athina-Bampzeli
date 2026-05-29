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
            <strong>a) Teamwork and collaboration</strong> are very important because they are skills you will need throughout your life. We are all part of small and large communities, and in order to feel good, work effectively, achieve goals, and live harmoniously, we need to learn how to cooperate and interact with others.
          </li>
          <li>
            b) Another important skill is the motivation to keep growing and <strong>learning</strong> throughout life, irrespective of the field each person chooses, from theoretical study to practical work. Personal growth and having long-term goals are important both for individual development and for society as a whole.
          </li>
          <li>
            <strong>c) Research and independence</strong> are also essential skills in an era where so much information is freely available. This does not only mean academic research. It means being able to find the information you need, examine it critically, and make decisions based on it.
          </li>
          <li>
            <strong>d) Technological skills</strong>, at least at a basic level, are also necessary. This includes understanding how to use digital tools effectively and being aware of potential dangers. From using e-class platforms to find homework, to learning how to use social media and YouTube in an efficient and safe way, technology can support personal growth when used wisely.
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
          I spoke english in an international environment.
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
          If you are contacting professors from abroad, use <strong>english</strong>, unless you know another language is appropriate. 
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
          If your presentation is in greek, try to avoid unnecessarily mixing greek and english on your slides. Use 
          english only when required, such as for technical terms, references, or concepts that are more commonly expressed in 
          english. For more in-depth presentations, it can be helpful to clearly <strong>define the scope</strong> of your work at the beginning. 
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