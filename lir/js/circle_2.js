function drawCircle(canvasId, data_arr, color_arr, text_arr) {
    var pi2 = Math.PI*2;
    var canvas =document.getElementById(canvasId);    
    var c =canvas.getContext("2d");
    c.font ="12px Times New Roman";
    var startAgl = 0;
    var agl;
    for(var i=0; i< data_arr.length; i++){ 
        //绘制饼图
        agl = data_arr[i] * pi2 + startAgl;
        c.fillStyle=color_arr[i];
        c.beginPath();
        c.moveTo(200,200);
        c.arc(200, 200, 150, startAgl, agl, false);
        c.lineTo(200,200);
        //c.stroke();
        c.fill();
        startAgl = agl;
        //绘制图例
        c.fillRect(360, 50+18*i,16,16);
        c.fillStyle="#000000";
        c.fillText(text_arr[i], 380, 62+18*i );    
    }
}