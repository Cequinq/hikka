import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Typography } from '@mui/material';

interface Props {
    className?: string;
    title: string;
    justifyContent?: 'center' | 'flex-end' | 'flex-start' | 'space-between';
    alignItems?: 'center' | 'flex-end' | 'flex-start';
    children?: ReactElement | ReactElement[];
}

const Component: FC<Props> = ({ className, title, children }) => {
    return (
        <div className={className}>
            <div className="header">
                <Typography>{title}</Typography>
            </div>
            <div className="content">{children}</div>
        </div>
    );
};

export default styled(Component)`
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.palette.secondary.light};

    .header {
        background: ${({ theme }) => theme.palette.secondary.main};
        padding: 16px 21px;
        height: 55px;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 16px;
        min-height: 125px;
        height: 100%;
        justify-content: ${({ justifyContent }) => justifyContent};
        align-items: ${({ alignItems }) => alignItems};
    }
`;
