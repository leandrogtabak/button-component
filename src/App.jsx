import Button from './components/Button/Button';

import './App.css';

function App() {
  const handleClick = () => {
    console.log('You clicked me!');
  };
  return (
    <div className='App'>
      <h1>Button Component</h1>
      <div id='contenedor'>
        {/* colors */}
        <div className='card colors'>
          <p>{`<Button color='default' />`}</p>
          <Button text='Default' color='default' />
        </div>
        <div className='card colors'>
          <p>{`<Button color='primary' />`}</p>
          <Button color='primary' text='Primary' />
        </div>
        <div className='card colors'>
          <p>{`<Button color='secondary' />`}</p>
          <Button color='secondary' text='Secondary' />
        </div>
        <div className='card colors'>
          <p>{`<Button color='danger' />`}</p>
          <Button color='danger' text='Danger' />
        </div>

        {/* Outlines */}

        <div className='card outlines'>
          <p>{`<Button variant='outline' />`}</p>
          <Button text='Outline' color='default' variant='outline' />
        </div>

        <div className='card outlines'>
          <p>{`<Button variant='outline' color='secondary' />`}</p>
          <Button text='Outline' color='secondary' variant='outline' />
        </div>
        <div className='card outlines'>
          <p>{`<Button variant='outline' color='danger' />`}</p>
          <Button text='Outline' color='danger' variant='outline' />
        </div>

        {/* text variant */}
        <div className='card text'>
          <p>{`<Button variant='text' color='primary'  />`}</p>
          <Button text='Default' variant='text' color='primary' />
        </div>

        {/* disableShadow */}
        <div className='card disable-shadows'>
          <p>{`<Button disableShadow color='Primary' />`}</p>
          <Button text='Disable Shadow' color='primary' disableShadow />
        </div>

        {/* disabled */}
        <div className='card disables'>
          <p>{`<Button disabled />`}</p>
          <Button text='Disabled' disabled />
        </div>
        <div className='card disables'>
          <p>{`<Button disabled variant='text' />`}</p>
          <Button text='Disabled' variant='text' disabled />
        </div>

        {/* icons */}
        <div className='card regular-icons'>
          <p>{`<Button color='primary' startIcon='shopping-cart' size='lg'/>`}</p>
          <Button text='Shopping' color='primary' startIcon='shopping-cart' size='lg' />
        </div>
        <div className='card regular-icons'>
          <p>{`<Button color='secondary' startIcon='play' />`}</p>
          <Button text='Play' color='secondary' startIcon='play' />
        </div>
        <div className='card regular-icons'>
          <p>{`<Button color='danger' endIcon='search'/>`}</p>
          <Button text='Search' color='danger' endIcon='search' />
        </div>
        {/* icons outline */}
        <div className='card outline-icons'>
          <p>{`<Button color='primary' variant='outline' startIcon='thumb-up' size='sm' />`}</p>
          <Button text='Like' color='primary' variant='outline' startIcon='thumb-up' size='sm' />
        </div>
        <div className='card outline-icons'>
          <p>{`<Button color='secondary' variant='outline' endIcon='calendar' />`}</p>
          <Button text='Date' color='secondary' variant='outline' endIcon='calendar' />
        </div>
        <div className='card sizes'>
          <p>{`<Button color='primary' size='sm' />`}</p>
          <Button color='primary' text='Default' size='sm' />
        </div>
        <div className='card sizes'>
          <p>{`<Button color='primary' size='md' />`}</p>
          <Button color='primary' text='Default' size='md' />
        </div>
        <div className='card sizes'>
          <p>{`<Button color='primary' size='lg' />`}</p>
          <Button color='primary' text='Default' size='lg' />
        </div>
      </div>
      <footer className='footer'>
        created by{' '}
        <a href='https://github.com/leandrogtabak' style={{ fontWeight: 600 }}>
          leandrogtabak
        </a>{' '}
        - devChallenges.io
      </footer>
    </div>
  );
}

export default App;
