import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg';

const InfoBox = (props: { text: string; link: string; btnText: string }) => (
    <div className='info-box'>
        <p className='font-medium sm:font-xl text-center'>{props.text}</p>
        <Link to={props.link} className='neo-brutalism-white neo-btn'>

            {props.btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
);

const renderContent: any = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-bold'>Mukesh</span>
            <br />A Software Engineer from India 🇮🇳
        </h1>
    ),
    2: (
        <InfoBox
            text='Worked with many companies and picked up many skills along the way'
            link='/about'
            btnText='Learn More'
        />
    ),
    3: (
        <InfoBox
            text='Led multiple projects and teams to success. Want to know the impact?'
            link='/projects'
            btnText='Visit my portfolio'
        />
    ),
    4: (
        <InfoBox
            text='Need a project done or looking for a Dev?'
            link='/contact'
            btnText="Let's Talk"
        />
    ),
};

const HomeInfo = (props: { currentStage: number }) => {
    return renderContent[props.currentStage];
};

export default HomeInfo;
