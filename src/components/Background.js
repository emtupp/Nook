import logo from '../NookLogo.svg';
import './Background.css';

export default function Background(props) {
  return (
    <div className="background">
      <img src={logo} alt="Logo" className='logo' />
    </div>
  );
};