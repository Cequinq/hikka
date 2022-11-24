import { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { EntryCard } from '../../components/common';
import { EntryCard as EntryCardSkeleton } from '../../components/skeletons';
import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from 'meilisearch';
import { useRouter } from 'next/router';
import { search } from '../../api';
import { Pagination } from '@mui/material';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);
    const { data, isLoading } = useQuery<SearchResponse<Hikka.Anime>>(['search', router.query], () =>
        search({ ...router.query }),
    );

    const changePage = (event: ChangeEvent<unknown>, value: number) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        router.replace({
            query: {
                ...router.query,
                page: value,
            },
        });
    };

    useEffect(() => {
        if (router.query?.page) {
            setPage(parseInt(router.query?.page as string));
        }
    }, [router.query]);

    return (
        <div className={className}>
            <Grid className="list" container spacing={3} padding={0} py={3}>
                {!isLoading && data
                    ? data.hits.map((anime) => (
                          <Grid key={anime.reference} xs={6} sm={4} md={3}>
                              <EntryCard title={anime.title} cover={anime.image} />
                          </Grid>
                      ))
                    : Array.from(Array(12).keys()).map((v, i) => (
                          <Grid key={i} xs={6} sm={4} md={3}>
                              <EntryCardSkeleton />
                          </Grid>
                      ))}
            </Grid>
            {!isLoading && data && data.estimatedTotalHits > data.limit && (
                <Pagination
                    onChange={changePage}
                    page={page}
                    shape="rounded"
                    count={Math.ceil(data.estimatedTotalHits / data.limit)}
                    size="large"
                />
            )}
        </div>
    );
};

export default styled(Component)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    .list {
        width: 100%;
        flex: 1;
    }
`;
