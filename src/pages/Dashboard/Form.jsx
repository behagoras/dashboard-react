/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';
import Card from '../../components/Utils/Card/Card';
import Button from '../../components/Atoms/Button';
import TitleBar from '../../components/Dashboard/TitleBar';

const MyForm = styled.form`
    margin: 10px auto;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
`;
const Input = styled.input`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
    width:100%;
    & [type='checkbox']{
        margin-top: 7px;
    }
`;
const Select = styled.input`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;
const TextArea = styled.input`
    flex: 1;
    padding: 3px 5px;
    font-size: 1em;
    margin-left: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
`;
const Label = styled.label`
    display: block;
    color: #333;
    min-width: 110px;
    font-size: 1em;
    line-height: 32px;
    text-align:left;
`;

const onSubmit = async (values) => {
//   await sleep(300);
  alert(JSON.stringify(values, 0, 2));
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
                {/* <Button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                Reset
                </Button> */}
              </div>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />

      </Card>
    </>
  );
};

export default MyFormPage;
