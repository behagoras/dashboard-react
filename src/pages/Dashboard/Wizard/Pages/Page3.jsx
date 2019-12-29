import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import Wizard from '../../../../components/Form/Wizard';
import { Select } from '../../../../components/Form/FormElements';
// import Container from '../../../../components/Atoms/Container';
import { Input, Label, InputGroup } from '../../../../components/Form/CoolInputs2';

/* grid-template-columns: repeat(${props.columns}, 1fr); */
// /* grid-template-columns:${props => props.columns? repeat({props.columns},1fr):1fr} */
const Container = styled.div`
  display:grid;
  grid-template-columns:3fr 1fr;
`;
const Page1 = () => {
  return (
    <Wizard.Page>
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Price</h2>
      <Container>
        <InputGroup>
          <Field
            name="price"
            component={Input}
            type="number"
            required
            autoComplete="off"
            id="price"
            value="price"
          />
          <Label
            htmlFor="price"
            title="Enter the property price"
            data-title="price"
          />
        </InputGroup>
        <div>
          {/* <Label htmlFor="coin">Coin</Label> */}
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
        </div>
      </Container>
      {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
    </Wizard.Page>
  );
};

export default Page1;
