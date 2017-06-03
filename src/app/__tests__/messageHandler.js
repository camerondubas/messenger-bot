jest.unmock('request');
jest.unmock('../messageHandler');
import { handleIncomingMessage } from '../messageHandler';

const fbReqMock = {
  "object":"page",
  "entry":[
    {
      "id":"359099234475596",
      "time":1486184651796,
      "messaging":[
        {
          "sender":{
            "id":"1348442095220332"
          },
          "recipient":{
            "id":"359099234475596"
          },
          "timestamp": 1486185436979,
          "message": {
          	"mid": "mid.1486185436979:e811b95000",
     		"seq": 143371,
     		"text": "weather Venice"
          }
        }
      ]
    }
  ]
}

describe('Message Handler', () => {
  describe('Handle Incoming Message', () => {
    test('some test', () => {
      const req = {
        body: fbReqMock
      };
      const res = {
        sendStatus() { return true }
      };

      handleIncomingMessage(req, res);
    })
  })
})
