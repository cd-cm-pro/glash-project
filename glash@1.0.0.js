// Glash 1.0.0

var canvasElement = document.getElementById("glash");
if (canvasElement) {
    const ctx = canvasElement.getContext("2d");
    var canv = {
        draw: {
            text: function(text, x, y, size, font, color, align) {
                ctx.font = size + " " + font;
                ctx.fillStyle = color;
                ctx.textAlign = align;
                ctx.fillText(text, x, y);
            },
            line: function(x1, y1, x2, y2, color, width) {
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            },
            rect: function(x, y, width, height, color, lineWidth) {
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                ctx.strokeRect(x, y, width, height);
            },
            fillRect: function(x, y, width, height, color) {
                ctx.fillStyle = color;
                ctx.fillRect(x, y, width, height);
            },
            circle: function(x, y, radius, color, lineWidth) {
                ctx.strokeStyle = color;
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.stroke();
            },
            fillCircle: function(x, y, radius, color) {
                ctx.fillStyle = color;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            },
            image: function(src, x, y, width, height) {
                const img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, x, y, width, height);
                };
                img.src = src;
            },
        },
        events: {
            addEvent: function(type, callback) {
                canvasElement.addEventListener(type, callback);
                return function() {
                    canvasElement.removeEventListener(type, callback);
                };
            },
            onClick: function(callback) {
                return this.addEvent('click', function(event) {
                    const rect = canvasElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    callback(x, y);
                });
            },
            onMouseMove: function(callback) {
                return this.addEvent('mousemove', function(event) {
                    const rect = canvasElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    callback(x, y);
                });
            },
            onMouseDown: function(callback) {
                return this.addEvent('mousedown', function(event) {
                    const rect = canvasElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    callback(x, y, event.button);
                });
            },
            onMouseUp: function(callback) {
                return this.addEvent('mouseup', function(event) {
                    const rect = canvasElement.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    callback(x, y, event.button);
                });
            },
            onKeyDown: function(callback) {
                return this.addEvent('keydown', function(event) {
                    callback(event.key, event.code);
                });
            },
            onKeyUp: function(callback) {
                return this.addEvent('keyup', function(event) {
                    callback(event.key, event.code);
                });
            }
        },
        animate: {
            animateObject: function(drawFunc, duration, frameRate = 60, clear = true, clearRect = null) {
                const startTime = Date.now();
                const interval = 1000 / frameRate;

                function step() {
                    const currentTime = Date.now();
                    const elapsedTime = currentTime - startTime;
                    const progress = Math.min(elapsedTime / duration, 1);

                    if (clear) {
                        if (clearRect) {
                            ctx.clearRect(...clearRect);
                        } else {
                            ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
                        }
                    }
                    
                    drawFunc(progress);

                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                }

                step();
            }
        }
    };
} else {
    console.error('Glash를 실행하는 `#glash`가 없습니다.\n<canvas id="glash" width="600" height="600" style="border: 1px solid black; border-radius: 5px;"></canvas>');
}
