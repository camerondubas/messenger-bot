export default function({context, entities}) {
  context.help = `
Here are some of the things that you can ask for, just type these commands and I'll hadle your request

=== 'update' ===
This will get Cameron's latest location as well as some information about that city
`;
  return context;
};
