/* eslint-disable react/prop-types */
export default function Item(props) {
  const { text } = props;
  return (
    <li>
      <span>V</span>
      <p>{text}</p>
      <span>X</span>
    </li>
  );
}
