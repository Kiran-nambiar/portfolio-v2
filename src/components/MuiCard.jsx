import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MuiCard({ service }) {
    console.log(service)
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Frontend"
                height="140"
                image={service.imageUrl}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                </Typography>
                <Typography variant="body2" className="service-description" color="text.secondary">
                    {service.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}