import styled from 'styled-components';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { HighlightCard, NewsCard } from '../components';

interface Props {
    className?: string;
}

const MainBar: FC<Props> = ({ className }) => {
    return (
        <Grid container xs={12} md={9} direction="column" className={className}>
            <Grid md={12}>
                <Typography variant="h3" color="primary.dark" className="title">
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
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
                <HighlightCard />
            </Grid>
            <Grid md={12}>
                <Typography variant="h3" color="primary.dark" className="title">
                    Найголовніше цього тижня:
                </Typography>
            </Grid>
            <NewsCard
                title="Подборка малоизвестных сюжетных игр с открытым миром для слабых ПК и ноутбуков"
                content="Индустрии видеоигр уже много лет, и за прошедшие годы вышло множество потрясающих проектов, которые по той или иной причине вы могли пропустить.
            "
                animeTitle="Berserk"
                time={18}
            />
        </Grid>
    );
};

export default styled(MainBar)`
    .title {
        margin: 68px 0 42px 0;
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

    .side-action {
        display: flex;
        //margin-top: 20px;
        justify-content: flex-start;
    }

    .side-pic {
        margin-right: 8px;
    }
`;
