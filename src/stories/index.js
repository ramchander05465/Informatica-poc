import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Pagination from '../components/pagination/pagination'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Pagination', module).add('page', ()=> <Pagination selectedPageClass={'wekcine'}  onPageChange={()=>console.log('ddd')}
  onSelectionPageChange={()=> console.log('ddd')}  total={100}  activePage={2}  recordPerPage={10}                        
  defaultConfiguration={['10','20', '30']}></Pagination>)