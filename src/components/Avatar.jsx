import "./Avatar.css";

export default function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.imgPath} alt={props.imgAlt}></img>
    </div>
  );
}
