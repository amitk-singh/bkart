import '../../pages-css/login-page-css/page-layout.css';
import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <>
            <div className="page-layout-container">

                <div class="section-1">
                    <form class="login">
                        <h2 class="txt-center">Login</h2>
                        <input type="email" placeholder="Email id" />
                        <input type="password" placeholder="Password" />
                        <button class="btn-login">Login</button>
                        <p> <a class="txt-highlight" to="/Signup">Sign up</a> <a class="txt-float-right" href="#url">Forgot pasword?</a></p>
                    </form>
                </div>

               
            </div>
        </>
    );
};

export default LoginPage;