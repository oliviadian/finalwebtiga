import Banner from './Banner.jpg';
import { url } from 'inspector';


const { Element } = BannerAnim;
const BgElement = Element.BgElement;
React.render(
<BannerAnim>
    <Element key="a">
        <BGElement key="bg" style={{ background: url('+Banner+') }}/>
        <TweenOne key='0'>test text</TweenOne>
    </Element>
   
</BannerAnim>, container);