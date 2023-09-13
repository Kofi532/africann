var width = window.innerWidth;
var height = window.innerHeight;

// var width = 1000;
// var height = 1000;

var stage = new Konva.Stage({

  container: 'container',
  width: width,
  height: height*3,
});

var layer = new Konva.Layer();

var backg = new Konva.Rect({
    width: stage.width(),
    height: stage.height(),
    fill: 'black',
  });
layer.add(backg);
// 

// first shpe
var arc_1 = new Konva.Group({
  });

  var oneline_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/100
    var x2 = width/14
    var y1 = height
      context.beginPath();
      context.moveTo(x1, 0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.12, ((y1*3)*0.5)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*0.84, ((y1*3)*0.5)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.5)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.10, ((y1*3)*0.5)*0.37, x2, (y1));

      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00FFFF',
    stroke: 'white',
    strokeWidth: 3,
  });
  layer.add(oneline_1);


var arc1_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/90
    var y1 = height/60
      context.beginPath();
      context.moveTo(x1, y1);
      context.quadraticCurveTo(x1+10, y1+20, x1+20,y1);
    //   context.lineTo(205, 0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });


const arc2_1 = arc1_1.clone();
arc2_1.x(50);

const arc3_1 = arc2_1.clone();
arc3_1.x(25);
arc3_1.y(50);

const arc_2 = arc_1.clone();
arc_2.y(100);
const arc1_2 = arc1_1.clone();
const arc2_2 = arc2_1.clone();
const arc3_2 = arc3_1.clone();

const arc_3 = arc_2.clone();
arc_3.y(200);
const arc1_3 = arc1_2.clone();
const arc2_3 = arc2_2.clone();
const arc3_3 = arc3_2.clone();

const arc_4 = arc_3.clone();
arc_4.y(300);
const arc1_4 = arc1_3.clone();
const arc2_4 = arc2_3.clone();
const arc3_4 = arc3_3.clone();

const arc_5 = arc_4.clone();
arc_5.y(400);
const arc1_5 = arc1_4.clone();
const arc2_5 = arc2_4.clone();
const arc3_5 = arc3_4.clone();

const arc_6 = arc_5.clone();
arc_6.y(500);
const arc1_6 = arc1_5.clone();
const arc2_6 = arc2_5.clone();
const arc3_6 = arc3_5.clone();

const arc_7 = arc_6.clone();
arc_7.y(600);
const arc1_7 = arc1_6.clone();
const arc2_7 = arc2_6.clone();
const arc3_7 = arc3_6.clone();

const arc_8 = arc_7.clone();
arc_8.y(700);
const arc1_8 = arc1_7.clone();
const arc2_8 = arc2_7.clone();
const arc3_8 = arc3_7.clone();

//arc9
const arc_9 = arc_8.clone();
arc_9.y(800);
const arc1_9 = arc1_8.clone();
arc_9.add(arc1_9);
const arc2_9 = arc2_8.clone();
arc_9.add(arc2_9);
const arc3_9 = arc3_8.clone();
arc_9.add(arc3_9);
layer.add(arc_9);
//arc10
const arc_10 = arc_9.clone();
arc_10.y(900);
const arc1_10 = arc1_9.clone();
arc_10.add(arc1_10);
const arc2_10 = arc2_9.clone();
arc_10.add(arc2_10);
const arc3_10 = arc3_9.clone();
arc_10.add(arc3_10);
layer.add(arc_10);
//arc11
const arc_11 = arc_10.clone();
arc_11.y(1000);
const arc1_11 = arc1_10.clone();
arc_11.add(arc1_11);
const arc2_11 = arc2_10.clone();
arc_11.add(arc2_11);
const arc3_11 = arc3_10.clone();
arc_11.add(arc3_11);
layer.add(arc_11);
//arc12
const arc_12 = arc_11.clone();
arc_12.y(1100);
const arc1_12 = arc1_11.clone();
arc_12.add(arc1_12);
const arc2_12 = arc2_11.clone();
arc_12.add(arc2_12);
const arc3_12 = arc3_11.clone();
arc_12.add(arc3_12);
layer.add(arc_12);
//arc13
const arc_13 = arc_12.clone();
arc_13.y(1200);
const arc1_13 = arc1_12.clone();
arc_13.add(arc1_13);
const arc2_13 = arc2_12.clone();
arc_13.add(arc2_13);
const arc3_13 = arc3_12.clone();
arc_13.add(arc3_13);
layer.add(arc_13);
//arc14
const arc_14 = arc_13.clone();
arc_14.y(1300);
const arc1_14 = arc1_13.clone();
arc_14.add(arc1_14);
const arc2_14 = arc2_13.clone();
arc_14.add(arc2_14);
const arc3_14 = arc3_13.clone();
arc_14.add(arc3_14);
layer.add(arc_14);
//arc15
const arc_15 = arc_14.clone();
arc_15.y(1400);
const arc1_15 = arc1_14.clone();
arc_15.add(arc1_15);
const arc2_15 = arc2_14.clone();
arc_15.add(arc2_15);
const arc3_15 = arc3_14.clone();
arc_15.add(arc3_15);
layer.add(arc_15);
//arc16
const arc_16 = arc_15.clone();
arc_16.y(1500);
const arc1_16 = arc1_15.clone();
arc_16.add(arc1_16);
const arc2_16 = arc2_15.clone();
arc_16.add(arc2_16);
const arc3_16 = arc3_15.clone();
arc_16.add(arc3_16);
layer.add(arc_16);
//arc17
const arc_17 = arc_16.clone();
arc_17.y(1600);
const arc1_17 = arc1_16.clone();
arc_17.add(arc1_17);
const arc2_17 = arc2_16.clone();
arc_17.add(arc2_17);
const arc3_17 = arc3_16.clone();
arc_17.add(arc3_17);
layer.add(arc_17);
//arc18
const arc_18 = arc_17.clone();
arc_18.y(1700);
const arc1_18 = arc1_17.clone();
arc_18.add(arc1_18);
const arc2_18 = arc2_17.clone();
arc_18.add(arc2_18);
const arc3_18 = arc3_17.clone();
arc_18.add(arc3_18);
layer.add(arc_18);
//arc19
const arc_19 = arc_18.clone();
arc_19.y(1800);
const arc1_19 = arc1_18.clone();
arc_19.add(arc1_19);
const arc2_19 = arc2_18.clone();
arc_19.add(arc2_19);
const arc3_19 = arc3_18.clone();
arc_19.add(arc3_19);
layer.add(arc_19);
//arc20
const arc_20 = arc_19.clone();
arc_20.y(1900);
const arc1_20 = arc1_19.clone();
arc_20.add(arc1_20);
const arc2_20 = arc2_19.clone();
arc_20.add(arc2_20);
const arc3_20 = arc3_19.clone();
arc_20.add(arc3_20);
layer.add(arc_20);
//arc21
const arc_21 = arc_20.clone();
arc_21.y(2000);
const arc1_21 = arc1_20.clone();
arc_21.add(arc1_21);
const arc2_21 = arc2_20.clone();
arc_21.add(arc2_21);
const arc3_21 = arc3_20.clone();
arc_21.add(arc3_21);
layer.add(arc_21);
//arc22
const arc_22 = arc_21.clone();
arc_22.y(2100);
const arc1_22 = arc1_21.clone();
arc_22.add(arc1_22);
const arc2_22 = arc2_21.clone();
arc_22.add(arc2_22);
const arc3_22 = arc3_21.clone();
arc_22.add(arc3_22);
layer.add(arc_22);

// first shape ends


// second shape
var lines_2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/11
    var x2 = width/9
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1.1, (y1*0.5)*0.41, x1, y1*0.5);
      context.quadraticCurveTo(x1*0.84, (y1*0.5)*1.32, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.88, (y1*0.5)*1.38, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.0, (y1*0.5)*0.37, x2, y1*0);
      //
      context.moveTo(x1,y1);
      context.quadraticCurveTo((x1)*1.12, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.75);
      context.quadraticCurveTo((x1)*0.84, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.75);
      context.quadraticCurveTo(x2*1.10, ((y1*3)*0.75)*0.37, x2, (y1));
      context.closePath();
      // line
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'blue',
    stroke: 'black',
    strokeWidth: 3,
  });

  var container_2 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/13
    var x2 = width/7.5
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.92, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1,y1);
      context.quadraticCurveTo((x1)*1.12, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.75);
      context.quadraticCurveTo((x1)*0.84, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.75);
      context.quadraticCurveTo(x2*1.10, ((y1*3)*0.75)*0.37, x2, (y1));

        context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00308F',
    stroke: 'white',
    strokeWidth: 3,
  });
  layer.add(container_2);

