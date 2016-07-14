/**
 * Created by sheff on 06.07.16.
 */
var heading = document.querySelector('a');

setInterval(function() {
    var hue = 'rgb(' + (Math.floor(Math.random() * 256)) +
        ',' +
        (Math.floor(Math.random() * 256)) +
        ',' +
        (Math.floor(Math.random() * 256)) + ')';

    heading.style.color = hue;
}, 3000);





