import { app } from "electron";
import path from "path";

export function getPreloadPath(){
    return path.join(
        app.getAppPath(),
        !app.isPackaged ? '.' : '..',
        '/dist-preload/index.js'
    )
}