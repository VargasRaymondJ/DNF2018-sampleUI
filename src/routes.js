import Caps from './components/Caps.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Home from './components/Home/Home';




export const routes = [
    {path: '', components: {default: Home}},
    { path: '/caps', component: Caps}
]