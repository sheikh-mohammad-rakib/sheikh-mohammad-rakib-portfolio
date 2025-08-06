import { Link } from 'react-router-dom';
// UI Button component
export default function Button({ children, as, href, ...props }) {
  if (as === 'a' && href) {
    return <Link className="btn glass" to={href} {...props}>{children}</Link>;
  }
  if (as === 'a' && href) {
    return <a className="btn glass" href={href} {...props}>{children}</a>;
  }
  return <button className="btn glass" {...props}>{children}</button>;
}
