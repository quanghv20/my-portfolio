import Image from "next/image";
import { personalInfo } from "@/constants/personalInfo";
import TextSubHeading from "./TextSubHeading";
import Text from "./Text";
import AppButton from "./AppButton";

export default function WorkExperience() {
  return (
    <>
      <div className="rounded-2xl p-6 border border-gray-300 dark:border-gray-700">
        {personalInfo?.workExperiences?.map((item, index: number) => {
          return (
            <div key={index} className={`${index === 0 ? "mb-8" : ""}`}>
              <h2 className="flex text-base font-semibold text-zinc-900 dark:text-zinc-100">
                {item?.icon}
                <TextSubHeading className="ml-3">{item?.name}</TextSubHeading>
              </h2>
              <ol className="mt-4 space-y-4">
                {item?.history?.map((item, index: number) => {
                  return (
                    <li
                      key={index}
                      className="flex gap-4 items-center pt-1 pb-1"
                    >
                      <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                        <Image
                          alt=""
                          loading="lazy"
                          width="32"
                          height="32"
                          decoding="async"
                          data-nimg="1"
                          className="h-10 w-10 rounded-full"
                          src={item?.logoCompany}
                        />
                      </div>
                      <dl className="flex flex-auto flex-wrap gap-1">
                        <dt className="sr-only">Role</dt>
                        <dd className="">
                          <TextSubHeading>{item?.company}</TextSubHeading>
                        </dd>
                        <dt className="sr-only">Date</dt>
                        <dd className="ml-auto text-base text-zinc-400 dark:text-zinc-500">
                          <time dateTime={item?.startDate}>
                            <Text>{item?.startDate}</Text>
                          </time>{" "}
                          <span aria-hidden="true">—</span>{" "}
                          <time dateTime={item?.endDate}>
                            <Text>{item?.endDate}</Text>
                          </time>
                        </dd>
                        <dt className="sr-only">Company</dt>
                        <dd className="w-full flex-none text-base text-zinc-500 dark:text-zinc-400">
                          <Text>{item?.role}</Text>
                        </dd>
                      </dl>
                    </li>
                  );
                })}
              </ol>
            </div>
          );
        })}
        <AppButton
          className="w-full mt-6"
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
    </>
  );
}
