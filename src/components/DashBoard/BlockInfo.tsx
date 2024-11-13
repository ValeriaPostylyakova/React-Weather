import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type BlockInfoProps = {
    children?: ReactNode;
    border?: string;
    width?: string;
    padding?: string;
    background?: string;
};

const BlockStyle = styled.div<BlockInfoProps>`
    width: ${(props) => props.width || '25%'};
    border: ${(props) => props.border || '1px solid #eee'};
    padding: ${(props) => props.padding || '20px 40px 30px 40px'};
    background-color: ${(props) => props.background || '#fff'};
    border-radius: 1rem;
`;

const BlockInfo: FC<BlockInfoProps> = (props) => {
    return <BlockStyle {...props}>{props.children}</BlockStyle>;
};

export default BlockInfo;
