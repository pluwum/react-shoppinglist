import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { changePassword } from "../../actions/index";
import { connect } from "react-redux";

class ChangePassword extends Component {
  onSubmit(values) {
    console.log("Form has been submited:", values);
    this.props.changePassword(values, () => {
      this.props.history.push("/shoppinglists");
    });
  }

  renderField(field) {
    // Destructure field and meta for cleaner code
    const { meta: { touched, error } } = field;
    // Check if validation errors exist and set class
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type={field.type} {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <section className="content-header">
          <h1>
            Change account Password
            <small>user</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to="#">
                <i className="fa fa-dashboard" /> Home
              </Link>
            </li>
            <li>
              <Link to="#">Profile</Link>
            </li>
            <li className="active">Change Password</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Fill in the following fields</h3>
                </div>
                <form
                  role="form"
                  onSubmit={handleSubmit(this.onSubmit.bind(this))}
                >
                  <div className="box-body">
                    <Field
                      name="password"
                      label="New Password"
                      type="password"
                      component={this.renderField}
                    />
                    <Field
                      name="repassword"
                      label="Confirm New Password"
                      type="password"
                      component={this.renderField}
                    />
                  </div>

                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Change{" "}
                    </button>
                    <Link
                      to="/shoppinglists"
                      className="btn btn-danger pull-right"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

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
  form: "ChangePasswordForm"
})(connect(null, { changePassword })(ChangePassword));
