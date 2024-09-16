import { Helmet } from "react-helmet";

export default function NotFound() {
    return (
        <section className="container centered">
            <Helmet>
                <title>Alerrad - Page not found</title>
            </Helmet>
            <h1 className="big-text">404</h1>
            <h2 className="purple">Page not found!</h2>
            <p>URL you&apos;re trying to access is not valid, no such page exists! Yet...</p>
            <a href="/">
                <button className="purple">To main</button>
            </a>
        </section>
    );
}