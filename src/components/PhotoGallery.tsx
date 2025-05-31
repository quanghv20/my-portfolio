import Image from "next/image";
import { personalInfo } from "@/constants/personalInfo";

export default function PhotoGallery() {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
          {personalInfo?.photoGallery?.map((imgUrl: string, index: number) => {
            return (
              <div
                key={index}
                className={`relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 ${
                  index % 2 === 0 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <Image
                  alt=""
                  loading="lazy"
                  width="3744"
                  height="5616"
                  decoding="async"
                  data-nimg="1"
                  className="absolute inset-0 h-full w-full object-cover"
                  sizes="(min-width: 640px) 18rem, 11rem"
                  src={imgUrl}
                  unoptimized
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
