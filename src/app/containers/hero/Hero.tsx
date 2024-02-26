export default function Hero() {
    return (
        <div className={"w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-[#17181C]"}>
            <div className={"px-4 md:px-6"}>
                <div className={"grid gap-6 items-center"}>
                    <div className={"flex flex-col justify-center space-y-4 text-center"}>
                        <div className={"space-y-2"}>
                            <h1 className={"text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-[#331E84]"}>nitrous</h1>
                            <p className="max-w-[600px] text-zinc-100 md:text-xl mx-auto" >
                            security suite featuring a flagship open source osint tool with an open api written for research purposes
                            </p>
                        </div>
                        <div className={"w-full max-w-sm space-y-2 mx-auto"}>
                            <div className={"flex"}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
