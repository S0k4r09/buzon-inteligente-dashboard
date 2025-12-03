function createMqttClient(clientId) {
    const brokerUrl = 'wss://11c98208298d41e6aa134fb9838e6cf0.s1.eu.hivemq.cloud/mqtt';
    const options = {
        port: 443,
        clientId: 'DashboardWeb_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 10000,
        reconnectPeriod: 1000,
        protocol: 'wss',
        username: 'buzon.app',
        password: 'Hola1234',
    };
    console.log(`Conectando a ${brokerUrl} en el puerto ${options.port} con el cliente ID: ${options.clientId}`);
    const client = mqtt.connect(brokerUrl, options);
    return client;
}
