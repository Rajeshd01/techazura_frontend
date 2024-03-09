import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.css"

function Footer() {
    return (
        <footer>
            <div className='footer-sub-container'>
                <h2 className="footer-logo">Tech <span >Azura</span></h2>
                <div className='footer-icon'><EmailIcon style={{ color: 'purple' }} />&nbsp;info.techazura@gmail.com</div>
                <div className='footer-icon'><LocalPhoneIcon />&nbsp;+91 80721 49479</div>
                <a href="https://www.instagram.com/techazura_2k24">

                <div className='footer-icon'><InstagramIcon />&nbsp;techazura_2K24</div>

                </a>
            </div>
            <div className='footer-sub-container'>
                <div className='footer-icon'><LocationOnIcon />&nbsp;<h3 >Location</h3></div>
                <p>Hindusthan college of engineering and technology Valley Campus, Pollachi Highway, Coimbatore - 641 032, TamilNadu, India.</p>
                <br></br>
                <div className='map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7835.898191600725!2d76.98126019357908!3d10.891473300000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85ab70e7cae1b%3A0x160192e395adfd9!2sHINDUSTHAN%20COLLEGE%20OF%20ENGINEERING%20AND%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1709833779458!5m2!1sen!2sin"
                        allowFullScreen
                        title='hindusthan map'
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    );
}

export default Footer;