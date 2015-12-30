import 'babel-polyfill';
import React from 'react';
// Create a fake global `window` and `document` object:
var jsdom = require('mocha-jsdom');

// Replace BigComplicatedComponent.js with a stub component.
global.reactModulesToStub = [
  'BigComplicatedComponent.js'
];

var assert = require('assert');

describe('Appbar', function() {
  jsdom();

  it('is an element', function() {
    var TestUtils = require('react-addons-test-utils');
    var Appbar = require('../../app/components/Appbar');

    assert.equal(true,TestUtils.isElementOfType(<Appbar/>,Appbar));

    // // Render a checkbox with label in the document
    // var checkbox = TestUtils.renderIntoDocument(
    //   <CheckboxWithLabel labelOn="On" labelOff="Off" />
    // );

    // // Verify that it's Off by default
    // var label = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'label');
    // assert.equal(label.getDOMNode().textContent, 'Off');

    // // Simulate a click and verify that it is now On
    // var input = TestUtils.findRenderedDOMComponentWithTag(
    //   checkbox, 'input');
    // TestUtils.Simulate.change(input);
    // assert.equal(label.getDOMNode().textContent, 'On');
  });
});
