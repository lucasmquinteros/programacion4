export default function Home() {
  return (
    <main className=" bg-gray-900 text-white p-10 ">
      <div className="hero  min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Bienvenido a la API de Dragon Ball
            </h1>
            <p className="py-6">
              En esta página se muestran todos los datos de la API de Dragon
              Ball, para mas información ir a{" "}
              <a href="https://web.dragonball-api.com/">
                https://web.dragonball-api.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
