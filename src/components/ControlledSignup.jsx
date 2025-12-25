import React, { useState } from "react";

export default function ControlledSignup() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Email:{" "}
          <input name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Password:{" "}
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}
