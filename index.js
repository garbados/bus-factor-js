const request = require('./lib/request')

async function analyse (project, { registry, recursive }) {
  const url = `${registry}/${project}`
  const meta = await request({ url, json: true })
  const { maintainers, author, authors } = meta
  const allAuthors = (authors || []).concat(author).filter(a => !!a)
  if (recursive) {
    const { versions } = meta
    const [ latest ] = Object.keys(versions).slice(-1)
    const { dependencies, devDependencies } = versions[latest]
    const allDependencies = Object.assign({}, dependencies, devDependencies)
    const dependenciesMeta = []
    for (let name of Object.keys(allDependencies)) {
      const dependencyMeta = await analyse(name, { registry })
      dependenciesMeta.push(dependencyMeta)
    }
    return {
      authors: allAuthors,
      dependencies: dependenciesMeta,
      maintainers,
      project
    }
  }
  return { authors: allAuthors, maintainers, project }
}

module.exports = { analyse }
