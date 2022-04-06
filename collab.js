// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `It's cool to build something alone but it's always more fun and better with friends, collaboration builds friendship and project both 🥂🥳🎇,reach @gitdjay soon again`
});