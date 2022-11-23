import React, { FC } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { AppBar, Container, Link } from '@mui/material';
import NextLink from 'next/link';
import pp from '../../../public/images/temp-pp.png';

interface Props {
    className?: string;
}

const Navigation: FC<Props> = ({ className }) => {
    return (
        <AppBar className={className} elevation={0} position="fixed">
            <Container>
                <Grid container columnSpacing={8} padding={0} justifyContent="space-between" alignItems="center">
                    <Grid xs md>
                        <Link
                            component={NextLink}
                            href="/"
                            underline="none"
                            fontWeight={900}
                            fontSize="2rem"
                            fontFamily="Montserrat"
                        >
                            hikka.
                        </Link>
                    </Grid>
                    <Grid xs md container spacing={3} alignItems="center">
                        <Grid xs md>
                            <Link color="textSecondary" underline="none">
                                Головне
                            </Link>
                        </Grid>
                        <Grid xs md>
                            <Link color="textSecondary" underline="none">
                                Аніме
                            </Link>
                        </Grid>
                        <Grid xs md>
                            <Link color="textSecondary" underline="none">
                                Манга
                            </Link>
                        </Grid>
                        <Grid xs md>
                            <Link color="textSecondary" underline="none">
                                Ранобе
                            </Link>
                        </Grid>
                        <Grid xs md>
                            <Link color="textSecondary" underline="none">
                                Вовасін
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <img src={pp} alt="Profile Picture" />
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default styled(Navigation)`
    height: 80px;
    border-bottom: 1px solid #292929;
    justify-content: center;

    .search {
        padding: ${({ theme }) => theme.spacing(1, 2)};
        height: 58px;
        transition: all 0.3s;
        display: flex;
        border-radius: 10px;
    }

    .button-recommendation {
        text-transform: none;
    }

    .text-recommendation {
        margin-left: 12px;
    }
`;
