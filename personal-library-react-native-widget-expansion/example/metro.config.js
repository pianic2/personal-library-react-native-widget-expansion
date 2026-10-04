const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// The workspace package is a symlink outside the example app directory.
config.watchFolders = [path.resolve(__dirname, '..')];

module.exports = config;
