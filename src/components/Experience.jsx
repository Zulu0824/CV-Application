import { CollapsibleSection } from "./CollapsibleSection";

export function Experience({
  entries,
  onChange,
  onAdd,
  onRemove,
  onPointChange,
  onPointAdd,
  onPointRemove,
}) {
  function handleChange(id) {
    return (e) => onChange(id, e.target.name, e.target.value);
  }

  return (
    <CollapsibleSection title="Experience">
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={entry.id} className="entry">
            <div className="entry-header">
              <h3>Experience {index + 1}</h3>
              <button
                type="button"
                className="remove-btn"
                onClick={() => onRemove(entry.id)}
              >
                Remove
              </button>
            </div>

            <div className="personal-info-container">
              <label>
                Company Name
                <input
                  type="text"
                  name="company"
                  value={entry.company}
                  onChange={handleChange(entry.id)}
                  placeholder="Example Technologies"
                />
              </label>
              <label>
                Role
                <input
                  type="text"
                  name="role"
                  value={entry.role}
                  onChange={handleChange(entry.id)}
                  placeholder="Software Engineer"
                />
              </label>
              <div className="date-row">
                <label>
                  Start
                  <input
                    type="month"
                    name="startDate"
                    value={entry.startDate}
                    onChange={handleChange(entry.id)}
                  />
                </label>
                <label>
                  End
                  <input
                    type="month"
                    name="endDate"
                    min={entry.startDate}
                    value={entry.endDate}
                    onChange={handleChange(entry.id)}
                  />
                </label>
              </div>

              <div className="points">
                <span className="points-label">Job Description</span>
                <ul className="points-list">
                  {entry.points.map((point, pointIndex) => (
                    <li key={point.id}>
                      <textarea
                        rows={2}
                        value={point.text}
                        onChange={(e) =>
                          onPointChange(entry.id, point.id, e.target.value)
                        }
                        placeholder="Describe a responsibility or achievement"
                        aria-label={`Job description point ${pointIndex + 1}`}
                      />
                      <button
                        type="button"
                        className="remove-btn"
                        onClick={() => onPointRemove(entry.id, point.id)}
                        aria-label={`Remove point ${pointIndex + 1}`}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="add-point-btn"
                  onClick={() => onPointAdd(entry.id)}
                >
                  + Add point
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Experience
      </button>
    </CollapsibleSection>
  );
}
