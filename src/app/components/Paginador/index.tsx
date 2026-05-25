'use client'

import "./styles.css"

const Paginador=(
    {next, prev, page, setPage} : {next:boolean, prev:boolean, page:number, setPage:(page:number)=>void}

)=>{


    return(
        <div className="paginadorContainer">
            {prev && <button 
            onClick={(e)=>{
                setPage(page-1)
            }}>{"<"}</button>
            }

            <h1>{page}</h1>

            {next && <button 
            onClick={(e)=>{
                setPage(page+1)
            }}>{">"}</button>
            }
        </div>
        
    )
}
export default Paginador