import ChatBot from 'react-simple-chatbot'

const ModalDialogChat = () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario_objeto"));
    const peliculas = JSON.parse(sessionStorage.getItem("peliculas"));
    
    return <ChatBot
    steps={[
            {
                id: '1',
                message: `Hola ${usuario.nombre}, ¿que es lo que estas buscando?`,
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 'sala', label: 'salas de cine', trigger: '3' },
                    { value: 'peliculas', label: 'peliculas', trigger: '4' },
                    { value: 'random', label: 'recomienda pelicula', trigger: '5' },
                ],
            },
            {
                id: '3',
                message: 'Hay varias salas, debes verlas 👍',
            },
            {
                id: '4',
                message: 'Tenemos un extenso catalogo, revisalo 👍',
            },
            {
                id: '5',
                message: `Te recomiendo ver ${(() => {
                    const rndIndex = Math.ceil(Math.random() * peliculas.length);
                    const peliRnd = peliculas[rndIndex];
                    return peliRnd.title})()}`,
                end: true,
            },
        ]}/>
}

export default ModalDialogChat
