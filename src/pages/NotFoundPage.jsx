import { Link } from 'react-router-dom';
import './style.css'

const NotFoundPage = () => {
    return (
        <div className='div-not-found'>
            <div className="text"> 404 This page does not exist. Go</div> <Link to='/' className="not-found">Home</Link>
        </div>
    )
}

export default NotFoundPage;