import { Card, CardActions, CardContent, CardMedia, Typography, Button } from "@mui/material";

const CustomCard = ({card}) => {

    console.log(card);

    return (
        <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
            <CardMedia
                component="img"
                src={card.image}
                alt="random"
                height="250px"
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" style={{fontSize: 18, fontWeight: 600}}>
                    {card.title}
                </Typography>
                <Typography> {card.description} </Typography>
                <Typography> Cost: ₹{card.price} </Typography>
                <Typography>Move In from {card.moveDate} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
            </CardActions>
        </Card>
    );

};

export default CustomCard;