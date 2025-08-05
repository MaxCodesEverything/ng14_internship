import { CharacterItem } from "./character-item.interface"

export interface CharacterResponse{
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    },
    results: CharacterItem[]
}