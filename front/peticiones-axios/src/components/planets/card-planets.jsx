import { Link } from "wouter";

export default function CardPlanets({
  id,
  image,
  name,
  isDestroyed,
  description,
}) {
  return (
    <Link
      href={`/planets/${id}`}
      className="w-96 min-h-96 rounded-2xl image-full shadow-sm group hover:card"
    >
      <figure>
        <img
          src={image}
          alt={`imagen del planeta ${name}`}
          className="w-full min-h-96 rounded-2xl object-cover"
        />
      </figure>
      <div className="card-body p-8 hidden group-hover:block animacion ">
        <h2 className="card-title text-2xl">{name}</h2>
        <figcaption>{isDestroyed ? "Destruido" : "No destruido"}</figcaption>
        <p>{description}</p>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Mas detalles</button>
        </div>
      </div>
    </Link>
  );
}
