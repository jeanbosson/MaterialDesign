import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreVert';


const CoffeCard = (props) => {
    const { avatarSrc, title, subtitle, description, imgSrc } = props
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar src={avatarSrc}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreHorizIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                component="img"
                height="150"
                image={imgSrc}
            />

            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >
                    {description}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Now</Button>
                <Button size="small">Learn More</Button>

            </CardActions>
        </Card>
    );
}

export default CoffeCard;
