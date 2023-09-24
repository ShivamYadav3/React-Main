import React, { useState } from "react";

function DynamicForm() {
  const [form, setForm] = useState([]);
  const [field, setField] = useState({
    type: "",
    placeholder: "",
    default: "",
    label: "",
  });
  const [print, SetPrint] = useState({});

  const Change = (e) => {
    const { name, value } = e.target;
    setField((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const MakeForm = () => {
    setForm((prev) => {
      return [...prev, field];
    });
  };

  const Inner = (e) => {
    const { name, value } = e.target;
    SetPrint((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const Final = () => {
    console.log(print);
  };

  return (
    <div>
      <div>
        <select name="type" id="" onChange={Change}>
          <option value=""></option>
          <option value="text">name</option>
          <option value="password">password</option>
          <option value="email">email</option>
          <option value="number">number</option>
        </select>
        <input
          type="text"
          name="placeholder"
          placeholder="placeholder"
          onChange={Change}
        />
        <input
          type="text"
          name="default"
          placeholder="value"
          onChange={Change}
        />
        <input type="text" name="label" placeholder="label" onChange={Change} />
        <button onClick={MakeForm}>Add</button>
      </div>
      {form.map((data, i) => {
        return (
          <div key={i}>
            <div>{data.label}</div>
            <div>
              <input
                type={data.type}
                placeholder={data.placeholder}
                // value={ data.default}
                name={data.type}
                onChange={Inner}
              />
            </div>
          </div>
        );
      })}
      {form.length > 3 && <button onClick={Final}>Submit</button>}
    </div>
  );
}

export default DynamicForm;
