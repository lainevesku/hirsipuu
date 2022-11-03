import { useCallback, useEffect, useState } from "react"
import { HirsipuuPiirros } from "./HirsipuuPiirros"
import { HirsipuuSana } from "./HirsipuuSana"
import { Nappaimisto } from "./Nappaimisto"
import sanat from "./sanaLista.json"

function App() {
  const [arvattavaSana, setArvattavaSana] = useState(() => {
    return sanat[Math.floor(Math.random() * sanat.length)]
  })
  const [arvattuKirjain, setArvattuKirjain] = useState<string[]>([])

  const vaaratKirjaimet = arvattuKirjain.filter(
    kirjain => !arvattavaSana.includes(kirjain)
  )

  const isLoser = vaaratKirjaimet.length >= 6
  const isWinner = arvattavaSana
                    .split("")
                    .every(kirjain => arvattuKirjain.includes(kirjain))

  const addArvattuKirjain = useCallback(
    (kirjain: string) => {
    if (arvattuKirjain.includes(kirjain) || isLoser || isWinner) 
    return
    setArvattuKirjain(nykyisetKirjaimet => [...nykyisetKirjaimet, kirjain])
  }, 
  [arvattuKirjain, isLoser, isWinner]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-ö]$/)) return

      e.preventDefault()
      addArvattuKirjain(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [arvattuKirjain])

  const uusiPeli = () => {
    window.location.reload()
  }

  return (
    <div
      style={{
        maxWidth: "800px",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
      }}
    >
      <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: isWinner ? "green" : "red"}}>
        {isWinner && "Voitit!"}
        {isLoser && "Hävisit!"}
        <button 
          style={{
            width: "100%",
            border: "3px solid black",
            background: "none",
            fontSize: "1.5rem",
            padding: ".5rem",
            fontWeight: "bold",
            color: "black",
            visibility: isLoser || isWinner ? "visible" : "hidden"
          }} 
          onClick={uusiPeli}
          
        >
          UUSI PELI
        </button>
        </div>
        
      <HirsipuuPiirros veikkausMaara={vaaratKirjaimet.length}/>
      <HirsipuuSana 
        reveal={isLoser} 
        arvattuKirjain={arvattuKirjain} 
        arvattavaSana={arvattavaSana} 
        />
      <div style={{ alignSelf: "center", width: "120%", padding: "1rem"}}>
      <Nappaimisto 
        disabled={isWinner || isLoser}
        activeKirjaimet={arvattuKirjain.filter(kirjain => arvattavaSana.includes(kirjain))}
        inactiveKirjaimet={vaaratKirjaimet}
        addArvattuKirjain={addArvattuKirjain}
      />
      </div>
    </div>
  )
}

export default App
