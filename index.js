const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const clientID = "CLIENT-ID"; 

rpc.register(clientID);
client.login({clientId: clientID}).catch(err => console.log(err));

async function setActivity(){
    if(!client) return;
    client.setActivity({
        details: "Free Source Custom Activity/RPC",
        state: "DM me => Yunaa#7000",
        startTimestamp: Date.now(),
        largeImageKey: "https://media.tenor.com/I-q7dXTqGzAAAAAi/fortnite-dance.gif",
        largeImageText: "Gura",
        smallImageKey: "https://c.tenor.com/TgKK6YKNkm0AAAAi/verified-verificado.gif",
        smallImageText: "Verified",
        instance: false,
        buttons: [
            {
                label: "Discord",
                url: "https://discord.com"
            },
            {
                label: "Twitch",
                url: "https://twitch.tv"
            }
        ]

        }
    )
}

client.on('ready', async () => {
    console.log('Presence now active!')
    console.log('[WARNING] Do not close this Console as it will terminate the rpc')
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15*1000)
})
