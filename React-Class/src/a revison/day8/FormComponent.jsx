import React, { useEffect, useState } from "react";

const FormComponent = () => {
  // Initialize state as an object with properties for firstName, lastName, and email
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const store = localStorage.getItem("data");
    const okk = JSON.parse(store);
    if (store) {
      setFormData(okk);
    }
    console.log(okk);
  }, []);

  // Handler for updating form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(formData));
  }, [formData]);
  //   console.log(JSON.stringify(formData));

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do something with the form data here, like sending it to an API or processing it.
    console.log("Form data submitted:", formData);
    localStorage.clear("data");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
