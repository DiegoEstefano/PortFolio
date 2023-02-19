import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

import diego from "../../public/diego.jpg";

export default function SocialMedia () {
    return (
        <>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/DiegoEstefano" target="_blank">
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/diego-oliveira-b78079213"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
      </div>
      
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden">
        <img src={diego} layout="fill" objectFit="cover" />
      </div>
        
        </>
    )
}