"use client"

import { useState,useEffect } from "react"
import Dropdown from "./dropdown";
import Link from "next/link";

export default function CharacterList(){
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null)

    async function fetchDisney() {
        try {
            const response = await fetch("https://api.disneyapi.dev/character");
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
            const data = await response.json();
            setCharacters(data.data);
        }
        catch (error){
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchDisney();
    }, [])
    if (error){
        return(
            <div className="bg-red-500 flex justify-center items-center p-8">
                <h2 className="text-5xl font-bold">ERROR!</h2>
                <p className="text-xl">{error}</p>
                <Link href="/" className="bg-amber-600 px-4 py-2 rounded-md">Take me Home</Link>
            </div>
        )
    }
    return(
        <ul className="grid grid-cols-5 gap-4">
            {characters.length > 0 ? (
                characters.map((character) => (
                    <li key={character._id} className="border-4 rounded-lg p-3">
                    <Dropdown
                        name = {character.name}
                        imageUrl={character.imageUrl}
                        films={character.films}
                        allies={character.allies}
                        enemies={character.enemies}
                    />
                    </li>
                ))
            ) : (
                <li>Loading</li>
            )}
            </ul>
        )
}
