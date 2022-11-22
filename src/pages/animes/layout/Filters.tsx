import { FC, useState } from 'react';
import styled from 'styled-components';
import { Autocomplete, Box, Chip, Slider, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
    className?: string;
}

type Type = {
    title: string;
};

type Status = {
    title: string;
};

type Season = {
    title: string;
};

type AgeRating = {
    title: string;
};

const types: Type[] = [
    {
        title: 'Серіал',
    },
    {
        title: 'Фільм',
    },
    {
        title: 'OVA',
    },
    {
        title: 'ONA',
    },
];

const statuses: Status[] = [
    {
        title: 'Онґоінґ',
    },
    {
        title: 'Анонс',
    },
    {
        title: 'Реліз',
    },
];

const seasons: Season[] = [
    {
        title: 'Осінь',
    },
    {
        title: 'Зима',
    },
    {
        title: 'Весна',
    },
    {
        title: 'Літо',
    },
];

const ageRatings: AgeRating[] = [
    {
        title: 'G',
    },
    {
        title: 'PG',
    },
    {
        title: 'PG-13',
    },
    {
        title: 'R',
    },
    {
        title: 'R PLUS',
    },
    {
        title: 'RX',
    },
];

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    {
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        title: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    {
        title: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    {
        title: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    {
        title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    {
        title: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
];

const Component: FC<Props> = ({ className }) => {
    const [selectedStatuses, setSelectedStatuses] = useState<Status[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<Type[]>([]);
    const [selectedSeasons, setSelectedSeasons] = useState<Season[]>([]);
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<AgeRating[]>([]);

    const switchStatus = (status: Status) => {
        setSelectedStatuses((prev) => {
            const newSelected = prev.filter((t) => t.title !== status.title);

            if (newSelected.length === prev.length) {
                return [...prev, status];
            }

            return newSelected;
        });
    };

    const switchType = (type: Type) => {
        setSelectedTypes((prev) => {
            const newSelected = prev.filter((t) => t.title !== type.title);

            if (newSelected.length === prev.length) {
                return [...prev, type];
            }

            return newSelected;
        });
    };

    const switchSeason = (season: Season) => {
        setSelectedSeasons((prev) => {
            const newSelected = prev.filter((t) => t.title !== season.title);

            if (newSelected.length === prev.length) {
                return [...prev, season];
            }

            return newSelected;
        });
    };

    const switchAgeRatings = (ageRating: AgeRating) => {
        setSelectedAgeRatings((prev) => {
            const newSelected = prev.filter((t) => t.title !== ageRating.title);

            if (newSelected.length === prev.length) {
                return [...prev, ageRating];
            }

            return newSelected;
        });
    };

    return (
        <Box className={className} position="sticky" top="80px" height="100vh">
            <Grid container spacing={3} padding={0} className="filters">
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Жанр:
                    </Typography>
                    <Autocomplete
                        fullWidth
                        multiple
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField placeholder="Пошук жанрів" {...params} />}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Студія:
                    </Typography>
                    <Autocomplete
                        fullWidth
                        multiple
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        renderInput={(params) => <TextField placeholder="Пошук студій" {...params} />}
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Статус:
                    </Typography>
                    <Grid container padding={0} spacing={1}>
                        {statuses.map((s) => (
                            <Grid xs="auto" sm="auto" md="auto" key={s.title}>
                                <Chip
                                    onClick={() => switchStatus(s)}
                                    variant={
                                        selectedStatuses.some((ss) => ss.title === s.title) ? 'filled' : 'outlined'
                                    }
                                    label={s.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Тип:
                    </Typography>
                    <Grid container padding={0} spacing={1}>
                        {types.map((t) => (
                            <Grid xs="auto" sm="auto" md="auto" key={t.title}>
                                <Chip
                                    onClick={() => switchType(t)}
                                    variant={selectedTypes.some((st) => st.title === t.title) ? 'filled' : 'outlined'}
                                    label={t.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Сезон:
                    </Typography>
                    <Grid container padding={0} spacing={1}>
                        {seasons.map((s) => (
                            <Grid xs="auto" sm="auto" md="auto" key={s.title}>
                                <Chip
                                    onClick={() => switchSeason(s)}
                                    variant={selectedSeasons.some((ss) => ss.title === s.title) ? 'filled' : 'outlined'}
                                    label={s.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Рейтинг:
                    </Typography>
                    <Grid container padding={0} spacing={1}>
                        {ageRatings.map((r) => (
                            <Grid xs="auto" sm="auto" md="auto" key={r.title}>
                                <Chip
                                    onClick={() => switchAgeRatings(r)}
                                    variant={
                                        selectedAgeRatings.some((sr) => sr.title === r.title) ? 'filled' : 'outlined'
                                    }
                                    label={r.title}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Рік:
                    </Typography>
                    <Slider
                        className="slider"
                        min={1980}
                        max={2022}
                        defaultValue={[1980, 2022]}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                    />
                </Grid>
                <Grid xs={12} sm={12} md={12}>
                    <Typography color="textSecondary" mb={1}>
                        Оцінка:
                    </Typography>
                    <Slider
                        className="slider"
                        min={1}
                        max={10}
                        defaultValue={[1, 10]}
                        step={1}
                        marks
                        valueLabelDisplay="auto"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default styled(Component)`
    .filters {
        max-height: calc(100% - 80px);
        overflow-y: auto;
    }

    .slider {
        margin-left: 16px;
        width: 90%;
    }
`;
