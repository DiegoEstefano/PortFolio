import StackCard from "./StackCard";

export default function WantToLearn() {
    const stacks = [
        {
            tech: "NodeJs",
            img: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
            text: "I want to learn NodeJs because besides making me a more complete developer, it will help me with implementing the front-end with the server side, and today Node is heavily used in large companies like Linkedin, Uber, and Paypal."
        },
        {
            tech: "React Native",
            img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
            text: "With React Native, building a mobile application is much simpler and faster, as the code produced is similar to React Js, and all the code produced is converted into the native language of the IOS or Android system."
        },
        {
            tech: "Typescript",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
            text: "I intend to strengthen myself in Typescript to facilitate development and data typing."
        }
    ];

    return (
        <>
            <div className="text-center dark:text-white">
                <h3 className="text-3xl py-1">Desire to Learn</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"> Here are some technologies I want to learn in the short term.
                </p>
            </div>

            <div className=" m-auto lg:flex lg:max-w-3xl gap-10 dark:text-white">
                {stacks.map((stack, i) => (
                    <StackCard tech={stack.tech} img={stack.img} text={stack.text} key={i} />
                ))}
            </div>
        </>
    );
}
