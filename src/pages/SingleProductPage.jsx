import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import './style.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const SingleProductPage = () => {

    const {id} = useParams(); 
    const [product, setProduct] = useState([]);

    const fetchItem = async () => {
        try {
            const responseItem = await axios.get(`https://dummyjson.com/products/${id}`)
            setProduct(responseItem.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchItem();
    }, [id]);

    return (  
        <div className='single-cart'>
            <div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="140"
                        alt="photo"
                        // image={product.images}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="large" color="primary">
                            {product.price}$
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div>
                <Link to='/store' className="return">Return to store</Link>
            </div>
        </div>
    );
}
 
export default SingleProductPage;