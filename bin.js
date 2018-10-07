#!/usr/bin/env node

const { analyse } = require('.')
const { description } = require('./package.json')

function print (analysis, { json, indent }) {
  if (!indent) indent = ''
  const { authors, dependencies, maintainers, project } = analysis
  if (json) {
    console.log(JSON.stringify({ authors, dependencies, maintainers }))
  } else {
    console.log('')
    console.log(`${indent}${project} has ${authors.length} author(s) and ${maintainers.length} maintainer(s).`)
    if (authors.length) {
      console.log(`${indent}Authors:`)
      for (let { name, email } of authors) {
        console.log(`${indent}- ${name} <${email}>`)
      }
    }
    if (maintainers.length) {
      console.log(`${indent}Maintainers:`)
      for (let { name, email } of maintainers) {
        console.log(`${indent}- ${name} <${email}>`)
      }
    }
    if (dependencies) {
      for (let dependency of dependencies) {
        print(dependency, { indent: `${indent}  ` })
      }
    }
  }
}

require('yargs')
  .alias('h', 'help')
  .alias('v', 'version')
  .command({
    command: '$0 <project>',
    description,
    builder: (yargs) => {
      yargs.positional('project', {
        describe: 'Name of the project on NPM.',
        type: 'string',
        required: true
      })
    },
    handler: async ({ json, project, recursive, registry }) => {
      const analysis = await analyse(project, { registry, recursive })
      print(analysis, { json })
    }
  })
  .options({
    registry: {
      alias: 'r',
      description: 'URL to the NPM registry to use.',
      default: 'https://skimdb.npmjs.com/registry'
    },
    json: {
      alias: 'j',
      description: 'Output analysis as JSON. Useful for aggregation.',
      default: false
    },
    recursive: {
      alias: 'R',
      description: 'Analyse project dependencies too.',
      default: false
    }
  })
  .help()
  .parse()
