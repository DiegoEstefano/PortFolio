export default function queroAprender() {
  return (
    
      <section>
        <div className="text-center">
          <h3 className="text-3xl py-1">Desejo aprender</h3>
          <p className="text-md py-2 leading-8 text-gray-800 ">
            Aqui estão algumas tecnologias que desejo aprender a curto prazo.
          </p>
        </div>

        <div className=" m-auto lg:flex lg:max-w-4xl gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <img className="m-auto" src={node} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">NodeJs</h3>
            <p>
              Desejo aprender <span className="text-teal-500">NodeJs</span> pois
              além de me tornar um dev mais completo, vai para me ajudar na
              implementação do front-end com o lado do servidor e hoje o{" "}
              <span className="text-teal-500">Node</span> é fortemente utilizado
              em grandes empresas como Linkedin, Uber e Paypal.
            </p>
          </div>

          <div className="text-center shadow-lg p-10  rounded-xl my-10">
            <img className="m-auto" src={react} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">React Native</h3>
            <p>
              Com o React Native, construir uma aplicação mobile é algo muito
              mais simples e rápido, pois o código produzido é semelhante ao{" "}
              <span className="text-teal-500">React Js</span> e todo o código
              produzido é convertido na linguagem nativa do sistema IOS ou
              Android.
            </p>
          </div>

          <div className="text-center shadow-lg p-10  rounded-xl my-10">
            <img className="m-auto" src={typescript} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Typescript</h3>
            <p>
              Pretendo me fortalecer no{" "}
              <span className="text-teal-500">Typescript</span> para facilitar o
              desenvolvimento e tipagem dos dados.
            </p>
          </div>
        </div>
      </section>
    
  );
}
