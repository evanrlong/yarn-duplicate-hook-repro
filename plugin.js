module.exports = {
  name: 'plugin-hook-issue',
  factory: (require) => {
    const { execute } = require('@yarnpkg/shell')
    return {
      hooks: {
        registerPackageExtensions: async (config) => {
          if (process.argv[2] === 'test') {
            console.log('registerPackageExtensions fired')
            await execute('yarn -v')
          }
        }
      }
    }
  }
}
