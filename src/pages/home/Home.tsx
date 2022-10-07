import { FC } from 'react';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { MainBar, SideBar } from './layout';

interface Props {
    className?: string;
}

const Home: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-between">
                <MainBar />
                <SideBar />
            </Grid>
        </Container>
    );
};

export default styled(Home)``;
