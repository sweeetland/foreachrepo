# foreachrepo

A CLI to recursively search for all repos from the current directory and run a command in each one. Useful when you work across multiple repos at a time. For example...

-   To checkout branch dev and git pull across multiples repos you can run:
    `foreachrepo git checkout dev && git pull`

-   To see all your commits in the past 24 hours, across multiple repos you can run:
    `foreachrepo git log --all --author=$(git config user.email) --since=format:relative:24.hours.ago`

## Install

`npm i -g foreachrepo`

or

`yarn global add foreachrepo`

## Usage

Navigate to a directory that contains multiple git repos and run:

`foreachrepo your terminal command`

or use `fer` for short:

`fer your terminal command`
