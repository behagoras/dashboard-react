/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import { Label, Input } from '../../components/Form/FormElements';

import Card from '../../components/Utils/Card/Card';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const App = () => (
  <>
    <h1>React Final Form - Simple Example</h1>
    <Card>
      <Form
        onSubmit={onSubmit}
        initialValues={{ firstName: 'larry', employed: true }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <Label>First Name</Label>
              <Field
                name="firstName"
                component={Input}
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <Label>Last Name</Label>
              <Field
                name="lastName"
                component={Input}
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <Label>Employed</Label>
              <Field name="employed" component="input" type="checkbox" />
            </div>

            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Card>
  </>
);

export default App;
