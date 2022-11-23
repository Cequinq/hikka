import styled from 'styled-components';
import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { UpdateCard } from '../../root';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Box className={className} position="sticky" top={0} paddingTop={4}>
            <Typography variant="h4" marginBottom={4} color="textSecondary">
                Оновлення на сайті:
            </Typography>
            <Grid container padding={0} rowSpacing={6}>
                <Grid md={12} xs={12}>
                    <UpdateCard />
                </Grid>
                <Grid md={12} xs={12}>
                    <UpdateCard />
                </Grid>
                <Grid md={12} xs={12}>
                    <UpdateCard />
                </Grid>
                <Grid md={12} xs={12}>
                    <UpdateCard />
                </Grid>
            </Grid>
        </Box>
    );
};

export default styled(Component)``;
