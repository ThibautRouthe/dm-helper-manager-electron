import type { FC } from "react"
import CharacterNameComponent from "./components/character_name/CharacterNameComponent"

const PlayerCharacterSheet:FC = () => {

    const character_name:string = "Jamba"

    return(
        <>
            <CharacterNameComponent character_name={character_name}/>
        </>
    )
}

export default PlayerCharacterSheet