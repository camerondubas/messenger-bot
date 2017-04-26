import request from 'request';
const PAGE_TOKEN = 'EAAbFVcGDAgcBAK5ZA9G0gxucZB6VlIUGp0aAVMSJO539timcCZC4PV5ZCr7w7asrGfarFp6E9ougbdctiySf8oVatj62bnjnK8YZArELBGJhjJ9QRzwACwqZC4ExVcrjicoRj5FNFm0DAjRO2bRerUZCDgTGaAI8vSDSNPbsx7a2gZDZD';

export const sendTextMessage = function(id, text) {
  const messageData = {
    recipient: {id},
    message: {text}
  };

  return callSendAPI(messageData);
};

export const callSendAPI = function(messageData) {
  return new Promise((resolve, reject) => {
    request({
      uri: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: PAGE_TOKEN },
      method: 'POST',
      json: messageData

    }, (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const recipientId = body.recipient_id;
        const messageId = body.message_id;
        resolve();
      } else {
        console.error("Unable to send message.");
        console.log(response.statusCode);
        console.error(error);
        reject();
      }
    });
  });

};

export const sendTypingMessage = function(id) {
  const messageData = {
    recipient: {id},
    sender_action: 'typing_on'
  };

  return callSendAPI(messageData);
};

export const sendSeenMessage = function(id) {
  const messageData = {
    recipient: {id},
    sender_action: 'mark_seen'
  };

  return callSendAPI(messageData);
};

export const sendButtonMessage = function (id, text, buttons) {
  console.log(id, text, buttons)
  const messageData = {
    recipient: {id},
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text,
          buttons
        }
      }
    }
  };

  return callSendAPI(messageData);
};