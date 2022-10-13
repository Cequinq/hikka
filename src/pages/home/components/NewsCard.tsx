import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import styled from 'styled-components';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localeUa from 'dayjs/locale/uk';

dayjs.extend(relativeTime);

interface Props {
    className?: string;
    user: Hikka.User;
    date: number;
    title: string;
    content: string;
    cover: string;
}

const NewsCard: FC<Props> = ({ className, user, date, title, content }) => {
    return (
        <div className={className}>
            <Grid container xs md alignItems="center" padding={0} spacing={1} justifyContent="space-between">
                <Grid xs="auto" md="auto">
                    <img src={user.avatar} alt="pp" />
                </Grid>
                <Grid xs md>
                    <Typography color="textSecondary">{user.username}</Typography>
                </Grid>
                <Grid xs md="auto">
                    <Typography color="textSecondary" align="right">
                        {dayjs(date).locale(localeUa).fromNow()}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="h2" marginTop={3} className="title">
                {title}
            </Typography>
            <Typography color="textSecondary" marginTop={3}>
                {content}
            </Typography>
            <Box marginTop={3} height={326} width="100%" className="cover" />
        </div>
    );
};

export default styled(NewsCard)`
    .cover {
        background: url(${({ cover }) => cover});
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: background-size 0.2s;
    }

    .title {
        transition: color 0.2s;
    }

    &:hover {
        cursor: pointer;

        .cover {
            background-size: 120% 120%;
        }

        .title {
            color: ${({ theme }) => theme.palette.primary.main};
        }
    }
`;
