import { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import { EntryCard } from '../../components/common';
import { EntryCard as EntryCardSkeleton } from '../../components/skeletons';
import { useQuery } from '@tanstack/react-query';
import { SearchResponse } from 'meilisearch';
import { useRouter } from 'next/router';
import { search } from '../../api';
import { IconButton, InputAdornment, Pagination, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

interface Props {
    className?: string;
}

const Component: FC<Props> = ({ className }) => {
    const router = useRouter();
    const [page, setPage] = useState<number>(1);
    const [searchText, setSearchText] = useState<string>('');
    const [waitSearchTextEvent, setWaitSearchTextEvent] = useState<ChangeEvent<HTMLInputElement>>();

    const { data, isLoading } = useQuery<SearchResponse<Hikka.Anime>>(['search', router.query], () =>
        search({ ...router.query }),
    );

    const changeSearchText = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setWaitSearchTextEvent(event);
        setSearchText(event.target.value);
    };

    const clearSearchText = () => {
        setSearchText('');

        const { query, ...newQuery } = router.query;
        router.replace({
            query: {
                ...newQuery,
                page: 1,
            },
        });
    };

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

        if (router.query?.query) {
            setSearchText(router.query?.query as string);
        } else {
            setSearchText('');
        }
    }, [router.query]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (waitSearchTextEvent) {
            timer = setTimeout(
                () =>
                    router.replace({
                        query: {
                            ...router.query,
                            page: 1,
                            query: waitSearchTextEvent.target.value,
                        },
                    }),
                1000,
            );
        }
        return () => clearTimeout(timer);
    }, [waitSearchTextEvent]);

    return (
        <Grid className={className} padding={0}>
            <Grid container padding={0} columnSpacing={0} rowSpacing={4} marginTop={2}>
                <Grid xs={12} sm={12} md={12}>
                    <Typography variant="h3" color="textSecondary">
                        Аніме
                    </Typography>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <TextField
                        fullWidth
                        value={searchText}
                        onChange={changeSearchText}
                        placeholder="Пошук по назві"
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),

                            endAdornment: searchText && (
                                <IconButton size="small" onClick={clearSearchText}>
                                    <ClearRoundedIcon />
                                </IconButton>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={3} padding={0} py={3} flex={1}>
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
                {!isLoading && data && data.estimatedTotalHits === 0 && (
                    <Grid xs={12} sm={12} md={12}>
                        <Typography color="textSecondary">На жаль, ми нічого не знайшли по твоєму запиту</Typography>
                    </Grid>
                )}
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
        </Grid>
    );
};

export default styled(Component)`
    height: 100%;
`;
