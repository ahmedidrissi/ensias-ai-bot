import { Message } from "./components/message/Message";

export interface Chat {
    id?: number;
    name: string;
    messages: Message[];
}