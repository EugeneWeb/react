import './Goods.css'

function Goods(props) {
    return(
        <div className="card">
            <h3 className="card-title">{props.title}</h3>
            <div className="card-img-wrap">
                <img src={props.image} alt="" />
            </div>
            <p className="card-text">{props.text}</p>
        </div>
    )
}

export default Goods