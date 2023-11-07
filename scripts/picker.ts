import { readdir } from 'node:fs/promises'
import process from 'node:process'
import { consola } from 'consola'
import { execa } from 'execa'

async function startPicker(args: string[]) {
  const folders = (
    await readdir(new URL('..', import.meta.url), { withFileTypes: true })
  )
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(folder => folder.match(/^[0-9]{4}-/))
    .sort((a, b) => -a.localeCompare(b))

  const folder = await consola.prompt('Pick a folder', {
    type: 'select',
    options: folders,
  })

  if (folder) {
    await execa('pnpm', ['run', ...args], {
      cwd: new URL(`../${folder}/src`, import.meta.url),
      stdio: 'inherit',
    })
  }
}

startPicker(process.argv.slice(2))
