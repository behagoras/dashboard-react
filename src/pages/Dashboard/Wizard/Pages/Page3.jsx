import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import Wizard from '../../../../components/Form/Wizard';
import { Label, Input, Select } from '../../../../components/Form/FormElements';

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(${(props) => (props.columns ? props.columns : 1)},1fr);
`;

/* grid-template-columns: repeat(${props.columns}, 1fr); */
// /* grid-template-columns:${props => props.columns? repeat({props.columns},1fr):1fr} */

const Page1 = () => {
  return (
    <Wizard.Page>
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Price</h2>
      <Container columns="2">
        <div>
          <Label htmlFor="price">Price</Label>
          <Field
            name="price"
            id="price"
            component={Input}
            type="number"
            min="1"
            step="any"
            placeholder="Price"
          />
        </div>
        <div>
          <Label htmlFor="coin">Coin</Label>
          <Field
            id="coin"
            name="coin"
            component={Select}
          >
            <option value="">-- select one --</option>
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
