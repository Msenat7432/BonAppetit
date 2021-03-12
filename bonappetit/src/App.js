import './App.css';
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Recipes from './Components/Recipe/Recipes';
import Instructions from './Components/Instruction/Instructions'
import { Route, Link } from 'react-router-dom';


function App() {


  return (
		<div className='App'>
			<nav>
				<Link to='/home' className="bon">
					<img src='' alt='' />
					<h1>Bon Appetit</h1>
				</Link>
				<Link className ="cat" to='/main'>
					<h2>Categories</h2>
				</Link>
			</nav>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/main' component={Main} />
				<Route path='/recipes/:category' component={Recipes} />
				<Route
					path='/category/:instruction'
					render={(routerProps) => <Instructions match={routerProps.match} />}
				/>
			</main>
		</div>
	);
}

export default App;
