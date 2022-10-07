import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import codeGeass from '../../../assets/code-geass.png';
import Grid from '@mui/material/Unstable_Grid2';

const HighlightCard = () => {
    return (
        <Grid xs="auto" md="auto" className="card-wrapper">
            <Card className="card" variant="elevation">
                <CardActionArea>
                    <CardMedia component="img" image={codeGeass} alt="Code Geass" />
                    <CardContent className="card-content">
                        <Typography>Код Гіасс: Повстання Лелуша</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default HighlightCard;
