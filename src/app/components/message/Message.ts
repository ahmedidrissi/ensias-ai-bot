// the message model
export class Message {
    constructor(
        public type: string,
        public avatar: string,
        public username: string,
        public content: string
    ) { }
}