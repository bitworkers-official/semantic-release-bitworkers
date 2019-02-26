module.exports = {
  verifyConditions: ['semantic-release-vsce', '@semantic-release/github'],
  prepare: [
    {
      path: '@semantic-release/changelog',
      changelogFile: 'CHANGELOG.md',
    },
    '@semantic-release/git',
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
