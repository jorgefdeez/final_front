"use client"

import { FormEvent } from "react"

import "./filtros.css"

type FiltrosProps = {
	status: string
	gender: string
	searchValue: string
	onStatusChange: (value: string) => void
	onGenderChange: (value: string) => void
	onSearchValueChange: (value: string) => void
	onSearch: () => void
}

const statusOciones = ["Dead", "Alive", "unknown"]
const genderOpciones = ["Female", "Male", "Genderless", "unknown"]

const getNextValue = (options: string[], valor: string) => {
	if (!valor) {
		return options[0]
	}

	const currentIndex = options.indexOf(valor)
	const nextIndex = currentIndex === -1 || currentIndex === options.length - 1 ? 0 : currentIndex + 1

	return options[nextIndex]
}

const Filtros = ({status,gender,searchValue,onStatusChange,onGenderChange,onSearchValueChange,onSearch,}:FiltrosProps) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onSearch()
    }

	return (
		<div className="FiltrosContainer">
			
			<button
				className="botonFiltroEstado"
				onClick={() => {
					onGenderChange(getNextValue(genderOpciones, gender))
				}}
			>
				Genero {gender}
			</button>

            <button
				className="botonFiltroEstado"
				onClick={() => {
					onStatusChange(getNextValue(statusOciones, status))
				}}
			>
				Estado {status}
			</button>

			<form onSubmit={handleSubmit}>
				<input  className="input"
					type="text"
					value={searchValue}
					placeholder="Filtrar por nombre"
					onChange={(event) => {
						onSearchValueChange(event.target.value)
					}}
				/>

				<button 
                    className="botonInput"
                    type="submit"
                >
                    Buscar
                </button>
			</form>
		</div>
	)
}

export default Filtros
