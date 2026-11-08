import { useState, useEffect } from 'react';
import PersonajeCard from './components/PersonajeCard';

function App() {

    const [campeones, setCampeones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        const obtenerCampeones = async () => {

            try {

                const respuesta = await fetch(
                    'https://ddragon.leagueoflegends.com/cdn/16.22.1/data/es_ES/champion.json'
                );

                if (!respuesta.ok) {
                    throw new Error('Error al obtener los campeones');
                }

                const datos = await respuesta.json();
                const listaCampeones = Object.values(datos.data).slice(0, 20);

                setCampeones(listaCampeones);

            } catch (error) {

                console.error(error);
                setError('No se pudieron cargar los campeones');

            } finally {

                setCargando(false);

            }
        };

        obtenerCampeones();

    }, []);

    return (
        <div className="app">

            <h1>League of Legends - Campeones</h1>
            <p>Conoce a los campeones de League of Legends</p>

            {cargando && <p>Cargando campeones...</p>}

            {error && <p>{error}</p>}

            <div className="personajes-container">

                {campeones.map((campeon) => (
                    <PersonajeCard
                        key={campeon.id}
                        campeon={campeon}
                    />
                ))}

            </div>

        </div>
    );
}

export default App;

