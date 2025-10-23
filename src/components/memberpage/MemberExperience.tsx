import type { MemberData } from "../../interfaces/member";

const MemberExperience = ({ member }: { member: MemberData }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Experience
      </h2>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-4">
        
        {
          member.experiences.length>0 ? 
        
        member.experiences.map((experience) => (
          <div className="mb-8 ml-8">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-primary rounded-full -left-4 ring-8 ring-background-light dark:ring-background-dark">
              <span className="material-symbols-outlined text-white text-lg">
                {experience.type}
              </span>
            </span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {experience.start_date} - {experience.end_date}
            </time>
          </div>
        )) : <p  className="text-gray-600 dark:text-gray-400">No experiences added yet</p>}
      </div>
    </section>
  );
};

export default MemberExperience;
