module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
        [
          'module-resolver',
          {
           root: ['./src'],
           extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
           alias: {
             "icons": "./assets/icons",
             "@images": "./assets/images",
             tests: ['./tests/'],
               "@components": "./src/components",
             }
       }
    ]
]
};
