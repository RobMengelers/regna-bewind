import "./PageHeading.css";

export default function PageHeading({ label, title, children }) {
  return (
    <section className="page-heading">
      <div className="container">
        <p className="eyebrow">{label}</p>
        <h1>{title}</h1>
        <p className="lead">{children}</p>
      </div>
    </section>
  );
}
