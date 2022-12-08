import Header from './Header';
import Tabs from './Tabs';

import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Box, Container } from '@mui/material';

interface Props {
    className?: string;
    children: ReactElement | ReactElement[];
}

const Component: FC<Props> = ({ className, children }) => {
    return (
        <Container className={className}>
            <Header />
            <Box position="sticky" top="80px" zIndex={2}>
                <Tabs />
            </Box>
            {children}
        </Container>
    );
};

export default styled(Component)``;
