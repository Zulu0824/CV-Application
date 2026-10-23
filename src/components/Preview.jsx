export function Preview({ personal }) {
  return (
    <section className="preview">
      <h1>{personal.fullName || "Your Name"}</h1>
      {personal.email && <p>{personal.email}</p>}
      {personal.phone && <p>{personal.phone}</p>}
    </section>
  );
}
