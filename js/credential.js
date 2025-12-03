// En el archivo credential.js

function createMqttClient(clientId) {
    const brokerUrl = 'wss://11c98208298d41e6aa134fb9838e6cf0.s1.eu.hivemq.cloud';

    const options = {
        port: 8884,
        clientId: 'DashboardWeb_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 4000,
        username: 'testuser',
        password: 'Test1234',
        reconnectPeriod: 1000,

        // --- INICIO DE LA CORRECCIÓN ---
        // Especificar explícitamente el protocolo WebSocket.
        // Esto a menudo resuelve el error "connection is closed before established".
        protocol: 'wss'
        // --- FIN DE LA CORRECCIÓN ---
    };

    console.log(`Conectando a ${brokerUrl} en el puerto ${options.port} con el cliente ID: ${options.clientId}`);
    const client = mqtt.connect(brokerUrl, options);
    return client;
}
