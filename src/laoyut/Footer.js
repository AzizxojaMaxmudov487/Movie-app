export default function Footer() {
    return(
        <>
        <footer className="page-footer footer">
                <div className="footer-copyright">
                    <div className="container">
                        © {new Date().getFullYear()} Next JS
                        <a className="grey-text text-lighten-4 right" href="#!">Footer</a>
                    </div>
                </div>
            </footer>
        </>
    )
}