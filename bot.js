const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
//---------
var time = 0;
//---------
function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
//判斷字
function back(m)
{
    var t = getRandomInt(m);
    if(t == 0)
    {
        return 't';
    }
    else
    {
        return 'f';
    }
    
}
//---------
client.login(auth.key);

client.on('ready', () =>
{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => 
{
    var m = msg.content.toLowerCase();
    //
    switch(m)
    {
        //抽老婆
        case '$w':
        case '$wa':
        case '$wg':    
            time++;
            if(time % 10 == 0)
            {
                msg.reply(' 你們抽 ' + time + ' 次了，臭肥宅:"< ');
            }
            else if(time % 3 == 0)
            {
                msg.reply(' 抽三小老婆:"< ');
            }
            break;
        //抽老公
        case '$h':
        case '$ha':
        case '$hg':   
            var r = getRandomInt(3);
            switch(r)
            {
                case 0:
                    msg.reply(' 我懷疑你4甲甲 \n https://cdn.101mediaimage.com/img/2016/03/22/1603907861gdpyg.png');
                    break;
                case 1:
                    msg.reply(' 知男而上 ');
                    break;
                case 2:
                        msg.reply(' 男上加男 ');
                        break;
            }
            break;
        //pokemon
        case '$P':
        case '$p':
            var r = getRandomInt(10);
            if(back(10) == 't')
            {
                msg.reply('我ㄉ瑪夏多ㄋ:"<');
            }
            break;
        //騙人ㄉㄅ
        case '騙人ㄉㄅ':
        case '騙人的吧':
        case ':uso:':
            if(back(3) == 't')
            {
                msg.reply(' \r你在騙人ㄉㄅ\r我就剁你ㄐㄐ https://cdn.discordapp.com/attachments/823465128719941673/842417534619222046/1590549298256.gif');
            }
            break;
            
    }
});