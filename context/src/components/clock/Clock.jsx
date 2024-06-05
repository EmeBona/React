import { useEffect, useState } from "react"
import { LanguageContext } from "../../App";
import { useContext } from "react";

function Clock() {

    const [date, setDate] = useState(new Date())

    const language = useContext(LanguageContext)

    useEffect (() => {


      let id = setInterval(() => {
            setDate(new Date())
        }, 1000);
    }, [])

  return (
    <div>
        <h2>
          {language === "en" ? "The hour is: " : "l'ora è"}{date.toLocaleTimeString()}
        </h2>
    </div>
  )
}

export default Clock