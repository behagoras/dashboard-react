/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from 'react-final-form';
import Card from '../Utils/Card/Card';
import Button from '../Atoms/Button';
import Action from '../Atoms/Action';

const Buttons = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content:center;
  grid-gap:15px;
  margin:30px auto;
`;

const Wizard = (props) => {

  Wizard.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  // constructor
  const [state, setState] = useState({
    page: 0,
    values: props.initialValues || {},
  });

  const validate = (values) => {
    console.log('values', values);
    console.log('props.children', props.children);
    console.log('React.Children.toArray(props.children)', React.Children.toArray(props.children));

    const activePage = React.Children.toArray(props.children)[
      state.page
    ];
    console.log('activePage.props', activePage.props);
    console.log('activePage', activePage);
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  const next = (values) => setState((state) => {
    (JSON.stringify(validate(values)));
    return ({
      page: Math.min(state.page + 1, props.children.length - 1),
      values,
    });
  });

  const previous = (values) => setState((state) => ({
    page: Math.max(state.page - 1, 0),
    values,
  }));

  const handleSubmit = (values) => {
    const { children, onSubmit } = props;
    const { page } = state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) {
      return onSubmit(values);
    }
    next(values);
  };

  const { children } = props;
  const { page, values } = state;
  const activePage = React.Children.toArray(children)[page];
  const isLastPage = page === React.Children.count(children) - 1;

  Wizard.Page.validate = validate;

  return (
    <Card>
      <Form
        initialValues={values}
        validate={validate}
        onSubmit={handleSubmit}

      >
        {({ handleSubmit, submitting, values, pristine }) => (
          <form onSubmit={handleSubmit}>
            {activePage}
            <Buttons className="buttons">
              {page > 0 && (
                <Action
                  name="« Previous"
                  onClick={() => {
                    previous(values);
                  }}
                />
              )}

              {isLastPage ? (
                <Button
                  type="submit"
                  disabled={submitting || pristine}
                >
                Submit
                </Button>
              ) : (
                <Action
                  type="button"
                  disabled={submitting}
                  onClick={() => {
                    next(values);
                  }}
                >
                  Next »
                </Action>
              ) }
            </Buttons>
            {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
          </form>
        )}
      </Form>
    </Card>
  );

};

Wizard.Page = (props) => {
  return props.children;
};

export default Wizard;
