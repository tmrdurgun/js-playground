/**
 * Suppose you are building a chat application where users can send messages to each other. 
 * How would you apply the Observer pattern to notify users when they receive a new message?
 */

class MessagePublisher{
    constructor(){
        this.subscribers = [];
    }

    subscribe(subscriber) {
        this.subscribers.push(subscriber);
    }

    unSubscribe(subscriber) {
        const index = this.subscribers.indexOf(subscriber);

        if(index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notifyUser(from, to) {
        const index = this.subscribers.indexOf(to);

        if(!this.subscribers[index]) {
            return;
        }

        this.subscribers[index].onNewMessageRecieved(`Dear ${to.name}, You have recieved a new message from: ${from.name}`);
    }
}

class User{
    constructor(name, messagePublisher) {
        this.name = name;
        this.messagePublisher = messagePublisher;
    }

    sendNewMessage(to){
        this.messagePublisher.notifyUser(this, to);
    }

    onNewMessageRecieved(message) {
        if(!message) {
            return;
        }

        console.log(message);
    }
}

const messagePublisher = new MessagePublisher();
const user1 = new User('tamer', messagePublisher);
const user2 = new User('niko', messagePublisher);

messagePublisher.subscribe(user1);
messagePublisher.subscribe(user2);

user1.sendNewMessage(user2);
user2.sendNewMessage(user1);
user2.sendNewMessage(user1);
user2.sendNewMessage(user1);

messagePublisher.unSubscribe(user1);

user2.sendNewMessage(user1);
user2.sendNewMessage(user1);