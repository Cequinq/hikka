import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Box, Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Grid container padding={0} spacing={3} my={3} className={className}>
            <Grid xs={12} sm={12} md={12}>
                <div className="cover">
                    <Avatar variant="rounded" src="/images/avatar.png" className="avatar" title="test" />
                </div>
            </Grid>
            <Grid xs sm md>
                <Typography variant="h2">traumaexpress</Typography>
                <Typography marginTop={2}>є місце, де нема зла і добра — я чекаю на тебе там</Typography>
                <Grid container padding={0} marginTop={5}>
                    <Grid xs="auto" sm="auto" md="auto">
                        <Typography>
                            <Box component="span" fontWeight={700}>
                                485
                            </Box>{' '}
                            Підпісників
                        </Typography>
                    </Grid>
                    <Grid xs="auto" sm="auto" md="auto">
                        <Typography>
                            <Box component="span" fontWeight={700}>
                                10
                            </Box>{' '}
                            Відстежуються
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} sm="auto" md="auto">
                <Button fullWidth variant="contained" size="large" startIcon={<StarOutlineIcon />}>
                    Підписатись
                </Button>
            </Grid>
        </Grid>
    );
};

export default styled(Component)`
    .cover {
        position: relative;
        background-image: url('/images/cover.png');
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        height: 220px;
        width: 100%;
        border-radius: 10px;
        margin-bottom: ${({ theme }) => theme.spacing(3)};

        .avatar {
            width: 150px;
            height: 150px;
            border: 4px solid black;
            position: absolute;
            bottom: -${({ theme }) => theme.spacing(3)};
            left: ${({ theme }) => theme.spacing(3)};
        }
    }
`;