//   third shape
// container3
var container_3 = new Konva.Shape({
  sceneFunc: function (context, shape) {
  var x1 = width/7
  var x2 = width/5
  var y1 = height
    context.beginPath();
    context.moveTo(x1,0);
    context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
    context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
    context.lineTo(x2, y1);
    context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
    context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    context.moveTo(x1, y1);
    context.quadraticCurveTo((x1)*1.17, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
    context.quadraticCurveTo((x1)*0.82, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
    context.lineTo(x2, y1*3);
    context.quadraticCurveTo((x2)*0.91, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
    context.quadraticCurveTo(x2*1.1, ((y1*3)*0.95)*0.37, x2, (y1));

  //   context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '#007FFF',
  stroke: 'black',
  strokeWidth: 3,
});
layer.add(container_3);

//gyawu atico shape

var gyawu_1 = new Konva.Group({
    x: width/6,
    scaleX:0.2,
    scaleY:0.2,
});
//  gyawu.visible(true);
//
var gyawu1_1 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(-85, 120);
    context.quadraticCurveTo(-37.5, 200, 50, 120);
    context.quadraticCurveTo(50, 10, 50, 10);
    context.quadraticCurveTo(20, 30, -85, 10);
    context.lineTo(-85, 30);
    context.quadraticCurveTo(0, 25, 20, 35);
    context.quadraticCurveTo(40, 65, 20, 120);
    context.quadraticCurveTo(-20.5, 190, -85, 120);



    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 1,
  stroke: 'white',
}); 

const gyawu2_1 = gyawu1_1.clone();
gyawu2_1.scaleX(-gyawu2_1.scaleX());
gyawu2_1.scaleY(-gyawu2_1.scaleY());
gyawu2_1.x(100);
gyawu2_1.y(130);

const gyawu_2 = gyawu_1.clone();
gyawu_2.y(50);
const gyawu1_2 = gyawu1_1.clone();
const gyawu2_2 = gyawu2_1.clone();

const gyawu_3 = gyawu_2.clone();
gyawu_3.y(100);
const gyawu1_3 = gyawu1_2.clone();
const gyawu2_3 = gyawu2_2.clone();
//gyawu4
const gyawu_4 = gyawu_3.clone();
gyawu_4.y(150);
const gyawu1_4 = gyawu1_3.clone();
const gyawu2_4 = gyawu2_3.clone();
//gyawu5
const gyawu_5 = gyawu_4.clone();
gyawu_5.y(200);
const gyawu1_5 = gyawu1_4.clone();
const gyawu2_5 = gyawu2_4.clone();
//gyawu6
const gyawu_6 = gyawu_5.clone();
gyawu_6.y(250);
const gyawu1_6 = gyawu1_5.clone();
const gyawu2_6 = gyawu2_5.clone();
//gyawu7
const gyawu_7 = gyawu_6.clone();
gyawu_7.y(300);
const gyawu1_7 = gyawu1_6.clone();
const gyawu2_7 = gyawu2_6.clone();
//gyawu8
const gyawu_8 = gyawu_7.clone();
gyawu_8.y(350);
const gyawu1_8 = gyawu1_7.clone();
const gyawu2_8 = gyawu2_7.clone();
// gyawu9
const gyawu_9 = gyawu_8.clone();
gyawu_9.y(400);
const gyawu1_9 = gyawu1_8.clone();
const gyawu2_9 = gyawu2_8.clone();
//gyawu10
const gyawu_10 = gyawu_9.clone();
gyawu_10.y(450);
const gyawu1_10 = gyawu1_9.clone();
const gyawu2_10 = gyawu2_9.clone();
//gyawu11
const gyawu_11 = gyawu_10.clone();
gyawu_11.y(500);
const gyawu1_11 = gyawu1_10.clone();
const gyawu2_11 = gyawu2_10.clone();
//gyawu12
const gyawu_12 = gyawu_11.clone();
gyawu_12.y(550);
const gyawu1_12 = gyawu1_11.clone();
const gyawu2_12 = gyawu2_11.clone();

//gyawu13
const gyawu_13 = gyawu_12.clone();
gyawu_13.y(600);
const gyawu1_13 = gyawu1_12.clone();
const gyawu2_13 = gyawu2_12.clone();
//gyawu14
const gyawu_14 = gyawu_13.clone();
gyawu_14.y(650);
const gyawu1_14 = gyawu1_13.clone();
const gyawu2_14 = gyawu2_13.clone();

const gyawu_15 = gyawu_14.clone();
gyawu_15.y(700);
const gyawu1_15 = gyawu1_14.clone();
const gyawu2_15 = gyawu2_14.clone();
//gyawu16
const gyawu_16 = gyawu_15.clone();
gyawu_16.y(750);
const gyawu1_16 = gyawu1_15.clone();
gyawu_16.add(gyawu1_16);
const gyawu2_16 = gyawu2_15.clone();
gyawu_16.add(gyawu2_16);
layer.add(gyawu_16);
//gyawu17
const gyawu_17 = gyawu_16.clone();
gyawu_17.y(800);
const gyawu1_17 = gyawu1_16.clone();
gyawu_17.add(gyawu1_17);
const gyawu2_17 = gyawu2_16.clone();
gyawu_17.add(gyawu2_17);
layer.add(gyawu_17);
//gyawu18
const gyawu_18 = gyawu_17.clone();
gyawu_18.y(850);
const gyawu1_18 = gyawu1_17.clone();
gyawu_18.add(gyawu1_18);
const gyawu2_18 = gyawu2_17.clone();
gyawu_18.add(gyawu2_18);
layer.add(gyawu_18);
//gyawu19
const gyawu_19 = gyawu_18.clone();
gyawu_19.y(900);
const gyawu1_19 = gyawu1_18.clone();
gyawu_19.add(gyawu1_19);
const gyawu2_19 = gyawu2_18.clone();
gyawu_19.add(gyawu2_19);
layer.add(gyawu_19);
//gyawu20
const gyawu_20 = gyawu_19.clone();
gyawu_20.y(950);
const gyawu1_20 = gyawu1_19.clone();
gyawu_20.add(gyawu1_20);
const gyawu2_20 = gyawu2_19.clone();
gyawu_20.add(gyawu2_20);
layer.add(gyawu_20);
//gyawu21
const gyawu_21 = gyawu_20.clone();
gyawu_21.y(1000);
const gyawu1_21 = gyawu1_20.clone();
gyawu_21.add(gyawu1_21);
const gyawu2_21 = gyawu2_20.clone();
gyawu_21.add(gyawu2_21);
layer.add(gyawu_21);
//gyawu22
const gyawu_22 = gyawu_21.clone();
gyawu_22.y(1050);
const gyawu1_22 = gyawu1_21.clone();
gyawu_22.add(gyawu1_22);
const gyawu2_22 = gyawu2_21.clone();
gyawu_22.add(gyawu2_22);
layer.add(gyawu_22);
//gyawu23
const gyawu_23 = gyawu_22.clone();
gyawu_23.y(1100);
const gyawu1_23 = gyawu1_22.clone();
gyawu_23.add(gyawu1_23);
const gyawu2_23 = gyawu2_22.clone();
gyawu_23.add(gyawu2_23);
layer.add(gyawu_23);
//gyawu24
const gyawu_24 = gyawu_23.clone();
gyawu_24.y(1150);
const gyawu1_24 = gyawu1_23.clone();
gyawu_24.add(gyawu1_24);
const gyawu2_24 = gyawu2_23.clone();
gyawu_24.add(gyawu2_24);
layer.add(gyawu_24);
//gyawu25
const gyawu_25 = gyawu_24.clone();
gyawu_25.y(1200);
const gyawu1_25 = gyawu1_24.clone();
gyawu_25.add(gyawu1_25);
const gyawu2_25 = gyawu2_24.clone();
gyawu_25.add(gyawu2_25);
layer.add(gyawu_25);
//gyawu26
const gyawu_26 = gyawu_25.clone();
gyawu_26.y(1250);
const gyawu1_26 = gyawu1_25.clone();
gyawu_26.add(gyawu1_26);
const gyawu2_26 = gyawu2_25.clone();
gyawu_26.add(gyawu2_26);
layer.add(gyawu_26);
//gyawu27
const gyawu_27 = gyawu_26.clone();
gyawu_27.y(1300);
const gyawu1_27 = gyawu1_26.clone();
gyawu_27.add(gyawu1_27);
const gyawu2_27 = gyawu2_26.clone();
gyawu_27.add(gyawu2_27);
layer.add(gyawu_27);
//gyawu28
const gyawu_28 = gyawu_27.clone();
gyawu_28.y(1350);
const gyawu1_28 = gyawu1_27.clone();
gyawu_28.add(gyawu1_28);
const gyawu2_28 = gyawu2_27.clone();
gyawu_28.add(gyawu2_28);
layer.add(gyawu_28);
//gyawu29
const gyawu_29 = gyawu_28.clone();
gyawu_29.y(1400);
const gyawu1_29 = gyawu1_28.clone();
gyawu_29.add(gyawu1_29);
const gyawu2_29 = gyawu2_28.clone();
gyawu_29.add(gyawu2_29);
layer.add(gyawu_29);
//gyawu30
const gyawu_30 = gyawu_29.clone();
gyawu_30.y(1450);
const gyawu1_30 = gyawu1_29.clone();
gyawu_30.add(gyawu1_30);
const gyawu2_30 = gyawu2_29.clone();
gyawu_30.add(gyawu2_30);
layer.add(gyawu_30);
//gyawu31
const gyawu_31 = gyawu_30.clone();
gyawu_31.y(1500);
const gyawu1_31 = gyawu1_30.clone();
gyawu_31.add(gyawu1_31);
const gyawu2_31 = gyawu2_30.clone();
gyawu_31.add(gyawu2_31);
layer.add(gyawu_31);
//gyawu32
const gyawu_32 = gyawu_31.clone();
gyawu_32.y(1550);
const gyawu1_32 = gyawu1_31.clone();
gyawu_32.add(gyawu1_32);
const gyawu2_32 = gyawu2_31.clone();
gyawu_32.add(gyawu2_32);
layer.add(gyawu_32);
//gyawu33
const gyawu_33 = gyawu_32.clone();
gyawu_33.y(1600);
const gyawu1_33 = gyawu1_32.clone();
gyawu_33.add(gyawu1_33);
const gyawu2_33 = gyawu2_32.clone();
gyawu_33.add(gyawu2_33);
layer.add(gyawu_33);
//gyawu34
const gyawu_34 = gyawu_33.clone();
gyawu_34.y(1650);
const gyawu1_34 = gyawu1_33.clone();
gyawu_34.add(gyawu1_34);
const gyawu2_34 = gyawu2_33.clone();
gyawu_34.add(gyawu2_34);
layer.add(gyawu_34);
//gyawu35
const gyawu_35 = gyawu_34.clone();
gyawu_35.y(1700);
const gyawu1_35 = gyawu1_34.clone();
gyawu_35.add(gyawu1_35);
const gyawu2_35 = gyawu2_34.clone();
gyawu_35.add(gyawu2_35);
layer.add(gyawu_35);
//gyawu36
const gyawu_36 = gyawu_35.clone();
gyawu_36.y(1750);
const gyawu1_36 = gyawu1_35.clone();
gyawu_36.add(gyawu1_36);
const gyawu2_36 = gyawu2_35.clone();
gyawu_36.add(gyawu2_36);
layer.add(gyawu_36);
//gyawu37
const gyawu_37 = gyawu_36.clone();
gyawu_37.y(1800);
const gyawu1_37 = gyawu1_36.clone();
gyawu_37.add(gyawu1_37);
const gyawu2_37 = gyawu2_36.clone();
gyawu_37.add(gyawu2_37);
layer.add(gyawu_37);
//gyawu38
const gyawu_38 = gyawu_37.clone();
gyawu_38.y(1850);
const gyawu1_38 = gyawu1_37.clone();
gyawu_38.add(gyawu1_38);
const gyawu2_38 = gyawu2_37.clone();
gyawu_38.add(gyawu2_38);
layer.add(gyawu_38);
//gyawu39
const gyawu_39 = gyawu_38.clone();
gyawu_39.y(1900);
const gyawu1_39 = gyawu1_38.clone();
gyawu_39.add(gyawu1_39);
const gyawu2_39 = gyawu2_38.clone();
gyawu_39.add(gyawu2_39);
layer.add(gyawu_39);
//gyawu40
const gyawu_40 = gyawu_39.clone();
gyawu_40.y(1950);
const gyawu1_40 = gyawu1_39.clone();
gyawu_40.add(gyawu1_40);
const gyawu2_40 = gyawu2_39.clone();
gyawu_40.add(gyawu2_40);
layer.add(gyawu_40);
//gyawu41
const gyawu_41 = gyawu_40.clone();
gyawu_41.y(2000);
const gyawu1_41 = gyawu1_40.clone();
gyawu_41.add(gyawu1_41);
const gyawu2_41 = gyawu2_40.clone();
gyawu_41.add(gyawu2_41);
layer.add(gyawu_41);
//gyawu42
const gyawu_42 = gyawu_41.clone();
gyawu_42.y(2050);
const gyawu1_42 = gyawu1_41.clone();
gyawu_42.add(gyawu1_42);
const gyawu2_42 = gyawu2_41.clone();
gyawu_42.add(gyawu2_42);
layer.add(gyawu_42);
//gyawu43
const gyawu_43 = gyawu_42.clone();
gyawu_43.y(2100);
const gyawu1_43 = gyawu1_42.clone();
gyawu_43.add(gyawu1_43);
const gyawu2_43 = gyawu2_42.clone();
gyawu_43.add(gyawu2_43);
layer.add(gyawu_43);
//gyawu44
const gyawu_44 = gyawu_43.clone();
gyawu_44.y(2150);
const gyawu1_44 = gyawu1_43.clone();
gyawu_44.add(gyawu1_44);
const gyawu2_44 = gyawu2_43.clone();
gyawu_44.add(gyawu2_44);
layer.add(gyawu_44);
//gyawu45
const gyawu_45 = gyawu_44.clone();
gyawu_45.y(2200);
const gyawu1_45 = gyawu1_44.clone();
gyawu_45.add(gyawu1_45);
const gyawu2_45 = gyawu2_44.clone();
gyawu_45.add(gyawu2_45);
layer.add(gyawu_45);
//gyawu46
const gyawu_46 = gyawu_45.clone();
gyawu_46.y(2250);
const gyawu1_46 = gyawu1_45.clone();
gyawu_46.add(gyawu1_46);
const gyawu2_46 = gyawu2_45.clone();
gyawu_46.add(gyawu2_46);
layer.add(gyawu_46);
//gyawu47
const gyawu_47 = gyawu_46.clone();
gyawu_47.y(2300);
const gyawu1_47 = gyawu1_46.clone();
gyawu_47.add(gyawu1_47);
const gyawu2_47 = gyawu2_46.clone();
gyawu_47.add(gyawu2_47);
layer.add(gyawu_47);
//gyawu48
const gyawu_48 = gyawu_47.clone();
gyawu_48.y(2350);
const gyawu1_48 = gyawu1_47.clone();
gyawu_48.add(gyawu1_48);
const gyawu2_48 = gyawu2_47.clone();
gyawu_48.add(gyawu2_48);
layer.add(gyawu_48);
//gyawu49
const gyawu_49 = gyawu_48.clone();
gyawu_49.y(2400);
const gyawu1_49 = gyawu1_48.clone();
gyawu_49.add(gyawu1_49);
const gyawu2_49 = gyawu2_48.clone();
gyawu_49.add(gyawu2_49);
layer.add(gyawu_49);
//gyawu50
const gyawu_50 = gyawu_49.clone();
gyawu_50.y(2450);
const gyawu1_50 = gyawu1_49.clone();
gyawu_50.add(gyawu1_50);
const gyawu2_50 = gyawu2_49.clone();
gyawu_50.add(gyawu2_50);
layer.add(gyawu_50);


// forth shape
var container_4 = new Konva.Shape({
  sceneFunc: function (context, shape) {
  var x1 = width/4.9
  var x2 = width/3.5
  var y1 = height
    context.beginPath();
    context.moveTo(x1,0);
    context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
    context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
    context.lineTo(x2, y1);
    context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
    context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    context.moveTo(x1, y1);
    context.quadraticCurveTo((x1)*1.0, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
    context.quadraticCurveTo((x1)*0.99, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
    context.lineTo(x2, y1*3);
    context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
    context.quadraticCurveTo(x2*1.0, ((y1*3)*0.95)*0.37, x2, (y1));

  //   context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '#0a2351',
  stroke: 'black',
  strokeWidth: 3,
});
layer.add(container_4);

var circle_1 = new Konva.Group({
    x: 20,
});

var circle1_1 = new Konva.Circle({
    x:  width/4.5,
    y: 20,
    radius: 10,
    stroke: 'black',
    strokeWidth: 4,
  });

const circle2_1 = circle1_1.clone();
circle2_1.x(width/4.2);
circle2_1.y(50);

//circle2
const circle_2 = circle_1.clone();
circle_2.y(100);
const circle1_2 = circle1_1.clone();
const circle2_2 = circle2_1.clone();
//circle3
const circle_3 = circle_2.clone();
circle_3.y(200);
const circle1_3 = circle1_2.clone();
const circle2_3 = circle2_2.clone();
//circle4
const circle_4 = circle_3.clone();
circle_4.y(300);
const circle1_4 = circle1_3.clone();
const circle2_4 = circle2_3.clone();
//circle5
const circle_5 = circle_4.clone();
circle_5.y(400);
const circle1_5 = circle1_4.clone();
const circle2_5 = circle2_4.clone();
//circle6
const circle_6 = circle_5.clone();
circle_6.y(500);
const circle1_6 = circle1_5.clone();
const circle2_6 = circle2_5.clone();
//circle7
const circle_7 = circle_6.clone();
circle_7.y(600);
const circle1_7 = circle1_6.clone();
const circle2_7 = circle2_6.clone();
//circle8
const circle_8 = circle_7.clone();
circle_8.y(700);
const circle1_8 = circle1_7.clone();
const circle2_8 = circle2_7.clone();
//circle9
const circle_9 = circle_8.clone();
circle_9.y(800);
const circle1_9 = circle1_8.clone();
circle_9.add(circle1_9);
const circle2_9 = circle2_8.clone();
circle_9.add(circle2_9);
layer.add(circle_9);
//circle10
const circle_10 = circle_9.clone();
circle_10.y(900);
const circle1_10 = circle1_9.clone();
circle_10.add(circle1_10);
const circle2_10 = circle2_9.clone();
circle_10.add(circle2_10);
layer.add(circle_10);
//circle11
const circle_11 = circle_10.clone();
circle_11.y(1000);
const circle1_11 = circle1_10.clone();
circle_11.add(circle1_11);
const circle2_11 = circle2_10.clone();
circle_11.add(circle2_11);
layer.add(circle_11);
//circle12
const circle_12 = circle_11.clone();
circle_12.y(1100);
const circle1_12 = circle1_11.clone();
circle_12.add(circle1_12);
const circle2_12 = circle2_11.clone();
circle_12.add(circle2_12);
layer.add(circle_12);
//circle13
const circle_13 = circle_12.clone();
circle_13.y(1200);
const circle1_13 = circle1_12.clone();
circle_13.add(circle1_13);
const circle2_13 = circle2_12.clone();
circle_13.add(circle2_13);
layer.add(circle_13);
//circle14
const circle_14 = circle_13.clone();
circle_14.y(1300);
const circle1_14 = circle1_13.clone();
circle_14.add(circle1_14);
const circle2_14 = circle2_13.clone();
circle_14.add(circle2_14);
layer.add(circle_14);
//circle15
const circle_15 = circle_14.clone();
circle_15.y(1400);
const circle1_15 = circle1_14.clone();
circle_15.add(circle1_15);
const circle2_15 = circle2_14.clone();
circle_15.add(circle2_15);
layer.add(circle_15);
//circle16
const circle_16 = circle_15.clone();
circle_16.y(1500);
const circle1_16 = circle1_15.clone();
circle_16.add(circle1_16);
const circle2_16 = circle2_15.clone();
circle_16.add(circle2_16);
layer.add(circle_16);
//circle17
const circle_17 = circle_16.clone();
circle_17.y(1600);
const circle1_17 = circle1_16.clone();
circle_17.add(circle1_17);
const circle2_17 = circle2_16.clone();
circle_17.add(circle2_17);
layer.add(circle_17);
//circle18
const circle_18 = circle_17.clone();
circle_18.y(1700);
const circle1_18 = circle1_17.clone();
circle_18.add(circle1_18);
const circle2_18 = circle2_17.clone();
circle_18.add(circle2_18);
layer.add(circle_18);
//circle19
const circle_19 = circle_18.clone();
circle_19.y(1800);
const circle1_19 = circle1_18.clone();
circle_19.add(circle1_19);
const circle2_19 = circle2_18.clone();
circle_19.add(circle2_19);
layer.add(circle_19);
//circle20
const circle_20 = circle_19.clone();
circle_20.y(1900);
const circle1_20 = circle1_19.clone();
circle_20.add(circle1_20);
const circle2_20 = circle2_19.clone();
circle_20.add(circle2_20);
layer.add(circle_20);
//circle21
const circle_21 = circle_20.clone();
circle_21.y(2000);
const circle1_21 = circle1_20.clone();
circle_21.add(circle1_21);
const circle2_21 = circle2_20.clone();
circle_21.add(circle2_21);
layer.add(circle_21);
//circle22
const circle_22 = circle_21.clone();
circle_22.y(2100);
const circle1_22 = circle1_21.clone();
circle_22.add(circle1_22);
const circle2_22 = circle2_21.clone();
circle_22.add(circle2_22);
layer.add(circle_22);
//circle23
const circle_23 = circle_22.clone();
circle_23.y(2200);
const circle1_23 = circle1_22.clone();
circle_23.add(circle1_23);
const circle2_23 = circle2_22.clone();
circle_23.add(circle2_23);
layer.add(circle_23);
//circle24
const circle_24 = circle_23.clone();
circle_24.y(2300);
const circle1_24 = circle1_23.clone();
circle_24.add(circle1_24);
const circle2_24 = circle2_23.clone();
circle_24.add(circle2_24);
layer.add(circle_24);
//circle25
const circle_25 = circle_24.clone();
circle_25.y(2400);
const circle1_25 = circle1_24.clone();
circle_25.add(circle1_25);
const circle2_25 = circle2_24.clone();
circle_25.add(circle2_25);
layer.add(circle_25);
//circle26
const circle_26 = circle_25.clone();
circle_26.y(2500);
const circle1_26 = circle1_25.clone();
circle_26.add(circle1_26);
const circle2_26 = circle2_25.clone();
circle_26.add(circle2_26);
layer.add(circle_26);
//circle27
const circle_27 = circle_26.clone();
circle_27.y(2600);
const circle1_27 = circle1_26.clone();
circle_27.add(circle1_27);
const circle2_27 = circle2_26.clone();
circle_27.add(circle2_27);
layer.add(circle_27);
//circle28
const circle_28 = circle_27.clone();
circle_28.y(2700);
const circle1_28 = circle1_27.clone();
circle_28.add(circle1_28);
const circle2_28 = circle2_27.clone();
circle_28.add(circle2_28);
layer.add(circle_28);
//circle29
const circle_29 = circle_28.clone();
circle_29.y(2800);
const circle1_29 = circle1_28.clone();
circle_29.add(circle1_29);
const circle2_29 = circle2_28.clone();
circle_29.add(circle2_29);
layer.add(circle_29);
//circle30
const circle_30 = circle_29.clone();
circle_30.y(2900);
const circle1_30 = circle1_29.clone();
circle_30.add(circle1_30);
const circle2_30 = circle2_29.clone();
circle_30.add(circle2_30);
layer.add(circle_30);


//   forth shape ends

// fifth shape starts

var container_5 = new Konva.Shape({
  sceneFunc: function (context, shape) {
  var x1 = width/3.4
  var x2 = width/2.65
  var y1 = height
    context.beginPath();
    context.moveTo(x1,0);
    context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
    context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
    context.lineTo(x2, y1);
    context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
    context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
    context.moveTo(x1, y1);
    context.quadraticCurveTo((x1)*0.97, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
    context.quadraticCurveTo((x1)*0.99, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
    context.lineTo(x2, y1*3);
    context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
    context.quadraticCurveTo(x2*1.04, ((y1*3)*0.95)*0.37, x2, (y1));

    //   context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: '#0039a6',
  stroke: 'black',
  strokeWidth: 3,
});
layer.add(container_5);
var oval_1 = new Konva.Group({
    x: 0,
});

var oval1_1 = new Konva.Ellipse({
    x: width/3.3,
    y: 30,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var oval2_1 = new Konva.Ellipse({
    x: width/3.1,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var oval3_1 = new Konva.Ellipse({
    x: width/2.9,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
    rotation:45,
  });

//oval2
const oval_2 = oval_1.clone();
oval_2.y(60);
const oval1_2 = oval1_1.clone();
const oval2_2 = oval2_1.clone();
const oval3_2 = oval3_1.clone();
//oval3
const oval_3 = oval_2.clone();
oval_3.y(120);
const oval1_3 = oval1_2.clone();
const oval2_3 = oval2_2.clone();
const oval3_3 = oval3_2.clone();
//oval4
const oval_4 = oval_3.clone();
oval_4.y(180);
const oval1_4 = oval1_3.clone();
const oval2_4 = oval2_3.clone();
const oval3_4 = oval3_3.clone();
//oval5
const oval_5 = oval_4.clone();
oval_5.y(240);
const oval1_5 = oval1_4.clone();
const oval2_5 = oval2_4.clone();
const oval3_5 = oval3_4.clone();
//oval6
const oval_6 = oval_5.clone();
oval_6.y(300);
const oval1_6 = oval1_5.clone();
const oval2_6 = oval2_5.clone();
const oval3_6 = oval3_5.clone();
//oval7
const oval_7 = oval_6.clone();
oval_7.y(360);
const oval1_7 = oval1_6.clone();
const oval2_7 = oval2_6.clone();
const oval3_7 = oval3_6.clone();
//oval8
const oval_8 = oval_7.clone();
oval_8.y(420);
const oval1_8 = oval1_7.clone();
const oval2_8 = oval2_7.clone();
const oval3_8 = oval3_7.clone();
//oval9
const oval_9 = oval_8.clone();
oval_9.y(480);
const oval1_9 = oval1_8.clone();
const oval2_9 = oval2_8.clone();
const oval3_9 = oval3_8.clone();
//oval10
const oval_10 = oval_9.clone();
oval_10.y(540);
const oval1_10 = oval1_9.clone();
const oval2_10 = oval2_9.clone();
const oval3_10 = oval3_9.clone();
//oval11
const oval_11 = oval_10.clone();
oval_11.y(600);
const oval1_11 = oval1_10.clone();
const oval2_11 = oval2_10.clone();
const oval3_11 = oval3_10.clone();
//oval12
const oval_12 = oval_11.clone();
oval_12.y(660);
const oval1_12 = oval1_11.clone();
const oval2_12 = oval2_11.clone();
const oval3_12 = oval3_11.clone();
//oval13
const oval_13 = oval_12.clone();
oval_13.y(720);
const oval1_13 = oval1_12.clone();
const oval2_13 = oval2_12.clone();
const oval3_13 = oval3_12.clone();
//oval14
const oval_14 = oval_13.clone();
oval_14.y(780);
const oval1_14 = oval1_13.clone();
const oval2_14 = oval2_13.clone();
const oval3_14 = oval3_13.clone();
//oval15
const oval_15 = oval_14.clone();
oval_15.y(840);
const oval1_15 = oval1_14.clone();
const oval2_15 = oval2_14.clone();
const oval3_15 = oval3_14.clone();

//oval16
const oval_16 = oval_15.clone();
oval_16.y(900);
const oval1_16 = oval1_15.clone();
oval_16.add(oval1_16);
const oval2_16 = oval2_15.clone();
oval_16.add(oval2_16);
const oval3_16 = oval3_15.clone();
oval_16.add(oval3_16);
layer.add(oval_16);
//oval17
const oval_17 = oval_16.clone();
oval_17.y(960);
const oval1_17 = oval1_16.clone();
oval_17.add(oval1_17);
const oval2_17 = oval2_16.clone();
oval_17.add(oval2_17);
const oval3_17 = oval3_16.clone();
oval_17.add(oval3_17);
layer.add(oval_17);
//oval18
const oval_18 = oval_17.clone();
oval_18.y(1020);
const oval1_18 = oval1_17.clone();
oval_18.add(oval1_18);
const oval2_18 = oval2_17.clone();
oval_18.add(oval2_18);
const oval3_18 = oval3_17.clone();
oval_18.add(oval3_18);
layer.add(oval_18);
//oval19
const oval_19 = oval_18.clone();
oval_19.y(1080);
const oval1_19 = oval1_18.clone();
oval_19.add(oval1_19);
const oval2_19 = oval2_18.clone();
oval_19.add(oval2_19);
const oval3_19 = oval3_18.clone();
oval_19.add(oval3_19);
layer.add(oval_19);
//oval20
const oval_20 = oval_19.clone();
oval_20.y(1140);
const oval1_20 = oval1_19.clone();
oval_20.add(oval1_20);
const oval2_20 = oval2_19.clone();
oval_20.add(oval2_20);
const oval3_20 = oval3_19.clone();
oval_20.add(oval3_20);
layer.add(oval_20);
//oval21
const oval_21 = oval_20.clone();
oval_21.y(1200);
const oval1_21 = oval1_20.clone();
oval_21.add(oval1_21);
const oval2_21 = oval2_20.clone();
oval_21.add(oval2_21);
const oval3_21 = oval3_20.clone();
oval_21.add(oval3_21);
layer.add(oval_21);
//oval22
const oval_22 = oval_21.clone();
oval_22.y(1260);
const oval1_22 = oval1_21.clone();
oval_22.add(oval1_22);
const oval2_22 = oval2_21.clone();
oval_22.add(oval2_22);
const oval3_22 = oval3_21.clone();
oval_22.add(oval3_22);
layer.add(oval_22);
//oval23
const oval_23 = oval_22.clone();
oval_23.y(1320);
const oval1_23 = oval1_22.clone();
oval_23.add(oval1_23);
const oval2_23 = oval2_22.clone();
oval_23.add(oval2_23);
const oval3_23 = oval3_22.clone();
oval_23.add(oval3_23);
layer.add(oval_23);
//oval24
const oval_24 = oval_23.clone();
oval_24.y(1380);
const oval1_24 = oval1_23.clone();
oval_24.add(oval1_24);
const oval2_24 = oval2_23.clone();
oval_24.add(oval2_24);
const oval3_24 = oval3_23.clone();
oval_24.add(oval3_24);
layer.add(oval_24);
//oval25
const oval_25 = oval_24.clone();
oval_25.y(1440);
const oval1_25 = oval1_24.clone();
oval_25.add(oval1_25);
const oval2_25 = oval2_24.clone();
oval_25.add(oval2_25);
const oval3_25 = oval3_24.clone();
oval_25.add(oval3_25);
layer.add(oval_25);
//oval26
const oval_26 = oval_25.clone();
oval_26.y(1500);
const oval1_26 = oval1_25.clone();
oval_26.add(oval1_26);
const oval2_26 = oval2_25.clone();
oval_26.add(oval2_26);
const oval3_26 = oval3_25.clone();
oval_26.add(oval3_26);
layer.add(oval_26);
//oval27
const oval_27 = oval_26.clone();
oval_27.y(1560);
const oval1_27 = oval1_26.clone();
oval_27.add(oval1_27);
const oval2_27 = oval2_26.clone();
oval_27.add(oval2_27);
const oval3_27 = oval3_26.clone();
oval_27.add(oval3_27);
layer.add(oval_27);
//oval28
const oval_28 = oval_27.clone();
oval_28.y(1620);
const oval1_28 = oval1_27.clone();
oval_28.add(oval1_28);
const oval2_28 = oval2_27.clone();
oval_28.add(oval2_28);
const oval3_28 = oval3_27.clone();
oval_28.add(oval3_28);
layer.add(oval_28);
//oval29
const oval_29 = oval_28.clone();
oval_29.y(1680);
const oval1_29 = oval1_28.clone();
oval_29.add(oval1_29);
const oval2_29 = oval2_28.clone();
oval_29.add(oval2_29);
const oval3_29 = oval3_28.clone();
oval_29.add(oval3_29);
layer.add(oval_29);
//oval30
const oval_30 = oval_29.clone();
oval_30.y(1740);
const oval1_30 = oval1_29.clone();
oval_30.add(oval1_30);
const oval2_30 = oval2_29.clone();
oval_30.add(oval2_30);
const oval3_30 = oval3_29.clone();
oval_30.add(oval3_30);
layer.add(oval_30);
//oval31
const oval_31 = oval_30.clone();
oval_31.y(1800);
const oval1_31 = oval1_30.clone();
oval_31.add(oval1_31);
const oval2_31 = oval2_30.clone();
oval_31.add(oval2_31);
const oval3_31 = oval3_30.clone();
oval_31.add(oval3_31);
layer.add(oval_31);
//oval32
const oval_32 = oval_31.clone();
oval_32.y(1860);
const oval1_32 = oval1_31.clone();
oval_32.add(oval1_32);
const oval2_32 = oval2_31.clone();
oval_32.add(oval2_32);
const oval3_32 = oval3_31.clone();
oval_32.add(oval3_32);
layer.add(oval_32);
//oval33
const oval_33 = oval_32.clone();
oval_33.y(1920);
const oval1_33 = oval1_32.clone();
oval_33.add(oval1_33);
const oval2_33 = oval2_32.clone();
oval_33.add(oval2_33);
const oval3_33 = oval3_32.clone();
oval_33.add(oval3_33);
layer.add(oval_33);
//oval34
const oval_34 = oval_33.clone();
oval_34.y(1980);
const oval1_34 = oval1_33.clone();
oval_34.add(oval1_34);
const oval2_34 = oval2_33.clone();
oval_34.add(oval2_34);
const oval3_34 = oval3_33.clone();
oval_34.add(oval3_34);
layer.add(oval_34);
//oval35
const oval_35 = oval_34.clone();
oval_35.y(2040);
const oval1_35 = oval1_34.clone();
oval_35.add(oval1_35);
const oval2_35 = oval2_34.clone();
oval_35.add(oval2_35);
const oval3_35 = oval3_34.clone();
oval_35.add(oval3_35);
layer.add(oval_35);
//oval36
const oval_36 = oval_35.clone();
oval_36.y(2100);
const oval1_36 = oval1_35.clone();
oval_36.add(oval1_36);
const oval2_36 = oval2_35.clone();
oval_36.add(oval2_36);
const oval3_36 = oval3_35.clone();
oval_36.add(oval3_36);
layer.add(oval_36);
//oval37
const oval_37 = oval_36.clone();
oval_37.y(2160);
const oval1_37 = oval1_36.clone();
oval_37.add(oval1_37);
const oval2_37 = oval2_36.clone();
oval_37.add(oval2_37);
const oval3_37 = oval3_36.clone();
oval_37.add(oval3_37);
layer.add(oval_37);
//oval38
const oval_38 = oval_37.clone();
oval_38.y(2220);
const oval1_38 = oval1_37.clone();
oval_38.add(oval1_38);
const oval2_38 = oval2_37.clone();
oval_38.add(oval2_38);
const oval3_38 = oval3_37.clone();
oval_38.add(oval3_38);
layer.add(oval_38);
//oval39
const oval_39 = oval_38.clone();
oval_39.y(2280);
const oval1_39 = oval1_38.clone();
oval_39.add(oval1_39);
const oval2_39 = oval2_38.clone();
oval_39.add(oval2_39);
const oval3_39 = oval3_38.clone();
oval_39.add(oval3_39);
layer.add(oval_39);
//oval40
const oval_40 = oval_39.clone();
oval_40.y(2340);
const oval1_40 = oval1_39.clone();
oval_40.add(oval1_40);
const oval2_40 = oval2_39.clone();
oval_40.add(oval2_40);
const oval3_40 = oval3_39.clone();
oval_40.add(oval3_40);
layer.add(oval_40);
//oval41
const oval_41 = oval_40.clone();
oval_41.y(2400);
const oval1_41 = oval1_40.clone();
oval_41.add(oval1_41);
const oval2_41 = oval2_40.clone();
oval_41.add(oval2_41);
const oval3_41 = oval3_40.clone();
oval_41.add(oval3_41);
layer.add(oval_41);
//oval42
const oval_42 = oval_41.clone();
oval_42.y(2460);
const oval1_42 = oval1_41.clone();
oval_42.add(oval1_42);
const oval2_42 = oval2_41.clone();
oval_42.add(oval2_42);
const oval3_42 = oval3_41.clone();
oval_42.add(oval3_42);
layer.add(oval_42);
//oval43
const oval_43 = oval_42.clone();
oval_43.y(2520);
const oval1_43 = oval1_42.clone();
oval_43.add(oval1_43);
const oval2_43 = oval2_42.clone();
oval_43.add(oval2_43);
const oval3_43 = oval3_42.clone();
oval_43.add(oval3_43);
layer.add(oval_43);
//oval44
const oval_44 = oval_43.clone();
oval_44.y(2580);
const oval1_44 = oval1_43.clone();
oval_44.add(oval1_44);
const oval2_44 = oval2_43.clone();
oval_44.add(oval2_44);
const oval3_44 = oval3_43.clone();
oval_44.add(oval3_44);
layer.add(oval_44);
//oval45
const oval_45 = oval_44.clone();
oval_45.y(2640);
const oval1_45 = oval1_44.clone();
oval_45.add(oval1_45);
const oval2_45 = oval2_44.clone();
oval_45.add(oval2_45);
const oval3_45 = oval3_44.clone();
oval_45.add(oval3_45);
layer.add(oval_45);
//oval46
const oval_46 = oval_45.clone();
oval_46.y(2700);
const oval1_46 = oval1_45.clone();
oval_46.add(oval1_46);
const oval2_46 = oval2_45.clone();
oval_46.add(oval2_46);
const oval3_46 = oval3_45.clone();
oval_46.add(oval3_46);
layer.add(oval_46);
//oval47
const oval_47 = oval_46.clone();
oval_47.y(2760);
const oval1_47 = oval1_46.clone();
oval_47.add(oval1_47);
const oval2_47 = oval2_46.clone();
oval_47.add(oval2_47);
const oval3_47 = oval3_46.clone();
oval_47.add(oval3_47);
layer.add(oval_47);
//oval48
const oval_48 = oval_47.clone();
oval_48.y(2820);
const oval1_48 = oval1_47.clone();
oval_48.add(oval1_48);
const oval2_48 = oval2_47.clone();
oval_48.add(oval2_48);
const oval3_48 = oval3_47.clone();
oval_48.add(oval3_48);
layer.add(oval_48);
//oval49
const oval_49 = oval_48.clone();
oval_49.y(2880);
const oval1_49 = oval1_48.clone();
oval_49.add(oval1_49);
const oval2_49 = oval2_48.clone();
oval_49.add(oval2_49);
const oval3_49 = oval3_48.clone();
oval_49.add(oval3_49);
layer.add(oval_49);
//oval50
const oval_50 = oval_49.clone();
oval_50.y(2940);
const oval1_50 = oval1_49.clone();
oval_50.add(oval1_50);
const oval2_50 = oval2_49.clone();
oval_50.add(oval2_50);
const oval3_50 = oval3_49.clone();
oval_50.add(oval3_50);
layer.add(oval_50);


// fifth shape ends

// sixth shape start
var oneline_6 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.55
    var x2 = width/2.1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*0.99, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*0.98, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*1.02, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.01, ((y1*3)*0.95)*0.37, x2, (y1));
  
      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#A3C1AD',
    stroke: 'black',
    strokeWidth: 3,
  });

  var lines_6 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.22
    var x2 = width/2.3
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*0.43, x1, y1*0.5);
      context.quadraticCurveTo(x1*0.87, (y1*0.5)*1.33, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.92, (y1*0.5)*1.33, x2, y1*0.5);
      context.quadraticCurveTo(x2*0.98, (y1*0.5)*0.41, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*0.98, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*0.99, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*1.02, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.01, ((y1*3)*0.95)*0.37, x2, (y1));

      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'blue',
    stroke: 'black',
    strokeWidth: 3,
  });  

// sixth shape ends

// seventh shape starts
//gyawu atico shape

var container_7 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/2.07
    var x2 = width/1.8
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*0.98, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*0.99, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*1.02, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.01, ((y1*3)*0.95)*0.37, x2, (y1));


      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00BFFF',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_7);

var gyaw_1 = new Konva.Group({
    x: width/1.97,
    scaleX:0.2,
    scaleY:0.2,
});
//  gyawu.visible(true);
//
var gyaw1_1 = new Konva.Shape({
  sceneFunc: function (context, shape) {
    context.beginPath();
    context.moveTo(-85, 120);
    context.quadraticCurveTo(-37.5, 200, 50, 120);
    context.quadraticCurveTo(50, 10, 50, 10);
    context.quadraticCurveTo(20, 30, -85, 10);
    context.lineTo(-85, 30);
    context.quadraticCurveTo(0, 25, 20, 35);
    context.quadraticCurveTo(40, 65, 20, 120);
    context.quadraticCurveTo(-20.5, 190, -85, 120);



    context.closePath();
   // (!) Konva specific method, it is very important
   context.fillStrokeShape(shape);
  },
  fill: 'black',
  strokeWidth: 1,
  stroke: 'white',
}); 

const gyaw2_1 = gyaw1_1.clone();
gyaw2_1.scaleX(-gyaw2_1.scaleX());
gyaw2_1.scaleY(-gyaw2_1.scaleY());
gyaw2_1.x(100);
gyaw2_1.y(130);

//gyaw2
const gyaw_2 = gyaw_1.clone();
gyaw_2.y(50);
const gyaw1_2 = gyaw1_1.clone();
gyaw_2.add(gyaw1_2);
const gyaw2_2 = gyaw2_1.clone();
gyaw_2.add(gyaw2_2);
layer.add(gyaw_2);

//gyaw3
const gyaw_3 = gyaw_2.clone();
gyaw_3.y(100);
const gyaw1_3 = gyaw1_2.clone();
gyaw_3.add(gyaw1_3);
const gyaw2_3 = gyaw2_2.clone();
gyaw_3.add(gyaw2_3);
layer.add(gyaw_3);
//gyaw4
const gyaw_4 = gyaw_3.clone();
gyaw_4.y(150);
const gyaw1_4 = gyaw1_3.clone();
gyaw_4.add(gyaw1_4);
const gyaw2_4 = gyaw2_3.clone();
gyaw_4.add(gyaw2_4);
layer.add(gyaw_4);
//gyaw5
const gyaw_5 = gyaw_4.clone();
gyaw_5.y(200);
const gyaw1_5 = gyaw1_4.clone();
gyaw_5.add(gyaw1_5);
const gyaw2_5 = gyaw2_4.clone();
gyaw_5.add(gyaw2_5);
layer.add(gyaw_5);
//gyaw6
const gyaw_6 = gyaw_5.clone();
gyaw_6.y(250);
const gyaw1_6 = gyaw1_5.clone();
gyaw_6.add(gyaw1_6);
const gyaw2_6 = gyaw2_5.clone();
gyaw_6.add(gyaw2_6);
layer.add(gyaw_6);
//gyaw7
const gyaw_7 = gyaw_6.clone();
gyaw_7.y(300);
const gyaw1_7 = gyaw1_6.clone();
gyaw_7.add(gyaw1_7);
const gyaw2_7 = gyaw2_6.clone();
gyaw_7.add(gyaw2_7);
layer.add(gyaw_7);
//gyaw8
const gyaw_8 = gyaw_7.clone();
gyaw_8.y(350);
const gyaw1_8 = gyaw1_7.clone();
gyaw_8.add(gyaw1_8);
const gyaw2_8 = gyaw2_7.clone();
gyaw_8.add(gyaw2_8);
layer.add(gyaw_8);
//gyaw9
const gyaw_9 = gyaw_8.clone();
gyaw_9.y(400);
const gyaw1_9 = gyaw1_8.clone();
gyaw_9.add(gyaw1_9);
const gyaw2_9 = gyaw2_8.clone();
gyaw_9.add(gyaw2_9);
layer.add(gyaw_9);
//gyaw10
const gyaw_10 = gyaw_9.clone();
gyaw_10.y(450);
const gyaw1_10 = gyaw1_9.clone();
gyaw_10.add(gyaw1_10);
const gyaw2_10 = gyaw2_9.clone();
gyaw_10.add(gyaw2_10);
layer.add(gyaw_10);
//gyaw11
const gyaw_11 = gyaw_10.clone();
gyaw_11.y(500);
const gyaw1_11 = gyaw1_10.clone();
gyaw_11.add(gyaw1_11);
const gyaw2_11 = gyaw2_10.clone();
gyaw_11.add(gyaw2_11);
layer.add(gyaw_11);
//gyaw12
const gyaw_12 = gyaw_11.clone();
gyaw_12.y(550);
const gyaw1_12 = gyaw1_11.clone();
gyaw_12.add(gyaw1_12);
const gyaw2_12 = gyaw2_11.clone();
gyaw_12.add(gyaw2_12);
layer.add(gyaw_12);
//gyaw13
const gyaw_13 = gyaw_12.clone();
gyaw_13.y(600);
const gyaw1_13 = gyaw1_12.clone();
gyaw_13.add(gyaw1_13);
const gyaw2_13 = gyaw2_12.clone();
gyaw_13.add(gyaw2_13);
layer.add(gyaw_13);
//gyaw14
const gyaw_14 = gyaw_13.clone();
gyaw_14.y(650);
const gyaw1_14 = gyaw1_13.clone();
gyaw_14.add(gyaw1_14);
const gyaw2_14 = gyaw2_13.clone();
gyaw_14.add(gyaw2_14);
layer.add(gyaw_14);
//gyaw15
const gyaw_15 = gyaw_14.clone();
gyaw_15.y(700);
const gyaw1_15 = gyaw1_14.clone();
gyaw_15.add(gyaw1_15);
const gyaw2_15 = gyaw2_14.clone();
gyaw_15.add(gyaw2_15);
layer.add(gyaw_15);
//gyaw16
const gyaw_16 = gyaw_15.clone();
gyaw_16.y(750);
const gyaw1_16 = gyaw1_15.clone();
gyaw_16.add(gyaw1_16);
const gyaw2_16 = gyaw2_15.clone();
gyaw_16.add(gyaw2_16);
layer.add(gyaw_16);
//gyaw17
const gyaw_17 = gyaw_16.clone();
gyaw_17.y(800);
const gyaw1_17 = gyaw1_16.clone();
gyaw_17.add(gyaw1_17);
const gyaw2_17 = gyaw2_16.clone();
gyaw_17.add(gyaw2_17);
layer.add(gyaw_17);
//gyaw18
const gyaw_18 = gyaw_17.clone();
gyaw_18.y(850);
const gyaw1_18 = gyaw1_17.clone();
gyaw_18.add(gyaw1_18);
const gyaw2_18 = gyaw2_17.clone();
gyaw_18.add(gyaw2_18);
layer.add(gyaw_18);
//gyaw19
const gyaw_19 = gyaw_18.clone();
gyaw_19.y(900);
const gyaw1_19 = gyaw1_18.clone();
gyaw_19.add(gyaw1_19);
const gyaw2_19 = gyaw2_18.clone();
gyaw_19.add(gyaw2_19);
layer.add(gyaw_19);
//gyaw20
const gyaw_20 = gyaw_19.clone();
gyaw_20.y(950);
const gyaw1_20 = gyaw1_19.clone();
gyaw_20.add(gyaw1_20);
const gyaw2_20 = gyaw2_19.clone();
gyaw_20.add(gyaw2_20);
layer.add(gyaw_20);
//gyaw21
const gyaw_21 = gyaw_20.clone();
gyaw_21.y(1000);
const gyaw1_21 = gyaw1_20.clone();
gyaw_21.add(gyaw1_21);
const gyaw2_21 = gyaw2_20.clone();
gyaw_21.add(gyaw2_21);
layer.add(gyaw_21);
//gyaw22
const gyaw_22 = gyaw_21.clone();
gyaw_22.y(1050);
const gyaw1_22 = gyaw1_21.clone();
gyaw_22.add(gyaw1_22);
const gyaw2_22 = gyaw2_21.clone();
gyaw_22.add(gyaw2_22);
layer.add(gyaw_22);
//gyaw23
const gyaw_23 = gyaw_22.clone();
gyaw_23.y(1100);
const gyaw1_23 = gyaw1_22.clone();
gyaw_23.add(gyaw1_23);
const gyaw2_23 = gyaw2_22.clone();
gyaw_23.add(gyaw2_23);
layer.add(gyaw_23);
//gyaw24
const gyaw_24 = gyaw_23.clone();
gyaw_24.y(1150);
const gyaw1_24 = gyaw1_23.clone();
gyaw_24.add(gyaw1_24);
const gyaw2_24 = gyaw2_23.clone();
gyaw_24.add(gyaw2_24);
layer.add(gyaw_24);
//gyaw25
const gyaw_25 = gyaw_24.clone();
gyaw_25.y(1200);
const gyaw1_25 = gyaw1_24.clone();
gyaw_25.add(gyaw1_25);
const gyaw2_25 = gyaw2_24.clone();
gyaw_25.add(gyaw2_25);
layer.add(gyaw_25);
//gyaw26
const gyaw_26 = gyaw_25.clone();
gyaw_26.y(1250);
const gyaw1_26 = gyaw1_25.clone();
gyaw_26.add(gyaw1_26);
const gyaw2_26 = gyaw2_25.clone();
gyaw_26.add(gyaw2_26);
layer.add(gyaw_26);
//gyaw27
const gyaw_27 = gyaw_26.clone();
gyaw_27.y(1300);
const gyaw1_27 = gyaw1_26.clone();
gyaw_27.add(gyaw1_27);
const gyaw2_27 = gyaw2_26.clone();
gyaw_27.add(gyaw2_27);
layer.add(gyaw_27);
//gyaw28
const gyaw_28 = gyaw_27.clone();
gyaw_28.y(1350);
const gyaw1_28 = gyaw1_27.clone();
gyaw_28.add(gyaw1_28);
const gyaw2_28 = gyaw2_27.clone();
gyaw_28.add(gyaw2_28);
layer.add(gyaw_28);
//gyaw29
const gyaw_29 = gyaw_28.clone();
gyaw_29.y(1400);
const gyaw1_29 = gyaw1_28.clone();
gyaw_29.add(gyaw1_29);
const gyaw2_29 = gyaw2_28.clone();
gyaw_29.add(gyaw2_29);
layer.add(gyaw_29);
//gyaw30
const gyaw_30 = gyaw_29.clone();
gyaw_30.y(1450);
const gyaw1_30 = gyaw1_29.clone();
gyaw_30.add(gyaw1_30);
const gyaw2_30 = gyaw2_29.clone();
gyaw_30.add(gyaw2_30);
layer.add(gyaw_30);
//gyaw31
const gyaw_31 = gyaw_30.clone();
gyaw_31.y(1500);
const gyaw1_31 = gyaw1_30.clone();
gyaw_31.add(gyaw1_31);
const gyaw2_31 = gyaw2_30.clone();
gyaw_31.add(gyaw2_31);
layer.add(gyaw_31);
//gyaw32
const gyaw_32 = gyaw_31.clone();
gyaw_32.y(1550);
const gyaw1_32 = gyaw1_31.clone();
gyaw_32.add(gyaw1_32);
const gyaw2_32 = gyaw2_31.clone();
gyaw_32.add(gyaw2_32);
layer.add(gyaw_32);
//gyaw33
const gyaw_33 = gyaw_32.clone();
gyaw_33.y(1600);
const gyaw1_33 = gyaw1_32.clone();
gyaw_33.add(gyaw1_33);
const gyaw2_33 = gyaw2_32.clone();
gyaw_33.add(gyaw2_33);
layer.add(gyaw_33);
//gyaw34
const gyaw_34 = gyaw_33.clone();
gyaw_34.y(1650);
const gyaw1_34 = gyaw1_33.clone();
gyaw_34.add(gyaw1_34);
const gyaw2_34 = gyaw2_33.clone();
gyaw_34.add(gyaw2_34);
layer.add(gyaw_34);
//gyaw35
const gyaw_35 = gyaw_34.clone();
gyaw_35.y(1700);
const gyaw1_35 = gyaw1_34.clone();
gyaw_35.add(gyaw1_35);
const gyaw2_35 = gyaw2_34.clone();
gyaw_35.add(gyaw2_35);
layer.add(gyaw_35);
//gyaw36
const gyaw_36 = gyaw_35.clone();
gyaw_36.y(1750);
const gyaw1_36 = gyaw1_35.clone();
gyaw_36.add(gyaw1_36);
const gyaw2_36 = gyaw2_35.clone();
gyaw_36.add(gyaw2_36);
layer.add(gyaw_36);
//gyaw37
const gyaw_37 = gyaw_36.clone();
gyaw_37.y(1800);
const gyaw1_37 = gyaw1_36.clone();
gyaw_37.add(gyaw1_37);
const gyaw2_37 = gyaw2_36.clone();
gyaw_37.add(gyaw2_37);
layer.add(gyaw_37);
//gyaw38
const gyaw_38 = gyaw_37.clone();
gyaw_38.y(1850);
const gyaw1_38 = gyaw1_37.clone();
gyaw_38.add(gyaw1_38);
const gyaw2_38 = gyaw2_37.clone();
gyaw_38.add(gyaw2_38);
layer.add(gyaw_38);
//gyaw39
const gyaw_39 = gyaw_38.clone();
gyaw_39.y(1900);
const gyaw1_39 = gyaw1_38.clone();
gyaw_39.add(gyaw1_39);
const gyaw2_39 = gyaw2_38.clone();
gyaw_39.add(gyaw2_39);
layer.add(gyaw_39);
//gyaw40
const gyaw_40 = gyaw_39.clone();
gyaw_40.y(1950);
const gyaw1_40 = gyaw1_39.clone();
gyaw_40.add(gyaw1_40);
const gyaw2_40 = gyaw2_39.clone();
gyaw_40.add(gyaw2_40);
layer.add(gyaw_40);
//gyaw41
const gyaw_41 = gyaw_40.clone();
gyaw_41.y(2000);
const gyaw1_41 = gyaw1_40.clone();
gyaw_41.add(gyaw1_41);
const gyaw2_41 = gyaw2_40.clone();
gyaw_41.add(gyaw2_41);
layer.add(gyaw_41);
//gyaw42
const gyaw_42 = gyaw_41.clone();
gyaw_42.y(2050);
const gyaw1_42 = gyaw1_41.clone();
gyaw_42.add(gyaw1_42);
const gyaw2_42 = gyaw2_41.clone();
gyaw_42.add(gyaw2_42);
layer.add(gyaw_42);
//gyaw43
const gyaw_43 = gyaw_42.clone();
gyaw_43.y(2100);
const gyaw1_43 = gyaw1_42.clone();
gyaw_43.add(gyaw1_43);
const gyaw2_43 = gyaw2_42.clone();
gyaw_43.add(gyaw2_43);
layer.add(gyaw_43);
//gyaw44
const gyaw_44 = gyaw_43.clone();
gyaw_44.y(2150);
const gyaw1_44 = gyaw1_43.clone();
gyaw_44.add(gyaw1_44);
const gyaw2_44 = gyaw2_43.clone();
gyaw_44.add(gyaw2_44);
layer.add(gyaw_44);
//gyaw45
const gyaw_45 = gyaw_44.clone();
gyaw_45.y(2200);
const gyaw1_45 = gyaw1_44.clone();
gyaw_45.add(gyaw1_45);
const gyaw2_45 = gyaw2_44.clone();
gyaw_45.add(gyaw2_45);
layer.add(gyaw_45);
//gyaw46
const gyaw_46 = gyaw_45.clone();
gyaw_46.y(2250);
const gyaw1_46 = gyaw1_45.clone();
gyaw_46.add(gyaw1_46);
const gyaw2_46 = gyaw2_45.clone();
gyaw_46.add(gyaw2_46);
layer.add(gyaw_46);
//gyaw47
const gyaw_47 = gyaw_46.clone();
gyaw_47.y(2300);
const gyaw1_47 = gyaw1_46.clone();
gyaw_47.add(gyaw1_47);
const gyaw2_47 = gyaw2_46.clone();
gyaw_47.add(gyaw2_47);
layer.add(gyaw_47);
//gyaw48
const gyaw_48 = gyaw_47.clone();
gyaw_48.y(2350);
const gyaw1_48 = gyaw1_47.clone();
gyaw_48.add(gyaw1_48);
const gyaw2_48 = gyaw2_47.clone();
gyaw_48.add(gyaw2_48);
layer.add(gyaw_48);
//gyaw49
const gyaw_49 = gyaw_48.clone();
gyaw_49.y(2400);
const gyaw1_49 = gyaw1_48.clone();
gyaw_49.add(gyaw1_49);
const gyaw2_49 = gyaw2_48.clone();
gyaw_49.add(gyaw2_49);
layer.add(gyaw_49);
//gyaw50
const gyaw_50 = gyaw_49.clone();
gyaw_50.y(2450);
const gyaw1_50 = gyaw1_49.clone();
gyaw_50.add(gyaw1_50);
const gyaw2_50 = gyaw2_49.clone();
gyaw_50.add(gyaw2_50);
layer.add(gyaw_50);

// seventh shape ends

// eight shape starts
var container_8 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.76
    var x2 = width/1.55
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.01, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*1.0, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*0.97, ((y1*3)*0.95)*0.37, x2, (y1));

      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#00CED1',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_8);

var arcc_1 = new Konva.Group({
    x: width/1.76,
});

var arcc1_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/90
    var y1 = height/60
      context.beginPath();
      context.moveTo(x1, y1);
      context.quadraticCurveTo(x1+10, y1+20, x1+20,y1);
    //   context.lineTo(205, 0);
    //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    // fill: 'violet',
    stroke: 'black',
    strokeWidth: 3,
  });


const arcc2_1 = arcc1_1.clone();
arcc2_1.x(50);

const arcc3_1 = arcc2_1.clone();
arcc3_1.x(25);
arcc3_1.y(50);
arcc_1.add(arcc1_1).add(arcc2_1).add(arcc3_1);
layer.add(arcc_1);
//arcc2
const arcc_2 = arcc_1.clone();
arcc_2.y(100);
const arcc1_2 = arcc1_1.clone();
arcc_2.add(arcc1_2);
const arcc2_2 = arcc2_1.clone();
arcc_2.add(arcc2_2);
const arcc3_2 = arcc3_1.clone();
arcc_2.add(arcc3_2);
layer.add(arcc_2);
//arcc3
const arcc_3 = arcc_2.clone();
arcc_3.y(200);
const arcc1_3 = arcc1_2.clone();
arcc_3.add(arcc1_3);
const arcc2_3 = arcc2_2.clone();
arcc_3.add(arcc2_3);
const arcc3_3 = arcc3_2.clone();
arcc_3.add(arcc3_3);
layer.add(arcc_3);
//arcc4
const arcc_4 = arcc_3.clone();
arcc_4.y(300);
const arcc1_4 = arcc1_3.clone();
arcc_4.add(arcc1_4);
const arcc2_4 = arcc2_3.clone();
arcc_4.add(arcc2_4);
const arcc3_4 = arcc3_3.clone();
arcc_4.add(arcc3_4);
layer.add(arcc_4);
//arcc5
const arcc_5 = arcc_4.clone();
arcc_5.y(400);
const arcc1_5 = arcc1_4.clone();
arcc_5.add(arcc1_5);
const arcc2_5 = arcc2_4.clone();
arcc_5.add(arcc2_5);
const arcc3_5 = arcc3_4.clone();
arcc_5.add(arcc3_5);
layer.add(arcc_5);
//arcc6
const arcc_6 = arcc_5.clone();
arcc_6.y(500);
const arcc1_6 = arcc1_5.clone();
arcc_6.add(arcc1_6);
const arcc2_6 = arcc2_5.clone();
arcc_6.add(arcc2_6);
const arcc3_6 = arcc3_5.clone();
arcc_6.add(arcc3_6);
layer.add(arcc_6);
//arcc7
const arcc_7 = arcc_6.clone();
arcc_7.y(600);
const arcc1_7 = arcc1_6.clone();
arcc_7.add(arcc1_7);
const arcc2_7 = arcc2_6.clone();
arcc_7.add(arcc2_7);
const arcc3_7 = arcc3_6.clone();
arcc_7.add(arcc3_7);
layer.add(arcc_7);
//arcc8
const arcc_8 = arcc_7.clone();
arcc_8.y(700);
const arcc1_8 = arcc1_7.clone();
arcc_8.add(arcc1_8);
const arcc2_8 = arcc2_7.clone();
arcc_8.add(arcc2_8);
const arcc3_8 = arcc3_7.clone();
arcc_8.add(arcc3_8);
layer.add(arcc_8);
//arcc9
const arcc_9 = arcc_8.clone();
arcc_9.y(800);
const arcc1_9 = arcc1_8.clone();
arcc_9.add(arcc1_9);
const arcc2_9 = arcc2_8.clone();
arcc_9.add(arcc2_9);
const arcc3_9 = arcc3_8.clone();
arcc_9.add(arcc3_9);
layer.add(arcc_9);
//arcc10
const arcc_10 = arcc_9.clone();
arcc_10.y(900);
const arcc1_10 = arcc1_9.clone();
arcc_10.add(arcc1_10);
const arcc2_10 = arcc2_9.clone();
arcc_10.add(arcc2_10);
const arcc3_10 = arcc3_9.clone();
arcc_10.add(arcc3_10);
layer.add(arcc_10);
//arcc11
const arcc_11 = arcc_10.clone();
arcc_11.y(1000);
const arcc1_11 = arcc1_10.clone();
arcc_11.add(arcc1_11);
const arcc2_11 = arcc2_10.clone();
arcc_11.add(arcc2_11);
const arcc3_11 = arcc3_10.clone();
arcc_11.add(arcc3_11);
layer.add(arcc_11);
//arcc12
const arcc_12 = arcc_11.clone();
arcc_12.y(1100);
const arcc1_12 = arcc1_11.clone();
arcc_12.add(arcc1_12);
const arcc2_12 = arcc2_11.clone();
arcc_12.add(arcc2_12);
const arcc3_12 = arcc3_11.clone();
arcc_12.add(arcc3_12);
layer.add(arcc_12);
//arcc13
const arcc_13 = arcc_12.clone();
arcc_13.y(1200);
const arcc1_13 = arcc1_12.clone();
arcc_13.add(arcc1_13);
const arcc2_13 = arcc2_12.clone();
arcc_13.add(arcc2_13);
const arcc3_13 = arcc3_12.clone();
arcc_13.add(arcc3_13);
layer.add(arcc_13);
//arcc14
const arcc_14 = arcc_13.clone();
arcc_14.y(1300);
const arcc1_14 = arcc1_13.clone();
arcc_14.add(arcc1_14);
const arcc2_14 = arcc2_13.clone();
arcc_14.add(arcc2_14);
const arcc3_14 = arcc3_13.clone();
arcc_14.add(arcc3_14);
layer.add(arcc_14);
//arcc15
const arcc_15 = arcc_14.clone();
arcc_15.y(1400);
const arcc1_15 = arcc1_14.clone();
arcc_15.add(arcc1_15);
const arcc2_15 = arcc2_14.clone();
arcc_15.add(arcc2_15);
const arcc3_15 = arcc3_14.clone();
arcc_15.add(arcc3_15);
layer.add(arcc_15);
//arcc16
const arcc_16 = arcc_15.clone();
arcc_16.y(1500);
const arcc1_16 = arcc1_15.clone();
arcc_16.add(arcc1_16);
const arcc2_16 = arcc2_15.clone();
arcc_16.add(arcc2_16);
const arcc3_16 = arcc3_15.clone();
arcc_16.add(arcc3_16);
layer.add(arcc_16);
//arcc17
const arcc_17 = arcc_16.clone();
arcc_17.y(1600);
const arcc1_17 = arcc1_16.clone();
arcc_17.add(arcc1_17);
const arcc2_17 = arcc2_16.clone();
arcc_17.add(arcc2_17);
const arcc3_17 = arcc3_16.clone();
arcc_17.add(arcc3_17);
layer.add(arcc_17);
//arcc18
const arcc_18 = arcc_17.clone();
arcc_18.y(1700);
const arcc1_18 = arcc1_17.clone();
arcc_18.add(arcc1_18);
const arcc2_18 = arcc2_17.clone();
arcc_18.add(arcc2_18);
const arcc3_18 = arcc3_17.clone();
arcc_18.add(arcc3_18);
layer.add(arcc_18);
//arcc19
const arcc_19 = arcc_18.clone();
arcc_19.y(1800);
const arcc1_19 = arcc1_18.clone();
arcc_19.add(arcc1_19);
const arcc2_19 = arcc2_18.clone();
arcc_19.add(arcc2_19);
const arcc3_19 = arcc3_18.clone();
arcc_19.add(arcc3_19);
layer.add(arcc_19);
//arcc20
const arcc_20 = arcc_19.clone();
arcc_20.y(1900);
const arcc1_20 = arcc1_19.clone();
arcc_20.add(arcc1_20);
const arcc2_20 = arcc2_19.clone();
arcc_20.add(arcc2_20);
const arcc3_20 = arcc3_19.clone();
arcc_20.add(arcc3_20);
layer.add(arcc_20);
//arcc21
const arcc_21 = arcc_20.clone();
arcc_21.y(2000);
const arcc1_21 = arcc1_20.clone();
arcc_21.add(arcc1_21);
const arcc2_21 = arcc2_20.clone();
arcc_21.add(arcc2_21);
const arcc3_21 = arcc3_20.clone();
arcc_21.add(arcc3_21);
layer.add(arcc_21);
//arcc22
const arcc_22 = arcc_21.clone();
arcc_22.y(2100);
const arcc1_22 = arcc1_21.clone();
arcc_22.add(arcc1_22);
const arcc2_22 = arcc2_21.clone();
arcc_22.add(arcc2_22);
const arcc3_22 = arcc3_21.clone();
arcc_22.add(arcc3_22);
layer.add(arcc_22);
//arcc23
const arcc_23 = arcc_22.clone();
arcc_23.y(2200);
const arcc1_23 = arcc1_22.clone();
arcc_23.add(arcc1_23);
const arcc2_23 = arcc2_22.clone();
arcc_23.add(arcc2_23);
const arcc3_23 = arcc3_22.clone();
arcc_23.add(arcc3_23);
layer.add(arcc_23);
//arcc24
const arcc_24 = arcc_23.clone();
arcc_24.y(2300);
const arcc1_24 = arcc1_23.clone();
arcc_24.add(arcc1_24);
const arcc2_24 = arcc2_23.clone();
arcc_24.add(arcc2_24);
const arcc3_24 = arcc3_23.clone();
arcc_24.add(arcc3_24);
layer.add(arcc_24);
//arcc25
const arcc_25 = arcc_24.clone();
arcc_25.y(2400);
const arcc1_25 = arcc1_24.clone();
arcc_25.add(arcc1_25);
const arcc2_25 = arcc2_24.clone();
arcc_25.add(arcc2_25);
const arcc3_25 = arcc3_24.clone();
arcc_25.add(arcc3_25);
layer.add(arcc_25);
//arcc26
const arcc_26 = arcc_25.clone();
arcc_26.y(2500);
const arcc1_26 = arcc1_25.clone();
arcc_26.add(arcc1_26);
const arcc2_26 = arcc2_25.clone();
arcc_26.add(arcc2_26);
const arcc3_26 = arcc3_25.clone();
arcc_26.add(arcc3_26);
layer.add(arcc_26);
//arcc27
const arcc_27 = arcc_26.clone();
arcc_27.y(2600);
const arcc1_27 = arcc1_26.clone();
arcc_27.add(arcc1_27);
const arcc2_27 = arcc2_26.clone();
arcc_27.add(arcc2_27);
const arcc3_27 = arcc3_26.clone();
arcc_27.add(arcc3_27);
layer.add(arcc_27);
//arcc28
const arcc_28 = arcc_27.clone();
arcc_28.y(2700);
const arcc1_28 = arcc1_27.clone();
arcc_28.add(arcc1_28);
const arcc2_28 = arcc2_27.clone();
arcc_28.add(arcc2_28);
const arcc3_28 = arcc3_27.clone();
arcc_28.add(arcc3_28);
layer.add(arcc_28);
//arcc29
const arcc_29 = arcc_28.clone();
arcc_29.y(2800);
const arcc1_29 = arcc1_28.clone();
arcc_29.add(arcc1_29);
const arcc2_29 = arcc2_28.clone();
arcc_29.add(arcc2_29);
const arcc3_29 = arcc3_28.clone();
arcc_29.add(arcc3_29);
layer.add(arcc_29);
//arcc30
const arcc_30 = arcc_29.clone();
arcc_30.y(2900);
const arcc1_30 = arcc1_29.clone();
arcc_30.add(arcc1_30);
const arcc2_30 = arcc2_29.clone();
arcc_30.add(arcc2_30);
const arcc3_30 = arcc3_29.clone();
arcc_30.add(arcc3_30);
layer.add(arcc_30);

// eight shape ends

// nine shape start
var container_9 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.53
    var x2 = width/1.36
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.015, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*1.01, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*0.99, ((y1*3)*0.95)*0.37, x2, (y1));

      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#008E97',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_9);

var ovall_1 = new Konva.Group({
    x: width/2.7,
});

var ovall1_1 = new Konva.Ellipse({
    x: width/3.3,
    y: 30,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var ovall2_1 = new Konva.Ellipse({
    x: width/3.1,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
  });

  var ovall3_1 = new Konva.Ellipse({
    x: width/2.9,
    y: 50,
    radiusX: 8,
    radiusY: 13,
    stroke: 'black',
    strokeWidth: 3,
    rotation:45,
  });
ovall_1.add(ovall1_1).add(ovall2_1).add(ovall3_1);
layer.add(ovall_1);

//ovall2
const ovall_2 = ovall_1.clone();
ovall_2.y(60);
const ovall1_2 = ovall1_1.clone();
ovall_2.add(ovall1_2);
const ovall2_2 = ovall2_1.clone();
ovall_2.add(ovall2_2);
const ovall3_2 = ovall3_1.clone();
ovall_2.add(ovall3_2);
layer.add(ovall_2);
//ovall3
const ovall_3 = ovall_2.clone();
ovall_3.y(120);
const ovall1_3 = ovall1_2.clone();
ovall_3.add(ovall1_3);
const ovall2_3 = ovall2_2.clone();
ovall_3.add(ovall2_3);
const ovall3_3 = ovall3_2.clone();
ovall_3.add(ovall3_3);
layer.add(ovall_3);
//ovall4
const ovall_4 = ovall_3.clone();
ovall_4.y(180);
const ovall1_4 = ovall1_3.clone();
ovall_4.add(ovall1_4);
const ovall2_4 = ovall2_3.clone();
ovall_4.add(ovall2_4);
const ovall3_4 = ovall3_3.clone();
ovall_4.add(ovall3_4);
layer.add(ovall_4);
//ovall5
const ovall_5 = ovall_4.clone();
ovall_5.y(240);
const ovall1_5 = ovall1_4.clone();
ovall_5.add(ovall1_5);
const ovall2_5 = ovall2_4.clone();
ovall_5.add(ovall2_5);
const ovall3_5 = ovall3_4.clone();
ovall_5.add(ovall3_5);
layer.add(ovall_5);
//ovall6
const ovall_6 = ovall_5.clone();
ovall_6.y(300);
const ovall1_6 = ovall1_5.clone();
ovall_6.add(ovall1_6);
const ovall2_6 = ovall2_5.clone();
ovall_6.add(ovall2_6);
const ovall3_6 = ovall3_5.clone();
ovall_6.add(ovall3_6);
layer.add(ovall_6);
//ovall7
const ovall_7 = ovall_6.clone();
ovall_7.y(360);
const ovall1_7 = ovall1_6.clone();
ovall_7.add(ovall1_7);
const ovall2_7 = ovall2_6.clone();
ovall_7.add(ovall2_7);
const ovall3_7 = ovall3_6.clone();
ovall_7.add(ovall3_7);
layer.add(ovall_7);
//ovall8
const ovall_8 = ovall_7.clone();
ovall_8.y(420);
const ovall1_8 = ovall1_7.clone();
ovall_8.add(ovall1_8);
const ovall2_8 = ovall2_7.clone();
ovall_8.add(ovall2_8);
const ovall3_8 = ovall3_7.clone();
ovall_8.add(ovall3_8);
layer.add(ovall_8);
//ovall9
const ovall_9 = ovall_8.clone();
ovall_9.y(480);
const ovall1_9 = ovall1_8.clone();
ovall_9.add(ovall1_9);
const ovall2_9 = ovall2_8.clone();
ovall_9.add(ovall2_9);
const ovall3_9 = ovall3_8.clone();
ovall_9.add(ovall3_9);
layer.add(ovall_9);
//ovall10
const ovall_10 = ovall_9.clone();
ovall_10.y(540);
const ovall1_10 = ovall1_9.clone();
ovall_10.add(ovall1_10);
const ovall2_10 = ovall2_9.clone();
ovall_10.add(ovall2_10);
const ovall3_10 = ovall3_9.clone();
ovall_10.add(ovall3_10);
layer.add(ovall_10);
//ovall11
const ovall_11 = ovall_10.clone();
ovall_11.y(600);
const ovall1_11 = ovall1_10.clone();
ovall_11.add(ovall1_11);
const ovall2_11 = ovall2_10.clone();
ovall_11.add(ovall2_11);
const ovall3_11 = ovall3_10.clone();
ovall_11.add(ovall3_11);
layer.add(ovall_11);
//ovall12
const ovall_12 = ovall_11.clone();
ovall_12.y(660);
const ovall1_12 = ovall1_11.clone();
ovall_12.add(ovall1_12);
const ovall2_12 = ovall2_11.clone();
ovall_12.add(ovall2_12);
const ovall3_12 = ovall3_11.clone();
ovall_12.add(ovall3_12);
layer.add(ovall_12);
//ovall13
const ovall_13 = ovall_12.clone();
ovall_13.y(720);
const ovall1_13 = ovall1_12.clone();
ovall_13.add(ovall1_13);
const ovall2_13 = ovall2_12.clone();
ovall_13.add(ovall2_13);
const ovall3_13 = ovall3_12.clone();
ovall_13.add(ovall3_13);
layer.add(ovall_13);
//ovall14
const ovall_14 = ovall_13.clone();
ovall_14.y(780);
const ovall1_14 = ovall1_13.clone();
ovall_14.add(ovall1_14);
const ovall2_14 = ovall2_13.clone();
ovall_14.add(ovall2_14);
const ovall3_14 = ovall3_13.clone();
ovall_14.add(ovall3_14);
layer.add(ovall_14);
//ovall15
const ovall_15 = ovall_14.clone();
ovall_15.y(840);
const ovall1_15 = ovall1_14.clone();
ovall_15.add(ovall1_15);
const ovall2_15 = ovall2_14.clone();
ovall_15.add(ovall2_15);
const ovall3_15 = ovall3_14.clone();
ovall_15.add(ovall3_15);
layer.add(ovall_15);
//ovall16
const ovall_16 = ovall_15.clone();
ovall_16.y(900);
const ovall1_16 = ovall1_15.clone();
ovall_16.add(ovall1_16);
const ovall2_16 = ovall2_15.clone();
ovall_16.add(ovall2_16);
const ovall3_16 = ovall3_15.clone();
ovall_16.add(ovall3_16);
layer.add(ovall_16);
//ovall17
const ovall_17 = ovall_16.clone();
ovall_17.y(960);
const ovall1_17 = ovall1_16.clone();
ovall_17.add(ovall1_17);
const ovall2_17 = ovall2_16.clone();
ovall_17.add(ovall2_17);
const ovall3_17 = ovall3_16.clone();
ovall_17.add(ovall3_17);
layer.add(ovall_17);
//ovall18
const ovall_18 = ovall_17.clone();
ovall_18.y(1020);
const ovall1_18 = ovall1_17.clone();
ovall_18.add(ovall1_18);
const ovall2_18 = ovall2_17.clone();
ovall_18.add(ovall2_18);
const ovall3_18 = ovall3_17.clone();
ovall_18.add(ovall3_18);
layer.add(ovall_18);
//ovall19
const ovall_19 = ovall_18.clone();
ovall_19.y(1080);
const ovall1_19 = ovall1_18.clone();
ovall_19.add(ovall1_19);
const ovall2_19 = ovall2_18.clone();
ovall_19.add(ovall2_19);
const ovall3_19 = ovall3_18.clone();
ovall_19.add(ovall3_19);
layer.add(ovall_19);
//ovall20
const ovall_20 = ovall_19.clone();
ovall_20.y(1140);
const ovall1_20 = ovall1_19.clone();
ovall_20.add(ovall1_20);
const ovall2_20 = ovall2_19.clone();
ovall_20.add(ovall2_20);
const ovall3_20 = ovall3_19.clone();
ovall_20.add(ovall3_20);
layer.add(ovall_20);
//ovall21
const ovall_21 = ovall_20.clone();
ovall_21.y(1200);
const ovall1_21 = ovall1_20.clone();
ovall_21.add(ovall1_21);
const ovall2_21 = ovall2_20.clone();
ovall_21.add(ovall2_21);
const ovall3_21 = ovall3_20.clone();
ovall_21.add(ovall3_21);
layer.add(ovall_21);
//ovall22
const ovall_22 = ovall_21.clone();
ovall_22.y(1260);
const ovall1_22 = ovall1_21.clone();
ovall_22.add(ovall1_22);
const ovall2_22 = ovall2_21.clone();
ovall_22.add(ovall2_22);
const ovall3_22 = ovall3_21.clone();
ovall_22.add(ovall3_22);
layer.add(ovall_22);
//ovall23
const ovall_23 = ovall_22.clone();
ovall_23.y(1320);
const ovall1_23 = ovall1_22.clone();
ovall_23.add(ovall1_23);
const ovall2_23 = ovall2_22.clone();
ovall_23.add(ovall2_23);
const ovall3_23 = ovall3_22.clone();
ovall_23.add(ovall3_23);
layer.add(ovall_23);
//ovall24
const ovall_24 = ovall_23.clone();
ovall_24.y(1380);
const ovall1_24 = ovall1_23.clone();
ovall_24.add(ovall1_24);
const ovall2_24 = ovall2_23.clone();
ovall_24.add(ovall2_24);
const ovall3_24 = ovall3_23.clone();
ovall_24.add(ovall3_24);
layer.add(ovall_24);
//ovall25
const ovall_25 = ovall_24.clone();
ovall_25.y(1440);
const ovall1_25 = ovall1_24.clone();
ovall_25.add(ovall1_25);
const ovall2_25 = ovall2_24.clone();
ovall_25.add(ovall2_25);
const ovall3_25 = ovall3_24.clone();
ovall_25.add(ovall3_25);
layer.add(ovall_25);
//ovall26
const ovall_26 = ovall_25.clone();
ovall_26.y(1500);
const ovall1_26 = ovall1_25.clone();
ovall_26.add(ovall1_26);
const ovall2_26 = ovall2_25.clone();
ovall_26.add(ovall2_26);
const ovall3_26 = ovall3_25.clone();
ovall_26.add(ovall3_26);
layer.add(ovall_26);
//ovall27
const ovall_27 = ovall_26.clone();
ovall_27.y(1560);
const ovall1_27 = ovall1_26.clone();
ovall_27.add(ovall1_27);
const ovall2_27 = ovall2_26.clone();
ovall_27.add(ovall2_27);
const ovall3_27 = ovall3_26.clone();
ovall_27.add(ovall3_27);
layer.add(ovall_27);
//ovall28
const ovall_28 = ovall_27.clone();
ovall_28.y(1620);
const ovall1_28 = ovall1_27.clone();
ovall_28.add(ovall1_28);
const ovall2_28 = ovall2_27.clone();
ovall_28.add(ovall2_28);
const ovall3_28 = ovall3_27.clone();
ovall_28.add(ovall3_28);
layer.add(ovall_28);
//ovall29
const ovall_29 = ovall_28.clone();
ovall_29.y(1680);
const ovall1_29 = ovall1_28.clone();
ovall_29.add(ovall1_29);
const ovall2_29 = ovall2_28.clone();
ovall_29.add(ovall2_29);
const ovall3_29 = ovall3_28.clone();
ovall_29.add(ovall3_29);
layer.add(ovall_29);
//ovall30
const ovall_30 = ovall_29.clone();
ovall_30.y(1740);
const ovall1_30 = ovall1_29.clone();
ovall_30.add(ovall1_30);
const ovall2_30 = ovall2_29.clone();
ovall_30.add(ovall2_30);
const ovall3_30 = ovall3_29.clone();
ovall_30.add(ovall3_30);
layer.add(ovall_30);
//ovall31
const ovall_31 = ovall_30.clone();
ovall_31.y(1800);
const ovall1_31 = ovall1_30.clone();
ovall_31.add(ovall1_31);
const ovall2_31 = ovall2_30.clone();
ovall_31.add(ovall2_31);
const ovall3_31 = ovall3_30.clone();
ovall_31.add(ovall3_31);
layer.add(ovall_31);
//ovall32
const ovall_32 = ovall_31.clone();
ovall_32.y(1860);
const ovall1_32 = ovall1_31.clone();
ovall_32.add(ovall1_32);
const ovall2_32 = ovall2_31.clone();
ovall_32.add(ovall2_32);
const ovall3_32 = ovall3_31.clone();
ovall_32.add(ovall3_32);
layer.add(ovall_32);
//ovall33
const ovall_33 = ovall_32.clone();
ovall_33.y(1920);
const ovall1_33 = ovall1_32.clone();
ovall_33.add(ovall1_33);
const ovall2_33 = ovall2_32.clone();
ovall_33.add(ovall2_33);
const ovall3_33 = ovall3_32.clone();
ovall_33.add(ovall3_33);
layer.add(ovall_33);
//ovall34
const ovall_34 = ovall_33.clone();
ovall_34.y(1980);
const ovall1_34 = ovall1_33.clone();
ovall_34.add(ovall1_34);
const ovall2_34 = ovall2_33.clone();
ovall_34.add(ovall2_34);
const ovall3_34 = ovall3_33.clone();
ovall_34.add(ovall3_34);
layer.add(ovall_34);
//ovall35
const ovall_35 = ovall_34.clone();
ovall_35.y(2040);
const ovall1_35 = ovall1_34.clone();
ovall_35.add(ovall1_35);
const ovall2_35 = ovall2_34.clone();
ovall_35.add(ovall2_35);
const ovall3_35 = ovall3_34.clone();
ovall_35.add(ovall3_35);
layer.add(ovall_35);
//ovall36
const ovall_36 = ovall_35.clone();
ovall_36.y(2100);
const ovall1_36 = ovall1_35.clone();
ovall_36.add(ovall1_36);
const ovall2_36 = ovall2_35.clone();
ovall_36.add(ovall2_36);
const ovall3_36 = ovall3_35.clone();
ovall_36.add(ovall3_36);
layer.add(ovall_36);
//ovall37
const ovall_37 = ovall_36.clone();
ovall_37.y(2160);
const ovall1_37 = ovall1_36.clone();
ovall_37.add(ovall1_37);
const ovall2_37 = ovall2_36.clone();
ovall_37.add(ovall2_37);
const ovall3_37 = ovall3_36.clone();
ovall_37.add(ovall3_37);
layer.add(ovall_37);
//ovall38
const ovall_38 = ovall_37.clone();
ovall_38.y(2220);
const ovall1_38 = ovall1_37.clone();
ovall_38.add(ovall1_38);
const ovall2_38 = ovall2_37.clone();
ovall_38.add(ovall2_38);
const ovall3_38 = ovall3_37.clone();
ovall_38.add(ovall3_38);
layer.add(ovall_38);
//ovall39
const ovall_39 = ovall_38.clone();
ovall_39.y(2280);
const ovall1_39 = ovall1_38.clone();
ovall_39.add(ovall1_39);
const ovall2_39 = ovall2_38.clone();
ovall_39.add(ovall2_39);
const ovall3_39 = ovall3_38.clone();
ovall_39.add(ovall3_39);
layer.add(ovall_39);
//ovall40
const ovall_40 = ovall_39.clone();
ovall_40.y(2340);
const ovall1_40 = ovall1_39.clone();
ovall_40.add(ovall1_40);
const ovall2_40 = ovall2_39.clone();
ovall_40.add(ovall2_40);
const ovall3_40 = ovall3_39.clone();
ovall_40.add(ovall3_40);
layer.add(ovall_40);
//ovall41
const ovall_41 = ovall_40.clone();
ovall_41.y(2400);
const ovall1_41 = ovall1_40.clone();
ovall_41.add(ovall1_41);
const ovall2_41 = ovall2_40.clone();
ovall_41.add(ovall2_41);
const ovall3_41 = ovall3_40.clone();
ovall_41.add(ovall3_41);
layer.add(ovall_41);
//ovall42
const ovall_42 = ovall_41.clone();
ovall_42.y(2460);
const ovall1_42 = ovall1_41.clone();
ovall_42.add(ovall1_42);
const ovall2_42 = ovall2_41.clone();
ovall_42.add(ovall2_42);
const ovall3_42 = ovall3_41.clone();
ovall_42.add(ovall3_42);
layer.add(ovall_42);
//ovall43
const ovall_43 = ovall_42.clone();
ovall_43.y(2520);
const ovall1_43 = ovall1_42.clone();
ovall_43.add(ovall1_43);
const ovall2_43 = ovall2_42.clone();
ovall_43.add(ovall2_43);
const ovall3_43 = ovall3_42.clone();
ovall_43.add(ovall3_43);
layer.add(ovall_43);
//ovall44
const ovall_44 = ovall_43.clone();
ovall_44.y(2580);
const ovall1_44 = ovall1_43.clone();
ovall_44.add(ovall1_44);
const ovall2_44 = ovall2_43.clone();
ovall_44.add(ovall2_44);
const ovall3_44 = ovall3_43.clone();
ovall_44.add(ovall3_44);
layer.add(ovall_44);

// nine shape ends

// ten shape starts
var container_10 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.3
    var x2 = width/1.2
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*0.94, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.01, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*1.0, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*0.98, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.01, ((y1*3)*0.95)*0.37, x2, (y1));

      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#6082B6',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_10);

var star_1 = new Konva.Group({
});

var star1_1 = new Konva.Star({
    x: width/1.25,
    y: height / 16,
    numPoints: 9,
    innerRadius: 15,
    outerRadius: 30,
    stroke: 'black',
    strokeWidth: 4,
  });
//star2
const star_2 = star_1.clone();
star_2.y(60);
const star1_2 = star1_1.clone();
star_2.add(star1_2);
layer.add(star_2);
//star3
const star_3 = star_2.clone();
star_3.y(120);
const star1_3 = star1_2.clone();
star_3.add(star1_3);
layer.add(star_3);
//star4
const star_4 = star_3.clone();
star_4.y(180);
const star1_4 = star1_3.clone();
star_4.add(star1_4);
layer.add(star_4);
//star5
const star_5 = star_4.clone();
star_5.y(240);
const star1_5 = star1_4.clone();
star_5.add(star1_5);
layer.add(star_5);
//star6
const star_6 = star_5.clone();
star_6.y(300);
const star1_6 = star1_5.clone();
star_6.add(star1_6);
layer.add(star_6);
//star7
const star_7 = star_6.clone();
star_7.y(360);
const star1_7 = star1_6.clone();
star_7.add(star1_7);
layer.add(star_7);
//star8
const star_8 = star_7.clone();
star_8.y(420);
const star1_8 = star1_7.clone();
star_8.add(star1_8);
layer.add(star_8);
//star9
const star_9 = star_8.clone();
star_9.y(480);
const star1_9 = star1_8.clone();
star_9.add(star1_9);
layer.add(star_9);
//star10
const star_10 = star_9.clone();
star_10.y(540);
const star1_10 = star1_9.clone();
star_10.add(star1_10);
layer.add(star_10);
//star11
const star_11 = star_10.clone();
star_11.y(600);
const star1_11 = star1_10.clone();
star_11.add(star1_11);
layer.add(star_11);
//star12
const star_12 = star_11.clone();
star_12.y(660);
const star1_12 = star1_11.clone();
star_12.add(star1_12);
layer.add(star_12);
//star13
const star_13 = star_12.clone();
star_13.y(720);
const star1_13 = star1_12.clone();
star_13.add(star1_13);
layer.add(star_13);
//star14
const star_14 = star_13.clone();
star_14.y(780);
const star1_14 = star1_13.clone();
star_14.add(star1_14);
layer.add(star_14);
//star15
const star_15 = star_14.clone();
star_15.y(840);
const star1_15 = star1_14.clone();
star_15.add(star1_15);
layer.add(star_15);
//star16
const star_16 = star_15.clone();
star_16.y(900);
const star1_16 = star1_15.clone();
star_16.add(star1_16);
layer.add(star_16);
//star17
const star_17 = star_16.clone();
star_17.y(960);
const star1_17 = star1_16.clone();
star_17.add(star1_17);
layer.add(star_17);
//star18
const star_18 = star_17.clone();
star_18.y(1020);
const star1_18 = star1_17.clone();
star_18.add(star1_18);
layer.add(star_18);
//star19
const star_19 = star_18.clone();
star_19.y(1080);
const star1_19 = star1_18.clone();
star_19.add(star1_19);
layer.add(star_19);
//star20
const star_20 = star_19.clone();
star_20.y(1140);
const star1_20 = star1_19.clone();
star_20.add(star1_20);
layer.add(star_20);
//star21
const star_21 = star_20.clone();
star_21.y(1200);
const star1_21 = star1_20.clone();
star_21.add(star1_21);
layer.add(star_21);
//star22
const star_22 = star_21.clone();
star_22.y(1260);
const star1_22 = star1_21.clone();
star_22.add(star1_22);
layer.add(star_22);
//star23
const star_23 = star_22.clone();
star_23.y(1320);
const star1_23 = star1_22.clone();
star_23.add(star1_23);
layer.add(star_23);
//star24
const star_24 = star_23.clone();
star_24.y(1380);
const star1_24 = star1_23.clone();
star_24.add(star1_24);
layer.add(star_24);
//star25
const star_25 = star_24.clone();
star_25.y(1440);
const star1_25 = star1_24.clone();
star_25.add(star1_25);
layer.add(star_25);
//star26
const star_26 = star_25.clone();
star_26.y(1500);
const star1_26 = star1_25.clone();
star_26.add(star1_26);
layer.add(star_26);
//star27
const star_27 = star_26.clone();
star_27.y(1560);
const star1_27 = star1_26.clone();
star_27.add(star1_27);
layer.add(star_27);
//star28
const star_28 = star_27.clone();
star_28.y(1620);
const star1_28 = star1_27.clone();
star_28.add(star1_28);
layer.add(star_28);
//star29
const star_29 = star_28.clone();
star_29.y(1680);
const star1_29 = star1_28.clone();
star_29.add(star1_29);
layer.add(star_29);
//star30
const star_30 = star_29.clone();
star_30.y(1740);
const star1_30 = star1_29.clone();
star_30.add(star1_30);
layer.add(star_30);
//star31
const star_31 = star_30.clone();
star_31.y(1800);
const star1_31 = star1_30.clone();
star_31.add(star1_31);
layer.add(star_31);
//star32
const star_32 = star_31.clone();
star_32.y(1860);
const star1_32 = star1_31.clone();
star_32.add(star1_32);
layer.add(star_32);
//star33
const star_33 = star_32.clone();
star_33.y(1920);
const star1_33 = star1_32.clone();
star_33.add(star1_33);
layer.add(star_33);
//star34
const star_34 = star_33.clone();
star_34.y(1980);
const star1_34 = star1_33.clone();
star_34.add(star1_34);
layer.add(star_34);
//star35
const star_35 = star_34.clone();
star_35.y(2040);
const star1_35 = star1_34.clone();
star_35.add(star1_35);
layer.add(star_35);
//star36
const star_36 = star_35.clone();
star_36.y(2100);
const star1_36 = star1_35.clone();
star_36.add(star1_36);
layer.add(star_36);
//star37
const star_37 = star_36.clone();
star_37.y(2160);
const star1_37 = star1_36.clone();
star_37.add(star1_37);
layer.add(star_37);
//star38
const star_38 = star_37.clone();
star_38.y(2220);
const star1_38 = star1_37.clone();
star_38.add(star1_38);
layer.add(star_38);
//star39
const star_39 = star_38.clone();
star_39.y(2280);
const star1_39 = star1_38.clone();
star_39.add(star1_39);
layer.add(star_39);
//star40
const star_40 = star_39.clone();
star_40.y(2340);
const star1_40 = star1_39.clone();
star_40.add(star1_40);
layer.add(star_40);
//star41
const star_41 = star_40.clone();
star_41.y(2400);
const star1_41 = star1_40.clone();
star_41.add(star1_41);
layer.add(star_41);
//star42
const star_42 = star_41.clone();
star_42.y(2460);
const star1_42 = star1_41.clone();
star_42.add(star1_42);
layer.add(star_42);
//star43
const star_43 = star_42.clone();
star_43.y(2520);
const star1_43 = star1_42.clone();
star_43.add(star1_43);
layer.add(star_43);
//star44
const star_44 = star_43.clone();
star_44.y(2580);
const star1_44 = star1_43.clone();
star_44.add(star1_44);
layer.add(star_44);
//star45
const star_45 = star_44.clone();
star_45.y(2640);
const star1_45 = star1_44.clone();
star_45.add(star1_45);
layer.add(star_45);
//star46
const star_46 = star_45.clone();
star_46.y(2700);
const star1_46 = star1_45.clone();
star_46.add(star1_46);
layer.add(star_46);
//star47
const star_47 = star_46.clone();
star_47.y(2760);
const star1_47 = star1_46.clone();
star_47.add(star1_47);
layer.add(star_47);
//star48
const star_48 = star_47.clone();
star_48.y(2820);
const star1_48 = star1_47.clone();
star_48.add(star1_48);
layer.add(star_48);
//star49
const star_49 = star_48.clone();
star_49.y(2880);
const star1_49 = star1_48.clone();
star_49.add(star1_49);
layer.add(star_49);
//star50
const star_50 = star_49.clone();
star_50.y(2940);
const star1_50 = star1_49.clone();
star_50.add(star1_50);
layer.add(star_50);
//star51
const star_51 = star_50.clone();
star_51.y(3000);
const star1_51 = star1_50.clone();
star_51.add(star1_51);
layer.add(star_51);
//star52
const star_52 = star_51.clone();
star_52.y(3060);
const star1_52 = star1_51.clone();
star_52.add(star1_52);
layer.add(star_52);
//star53
const star_53 = star_52.clone();
star_53.y(3120);
const star1_53 = star1_52.clone();
star_53.add(star1_53);
layer.add(star_53);
//star54
const star_54 = star_53.clone();
star_54.y(3180);
const star1_54 = star1_53.clone();
star_54.add(star1_54);
layer.add(star_54);
//star55
const star_55 = star_54.clone();
star_55.y(3240);
const star1_55 = star1_54.clone();
star_55.add(star1_55);
layer.add(star_55);
//star56
const star_56 = star_55.clone();
star_56.y(3300);
const star1_56 = star1_55.clone();
star_56.add(star1_56);
layer.add(star_56);
//star57
const star_57 = star_56.clone();
star_57.y(3360);
const star1_57 = star1_56.clone();
star_57.add(star1_57);
layer.add(star_57);
//star58
const star_58 = star_57.clone();
star_58.y(3420);
const star1_58 = star1_57.clone();
star_58.add(star1_58);
layer.add(star_58);

// ten shape ends

// eleven shape starts
var lines_11 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.16
    var x2 = width/1.1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.0, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.02, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*1.02, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*1.02, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.02, ((y1*3)*0.95)*0.37, x2, (y1));

      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#99FFFF',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(lines_11);
// eleven shape ends

// twelve shape starts
var container_11 = new Konva.Shape({
    sceneFunc: function (context, shape) {
    var x1 = width/1.09
    var x2 = width/1
    var y1 = height
      context.beginPath();
      context.moveTo(x1,0);
      context.quadraticCurveTo(x1*1, (y1*0.5)*0.36, x1, y1*0.5);
      context.quadraticCurveTo(x1*1.03, (y1*0.5)*1.31, x1, y1*1);
      context.lineTo(x2, y1);
      context.quadraticCurveTo(x2*0.97, (y1*0.5)*1.42, x2, y1*0.5);
      context.quadraticCurveTo(x2*1.03, (y1*0.5)*0.42, x2, y1*0);
      context.moveTo(x1, y1);
      context.quadraticCurveTo((x1)*1.02, ((y1*3)*0.75)*0.41, (x1), (y1*3)*0.5);
      context.quadraticCurveTo((x1)*1.02, ((y1*3)*0.75)*1.32, x1, (y1*3)*1);
      context.lineTo(x2, y1*3);
      context.quadraticCurveTo((x2)*1.02, ((y1*3)*0.75)*1.38, x2, (y1*3)*0.5);
      context.quadraticCurveTo(x2*1.02, ((y1*3)*0.95)*0.37, x2, (y1));

      //   context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: '#4C516D',
    stroke: 'black',
    strokeWidth: 3,
  });

layer.add(container_11);

//akofena
var akofena_1 = new Konva.Group({
    x: width/1.6,
    y: -170,
    scaleX: 0.5,
    scaleY: 0.5,
  });
  //circle left
  var akofena1_1 = new Konva.Circle({
    x: 1015,
    y: 500,
    radius: 8,
    stroke: 'black',
    strokeWidth: 3,
  });
  
  //rect left 
  var akofena2_1 = new Konva.Rect({
    x: 1012.5,
    y: 482,
    width: 5,
    height: 10,
    stroke: 'black',
    strokeWidth: 1,
  });
  //circle2
  const akofena3_1 = akofena1_1.clone();
  akofena3_1.y(473);
  //circle3
  //line1
  var akofena4_1 = new Konva.Shape({
    sceneFunc: function (context, shape) {
      context.beginPath();
      context.moveTo(1012, 465);
      context.quadraticCurveTo(950, 370, 1020, 350);
      context.quadraticCurveTo(1000, 390, 1018, 465);
      context.closePath();
     // (!) Konva specific method, it is very important
     context.fillStrokeShape(shape);
    },
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  });
  //circle in rod
  const akofena5_1 = akofena1_1.clone();
  akofena5_1 .y(385);
  akofena5_1.x(1000);
  akofena5_1.fill('red');
  akofena5_1.radius(5);
   //circle in rod 2
  const akofena6_1 = akofena5_1.clone();
  akofena6_1.y(400); 

//akofena2
const akofena_2 = akofena_1.clone();
akofena_2.y(-60);
const akofena1_2 = akofena1_1.clone();
akofena_2.add(akofena1_2);
const akofena2_2 = akofena2_1.clone();
akofena_2.add(akofena2_2);
const akofena3_2 = akofena3_1.clone();
akofena_2.add(akofena3_2);
const akofena4_2 = akofena4_1.clone();
akofena_2.add(akofena4_2);
const akofena5_2 = akofena5_1.clone();
akofena_2.add(akofena5_2);
const akofena6_2 = akofena6_1.clone();
akofena_2.add(akofena6_2);
layer.add(akofena_2);
//akofena3
const akofena_3 = akofena_2.clone();
akofena_3.y(30);
const akofena1_3 = akofena1_2.clone();
akofena_3.add(akofena1_3);
const akofena2_3 = akofena2_2.clone();
akofena_3.add(akofena2_3);
const akofena3_3 = akofena3_2.clone();
akofena_3.add(akofena3_3);
const akofena4_3 = akofena4_2.clone();
akofena_3.add(akofena4_3);
const akofena5_3 = akofena5_2.clone();
akofena_3.add(akofena5_3);
const akofena6_3 = akofena6_2.clone();
akofena_3.add(akofena6_3);
layer.add(akofena_3);
//akofena4
const akofena_4 = akofena_3.clone();
akofena_4.y(120);
const akofena1_4 = akofena1_3.clone();
akofena_4.add(akofena1_4);
const akofena2_4 = akofena2_3.clone();
akofena_4.add(akofena2_4);
const akofena3_4 = akofena3_3.clone();
akofena_4.add(akofena3_4);
const akofena4_4 = akofena4_3.clone();
akofena_4.add(akofena4_4);
const akofena5_4 = akofena5_3.clone();
akofena_4.add(akofena5_4);
const akofena6_4 = akofena6_3.clone();
akofena_4.add(akofena6_4);
layer.add(akofena_4);
//akofena5
const akofena_5 = akofena_4.clone();
akofena_5.y(210);
const akofena1_5 = akofena1_4.clone();
akofena_5.add(akofena1_5);
const akofena2_5 = akofena2_4.clone();
akofena_5.add(akofena2_5);
const akofena3_5 = akofena3_4.clone();
akofena_5.add(akofena3_5);
const akofena4_5 = akofena4_4.clone();
akofena_5.add(akofena4_5);
const akofena5_5 = akofena5_4.clone();
akofena_5.add(akofena5_5);
const akofena6_5 = akofena6_4.clone();
akofena_5.add(akofena6_5);
layer.add(akofena_5);
//akofena6
const akofena_6 = akofena_5.clone();
akofena_6.y(300);
const akofena1_6 = akofena1_5.clone();
akofena_6.add(akofena1_6);
const akofena2_6 = akofena2_5.clone();
akofena_6.add(akofena2_6);
const akofena3_6 = akofena3_5.clone();
akofena_6.add(akofena3_6);
const akofena4_6 = akofena4_5.clone();
akofena_6.add(akofena4_6);
const akofena5_6 = akofena5_5.clone();
akofena_6.add(akofena5_6);
const akofena6_6 = akofena6_5.clone();
akofena_6.add(akofena6_6);
layer.add(akofena_6);
//akofena7
const akofena_7 = akofena_6.clone();
akofena_7.y(390);
const akofena1_7 = akofena1_6.clone();
akofena_7.add(akofena1_7);
const akofena2_7 = akofena2_6.clone();
akofena_7.add(akofena2_7);
const akofena3_7 = akofena3_6.clone();
akofena_7.add(akofena3_7);
const akofena4_7 = akofena4_6.clone();
akofena_7.add(akofena4_7);
const akofena5_7 = akofena5_6.clone();
akofena_7.add(akofena5_7);
const akofena6_7 = akofena6_6.clone();
akofena_7.add(akofena6_7);
layer.add(akofena_7);
//akofena8
const akofena_8 = akofena_7.clone();
akofena_8.y(480);
const akofena1_8 = akofena1_7.clone();
akofena_8.add(akofena1_8);
const akofena2_8 = akofena2_7.clone();
akofena_8.add(akofena2_8);
const akofena3_8 = akofena3_7.clone();
akofena_8.add(akofena3_8);
const akofena4_8 = akofena4_7.clone();
akofena_8.add(akofena4_8);
const akofena5_8 = akofena5_7.clone();
akofena_8.add(akofena5_8);
const akofena6_8 = akofena6_7.clone();
akofena_8.add(akofena6_8);
layer.add(akofena_8);
//akofena9
const akofena_9 = akofena_8.clone();
akofena_9.y(570);
const akofena1_9 = akofena1_8.clone();
akofena_9.add(akofena1_9);
const akofena2_9 = akofena2_8.clone();
akofena_9.add(akofena2_9);
const akofena3_9 = akofena3_8.clone();
akofena_9.add(akofena3_9);
const akofena4_9 = akofena4_8.clone();
akofena_9.add(akofena4_9);
const akofena5_9 = akofena5_8.clone();
akofena_9.add(akofena5_9);
const akofena6_9 = akofena6_8.clone();
akofena_9.add(akofena6_9);
layer.add(akofena_9);
//akofena10
const akofena_10 = akofena_9.clone();
akofena_10.y(660);
const akofena1_10 = akofena1_9.clone();
akofena_10.add(akofena1_10);
const akofena2_10 = akofena2_9.clone();
akofena_10.add(akofena2_10);
const akofena3_10 = akofena3_9.clone();
akofena_10.add(akofena3_10);
const akofena4_10 = akofena4_9.clone();
akofena_10.add(akofena4_10);
const akofena5_10 = akofena5_9.clone();
akofena_10.add(akofena5_10);
const akofena6_10 = akofena6_9.clone();
akofena_10.add(akofena6_10);
layer.add(akofena_10);
//akofena11
const akofena_11 = akofena_10.clone();
akofena_11.y(750);
const akofena1_11 = akofena1_10.clone();
akofena_11.add(akofena1_11);
const akofena2_11 = akofena2_10.clone();
akofena_11.add(akofena2_11);
const akofena3_11 = akofena3_10.clone();
akofena_11.add(akofena3_11);
const akofena4_11 = akofena4_10.clone();
akofena_11.add(akofena4_11);
const akofena5_11 = akofena5_10.clone();
akofena_11.add(akofena5_11);
const akofena6_11 = akofena6_10.clone();
akofena_11.add(akofena6_11);
layer.add(akofena_11);
//akofena12
const akofena_12 = akofena_11.clone();
akofena_12.y(840);
const akofena1_12 = akofena1_11.clone();
akofena_12.add(akofena1_12);
const akofena2_12 = akofena2_11.clone();
akofena_12.add(akofena2_12);
const akofena3_12 = akofena3_11.clone();
akofena_12.add(akofena3_12);
const akofena4_12 = akofena4_11.clone();
akofena_12.add(akofena4_12);
const akofena5_12 = akofena5_11.clone();
akofena_12.add(akofena5_12);
const akofena6_12 = akofena6_11.clone();
akofena_12.add(akofena6_12);
layer.add(akofena_12);
//akofena13
const akofena_13 = akofena_12.clone();
akofena_13.y(930);
const akofena1_13 = akofena1_12.clone();
akofena_13.add(akofena1_13);
const akofena2_13 = akofena2_12.clone();
akofena_13.add(akofena2_13);
const akofena3_13 = akofena3_12.clone();
akofena_13.add(akofena3_13);
const akofena4_13 = akofena4_12.clone();
akofena_13.add(akofena4_13);
const akofena5_13 = akofena5_12.clone();
akofena_13.add(akofena5_13);
const akofena6_13 = akofena6_12.clone();
akofena_13.add(akofena6_13);
layer.add(akofena_13);
//akofena14
const akofena_14 = akofena_13.clone();
akofena_14.y(1020);
const akofena1_14 = akofena1_13.clone();
akofena_14.add(akofena1_14);
const akofena2_14 = akofena2_13.clone();
akofena_14.add(akofena2_14);
const akofena3_14 = akofena3_13.clone();
akofena_14.add(akofena3_14);
const akofena4_14 = akofena4_13.clone();
akofena_14.add(akofena4_14);
const akofena5_14 = akofena5_13.clone();
akofena_14.add(akofena5_14);
const akofena6_14 = akofena6_13.clone();
akofena_14.add(akofena6_14);
layer.add(akofena_14);
//akofena15
const akofena_15 = akofena_14.clone();
akofena_15.y(1110);
const akofena1_15 = akofena1_14.clone();
akofena_15.add(akofena1_15);
const akofena2_15 = akofena2_14.clone();
akofena_15.add(akofena2_15);
const akofena3_15 = akofena3_14.clone();
akofena_15.add(akofena3_15);
const akofena4_15 = akofena4_14.clone();
akofena_15.add(akofena4_15);
const akofena5_15 = akofena5_14.clone();
akofena_15.add(akofena5_15);
const akofena6_15 = akofena6_14.clone();
akofena_15.add(akofena6_15);
layer.add(akofena_15);
//akofena16
const akofena_16 = akofena_15.clone();
akofena_16.y(1200);
const akofena1_16 = akofena1_15.clone();
akofena_16.add(akofena1_16);
const akofena2_16 = akofena2_15.clone();
akofena_16.add(akofena2_16);
const akofena3_16 = akofena3_15.clone();
akofena_16.add(akofena3_16);
const akofena4_16 = akofena4_15.clone();
akofena_16.add(akofena4_16);
const akofena5_16 = akofena5_15.clone();
akofena_16.add(akofena5_16);
const akofena6_16 = akofena6_15.clone();
akofena_16.add(akofena6_16);
layer.add(akofena_16);
//akofena17
const akofena_17 = akofena_16.clone();
akofena_17.y(1290);
const akofena1_17 = akofena1_16.clone();
akofena_17.add(akofena1_17);
const akofena2_17 = akofena2_16.clone();
akofena_17.add(akofena2_17);
const akofena3_17 = akofena3_16.clone();
akofena_17.add(akofena3_17);
const akofena4_17 = akofena4_16.clone();
akofena_17.add(akofena4_17);
const akofena5_17 = akofena5_16.clone();
akofena_17.add(akofena5_17);
const akofena6_17 = akofena6_16.clone();
akofena_17.add(akofena6_17);
layer.add(akofena_17);
//akofena18
const akofena_18 = akofena_17.clone();
akofena_18.y(1380);
const akofena1_18 = akofena1_17.clone();
akofena_18.add(akofena1_18);
const akofena2_18 = akofena2_17.clone();
akofena_18.add(akofena2_18);
const akofena3_18 = akofena3_17.clone();
akofena_18.add(akofena3_18);
const akofena4_18 = akofena4_17.clone();
akofena_18.add(akofena4_18);
const akofena5_18 = akofena5_17.clone();
akofena_18.add(akofena5_18);
const akofena6_18 = akofena6_17.clone();
akofena_18.add(akofena6_18);
layer.add(akofena_18);
//akofena19
const akofena_19 = akofena_18.clone();
akofena_19.y(1470);
const akofena1_19 = akofena1_18.clone();
akofena_19.add(akofena1_19);
const akofena2_19 = akofena2_18.clone();
akofena_19.add(akofena2_19);
const akofena3_19 = akofena3_18.clone();
akofena_19.add(akofena3_19);
const akofena4_19 = akofena4_18.clone();
akofena_19.add(akofena4_19);
const akofena5_19 = akofena5_18.clone();
akofena_19.add(akofena5_19);
const akofena6_19 = akofena6_18.clone();
akofena_19.add(akofena6_19);
layer.add(akofena_19);
//akofena20
const akofena_20 = akofena_19.clone();
akofena_20.y(1560);
const akofena1_20 = akofena1_19.clone();
akofena_20.add(akofena1_20);
const akofena2_20 = akofena2_19.clone();
akofena_20.add(akofena2_20);
const akofena3_20 = akofena3_19.clone();
akofena_20.add(akofena3_20);
const akofena4_20 = akofena4_19.clone();
akofena_20.add(akofena4_20);
const akofena5_20 = akofena5_19.clone();
akofena_20.add(akofena5_20);
const akofena6_20 = akofena6_19.clone();
akofena_20.add(akofena6_20);
layer.add(akofena_20);
//akofena21
const akofena_21 = akofena_20.clone();
akofena_21.y(1650);
const akofena1_21 = akofena1_20.clone();
akofena_21.add(akofena1_21);
const akofena2_21 = akofena2_20.clone();
akofena_21.add(akofena2_21);
const akofena3_21 = akofena3_20.clone();
akofena_21.add(akofena3_21);
const akofena4_21 = akofena4_20.clone();
akofena_21.add(akofena4_21);
const akofena5_21 = akofena5_20.clone();
akofena_21.add(akofena5_21);
const akofena6_21 = akofena6_20.clone();
akofena_21.add(akofena6_21);
layer.add(akofena_21);
//akofena22
const akofena_22 = akofena_21.clone();
akofena_22.y(1740);
const akofena1_22 = akofena1_21.clone();
akofena_22.add(akofena1_22);
const akofena2_22 = akofena2_21.clone();
akofena_22.add(akofena2_22);
const akofena3_22 = akofena3_21.clone();
akofena_22.add(akofena3_22);
const akofena4_22 = akofena4_21.clone();
akofena_22.add(akofena4_22);
const akofena5_22 = akofena5_21.clone();
akofena_22.add(akofena5_22);
const akofena6_22 = akofena6_21.clone();
akofena_22.add(akofena6_22);
layer.add(akofena_22);
//akofena23
const akofena_23 = akofena_22.clone();
akofena_23.y(1830);
const akofena1_23 = akofena1_22.clone();
akofena_23.add(akofena1_23);
const akofena2_23 = akofena2_22.clone();
akofena_23.add(akofena2_23);
const akofena3_23 = akofena3_22.clone();
akofena_23.add(akofena3_23);
const akofena4_23 = akofena4_22.clone();
akofena_23.add(akofena4_23);
const akofena5_23 = akofena5_22.clone();
akofena_23.add(akofena5_23);
const akofena6_23 = akofena6_22.clone();
akofena_23.add(akofena6_23);
layer.add(akofena_23);
//akofena24
const akofena_24 = akofena_23.clone();
akofena_24.y(1920);
const akofena1_24 = akofena1_23.clone();
akofena_24.add(akofena1_24);
const akofena2_24 = akofena2_23.clone();
akofena_24.add(akofena2_24);
const akofena3_24 = akofena3_23.clone();
akofena_24.add(akofena3_24);
const akofena4_24 = akofena4_23.clone();
akofena_24.add(akofena4_24);
const akofena5_24 = akofena5_23.clone();
akofena_24.add(akofena5_24);
const akofena6_24 = akofena6_23.clone();
akofena_24.add(akofena6_24);
layer.add(akofena_24);
//akofena25
const akofena_25 = akofena_24.clone();
akofena_25.y(2010);
const akofena1_25 = akofena1_24.clone();
akofena_25.add(akofena1_25);
const akofena2_25 = akofena2_24.clone();
akofena_25.add(akofena2_25);
const akofena3_25 = akofena3_24.clone();
akofena_25.add(akofena3_25);
const akofena4_25 = akofena4_24.clone();
akofena_25.add(akofena4_25);
const akofena5_25 = akofena5_24.clone();
akofena_25.add(akofena5_25);
const akofena6_25 = akofena6_24.clone();
akofena_25.add(akofena6_25);
layer.add(akofena_25);

  



layer.add(oneline_6);


layer.add(lines_6);

akofena_1.add(akofena1_1).add(akofena2_1).add(akofena3_1).add(akofena4_1).add(akofena5_1).add(akofena6_1);
layer.add(akofena_1);

star_1.add(star1_1);
layer.add(star_1);

gyaw_1.add(gyaw1_1).add(gyaw2_1);
layer.add(gyaw_1);

oval_1.add(oval1_1).add(oval2_1).add(oval3_1);
layer.add(oval_1);

oval_2.add(oval1_2).add(oval2_2).add(oval3_2);
layer.add(oval_2);

oval_3.add(oval1_3).add(oval2_3).add(oval3_3);
layer.add(oval_3);

oval_4.add(oval1_4).add(oval2_4).add(oval3_4);
layer.add(oval_4);

oval_5.add(oval1_5).add(oval2_5).add(oval3_5);
layer.add(oval_5);

oval_6.add(oval1_6).add(oval2_6).add(oval3_6);
layer.add(oval_6);

oval_7.add(oval1_7).add(oval2_7).add(oval3_7);
layer.add(oval_7);

oval_8.add(oval1_8).add(oval2_8).add(oval3_8);
layer.add(oval_8);

oval_9.add(oval1_9).add(oval2_9).add(oval3_9);
layer.add(oval_9);

oval_10.add(oval1_10).add(oval2_10).add(oval3_10);
layer.add(oval_10);

oval_11.add(oval1_11).add(oval2_11).add(oval3_11);
layer.add(oval_11);

oval_12.add(oval1_12).add(oval2_12).add(oval3_12);
layer.add(oval_12);

oval_13.add(oval1_13).add(oval2_13).add(oval3_13);
layer.add(oval_13);

oval_14.add(oval1_14).add(oval2_14).add(oval3_14);
layer.add(oval_14);

oval_15.add(oval1_15).add(oval2_15).add(oval3_15);
layer.add(oval_15);

circle_1.add(circle1_1).add(circle2_1);
layer.add(circle_1);

circle_2.add(circle1_2).add(circle2_2);
layer.add(circle_2);

circle_3.add(circle1_3).add(circle2_3);
layer.add(circle_3);

circle_4.add(circle1_4).add(circle2_4);
layer.add(circle_4);

circle_5.add(circle1_5).add(circle2_5);
layer.add(circle_5);

circle_6.add(circle1_6).add(circle2_6);
layer.add(circle_6);

circle_7.add(circle1_7).add(circle2_7);
layer.add(circle_7);

circle_8.add(circle1_8).add(circle2_8);
layer.add(circle_8);


gyawu_1.add(gyawu1_1).add(gyawu2_1);
layer.add(gyawu_1);

gyawu_2.add(gyawu1_2).add(gyawu2_2);
layer.add(gyawu_2);

gyawu_3.add(gyawu1_3).add(gyawu2_3);
layer.add(gyawu_3);

gyawu_4.add(gyawu1_4).add(gyawu2_4);
layer.add(gyawu_4);

gyawu_5.add(gyawu1_5).add(gyawu2_5);
layer.add(gyawu_5);

gyawu_6.add(gyawu1_6).add(gyawu2_6);
layer.add(gyawu_6);

gyawu_7.add(gyawu1_7).add(gyawu2_7);
layer.add(gyawu_7);


gyawu_8.add(gyawu1_8).add(gyawu2_8);
layer.add(gyawu_8);


gyawu_9.add(gyawu1_9).add(gyawu2_9);
layer.add(gyawu_9);

gyawu_10.add(gyawu1_10).add(gyawu2_10);
layer.add(gyawu_10);

gyawu_11.add(gyawu1_11).add(gyawu2_11);
layer.add(gyawu_11);

gyawu_12.add(gyawu1_12).add(gyawu2_12);
layer.add(gyawu_12);

gyawu_13.add(gyawu1_13).add(gyawu2_13);
layer.add(gyawu_13);

gyawu_14.add(gyawu1_14).add(gyawu2_14);
layer.add(gyawu_14);

gyawu_15.add(gyawu1_15).add(gyawu2_15);
layer.add(gyawu_15);

layer.add(lines_2);

arc_1.add(arc1_1).add(arc2_1).add(arc3_1);
layer.add(arc_1);

arc_2.add(arc1_2).add(arc2_2).add(arc3_2);
layer.add(arc_2);

arc_3.add(arc1_3).add(arc2_3).add(arc3_3);
layer.add(arc_3);

arc_4.add(arc1_4).add(arc2_4).add(arc3_4);
layer.add(arc_4);

arc_5.add(arc1_5).add(arc2_5).add(arc3_5);
layer.add(arc_5);

arc_6.add(arc1_6).add(arc2_6).add(arc3_6);
layer.add(arc_6);

arc_7.add(arc1_7).add(arc2_7).add(arc3_7);
layer.add(arc_7);

arc_8.add(arc1_8).add(arc2_8).add(arc3_8);
layer.add(arc_8);
//nav bar oval
var nav_oval = new Konva.Ellipse({
    x: width/2,
    y: height/12,
    radiusX: width/2.2,
    radiusY: height/15,
    // stroke: '#a0522d',
    fill: 'white',
    strokeWidth: 8,
    shadowColor: 'red',
    shadowBlur: 10,
  });
layer.add(nav_oval);
var rect_stage1 = new Konva.Rect({
    x: width/14,
    y: height/3,
    width: width/2.5,
    height: height/2,
    fill: 'white',
    shadowColor:'red',
    shadowBlur: 10,
    cornerRadius: 10,
  });
layer.add(rect_stage1);

const rect_stage2 = rect_stage1.clone();
rect_stage2.x(width/1.85);
layer.add(rect_stage2);

// stage3 up
var rect_stage3 = new Konva.Rect({
  x: width/6,
  y: height/6,
  width: width/1.5,
  height: height/7,
  fill: 'white',
  shadowColor:'red',
  shadowBlur: 10,
  cornerRadius: 10,
});
layer.add(rect_stage3);

// stage 3 text
var stage3text = new Konva.Text({
  x: width/5,
  y: width/12,
  text: 'AFRICA IS COLORFUL',
  fontSize: 80,
  fontFamily: 'Courier',
  fill: 'black',
  fontStyle: 'bold',
});
layer.add(stage3text);

// stage mid
var rect_stage4 = new Konva.Rect({
  x: width/11,
  y: height/1.07,
  width: width/1.2,
  height: height/7,
  fill: 'white',
  shadowColor:'red',
  shadowBlur: 10,
  cornerRadius: 10,
});
layer.add(rect_stage4);

// stage articles
const rect_stage5 = rect_stage4.clone();
rect_stage5.x(width/13.5);
rect_stage5.y(stage.height()/2.6);
rect_stage5.width(width/1.15);
rect_stage5.height(height/1.1);
layer.add(rect_stage5);

//stage article text

var stage3text = new Konva.Text({
  x: width/2.15,
  y: stage.height()/2.53,
  text: 'Related Articles',
  fontSize: 30,
  fontFamily: 'Calibri',
  fill: 'black',
});
layer.add(stage3text);

var stage3text_1 = new Konva.Group({
});

var stage3text1_1 = new Konva.Text({
  x: width/11,
  y: stage.height()/2.35,
  text: 'Our Sacred Adinkra Symbols',
  fontSize: 25,
  fontFamily: 'Calibri',
  fill: '#002D62',
});

var stage3text2_1 = new Konva.Text({
  x: width/11,
  y: stage.height()/2.26,
  fontStyle: 'bold',
  text: 'By: Kofi Asamoah-Darko adukpo',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
});

var stage3text3_1 = new Konva.Text({
  x: width/11,
  y: stage.height()/2.185,
  text: 'Dono is a type of tension talking drum with strings connecting both ends...',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
});

stage3text_1.add(stage3text1_1).add(stage3text2_1).add(stage3text3_1);
layer.add(stage3text_1);

//stage3text2
const stage3text_2 = stage3text_1.clone();
stage3text_2.y(130);
const stage3text1_2 = stage3text1_1.clone();
stage3text_2.add(stage3text1_2);
const stage3text2_2 = stage3text2_1.clone();
stage3text_2.add(stage3text2_2);
const stage3text3_2 = stage3text3_1.clone();
stage3text_2.add(stage3text3_2);
layer.add(stage3text_2);

//stage3text3
const stage3text_3 = stage3text_2.clone();
stage3text_3.y(260);
const stage3text1_3 = stage3text1_2.clone();
stage3text_3.add(stage3text1_3);
const stage3text2_3 = stage3text2_2.clone();
stage3text_3.add(stage3text2_3);
const stage3text3_3 = stage3text3_2.clone();
stage3text_3.add(stage3text3_3);
layer.add(stage3text_3);
//stage3text4
const stage3text_4 = stage3text_3.clone();
stage3text_4.y(390);
const stage3text1_4 = stage3text1_3.clone();
stage3text_4.add(stage3text1_4);
const stage3text2_4 = stage3text2_3.clone();
stage3text_4.add(stage3text2_4);
const stage3text3_4 = stage3text3_3.clone();
stage3text_4.add(stage3text3_4);
layer.add(stage3text_4);

// stage our teams
const rect_stage6 = rect_stage5.clone();
rect_stage6.y(stage.height()/1.4);
rect_stage6.height(height/1.37);
layer.add(rect_stage6);

//stage text our teams
const stage4text = stage3text.clone();
stage4text.y(stage.height()/1.38);
stage4text.text('Our Team');
layer.add(stage4text);


var stage4text_1 = new Konva.Group({
});

var stage4text1_1 = new Konva.Text({
  x: width/7,
  y: stage.height()/1.13,
  text: 'Janet Karagotho',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
});
layer.add(stage4text1_1);

var stage4text2_1 = new Konva.Text({
  x: width/7,
  y: stage.height()/1.115,
  text: 'C.E.O',
  fontSize: 20,
  fontFamily: 'Calibri',
  fill: 'black',
});
layer.add(stage4text2_1);
stage4text_1.add(stage4text1_1).add(stage4text2_1);
layer.add(stage4text_1);

//stage4text2
const stage4text_2 = stage4text_1.clone();
stage4text_2.x(width/3.15);
const stage4text1_2 = stage4text1_1.clone();
stage4text_2.add(stage4text1_2);
const stage4text2_2 = stage4text2_1.clone();
stage4text_2.add(stage4text2_2);
layer.add(stage4text_2);

//stage4text3
const stage4text_3 = stage4text_2.clone();
stage4text_3.x(width/1.57);
const stage4text1_3 = stage4text1_2.clone();
stage4text_3.add(stage4text1_3);
const stage4text2_3 = stage4text2_2.clone();
stage4text_3.add(stage4text2_3);
layer.add(stage4text_3);

var colors = ["gold", "white", "gray", "silver", "red","blue", "green", "yellow", "orange", "purple", "brown", "pink", "turquoise", "gold", "darkgreen", "darkblue", "lightgray", "navy", "maroon", "teal", "olive", "fuchsia", "lime", "aqua", "salmon", "skyblue", "slategray", "lavender", "deeppink", "sienna",'palegreen','gold','blue','red','orange','indianred','ivory','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan', 'lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lime','limegreen','maroon','mediumaquamarine','mediumorchid','mediumpurple'];
    i = -1;
(function f(){
    i = (i + 1) % colors.length;
    oneline_1.fill(colors[i]);
    oneline_6.fill(colors[i+1]);
    container_2.fill(colors[+2]);
    container_3.fill(colors[i+3]);
    container_4.fill(colors[i+4]);
    container_5.fill(colors[i+5]);
    container_7.fill(colors[i+6]);
    container_8.fill(colors[i+7]);
    container_9.fill(colors[i+8]);
    container_10.fill(colors[i+9]);
    container_11.fill(colors[i+10]);
    setTimeout(f, 5000);
})();
var nav_1 = new Konva.Group({
  draggable: true,
});

// navbar icon
var nav1_1 = new Konva.Circle({
  x: width / 4,
  y: height / 12,
  radius: 20,
  stroke: 'black',
  strokeWidth: 2,
  fill: 'black',
});

// layer.add(nav_cirlce);


var nav2_1 = new Konva.Rect({
  draggable: true,
  x: width / 4.36,
  y: height/ 16.5,
  width: 80,
  height: 27,
  fill: 'white',
  stroke: 'white',
});
// layer.add(nav_rect);

var nav3_1 = new Konva.Text({
  x: width / 4.37,
  y: height / 16.3,
  text: 'Home',
  fontSize: 25,
  fontFamily: 'Calibri',
  fill: 'black',
});
// layer.add(text_1);
nav_1.add(nav1_1).add(nav2_1).add(nav3_1);
layer.add(nav_1);

//nav2
const nav_2 = nav_1.clone();
nav_2.x(width/6);
const nav1_2 = nav1_1.clone();
nav_2.add(nav1_2);
const nav2_2 = nav2_1.clone();
nav_2.add(nav2_2);
const nav3_2 = nav3_1.clone();
nav3_2.text('About');
nav_2.add(nav3_2);
layer.add(nav_2);
//nav3
const nav_3 = nav_2.clone();
nav_3.x(width/3);
const nav1_3 = nav1_2.clone();
nav_3.add(nav1_3);
const nav2_3 = nav2_2.clone();
nav_3.add(nav2_3);
const nav3_3 = nav3_2.clone();
nav3_3.text('Gallery');
nav_3.add(nav3_3);
layer.add(nav_3);
//nav4
const nav_4 = nav_3.clone();
nav_4.x(width/2);
const nav1_4 = nav1_3.clone();
nav_4.add(nav1_4);
const nav2_4 = nav2_3.clone();
nav_4.add(nav2_4);
const nav3_4 = nav3_3.clone();
nav3_4.text('Contact')
nav_4.add(nav3_4);
layer.add(nav_4);

//mid stage icons
//nav5
const nav_5 = nav_1.clone();
nav_5.y(height/1.07);
const nav1_5 = nav1_1.clone();
nav_5.add(nav1_5);
const nav2_5 = nav2_1.clone();
nav_5.add(nav2_5);
const nav3_5 = nav3_1.clone();
nav3_5.text('Publications')
nav_5.add(nav3_5);
layer.add(nav_5);

//nav6
const nav_6 = nav_2.clone();
nav_6.y(height/1.07);
const nav1_6 = nav1_2.clone();
nav_6.add(nav1_6);
const nav2_6 = nav2_2.clone();
nav_6.add(nav2_6);
const nav3_6 = nav3_2.clone();
nav3_6.text('Gallery')
nav_6.add(nav3_6);
layer.add(nav_6);
//nav7
const nav_7 = nav_3.clone();
nav_7.y(height/1.07);
const nav1_7 = nav1_3.clone();
nav_7.add(nav1_7);
const nav2_7 = nav2_3.clone();
nav_7.add(nav2_7);
const nav3_7 = nav3_3.clone();
nav3_7.text('Articles')
nav_7.add(nav3_7);
layer.add(nav_7);
//nav8
const nav_8 = nav_4.clone();
nav_8.y(height/1.07);
const nav1_8 = nav1_4.clone();
nav_8.add(nav1_8);
const nav2_8 = nav2_4.clone();
nav_8.add(nav2_8);
const nav3_8 = nav3_4.clone();
nav3_8.text('Events')
nav_8.add(nav3_8);
layer.add(nav_8);


nav_1.on('mouseover', function (evt) {
  nav1_1.fill('yellow')
});

nav_1.on('mouseout', function (evt) {
  nav1_1.fill('black')
});

nav_2.on('mouseover', function (evt) {
  nav1_2.fill('yellow')
});

nav_2.on('mouseout', function (evt) {
  nav1_2.fill('black')
});

nav_3.on('mouseover', function (evt) {
  nav1_3.fill('yellow')
});
nav_3.on('mouseout', function (evt) {
  nav1_3.fill('black')
});

nav_4.on('mouseover', function (evt) {
  nav1_4.fill('yellow')
});
nav_4.on('mouseout', function (evt) {
  nav1_4.fill('black')
});

Konva.Image.fromURL('/static/photo/african_images.jpg', function (darthNode) {
  darthNode.setAttrs({
    x: width/1.83,
    y: height/2.85,
    width: width/2.5-20,
    height: height/2-20,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(darthNode);
});

Konva.Image.fromURL('/static/photo/africa2.jpg', function (darthNode1) {
  darthNode1.setAttrs({
    x: width/13,
    y: height/2.85,
    width: width/2.5-20,
    height: height/2-20,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(darthNode1);
});

//our team pictures
Konva.Image.fromURL('/static/photo/portrait1.jpg', function (port1) {
  port1.setAttrs({
    x: stage.width()/8,
    y: stage.height()/1.3,
    width: width/7,
    height: height/3,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(port1);
});

Konva.Image.fromURL('/static/photo/portrait2.jpg', function (port2) {
  port2.setAttrs({
    x: stage.width()/2.3,
    y: stage.height()/1.3,
    width: width/7,
    height: height/3,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(port2);
});

Konva.Image.fromURL('/static/photo/portrait3.jpg', function (port3) {
  port3.setAttrs({
    x: stage.width()/1.34,
    y: stage.height()/1.3,
    width: width/7,
    height: height/3,
    // scaleX: 0.5,
    // scaleY: 0.5,
    cornerRadius: 20,
  });
  layer.add(port3);
});

stage.add(layer);

