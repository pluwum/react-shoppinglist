import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class ShoppingListForm extends Component {
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
    const { handleSubmit, onSubmit, title } = this.props;
    if (!title) {
      return <div>Form Was Not Configured Properly. Please Add title</div>;
    }

    return (
      <div>
        <section className="content-header">
          <h1>
            {title}
            <small>Shoppinglists</small>
          </h1>
          <ol className="breadcrumb">
            <li>
              <Link to="/shoppinglists">
                <i className="fa fa-dashboard" /> Shoppinglists
              </Link>
            </li>
            <li className="active">Form</li>
          </ol>
        </section>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Fill in the following fields</h3>
                </div>
                <form role="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="box-body">
                    <Field
                      name="name"
                      label="Name"
                      type="text"
                      component={this.renderField}
                    />
                    <Field
                      name="description"
                      label="Description"
                      type="text"
                      component={this.renderField}
                    />
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                      Submit
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
  if (!values.name || values.name.length < 3) {
    errors.name = "Enter title that is more than three characters !";
  }

  return errors;
}

export default reduxForm({
  validate,
  form: "ShoppingListForm"
})(ShoppingListForm);
