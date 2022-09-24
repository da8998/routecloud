import Navbar from './Navbar';
import './Container.css';
import axios from 'axios';

const containerName = document.getElementsByClassName("containerName").innerText;

function Container() {
    return (
        <div class="bg-dark text-white" className="containers">
            <div className="containers-content">
                <h3>Create a Container</h3>
                <form>
                    <p>Container name:</p>
                    <input className="containerName" class="text"></input>
                    <p>Upload code:</p>
                    <button class="btn btn-light">Browse...</button>
                    <p>Done?</p>
                    <button type="submit" onClick={() => axios.get('http://localhost:3001/api/docker/?name=${containerName}')} class="btn btn-secondary">Deploy!</button>
                </form>
            </div>
            <Navbar />
        </div>
    );
}

export default Container;