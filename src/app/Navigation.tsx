import React, { FC } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import {
    Button,
    Container,
    Divider,
    IconButton,
    InputAdornment,
    InputBase,
    Link,
    Paper,
    Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import pp from '../assets/temp-pp.png';
import berserk from '../assets/berserk.png';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    className?: string;
}

const Navigation: FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Container>
                <Grid container spacing={8} justifyContent="space-between" alignItems="center">
                    <Grid xs="auto" md="auto">
                        <Link
                            component={RouterLink}
                            to="/"
                            underline="none"
                            fontWeight={900}
                            fontSize="2rem"
                            fontFamily="Montserrat"
                        >
                            hikka.
                        </Link>
                    </Grid>
                    <Grid xs="auto" md={6}>
                        <Paper className="search">
                            <InputBase
                                placeholder="Пошук по хіцці"
                                fullWidth
                                endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton edge="end">
                                            <SearchIcon color="inherit" />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </Paper>
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
            <Divider className="divider" variant="fullWidth" />
            <Container>
                <Grid container spacing={1} justifyContent="space-between" alignItems="center">
                    <Grid xs={1} md={1}>
                        <Typography>Теми дня:</Typography>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <Button className="button-recommendation">
                            <img src={berserk} alt="pp" />
                            <Link
                                variant="body1"
                                className="text-recommendation"
                                color="textSecondary"
                                underline="none"
                            >
                                Берсерк: Золоте століття
                            </Link>
                        </Button>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <Button className="button-recommendation">
                            <img src={berserk} alt="pp" />
                            <Link
                                variant="body1"
                                className="text-recommendation"
                                color="textSecondary"
                                underline="none"
                            >
                                Берсерк: Золоте століття
                            </Link>
                        </Button>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <Button className="button-recommendation">
                            <img src={berserk} alt="pp" />
                            <Link
                                variant="body1"
                                className="text-recommendation"
                                color="textSecondary"
                                underline="none"
                            >
                                Берсерк: Золоте століття
                            </Link>
                        </Button>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <Button className="button-recommendation">
                            <img src={berserk} alt="pp" />
                            <Link
                                variant="body1"
                                className="text-recommendation"
                                color="textSecondary"
                                underline="none"
                            >
                                Берсерк
                            </Link>
                        </Button>
                    </Grid>
                    <Grid xs="auto" md="auto">
                        <Button className="button-recommendation">
                            <img src={berserk} alt="pp" />
                            <Link
                                variant="body1"
                                className="text-recommendation"
                                color="textSecondary"
                                underline="none"
                            >
                                Берсерк
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            <Divider className="divider" variant="fullWidth" />
        </div>
    );
};

export default styled(Navigation)`
    margin-top: 15px;

    .search {
        display: flex;
        // padding: ${({ theme }) => theme.spacing(1)};
        // align-items: center;
        height: 58px;
        //width: 100px;

        input {
            width: 100px;
            transition: all 0.3s;
            &:focus {
                width: 100%;
            }
        }
    }

    .divider {
        background: #292929;
        margin: 16px 0 16px 0;
    }

    .button-recommendation {
        text-transform: none;
    }

    .text-recommendation {
        margin-left: 12px;
    }
`;
