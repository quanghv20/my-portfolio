import SubscribeForm from "./SubscribeForm";
import TechnicalSkills from "./TechnicalSkills";
import Timeline from "./Timeline";
import WorkExperience from "./WorkExperience";

export default function ProfileOverview() {
  return (
    <>
      <div className="mx-auto grid grid-cols-1 lg:max-w-none lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-8 mt-8 sm:mt-12">
        <div className="flex flex-col gap-8">
          <WorkExperience />
          <SubscribeForm />
        </div>
        <div>
          <Timeline />
        </div>
      </div>
      <div className="mt-8">
        <TechnicalSkills />
      </div>
    </>
  );
}
