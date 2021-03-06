
class ActionProvider {
    constructor(createChatbotMessage, setStateFunc, createClientMessage) {
        this.createChatbotMessage = createChatbotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleHello() {
        const message = this.createChatBotmessage('Hello. Ravi de vous rencontrer.');

        this.setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    }
}

export default ActionProvider;