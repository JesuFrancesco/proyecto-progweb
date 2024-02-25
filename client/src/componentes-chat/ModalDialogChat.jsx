import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components';
import PeliculaCard from './BuscadorPeliculas';
import SalaCard from './BuscadorSalas';

const ModalDialogChat = () => {
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

    
    return <ThemeProvider theme={tema}>
        <ChatBot
        // speechSynthesis={{ enable: true, lang: 'es' }} // 0_0
        steps={[
                {
                    id: '1',
                    message: `Hola ${usuario.nombres} 👋, ¿que es lo que estas buscando?`,
                    trigger: 'opciones',
                },
                {
                    id: 'repetir',
                    message: `¿Deseas saber algo más?`,
                    trigger: 'opciones',
                },
                {
                    id: 'opciones',
                    options: [
                        { value: 'sala', label: 'Salas de cine', trigger: '3' },
                        { value: 'random', label: 'Recomiéndame una película', trigger: '4' },
                        { value: 'contactos', label: 'Contactos', trigger: '5' },
                    ],
                },
                {
                    id: '3',
                    component: <SalaCard />,
                    trigger: 'repetir',
                },
                {
                    id: '4',
                    component: <PeliculaCard />,
                    trigger: 'repetir',
                },
                {
                    id: '5',
                    message: `Puedes llamar al teléfono (511) 4376767`,
                    trigger: 'repetir',
                },
            ]}/>
    </ThemeProvider>
}

export default ModalDialogChat
