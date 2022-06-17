import Style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <header className={Style.navbar}>
            <div className={Style.logo}>MyApp</div>
            <div className={Style.links}>
                <a>Products</a>
                <a>AddProducts</a>
                <a>Login/Register</a>
            </div>
        </header>
    );
};
