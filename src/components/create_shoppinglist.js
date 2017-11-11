import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class CreateShoppingList extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <div>
                Create New shopping List
                <form>
                    <Field
                        name="name"
                        label="Name"
                        type="text"
                        component={this.renderField} />
                    <Field
                        name="description"
                        label="Description"
                        type="text"
                        component={this.renderField} />
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.title || values.title.length < 3) {
        errors.title = "Enter title that is more than three characters !";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'CreateShoppingListForm'
})(CreateShoppingList);