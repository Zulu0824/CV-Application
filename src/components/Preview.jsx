import { MailIcon, PhoneIcon, LinkedInIcon, GitHubIcon } from "./Icons";

function withProtocol(url) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`;
}

// "2023-08" -> "Aug 2023"
function formatMonth(value) {
  if (!value) return "";
  const [year, month] = value.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
}

function formatRange(start, end) {
  if (start && end) return `${formatMonth(start)} – ${formatMonth(end)}`;
  if (start) return `${formatMonth(start)} – Present`;
  return formatMonth(end);
}

export function Preview({ personal, education, experience, skills }) {
  const hasContact =
    personal.email || personal.phone || personal.linkedin || personal.github;

  const visibleEducation = education.filter(
    (entry) => entry.school || entry.degree || entry.startDate || entry.endDate,
  );

  const visibleExperience = experience
    .map((entry) => ({
      ...entry,
      points: entry.points.filter((point) => point.text.trim()),
    }))
    .filter(
      (entry) =>
        entry.company ||
        entry.role ||
        entry.startDate ||
        entry.endDate ||
        entry.points.length > 0,
    );

  const visibleSkills = skills.filter((skill) => skill.text.trim());

  return (
    <section className="preview">
      <header className="preview-header">
        <h1>{personal.fullName || "Your Name"}</h1>
        {personal.role && <p className="role">{personal.role}</p>}
        {hasContact && (
          <div className="contact">
            {personal.email && (
              <span className="contact-item">
                <MailIcon />
                {personal.email}
              </span>
            )}
            {personal.phone && (
              <span className="contact-item">
                <PhoneIcon />
                {personal.phone}
              </span>
            )}
            {personal.linkedin && (
              <a
                className="contact-link"
                href={withProtocol(personal.linkedin)}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            )}
            {personal.github && (
              <a
                className="contact-link"
                href={withProtocol(personal.github)}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
            )}
          </div>
        )}
      </header>

      {visibleEducation.length > 0 && (
        <section className="preview-block">
          <h2>Education</h2>
          {visibleEducation.map((entry) => (
            <div key={entry.id} className="preview-entry">
              <div className="preview-entry-row">
                <span className="preview-entry-title">{entry.school}</span>
                <span className="preview-entry-dates">
                  {formatRange(entry.startDate, entry.endDate)}
                </span>
              </div>
              {entry.degree && <p>{entry.degree}</p>}
            </div>
          ))}
        </section>
      )}

      {visibleExperience.length > 0 && (
        <section className="preview-block">
          <h2>Experience</h2>
          {visibleExperience.map((entry) => (
            <div key={entry.id} className="preview-entry">
              <div className="preview-entry-row">
                <span className="preview-entry-title">{entry.company}</span>
                <span className="preview-entry-dates">
                  {formatRange(entry.startDate, entry.endDate)}
                </span>
              </div>
              {entry.role && <p>{entry.role}</p>}
              {entry.points.length > 0 && (
                <ul className="preview-points">
                  {entry.points.map((point) => (
                    <li key={point.id}>{point.text}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      )}

      {visibleSkills.length > 0 && (
        <section className="preview-block">
          <h2>Skills</h2>
          <ul className="preview-points">
            {visibleSkills.map((skill) => (
              <li key={skill.id}>{skill.text}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
