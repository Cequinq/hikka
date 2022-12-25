import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Button, Dialog, Link, TextField, Typography } from '@mui/material';
// import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';

interface Props {
    className?: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

// interface FormData {
//     email: string;
//     password: string;
// }

const Component: FC<Props> = ({ className, open, setOpen }) => {
    // const { register } = useForm<FormData>();

    return (
        <Dialog
            open={open}
            className={className}
            PaperProps={{ className: 'container' }}
            fullWidth
            maxWidth="sm"
            onClose={() => setOpen(false)}
        >
            <Grid container p={0} height="100%" justifyContent="space-between">
                <Grid xs="auto" md="auto">
                    <Image src="/images/auth.png" className="cover" width={220} height={600} alt="Login Image" />
                </Grid>
                <Grid xs={12} md px={6} display="flex" flexDirection="column" justifyContent="center">
                    <Typography mb={4} fontWeight={600} fontSize="2.5rem" fontFamily="Montserrat" alignSelf="center">
                        Увійти
                    </Typography>
                    <Box my={0.5}>
                        <TextField fullWidth placeholder="Логін" />
                    </Box>
                    <Box my={0.5}>
                        <TextField fullWidth placeholder="Пароль" />
                    </Box>
                    <Box my={0.5}>
                        <Button fullWidth variant="contained" size="large">
                            Реєстрація
                        </Button>
                    </Box>
                    <Typography alignSelf="start" mt={4}>
                        Не маєте профілю? <Link href="#">Зареєструйтеся</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Dialog>
    );
};

export default styled(Component)`
    .cover {
        object-fit: cover;
        width: 220px;
        height: 100%;
    }

    .container {
        height: 600px;
        overflow: hidden;
        background-color: ${({ theme }) => theme.palette.background.default};
    }
`;
