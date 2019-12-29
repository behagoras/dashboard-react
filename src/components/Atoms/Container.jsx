import styled from 'styled-components';

const Container = styled.div`
    display:grid;
    grid-template-columns:repeat(${(props) => (props.columns ? props.columns : 1)},1fr);
`;

export default Container;
