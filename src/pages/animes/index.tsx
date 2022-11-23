import { FC } from 'react';
import styled from 'styled-components';
import { Container, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { Filters, List } from '../../layout/animes';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container columnSpacing={6} columns={16} rowSpacing={0} padding={0} justifyContent="space-between">
                <Grid xs={16} md={11}>
                    <List />
                </Grid>
                <Grid xs={0} md="auto" display={{ xs: 'none', md: 'block' }}>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid xs={16} md>
                    <Filters />
                </Grid>
            </Grid>
        </Container>
    );
};

export default styled(Component)``;
