import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <select class="form-select-sm bg-secondary text-white  position-fixed top-0 start-0 w-101" >
                <option><a href="#">Containers</a></option>
                <option>Networks</option>
                <option>Kubernetes</option>
                <option>Functions</option>
            </select>
        </div>
    );
}

export default Navbar;