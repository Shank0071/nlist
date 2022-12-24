const Footer = () => {
    const date = new Date()



    return ( 
        <div className="footer">
            Copyright {date.getFullYear()} Ninja List
        </div>
     );
}
 
export default Footer;