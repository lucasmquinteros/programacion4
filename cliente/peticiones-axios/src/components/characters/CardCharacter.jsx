import { Link } from "wouter";
export default function CardCharacter({ id, image, name, ki, description }) {
  return (
    <section className="card bg-base-100 w-96 shadow-sm border-2 border-transparent transition hover:border-black">
      <div className="card-body">
        <h2 className="card-title">
          <Link href={`/characters/${id}`} className="hover:underline">
            {name}
          </Link>
        </h2>
        <p className="h-40 overflow-y-scroll">{description}</p>
      </div>
      <figure className="flex flex-col ">
        <figcaption>Ki: {ki}</figcaption>
        <img src={image} alt={name} className="h-72" />
      </figure>
    </section>
  );
}
