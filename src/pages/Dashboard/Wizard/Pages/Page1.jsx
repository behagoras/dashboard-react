import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { } from '../../../../components/Form/FormElements';
import { Input, Label, InputGroup } from '../../../../components/Form/CoolInputs2';
import Container from '../../../../components/Atoms/Container';

const Page1 = () => {
  return (
    <Wizard.Page>
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Address</h2>
      <InputGroup>
        <Field
          name="street"
          component={Input}
          type="text"
          required
          autoComplete="off"
          id="street"
          value="street"
        />
        <Label
          htmlFor="street"
          title="Enter the property street followed by the house number"
          data-title="street + number"
        />
      </InputGroup>
      <Container columns="3">
        <InputGroup>
          <Field
            name="city"
            component={Input}
            type="text"
            required
            autoComplete="off"
            id="city"
            value="city"
          />
          <Label
            htmlFor="city"
            title="Enter the property city"
            data-title="city"
          />
        </InputGroup>
        <InputGroup>
          <Field
            name="state"
            component={Input}
            type="text"
            required
            autoComplete="off"
            id="state"
            value="state"
          />
          <Label
            htmlFor="state"
            title="Enter the property state"
            data-title="state"
          />
        </InputGroup>
        <InputGroup>
          <Field
            name="zip"
            component={Input}
            type="text"
            required
            autoComplete="off"
            id="zip"
            value="zip"
          />
          <Label
            htmlFor="zip"
            title="Enter the property zip code"
            data-title="zip code"
          />
        </InputGroup>
      </Container>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </Wizard.Page>
  );
};

export default Page1;
