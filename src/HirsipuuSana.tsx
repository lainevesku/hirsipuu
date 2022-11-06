type HirsipuuSanaProps = {
    arvattuKirjain: string[]
    arvattavaSana: string
    reveal?: boolean
}

export function HirsipuuSana({arvattuKirjain, arvattavaSana, reveal = false}: HirsipuuSanaProps) {
    return (
        <div 
            style={{
                display: "flex", 
                gap: ".25em", 
                fontSize: "4rem",
                fontWeight: "bold", 
                textTransform: "uppercase", 
                fontFamily: "monospace"
            }}
        >
            {arvattavaSana.split("").map((kirjain, index) => (
                <span style={{ borderBottom: ".1em solid black"}} key={index}>
                    <span 
                        style={{
                            visibility: arvattuKirjain.includes(kirjain) || reveal
                                ? "visible"
                                : "hidden",
                            color: 
                                !arvattuKirjain.includes(kirjain) && reveal ? "red" : "black",
                        }}
                    >
                        {kirjain}
                    </span>
                    </span>
            ))}
        </div>
    )
}