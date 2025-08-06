// TestimonialCard component
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="glass-card rounded-xl p-4">
      <p className="italic mb-2">"{testimonial.quote}"</p>
      <div className="flex items-center gap-2">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-8 h-8 rounded-full" />
        <span className="font-semibold">{testimonial.name}</span>
        <span className="text-xs opacity-60">{testimonial.role}</span>
      </div>
    </div>
  );
}
