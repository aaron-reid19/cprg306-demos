export default function ({name, imageUrl, films, allies, enemies})  {
    return(
        <ul className="flex flex-col items-center text-center gap-2">
            <li>{name}</li>
            <li>
                <img src={imageUrl} alt={name} width={240} className="mx-auto" />

            </li>
            <li>Films: {films?.length ? films.join(", "): "none"}</li>
            <li>Allies: {allies?.length ? films.join(", "): "none"}</li>
            <li>Enemies: {enemies?.length ? films.join(", "): "none"}</li>
            
        </ul>
    )

// {"_id":12,"films":[],"shortFilms":[],"tvShows":["Pickle and Peanut"],"videoGames":[],"parkAttractions":[],"allies":[],"enemies":[],"name":"90's Adventure Bear","imageUrl":"https://static.wikia.nocookie.net/disney/images/3/3f/90%27s_Adventure_Bear_profile.png","url":"https://api.disneyapi.dev/characters/12"},
}
