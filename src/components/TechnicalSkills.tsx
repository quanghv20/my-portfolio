"use client";

import { useState } from "react";
import TextSubHeading from "./TextSubHeading";
import Text from "./Text";

export default function TechnicalSkills() {
  const technicalSkills = [
    {
      category: "Core Web Technologies",
      skills: ["HTML5, CSS3, SCSS", "JavaScript (ES6+)", "TypeScript"],
    },
    {
      category: "Front-End",
      skills: [
        "ReactJS, NextJS",
        "Redux Toolkit",
        "Redux Persist",
        "Ant Design",
        "TailwindCSS",
        "Bootstrap5",
        "Responsive Web Design",
        "Middleware Integration",
      ],
    },
    {
      category: "Back-End",
      skills: ["NodeJS, NestJS", "TypeORM", "MySQL, MongoDB"],
    },
    {
      category: "Version Control Systems",
      skills: ["Git", "GitHub", "GitLab", "SVN"],
    },
  ];

  // Khai báo kiểu rõ ràng cho collapsed
  // const [collapsed, setCollapsed] = useState<{ [key: number]: boolean }>({});

  // const toggleCollapse = (index: number) => {
  //   setCollapsed((prev) => ({ ...prev, [index]: !prev[index] }));
  // };

  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
      {/* Div chứa tiêu đề với background xám mờ */}
      <div
        className="flex justify-center items-center bg-teal-500 dark:bg-zinc-800/90 p-3 rounded-lg cursor-pointer"
        onClick={handleToggle}
      >
        <svg
          className={`w-6 h-6 text-white dark:text-white transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
          />
        </svg>
        <span className="ml-3 text-sm sm:text-base leading-normal font-medium text-white dark:text-zinc-100">
          Technical Skills
        </span>
      </div>

      {/* Hiển thị kỹ năng khi isOpen là true */}
      {isOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {technicalSkills.map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 dark:border-gray-700 dark:bg-transparent p-4 rounded-lg"
            >
              <TextSubHeading className="text-lg font-semibold">
                {item.category}
              </TextSubHeading>
              <ul className="list-disc mt-2 list-inside text-zinc-500 dark:text-zinc-400 text-sm">
                {item.skills.map((skill, i) => (
                  <li key={i} className="mt-1">
                    <Text>{skill}</Text>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // return (
  //     <div className="rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
  //         <h2 className="flex text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
  //             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  //                 <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z" />
  //             </svg>
  //             <TextSubHeading className="ml-3">Technical Skills</TextSubHeading>
  //         </h2>

  //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  //             {technicalSkills.map((item, index) => (
  //                 <div key={index}>
  //                     <TextSubHeading>{item.category}</TextSubHeading>
  //                     <ul className="list-disc mt-2 list-inside text-zinc-500 dark:text-zinc-400 text-sm">
  //                         {item.skills.map((skill, i) => (
  //                             <li key={i} className="mt-1">
  //                                 <Text>{skill}</Text>
  //                             </li>
  //                         ))}
  //                     </ul>
  //                 </div>
  //             ))}
  //         </div>
  //     </div>
  // );
}
