import styled from 'styled-components';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography } from '@mui/material';
import { UpdateCard } from '../components';

interface Props {
    className?: string;
}

const SideBar: FC<Props> = ({ className }) => {
    return (
        <Grid container spacing={6} xs={12} md direction="column" justifyContent="flex-start" className={className}>
            <Grid xs md={12}>
                <Typography variant="h3" color="primary.dark" className="side-bar-title">
                    Оновлення на сайті:
                </Typography>
            </Grid>
            <Grid container xs={12} md={12} justifyContent="flex-start">
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
                <UpdateCard />
            </Grid>
        </Grid>
    );
};

export default styled(SideBar)`
    .side-bar-title {
        margin-top: 61px;
    }
`;
