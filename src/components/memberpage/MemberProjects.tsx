import type { MemberData } from "../../interfaces/member";

const MemberProjects = ({ member }: { member: MemberData }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {member.projects && member.projects.length > 0 ? (
          member.projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div
                className="w-full bg-gray-200 dark:bg-gray-700 aspect-video bg-cover bg-center"
                style={{
                  backgroundImage: project.photo_url
                    ? `url(${project.photo_url})`
                    : "none",
                }}
              ></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {project.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No projects added yet</p>
        )}
      </div>
    </section>
  );
};

export default MemberProjects;
