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
          choose something that you genuinely like rather than something others expect you to do. At the same
          time, it is important to consider practical aspects such as financial prospects, working hours and the
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
          There is no need to stress excessively about making the “perfect” choice. Instead, try to make the most informed decision possible by using
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
        <p className="pt-2 border-t border-gray-100">
          Learning these skills through experience is often more effective than learning them only in theory. I would suggest taking part
          in team activities and projects outside the classroom so that you can practice collaboration, take initiative, and work toward
          goals beyond school assignments. Working on projects related to technology, with guidance from teachers, can also help you learn
          how to use these tools effectively.
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
    question: "How to focus on studying? How should I study?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          This can be different from person to person. What helps me is minimizing distractions while studying, for example by keeping my
          phone in another room, muting notifications, and having a quiet personal space. It also helps to start with shorter periods of
          focused study and gradually increase them over time. Setting a clear goal with a specific time limit can make studying feel more
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
          In school, I think the most important thing is to develop yourself and better understand who you are
          and what you enjoy. Standing out is not always only about what you do. It can also depend on the environment,
          the situation, and timing, things you cannot always control. High grades can often help create opportunities,
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
          have more time and freedom to explore. At that stage, there is usually less pressure to specialize, make career decisions,
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
          and each develops different skills. Being flexible and adaptable becomes very important. Some practical advice:
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
        {/* <p>
          You can read about how{" "}
          <a
            href="linkedinpost"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            mentoring
          </a>{" "}
          helped me shape my own plan.{" "}
        </p> */}
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
    question: "Is volunteering worth spending time? Scientific student teams or event organizing?",
    answer: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Every experience changes you, not only because of its title or structure, but also because of the timing, the people you meet,
          and the way you engage with it. I would say it is rarely too early to participate in student teams or organizations. There will
          always be reasons to think you are too busy, too inexperienced, or not ready enough. If you feel comfortable exploring different
          experiences, this can be a very valuable period to do so, especially before feeling pressure to specialize. Before joining, it is
          important to ask about the time commitment and responsibilities involved, just like in a job interview. This helps avoid
          misunderstandings and ensures that you can commit responsibly. The positive side is that the more effort you invest, the more you
          usually gain in terms of skills, confidence, and personal growth. This is not wasted time, even if it is not directly connected to
          your degree. University is not only about courses and exams. It is also about understanding yourself better and preparing for future work and life. 
        </p>
        <p>
         A scientific student team may give you research and technical experience, expose you to interdisciplinary work, help you collaborate with
         people working toward a common goal, introduce you to passionate people who may inspire you. This can be especially useful if you are
         considering specializing in that field. 
        </p>
        <p>
          An event organizing student team may help you develop responsibility and teamwork, teach you practical organization and communication skills,
          give you experience in leadership and coordination, help you understand how complex projects happen behind the scenes. One thing I personally
          learned from event organizing was that, as a participant, I only saw the final result. I did not realize the amount of planning, effort
          and coordination happening behind the scenes. That experience helped me understand why some events run smoothly and where others may have room for improvement. 
        </p>
        <p>
          Another advantage of student teams is that they involve many different roles, from human resources and marketing to technical work and operations. 
          Even if you are mainly interested in one role, you can learn a lot by observing and talking to people in other positions. Volunteering also allows
          you to meet people who are motivated by more than personal gain. These are often people who want to contribute, grow, collaborate, and support
          a shared goal. Building relationships with such people can become an important networking opportunity far beyond the team itself. 
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
          Education is not limited to academic knowledge. It also includes understanding where you come from, how history and culture shapes identity.
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
          As I do not work in academia, I do not have direct personal insight into the current PhD application landscape. My understanding is based on my applications, my personal research, and opinions from professors and PhD candidates. In recent years, due to geopolitical and economic instability, there has been increased pressure on research funding. This often results in fewer available positions, higher competitiveness, and more strict selection criteria.
        </p>
        <p>
          The PhD application process differs significantly between regions. In the United States, applicants typically apply to a department rather than a specific project. If accepted, there is usually a later process of matching with a supervisor and defining a research topic. In Europe, the system varies by country and institution. In some cases, you apply for a specific PhD project that is already defined, similar to a job position. In other cases, you contact a professor with an open position or propose a research topic yourself. Networking can be important in this context, as it helps you learn about available positions and connect with research groups.
        </p>
        <p>
          There are also differences in funding structures. For example, in countries such as Denmark, PhD candidates are considered employees and receive a salary. In contrast, in countries like the UK, PhD candidates are considered students and need to pay tuition fees. These fees are covered through scholarships or funded positions that also provide a stipend. After Brexit, some fully funded PhD positions in the UK have become more limited for non-UK students. The duration of PhD studies also varies. In the United States, they often last around five years, while in Europe they typically range from three to four years, depending on the country and program structure.
        </p>
        <p>
           In Greece, some PhD projects are not funded, while others are supported through collaborations with industry, research institutions, or European Union funding programs. Many candidates combine research with teaching or assistant duties depending on the institution. Some also take part-time jobs to cover their living expenses.
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