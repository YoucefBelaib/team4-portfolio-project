import type { MemberData } from "../../interfaces/member";

const MemberDescription = ({ member }: { member: MemberData }) => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 md:h-40 md:w-40 border-4 border-white dark:border-gray-800 shadow-lg"
            style={{ backgroundImage: `url(${member.photo_url})` }}
          ></div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {member.name} {member.lastname}
          </h1>
          <p className="text-lg text-primary font-medium">{member.role}</p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Based in {member.city}, {member.country}
          </p>
        </div>
      </section>
      <section>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center md:text-left">
          {member.bio}
        </p>
      </section>
    </>
  );
};

export default MemberDescription;
