import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export type FlexProps = {
    children?: ReactNode;
    align?: string;
    content?: string;
    width?: string;
    duration?: string;
    gap?: string;
    margin?: string;
    padding?: string;
};

const FlexStyle = styled.div<FlexProps>`
    display: flex;
    align-items: ${(props) => props.align || 'start'};
    justify-content: ${(props) => props.content || 'start'};
    gap: ${(props) => props.gap || '1rem'};
    flex-direction: ${(props) => props.duration || 'row'};
    margin: ${(props) => props.margin || '0'};
    width: ${(props) => props.width || 'auto'};
`;

const Flex: FC<FlexProps> = (props) => {
    return <FlexStyle {...props}>{props.children}</FlexStyle>;
};

export default Flex;
