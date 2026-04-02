import type { FC } from "react"

interface CharacterNameComponentProps {
    character_name:string,
}

const CharacterNameComponent:FC<CharacterNameComponentProps> = ({character_name}) => {

    const title:string = "Character Name"

    return(
    <>
        <h1 className="title">{title}</h1>
        <p>{character_name}</p>
    </>
    )
}

export default CharacterNameComponent