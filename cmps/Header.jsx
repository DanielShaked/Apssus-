import { HeaderMenu } from "./HeaderMenu.jsx";
const {NavLink} = ReactRouterDOM

export class Header extends React.Component {

    
    state = {
        isVisible: false,
        isOnKeep: false,
    }
    
    
    
    onToggleMenu = () => {
        const { isVisible } = this.state;
        this.setState({isVisible: !isVisible})
    }


    

    render() {
        const { isVisible } = this.state;
        
        return (
            <div className="header-container">
                <header className="header main-layout">
                    <div className="logo-container">
                    <NavLink exact to="/">
                    <span className="logo-txt">Apsus</span>
                    </NavLink>
                        
                </div>
                    
                {(!isVisible) && <i onClick={this.onToggleMenu} className="fas fa-th-large"></i>  }
            
                    {(isVisible) && <HeaderMenu onToggleMenu={this.onToggleMenu}/>}
                </header>
            </div>
            
            )
        }
        
        
    }
    
    
    
    {/* <header className="header">
    
    
    
    </header> */}



//     return (
//         <header className="header">

//             <i onClick={onToggleMenu} class="fas fa-th"></i>

//                 {/* <Link className="clean-link" to="/">
//                     <h1>Welcome to Appsus!</h1>
//                 </Link>
//             <nav className="main-nav">
//                 <ul className="clean-list flex">
//                     <li> <NavLink exact to="book">book</NavLink></li>
//                     <li><NavLink to="mail">mail</NavLink></li>
//                     <li><NavLink to="note">keep</NavLink></li>
//                     <li><NavLink to="/">Home</NavLink></li>
//                 </ul>
//             </nav> */}
//             </div>
//         </header>
//     )
// }