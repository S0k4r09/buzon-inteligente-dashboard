function createMqttClient(clientId) {
    // --- DATOS DEL NUEVO CLÚSTER ---
    const brokerUrl = 'wss://31ece5296d8e40029e588378218e87d0.s1.eu.hivemq.cloud/mqtt';
    const options = {
        port: 443, // Usamos 443 para WebSockets seguros, es el estándar y evita firewalls
        clientId: clientId || 'DashboardWeb_' + Math.random().toString(16).substr(2, 8),
        clean: true,
        connectTimeout: 10000, // Milisegundos para esperar la conexión
        reconnectPeriod: 1000, // Milisegundos para intentar reconectar
        protocol: 'wss',

        // --- CREDENCIALES ---
        // Asegúrate de que este usuario y contraseña existan en el NUEVO clúster.
        username: 'buzon.app',
        password: 'BuzonApp123!',
    };
    // ---------------------------------

    console.log(`Conectando a ${brokerUrl} con el cliente ID: ${options.clientId}`);
    const client = mqtt.connect(brokerUrl, options);
    return client;
}
