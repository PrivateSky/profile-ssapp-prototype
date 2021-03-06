import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";
import Message from "../models/Message.js";
import Contact from "../models/Contact.js";
import Outbox from "../models/Outbox.js";

const PROFILE_PATH = '/app/data/profile.json';
const CONTACTS_PATH = '/app/data/contacts.json';
const STORAGE_LOCATION = '/code/data/';
export default class newMessageController extends ContainerController{
    constructor(element, history) {
        super(element);
        this.setModel(new Message());

        this.DSUStorage.getObject(PROFILE_PATH, (err, profile) => {
            this.profile = profile;
            let options = [];
            this.DSUStorage.getObject(CONTACTS_PATH, (err, contacts) => {
                if (typeof contacts === "undefined") {
                    contacts = [];
                }
                this.contacts = contacts;
                contacts.forEach(contact => {
                    let contactObj = new Contact(contact);
                    options.push(contactObj.generateViewModel());
                });
            });

            this.model.contacts = {
                label: "To",
                placeholder: "Select a contact",
                options: options
            };
        });


        this.on("send-message", (event) => {
                let message = this.model;
                this.DSUStorage.getObject(`${STORAGE_LOCATION}${this.profile.id}/outbox.json`, (err, outbox) => {
                    if (typeof outbox === "undefined") {
                        outbox = Outbox.getMessages();
                    }
                    message.to = this.contacts.find(contact => contact.code === message.to);
                    outbox.push(message);
                    this.DSUStorage.setObject(`${STORAGE_LOCATION}${this.profile.id}/outbox.json`, outbox, (err) => {
                        history.push("/outbox");
                    });
                });
        });
    }
}