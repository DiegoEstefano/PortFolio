
export default function StackCard({ tec, img, text }) {
    return (
        <div className="text-center shadow-lg p-10 lg:h-90 rounded-xl my-10 dark:bg-slate-50 text-gray-700">
            <img className="m-auto" src={img} width={100} height={100} />
            <h3 className="text-lg font-medium pt-10 pb-5">{tec}</h3>
            <p>
                {text}
            </p>
        </div>
    )
}