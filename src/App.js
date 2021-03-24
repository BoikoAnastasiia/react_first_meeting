import React from 'react';
import Logo from './components/logo';
import PaintingList from './components/PaintingList';
import srcPaintings from './src.json';
import Panel from './components/panel';
import ColorPicker from './components/colorPicker/colorPicker';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const App = () => {
  return (
    <div>
      <ColorPicker options={colorPickerOptions} />
      <Panel title="fresh news">
        <p>
          Take two powerhouse women with impeccable comedic timing, add some
          bad-ass superhero costumes, and that's really all we need to know.
          This action comedy starring Melissa McCarthy and Octavia Spencer is
          helmed by McCarthy's husband, Ben Falcone, and it might just provide
          the heroes we've all been waiting for - even if their crime-fighting
          quest was largely accidental.
        </p>
        <a href="https://app.schoology.com/calendar/93611783/2021-03"> Read</a>
      </Panel>
      <Panel title="fresh news">
        <p>
          What a long and storied history this release has had, from director
          Zack Snyder's struggles with his studio, personal tragedy, his
          replacement's fall from grace, and the subsequent rallying cry from
          fans to #ReleasetheSnyderCut. Whether it's a trainwreck or a
          triumphant closing chapter to this Hollywood story, make an extra
          batch of popcorn for this 4-hour (!) event.
        </p>
        <a href="https://app.schoology.com/calendar/93611783/2021-03"> Read</a>
      </Panel>

      <Logo text="The main component of an painting App container" />
      <PaintingList items={srcPaintings} />
    </div>
  );
};

export default App;
