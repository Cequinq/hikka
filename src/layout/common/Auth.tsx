import { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import { Box, Button, Card, CardContent, Dialog, TextField, Typography } from '@mui/material';
// import { useForm } from 'react-hook-form';
import authLogo from './../../../public/images/auth-logo.png';
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
            fullWidth
            maxWidth="sm"
            onClose={() => setOpen(false)}
            PaperComponent={Box}
            sx={{
                backdropFilter: 'blur(12px)',
            }}
        >
            <Card
                sx={{
                    backgroundColor: 'black',
                    borderRadius: 1,
                    background: 'black',
                }}
            >
                <CardContent>
                    <Grid container spacing={4} justifyContent="space-between">
                        <Grid xs="auto" md="auto">
                            <Image src={authLogo} alt="Login Image" />
                        </Grid>
                        <Grid xs={12} md className="test">
                            <Typography
                                mt={12}
                                fontWeight={600}
                                fontSize="2.5rem"
                                fontFamily="Montserrat"
                                alignSelf="center"
                            >
                                Реєстрація
                            </Typography>
                            <TextField sx={{ width: 280 }} />
                            <TextField sx={{ width: 280 }} />
                            <Button>Реєстрація</Button>
                            <Typography alignSelf="start">Є акаунт? Війти</Typography>
                            {/*<Typography onClick={() => setOpen(false)}>close</Typography>*/}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Dialog>
    );
};

export default styled(Component)`
    .test {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
`;
