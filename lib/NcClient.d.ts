class NcClient {
    constructor(private config: object);

    executeCommand(commandName: string, commandParams: object): Promise<object>
}
