import type { MemberData } from "../../interfaces/member";

const MemberSkills = ({ member }: { member: MemberData }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {member.skills.map((skill) => (
          <span className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MemberSkills;
