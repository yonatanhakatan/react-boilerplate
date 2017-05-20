module.exports = {
  description() {
    return 'Generates a React-Boilerplate Component';
  },
  fileMapTokens() {
    return {
      __component__: options => options.settings.getSetting('componentPath'),
      __name__: options => options.entity.name,
    };
  },
};
