import img1 from "../../assets/avatars/6.png";

export default function Member(props) {
  return (
    <li key={props.member}>
      <img src={img1} alt="member" />
      <button>x</button>
    </li>
  );
}
