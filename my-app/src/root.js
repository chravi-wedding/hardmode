import { Toggle } from "./react-connections-game/src/components/ui/toggle";
import { useNavigate } from 'react-router-dom';
import './root.css';

function Root() {	
	let navigate = useNavigate();
	function move(path) {
		navigate(path);
	}
	return (
		<div id="sidebar" className="sidebar-container">
		<p className = "title">New York Times</p>
		<p className = "title2">Games</p>
		<h2 className="subtitle">Sunday, May 26th: Nanda and Angela's Wedding Edition</h2>
		<div class="grid grid-rows-3 grid-cols-1 gap-4">
		<Toggle onClick={() => move("/NYTgames/connections")} className="toggle">
		Connections
		</Toggle>
		<Toggle onClick={() => move("/NYTgames/wordle")} className="toggle">Wordle</Toggle>
		<Toggle onClick={() => move("/NYTgames/crossword")} className="toggle">Crossword</Toggle>
		</div>
		</div>
	);
}
export default Root;
