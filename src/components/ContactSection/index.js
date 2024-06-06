import './index.css'

import SectionHeading from '../SectionHeading';
import australiaSilhouette2 from '../../img/australiaSilhouette2.webp'
import copyToIcon2 from '../../img/copyToIcon2.png'

function ContactSection(){
  const copyText = () => {
    navigator.clipboard.writeText('callum.j.sharman@gmail.com');
  }

  return(
    <div className='section' id='contact'>
      <SectionHeading text={"CONTACT"}></SectionHeading>
      <div className='contactBox'>
        <div className='leftContactBoxSide'>
          <img src={australiaSilhouette2} alt='australia' className='australia'></img>
        </div>
        <div className='rightContactBoxSide'>
          I am based in Melbourne, Australia, and open to freelance opportunities.
          <br></br><br></br>
          For any enquiries regarding potential freelance work, feel free to contact me via email, please include your name, contact details, and project information. 
          <br></br><br></br>
          If you have any questions about my work, projects, or anything else, feel free to email me as well.
          <br></br><br></br>
          <div className='email'>
            <img src={ copyToIcon2 } alt='copy icon' className='copyIcon'
                  onClick={ copyText }></img>
            callum.j.sharman@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
