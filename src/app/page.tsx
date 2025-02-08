import { PlanCard } from "./ui/planCard";

const plans = [
  {
    planName: "Plan Basico",
    planType: "Suscripcion de 15 dias",
    planPrice: "$2.99",
    planBackground: "./plan_basico.jpeg",
    planFeatures: [
      "Puedes ver en 1 pantalla a la vez",
    ]
  },
  {
    planName: "Plan Estandar",
    planType: "Suscripcion de 30 dias",
    planPrice: "$4.99",
    planBackground: "./plan_estandar.jpeg",
    planFeatures: [
      "Peliculas y series ilimitadas",
      "Puedes ver en 3 pantallas a la vez",
      "Calidad de video 4k"
    ]
  },
  {
    planName: "Plan Premium",
    planType: "Suscripcion de 1 año",
    planPrice: "$49.99",
    planBackground: "./plan_premium.jpeg",
    planFeatures: [
      "Peliculas y series ilimitadas",
      "Puedes ver en 5 pantallas a la vez",
      "Calidad de video 4k",
      "Contenido de deportes exclusivo",
    ]
  }
]

export default function Home() {
  return (

    <div className="max-w-5xl mx-auto">
      <section className="banner h-[80vh] w-full flex justify-left items-center">
        <div className="max-w-xl md:px-4 p-2">
          <h1 className="md:text-3xl text-2xl font-bold">El cine hasta la comodidad de tu casa</h1>
          <p className="text-pretty">
            Disfruta de la mejor experiencia en el cine con nuestros planes de suscripcion. Ademas, te ofrecemos contenido sin conexion y ve series y peliculas en multiples dispositivos a la vez.
          </p>
          <a href="#subscriptions" className="bg-yellow-500 px-4 py-2 rounded-2xl inline-block mt-2 text-black hover:bg-yellow-600">Suscripciones</a>
        </div>
      </section>
      <main className="p-4">
        <h2 className="text-2xl font-bold text-center">Planes de suscripcion</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-auto my-4" id="subscriptions">
          {plans.map((plan, index) => {
            return <PlanCard key={index} plan={plan} />
          })}
        </div>
      </main>
      <footer className="text-center p-4">
        <p>&copy; 2025 Sistema de Suscripciones. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
