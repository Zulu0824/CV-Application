import { useState } from "react";
import "./App.css";
import { InputSection } from "./components/InputSection";
import { Preview } from "./components/Preview";
import { getExampleData } from "./components/Exampledata";

function createEducation() {
  return {
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  };
}

function createPoint() {
  return { id: crypto.randomUUID(), text: "" };
}

function createExperience() {
  return {
    id: crypto.randomUUID(),
    company: "",
    role: "",
    startDate: "",
    endDate: "",
    points: [createPoint()],
  };
}

export default function App() {
  const [personal, setPersonal] = useState({
    fullName: "",
    role: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  const [education, setEducation] = useState(() => [createEducation()]);
  const [experience, setExperience] = useState(() => [createExperience()]);
  const [skills, setSkills] = useState(() => [createPoint()]);

  function handlePersonChange(value, name) {
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }

  // Education
  function handleEducationChange(id, name, value) {
    setEducation((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, [name]: value } : entry,
      ),
    );
  }

  function handleEducationAdd() {
    setEducation((prev) => [...prev, createEducation()]);
  }

  function handleEducationRemove(id) {
    setEducation((prev) => prev.filter((entry) => entry.id !== id));
  }

  // Experience
  function updateExperience(id, update) {
    setExperience((prev) =>
      prev.map((entry) => (entry.id === id ? update(entry) : entry)),
    );
  }

  function handleExperienceChange(id, name, value) {
    updateExperience(id, (entry) => ({ ...entry, [name]: value }));
  }

  function handleExperienceAdd() {
    setExperience((prev) => [...prev, createExperience()]);
  }

  function handleExperienceRemove(id) {
    setExperience((prev) => prev.filter((entry) => entry.id !== id));
  }

  // Job description points (belong to one experience entry)
  function handlePointChange(experienceId, pointId, text) {
    updateExperience(experienceId, (entry) => ({
      ...entry,
      points: entry.points.map((point) =>
        point.id === pointId ? { ...point, text } : point,
      ),
    }));
  }

  function handlePointAdd(experienceId) {
    updateExperience(experienceId, (entry) => ({
      ...entry,
      points: [...entry.points, createPoint()],
    }));
  }

  function handlePointRemove(experienceId, pointId) {
    updateExperience(experienceId, (entry) => ({
      ...entry,
      points: entry.points.filter((point) => point.id !== pointId),
    }));
  }

  // Skills
  function handleSkillChange(id, text) {
    setSkills((prev) =>
      prev.map((skill) => (skill.id === id ? { ...skill, text } : skill)),
    );
  }

  function handleSkillAdd() {
    setSkills((prev) => [...prev, createPoint()]);
  }

  function handleSkillRemove(id) {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  }

  // Example data
  function handleLoadExample() {
    const hasData =
      Object.values(personal).some(Boolean) ||
      education.some((e) => e.school || e.degree || e.startDate || e.endDate) ||
      experience.some(
        (e) =>
          e.company ||
          e.role ||
          e.startDate ||
          e.endDate ||
          e.points.some((p) => p.text),
      ) ||
      skills.some((s) => s.text);

    if (
      hasData &&
      !window.confirm(
        "This will replace everything you've entered with example data. Continue?",
      )
    ) {
      return;
    }

    const example = getExampleData();
    setPersonal(example.personal);
    setEducation(example.education);
    setExperience(example.experience);
    setSkills(example.skills);
  }

  return (
    <div className="page">
      <header className="app-header">
        <h1>CV Builder</h1>
        <div className="header-actions">
          <button
            type="button"
            className="header-btn"
            onClick={handleLoadExample}
          >
            Load Example Data
          </button>
        </div>
      </header>

      <div className="app">
        <section className="input-section">
          <div>
            <InputSection
              personal={personal}
              onPersonalChange={handlePersonChange}
              education={education}
              onEducationChange={handleEducationChange}
              onEducationAdd={handleEducationAdd}
              onEducationRemove={handleEducationRemove}
              experience={experience}
              onExperienceChange={handleExperienceChange}
              onExperienceAdd={handleExperienceAdd}
              onExperienceRemove={handleExperienceRemove}
              onPointChange={handlePointChange}
              onPointAdd={handlePointAdd}
              onPointRemove={handlePointRemove}
              skills={skills}
              onSkillChange={handleSkillChange}
              onSkillAdd={handleSkillAdd}
              onSkillRemove={handleSkillRemove}
            />
          </div>
        </section>
        <section className="preview-section">
          <div>
            <Preview
              personal={personal}
              education={education}
              experience={experience}
              skills={skills}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
