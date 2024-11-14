import Subtitle from '../Subtitle.tsx';
import Switch from '../Switch.tsx';
import Flex from '../Flex.tsx';
import { FC } from 'react';

type TitleSwitchProps = {
    text: string;
    width: string;
    switchText: string;
};

const TitleSwitch: FC<TitleSwitchProps> = ({ text, width, switchText }) => {
    return (
        <Flex align="center" content="space-between" margin="0 0 2rem 0">
            <Subtitle color="#000" weight={700}>
                {text}
            </Subtitle>
            <Switch width={width} text={switchText} background={'#f7f6f6'} />
        </Flex>
    );
};

export default TitleSwitch;
