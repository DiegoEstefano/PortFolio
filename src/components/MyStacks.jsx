import StackCard from "./StackCard";

export default function MyStacks() {

    const stacks = [
        {
            tec: "React",
            img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            text: "Utilização de React para a construção de aplicações front-end e consumo de APIs."
        },
        {
            tec: "JS",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            text: "Uma das linguagens mais utilizadas atualmente no mercado, para criação de API's, sites e aplicações web."
        },
        {
            tec: "HTML & CSS",
            img: "https://cdn-icons-png.flaticon.com/512/2085/2085206.png",
            text: "Para a criação do corpo e estilização dos sites, utilizo HTML & CSS e alguns projetos com Tailwind css."
        }
    ]

    return (
        <>
            <div className="text-center m-auto lg:max-w-3xl">
                <h3 className="text-3xl py-1">Minhas Stacks</h3>
                <p className="text-md py-2 leading-8 text-gray-800 ">
                    Desde de que eu comecei a minha jornada como desenvolvedor venho
                    buscando todos os dias aprender e por em prática várias
                    tecnologias.
                </p>
            </div>

            <div className=" m-auto lg:flex lg:max-w-3xl gap-10">

                {stacks.map((stack, i) => (
                    <StackCard tec={stack.tec} img={stack.img} text={stack.text} key={i} />
                ))}

            </div>
        </>
    )
}