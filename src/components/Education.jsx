import { CollapsibleSection } from "./CollapsibleSection";

export function Education({ entries, onChange, onAdd, onRemove }) {
  function handleChange(id) {
    return (e) => onChange(id, e.target.name, e.target.value);
  }

  return (
    <CollapsibleSection title="Education">
      <div className="entries">
        {entries.map((entry, index) => (
          <div key={entry.id} className="entry">
            <div className="entry-header">
              <h3>Education {index + 1}</h3>
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
                School / College Name
                <input
                  type="text"
                  name="school"
                  value={entry.school}
                  onChange={handleChange(entry.id)}
                  placeholder="University of Example"
                />
              </label>
              <label>
                Degree
                <input
                  type="text"
                  name="degree"
                  value={entry.degree}
                  onChange={handleChange(entry.id)}
                  placeholder="B.Tech in Computer Science"
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
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Education
      </button>
    </CollapsibleSection>
  );
}
