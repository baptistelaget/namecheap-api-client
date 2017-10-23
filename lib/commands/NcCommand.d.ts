declare abstract class NcCommand<ResponseType = any> {
    constructor(public commandName: string,
                public params: object);

    public toRequestParams(): any;
}
