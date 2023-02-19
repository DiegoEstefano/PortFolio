import { BsFillMoonStarsFill } from "react-icons/bs";

export default function NavBar () {
    return (
        <nav className="py-10 mb-12 flex justify-between">
        <h1 className="text-xl font-Roboto ">developedbyDiego</h1>
        <ul className="flex items-center">
          <li>
            <BsFillMoonStarsFill />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 rounded-md ml-8"
              href="#"
            >
              Home
            </a>
          </li>
        </ul>
      </nav>
    )
}