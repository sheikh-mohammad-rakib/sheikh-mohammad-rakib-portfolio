// UI Card component
export default function Card({ children, className = '' }) {
  return <div className={`glass-card rounded-xl p-6 ${className}`}>{children}</div>;
}
