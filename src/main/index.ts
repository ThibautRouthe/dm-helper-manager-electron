import {app, BrowserWindow} from "electron"
import path from "path";
import { getPreloadPath } from "./utils/pathResolver.js";

app.on("ready", ()=>{
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: getPreloadPath(),
            contextIsolation: true,
            nodeIntegration: false,
        }
    });
    if(app.isPackaged){
        mainWindow.loadFile(path.join(app.getAppPath() + "/dist-react/index.html"));
    }else{
        mainWindow.loadURL("http://localhost:5123");
    }
})