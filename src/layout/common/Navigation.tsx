import { FC, useState } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { AppBar, Avatar, Container, Link, Typography } from '@mui/material';
import NextLink from 'next/link';
// import pp from '../../../public/images/temp-pp.png';
import Auth from './Auth';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const [auth, setAuth] = useState<boolean>(false);

    return (
        <AppBar className={className} elevation={0} position="fixed">
            <Container maxWidth="xl">
                <Grid container columnSpacing={12} padding={0} justifyContent="space-between" alignItems="center">
                    <Grid xs sm md>
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
                    <Grid xs="auto" sm="auto" md="auto" container spacing={3} alignItems="center">
                        <Grid xs md>
                            <Link component={NextLink} href="/animes" color="textSecondary" underline="none">
                                Аніме
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid xs="auto" sm="auto" md="auto">
                        <Avatar src="/images/temp-pp.png" variant="rounded" alt="Profile Picture" />
                    <Grid xs="auto" md="auto">
                        {/*<img src={pp} alt="Profile Picture" />*/}
                        <Typography onClick={() => setAuth(true)}>Вхід</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Auth open={auth} setOpen={setAuth} />
        </AppBar>
    );
};

export default styled(Component)`
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
