import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import Wizard from '../../../../components/Form/Wizard';
import { Input, Label, InputGroup, Select } from '../../../../components/Form/FormInputs';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)}
  />
);

const Container = styled.div`
  display:grid;
  grid-template-columns:3fr 1fr;
`;

const required = (value) => (value ? undefined : 'Required');

const Page3 = () => {
  return (
    <Wizard.Page>
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Price</h2>
      <Container>
        <InputGroup>
          <Field
            name="price"
            component={Input}
            type="number"
            validate={required}
            autoComplete="off"
            id="price"
            value="price"
          />
          <Label
            htmlFor="price"
            title="Enter the property price"
            data-title="price"
          />
          <Error name="price" />

        </InputGroup>
        <div>
          <Field
            id="coin"
            name="coin"
            component={Select}
          >
            <option value="">-- Select Currency --</option>
            <option value="mxn">
            MXN - Mexican Pesos
            </option>
            <option value="usd">
            USD - American Dollars
            </option>
            <option value="usd">
            EUR - Euros
            </option>
            <option value="cad">
            CAD - Canadian Dollars
            </option>
            <option value="widowed">
            YPY - Japanese Yens
            </option>
            <option value="widowed">
            COP - Colombian Pesos
            </option>
          </Field>
          <Error name="coin" />

        </div>
      </Container>

      <InputGroup>
        <Field
          name="title"
          component={Input}
          type="text"
          validate={required}
          autoComplete="off"
          id="title"
          value="title"
        />
        <Label
          htmlFor="title"
          title="Enter a title that describes the property"
          data-title="Title"
        />
        <Error name="title" />

      </InputGroup>
      <InputGroup>
        <Field
          name="description"
          component={Input}
          type="textarea"
          validate={required}
          autoComplete="off"
          id="description"
          value="description"
        />
        <Label
          htmlFor="description"
          title="Enter a description that describes the property"
          data-title="Full description"
        />
        <Error name="description" />
      </InputGroup>
    </Wizard.Page>
  );
};

export default Page3;
