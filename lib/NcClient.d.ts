class NcClient {
    constructor(private config: object, private responseHandler: object);

    executeCommand(command: NcCommand): Promise<object>

    changeConfig(config: object): void;
}
