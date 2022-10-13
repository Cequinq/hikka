import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import { FC } from 'react';

interface Props {
    className?: string;
    title: string;
    cover: string;
}

const Component: FC<Props> = ({ className, title }) => {
    return (
        <Box className={className}>
            <div className="cover" />
            <Typography marginTop={2} className="title">
                {title}
            </Typography>
        </Box>
    );
};

export default styled(Component)`
    .cover {
        background: url(${({ cover }) => cover});
        padding-top: 140%;
        background-size: cover;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: background-size 0.2s;
        border-radius: 10px;
    }

    .title {
        transition: color 0.2s;
    }

    &:hover {
        cursor: pointer;
        .cover {
            background-size: 120% 120%;
        }

        .title {
            color: ${({ theme }) => theme.palette.primary.main};
        }
    }
`;
