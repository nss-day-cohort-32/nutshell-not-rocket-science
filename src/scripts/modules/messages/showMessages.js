import {
  buildMessageBox
} from "./buildMessageBox";
import {
  refreshMessages
} from "./refreshMessages";


export function showMessages() {
  buildMessageBox();

  //  Not the most efficient way to do this,
  //  but it will work for now...
  refreshMessages();
  //setInterval(refreshMessages, 10000);
}