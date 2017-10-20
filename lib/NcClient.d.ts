class NcClient {
    constructor(private config: object, private responseHandler: object);

    executeCommand(commandName: string, commandParams: object): Promise<object>
}
