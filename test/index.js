/* global describe, it */

const assert = require('assert')
const { analyse } = require('..')

const project = 'jerry-quotient'
const registry = 'https://skimdb.npmjs.com/registry'

describe('bus-factor', function () {
  it('should gather stats', async function () {
    const analysis = await analyse(project, { registry })
    assert('authors' in analysis)
    assert('maintainers' in analysis)
  })

  it('should gather stats recursively', async function () {
    this.timeout(10000)
    const analysis = await analyse(project, { recursive: true, registry })
    assert('authors' in analysis)
    assert('maintainers' in analysis)
    assert('dependencies' in analysis)
  })
})
