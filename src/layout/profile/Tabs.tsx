import { FC } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const router = useRouter();

    return (
        <Grid container className={className} spacing={3} padding={0} justifyContent="center">
            <Grid xs="auto" sm="auto" md="auto">
                <Button
                    component={NextLink}
                    href={`/${router.query.username}`}
                    variant={router.pathname === '/[username]' ? 'contained' : 'text'}
                    color="secondary"
                    className="tab-btn"
                >
                    Профіль
                </Button>
            </Grid>
            <Grid xs="auto" sm="auto" md="auto">
                <Button
                    component={NextLink}
                    href={`/${router.query.username}/list/anime`}
                    variant={router.pathname === '/[username]/list/anime' ? 'contained' : 'text'}
                    color="secondary"
                    className="tab-btn"
                >
                    Аніме
                </Button>
            </Grid>
        </Grid>
    );
};

export default styled(Component)`
    border-bottom: 1px solid ${({ theme }) => theme.palette.divider};
    border-top: 1px solid ${({ theme }) => theme.palette.divider};
    background-color: ${({ theme }) => theme.palette.background.default};

    .tab-btn {
        border-radius: 50px;
    }
`;
