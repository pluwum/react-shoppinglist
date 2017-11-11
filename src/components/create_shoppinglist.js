import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class CreateShoppingList extends Component {
    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control" type={field.type} {...field.input} />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }

    onSubmit(values) {
        console.log('Form has been submited:', values);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                Create New shopping List
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
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
    form: 'CreateShoppingListForm'
})(CreateShoppingList);