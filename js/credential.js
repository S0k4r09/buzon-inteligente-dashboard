function createMqttClient(clientId) {
    const brokerUrl = 'wss://11c98208298d41e6aa134fb9838e6cf0.s1.eu.hivemq.cloud:443/mqtt';
    const options = {
        clientId: 'DashboardWeb_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 10000, // Aumentamos el tiempo de espera a 10s
        reconnectPeriod: 1000,
        protocol: 'wss',
        username: 'buzon.app',
        password: 'Hola1234',
    };
    console.log(`Conectando a ${brokerUrl} con el cliente ID: ${options.clientId}`);
    const client = mqtt.connect(brokerUrl, options);
    return client;
}


