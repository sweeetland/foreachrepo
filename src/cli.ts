#!/usr/bin/env node

import { forEachRepo } from './index'

const cmd = process.argv
    .slice(2)
    .map(arg => `'${arg}'`)
    .join(' ')

// const GIT_LOG = `git log --all --author=$(git config user.email) --since=format:relative:24.hours.ago`

forEachRepo(process.cwd(), cmd)
