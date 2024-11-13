import styled from 'styled-components';
import { TitleProps } from './Title.tsx';
import { FC } from 'react';

const SubtitleStyle = styled.h2<TitleProps>`
    font-size: ${(props) => props.size || '19px'};
    font-weight: ${(props) => props.weight || 500};
    color: ${(props) => props.color || '#9e9e9e'};
    margin-bottom: ${(props) => props.margin || '0'};
`;

const Subtitle: FC<TitleProps> = (props) => {
    return <SubtitleStyle {...props}>{props.children}</SubtitleStyle>;
};

export default Subtitle;
