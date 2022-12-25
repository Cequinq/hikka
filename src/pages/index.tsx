import { FC } from 'react';
import styled from 'styled-components';
import { Container, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { News, Ongoings } from '../layout/root';
import { Updates } from '../layout/common';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container columnSpacing={6} columns={16} rowSpacing={0} padding={0} justifyContent="space-between">
                <Grid xs={16} md={11}>
                    <Ongoings />
                    <News />
                </Grid>
                <Grid xs={0} md="auto" display={{ xs: 'none', md: 'block' }}>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid xs={16} md>
                    <Updates />
                </Grid>
            </Grid>
        </Container>
    );
};

export default styled(Component)``;
