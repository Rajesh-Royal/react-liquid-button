import { useNavigate } from 'react-router-dom';

import AnimatedContent from '../../../content/Animations/AnimatedContent/AnimatedContent';

import './HeroShowcase.css';
import LiquidButton from '../../../ts-default/Components/LiquidButton/LiquidButton';

const HeroShowcase = () => {
  const navigate = useNavigate();

  return (
    <nav className="component-nav-container">
      <AnimatedContent reverse initialOpacity={0}>
        <div onClick={() => navigate('/components/liquid-button')} >
          <LiquidButton className='cursor-pointer animate-pulse hover:animate-none' primaryColor="#ff9034"
            secondaryColor="#00d9ff" width={300} height={100} />
        </div>
      </AnimatedContent>
    </nav>
  );
}

export default HeroShowcase;