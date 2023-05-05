import PortiCard from "./PortiCard";
export default function PortiFolio() {

  const projects = [
    {
      projeto: "LinkTrack",
      link: "https://rastreamento-correios-9rle.vercel.app/",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web1.png?raw=true"
    },
    {
      projeto: "Pokédex",
      link: "https://poke-dex-neon.vercel.app/",
      img: "https://user-images.githubusercontent.com/81423690/236570643-43ee0a34-12bd-4f58-b7d2-5f3c7e3e8c15.png"
    },

    {
      projeto: "Embreve",
      link: "#",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web2.png?raw=true"
    },
    {
      projeto: "Embreve",
      link: "#",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web2.png?raw=true"
    },

  ]


  return (
    <>
      <div className="text-center">
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 mb-5 leading-8 text-gray-800 dark:text-white">
          Aqui estão alguns projetos que desenvolvi ou que ainda estou
          desenvolvendo.
        </p>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">

        {projects.map((project, i) => (
          <PortiCard link={project.link}  img={project.img} key={i} />
        ))}

      </div>
    </>
  )
}

