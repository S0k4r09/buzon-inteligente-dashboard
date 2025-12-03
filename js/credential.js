// Archivo: js/credential.js

function createMqttClient(clientId) {
    // --- INICIO DE LA CORRECCIÓN ---
    // Usaremos el puerto 443, que casi nunca está bloqueado.
    // Para ello, la URL debe terminar en "/mqtt".
    const brokerUrl = 'wss://11c98208298d41e6aa134fb9838e6cf0.s1.eu.hivemq.cloud:443/mqtt';

    const options = {
        // Ya no especificamos el puerto aquí, va incluido en la URL.
        clientId: 'DashboardWeb_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 10000, // Aumentamos el tiempo de espera a 10s
        reconnectPeriod: 1000,
        protocol: 'wss',
        username: 'buzon.app',
        password: 'Hola1234',
    };
    // --- FIN DE LA CORRECCIÓN ---

    console.log(`Conectando a ${brokerUrl} con el cliente ID: ${options.clientId}`);
    const client = mqtt.connect(brokerUrl, options);
    return client;
}

