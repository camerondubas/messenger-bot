export default function(obj,cb) {
  const error = null;
  const response = {statusCode : 200};
  const body = {recipient_id: 1, message_id: 1};

  return cb(error, response, body);
};
