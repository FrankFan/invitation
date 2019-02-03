import 'normalize.css';
import '@/common/styles/common.scss';

const hi = 'hello world';
console.log(hi);

const root = document.querySelector('#root');
root.innerText = hi;
