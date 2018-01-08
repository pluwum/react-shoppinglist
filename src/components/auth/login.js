import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { loginUser } from "../../actions/index";
import { Link } from "react-router-dom";

class Login extends Component {
  componentWillUnmount() {
    document.body.classList.remove("login-page");
  }
  componentDidMount() {
    document.body.classList.add("login-page");
  }

  onSubmit(values) {
    console.log("Form has been submited:", values);
    this.props.loginUser(values, () => {
      console.log("trying to login", this.props.history);
      this.props.history.push("/shoppinglists");
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
      <div className="login-box">
        <div className="login-logo">
          <Link to="">
            <b>Shopping</b>LIST
          </Link>
        </div>
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start</p>

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              name="email"
              label="Email"
              type="text"
              component={this.renderField}
              icon="glyphicon-envelope"
            />
            <Field
              name="password"
              label="Password"
              type="password"
              icon="glyphicon-lock"
              component={this.renderField}
            />

            <div className="row">
              <div className="col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>

          <Link to="/shoppinglists/auth/register" className="text-center">
            Register For an Account
          </Link>
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.email || values.email.length < 3) {
    errors.email = "Enter valid email address!";
  }

  if (!values.password || values.password.length < 3) {
    errors.password = "Enter a valid password!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "LoginForm"
})(connect(null, { loginUser })(Login));
