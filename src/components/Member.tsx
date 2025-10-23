import Footer from "./Footer";
import MemberDescription from "./memberpage/MemberDescription";
import MemberExperience from "./memberpage/MemberExperience";
import MemberProjects from "./memberpage/MemberProjects";
import MemberSkills from "./memberpage/MemberSkills";
import type { MemberData } from "../interfaces/member";

const Member = ({ member }: { member: MemberData }) => {
  return (
    <>
      <main className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10">
        <div className="w-full max-w-4xl space-y-12">
          <MemberDescription member={member} />
          <MemberSkills member={member} />
          <MemberExperience member={member} />
          <MemberProjects member={member} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Member;
