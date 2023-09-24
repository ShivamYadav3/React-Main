function capitalizeFirstCharacter(word) {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
}

const FormElement = ({ type, value, options, placeholder, name, onChange }) => {
  if (["text", "password", "email", "phone", "number", "date"].includes(type)) {
    return (
      <div>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div>
        <p>Select{capitalizeFirstCharacter(name)}</p>
        <select name={name} onChange={onChange}>
          <option>Please select</option>
          {options.map((item) => {
            return (
              <option value={item} key={item}>
                {capitalizeFirstCharacter(item)}
              </option>
            );
          })}
        </select>
      </div>
    );
  }

  if (type === "radio") {
    return (
      <div>
        {options.map((item) => {
          return (
            <div key={item}>
              <input type={type} name={name} value={item} onChange={onChange} />
              <span>{item}</span>
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};
export default FormElement;
