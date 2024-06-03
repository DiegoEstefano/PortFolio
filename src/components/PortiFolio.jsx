import PortiCard from "./PortiCard";
export default function Portfolio() {

  const projects = [
    {
      project: "LinkTrack",
      link: "https://rastreamento-correios-9rle.vercel.app/",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web1.png?raw=true"
    },
    {
      project: "Pokédex",
      link: "https://poke-dex-swart-ten.vercel.app/",
      img: "https://user-images.githubusercontent.com/81423690/243108851-6524f8e3-9af8-4da4-a6aa-f6f138c99587.png"
    },
    {
      project: "ApiMln",
      link: "https://apimln.vercel.app/",
      img: "https://user-images.githubusercontent.com/81423690/243108996-500d3661-b084-4d00-8d92-719085010b6a.png"
    },
    {
      project: "WatchList",
      link: "https://watchilist.vercel.app/",
      img: "https://user-images.githubusercontent.com/81423690/243109071-5625ba76-cfb0-472d-a035-a12956a2d2b3.png"
    },
    {
      project: "Coming Soon",
      link: "#",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web2.png?raw=true"
    },
    {
      project: "Coming Soon",
      link: "#",
      img: "https://github.com/DiegoEstefano/PortFolio/blob/main/public/web2.png?raw=true"
    },
  ]

  return (
    <>
      <div className="text-center">
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 mb-5 leading-8 text-gray-800 dark:text-white">
          Here are some projects I have developed or I'm currently working on.
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
