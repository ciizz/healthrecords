import logo from '../logo.svg';

export function Navbar() {
    return (
        <header className="App-header">
            <a style={{textDecoration: "none"}} href='/'>
                <table>
                <tbody>
                    <tr>
                        <th>
                            <img src={logo} className="App-logo" alt="logo" />
                        </th>
                        <th style={{color: "white", verticalAlign: "middle", }}>
                            Personal Health Records
                        </th>
                    </tr>
                </tbody>
                </table>
            </a>  
        </header>
       
    );
    
}