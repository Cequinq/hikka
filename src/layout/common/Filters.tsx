import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Autocomplete, Button, Chip, darken, lighten, Slider, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouter } from 'next/router';

interface Props {
    className?: string;
}

type Filter<T> = {
    title: string;
    slug: T;
};

const types: Filter<Hikka.Release>[] = [
    {
        title: 'Серіал',
        slug: 'tv',
    },
    {
        title: 'Фільм',
        slug: 'movie',
    },
    {
        title: 'OVA',
        slug: 'ova',
    },
    {
        title: 'ONA',
        slug: 'ona',
    },
    {
        title: 'Спешл',
        slug: 'special',
    },
    {
        title: 'Кліп',
        slug: 'music',
    },
];

const statuses: Filter<Hikka.Status>[] = [
    {
        title: 'Онґоінґ',
        slug: 'airing',
    },
    {
        title: 'Анонс',
        slug: 'not_yet',
    },
    {
        title: 'Реліз',
        slug: 'finished',
    },
];

const seasons: Filter<Hikka.Season>[] = [
    {
        title: 'Осінь',
        slug: 'fall',
    },
    {
        title: 'Зима',
        slug: 'winter',
    },
    {
        title: 'Весна',
        slug: 'spring',
    },
    {
        title: 'Літо',
        slug: 'summer',
    },
];

const ageRatings: Filter<Hikka.AgeRating>[] = [
    {
        title: 'G',
        slug: 'g',
    },
    {
        title: 'PG',
        slug: 'pg',
    },
    {
        title: 'PG-13',
        slug: 'pg_13',
    },
    {
        title: 'R',
        slug: 'r',
    },
    {
        title: 'R PLUS',
        slug: 'r_plus',
    },
    {
        title: 'RX',
        slug: 'rx',
    },
];

