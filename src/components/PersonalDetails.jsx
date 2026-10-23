export function PersonalDetails({ value, changedValue }) {
  function handleChange(e) {
    changedValue(e.target.value, e.target.name);
  }
  return (
    <section className="personal-details">
      <h2>Personal Details</h2>
      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={value.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          id="email"
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
          id="phone"
          value={value.phone}
          placeholder="9876543210"
          onChange={handleChange}
        />
      </label>
    </section>
  );
}
