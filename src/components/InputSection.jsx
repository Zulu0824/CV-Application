import { PersonalDetails } from "./PersonalDetails";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Skills } from "./Skills";

export function InputSection({
  personal,
  onPersonalChange,
  education,
  onEducationChange,
  onEducationAdd,
  onEducationRemove,
  experience,
  onExperienceChange,
  onExperienceAdd,
  onExperienceRemove,
  onPointChange,
  onPointAdd,
  onPointRemove,
  skills,
  onSkillChange,
  onSkillAdd,
  onSkillRemove,
}) {
  return (
    <div className="input-stack">
      <PersonalDetails value={personal} changedValue={onPersonalChange} />
      <Education
        entries={education}
        onChange={onEducationChange}
        onAdd={onEducationAdd}
        onRemove={onEducationRemove}
      />
      <Experience
        entries={experience}
        onChange={onExperienceChange}
        onAdd={onExperienceAdd}
        onRemove={onExperienceRemove}
        onPointChange={onPointChange}
        onPointAdd={onPointAdd}
        onPointRemove={onPointRemove}
      />
      <Skills
        skills={skills}
        onChange={onSkillChange}
        onAdd={onSkillAdd}
        onRemove={onSkillRemove}
      />
    </div>
  );
}
