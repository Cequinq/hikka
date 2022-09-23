import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import codeGeass from '../assets/code-geass.png';

interface Props {
    className?: string;
}

const Home: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container>
                <Grid xs md={8}>
                    <Typography variant="h2" color="primary.dark" className="title">
                        Найголовніше цього тижня:
                    </Typography>
                    <Grid container>
                        <Grid className="card-wrapper">
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" image={codeGeass} alt="Code Geass" />
                                    <CardContent>
                                        <Typography>Код Гіасс: Повстання Лелуша</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default styled(Home)`
    .title {
        margin: 84px 0 42px 0;
    }
    .card-wrapper {
    }
    .card {
        background-color: transparent;
        max-height: 312px;
        max-width: 184px;
    }
`;
