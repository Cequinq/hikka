import React, { FC } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Container, Divider, Link, Typography } from '@mui/material';
import pp from '../assets/temp-pp.png';
import berserk from '../assets/berserk.png';

interface Props {
    className?: string;
}

const Navigation: FC<Props> = ({ className }) => {
    return (
        <Container className={className}>
            <Grid container spacing={6} justifyContent="space-between" alignItems="center">
                <Grid xs={3} md={3}>
                    <Link underline="none" variant="title">
                        hikka.
                    </Link>
                    {/* todo change to Autocomplete */}
                </Grid>
                <Grid xs="auto" md="auto">
                    <input className="input" />
                </Grid>
                <Grid container spacing={3}>
                    <Grid xs md>
                        <Link color="primary.dark" underline="none">
                            Головне ’22
                        </Link>
                    </Grid>
                    <Grid xs md>
                        <Link color="primary.dark" underline="none">
                            Аніме
                        </Link>
                    </Grid>
                    <Grid xs md>
                        <Link color="primary.dark" underline="none">
                            Манга
                        </Link>
                    </Grid>
                    <Grid xs md>
                        <Link color="primary.dark" underline="none">
                            Ранобе
                        </Link>
                    </Grid>
                    <Grid xs md>
                        <Link color="primary.dark" underline="none">
                            Ранобе
                        </Link>
                    </Grid>
                </Grid>
                <Grid xs={1} md={1}>
                    <img src={pp} alt="Profile Picture" />
                </Grid>
            </Grid>
            <Divider className="divider-top" variant="fullWidth" />
            <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                <Grid xs={1} md={1}>
                    <Typography>Теми дня:</Typography>
                </Grid>
                <Grid xs="auto" md="auto">
                    <Button className="button-recommendation">
                        <img src={berserk} alt="pp" />
                        <Link variant="body1" className="text-recommendation" color="primary.dark" underline="none">
                            Берсерк: Золоте століття
                        </Link>
                    </Button>
                </Grid>
                <Grid xs="auto" md="auto">
                    <Button className="button-recommendation">
                        <img src={berserk} alt="pp" />
                        <Link variant="body1" className="text-recommendation" color="primary.dark" underline="none">
                            Берсерк: Золоте століття
                        </Link>
                    </Button>
                </Grid>
                <Grid xs="auto" md="auto">
                    <Button className="button-recommendation">
                        <img src={berserk} alt="pp" />
                        <Link variant="body1" className="text-recommendation" color="primary.dark" underline="none">
                            Берсерк: Золоте століття
                        </Link>
                    </Button>
                </Grid>
                <Grid xs="auto" md="auto">
                    <Button className="button-recommendation">
                        <img src={berserk} alt="pp" />
                        <Link variant="body1" className="text-recommendation" color="primary.dark" underline="none">
                            Берсерк
                        </Link>
                    </Button>
                </Grid>
                <Grid xs="auto" md="auto">
                    <Button className="button-recommendation">
                        <img src={berserk} alt="pp" />
                        <Link variant="body1" className="text-recommendation" color="primary.dark" underline="none">
                            Берсерк
                        </Link>
                    </Button>
                </Grid>
            </Grid>
            <Divider className="divider-bottom" variant="fullWidth" />
        </Container>
    );
};

export default styled(Navigation)`
    margin-top: 15px;
    .input {
        width: 300px;
    }
    .divider-top {
        background: #292929;
        margin-bottom: 8px;
    }
    .divider-bottom {
        background: #292929;
        margin-top: 8px;
    }
    .button-recommendation {
        text-transform: none;
    }
    .text-recommendation {
        margin-left: 12px;
    }
`;
