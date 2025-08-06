// ProjectCard component
export default function ProjectCard({ project, onClick }) {
  return (
    <div className="glass-card rounded-xl p-4 cursor-pointer hover:scale-105 transition-transform" onClick={onClick}>
      <img src={project.image} alt={project.title} className="rounded-lg mb-2 w-full h-40 object-cover" />
      <h3 className="font-bold text-lg mb-1">{project.title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge glass-card px-2 py-1 text-xs">{tech}</span>
        ))}
      </div>
    </div>
  );
}
