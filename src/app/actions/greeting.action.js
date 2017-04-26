const handleGreeting = function({context, entities}) {
  return new Promise((resolve) => {
    context.greeting = `Hi there! What can I do for you? Type 'help' if you're not sure where to start`;
    resolve(context);
  });
  // sendButtonMessage(event.sender.id, message, buttonArray)
  // .catch(err => {throw Error(err)});
};

module.exports = handleGreeting;