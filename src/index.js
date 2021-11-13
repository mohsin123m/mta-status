const request = require("request");
const cheerio = require("cheerio");


exports.status = async function (args1,args2) {
    return new Promise(async (resolve, reject) => {
        if (!args1 ||!args2) reject ("Invalid argument");
            const domain = "https://www.game-state.com"
            let ip = args1;
            let port = args2;
            const link = domain + "/" + ip + ":" + port
            
            request(link , (error , response , html) => {
                if(!error && response.statusCode == 200){
                    const $ = cheerio.load(html)
                    const players = $("#players").html();
                    const onlinePlayer = players.split("/")[0];
                    const maxPlayer = players.split("/")[1];
                    const serverName = $("#hostname").html();
                    const gamemode = $("#gamemode").html();
                    const status = $("#state").html();
                    let resultSucces = {onlinePlayer : onlinePlayer, maxPlayer : maxPlayer,serverName : serverName,gamemode : gamemode,status : status};
                    resolve (resultSucces);
                } else if (error && response.statusCode != 200) {
                    let errorFaild = {
                        "message":"[FAILED] - The process failed.. - [FAILED]",
                        "code" : response.statusCode
                    }
                    reject(errorFaild)
                }
            });
        
    });
};
