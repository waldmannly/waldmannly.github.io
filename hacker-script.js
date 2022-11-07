var canvas = document.querySelector(".hacker-3d-shiz"),
    ctx = canvas.getContext("2d"),
    outputConsole = document.querySelector(".output-console");

canvas.width = (window.innerWidth);
canvas.height = window.innerHeight;

var strokeColorSquares = "#2b5329";  
outputConsole.style.height = 0+ 'px';
outputConsole.style.top = 0 + 'px'

// window.onload=function(){
//     engage();
//     console.log('ran engage')
// }

/* Graphics stuff */
function Square(z) {
    this.width = canvas.width/2;
    
    if(canvas.height < 50){
      this.width = 50;
    };
  
    this.height = canvas.height;
    z = z || 0;

    this.points = [
    new Point({
        x: (canvas.width / 2) - this.width,
        y: (canvas.height / 2) - this.height,
        z: z
    }),
    new Point({
        x: (canvas.width / 2) + this.width,
        y: (canvas.height / 2) - this.height,
        z: z
    }),
    new Point({
        x: (canvas.width / 2) + this.width,
        y: (canvas.height / 2) + this.height,
        z: z
    }),
    new Point({
        x: (canvas.width / 2) - this.width,
        y: (canvas.height / 2) + this.height,
        z: z
    })];
    this.dist = 0;
}

Square.prototype.update = function () {
    for (var p = 0; p < this.points.length; p++) {
        this.points[p].rotateZ(0.0001);
        this.points[p].z -= .5;
        if (this.points[p].z < -300) {
            this.points[p].z = 2700;
        }
        this.points[p].map2D();
    }
}

Square.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.points[0].xPos, this.points[0].yPos);
    for (var p = 1; p < this.points.length; p++) {
        if (this.points[p].z > -(focal - 50)) {
            ctx.lineTo(this.points[p].xPos, this.points[p].yPos);
        }
    }

    ctx.closePath();
    ctx.stroke();

    this.dist = this.points[this.points.length - 1].z;

};

function Point(pos) {
    this.x = pos.x - canvas.width / 2 || 0;
    this.y = pos.y - canvas.height / 2 || 0;
    this.z = pos.z || 0;

    this.cX = 0;
    this.cY = 0;
    this.cZ = 0;

    this.xPos = 0;
    this.yPos = 0;
    this.map2D();
}

Point.prototype.rotateZ = function (angleZ) {
    var cosZ = Math.cos(angleZ),
        sinZ = Math.sin(angleZ),
        x1 = this.x * cosZ - this.y * sinZ,
        y1 = this.y * cosZ + this.x * sinZ;

    this.x = x1;
    this.y = y1;
}

Point.prototype.map2D = function () {
    var scaleX = focal / (focal + this.z + this.cZ),
        scaleY = focal / (focal + this.z + this.cZ);

    this.xPos = vpx + (this.cX + this.x) * scaleX;
    this.yPos = vpy + (this.cY + this.y) * scaleY;
};

// Init graphics stuff
var squares = [],
    focal = canvas.width / 16,
    vpx = canvas.width /2,
    vpy = canvas.height/2 ,
    barVals = [],
    sineVal = 0;

/* fake console stuff */
var commandStart = ['Performing DNS Lookups for', 
                'Searching ', 
                'Analyzing ', 
                'Estimating Approximate Location of ', 
                'Compressing ', 
                'Requesting Authorization From : ', 
                'wget -a -t ', 
                'tar -xzf ', 
                'Entering Location ', 
                'Compilation Started of ',
                 'Downloading '],
    commandParts = ['Data Structure', 
                    'http://wwjd.com?au&2', 
                    'Texture', 
                    'TPS Reports', 
                    ' .... Searching ... ', 
                    'http://zanb.se/?23&88&far=2', 
                    'http://ab.ret45-33/?timing=1ww'],
    commandResponses = ['Authorizing ', 
                 'Authorized...', 
                 'Access Granted..', 
                 'Going Deeper....', 
                 'Compression Complete.', 
                 'Compilation of Data Structures Complete..', 
                 'Entering Security Console...', 
                 'Encryption Unsuccesful Attempting Retry...', 
                 'Waiting for response...', 
                 '....Searching...', 
                 'Calculating Space Requirements '
                ],
    isProcessing = false,
    processTime = 0,
    lastProcess = 0;


