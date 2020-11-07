var canvas = null,
    ctx = null,
    x = 50,
    y = 50,
    lastPress = null,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    dir = 0;

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
    
    // Change Direction
    if (lastPress == KEY_UP) {
        dir = 0;
        }
        if (lastPress == KEY_RIGHT) {
        dir = 1;
        }
        if (lastPress == KEY_DOWN) {
        dir = 2;
        }
        if (lastPress == KEY_LEFT) {
        dir = 3;
        }

    // Move Rect
    if (dir == 0) {
        y -= 10;
        }
        if (dir == 1) {
        x += 10;
        }
        if (dir == 2) {
        y += 10;
        }
        if (dir == 3) {
        x -= 10;
        }

    // Out Screen
    if (x > canvas.width) {
        x = 0;
        }
        if (y > canvas.height) {
        y = 0;
        }
        if (x < 0) {
        x = canvas.width;
        }
        if (y < 0) {
        y = canvas.height;
        }
}

function run() {
    setTimeout(run, 50);
    act();
}

function repaint() {
    window.requestAnimationFrame(repaint);
    paint(ctx);
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    run();
    repaint();
}

window.addEventListener('load', init, false);
document.addEventListener('keydown', function (evt) {
    lastPress = evt.which;
    }, false);