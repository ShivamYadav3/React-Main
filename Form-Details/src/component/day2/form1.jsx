import { Component } from "react";
import styled from "styled-components";

const Input = styled("input")`
  width: 100%;
`;

const DivFormElement = styled("div")`
  padding: 12px;
  margin-bottom: 6px;
  background-color: beige;
`;
class FormElement extends Component {
  /*  state = {
    firstName: "",
    lastName: "",
    email: "",
  }; */

  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;
    console.log("MeraEvent: ", value, name);
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, lastName, email } = this.state;
    console.log("Re-render");
    return (
      <>
        <DivFormElement className="form-element">
          <label htmlFor="firstName">First Name: {firstName}</label>
          <Input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            /* onChange={(meraEvent) => {
              this.handleInputChange(meraEvent);
            }} */
            onChange={this.handleInputChange}
          />
        </DivFormElement>

        <DivFormElement className="form-element">
          <label htmlFor="lastName">Last Name: {lastName}</label>
          <Input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            /* onChange={(meraEvent) => {
              this.handleInputChange(meraEvent);
            }} */
            onChange={this.handleInputChange}
          />
        </DivFormElement>

        <DivFormElement className="form-element">
          <label htmlFor="email">Email: {email}</label>
          <Input
            type="email"
            name="email"
            placeholder="Enter email address"
            /* onChange={(meraEvent) => {
              this.handleInputChange(meraEvent);
            }} */
            onChange={this.handleInputChange}
          />
        </DivFormElement>
      </>
    );
  }
}

export default FormElement;

