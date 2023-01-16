import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='div-not-found'>
            <div className="text"> This page does not exist. Go</div> <Link to='/' className="not-found">Home</Link>
        </div>
    )
}

export default NotFoundPage;