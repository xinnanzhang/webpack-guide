require('./main.css');
import generateText from './sub';
import $ from 'jquery';
import moment from 'moment';

let app  = document.createElement('div');
const myPromise = Promise.resolve(42);

myPromise.then((number) => {
  $('body').append('<p>c promise result is ' + number + ' now is ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '</p>');
});
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(generateText());
