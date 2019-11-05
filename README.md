# calculator
A simple calculator with a user interface to perform basic functions.

How to execute code:

1. Download and install Node.js and npm onto your machine.

2. From the command line, type 'npm init' to create a package.json file and paste into in the following driver code:

  const {app, BrowserWindow} = require('electron') 
  const url = require('url') 
  const path = require('path')  

  let win  

  function createWindow() { 
     win = new BrowserWindow({width: 800, height: 600}) 
     win.loadURL(url.format ({ 
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file:', 
        slashes: true 
     })) 
  }  

  app.on('ready', createWindow) 

3. Download and install Electron. Electron enables you to create desktop applications with pure JavaScript by providing a runtime with rich native (operating system) APIs.

4. Run the following command: '$ electron ./main.js' this should display the HTML, CSS, and JS as an application.

5. Install the Electron packager which will allow you to create an executable (.exe) from the code using: 'npm install electron-packager -g'

6. Finally, package all of the code in the project file directory using 'electron-packager <sourcedir> <appname> --platform=win32 --arch=x86_64'. This command is meant to create an executable for Windows machines. For Mac and Linux you will need to change the platform and architecture to create an executable to suit that OS.
