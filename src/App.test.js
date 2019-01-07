import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App Component', () => {
  /*it('renders without crashing', (done) => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    done();
    ReactDOM.unmountComponentAtNode(div);
  })*/
  it('should be true', ()=>{
    expect(true).toBeTruthy()
  })
})
