var canvas = null,
    ctx = null,
    x = 50,
    y = 50,
    lastPress = null;

    window.requestAnimationFrame = (function (){
        return window.requestAnimationFrame || 
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback,17);
            };
    }());

function paint(ctx) {
    ctx.fillStyle = '#1E8449';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#0f0';
    ctx.fillRect(x, y, 10, 10);

    ctx.fillText('Last Press: ' + lastPress, 0, 20);
}

function act(){
    x += 2;
    if (x > canvas.width) {
        x = 0;
    }
    }

function run() {
    window.requestAnimationFrame(run);
    act();
    paint(ctx);
    }

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
}

window.addEventListener('load', init, false);
document.addEventListener('keydown', function (evt) {
    lastPress = evt.which;
    }, false);