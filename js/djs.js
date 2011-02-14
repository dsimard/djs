function onLoad() {
  var djs = (function() {
    var d = {
      mainLoop : null,
      loop : 0,
      audioLibParams : {
        bd : ["synth",14.0000,0.8500,0.0000,0.0000,0.1800,0.1500,20.0000,412.0000,20.0000,-1.0000,-1.0000,0.0000,0.0100,-0.3000,-1.0000,-0.8960,0.0340,0.0000,-0.9720,0.3264,-0.9620,-0.9620,0.1460,-0.7900,0.0560,0.1390,0.2800],
        snare : ["noise",14.0000,0.8500,0.0000,0.0000,0.0780,0.1200,2400.0000,1419.0000,20.0000,-1.0000,-1.0000,0.0000,0.0100,-0.3000,-1.0000,-0.8960,0.0340,0.0000,-0.9720,0.3264,-0.9620,-0.9620,0.1460,-0.7900,0.0560,0.1390,0.2800]
      },
      play : function() {
        d.loop++;
        if (d.loop == 1 || d.loop % 2 == 1) d.samples.bd.play();
        if (d.loop % 2 == 0) d.samples.snare.play();
      },
      startMainLoop : function() {
        d.mainLoop = setInterval(d.play, 500)
      },
      stopMainLoop : function() {
        if (d.mainLoop) clearInterval(d.mainLoop);
      }
    }
    
    d.samples = jsfxlib.createWaves(d.audioLibParams)
    
    return d;
  })();
  
 $("#startLoop").click(function() {
  if (djs.mainLoop) djs.stopMainLoop()
  else djs.startMainLoop();
 });
}
