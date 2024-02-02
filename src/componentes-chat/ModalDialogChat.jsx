import { useNavigate } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
const ModalDialogChat = () => {
    const navegacion = useNavigate();
    const tema = {
        background: '#f5f8fb',

        headerBgColor: '#EF6C00',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#EF6C00',

        fontFamily: 'Roboto',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    const usuario = JSON.parse(sessionStorage.getItem("usuario_objeto"));
    const peliculas = JSON.parse(sessionStorage.getItem("peliculas"));

    const rndIndex = Math.ceil(Math.random() * peliculas.length);
    const peliRnd = peliculas[rndIndex];
    const peliTitle = peliRnd.title, peliPath = peliRnd.path;
    
    return <ThemeProvider theme={tema}>
        <ChatBot
        // speechSynthesis={{ enable: true, lang: 'es' }} // 0_0
        steps={[
                {
                    id: '1',
                    message: `Hola ${usuario.nombre} 👋, ¿que es lo que estas buscando?`,
                    trigger: '2',
                },
                {
                    id: '2',
                    options: [
                        { value: 'sala', label: 'Salas de cine', trigger: '3' },
                        { value: 'peliculas', label: 'Películas', trigger: '4' },
                        { value: 'random', label: 'Recomiendame una película', trigger: '5' },
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
                    message: `Te recomiendo ver ${peliTitle}`,
                    trigger: '6'
                },
                {
                    id: '6',
                    options: [
                        { value: 'sala', label: 'Okay', trigger: '7' },
                        { value: 'peliculas', label: 'A ver llévame', trigger: '8' },
                    ],
                },
                {
                    id: '7',
                    message: 'Tenemos un extenso catalogo, revisalo 👍',
                    end: true
                },
                {
                    id: '8',
                    component: <button className='btn' onClick={ () => navegacion(`/peliculas-detalle/${peliPath}`)}>Link a la pelicula</button>
                }
                
            ]}/>
    </ThemeProvider>
}

export default ModalDialogChat
