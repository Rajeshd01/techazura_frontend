import Header from "./Header";
import "./index.css";

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
}

export default Layout;

