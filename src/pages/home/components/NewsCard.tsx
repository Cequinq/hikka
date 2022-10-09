import { FC } from 'react';
import { Typography } from '@mui/material';
import berserk from '../../../assets/berserk.png';
import newsPic from '../../../assets/news-pic.png';
import Grid from '@mui/material/Unstable_Grid2';
import styled from 'styled-components';

interface Props {
    className?: string;
    animeTitle: string;
    time: number;
    title: string;
    content: string;
}

const NewsCard: FC<Props> = ({ className, animeTitle, time, title, content }) => {
    return (
        <Grid container justifyContent="space-between" spacing={3} className={className}>
            <Grid container xs md alignItems="center" justifyContent="space-between">
                <Grid xs md>
                    <div className="anime-title-wrapper">
                        <img src={berserk} alt="pp" className="anime-title-pic" />
                        <Typography color="primary.dark">{animeTitle}</Typography>
                    </div>
                </Grid>
                <Grid xs md={3}>
                    <Typography color="primary.dark">{time}</Typography>
                </Grid>
                <Grid xs md={12}>
                    <Typography variant="h2" className="news-title">
                        {title}
                    </Typography>
                    <Typography color="primary.dark">{content}</Typography>
                    <img src={newsPic} alt="pp" className="news-pic" />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default styled(NewsCard)`
    .anime-title-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .anime-title-pic {
        margin-right: 8px;
    }
    .news-title {
        margin-top: 20px;
        margin-bottom: 24px;
    }
    .news-pic {
        margin-top: 24px;
    }
`;
