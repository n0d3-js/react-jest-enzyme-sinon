import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import {mount, shallow, render} from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Hello from '../../src/components/Hello';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hello />, div);
});

it('should render Hello World in an H1', () => {
  const wrapper = shallow(<Hello />);
  expect(wrapper.find('h1').text()).to.equal('Hello World');
});

it('should call the function hi() when button is clicked', () => {
  sinon.spy(Hello.prototype, 'hi');
  const wrapper = mount(<Hello />);
  wrapper.find('button').simulate('click');
  expect(Hello.prototype.hi.calledOnce).to.be.true;
});

it('should render Hello, Bob', () => {
  const wrapper = mount(<Hello />);
  wrapper.ref('name').get(0).value = 'Bob';
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#greeting').text()).to.equal('Hello, Bob');
  expect(wrapper.state('greeting')).to.equal('Hello, Bob');
});
