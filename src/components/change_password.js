import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { changePassword } from '../actions/index';
import { connect } from 'react-redux';
import NavBarUnAuthed from './nav_bar_unauthed';
class ChangePassword extends Component {

    onSubmit(values) {
        console.log('Form has been submited:', values);
        this.props.changePassword(values, () => {
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
                <div className="row">
                    <div className="col-md-5 col-md-offset-4 well well-lg">
                        <div id="login">
                            <h1>Change Password</h1>
                            <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                                <Field
                                    name="password"
                                    label="New Password"
                                    type="password"
                                    component={this.renderField} />
                                <Field
                                    name="repassword"
                                    label="Confirm New Password"
                                    type="password"
                                    component={this.renderField} />
                                <button type="submit" className="btn btn-primary">Change  </button>
                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
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
    form: 'ChangePasswordForm'
})(connect(null, { changePassword })(ChangePassword));