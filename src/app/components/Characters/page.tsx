'use client'
import { CharacterS } from "@/app/types/types"
import {useRouter} from "next/navigation"

const CharacterComponente =({personaje}:{personaje: CharacterS}) =>{
    const router = useRouter()

    return(
        <div className="characterComponent">
            <img src={personaje.image} alt={personaje.name}></img>
            <h1>{personaje.name}</h1>
            <p>Estado: {personaje.status}</p>
            <p>Genero: {personaje.gender}</p>

            <button
                className="boton"
                onClick={() => {
                        router.push(`/${personaje.id}`);
                }}>
            detalle
            </button>
        </div>
    )
}

export default CharacterComponente;