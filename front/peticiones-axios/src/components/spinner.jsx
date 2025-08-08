export default function Spinner({ type = "info" }) {
  return (
    <span
      className={`loading loading-spinner text-${type} w-1/12 block h-screen mx-auto`}
    ></span>
  );
}
