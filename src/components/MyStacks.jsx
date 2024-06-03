import StackCard from "./StackCard";

export default function MyStacks() {

    const stacks = [
        {
            tec: "React",
            img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            text: "Using React for building front-end applications and consuming APIs."
        },
        {
            tec: "JS",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            text: "One of the most commonly used languages in the market today, for creating APIs, websites, and web applications."
        },
        {
            tec: "HTML & CSS",
            img: "https://cdn-icons-png.flaticon.com/512/2085/2085206.png",
            text: "For creating the structure and styling of websites, I use HTML & CSS and some projects with Tailwind CSS."
        }
    ]

    return (
        <>
            <div className="text-center m-auto lg:max-w-3xl dark:text-white">
                <h3 className="text-3xl py-1">My Stacks</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-white ">
                    Since I started my journey as a developer, I have been
                    seeking to learn and put into practice various
                    technologies every day.
                </p>
            </div>

            <div className=" m-auto lg:flex lg:max-w-3xl gap-10 dark:text-white">

                {stacks.map((stack, i) => (
                    <StackCard tec={stack.tec} img={stack.img} text={stack.text} key={i} />
                ))}

            </div>
        </>
    )
}
