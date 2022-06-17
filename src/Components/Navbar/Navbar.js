import Style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <header className={Style.navbar}>
            <div className={Style.left}>MyApp</div>
            <div className={Style.right}>
                <div className={Style.links}>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">AddProducts</a>
                </div>
                <div className={Style.account}>
                    <a href="#">Cart</a>
                    <a href="#">Login/Register</a>
                </div>
            </div>
        </header>
    );
};
