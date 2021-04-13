# Reproduction of possible registerPackageExtensions issue

I am prototyping a plugin for Yarn 2. When attempting to use the `registerPackageExtensions` hook, I noticed that
it seemed to be firing off twice for every yarn command run.  It seems like two versions of yarn are running for each
command...

`1.22.10` (or whatever is installed globally on your machine)
`2.4.1` (the yarn 2 version installedlocally in the project)

This is weird since hooks are only supported in Yarn 2. I was expecting `registerPackageExtensions` to only fire once
for each command run.

This is a minimal reproduction of the issue.

To run, clone this repo, then run `yarn test` from the root of the project.
