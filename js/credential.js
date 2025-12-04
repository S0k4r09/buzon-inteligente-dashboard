// credential.js o tu archivo de configuración

host = "31ece...s1.eu.hivemq.cloud";
port = 8884;
path = "/mqtt";
clientId = "web_" + parseInt(Math.random() * 100, 10); 

client.connect({
    onSuccess: onConnect,
    useSSL: true,
    userName: "buzon.app",
    password: "BuzonApp123!",
    onFailure: onFailure
});
