import Flex from '../Flex.tsx';
import Subtitle from '../Subtitle.tsx';
import Title from '../Title.tsx';
import styled from 'styled-components';
import { FC } from 'react';

type BlockInfoRightProps = {
    imageUrl: string;
    title: string;
    subtitle: string;
};

export const ContainerIcon = styled.div`
    padding: 0.8rem;
    background: #f7f6f6;
    border-radius: 100%;
`;

const BlockInfoRight: FC<BlockInfoRightProps> = ({
    imageUrl,
    title,
    subtitle,
}) => {
    return (
        <Flex align="center">
            <ContainerIcon>
                <img width={27} color={'#4b89cb'} src={imageUrl} alt="icon" />
            </ContainerIcon>
            <Flex duration="column" gap="0rem">
                <Subtitle size="16px">{title}</Subtitle>
                <Title size="27px">{subtitle}</Title>
            </Flex>
        </Flex>
    );
};

export default BlockInfoRight;
