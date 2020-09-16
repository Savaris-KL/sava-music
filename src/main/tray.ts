import { app, Menu, Tray } from 'electron'
import path from 'path'

export function createTray () {
  const tray = new Tray(path.join(__static, 'icons/16x16.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' },
    { label: 'Item3', type: 'radio', checked: true },
    { label: 'Item4', type: 'radio' }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
  return tray
}
