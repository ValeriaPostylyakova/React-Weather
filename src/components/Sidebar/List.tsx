import styled from 'styled-components';
import { TbSmartHome } from 'react-icons/tb';
import { TbChartTreemap } from 'react-icons/tb';
import { RxCalendar } from 'react-icons/rx';
import Text from '../../Text.tsx';

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 15px;
    border-radius: 10px;
    transition: all ease 0.3s;
    cursor: pointer;
    margin-bottom: 10px;

    &:hover {
        background-color: #ecf4ff;
        color: #4b89cb;
        p {
            color: #4b89cb;
        }
    }
`;

const List = () => {
    return (
        <ul style={{ width: '100%' }}>
            <ListItem>
                <TbSmartHome style={{ width: '27px', height: '27px' }} />
                <Text size="17px" colorHover="#4b89cb">
                    Dashboard
                </Text>
            </ListItem>
            <ListItem>
                <TbChartTreemap style={{ width: '27px', height: '27px' }} />
                <Text size="17px" colorHover="#4b89cb">
                    Map
                </Text>
            </ListItem>
            <ListItem>
                <RxCalendar style={{ width: '27px', height: '27px' }} />
                <Text size="17px" colorHover="#4b89cb">
                    Calendar
                </Text>
            </ListItem>
        </ul>
    );
};

export default List;
