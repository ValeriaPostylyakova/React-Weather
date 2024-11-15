import styled from 'styled-components';
import { TbSmartHome } from 'react-icons/tb';
import { TbChartTreemap } from 'react-icons/tb';
import { RxCalendar } from 'react-icons/rx';
import Text from '../../Text.tsx';
import { Link } from 'react-router-dom';

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
            <Link to="/React-Weather/">
                <ListItem>
                    <TbSmartHome style={{ width: '27px', height: '27px' }} />
                    <Text size="17px" colorHover="#4b89cb">
                        Dashboard
                    </Text>
                </ListItem>
            </Link>
            <Link to="/React-Weather/map">
                <ListItem>
                    <TbChartTreemap style={{ width: '27px', height: '27px' }} />
                    <Text size="17px" colorHover="#4b89cb">
                        Map
                    </Text>
                </ListItem>
            </Link>
            <Link to="/React-Weather/calendar">
                <ListItem>
                    <RxCalendar style={{ width: '27px', height: '27px' }} />
                    <Text size="17px" colorHover="#4b89cb">
                        Calendar
                    </Text>
                </ListItem>
            </Link>
        </ul>
    );
};

export default List;
