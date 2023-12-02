import { useContext } from "react"
import { cricketContext } from "../context/cricketContext"
import { CricketProvider } from "../context/CricketProvider";



export const Hello = () => {
    let name = useContext(cricketContext);


    return (
        <CricketProvider>
            <div>
                Hello {name}
            </div>
        </CricketProvider>
    )
}