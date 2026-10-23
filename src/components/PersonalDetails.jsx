import { CollapsibleSection } from "./CollapsibleSection";

export function PersonalDetails({ value, changedValue }) {
  function handleChange(e) {
    changedValue(e.target.value, e.target.name);
  }

  return (
    <CollapsibleSection title="Personal Details">
      <div className="personal-info-container">
        <label>
          Full Name
          <input
            type="text"
            name="fullName"
            value={value.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
        </label>
        <label>
          Role
          <input
            type="text"
            name="role"
            value={value.role}
            onChange={handleChange}
            placeholder="Frontend Developer"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
            placeholder="john.doe@email.com"
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={value.phone}
            onChange={handleChange}
            placeholder="9876543210"
          />
        </label>
        <label>
          LinkedIn
          <input
            type="url"
            name="linkedin"
            value={value.linkedin}
            onChange={handleChange}
            placeholder="linkedin.com/in/johndoe"
          />
        </label>
        <label>
          GitHub
          <input
            type="url"
            name="github"
            value={value.github}
            onChange={handleChange}
            placeholder="github.com/johndoe"
          />
        </label>
      </div>
    </CollapsibleSection>
  );
}
