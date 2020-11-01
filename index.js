require("dotenv").config();
const axios = require("axios");
const discord = require("discord.js");
const client = new discord.Client();
const gifUrl =
  "https://api.tenor.com/v1/random?q=gibraltarapex&key=" +
  process.env.TENOR_TOKEN;

function RandomReply() {
  let rand = Math.random();
  let str = "";
  if (rand > 0.66) {
    str = "Gibby is feeling especially stinky today.";
  } else if (rand <= 0.66 && rand > 0.33) {
    str = "I miss Nicholas.";
  } else {
    str = "Hey Bruddas, what smells?";
  }
  return str;
}

//Event Listener for when a message is sent.
client.on("message", (msg) => {
  if (msg.content == "!stinky") {
    axios
      .get(gifUrl)
      .then((res) => {
        // console.log(res, "RES");
        response = res.data.results[0].url;
        msg.reply(response);
      })
      .catch((err) => console.log(err, "ERROR"));
    msg.reply(RandomReply());
  }
});

//Connect to server
client.login(process.env.DISCORD_TOKEN);
