import { app } from 'electron'
import path from 'path'

export function setTaskbar () {
  if (global.__mac) app.dock.setIcon(path.join(__static, 'icons/64x64.png'))
}
