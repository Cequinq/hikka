import React, { FC } from 'react';
import styled from 'styled-components';
import { Container, Grid, Typography } from '@mui/material';

interface Props {
    className?: string;
}

const Home: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container>
                <Typography>Найголовніше цього тижня:</Typography>
            </Grid>
        </Container>
    );
};

export default styled(Home)``;
