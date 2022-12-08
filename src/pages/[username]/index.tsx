import styled from 'styled-components';
import { ReactElement } from 'react';

import Layout from '../../layout/profile';
import Grid from '@mui/material/Unstable_Grid2';
import { InfoItem } from '../../components/profile';
import { NextPageWithLayout } from '../_app';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
}

const Component: NextPageWithLayout<Props> = ({ className }) => {
    return (
        <Grid className={className} container spacing={3} mt={3} padding={0}>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Аніме" justifyContent="center">
                    <Typography variant="h2">1,324 години</Typography>
                    <Typography color="textSecondary">4 місяці та 3 тижні</Typography>
                </InfoItem>
            </Grid>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Відстежуються" />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Список аніме" />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Манга" />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Підписники" />
            </Grid>
            <Grid xs={12} sm={4} md={4}>
                <InfoItem title="Список манги" />
            </Grid>
        </Grid>
    );
};

Component.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default styled(Component)``;
