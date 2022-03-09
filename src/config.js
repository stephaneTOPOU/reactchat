import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Germe Tech';

const config = {
    initialMessages: [createChatBotMessage(`Salut! ici ${botName}`)],
    botName: botName,
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E',
        },
        chatButton: {
            backgroundColor: '#5ccc9d',
        },
    },
};

export default config;