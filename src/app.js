// @flow

import { app, BrowserWindow } from 'electron';

import './index.html';

let win;
function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
//        transparent: true,
//        frame: false,
        webPreferences: {
            experimentalFeatures: true
        }
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
