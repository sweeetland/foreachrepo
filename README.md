# foreachrepo

A CLI to recursively search for all repos from the current directory and run a git command on each one. Usual for you work with multiple repos at a time. For example...

-   To run git pull across all multiple repos I can run:
    `foreachrepo git pull`

-   To see all my commits in the past 24 hours, across multiple repos I can run:
    `foreachrepo git log --all --author=$(git config user.email) --since=format:relative:24.hours.ago`

## Install

`npm i -g foreachrepo` or `yarn global add foreachrepo`

## Usage

`foreachrepo your terminal command`

You can also use `fer` too: `fer your terminal command`
