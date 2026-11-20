// ===== 人间动物志 · 笑面虎 =====
const TC='#ff9a3a',TS='#ffd27a',BUN='#e8f0ff',BPK='#ffb0c8',RED='#ff3a4a';
function arm(sh,hand,L,col,w,a,bend=1){const dx=hand[0]-sh[0],dy=hand[1]-sh[1],d=Math.hypot(dx,dy)||1;const h=Math.sqrt(Math.max(0,L*L/4-d*d/4));const mx=(sh[0]+hand[0])/2-dy/d*h*bend,my=(sh[1]+hand[1])/2+dx/d*h*bend;glow([sh,[mx,my],hand],1,col,w,a,12,false);}
// tiger in local coords; o:{evil,happy,mouth,fhx,fhy,bhx,bhy,knife,walk,crack,eyeR}
function tigerPaths(o,t){const P=[];const ph=o.walk*Math.sin(t*12);
  P.push(['leg',[[-18,0+0],[-16+ph*10,-72]].map((p,i)=>i==0?[-18+ph*14,0]:p)],['leg2',[[18-ph*14,0],[16-ph*10,-72]]]);
  P.push(['body',circ(0,-122,42,58,40)]);
  P.push(['tail',Q([-38,-92],[-110,-90],[-96,-170],12)]);
  P.push(['head',circ(6,-226,58,48,44)]);
  P.push(['ear',circ(-34,-268,15,15,20)],['ear2',circ(42,-268,15,15,20)]);
  return P;}
function tiger(x,y,s,dir,o,a=1,prog=1,col=TC,ghost=0){if(a<=.01)return null;o=Object.assign({evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
  const P=tigerPaths(o,t0g);ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);
  if(!ghost){ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0c0806';ctx.beginPath();ctx.ellipse(0,-122,42,58,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(6,-226,58,48,0,0,TAU);ctx.fill();ctx.restore();}
  else{ctx.save();ctx.globalAlpha=a*.55;ctx.fillStyle='#120204';ctx.beginPath();ctx.ellipse(0,-122,42,58,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(6,-226,58,48,0,0,TAU);ctx.fill();ctx.restore();}
  const w=3.2/s,N=P.length+6;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,col,w,a,14,prog<1);});
  const fp=seg(prog,.55,.85);if(fp>0){const fa=a*fp;
    // stripes
    [[[-10,-272],[-6,-256]],[[6,-275],[6,-258]],[[22,-272],[18,-256]],[[-52,-228],[-34,-224]],[[-52,-214],[-36,-214]],[[64,-228],[46,-224]],[[64,-214],[48,-214]],[[-30,-140],[-14,-136]],[[-34,-118],[-16,-116]],[[30,-140],[14,-136]]].forEach(l=>glow(l,1,ghost?col:TS,w*.9,fa,8,false));
    glow([[-60,-142],[-70,-150]],1,ghost?col:TS,w*.8,fa,6,false);glow([[-92,-130],[-104,-132]],1,ghost?col:TS,w*.8,fa,6,false);
    glow(circ(14,-204,22,15,24),1,col,w*.9,fa,8,false);
    ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=ghost?col:'#ff7a9a';ctx.beginPath();ctx.moveTo(7,-216);ctx.lineTo(21,-216);ctx.lineTo(14,-208);ctx.fill();ctx.restore();
    const ev=o.evil;
    if(ev<.5){ // smiling closed eyes + grin
      glow(Q([-22,-236],[-12,-248],[-2,-236],8),1,col,w,fa,8,false);glow(Q([20,-236],[30,-248],[40,-236],8),1,col,w,fa,8,false);
      glow(Q([-10,-198],[14,-178-o.mouth*8],[38,-198],12),1,col,w,fa,8,false);
      if(!ghost){ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle='#ff7a9a';ctx.beginPath();ctx.arc(-30,-210,7,0,TAU);ctx.arc(52,-210,7,0,TAU);ctx.fill();ctx.restore();}
    } else { // evil: slit eyes + fangs
      const ec=ghost?'#ff3040':RED;glow([[-26,-246],[0,-236]],1,col,w,fa,8,false);glow([[42,-246],[20,-236]],1,col,w,fa,8,false);
      ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=ec;ctx.shadowColor=ec;ctx.shadowBlur=16;ctx.beginPath();ctx.ellipse(-11,-234,6,3,0,0,TAU);ctx.ellipse(31,-234,6,3,0,0,TAU);ctx.fill();ctx.restore();
      const m=[[-10,-198],[2,-186],[14,-182],[26,-186],[38,-198],[14,-192]];glow([[-12,-198],[14,-170],[40,-198]],1,col,w,fa,8,false);
      ctx.save();ctx.globalAlpha=fa;ctx.fillStyle='#fff';[[0,-196],[28,-196]].forEach(([fx,fy])=>{ctx.beginPath();ctx.moveTo(fx-5,fy);ctx.lineTo(fx+5,fy);ctx.lineTo(fx,fy+16);ctx.fill();});ctx.restore();}
    // crack lines on face
    if(o.crack>0){const r=rng(17);for(let i=0;i<Math.ceil(o.crack*5);i++){let px=6+(r()-.5)*30,py=-226+(r()-.5)*20;const pts=[[px,py]];const an=r()*TAU;for(let j=1;j<6;j++){px+=Math.cos(an+(r()-.5)*.8)*10*Math.min(1,o.crack*5-i);py+=Math.sin(an+(r()-.5)*.8)*10*Math.min(1,o.crack*5-i);pts.push([px,py]);}glow(pts,1,'#fff',w*.8,fa,10,false);}}}
  // arms
  const ap=seg(prog,.7,.95);if(ap>0){arm([28,-160],[o.fhx,o.fhy],100,col,w,a*ap,-1);arm([-28,-160],[o.bhx,o.bhy],100,col,w,a*ap,1);dot(o.fhx,o.fhy,9,col,a*ap);dot(o.bhx,o.bhy,9,col,a*ap);
    if(o.knife>0){ctx.save();ctx.translate(o.bhx,o.bhy);ctx.rotate(-.3);ctx.globalAlpha=a*o.knife;ctx.fillStyle='#e8eef8';ctx.shadowColor='#fff';ctx.shadowBlur=18;ctx.beginPath();ctx.moveTo(-5,-6);ctx.lineTo(5,-6);ctx.lineTo(3,-70);ctx.lineTo(0,-80);ctx.lineTo(-3,-70);ctx.closePath();ctx.fill();ctx.fillStyle='#8a5a2a';ctx.shadowBlur=0;ctx.fillRect(-8,-6,16,22);ctx.restore();}}
  ctx.restore();return{hx:x+dir*s*6,hy:y+s*o.sq*-226,bh:[x+dir*s*o.bhx,y+s*o.sq*o.bhy],fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy]};}
