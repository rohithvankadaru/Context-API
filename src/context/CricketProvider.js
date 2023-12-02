import { cricketContext } from "./cricketContext";

export const CricketProvider = (props) => {


    return <cricketContext.Provider value={'Sachin'}>
        {props.children}
    </cricketContext.Provider>
}