import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createUser } from '../actions/index';
import { connect } from 'react-redux';

class CreateAccount extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
        this.props.createUser(values, () => {
            this.props.history.push('/');
        });
    }

    renderField(field) {

        // Destructure field and meta for cleaner code 
        const { meta: { touched, error } } = field;
        // Check if validation errors exist and set class
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="email"
                    label="Email"
                    type="text"
                    component={this.renderField} />
                <Field
                    name="password"
                    label="Password"
                    type="password"
                    component={this.renderField} />
                <Field
                    name="repassword"
                    label="Confirm Password"
                    type="password"
                    component={this.renderField} />
                <button type="submit" className="btn btn-primary">Register  </button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
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
    form: 'CreateAccountForm'
})(connect(null, { createUser })(CreateAccount));