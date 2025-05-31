import AppButton from "./AppButton";
import Text from "./Text";
import TextSubHeading from "./TextSubHeading";

export default function SubscribeForm() {
  return (
    <>
      <form
        action="/thank-you"
        className="rounded-2xl p-6 border border-gray-300 dark:border-gray-700"
      >
        <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
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
          <TextSubHeading className="ml-3">Stay up to date</TextSubHeading>
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Text className="sm:text-sm">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </Text>
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <span className="flex min-w-0 flex-auto p-px">
            <input
              placeholder="Email address"
              aria-label="Email address"
              required={true}
              className="w-full appearance-none rounded-[calc(var(--radius-md)-1px)] bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 outline outline-zinc-900/10 placeholder:text-zinc-400 focus:ring-4 focus:ring-teal-500/10 focus:outline-teal-500 sm:text-sm dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:outline-zinc-700 dark:placeholder:text-zinc-500 dark:focus:ring-teal-400/10 dark:focus:outline-teal-400"
              type="email"
            />
          </span>
          <AppButton>Join</AppButton>
        </div>
      </form>
    </>
  );
}
