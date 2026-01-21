function Footer() {
    const curYear = new Date().getFullYear(); 

    return (
        <div className="text-primary border-2 
                border-primary border-b-primary border-r-primary
                rounded-sm p-2 mt-10 text-sm">
            <p className="brightness-75">&copy; {curYear} Natalia Guevara</p>
        </div>
    )
}

export default Footer;