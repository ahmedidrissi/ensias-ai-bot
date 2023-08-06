import { Message } from "./components/message/Message";

export interface Chat {
    name: string;
    messages: Message[];
}