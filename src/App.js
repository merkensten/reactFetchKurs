import { MyFirstComponent } from './components/myfirstcomponent/MyFirstComponent';
import { Routing } from './routes/Routing'

function App() {
  return (
    <Routing>
      <h1>React Tutorial</h1>
      <MyFirstComponent name="Mattis Erkensten" age="24"/>
    </Routing>
  );
}

export default App;
