import styled from 'styled-components';
import { FC } from 'react';
import { NewsCard } from '../components';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import berserk from '../../../assets/berserk.png';
import newsPic from '../../../assets/news-pic.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Typography variant="h3" color="textSecondary" marginBottom={4}>
                Найголовніше цього тижня:
            </Typography>
            <Grid container spacing={3} padding={0}>
                <Grid md={12}>
                    <NewsCard
                        title="Подборка малоизвестных сюжетных игр с открытым миром для слабых ПК и ноутбуков"
                        content="Индустрии видеоигр уже много лет, и за прошедшие годы вышло множество потрясающих проектов, которые по той или иной причине вы могли пропустить.
            "
                        user={{ username: 'Berserk', avatar: berserk }}
                        date={1665684228000}
                        cover={newsPic}
                    />
                </Grid>
                <Grid md={12}>
                    <NewsCard
                        title="Подборка малоизвестных сюжетных игр с открытым миром для слабых ПК и ноутбуков"
                        content="Индустрии видеоигр уже много лет, и за прошедшие годы вышло множество потрясающих проектов, которые по той или иной причине вы могли пропустить.
            "
                        user={{ username: 'Berserk', avatar: berserk }}
                        date={1665684228000}
                        cover={newsPic}
                    />
                </Grid>
                <Grid md={12}>
                    <NewsCard
                        title="Подборка малоизвестных сюжетных игр с открытым миром для слабых ПК и ноутбуков"
                        content="Индустрии видеоигр уже много лет, и за прошедшие годы вышло множество потрясающих проектов, которые по той или иной причине вы могли пропустить.
            "
                        user={{ username: 'Berserk', avatar: berserk }}
                        date={1665684228000}
                        cover={newsPic}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default styled(Component)``;
