// UI Modal component
export default function Modal({ open, onClose, children }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white dark:bg-neutral glass-card rounded-xl p-6 relative">
        <button className="absolute top-2 right-2 btn btn-sm" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
}
