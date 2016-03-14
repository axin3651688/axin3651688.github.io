/**
 *SVG实现饼图
 * 
*/
function pieChart(data,width,height,cx,cy,r,colors,labels,lx,ly){
        /**
        data:用于绘制的数字类型的数组，数组每一项都表示饼状图的一个
        width,height:SVG图形的大小，单位像素
        cx,cy,r:饼状图的圆心及半径
        color：一个包含HTML颜色的数组，每种颜色代表饼状图每个楔的颜色
        lx,ly：饼状图的左上角
        返回：
           一个保存饼状图<svg>元素
           调用者必须将返回的元素插入到文档中
        */
        var total = 0,angles=[],startangle=0,endangle=0;
    
        var svgns = "http://www.w3.org/2000/svg";//这个是表示svg元素的XML命名空间
		
		var chart = document.createElementNS(svgns,"svg:svg");
		
		chart.setAttribute("width",width);
		
		chart.setAttribute("height",height);  
		
		chart.setAttribute("viewBox","0 0 "+width+" "+height);//用户坐标  
		
		for(var i = 0;i<data.length;i++ ) {
		    total+=data[i];//所给数据在数值上的总和
		}
        for(var i = 0;i<data.length;i++){
            angles[i] =  2*Math.PI*data[i]/total;
        }
        for(var i =0;i<data.length;i++){
            endangle =startangle+angles[i];//结束角度
            //楔的结束位置
            var x1 = cx +r*Math.sin(startangle);
            var y1 = cy -r*Math.cos(startangle);
            var x2 = cx +r*Math.sin(endangle);
            var y2 = cy -r*Math.cos(endangle);
            var big = 0;
            if(endangle-startangle>Math.PI){
                big = 1;
            }
            var path = document.createElementNS(svgns,"path");//创建带有指定命名空间的元素节点
            // var d ="M"+cx+","+cy+"L"+x1+","+y1+"A"+r+","+r+","+big+","+"1"+","+x2+","+y2+"Z";
             var d = "M"+cx+","+cy+"L"+x1+","+y1+"A"+r+","+r+","+ "0"+","+big+","+"1"+","+ x2+","+y2+"Z"; 
            path.setAttribute("d",d);
            path.setAttribute("fill",colors[i]);
            path.setAttribute("stroke","black");
            path.setAttribute("stroke-width","2");
            chart.appendChild(path);//将楔加入到饼状图中
            startangle = endangle;//下一个楔的开始即上一个的结束位置
            /**
             * 创建小方条标记各个楔代表之
             *
             */
            var icon = document.createElementNS(svgns,"rect");
            icon.setAttribute("x",lx);
            icon.setAttribute("y",ly+30*i);
            icon.setAttribute("width",20);
            icon.setAttribute("height",15);
            icon.setAttribute("fill",colors[i]);
            icon.setAttribute("stroke","black");
            icon.setAttribute("stroke-width",2);
            chart.appendChild(icon);
            /**
             * 在小方块右边添加标签
             *
             */
             var label= document.createElementNS(svgns,"text");
             label.setAttribute("x",lx+30);
             label.setAttribute("y",ly+30*i+18);
             label.setAttribute("font-family","sans-serif");
             label.setAttribute("font-size","16");
             label.appendChild(document.createTextNode(labels[i]));
             chart.appendChild(label);
        }
    return chart;
}