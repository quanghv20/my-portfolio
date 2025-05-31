import { personalInfo } from "@/constants/personalInfo";
import AppButton from "./AppButton";
import Avatar from "./Avatar";
import HeroHeading from "./HeroHeading";
import Paragraph from "./Paragraph";

export default function HeroSection() {
  return (
    <>
      <div className="flex justify-between">
        <Avatar />
        <div className="hidden sm:block">
          <AppButton
            icon={
              <svg
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="h-4 w-4 stroke-white transition group-hover:stroke-white group-active:stroke-white dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
              >
                <path
                  d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            Download CV
          </AppButton>
        </div>
      </div>
      <div className="max-w-3xl mt-4" style={{ maxWidth: 800 }}>
        <HeroHeading text={personalInfo?.titles?.mainTitle} />
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {personalInfo?.titles?.subTitle}
        </h2>
        <div className="mt-6">
          <Paragraph>
            I’m Quang Cối, a web developer with over 2 years of hands-on
            experience in building modern web applications using <b>ReactJS</b>{" "}
            and <b>NodeJS</b>.
          </Paragraph>

          <Paragraph>
            I have a solid background in working on real-world projects, along
            with strong skills in{" "}
            <b>teamwork, self-learning, problem-solving,</b> and{" "}
            <b>time management</b>. I’m also confident in my ability to work
            effectively under pressure and deliver results on time.
          </Paragraph>
        </div>
        <div className="mt-6 flex gap-6">
          {personalInfo?.socialLinks?.map((item, index: number) => {
            return (
              <a
                key={index}
                className="group -m-1 p-1"
                aria-label="Follow on X"
                href={item.link}
                target="_blank"
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
