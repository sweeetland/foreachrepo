import { exec as _exec } from 'child_process'
import { readdirSync } from 'fs'
import { promisify } from 'util'

const exec = promisify(_exec)

export const forEachRepo = async (command: string, path: string) => {
    const branches = readdirSync(path, { withFileTypes: true })

    for (const branch of branches) {
        if (!branch.isDirectory() || branch.name === 'node_modules') continue

        if (branch.name === '.git') {
            const { stdout } = await exec(`cd ${path} && ${command}`)
            console.log(stdout)
            continue
        }

        forEachRepo(command, `${path}/${branch.name}`)
    }
}
