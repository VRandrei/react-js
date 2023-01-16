import axios from "axios";
import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import './style.css';

const StorePage = () => {

    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const responseItems = await axios.get('https://dummyjson.com/products');
            setProducts(responseItems.data.products)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    console.log(products)

    return (
        <div>
            <Cart products={ products } />
        </div>
    );
}

export default StorePage;