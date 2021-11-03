import Logo from '../images/griffinjoshs-logo.png'
import Button from '../Components/Buttons/index'

const FooterContent = [
    {
        footerHeader: "Griffin Surett",
        Menu1: <img src={Logo} alt="Griffin-Surett-logo" width='65' height='60'></img>

    },
    {
        footerHeader: "Contact Info",
        Menu1: <ul><li><p>griffin@griffinsurett.com</p></li><li><p>‪(732) 455-9509‬</p></li></ul>
    },
    {
        footerHeader: "Services",
        Menu1: <ul><li><a href='/'><p>Website Development</p></a></li><li><a href='/'><p>Digital Marketing</p></a></li><li><a href='/'><p>Digital Art</p></a></li></ul>
    },
    {
        footerHeader: "Subscribe to My List",
        Menu1: <form id='footerForm'><input id='emailSub' type='email' placeholder='Email Address'></input><Button buttonStyle='btn--outline' type='submit'>Subscribe</Button></form>,
    }
]

export default FooterContent