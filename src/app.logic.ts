import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugins';

const { b:base, l:limit, s:showTable } = yarg;
let outPutMessage = '';
const headerMessage = `
==================================
        Tabla del ${base}
==================================\n
`;


outPutMessage = headerMessage + outPutMessage;
if (showTable) {
    console.log(outPutMessage);
}


