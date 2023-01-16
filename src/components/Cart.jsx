import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../pages/style.css';

const Cart = ({products}) => {
    return ( 
        <div className="cardList">
            {products.map((product) => 
                <Card sx={{ maxWidth: 300 }} key={product.id} className='cart-item'>
                    <CardMedia
                        component="img"
                        alt=""
                        height="140"
                        image={product.images[0]}
                    />
                    <CardContent className='cart-conten'>
                        <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {product.description}
                        </Typography>
                    </CardContent>
                    <CardActions className='cart-actions'>
                        <Button size="small">Buy</Button>
                        <Link to={`/product${product.id}`}>
                            <Button size="small" className='more-button'>Learn More</Button>
                        </Link>
                    </CardActions>
                </Card>
            )}
        </div>
    );
}
 
export default Cart;