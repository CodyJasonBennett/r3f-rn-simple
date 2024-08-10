const { getDefaultConfig } = require('expo/metro-config')

const config = getDefaultConfig(__dirname)
config.resolver.sourceExts.push('js', 'jsx', 'json', 'ts', 'tsx', 'cjs', 'mjs')
config.resolver.assetExts.push('glb', 'gltf', 'png', 'jpg')

module.exports = config
