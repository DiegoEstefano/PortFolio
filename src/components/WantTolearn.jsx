import StackCard from "./StackCard"

export default function WantToLearn() {
    const stacks = [
        {
            tec: "NodeJs",
            img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
            text: " Desejo aprender NodeJs pois além de me tornar um dev mais completo, vai para me ajudar na implementação do front-end com o lado do servidor e hoje o Node é fortemente utilizado em grandes empresas como Linkedin, Uber e Paypal."
        },
        {
            tec: "React Native",
            img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            text: "Com o React Native, construir uma aplicação mobile é algo muito mais simples e rápido, pois o código produzido é semelhante ao React Js e todo o código produzido é convertido na linguagem nativa do sistema IOS ou Android."
        },
        {
            tec: "Typescript",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            text: "Pretendo me fortalecer no Typescript para facilitar o desenvolvimento e tipagem dos dados."
        }
    ]
    return (
        <>
            <div className="text-center">
                <h3 className="text-3xl py-1">Desejo aprender</h3>
                <p className="text-md py-2 leading-8 text-gray-800 ">
                    Aqui estão algumas tecnologias que desejo aprender a curto prazo.
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