let t0g=0;
// bunny o:{exp:0 happy 1 shock 2 sad 3 sharp, hop, droop, fhx,fhy,blush}
function bunny(x,y,s,dir,o,a=1,prog=1){if(a<=.01)return null;o=Object.assign({exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,sq:1,walk:0},o);const yy=y-o.hop*60;
  ctx.save();ctx.translate(x,yy);ctx.scale(s*dir,s*o.sq);const w=3.2/s;const ph=o.walk*Math.sin(t0g*14);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0a0c12';ctx.beginPath();ctx.ellipse(0,-62,30,36,0,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(4,-124,32,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-10+ph*10,0],[-10,-30]]],['leg2',[[10-ph*10,0],[10,-30]]],['body',circ(0,-62,30,36,36)],['head',circ(4,-124,32,32,36)]];
  const er=o.droop;P.push(['ear',(()=>{const c=circ(0,-34,9,34,24);return c.map(([px,py])=>{const an=-.15-er*1.1;return[-8+px*Math.cos(an)-py*Math.sin(an),-150+px*Math.sin(an)+py*Math.cos(an)];});})()]);
  P.push(['ear2',(()=>{const c=circ(0,-34,9,34,24);return c.map(([px,py])=>{const an=.2+er*1.2;return[16+px*Math.cos(an)-py*Math.sin(an),-150+px*Math.sin(an)+py*Math.cos(an)];});})()]);
  P.push(['tail',circ(-30,-50,9,9,16)]);
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm.startsWith('ear')?BUN:BUN,w,a,12,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp;
    if(o.exp==0){glow(Q([-6,-130],[0,-138],[6,-130],6),1,BUN,w,fa,6,false);glow(Q([16,-130],[22,-138],[28,-130],6),1,BUN,w,fa,6,false);glow(Q([4,-112],[12,-106],[20,-112],6),1,BUN,w,fa,6,false);}
    else if(o.exp==1){dot(0,-130,6,'#fff',fa);dot(22,-130,6,'#fff',fa);glow(circ(12,-108,5,7,12),1,BUN,w,fa,6,false);}
    else if(o.exp==2){glow([[-6,-128],[6,-132]],1,BUN,w,fa,6,false);glow([[16,-132],[28,-128]],1,BUN,w,fa,6,false);glow(Q([4,-106],[12,-114],[20,-106],6),1,BUN,w,fa,6,false);const tp=(t0g*1.4)%1;dot(-2,-122+tp*40,4,'#8ad8ff',fa*(1-tp));}
    else {glow([[-8,-140],[6,-134]],1,BUN,w,fa,6,false);glow([[30,-140],[16,-134]],1,BUN,w,fa,6,false);dot(0,-128,5,'#9ae8ff',fa);dot(22,-128,5,'#9ae8ff',fa);glow([[6,-110],[18,-110]],1,BUN,w,fa,6,false);}
    if(o.blush>0){ctx.save();ctx.globalAlpha=fa*o.blush*.6;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(-10,-116,6,0,TAU);ctx.arc(32,-116,6,0,TAU);ctx.fill();ctx.restore();}
    ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(12,-118,3.5,0,TAU);ctx.fill();ctx.restore();
    glow([[20,-70],[o.fhx,o.fhy]],1,BUN,w,fa,8,false);glow([[-18,-70],[o.bhx,o.bhy]],1,BUN,w,fa,8,false);}
  ctx.restore();return{hx:x+dir*s*4,hy:yy-s*124,fh:[x+dir*s*o.fhx,yy+s*o.fhy]};}

