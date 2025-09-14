const { app, BrowserWindow, nativeTheme, Menu, shell } = require('electron')

//template do menu
const template = [
  {
    label: 'Arquivo',
    submenu: [
      { label: 'Sair', 
        click: () => app.quit(),
        accelerator: 'Alt+F4'
       }
    ],
  },
  {
    label: 'Exibir',
    submenu: [
      { role: 'reload', label: 'Recarregar' },
      { role: 'toggledevtools', label: 'Toggle DevTools' }
    ]
  },
  {
    type: 'separator'
  },
  {
    label: 'Zoom',
    submenu: [
      { 
        label: 'Aplicar zoom',
        role: 'zoomIn'
      },
      {
        label: 'Reduzir',
        role: 'zoomOut'
      },
      {
        label: 'Restaurar o zoom padrão',
        role: 'resetZoom'
      },
    ],
  },
  {
    label: 'Ajuda',
    submenu: [
      {
        label: 'docs',
        click: () => shell.openExternal('https://www.electronjs.org/docs/latest/')
      },
      {
        type: 'separator'
      },
      {
        label: 'Sobre',
        click: () => aboutWindow()
      },
    ]
  }
]

const createWindow = () => {
    nativeTheme.themeSource = 'light'
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: './src/public/img/image.png',
    // resizable: false,
    // autoHideMenuBar: true,
    // titleBarStyle: 'hidden',

  })

  Menu.setApplicationMenu(Menu.buildFromTemplate(template))

  win.loadFile('./src/views/index.html')
}

const aboutWindow = () =>{
  const about = new BrowserWindow({
    width: 360,
    height: 220,
    icon: './src/public/img/image.png',
    autoHideMenuBar: true,
    resizable: false
  })

  about.loadFile('./src/views/sobre.html')
}

app.whenReady().then(() => {
  createWindow()
  //aboutWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

