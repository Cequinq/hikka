import styled from 'styled-components';
import { ReactElement } from 'react';
import Image from 'next/image';
import Layout from '../../../../layout/profile';
import { NextPageWithLayout } from '../../../_app';
import Grid from '@mui/material/Unstable_Grid2';
import {
    Box,
    Divider,
    Paper,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Filters } from '../../../../layout/common';

interface Props {
    className?: string;
}

type Watch = {
    reference: string;
    title_en: string;
    title_jp: string;
    status: string;
    note: string;
    slug: string;
    title: string;
    release: Hikka.Release;
    created: number;
    updated: number;
    season: Hikka.Season;
    user_score: number;
    score: number;
    episodes: {
        total: number;
        watched: number;
    };
    image: string;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.common.white,
        padding: theme.spacing(2),
    },
    padding: theme.spacing(1, 2),
    border: 0,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    backgroundColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.secondary.main,
    },
    border: 0,
}));

const rows: Watch[] = [
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
    {
        reference: '808245e1-3955-42e2-8013-3e9944a485f5',
        title_en: 'Mysterious Girlfriend X',
        title_jp: 'Nazo no Kanojo X',
        status: 'completed',
        note: 'Хороше аніме',
        slug: '12467-nazo-no-kanojo-x',
        title: 'Таємнича подружка Х',
        release: 'tv',
        created: 1659279188,
        updated: 1659279188,
        season: 'summer',
        user_score: 10,
        score: 10,
        episodes: {
            total: 10,
            watched: 10,
        },
        image: 'https://cdn.hikka.io/posters/5114/poster.jpg',
    },
];

const Component: NextPageWithLayout<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Grid container columnSpacing={6} columns={16} rowSpacing={0} padding={0} justifyContent="space-between">
                <Grid xs={16} md={11} mt={3}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell width={1}>#</StyledTableCell>
                                    <StyledTableCell width={1} />
                                    <StyledTableCell>Назва</StyledTableCell>
                                    <StyledTableCell align="right">Оцінка</StyledTableCell>
                                    <StyledTableCell align="right">К-сть серій</StyledTableCell>
                                    <StyledTableCell align="right">Тип</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row, index) => (
                                    <StyledTableRow key={row.reference}>
                                        <StyledTableCell width={1}>{index + 1}</StyledTableCell>
                                        <StyledTableCell width={1}>
                                            <Image
                                                src={row.image}
                                                alt={row.slug}
                                                width={35}
                                                height={50}
                                                className="cover"
                                            />
                                        </StyledTableCell>
                                        <StyledTableCell>{row.title}</StyledTableCell>
                                        <StyledTableCell align="right">{row.user_score}/10</StyledTableCell>
                                        <StyledTableCell align="right">
                                            {row.episodes.watched}/{row.episodes.total}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{row.release}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid xs={0} md="auto" display={{ xs: 'none', md: 'block' }}>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid xs={16} md>
                    <Box position="sticky" top="130px" height="100vh">
                        <Filters />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

Component.getLayout = function getLayout(page: ReactElement) {
    return <Layout>{page}</Layout>;
};

export default styled(Component)`
    .cover {
        object-fit: cover;
        border-radius: 4px;
    }
`;
