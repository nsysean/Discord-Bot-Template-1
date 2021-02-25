const { MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const prefix = require("../../config.json").prefix;

module.exports = {
  name: "help",
  aliases : ['h'],
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {

if(!args[0]){
    let categories = [];
    const fs = require("fs")
const dirt = ("./commands/");
var prefix = ("x")

    // list all files in the directory
    
    fs.readdir(dirt, (err, dir) => {
        if (err) {
            throw err;
        }
    
        
        dir.forEach(dir => {
      

        categories.push({
          name: `${dir.toUpperCase()}`,
          value: `\`${prefix}cmd ${dir.toLowerCase()}\``,
          inline: true,
        });
        console.log(categories)
      });
      const embed = new MessageEmbed()
        .setTitle("📬 Need help? Here are all of my commands:")
       
       
        .addFields(categories)
        
     
        .setDescription(
          `Use \`${prefix}help\` followed by a command name to get more additional information on a command. For example: \`${prefix}help ban\`.`
        )
        .setFooter(
          `Requested by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
      return message.channel.send(embed);
   
})}else{const commands = readdirSync(`./commands/${args.join(" ").toLowerCase()}/`).filter((file) =>
file.endsWith(".js")

);
if (!commands) {
  const embed = new MessageEmbed()
    .setTitle(`Invalid category! Use \`${prefix}cmd\` for all of my categories!`)
    .setColor("FF0000");
  return message.channel.send(embed);
}

const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setTitle(`${args.join(" ")} commands`)
.addFields({name: `\`${commands.join("\` \`")}\`\n${commands.description||("No description")}`, value: `Made by nsysean with hate </3`})
message.channel.send(embed)}
 
  
  },
};
