type PropsType = {
  text: string;
};

export default function HeroHeading({ text }: PropsType) {
  return (
    <h1 className="leading-tight text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
      {text}
    </h1>
  );
}
