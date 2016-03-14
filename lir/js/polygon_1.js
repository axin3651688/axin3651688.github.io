function createLine(lx,ly){
            var root=document.getElementById("myline");
             var svgns = "http://www.w3.org/2000/svg";
            //创建我们的SVG元素
            var svg=document.createElementNS(svgns,"svg");
            svg.setAttribute("width","500");
            svg.setAttribute("height","500");
            svg.setAttribute("fill","red");

            var path2=document.createElementNS(svgns,"path");
            for(var i=0;i<10;i+=2){
                var x=Math.sin(Math.PI*2/5*i)*150+lx;
                var y=Math.cos(Math.PI*2/5*i)*150+ly;
                var p=(i==0)?
                        path2.createSVGPathSegMovetoAbs(x,y):
                        path2.createSVGPathSegLinetoAbs(x,y);
                path2.pathSegList.appendItem(p);
            }
            //关闭path2
            path2.pathSegList.appendItem(path2.createSVGPathSegClosePath());
            svg.appendChild(path2);
            root.appendChild(svg);
    } 