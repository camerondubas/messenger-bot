import request from 'request';
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;

export const sendTextMessage = function(id, text) {
  const messageData = {
    recipient: {id},
    message: {text}
  };

  return callSendAPI(messageData);
};

const callSendAPI = function(messageData) {
  return new Promise((resolve, reject) => {
    request({
      uri: 'https://graph.facebook.com/v2.6/me/messages',
      qs: { access_token: FB_PAGE_TOKEN },
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
