import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { NavigationBarComponent } from './NavigationBar';

configure({ adapter: new Adapter() });

describe('Sign In Page', () => {
  let subject;
  let mockLogin;

  beforeEach(() => {
    mockLogin = jest.fn();
    subject = shallow(<NavigationBarComponent login={mockLogin} />);
  });

  it('Can Mount', () => {
    expect(subject).toHaveLength(1);
  });
});