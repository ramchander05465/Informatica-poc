import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css'
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

storiesOf('Informatica', module)
.add('Default', ()=> <div className="grid--rows--container pagination"><Pagination selectedPageClass={'wekcine'}
onPageChange={action('changed')}
onSelectionPageChange={action('page changed')}
total={100}
activePage={2}
recordPerPage={10}                        
defaultConfiguration={[{ num: 10 }, { num: 25 }, { num: 50 }]} /></div>);