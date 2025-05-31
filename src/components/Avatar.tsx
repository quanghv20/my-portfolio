import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/constants/personalInfo";

export default function Avatar() {
  return (
    <>
      <div>
        <Link
          aria-label="Home"
          className="block h-20 w-20 origin-left pointer-events-auto"
          href="/"
        >
          <Image
            alt=""
            fetchPriority="high"
            width="512"
            height="512"
            decoding="async"
            data-nimg="1"
            className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-20 w-20"
            sizes="4rem"
            src={personalInfo?.avatarUrl}
          />
        </Link>
      </div>
    </>
  );
}
