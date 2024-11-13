import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export type TitleProps = {
    children: ReactNode;
    size?: string;
    color?: string;
    colorHover?: string;
    weight?: number;
    margin?: string;
};

const TitleStyle = styled.h1<TitleProps>`
    font-weight: 600;
    font-size: ${(props) => props.size || '20px'};
    color: ${(props) => props.color || 'black'};
`;

const Title: FC<TitleProps> = (props) => {
    return <TitleStyle {...props}>{props.children}</TitleStyle>;
};

export default Title;
