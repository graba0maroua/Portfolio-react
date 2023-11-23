import './index.scss'
import LogoTitle from '../../../assets/images/logo-s.png'
const Home=()=>{

    return (
        <div className="container home-page">
<div className="text-zone">
    <h1>Hi, <br/> I'm
        <img src={LogoTitle} alt="developper"/>
        uper cool Maroua
        <br/>
        web developer 
    </h1>
    <h2>Full stack Developer / web developper / blogger </h2>
    <Link to='/contact' className='flat-button'>CONTACT ME </Link>
</div>
        </div>
    )
}