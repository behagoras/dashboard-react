import React from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Label, Input } from '../../../../components/Form/FormElements';

const Page1 = () => {
  return (
    <Wizard.Page>
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Basic Information</h2>
      <div>
        <Label htmlFor="city">Street</Label>
        <Field
          id="street"
          name="street"
          placeholder="street"
          type="text"
          component={Input}
        />
      </div>
    </Wizard.Page>
  );
};

export default Page1;
