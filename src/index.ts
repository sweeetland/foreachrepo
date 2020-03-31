import { exec as _exec } from 'child_process'
import { readdirSync } from 'fs'
import { promisify } from 'util'

const exec = promisify(_exec)

const dirsToIgnore = ['node_modules', 'deps', 'gems', 'build', 'dist']

export const forEachRepo = async (path: string, command: string) => {
    const branches = readdirSync(path, { withFileTypes: true })

    for (const branch of branches) {
        if (!branch.isDirectory() || dirsToIgnore.includes(branch.name)) continue

        if (branch.name === '.git') {
            try {
                const { stdout } = await exec(`cd ${path} && ${command}`)
                console.log(stdout)
            } catch (error) {
                console.log(
                    `command (${command}) failed with path (${path}) due to error: ${error.message}`
                )
            }
            continue
        }

        forEachRepo(`${path}/${branch.name}`, command)
    }
}