const OC='#e8b04a',HORN='#fff0d0',GRN='#6dffa8';
function ox(x,y,s,dir,o,a=1,prog=1){if(a<=.01)return null;o=Object.assign({exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const ph=o.walk*Math.sin(t0g*10);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0c0a06';ctx.beginPath();ctx.ellipse(0,-128,52,66,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(8,-232,50,46,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(16,-200,46,30,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-22+ph*14,0],[-20,-74]]],['leg2',[[22-ph*14,0],[20,-74]]],['body',circ(0,-128,52,66,40)],
    ['head',circ(8,-238,50,44,40)],['muzzle',circ(16,-198,46,30,36)],
    ['horn',Q([-28,-268],[-70,-280],[-62,-326],10)],['horn2',Q([44,-268],[86,-280],[78,-326],10)],
    ['ear',circ(-50,-246,18,9,20)],['ear2',circ(66,-246,18,9,20)],
    ['tail',Q([-48,-100],[-96,-80],[-88,-30],10)]];
  const N=P.length+4;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm.startsWith('horn')?HORN:OC,w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp;
    ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=OC;ctx.beginPath();ctx.ellipse(0,-194,6,4,0,0,TAU);ctx.ellipse(32,-194,6,4,0,0,TAU);ctx.fill();ctx.restore();
    if(o.ring>0)glow(circ(16,-178,10,10,20),1,GOLD,w,fa,10,false);
    // tuft
    glow([[2,-280],[6,-268]],1,OC,w,fa,6,false);glow([[14,-282],[14,-268]],1,OC,w,fa,6,false);
    const e=o.exp;
    if(e==0){glow(Q([-14,-244],[-6,-252],[2,-244],6),1,OC,w,fa,6,false);glow(Q([22,-244],[30,-252],[38,-244],6),1,OC,w,fa,6,false);glow(Q([2,-174+o.mouth*0],[16,-166],[30,-174],8),1,OC,w,fa,6,false);}
    else if(e==1){glow([[-16,-246],[2,-246]],1,OC,w,fa,6,false);glow([[20,-246],[38,-246]],1,OC,w,fa,6,false);dot(-6,-242,4,'#fff',fa);dot(30,-242,4,'#fff',fa);glow(Q([4,-168],[16,-174],[28,-168],6),1,OC,w,fa,6,false);}
    else if(e==2){glow([[-18,-256],[2,-248]],1,OC,w,fa,6,false);glow([[40,-256],[20,-248]],1,OC,w,fa,6,false);dot(-6,-242,5,'#fff',fa);dot(30,-242,5,'#fff',fa);glow([[4,-170],[28,-170]],1,OC,w,fa,6,false);}
    else {glow([[-14,-250],[0,-238]],1,OC,w,fa,6,false);glow([[-14,-238],[0,-250]],1,OC,w,fa,6,false);glow([[22,-250],[36,-238]],1,OC,w,fa,6,false);glow([[22,-238],[36,-250]],1,OC,w,fa,6,false);glow(Q([4,-168],[16,-176],[28,-168],6),1,OC,w,fa,6,false);}
    if(o.sweat>0){const sp=(t0g*1.2)%1;ctx.save();ctx.globalAlpha=fa*o.sweat*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(54,-262+sp*40,6,9,0,0,TAU);ctx.fill();ctx.restore();}
    arm([34,-170],[o.fhx,o.fhy],110,OC,w,fa,-1);arm([-34,-170],[o.bhx,o.bhy],110,OC,w,fa,1);dot(o.fhx,o.fhy,10,OC,fa);dot(o.bhx,o.bhy,10,OC,fa);}
  ctx.restore();return{hx:x+dir*s*8,hy:y+s*o.sq*-238,top:y+s*o.sq*-330,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy]};}
