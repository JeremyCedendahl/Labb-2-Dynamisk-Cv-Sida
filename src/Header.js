import './App.css';
import Jag from './Jag.png'

 const Header = () => {
    function switchBackgroundColorEasterEgg(){
        document.body.style.backgroundColor = 'green';
    }
    return(
        <div className="App-header" onClick={switchBackgroundColorEasterEgg}>
            CV - Jeremy Cedendahl
            <img src={Jag} alt="pic" className="pic"/>
            </div>
    
    )
}
export default Header;