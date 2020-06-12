import ContainerController from "../../cardinal/controllers/base-controllers/ContainerController.js";
import Message from "../models/Message.js";

const PROFILE_PATH = '/app/data/profile.json';
const STORAGE_LOCATION = '/code/data/';
export default class viewMessageController extends ContainerController {
    constructor(element, history) {
        super(element);
        this.setModel({});
        if (typeof history.location.state !== "undefined") {
            this.messageIndex = history.location.state.messageIndex;
        }

        console.log("View message controller message index", this.messageIndex);
        if (typeof this.messageIndex !== "undefined") {
            this.DSUStorage.getObject(PROFILE_PATH, (err, profile) => {
                this.profile = profile;
                this.DSUStorage.getObject(`${STORAGE_LOCATION}${this.profile.id}/outbox.json`, (err, messages) => {
                    console.log("Got outbox json", messages);
                    this.model.message = new Message(messages[this.messageIndex]);
                    console.log("Message", this.model.message);
                });
            });
        } else {
            this.model.message = new Message();
        }
    }
};