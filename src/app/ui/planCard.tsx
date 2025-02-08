import { PlanCardProps } from "../lib/definitions"

export function PlanCard({plan} : {plan: PlanCardProps}) {
    return (
        <article style={{
            backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${plan.planBackground}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className="p-4 rounded-lg text-white flex flex-col gap-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold">{plan.planName}</h3>
                <h4 className="text-xl font-semibold">{plan.planType}</h4>
                <h6 className="font-semibold">{plan.planPrice}</h6>
            </div>
            <div className="flex flex-col gap-4 min-h-[9rem] justify-between">
                <div className="text-sm md:text-base">
                    {plan.planFeatures.map((feature, index) => {
                        return <p key={index}>✅ {feature}</p>
                    })}
                </div>
                <button className="bg-gray-500 px-6 py-2 mx-auto rounded-md hover:bg-gray-600 transition-all">Subscribirse</button>    
            </div>
        </article>
    )
}