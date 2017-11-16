import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginUser } from '../actions/index';

class Login extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
        this.props.loginUser(values, () => {
            console.log('trying to login');
            this.props.history.push('/shoppinglists');
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
            <div>
                <div>Welcome, Login Here</div>
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
                    <button type="submit" className="btn btn-primary">Login  </button>
                </form>
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
    form: 'LoginForm'
})(connect(null, { loginUser })(Login));