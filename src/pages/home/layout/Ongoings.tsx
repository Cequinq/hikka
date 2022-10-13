import styled from 'styled-components';
import { FC } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, Typography } from '@mui/material';
import { EntryCard } from '../../../components';
import codeGeass from '../../../assets/code-geass.png';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Box className={className} paddingY={8}>
            <Typography variant="h3" marginBottom={4} color="textSecondary">
                Найголовніше цього тижня:
            </Typography>
            <Grid container spacing={3} padding={0}>
                <Grid xs={6} sm={4} md={3}>
                    <EntryCard title="Код Гіас" cover={codeGeass} />
                </Grid>

                <Grid xs={6} sm={4} md={3}>
                    <EntryCard title="Код Гіас" cover={codeGeass} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <EntryCard title="Код Гіас" cover={codeGeass} />
                </Grid>
                <Grid xs={6} sm={4} md={3}>
                    <EntryCard title="Код Гіас" cover={codeGeass} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default styled(Component)``;
