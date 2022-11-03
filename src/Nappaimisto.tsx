import styles from './Nappaimisto.module.css'

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "å",
    "ä",
    "ö"
]

type NappaimistoProps = {
    disabled?: boolean
    activeKirjaimet: string[]
    inactiveKirjaimet: string[]
    addArvattuKirjain: (kirjain: string) => void
}

export function Nappaimisto({ activeKirjaimet, inactiveKirjaimet, 
    addArvattuKirjain, disabled = false}: NappaimistoProps) {
    return(
        <div 
            style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
                gap: ".5rem"
            }}
        >
            {KEYS.map(key => {
                const isActive = activeKirjaimet.includes(key)
                const isInactive = inactiveKirjaimet.includes(key)
                return (
                    <button 
                        onClick={() => addArvattuKirjain(key)} 
                        className={`${styles.btn} ${isActive ? styles.active : ""}
                                    ${isInactive ? styles.inactive : ""}`}
                        disabled={isInactive || isActive || disabled} 
                        key={key}
                    >
                        {key}
                    </button>
                )
            })}
        </div>
    )
}