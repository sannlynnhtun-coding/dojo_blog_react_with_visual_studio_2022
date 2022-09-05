import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {

  const title = 'Welcome to the new blog';
  const likes = 50;
  const person = { name: 'collin', age: 30 };
  const link = 'https://www.google.com';

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{person.name}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Site</a> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <Home /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
