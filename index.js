module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/git',
  ],
  verifyConditions: [
    '@semantic-release/changelog',
    'semantic-release-vsce',
    '@semantic-release/github',
  ],
  prepare: [
    {
      path: '@semantic-release/changelog',
    },
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
