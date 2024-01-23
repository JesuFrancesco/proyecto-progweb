import Sala from "./Sala"

const SalaIndexPage = () => {

    const salas = [
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala A", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala B", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala C", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala D", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala E", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]},
        {url: "https://placehold.co/600x400/EEE/31343C", salaName: "Sala F", salaSchedule: "John Doe • 4 Feb 2024", salaTimes: ["08:00", "10:00", "12:00", "14:00"]}
    ];

    return <>
        <div className="border-bottom">
            <h2>Salas</h2>
            <div id="tarjetas" className="card-deck">
                { salas.map(
                    (sala) => <Sala salaName={sala.salaName} salaSchedule={sala.salaSchedule} salaTimes={sala.salaTimes} url={ sala.url }/>) 
                }
            </div>

        </div>
    </>
}

export default SalaIndexPage