// UI Button component
export default function Button({ children, as, href, ...props }) {
  if (as === 'a' && href) {
    return <a className="btn glass" href={href} {...props}>{children}</a>;
  }
  return <button className="btn glass" {...props}>{children}</button>;
}
