import { Box, Skeleton } from '@mui/material';
import styled from 'styled-components';
import { FC } from 'react';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    return (
        <Box className={className}>
            <Skeleton animation="wave" variant="rectangular" className="cover" />
            <Skeleton animation="wave" variant="text" width="100%" className="title" />
            <Skeleton animation="wave" variant="text" width="35%" />
        </Box>
    );
};

export default styled(Component)`
    .cover {
        padding-top: 140%;
        border-radius: 10px;
    }

    .title {
        margin-top: 16px;
    }
`;
