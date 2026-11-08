function PersonajeCard({ campeon }) {

    return (
        <div className="personaje-card">

            <img
                src={`https://ddragon.leagueoflegends.com/cdn/16.22.1/img/champion/${campeon.image.full}`}
                alt={campeon.name}
            />

            <div className="personaje-info">
                <h2>{campeon.name}</h2>
                <h3>{campeon.title}</h3>
                <p>{campeon.tags.join(" / ")}</p>
            </div>

        </div>
    );
}

export default PersonajeCard;
