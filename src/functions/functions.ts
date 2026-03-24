type LogContext = {
    userId?: string
    appId?: string
};

function logMessage(message: string, context: LogContext = {}) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, context.userId)
}

logMessage("Prijavljne korisnik", { userId: "2342345" });