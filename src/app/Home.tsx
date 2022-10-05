import React, { FC } from 'react';
import styled from 'styled-components';
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import codeGeass from '../assets/code-geass.png';
import berserk from '../assets/berserk.png';

interface Props {
    className?: string;
}

const Home: FC<Props> = ({ className }) => {
    const card = (
        <Grid xs="auto" md="auto" className="card-wrapper">
            <Card className="card" variant="elevation">
                <CardActionArea>
                    <CardMedia component="img" image={codeGeass} alt="Code Geass" />
                    <CardContent className="card-content">
                        <Typography>Код Гіасс: Повстання Лелуша</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );

    const sideCard = (
        <Grid xs md={12}>
            <Card className="side-card">
                <Typography variant="subtitle2">Дженерік Тайтл</Typography>
                <Typography className="side-text">
                    Дженерік опис українською мовою без регістрації та смс, дженерік опис українською мовою без
                    регістрації та смс...
                </Typography>
                <div className="side-action">
                    <img src={berserk} alt="pp" className="side-pic" />
                    <Typography>Берсерк: Золоте століття</Typography>
                </div>
            </Card>
        </Grid>
    );

    return (
        <Container className={className}>
            <Grid container rowSpacing={3} columnSpacing={3} justifyContent="space-between">
                <Grid container xs={12} md={9} direction="column">
                    <Grid md={12}>
                        <Typography variant="h2" color="primary.dark" className="title">
                            Найголовніше цього тижня:
                        </Typography>
                    </Grid>
                    <Grid
                        md={12}
                        xs={12}
                        container
                        spacing={3}
                        justifyContent={{ xs: 'center', sm: 'flex-start', md: 'flex-start' }}
                    >
                        {card}
                        {card}
                        {card}
                        {card}
                    </Grid>
                </Grid>
                <Grid container spacing={6} xs={12} md direction="column" justifyContent="flex-start">
                    <Grid xs md={12}>
                        <Typography variant="h3" color="primary.dark" className="side-bar-title">
                            Оновлення на сайті:
                        </Typography>
                    </Grid>
                    <Grid container xs={12} md={12} justifyContent="flex-start">
                        {sideCard}
                        {sideCard}
                        {sideCard}
                        {sideCard}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default styled(Home)`
    .title {
        margin: 68px 0 42px 0;
    }

    .side-bar-title {
        margin-top: 61px;
    }

    .card-wrapper {
        //max-height: 312px;
        //max-width: 184px;
        //padding-left: 0;
    }

    .card {
        background-color: transparent;
        padding-left: 0;
        max-height: 312px;
        max-width: 180px;
    }

    .card-content {
        display: flex;
        justify-content: flex-start;
        padding-left: 0;
    }

    .side-card {
        background-color: transparent;
        //max-width: 275px;
        //display: flex;
        //flex-flow: column;
        //justify-content: center;
    }

    .side-text {
        margin-top: 12px;
    }

    .side-action {
        display: flex;
        margin-top: 20px;
        justify-content: flex-start;
    }

    .side-pic {
        margin-right: 8px;
    }
`;
