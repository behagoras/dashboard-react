/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Form, Field } from 'react-final-form';
import Card from '../../components/Utils/Card/Card';
import Button from '../../components/Atoms/Button';
import TitleBar from '../../components/Dashboard/TitleBar';
import { Label, Input } from '../../components/Form';

const onSubmit = async (values) => {
  alert(JSON.stringify(values));
};

const MyFormPage = () => {
  return (
    <>
      <TitleBar title="Add Property" actions={[]} />
      <Card>
        <Form
          onSubmit={onSubmit}
          initialValues={{ stage: '1' }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Basic Information</h2>
                <Label htmlFor="street">street + number</Label>
                <Field
                  name="street"
                  id="street"
                  component={Input}
                  type="text"
                  placeholder="Street + number"
                />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Field
                  id="city"
                  name="city"
                  component={Input}
                  type="text"
                  placeholder="City"
                />
              </div>
              <div>
                <Label htmlFor="state">state</Label>
                <Field
                  id="state"
                  name="state"
                  component={Input}
                  type="text"
                  placeholder="state"
                />
              </div>
              <div>
                <Label htmlFor="zip">Zip Code</Label>
                <Field
                  id="zip"
                  name="zip"
                  component={Input}
                  type="text"
                  placeholder="Zip Code"
                />
              </div>

              <div>
                <Button onClick={handleSubmit} type="submit" disabled={submitting || pristine}>
                Continue
                </Button>
                <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                Reset
                </Button>
              </div>
              <pre>{JSON.stringify(values, 0, 2)}</pre>
            </form>
          )}
        />

      </Card>
    </>
  );
};

export default MyFormPage;
