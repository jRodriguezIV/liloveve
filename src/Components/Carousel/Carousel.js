import "./Carousel.css";
export default function Carousel({ item }) {
  return (
    <div>
      <img className="img" src={`${item.images[0]}`} alt={`${item.title}`} />
      <div className="foot">
        <p>
          <strong>{item.title}</strong>
        </p>
        <p className="description">{`${item.brand}, ${item.category}`}</p>
        <p style={{ paddingTop: 12 }}>{`$${item.price}`}</p>
      </div>
    </div>
  );
}
