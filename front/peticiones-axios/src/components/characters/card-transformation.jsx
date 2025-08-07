export default function CardTransformation({ image, name, ki }) {
  return (
    <div className="bg-gray-950 card bg-base-100 w-96 shadow-sm border-2 border-transparent transition hover:border-white ">
      <figure className="flex flex-col">
        <img src={image} alt={`imagen de ${name}`} className=" h-80 " />
        <figcaption>Ki: {ki}</figcaption>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
      </div>
    </div>
  );
}
