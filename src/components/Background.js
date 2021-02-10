import logo from '../NookLogo.svg';
import './Background.css';

export default function Background(props) {
  return (
    <div className="background">
      <div className='hrefs'>
        <a href=""><i class="fa fa-amazon fa_custom fa-4x"></i></a>
        <a href=""><i class="fa fa-instagram fa_custom fa-4x"></i></a>
        <a href=""><i class="fa fa-facebook fa_custom fa-4x"></i></a>
      </div>
      <img src={logo} alt="Logo" className='logo' />
    </div>
  );
};