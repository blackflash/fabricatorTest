/**
 * Global `fabricator` object
 * @namespace
 */
const myTest = window.myTest = {};

/**
 * Default options
 * @type {Object}
 */
myTest.options = {
  toggles: {
    labels: true,
    notes: true,
    code: false
  },
  menu: false,
  mq: '(min-width: 60em)'
};

myTest.test = () => {
  window.console.log('test');
};

