import styled from 'styled-components';
import { FC } from 'react';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import Text from '../Text.tsx';

type SwitchProps = {
    width?: string;
    background?: string;
    text: string;
};

const SwitchStyle = styled.div<SwitchProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${(props) => props.width};
    background: ${(props) => props.background || '#fff'};
    padding: 20px 13px;
    border-radius: 0.8rem;
`;

const Switch: FC<SwitchProps> = (props) => {
    return (
        <SwitchStyle {...props}>
            <SlArrowLeft
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
            <Text>{props.text}</Text>
            <SlArrowRight
                style={{ width: '20px', height: '20px', cursor: 'pointer' }}
            />
        </SwitchStyle>
    );
};

export default Switch;
