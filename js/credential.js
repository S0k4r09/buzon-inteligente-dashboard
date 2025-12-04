// credential.js o tu archivo de configuración

var mqttHost = "31ece5296d8e40029e588378218e87d0.s1.eu.hivemq.cloud"; // Tu host actual
var mqttPort = 8884; // ¡IMPORTANTE: 8884 para WebSockets Seguros!
var mqttUseSSL = true; // Obligatorio true
var mqttUser = "buzon.app";
var mqttPass = "BuzonApp123!"; // La que configuraste en HiveMQ

client.connect({
    onSuccess: onConnect,
    useSSL: true,
    userName: "buzon.app",
    password: "BuzonApp123!",
    onFailure: onFailure
});

