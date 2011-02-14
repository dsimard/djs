function onLoad() {
  var djs = (function() {
    var d = {
      bpm : 120,
      mainLoop : null,
      infoBox : null, // Where to display info
      loop : 0, // Total of loop
      play : function() { }, // What should be played
      beat : 0,
      presetSounds : {
        bdrum : ["synth",14.0000,0.8500,0.0000,0.0000,0.1800,0.1500,20.0000,412.0000,20.0000,-1.0000,-1.0000,0.0000,0.0100,-0.3000,-1.0000,-0.8960,0.0340,0.0000,-0.9720,0.3264,-0.9620,-0.9620,0.1460,-0.7900,0.0560,0.1390,0.2800],
        snare : ["noise",14.0000,0.8500,0.0000,0.0000,0.0780,0.1200,2400.0000,1419.0000,20.0000,-1.0000,-1.0000,0.0000,0.0100,-0.3000,-1.0000,-0.8960,0.0340,0.0000,-0.9720,0.3264,-0.9620,-0.9620,0.1460,-0.7900,0.0560,0.1390,0.2800]
      },
      execLoop : function() {
        d.beat = (d.loop%4)+1;
        d.info();
        d.loop++;
        d.play();
      },
      startMainLoop : function() {
        d.mainLoop = setInterval(d.execLoop, 60000/d.bpm);
      },
      stopMainLoop : function() {
        if (d.mainLoop) { 
          clearInterval(d.mainLoop); 
          d.mainLoop = null;
          d.loop = 0;
        }
      },
      info : function() {
        if (d.infoBox) {
          d.infoBox
            .empty()
            .html("Loop : " + d.loop + "<br />" +
              "Beat : " + d.beat + "<br />");
        }
      }
    }
    
    d.presets = jsfxlib.createWaves(d.presetSounds)
    
    return d;
  })();
 
 djs.play = function() {
  djs.presets.bdrum.play();
 } 
 
 $("#startLoop").click(function() {
  if (djs.mainLoop) djs.stopMainLoop()
  else djs.startMainLoop();
 });
 
 djs.infoBox = $("#display");
}
