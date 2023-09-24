import { useState } from "react";
import FormElement from "./FormElement";

const DynamicForm = () => {
  const [form, setForm] = useState([
    {
      id: 1,
      name: "userName",
      value: "",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      id: 2,
      name: "emailAddress",
      value: "",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      id: 21,
      name: "password",
      value: "",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: 3,
      name: "city",
      value: "",
      type: "select",
      options: ["morena", "pune", "mumbai", "delhi"],
    },

    {
      id: 4,
      name: "gender",
      value: "",
      type: "radio",
      options: ["male", "female", "other"],
    },
  ]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) =>
      prevState.map((item) => {
        const field = { ...item };
        if (field.name === name) {
          field.value = value;
        }
        return field;
      })
    );
  };

  console.log(form);

  return (
    <div>
      {form.map((item) => {
        return <FormElement key={item.id} {...item} onChange={onInputChange} />;
      })}
    </div>
  );
};

export default DynamicForm;
