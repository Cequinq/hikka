import { FC } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { EntryCard } from '../../components/common';
import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from 'meilisearch';
import { useRouter } from 'next/router';
import { search } from '../../api';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const router = useRouter();
    const { data, isLoading } = useQuery<SearchResponse<Hikka.Anime>>(['search', router.query], () =>
        search(router.query),
    );

    return (
        <Grid className={className} container spacing={3} padding={0}>
            {!isLoading &&
                data &&
                data.hits.map((anime) => (
                    <Grid key={anime.reference} xs={6} sm={4} md={3}>
                        <EntryCard title={anime.title} cover={anime.image} />
                    </Grid>
                ))}
        </Grid>
    );
};

export default styled(Component)``;
