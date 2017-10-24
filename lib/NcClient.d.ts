import { NcCommand } from './commands/NcCommand';
import { NcConfig } from './NcConfig';

export class NcClient {
    constructor(private config: NcConfig, private responseHandler: object);

    executeCommand(command: NcCommand): Promise<object>

    changeConfig(config: NcConfig): void;
}
