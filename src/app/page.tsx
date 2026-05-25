'use client'
import { useEffect, useState } from "react"
import { ResultsCharacter } from "@/app/types/types"
import api from "@/api/axios"
import Paginador from "@/app/components/Paginador"
import CharacterComponente from "@/app/components/Characters/page"
import Filtros from "@/app/components/Filtros/page"
import "@/app/components/Characters/characters.css"

const Home=() =>{
    const [characteresss, setCharacter] = useState<ResultsCharacter>()
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState<number>(1)

    const [statusFilter, setStatusFilter] = useState<string>("")
    const [genderFilter, setGenderFilter] = useState<string>("")
    const [searchValue, setSearchValue] = useState<string>("")
    const [nameFilter, setNameFilter] = useState<string>("")

    const getCharacter = async () => {
        try{
            await api.get(`/character`,{
                params: {
                    page,
                    status: statusFilter || undefined,
                    gender: genderFilter || undefined,
                    name: nameFilter || undefined,
                },
            }).then((e)=>{
                setCharacter(e.data)
            }).finally(()=>{
                setLoading(false)

            })
        }catch (e) {
            throw new Error(String(e))
        } 
    }

    useEffect(() => {
        getCharacter()
    }, [page, statusFilter, genderFilter, nameFilter])

    const handleSearch = () => {
        setPage(1)
        setNameFilter(searchValue.trim())
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Filtros
                status={statusFilter}
                gender={genderFilter}
                searchValue={searchValue}
                onStatusChange={(value) => {
                    setPage(1)
                    setStatusFilter(value)
                }}
                onGenderChange={(value) => {
                    setPage(1)
                    setGenderFilter(value)
                }}
                onSearchValueChange={setSearchValue}
                onSearch={handleSearch}
            />

            {characteresss?.results.map((e) => (
                    <CharacterComponente key={e.id} personaje={e} />
                ))
            }

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