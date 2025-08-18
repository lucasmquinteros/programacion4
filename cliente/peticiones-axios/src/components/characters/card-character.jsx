export default function CardCharacter({ image, name, ki, description, id }) {
  return (
    <section className="card bg-base-100 w-96 shadow-sm border-2 border-transparent transition gap-10 justify-center hover:border-white ">
      <figure className="flex flex-col">
        <img src={image} alt={"imágen de " + name} className="h-75" />
        <figcaption>{ki}</figcaption>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="h-36 overflow-y-scroll">{description}</p>
        <div className="card-actions justify-center">
          <Link href={`/characters/${id}`} className="btn btn-primary">
            → Show more ←
          </Link>
        </div>
      </div>
    </section>
  );
}
