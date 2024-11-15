import { CiSearch } from 'react-icons/ci';
import styled from 'styled-components';
import Flex from '../Flex.tsx';
import { FC } from 'react';

const SearchWrapper = styled.div`
    width: 400px;
    height: 55px;
    border-radius: 10px;
    background-color: #f7f6f6;
    font-size: 16px;
    padding: 8px 10px 0 10px;
`;

const InputStyle = styled.input`
    background-color: #f7f6f6;
    color: #8c8c8c;
    border: none;
    outline: none;
`;

const Search: FC = () => {
    return (
        <SearchWrapper>
            <Flex align="center">
                <CiSearch
                    style={{ width: '35px', height: '35px', color: '#bdbdbd' }}
                />
                <InputStyle type="text" placeholder="Search location here" />
            </Flex>
        </SearchWrapper>
    );
};

export default Search;
