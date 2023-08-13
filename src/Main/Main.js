import './Main.css'
import Goods from "./Goods/Goods"

const goodsData = [
    {title: 'Яблоко', image: './img/яблоко.jpg', text:'ЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблоко ЯблокоЯблокоЯблоком ЯблокоЯблокоЯблоко Яблоко ЯблокоЯблоко'},
    {title: 'Груша', image: './img/груша.jpg', text:'ЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблоко ЯблокоЯблокоЯблоком ЯблокоЯблокоЯблоко Яблоко ЯблокоЯблоко'},
    {title: 'Молоко', image: './img/молоко.jpg', text:'ЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблокоЯблоко ЯблокоЯблокоЯблоком ЯблокоЯблокоЯблоко Яблоко ЯблокоЯблоко'},
]

function Main() {
    return(
        <main className="main">
            <div className="main-cards">
                {goodsData.map((item, index) => <Goods key={index} title={item.title} image={item.image} text={item.text} />)}
            </div>
        </main>
    )
}

export default Main