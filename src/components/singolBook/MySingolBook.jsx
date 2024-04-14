import "./singolBook.css"

const SingolBook = ({asin, title, img, price, category}) => {
    return (
       <div className="card-container">
        <h2>{title}</h2>
        <img className="card-img" src={img} alt={title} />
        <p>{price}</p>
        <p>{category}</p>
        <p>{asin}</p>
       </div> 
    )
}

export default SingolBook