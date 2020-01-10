import React from 'react';
import { Field } from 'react-final-form';
import Wizard from '../../../../components/Form/Wizard';
import { Input, Label, InputGroup } from '../../../../components/Form/FormInputs';
import Container from '../../../../components/Atoms/Container';
import Dropzone from '../../../../components/Atoms/Dropzone';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)}
  />
);

const required = (value) => (value ? undefined : 'Required');

const Page1 = (props) => {
  const { handleImageSuccess } = props;
  const content = (
    <Wizard.Page>
      {
        handleImageSuccess ? (
          <>
            <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Property Image</h2>
            <InputGroup>
              <Dropzone
                apiUrl="https://express-api.behagoras.now.sh/api/images"
                onSuccess={handleImageSuccess}
              // onDelete={handleImageDelete}
              />
              <Field
                name="imageSource"
                component={Input}
                type="hidden"
                // validate={required}
                autoComplete="off"
                id="imageSource"
                value="imageSource"
              />
              <Label
                htmlFor="imageSource"
                title="Add an image for your property"
                data-title="Property Image"
              />
            </InputGroup>
          </>
        ) :
          <img src="" alt="" />
      }
      <h2 style={{ textAlign: 'left', fontSize: '20px' }}>Address</h2>
      <InputGroup>
        <Field
          name="street"
          component={Input}
          type="text"
          validate={required}
          autoComplete="off"
          id="street"
          value="street"
        />
        <Label
          htmlFor="street"
          title="Property street + house number"
          data-title="street + number"
        />
        <Error name="street" />

      </InputGroup>
      <Container columns="3">
        <InputGroup>
          <Field
            name="city"
            component={Input}
            type="text"
            autoComplete="off"
            validate={required}
            id="city"
            value="city"
          />
          <Label
            htmlFor="city"
            title="Enter the property city"
            data-title="city"
          />
          <Error name="city" />

        </InputGroup>
        <InputGroup>
          <Field
            name="state"
            component={Input}
            type="text"
            autoComplete="off"
            id="state"
            value="state"
          />
          <Label
            htmlFor="state"
            title="Enter the property state"
            data-title="state"
          />
          <Error name="state" />

        </InputGroup>
        <InputGroup>
          <Field
            name="zip"
            component={Input}
            type="text"
            autoComplete="off"
            id="zip"
            value="zip"
          />
          <Label
            htmlFor="zip"
            title="Enter the property zip code"
            data-title="zip code"
          />
          <Error name="zip" />
        </InputGroup>
      </Container>
    </Wizard.Page>
  );
  return content;
};

console.log('Page1.content', Page1.content);

export default Page1;
