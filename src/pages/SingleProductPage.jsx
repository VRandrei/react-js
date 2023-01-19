import { Link } from 'react-router-dom';

const SingleProductPage = () => {
    return (  
        <div className='div-not-found'>
            <div className="text"> Single Product. Return to </div>  <Link to='/store' className="not-found">Store</Link>
        </div>
    );
}
 
export default SingleProductPage;