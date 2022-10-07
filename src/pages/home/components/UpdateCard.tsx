import { FC } from 'react';
import { Card, Typography } from '@mui/material';
import berserk from '../../../assets/berserk.png';
import Grid from '@mui/material/Unstable_Grid2';
import styled from 'styled-components';

interface Props {
    className?: string;
}

const UpdateCard: FC<Props> = ({ className }) => {
    return (
        <Grid xs md={12} className={className}>
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
};

export default styled(UpdateCard)`
    .side-action {
        display: flex;
        margin-top: 20px;
        justify-content: flex-start;
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
        //margin-top: 20px;
        justify-content: flex-start;
    }

    .side-pic {
        margin-right: 8px;
    }
`;
