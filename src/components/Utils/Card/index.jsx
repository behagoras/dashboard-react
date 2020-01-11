import styled from 'styled-components';

import _Card from './Card';
import _CardBody from './CardBody';
import _CardHeader from './CardHeader';
import _CardFooter from './CardFooter';

export const CardTitle = styled.h2`
    font-size:${(props) => props.theme.fontSize};
    & a:link{
        text-decoration:none;
    }
`;
export const CardDescription = styled.p`
    font-size:${(props) => props.theme.fontSize * 0.75};
    text-overflow: ellipsis;
    overflow: hidden;
    color:${(props) => props.theme.colors.primary.light};
`;

_Card.Body = _CardBody;
_Card.CardBody = _CardBody;
_Card.Header = _CardHeader;
_Card.CardHeader = _CardHeader;
_Card.Footer = _CardFooter;
_Card.CardFooter = _CardFooter;

export const CardFooter = _CardFooter;

export const CardBody = _CardBody;
export const CardHeader = _CardHeader;
export default _Card;
