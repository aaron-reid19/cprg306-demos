"use client"
import { useState, useEffect } from "react";

export default function Page() {
    const [characters, setCharacters] = useState([]);

    const [error, setError] = useState(null);
    
    async function fetchCharacters() {
        try {
            const response = await fetch("https://api.disneyapi.dev/character");
            if (!response.ok){
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
        fetchCharacters();
    }, []);

    if (error){
        return (
            <div className="bg-red-500 flex justify-center items-center p-8">
                <h2 className="text-5xl font-bold">ERROR!</h2>
                <p className="text-xl">{error}</p>
                <Link href="/" className="bg-amber-600 px-4 py-2 rounded-md">Take me Home</Link>
            </div>
        )
    }
    //fetch data from https
    return(
        <main>
            <header>
            <h1>Data Fetching Example</h1>
            </header>
            <div>
                {/* render all th charcters that get fetched*/}
                {/* if theyre not her yet, show the loading message*/}
                <ul>
                    {characters.length > 0
                    ? characters.map((character)  => (
                        <li key={character._id}>{character.name} </li>
                       
                    ))
                    : "there are no characters"}
                </ul>
            </div>
        </main>
    );
}