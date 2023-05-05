

export default function PortiCard({ link, img }) {
    return (

        <div className="basis-1/3 flex-1 ">
            <a
                target="blank"
                href={link}
            >
                <img
                    src={img}
                    className="rounded-lg  object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                />
            </a>
        </div>


    )
}


