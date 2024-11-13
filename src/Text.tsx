import { FC } from 'react';
import { TitleProps } from './components/Title.tsx';
import styled from 'styled-components';

const TextStyle = styled.p<TitleProps>`
    color: ${(props) => props.color || '#000'};
    font-size: ${(props) => props.size || '16px'};
    transition: 0.3s;
    font-weight: ${(props) => props.weight || 600};

    &:hover {
        color: ${(props) => props.colorHover || '#000'};
    }
`;

export const Text: FC<TitleProps> = (props) => {
    return <TextStyle {...props}>{props.children}</TextStyle>;
};

export default Text;
