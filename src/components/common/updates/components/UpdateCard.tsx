import { FC } from 'react';
import { Typography } from '@mui/material';
import berserk from '../../../../../public/images/berserk.png';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
    className?: string;
}

const UpdateCard: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Typography variant="subtitle2">Дженерік Тайтл</Typography>
            <Typography marginTop={1.5}>
                Дженерік опис українською мовою без регістрації та смс, дженерік опис українською мовою без регістрації
                та смс...
            </Typography>
            <Grid container spacing={1} padding={0} marginTop={2}>
                <Grid md="auto" xs="auto">
                    <img src={berserk} alt="pp" />
                </Grid>
                <Grid md xs>
                    <Typography>Берсерк</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default styled(UpdateCard)``;
