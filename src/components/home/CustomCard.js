import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

const CustomCard = () => {

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
            <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="random"
                height="250px"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    Heading
                </Typography>
                <Typography>
                    This is a media card. You can use this section to describe the
                    content.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );

};

export default CustomCard;