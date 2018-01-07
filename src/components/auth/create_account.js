import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { createUser } from "../../actions/index";
import { connect } from "react-redux";

class CreateAccount extends Component {
  componentWillUnmount() {
    document.body.classList.remove("register-page");
  }

  componentDidMount() {
    document.body.classList.add("register-page");
  }

  onSubmit(values) {
    console.log("Form has been submited:", values);
    this.props.createUser(values, () => {
      this.props.history.push("/");
    });
  }

  renderField(field) {
    // Destructure field and meta for cleaner code
    const { meta: { touched, error } } = field;
    // Check if validation errors exist and set class
    const className = `form-group has-feedback ${
      touched && error ? "has-danger" : ""
    }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
          placeholder={field.label}
        />
        <span className={`glyphicon ${field.icon} form-control-feedback`} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="register-box">
        <div className="register-logo">
          <a href="">
            <b>Shopping</b>LIST
          </a>
        </div>

        <div className="register-box-body">
          <p className="login-box-msg">Register for a new Account</p>

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="email"
              label="Email"
              type="email"
              component={this.renderField}
              icon="glyphicon-envelope"
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={this.renderField}
              icon="glyphicon-lock"
            />
            <Field
              name="repassword"
              label="Confirm Password"
              type="password"
              component={this.renderField}
              icon="glyphicon-log-in"
            />
            <div className="row">
              <div className="col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
          <Link to="/" className="text-center">
            I already have an account
          </Link>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email || values.email.length < 3) {
    errors.email = "Enter title that is more than three characters !";
  }

  if (!values.password || values.password.length < 3) {
    errors.password = "Enter title that is more than three characters !";
  }
  if (values.password != values.repassword) {
    errors.repassword = "Passwords do not match. Please verify!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "CreateAccountForm"
})(connect(null, { createUser })(CreateAccount));
