module.exports = {
  verifyConditions: ['semantic-release-vsce'],
  prepare: [
    {
      path: 'semantic-release-vsce',
      packageVsix: 'chatdown.vsix',
    },
  ],
  publish: [
    'semantic-release-vsce',
    {
      path: '@semantic-release/github',
      assets: 'chatdown.vsix',
    },
  ],
}
