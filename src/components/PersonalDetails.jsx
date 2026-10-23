export function PersonalDetails({ value, changedValue }) {
  return (
    <section className="personal-details">
      <h2>Personal Details</h2>
      <label>
        Full Name
        <input
          type="text"
          name="fullName"
          id="fullName"
          placeholder="John Doe"
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="john.doe@email.com"
        />
      </label>
      <label>
        Phone
        <input type="tel" name="phone" id="phone" placeholder="9876543210" />
      </label>
    </section>
  );
}
