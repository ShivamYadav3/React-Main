import React, { useEffect, useReducer, useState } from "react";

const initialState = JSON.parse(localStorage.getItem("data")) || {
  firstName: "",
  lastName: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.value };
    case "lastName":
      return { ...state, lastName: action.value };
    case "email":
      return { ...state, email: action.value };
    default:
      return state;
  }
};

const FormComponentV2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
    console.log(state);
  }, [state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", state);
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
          value={state.firstName}
          onChange={(e) =>
            dispatch({ type: "firstName", value: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={state.lastName}
          onChange={(e) =>
            dispatch({ type: "lastName", value: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={state.email}
          onChange={(e) => dispatch({ type: "email", value: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
      <div>{state.firstName}</div>
      <div>{state.lastName}</div>
      <div>{state.email}</div>
    </form>
  );
};

export default FormComponentV2;

// Ankit Bhai

// import { useReducer, useEffect } from "react";

// const initialState = JSON.parse(localStorage.getItem("formData")) || {
//   firstName: { value: "", type: "text" },
//   lastName: { value: "", type: "text" },
//   email: { value: "", type: "text" },
// };

// const formReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE":
//       return {
//         ...state,
//         [action.field]: {
//           ...state[action.field],
//           value: action.value,
//         },
//       };
//     default:
//       return state;
//   }
// };

// const FormComponent = () => {
//   const [state, dispatch] = useReducer(formReducer, initialState);

//   // Save form data to localStorage whenever the state changes
//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(state));
//   }, [state]);

//   // Handler for updating form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: "CHANGE", field: name, value });
//   };

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can do something with the form data here, like sending it to an API or processing it.
//     console.log("Form data submitted:", state);
//   };

//   console.log("rerender");
//   return (
//     <form onSubmit={handleSubmit}>
//       {Object.keys(state).map((fieldName) => {
//         const field = state[fieldName];
//         return (
//           <div key={fieldName}>
//             <label htmlFor={fieldName}>{fieldName}:</label>
//             <input
//               type={field.type}
//               id={fieldName}
//               name={fieldName}
//               value={field.value}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       })}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormComponent;

// Vikas C9

// import { useReducer, useEffect } from "react";
// export const initialState = JSON.parse(localStorage.getItem("formData")) || [
//   { name: "firstName", value: "", type: "text" },
//   { name: "lastName", value: "", type: "text" },
//   { name: "email", value: "", type: "text" },
// ];

// export const changeReducer = (state, action) => {
//   switch (action.type) {
//     case "change":
//       return state.map((elm) => {
//         if (elm.name === action.field) {
//           elm.value = action.value;
//         }
//         return elm;
//       });
//     default:
//       return state;
//   }
// };

// const FormComponent = () => {
//   // Initialize state as an object with properties for firstName, lastName, and email

//   const [inputFeilds, setinputFeilds] = useReducer(changeReducer, initialState);

//   // Handler for updating form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setinputFeilds({ type: "change", field: name, value: value });

//   };

//   useEffect(() => {
//     localStorage.setItem("formData", JSON.stringify(inputFeilds));
//   }, [inputFeilds]);

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can do something with the form data here, like sending it to an API or processing it.
//     console.log("Form data submitted:", inputFeilds);
//   };

//   console.log("rerender");
//   return (
//     <form onSubmit={handleSubmit}>
//       {inputFeilds.map((elm) => {
//         return (
//           <div key={elm.name}>
//             <label htmlFor={elm.name}>{elm.name}:</label>
//             <input
//               type={elm.type}
//               id={elm.name}
//               name={elm.name}
//               value={elm.value}
//               onChange={handleChange}
//             />
//           </div>
//         );
//       })}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormComponent;
