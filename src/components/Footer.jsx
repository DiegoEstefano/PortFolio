export default function Footer() {
    let data = new Date();
    return (
        <div className="flex justify-center mt-5 mb-2 dark:text-white">
            <h2>Sydney {data.getFullYear()} </h2>
        </div>
    )
}