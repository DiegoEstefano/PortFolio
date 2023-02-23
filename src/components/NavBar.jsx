import { BsFillMoonStarsFill,BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../hooks/useTheme"

export default function NavBar() {
  
  const { theme, setTheme } = useTheme();

  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-Roboto dark:text-white">developedbyDiego</h1>
      <ul className="flex items-center">
        <li>
          {theme === "light" ? (
            <BsFillMoonStarsFill onClick={()=>{setTheme("dark")}} className="text-black" />
          ) : (
            <BsFillSunFill onClick={()=>{setTheme("light")}} className=" dark:text-white " />
          )}
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