const genres: Hikka.Genre[] = [
    {
        reference: '2e3b8c17-981a-49f2-96a1-133d008041eb',
        original: 'Action',
        name: 'Бойовик',
        slug: 'boyovyk',
        type: 'genre',
        mal_id: 1,
        description: null,
    },
    {
        reference: '69e89bba-ef90-468d-8e72-6856ca7da793',
        original: 'Adventure',
        name: 'Пригоди',
        slug: 'pryhody',
        type: 'genre',
        mal_id: 2,
        description: null,
    },
    {
        reference: 'e0c56080-9665-4855-a6ab-829e6102debe',
        original: 'Avant Garde',
        name: 'Авангард',
        slug: 'avanhard',
        type: 'genre',
        mal_id: 5,
        description: null,
    },
    {
        reference: '8bd919a0-a75f-4d6c-ad8d-3dbe937c88f8',
        original: 'Boys Love',
        name: 'Хлопчаче кохання',
        slug: 'khlopchache-kokhannya',
        type: 'genre',
        mal_id: 28,
        description: null,
    },
    {
        reference: 'e0c371f0-f992-4d19-9b65-575d7335d1be',
        original: 'Comedy',
        name: 'Комедія',
        slug: 'komediya',
        type: 'genre',
        mal_id: 4,
        description: null,
    },
    {
        reference: '7bf29d4e-5fac-4920-b3cd-454b56f50169',
        original: 'Drama',
        name: 'Драма',
        slug: 'drama',
        type: 'genre',
        mal_id: 8,
        description: null,
    },
    {
        reference: '94c2fca4-d285-4da5-bfcb-d74b41b4cf51',
        original: 'Fantasy',
        name: 'Фентезі',
        slug: 'fentezi',
        type: 'genre',
        mal_id: 10,
        description: null,
    },
    {
        reference: '23e32450-1046-4ead-a219-050aadcb2846',
        original: 'Girls Love',
        name: 'Дівчаче кохання',
        slug: 'divchache-kokhannya',
        type: 'genre',
        mal_id: 26,
        description: null,
    },
    {
        reference: 'bcc93402-d662-4908-afd7-91918300555b',
        original: 'Gourmet',
        name: 'Про їжу',
        slug: 'pro-yizhu',
        type: 'genre',
        mal_id: 47,
        description: null,
    },
    {
        reference: '89e47689-190f-4387-8452-49d15600f044',
        original: 'Horror',
        name: 'Жахи',
        slug: 'zhakhy',
        type: 'genre',
        mal_id: 14,
        description: null,
    },
    {
        reference: '9aded52b-50ad-4d22-8ce5-c6042d82efdf',
        original: 'Mystery',
        name: 'Загадкове',
        slug: 'zahadkove',
        type: 'genre',
        mal_id: 7,
        description: null,
    },
    {
        reference: 'c2991908-d211-4035-9abd-bbf540155b9a',
        original: 'Romance',
        name: 'Романтика',
        slug: 'romantyka',
        type: 'genre',
        mal_id: 22,
        description: null,
    },
    {
        reference: 'e9388dd5-0144-4fec-ba21-05d150554bff',
        original: 'Sci-Fi',
        name: 'Фантастика',
        slug: 'fantastyka',
        type: 'genre',
        mal_id: 24,
        description: null,
    },
    {
        reference: '86aad4e4-cf69-4a55-bd47-5c182086dc66',
        original: 'Slice of Life',
        name: 'Буденність',
        slug: 'budennist',
        type: 'genre',
        mal_id: 36,
        description: null,
    },
    {
        reference: '67a574da-ec2b-4ed3-acd2-b584ab938a4a',
        original: 'Sports',
        name: 'Спорт',
        slug: 'sport',
        type: 'genre',
        mal_id: 30,
        description: null,
    },
    {
        reference: 'dc39a8ab-27d2-410c-8d6e-1179d37c0b5e',
        original: 'Supernatural',
        name: 'Надприродне',
        slug: 'nadpryrodne',
        type: 'genre',
        mal_id: 37,
        description: null,
    },
    {
        reference: '96d436ff-b39f-4f67-a8c2-909d8aeeaccf',
        original: 'Suspense',
        name: 'Трилер',
        slug: 'tryler',
        type: 'genre',
        mal_id: 41,
        description: null,
    },
    {
        reference: '7a93b974-cc7a-4d3a-9037-5c5d0ebce55b',
        original: 'Ecchi',
        name: 'Еччі',
        slug: 'echchi',
        type: 'explicit',
        mal_id: 9,
        description: null,
    },
    {
        reference: 'efbde780-ae54-42b7-a6cd-220c53ecf87c',
        original: 'Erotica',
        name: 'Еротика',
        slug: 'erotyka',
        type: 'explicit',
        mal_id: 49,
        description: null,
    },
    {
        reference: '1ec18f40-0d48-4c72-8f95-5c8e9c383e08',
        original: 'Hentai',
        name: 'Хентай',
        slug: 'khentay',
        type: 'explicit',
        mal_id: 12,
        description: null,
    },
    {
        reference: 'ce1f5be4-8ab0-4d17-9f0c-af5a7657c876',
        original: 'Adult Cast',
        name: 'Про дорослих',
        slug: 'pro-doroslykh',
        type: 'theme',
        mal_id: 50,
        description: null,
    },
    {
        reference: 'abec1e78-2810-4088-8b13-5db93ec0f272',
        original: 'Anthropomorphic',
        name: 'Антропоморфізм',
        slug: 'antropomorfizm',
        type: 'theme',
        mal_id: 51,
        description: null,
    },
    {
        reference: '702a1dc3-0470-41bc-830a-434de3bf5ff8',
        original: 'CGDCT',
        name: 'Милі дівчата роблять милі речі',
        slug: 'myli-divchata-roblyat-myli-rechi',
        type: 'theme',
        mal_id: 52,
        description: null,
    },
    {
        reference: '2b27a0b0-7fd0-4128-806d-9c06d954d18f',
        original: 'Childcare',
        name: 'Догляд за дітьми',
        slug: 'dohlyad-za-ditmy',
        type: 'theme',
        mal_id: 53,
        description: null,
    },
    {
        reference: '2083f25c-87f7-4566-a1b5-8a51ecbd1faf',
        original: 'Combat Sports',
        name: 'Бойовий спорт',
        slug: 'boyovyy-sport',
        type: 'theme',
        mal_id: 54,
        description: null,
    },
    {
        reference: '04e23956-9534-4479-adcd-1e2f8973def4',
        original: 'Crossdressing',
        name: 'Переодягання',
        slug: 'pereodyahannya',
        type: 'theme',
        mal_id: 81,
        description: null,
    },
    {
        reference: 'bcdfaf91-fc3e-4bff-b588-43a0df85520b',
        original: 'Delinquents',
        name: 'Порушники',
        slug: 'porushnyky',
        type: 'theme',
        mal_id: 55,
        description: null,
    },
    {
        reference: '187fe728-72e0-43ec-9128-9b5c97eff60d',
        original: 'Detective',
        name: 'Детектив',
        slug: 'detektyv',
        type: 'theme',
        mal_id: 39,
        description: null,
    },
    {
        reference: '66e46a3a-239d-4c85-8982-63851801cdc9',
        original: 'Educational',
        name: 'Освітнє',
        slug: 'osvitnye',
        type: 'theme',
        mal_id: 56,
        description: null,
    },
    {
        reference: '0de74f0e-51c8-421e-8d75-3a530f83491d',
        original: 'Gag Humor',
        name: 'Жарти',
        slug: 'zharty',
        type: 'theme',
        mal_id: 57,
        description: null,
    },
    {
        reference: '59b98c78-4679-4b6d-b554-ec7e48a4b7b4',
        original: 'Gore',
        name: 'Гротеск',
        slug: 'hrotesk',
        type: 'theme',
        mal_id: 58,
        description: null,
    },
    {
        reference: '6db0e460-af0a-41e4-bc99-9cb95bafaa84',
        original: 'Harem',
        name: 'Гарем',
        slug: 'harem',
        type: 'theme',
        mal_id: 35,
        description: null,
    },
    {
        reference: 'a26e60db-f251-4515-b415-b6c7abc23264',
        original: 'High Stakes Game',
        name: 'Високі ставки',
        slug: 'vysoki-stavky',
        type: 'theme',
        mal_id: 59,
        description: null,
    },
    {
        reference: '23e25af4-4aac-4e70-abae-cfbb6aa5ab6b',
        original: 'Historical',
        name: 'Історичне',
        slug: 'istorychne',
        type: 'theme',
        mal_id: 13,
        description: null,
    },
    {
        reference: 'f2af3e48-9481-46f2-89ec-401cf12f2f2b',
        original: 'Idols (Female)',
        name: 'Ідоли (дівчата)',
        slug: 'idoly-divchata',
        type: 'theme',
        mal_id: 60,
        description: null,
    },
    {
        reference: 'cb943860-5439-43de-95a8-ea67256b4b2e',
        original: 'Idols (Male)',
        name: 'Ідоли (чоловіки)',
        slug: 'idoly-choloviky',
        type: 'theme',
        mal_id: 61,
        description: null,
    },
    {
        reference: '83b6cea1-b858-423e-b917-7ea87d655d52',
        original: 'Isekai',
        name: 'Ісекай',
        slug: 'isekay',
        type: 'theme',
        mal_id: 62,
        description: null,
    },
    {
        reference: '6e39b36f-3a8c-40ab-bd2d-215156744c42',
        original: 'Iyashikei',
        name: 'Іяшикай',
        slug: 'iyashykay',
        type: 'theme',
        mal_id: 63,
        description: null,
    },
    {
        reference: '6f6be127-ac83-4fc3-9129-5099af906665',
        original: 'Love Polygon',
        name: 'Любовний багатокутник',
        slug: 'lyubovnyy-bahatokutnyk',
        type: 'theme',
        mal_id: 64,
        description: null,
    },
    {
        reference: '29e62000-2403-4fb7-bf07-fdddf09e2b5f',
        original: 'Magical Sex Shift',
        name: 'Зміна статі',
        slug: 'zmina-stati',
        type: 'theme',
        mal_id: 65,
        description: null,
    },
    {
        reference: 'c4acda07-3ca2-4000-b145-19f247105c5c',
        original: 'Mahou Shoujo',
        name: 'Дівчина-чарівниця',
        slug: 'divchyna-charivnytsya',
        type: 'theme',
        mal_id: 66,
        description: null,
    },
    {
        reference: '963123b1-35a0-4416-8030-5744bfdcc56d',
        original: 'Martial Arts',
        name: 'Бойові мистецтва',
        slug: 'boyovi-mystetstva',
        type: 'theme',
        mal_id: 17,
        description: null,
    },
    {
        reference: '08f0f628-7455-4bfd-89c7-eedc45cf5aad',
        original: 'Mecha',
        name: 'Мехи',
        slug: 'mekhy',
        type: 'theme',
        mal_id: 18,
        description: null,
    },
    {
        reference: '1077f2f6-066d-497a-b0f1-14b6429d0b55',
        original: 'Medical',
        name: 'Медицина',
        slug: 'medytsyna',
        type: 'theme',
        mal_id: 67,
        description: null,
    },
    {
        reference: '35d88aca-38ac-487c-bca0-539d9e915fb2',
        original: 'Military',
        name: 'Військові',
        slug: 'viyskovi',
        type: 'theme',
        mal_id: 38,
        description: null,
    },
    {
        reference: 'ceea60f6-d9d8-46d5-889b-f3e3fc2bcd1b',
        original: 'Music',
        name: 'Музика',
        slug: 'muzyka',
        type: 'theme',
        mal_id: 19,
        description: null,
    },
    {
        reference: '7af4f3e0-5caa-49e4-bb21-360240ec27f4',
        original: 'Mythology',
        name: 'Міфологія',
        slug: 'mifolohiya',
        type: 'theme',
        mal_id: 6,
        description: null,
    },
    {
        reference: 'ab375aa9-820b-4b46-a734-485ef7dc29ad',
        original: 'Organized Crime',
        name: 'Організована злочинність',
        slug: 'orhanizovana-zlochynnist',
        type: 'theme',
        mal_id: 68,
        description: null,
    },
    {
        reference: '4a668d85-5f25-4a58-bbfb-62783a5468cf',
        original: 'Otaku Culture',
        name: 'Культура отаку',
        slug: 'kultura-otaku',
        type: 'theme',
        mal_id: 69,
        description: null,
    },
    {
        reference: '81f25409-a536-4563-9e68-034c34a35106',
        original: 'Parody',
        name: 'Пародія',
        slug: 'parodiya',
        type: 'theme',
        mal_id: 20,
        description: null,
    },
    {
        reference: 'a051a857-a5b8-4261-a3a7-8fe25794b1d4',
        original: 'Performing Arts',
        name: 'Виконавче мистецтво',
        slug: 'vykonavche-mystetstvo',
        type: 'theme',
        mal_id: 70,
        description: null,
    },
    {
        reference: '48eb425d-2bbb-42fc-94ba-27260798e539',
        original: 'Pets',
        name: 'Тварини',
        slug: 'tvaryny',
        type: 'theme',
        mal_id: 71,
        description: null,
    },
    {
        reference: '78e02640-0104-4361-ba8e-65fd7e3c967e',
        original: 'Psychological',
        name: 'Психологія',
        slug: 'psykholohiya',
        type: 'theme',
        mal_id: 40,
        description: null,
    },
    {
        reference: '06d775d2-fcc9-497d-acaa-c6d57a5b5d55',
        original: 'Racing',
        name: 'Гонки',
        slug: 'honky',
        type: 'theme',
        mal_id: 3,
        description: null,
    },
    {
        reference: '293c8286-8eda-423a-8924-d202bed6d953',
        original: 'Reincarnation',
        name: 'Переродження',
        slug: 'pererodzhennya',
        type: 'theme',
        mal_id: 72,
        description: null,
    },
    {
        reference: 'e78535ef-7216-4eaf-b6fb-59395d87b472',
        original: 'Reverse Harem',
        name: 'Реверсивний гарем',
        slug: 'reversyvnyy-harem',
        type: 'theme',
        mal_id: 73,
        description: null,
    },
    {
        reference: '30b6707a-7ca9-41b7-af08-678075e3ed1b',
        original: 'Romantic Subtext',
        name: 'Романтичний підтекст',
        slug: 'romantychnyy-pidtekst',
        type: 'theme',
        mal_id: 74,
        description: null,
    },
    {
        reference: '59dfc1f7-4ccf-4f9b-af2a-78da336f8756',
        original: 'Samurai',
        name: 'Самураї',
        slug: 'samurayi',
        type: 'theme',
        mal_id: 21,
        description: null,
    },
    {
        reference: 'ca6c666a-f8e0-46aa-aa7a-7ef64031a840',
        original: 'School',
        name: 'Школа',
        slug: 'shkola',
        type: 'theme',
        mal_id: 23,
        description: null,
    },
    {
        reference: '0f8a7a2a-e986-4e59-82f1-c532496a203a',
        original: 'Showbiz',
        name: 'Шоу-біз',
        slug: 'shou-biz',
        type: 'theme',
        mal_id: 75,
        description: null,
    },
    {
        reference: '7d47edd1-ff01-4f34-8f57-c5f86e935ec9',
        original: 'Space',
        name: 'Космос',
        slug: 'kosmos',
        type: 'theme',
        mal_id: 29,
        description: null,
    },
    {
        reference: '5ab20bb2-d710-4701-93a2-d22db2d37cf4',
        original: 'Strategy Game',
        name: 'Стратегія',
        slug: 'stratehiya',
        type: 'theme',
        mal_id: 11,
        description: null,
    },
    {
        reference: 'edc4b97e-7b1e-4748-9053-7ae8e16be43f',
        original: 'Super Power',
        name: 'Супергерої',
        slug: 'superheroyi',
        type: 'theme',
        mal_id: 31,
        description: null,
    },
    {
        reference: 'ca944fea-4b7b-4c42-9349-21ff9e760af4',
        original: 'Survival',
        name: 'Виживання',
        slug: 'vyzhyvannya',
        type: 'theme',
        mal_id: 76,
        description: null,
    },
    {
        reference: 'c446c6a3-44c5-472b-bb63-967999fe948f',
        original: 'Team Sports',
        name: 'Командний спорт',
        slug: 'komandnyy-sport',
        type: 'theme',
        mal_id: 77,
        description: null,
    },
    {
        reference: '0c2be4ea-3b58-48df-863e-342e6085e526',
        original: 'Time Travel',
        name: 'Подорожі в часі',
        slug: 'podorozhi-v-chasi',
        type: 'theme',
        mal_id: 78,
        description: null,
    },
    {
        reference: '4418168b-04ee-4b43-85cd-05f0dc52dd3c',
        original: 'Vampire',
        name: 'Вампіри',
        slug: 'vampiry',
        type: 'theme',
        mal_id: 32,
        description: null,
    },
    {
        reference: 'e7dbb2ef-d160-4271-96c9-085bf9c3e09e',
        original: 'Video Game',
        name: "Комп'ютерні ігри",
        slug: 'kompyuterni-ihry',
        type: 'theme',
        mal_id: 79,
        description: null,
    },
    {
        reference: '9f3d8154-79bb-47c0-8354-43330e712330',
        original: 'Visual Arts',
        name: 'Візуальне мистецтво',
        slug: 'vizualne-mystetstvo',
        type: 'theme',
        mal_id: 80,
        description: null,
    },
    {
        reference: '75043dfe-89f2-43d1-bd9f-6d15ed0f6563',
        original: 'Workplace',
        name: 'Робота',
        slug: 'robota',
        type: 'theme',
        mal_id: 48,
        description: null,
    },
    {
        reference: '5fbaa7b3-aa85-45a0-a3ff-37b95ad1b451',
        original: 'Josei',
        name: 'Дзьосей',
        slug: 'dzosey',
        type: 'demographic',
        mal_id: 43,
        description: null,
    },
    {
        reference: 'a91fbaab-6353-47b6-9a18-cb98cd47fa18',
        original: 'Kids',
        name: 'Для дітей',
        slug: 'dlya-ditey',
        type: 'demographic',
        mal_id: 15,
        description: null,
    },
    {
        reference: '0da5ae50-3cb4-4963-a368-c8b93106d12c',
        original: 'Seinen',
        name: 'Сейнен',
        slug: 'seynen',
        type: 'demographic',
        mal_id: 42,
        description: null,
    },
    {
        reference: '6fefc3e0-8f9a-4a42-b9f9-b6e378c45d57',
        original: 'Shoujo',
        name: 'Шьоджьо',
        slug: 'shodzho',
        type: 'demographic',
        mal_id: 25,
        description: null,
    },
    {
        reference: 'cd97db5c-5c95-478f-b893-91d9c6cd9a97',
        original: 'Shounen',
        name: 'Шьонен',
        slug: 'shonen',
        type: 'demographic',
        mal_id: 27,
        description: null,
    },
];

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode === 'light'
            ? lighten(theme.palette.primary.light, 0.85)
            : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
    padding: 0,
});

