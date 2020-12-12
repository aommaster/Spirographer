import React from 'react';
import CommandButton from './CommandButton';

function CommandPanel() {
  return (
    <div id="commandPanel">
      <p>Panel here</p>
      <CommandButton buttonType='start'/>
    </div>
    
  );
}

export default CommandPanel;
