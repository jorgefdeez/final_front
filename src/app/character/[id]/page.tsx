
"use client";
import api from "@/api/axios";
import type { CharacterS } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./detalle.css"

const getPersonajeById=()=>{

    const{id} = useParams()
    const[personaje, setCharacter] = useState<CharacterS | null>(null)


    const router = useRouter()

    useEffect(()=>{
        api.get(`/character/${id}`).then((e) =>{
            setCharacter(e.data)
        })
    }, [])

    return(
        <div className = "containterDetalle">
            <h1>{personaje?.name}</h1>
            <p>Genero: {personaje?.gender}</p>
            <p>Estado: {personaje?.status}</p>
            <p>Especie: {personaje?.species}</p>
            <p>Id:{personaje?.id}</p>

            <h2>Origen: </h2>
            <p>Name: {personaje?.origin?.name}</p>
            <p>Url: {personaje?.origin?.url}</p>
            
            <h2>Location: </h2>
            <p>Name: {personaje?.location?.name}</p>
            <p>Url: {personaje?.location?.url}</p>
            <button
                className="botonVolver"
                onClick ={()=>{
                    router.push(`/`)
                }}>
                volver
            </button>

        </div>
    )
}

export default getPersonajeById;
