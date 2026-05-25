
export type CharacterS={
    id:number
    name:string
    status:string
    species:string
    type:string
    gender:string
    origin:{
        name:string
        url:string
    }
    location:{
        name:string
        url:string
    }

    image:string
    episode:string[]
    url:string
    created:string
}

export type Info={
    count:number
    page:number
    next:string|null
    prev:null|string
}

export type ResultsCharacter={
    info:Info
    results:CharacterS[]
}
