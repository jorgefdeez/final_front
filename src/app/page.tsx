'use client'
import { useEffect, useState } from "react"
import { ResultsCharacter } from "@/app/types/types"
import api from "@/api/axios"
import Paginador from "@/app/components/Paginador"
import CharacterComponente from "@/app/components/Characters/page"
import "@/app/components/Characters/characters.css"

const Home=() =>{
  const [characteresss, setCharacter] = useState<ResultsCharacter>()
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)

    const getCharacter = async () => {
        try{
            await api.get(`/character?page=${page}`).then((e)=>{
                setCharacter(e.data)
            }).finally(()=>{
                
                setLoading(false)
            })

            } catch (e) {
                throw new Error(String(e))
            }
        }

    useEffect(() => {
        getCharacter()
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            {characteresss?.results.map((e) => (
                <CharacterComponente key={e.id} personaje={e} />
                
            ))}

            <Paginador
                next={!!characteresss?.info.next}
                prev={!!characteresss?.info.prev}
                page={page}
                setPage={(e) => {
                    setPage(e)
                }}
            />

            
        </div>
    )
}
export default Home 