function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    squares.sort(function (a, b) {
        return b.dist - a.dist;
    });
    for (var i = 0, len = squares.length; i < len; i++) {
        squares[i].update();
        squares[i].render();
    }
    



    
    requestAnimationFrame(render);
}

randomHex = length => (
    '0'.repeat(length) 
    + Math.floor((Math.random() * 16 ** length))
    .toString(16)
).slice(-length);

function consoleOutput(){
    var textEl = document.createElement('p');
    textEl.style.zIndex = 5;
    
    if(isProcessing){
        textEl = document.createElement('span');
        textEl.textContent += randomHex(8) + " ";//Math.random() + " ";
        if(Date.now() > lastProcess + processTime){
            isProcessing = false;   
        }

    }else{
        var commandType = ~~(Math.random()*4);
        switch(commandType){
            case 0:
                textEl.textContent = commandStart[~~(Math.random()*commandStart.length)] + commandParts[~~(Math.random()*commandParts.length)];
                break;
            case 3: 
                isProcessing = true;
                processTime = ~~(Math.random()*5000);
                lastProcess = Date.now();
            default:
                 textEl.textContent = commandResponses[~~(Math.random()*commandResponses.length)];
            break;
        }
    }

    outputConsole.scrollTop = outputConsole.scrollHeight;
    outputConsole.appendChild(textEl);
    
    if (outputConsole.scrollHeight > window.innerHeight) {
       var removeNodes = outputConsole.querySelectorAll('*');
       for(var n = 0; n < ~~(removeNodes.length/3); n++){
            outputConsole.removeChild(removeNodes[n]);
        }
    }

    setTimeout(consoleOutput, ~~(Math.random()*200));
}


setTimeout(function(){   
      canvas.width = (window.innerWidth);
      canvas.height = window.innerHeight ;



      focal = canvas.width / 16;
      vpx = canvas.width /2;
      vpy = canvas.height/2 ;

      for (var i = 0; i < 24; i++) {
          squares.push(new Square(-300 + (i * 200)));
      }
  
      ctx.strokeStyle  = strokeColorSquares;
  
      render();
      progressBar();
      consoleOutput();
      //engage();

}, 500);

window.addEventListener('resize', function(){
      canvas.width = (window.innerWidth);
      canvas.height = window.innerHeight ;



      focal = canvas.width/16 ;
      vpx = canvas.width /2;
      vpy = canvas.height /2;
      ctx.strokeStyle = strokeColorSquares;
});

function progressBar(){
    var connect=document.createElement("connect");
    var main = document.getElementById('prog'); 
    main.appendChild(connect);
    connect.innerHTML="<div id='connect'><div class='footer'></div></div><style media='screen'>.footer{height:10px;background:#01ff19;width: 100%; position: fixed; bottom: 0;animation: progressBarAnim 15s 1 0s;animation-iteration-count: infinite;}@keyframes progressBarAnim {0%{ width: 0%; } 10%{width:10%;} 30%{width:30%;}50%{ width: 40%;}60%{width:55%;} 69%{width:69%;}75%{ width:75%;} 85%{ width:85%;}90%{ width:93%;} 97%{width:96%;}100%{width: 1000%;}}</style>";
}


// function engage(){
//     main.innerHTML="<canvas id='q' width=100% height=100% z-index=-100%></canvas>";
//     var s=window.screen;
//     var width = 500;
//     var height = 200;
//     var yPositions = Array(300).join(0).split('');
//     var ctx=q.getContext('2d');
//     var draw = function () {

//       ctx.fillStyle='#0F0';
//       ctx.font = '10pt Georgia';
//       yPositions.map(function(y, index){
//         text = String.fromCharCode(1e2+Math.random()*33);
//         x = (index * 10)+10;
//         q.getContext('2d').fillText(text, x, y);
//       if(y > 100 + Math.random()*1e4)
//       {
//         yPositions[index]=0;
//       }
//       else
//       {
//           yPositions[index] = y + 10;
//       }
//       });
//     };

//     function RunMatrix()
//     {
//     if(typeof Game_Interval != "undefined") clearInterval(Game_Interval);
//         Game_Interval = setInterval(draw, 33);
//     }
//     RunMatrix();
//     }
    