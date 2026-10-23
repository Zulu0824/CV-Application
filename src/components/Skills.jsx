import { CollapsibleSection } from "./CollapsibleSection";

export function Skills({ skills, onChange, onAdd, onRemove }) {
  return (
    <CollapsibleSection title="Skills">
      <div className="points">
        <ul className="points-list skills-list">
          {skills.map((skill, index) => (
            <li key={skill.id}>
              <input
                type="text"
                value={skill.text}
                onChange={(e) => onChange(skill.id, e.target.value)}
                placeholder="e.g. React, JavaScript, Git"
                aria-label={`Skill ${index + 1}`}
              />
              <button
                type="button"
                className="remove-btn"
                onClick={() => onRemove(skill.id)}
                aria-label={`Remove skill ${index + 1}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button type="button" className="add-btn" onClick={onAdd}>
        + Add Skill
      </button>
    </CollapsibleSection>
  );
}
