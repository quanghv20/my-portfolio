import { personalInfo } from "@/constants/personalInfo";
import HeroHeading from "@/components/HeroHeading";
import Paragraph from "@/components/Paragraph";
import TextSubHeading from "@/components/TextSubHeading";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20 m-auto">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              alt=""
              loading="lazy"
              width="800"
              height="800"
              decoding="async"
              data-nimg="1"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              sizes="(min-width: 1024px) 32rem, 20rem"
              src={personalInfo?.about?.imgUrl}
              unoptimized
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <HeroHeading text={personalInfo?.about?.introTitle} />
          {personalInfo?.about?.introDesc?.map((item, index: number) => {
            return <Paragraph key={index} content={item} />;
          })}
        </div>
        <div className="lg:pl-20 m-auto">
          <ul role="list">
            {personalInfo?.socialLinks?.map((item, index: number) => {
              return (
                <li key={index} className={`flex ${index !== 0 ? "mt-4" : ""}`}>
                  <a
                    className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                    href={item?.link}
                    target="_blank"
                  >
                    {item?.icon}
                    <TextSubHeading className="ml-3">
                      Follow on {item?.name}
                    </TextSubHeading>
                  </a>
                </li>
              );
            })}
            <li className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex">
              <a
                className="group flex items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                href="mailto:quanghv20@gmail.com"
                target="_blank"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
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
                    strokeWidth="2"
                    d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                  />
                </svg>
                <TextSubHeading className="ml-3">
                  {personalInfo?.email}
                </TextSubHeading>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
