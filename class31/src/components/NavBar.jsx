import Logo from '../logo.svg';

const NavBar = () => {
    const NavBarLink = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Contact",
            link: "/contact"
        }
    ]
    return <div className="Hamza">
        <img src={Logo} alt="logo" className='logo' />
        <ul>
            {
                NavBarLink.map((obj, index) => {
                    return <li key={index}>
                        <a href={obj.link}>{obj.name}</a>
                    </li>
                })
            }

        </ul>
    </div>
}
export default NavBar