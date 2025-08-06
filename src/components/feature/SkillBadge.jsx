// SkillBadge component
export default function SkillBadge({ skill, level }) {
  return (
    <div className="flex items-center gap-2 glass-card px-3 py-1 rounded-full">
      <span className="font-medium">{skill}</span>
      <span className="text-xs opacity-70">{level}</span>
    </div>
  );
}
