import Cart from "../components/Cart";
import './style.css';

const StorePage = () => {
    return (
        <div className="cardList">
            <Cart
                name={'Pizza'}
                description={'delicious and appetizing pizza'}
                photo={'https://www.gastronom.ru/binfiles/images/20191113/bd570867.jpg'}
            />
            <Cart
                name={'Burger'}
                description={'juicy burger with cutlet'}
                photo={'https://www.gastronom.ru/binfiles/images/20191205/b543df50.jpg'}
            />
            <Cart
                name={'Ice cream'}
                description={'melting cool ice cream made from real milk'}
                photo={'https://franshiza.ru/files/news/zenia/04.06/kak_otkryt_biznes_morozhenogo.jpg'}
            />
        </div>
    );
}

export default StorePage;