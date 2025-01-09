export default function WayToTeach({ title, descripption }) {
  return (
    <li>
      <p>
        <strong>{title}</strong>
        {descripption}
      </p>
    </li>
  );
}
