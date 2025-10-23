import { members } from "../../interfaces/member";
const TeamMembers = () => {
  return (
    <section>
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Meet the Team
        </h2>
        <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-400">
          The brilliant minds behind our success.
        </p>
      </div>
      <div className="mt-12 gap-8 flex flex-row justify-evenly">
        {members.map((member) => (
          <div className="flex flex-col items-center gap-4 text-center max-w-1/12">
            <div
              className="h-32 w-32 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${member.photo_url})` }}
            ></div>
            <div>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {member.name} {member.lastname}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