const Component: FC<Props> = ({ className }) => {
    const [selectedStatuses, setSelectedStatuses] = useState<Hikka.Status[]>([]);
    const [selectedTypes, setSelectedTypes] = useState<Hikka.Release[]>([]);
    const [selectedSeasons, setSelectedSeasons] = useState<Hikka.Season[]>([]);
    const [selectedAgeRatings, setSelectedAgeRatings] = useState<Hikka.AgeRating[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<Hikka.Genre[]>([]);
    const [years, setYears] = useState<number[]>([1980, 2022]);
    const [score, setScore] = useState<number[]>([1, 10]);
    const router = useRouter();

    const changeGenres = (event: React.SyntheticEvent, value: Hikka.Genre[]) => {
        if (value.length > 0) {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    genres: value.map((v) => v.slug).join(','),
                },
            });
        } else {
            const { genres: empty, ...newQuery } = router.query;

            router.replace({
                query: {
                    ...newQuery,
                    page: 1,
                },
            });
        }
    };

    const changeYears = (event: Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setYears(newValue);
    };

    const confirmYears = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        router.replace({
            query: {
                ...router.query,
                page: 1,
                year: newValue.join(','),
            },
        });
    };

    const changeScore = (event: Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setScore(newValue);
    };

    const confirmScore = (event: React.SyntheticEvent | Event, newValue: number | number[]) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        router.replace({
            query: {
                ...router.query,
                page: 1,
                score: newValue.join(','),
            },
        });
    };

    const switchStatus = (status: Filter<Hikka.Status>) => {
        const newSelected = selectedStatuses.filter((t) => t !== status.slug);

        if (newSelected.length === selectedStatuses.length) {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    status: [...selectedStatuses, status.slug].join(','),
                },
            });
        } else {
            if (newSelected.length > 0) {
                router.replace({
                    query: {
                        ...router.query,
                        page: 1,
                        status: newSelected.join(','),
                    },
                });
            } else {
                const { status: empty, ...newQuery } = router.query;
                router.replace({
                    query: {
                        ...newQuery,
                        page: 1,
                    },
                });
            }
        }
    };

    const switchType = (type: Filter<Hikka.Release>) => {
        const newSelected = selectedTypes.filter((t) => t !== type.slug);

        if (newSelected.length === selectedTypes.length) {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    release: [...selectedTypes, type.slug].join(','),
                },
            });
        } else {
            if (newSelected.length > 0) {
                router.replace({
                    query: {
                        ...router.query,
                        page: 1,
                        release: newSelected.join(','),
                    },
                });
            } else {
                const { release: empty, ...newQuery } = router.query;
                router.replace({
                    query: {
                        ...newQuery,
                        page: 1,
                    },
                });
            }
        }
    };

    const switchSeason = (season: Filter<Hikka.Season>) => {
        const newSelected = selectedSeasons.filter((t) => t !== season.slug);

        if (newSelected.length === selectedSeasons.length) {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    season: [...selectedSeasons, season.slug].join(','),
                },
            });
        } else {
            if (newSelected.length > 0) {
                router.replace({
                    query: {
                        ...router.query,
                        page: 1,
                        season: newSelected.join(','),
                    },
                });
            } else {
                const { season: empty, ...newQuery } = router.query;
                router.replace({
                    query: {
                        ...newQuery,
                        page: 1,
                    },
                });
            }
        }
    };

    const switchAgeRatings = (ageRating: Filter<Hikka.AgeRating>) => {
        const newSelected = selectedAgeRatings.filter((t) => t !== ageRating.slug);

        if (newSelected.length === selectedAgeRatings.length) {
            router.replace({
                query: {
                    ...router.query,
                    page: 1,
                    rating: [...selectedAgeRatings, ageRating.slug].join(','),
                },
            });
        } else {
            if (newSelected.length > 0) {
                router.replace({
                    query: {
                        ...router.query,
                        page: 1,
                        rating: newSelected.join(','),
                    },
                });
            } else {
                const { rating: empty, ...newQuery } = router.query;
                router.replace({
                    query: {
                        ...newQuery,
                        page: 1,
                    },
                });
            }
        }
    };

    const getGroupTitle = (type: Hikka.GenreType) => {
        switch (type) {
            case 'theme':
                return 'Тематичні';
            case 'explicit':
                return 'Дорослі';
            case 'demographic':
                return 'Демографічні';
            default:
                return 'Загальні';
        }
    };

    const removeFilters = () => {
        const {
            page,
            rating,
            genres: emptyGenres,
            season,
            release,
            status,
            year,
            emptyScore,
            query,
            ...etc
        } = router.query;

        router.replace({
            query: etc,
        });
    };

    const isRemoveFiltersDisabled = () => {
        const { page, ...etc } = router.query;

        return Object.keys(etc).length <= 0;
    };

    useEffect(() => {
        if (router.query?.rating) {
            setSelectedAgeRatings((router.query.rating as string).split(',') as Hikka.AgeRating[]);
        } else {
            setSelectedAgeRatings([]);
        }

        if (router.query?.season) {
            setSelectedSeasons((router.query.season as string).split(',') as Hikka.Season[]);
        } else {
            setSelectedSeasons([]);
        }

        if (router.query?.release) {
            setSelectedTypes((router.query.release as string).split(',') as Hikka.Release[]);
        } else {
            setSelectedTypes([]);
        }

        if (router.query?.status) {
            setSelectedStatuses((router.query.status as string).split(',') as Hikka.Status[]);
        } else {
            setSelectedStatuses([]);
        }

        if (router.query?.year) {
            setYears((router.query.year as string).split(',').map((y) => parseInt(y)));
        } else {
            setYears([1980, 2022]);
        }

        if (router.query?.score) {
            setScore((router.query.score as string).split(',').map((y) => parseInt(y)));
        } else {
            setScore([1, 10]);
        }

        if (router.query?.genres) {
            const parsed = (router.query.genres as string).split(',');

            setSelectedGenres(genres.filter((g) => parsed.some((p) => p === g.slug)));
        } else {
            setSelectedGenres([]);
        }
    }, [router.query]);

    return (
        <Grid container className={className} spacing={3} padding={0} py={3} marginTop={3}>
            <Grid xs={12} sm={12} md={12}>
                <Typography color="textSecondary" mb={1}>
                    Жанр:
                </Typography>
                <Autocomplete
                    fullWidth
                    multiple
                    value={selectedGenres}
                    onChange={changeGenres}
                    options={genres}
                    groupBy={(option) => option.type}
                    getOptionLabel={(option) => option.name}
                    renderGroup={(params) => (
                        <li>
                            <GroupHeader>{getGroupTitle(params.group as Hikka.GenreType)}</GroupHeader>
                            <GroupItems>{params.children}</GroupItems>
                        </li>
                    )}
                    renderInput={(params) => <TextField placeholder="Пошук жанрів" {...params} />}
                />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
                <Typography color="textSecondary" mb={1}>
                    Статус:
                </Typography>
                <Grid container padding={0} spacing={1}>
                    {statuses.map((s) => (
                        <Grid xs="auto" sm="auto" md="auto" key={s.slug}>
                            <Chip
                                onClick={() => switchStatus(s)}
                                variant={selectedStatuses.some((ss) => ss === s.slug) ? 'filled' : 'outlined'}
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
                        <Grid xs="auto" sm="auto" md="auto" key={t.slug}>
                            <Chip
                                onClick={() => switchType(t)}
                                variant={selectedTypes.some((st) => st === t.slug) ? 'filled' : 'outlined'}
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
                        <Grid xs="auto" sm="auto" md="auto" key={s.slug}>
                            <Chip
                                onClick={() => switchSeason(s)}
                                variant={selectedSeasons.some((ss) => ss === s.slug) ? 'filled' : 'outlined'}
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
                        <Grid xs="auto" sm="auto" md="auto" key={r.slug}>
                            <Chip
                                onClick={() => switchAgeRatings(r)}
                                variant={selectedAgeRatings.some((sr) => sr === r.slug) ? 'filled' : 'outlined'}
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
                    onChange={changeYears}
                    onChangeCommitted={confirmYears}
                    value={years}
                    step={1}
                    marks
                    disableSwap
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
                    onChange={changeScore}
                    onChangeCommitted={confirmScore}
                    value={score}
                    step={1}
                    marks
                    disableSwap
                    valueLabelDisplay="auto"
                />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
                <Button
                    color="error"
                    size="large"
                    disabled={isRemoveFiltersDisabled()}
                    onClick={removeFilters}
                    fullWidth
                    variant="outlined"
                >
                    Очистити
                </Button>
            </Grid>
        </Grid>
    );
};

export default styled(Component)`
    max-height: calc(100% - 80px);
    overflow-y: auto;

    .slider {
        margin-left: 16px;
        width: 90%;
    }
`;
