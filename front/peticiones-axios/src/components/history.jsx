export default function History() {
  return (
    <section>
      <button
        className="btn btn-outline btn-primary text-white fixed top-1/2 left-[14px]"
        onClick={() => window.history.back()}
      >
        Volver Atras
      </button>
      <button
        className="btn btn-outline btn-primary text-white fixed top-1/2 right-[14px]"
        onClick={() => window.history.forward()}
      >
        Ir Adelante
      </button>
    </section>
  );
}
