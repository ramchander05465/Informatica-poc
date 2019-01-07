import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Pagination from './pagination';

describe('Pagination component', () => {
    describe('renders without crashing', () => {        
        it('should render the component', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Pagination selectedPageClass={'wekcine'}
            onPageChange={() => console.log('dd')}
            onSelectionPageChange={() => console.log('dd')}
            onDispalyPage={(page, isValid)=>() => console.log('dd')}
            total={100}
            activePage={2}
            recordPerPage={10}                        
            defaultConfiguration={[{ num: 10 }, { num: 25 }, { num: 50 }]} />, div);
            ReactDOM.unmountComponentAtNode(div);
        });
    })
})