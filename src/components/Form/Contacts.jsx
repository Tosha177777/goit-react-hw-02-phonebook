import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import Title from 'components/Title/Title';

export default class Contacts extends Component {
  handleSubmit = (values, { resetForm }) => {
    const { name } = values;
    const { number } = values;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.handleContact(newContact);
    resetForm();
  };

  render() {
    return (
      <>
        <Title title={'Phonebook'}>
          <Formik
            initialValues={{ name: '', number: '' }}
            onSubmit={this.handleSubmit}
          >
            <Form>
              <label htmlFor="name">
                Name
                <Field type="text" name="name" required />
              </label>
              <label htmlFor="tel">
                Number
                <Field type="tel" name="number" required />
              </label>
              <button type="submit">Add</button>
            </Form>
          </Formik>
        </Title>
      </>
    );
  }
}
