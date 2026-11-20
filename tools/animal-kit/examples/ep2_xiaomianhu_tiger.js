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
function mirror(x,y,s,a,glowA){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.globalAlpha=a;ctx.fillStyle='rgba(200,240,255,.25)';ctx.beginPath();ctx.ellipse(0,0,46,58,0,0,TAU);ctx.fill();ctx.strokeStyle=GOLD;ctx.lineWidth=6;ctx.shadowColor=GOLD;ctx.shadowBlur=20;ctx.stroke();ctx.fillStyle=GOLD;ctx.fillRect(-8,56,16,50);ctx.restore();}
const TX0=560,BX0=900;
const TP=o=>Object.assign({x:TX0,oy:0,dir:1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TP({fhx:60,fhy:-150})],[1.2,TP({fhx:70,fhy:-180,mouth:1}),'snap'],[2.67,TP({fhx:60,fhy:-140})],[3.6,TP({fhx:180,fhy:-170,lean:.08,mouth:1})],[4.3,TP({fhx:170,fhy:-160,lean:.1})],[5.0,TP({fhx:60,fhy:-130})],
 [5.33,TP({dir:1,bhx:-70,bhy:-100,knife:1})],[6.66,TP({dir:1,bhx:-80,bhy:-140,knife:1,evil:1,lean:-.05}),'snap'],[7.4,TP({dir:1,bhx:-80,bhy:-150,knife:1,evil:1,sq:.94})],
 [DROP,TP({evil:0,fhx:80,fhy:-200,bhx:-80,bhy:-200,oy:-60,mouth:1}),'snap'],[DROP+.8,TP({fhx:60,fhy:-150})],[B(5)-.1,TP({})]];
MK.forEach((k,i)=>{KT.push([k-.2,TP({x:TX0+40,fhx:60,fhy:-120})],[k,TP({x:TX0+60,fhx:[190,170,80][i],fhy:[-180,-260,-200][i],lean:.12,mouth:1,bhx:-60,bhy:-100,knife:.7}),'snap'],[k+.35,TP({x:TX0+60,fhx:120,fhy:-150,bhx:-60,bhy:-100,knife:.7})]);});
KT.push([B(6)-.1,TP({x:TX0+40})],[B(6)+.3,TP({x:TX0-60,dir:-1,walk:1})],[WAVES[0],TP({x:TX0-120,dir:-1,fhx:90,fhy:-200,lean:.1,mouth:1}),'snap'],[WAVES[1],TP({x:TX0-120,dir:-1,fhx:100,fhy:-220,lean:.12,mouth:1}),'snap'],
 [LOCK-.2,TP({x:TX0-60,dir:1,bhx:-70,bhy:-100,knife:1,evil:1})],[LOCK,TP({x:TX0+80,dir:1,fhx:200,fhy:-160,bhx:180,bhy:-200,knife:1,evil:1,lean:.25}),'snap'],[LOCK+.5,TP({x:TX0+60,dir:1,fhx:150,fhy:-250,bhx:-60,bhy:-110,knife:.6,evil:1})],
 [B(7),TP({x:TX0,mouth:1,fhx:150,fhy:-120})]);
JABS.forEach((k,i)=>{KT.push([k-.15,TP({x:TX0+(i%2?60:-60),dir:i%2?1:-1,fhx:120,fhy:-110})],[k,TP({x:TX0+(i%2?60:-60),dir:i%2?1:-1,fhx:170,fhy:-130,lean:.1,mouth:1}),'snap']);});
KT.push([STAMP-.3,TP({sq:.9})],[STAMP,TP({fhx:80,fhy:-260,bhx:-80,bhy:-260,oy:-40,mouth:1}),'snap'],[STAMP+.6,TP({fhx:60,fhy:-150})],[B(8)-.1,TP({})]);
SNAPS.forEach((k,i)=>{KT.push([k,TP({x:TX0-i*20,lean:-.08,crack:(i+1)/(SNAPS.length+1),fhx:60,fhy:-200,bhx:-60,bhy:-110,knife:.8}),'snap'],[k+.35,TP({x:TX0-i*20,crack:(i+1)/(SNAPS.length+1),bhx:-60,bhy:-110,knife:.8})]);});
KT.push([SLAM-.2,TP({x:TX0-40,crack:.9,knife:1,bhx:-60,bhy:-110})],[SLAM,TP({x:TX0-60,evil:1,crack:0,knife:1,bhx:-80,bhy:-200,fhx:90,fhy:-200,lean:-.15,oy:-30}),'snap'],[SLAM+.6,TP({x:TX0-60,evil:1,knife:1,bhx:-80,bhy:-160})],
 [B(9),TP({x:TX0-80,evil:1,sq:.94,lean:.15,knife:0})],[CLIMAX-.4,TP({x:TX0-80,evil:1,sq:.94,lean:.1})],[CLIMAX,TP({x:TX0-200,evil:1,sq:.8,lean:-.3,fhx:60,fhy:-220,bhx:-60,bhy:-220,oy:-40}),'snap'],[CLIMAX+1.2,TP({x:TX0-260,evil:1,sq:.75,lean:-.2,fhx:60,fhy:-220,bhx:-60,bhy:-220})],[CLIMAX+2.2,TP({x:TX0-800,evil:1,sq:.8,walk:1,dir:-1})],[27.5,TP({x:TX0-900,evil:1,walk:1,dir:-1})]);
KT.sort((a,b)=>a[0]-b[0]);
const BP=o=>Object.assign({x:BX0,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,sq:1,walk:0,dir:-1,a:1},o);
const KBn=[[0,BP({a:0,x:1300})],[2.67,BP({a:1,x:1300,walk:1,hop:.3})],[3.3,BP({x:BX0,hop:0})],[3.6,BP({x:BX0-20,blush:1,hop:.25}),'snap'],[4.3,BP({x:BX0-20,blush:1})],[5.33,BP({x:BX0+20,dir:1,blush:.6})],[7.4,BP({x:BX0+60,dir:1,walk:1})],
 [DROP,BP({x:BX0+20,dir:-1,exp:1,hop:.4}),'snap'],[DROP+.8,BP({x:BX0,exp:0})]];
MK.forEach((k,i)=>{KBn.push([k+.05,BP({x:BX0-20+i*0,exp:0,blush:1,hop:.35,fhx:40,fhy:-110}),'snap'],[k+.35,BP({x:BX0-20,exp:0,blush:.8})]);});
KBn.push([B(6)+.1,BP({x:BX0+40,dir:1,walk:1,blush:.6})],[B(6)+.9,BP({x:1400,dir:1,walk:1})],[B(8)-.4,BP({x:1400,dir:-1})],[B(8),BP({x:BX0,dir:-1,walk:1,exp:0})]);
SNAPS.forEach((k,i)=>{KBn.push([k+.05,BP({x:BX0+10*i,exp:1,hop:.2,droop:.3}),'snap'],[k+.35,BP({x:BX0+10*i,exp:1})]);});
KBn.push([SLAM,BP({x:BX0+60,exp:1,hop:.5,sq:1.05}),'snap'],[SLAM+.6,BP({x:BX0+40,exp:2,droop:.8})],[B(9)+.6,BP({x:BX0+40,exp:2,droop:1,sq:.85})],[CLIMAX-.6,BP({x:BX0+20,exp:3,droop:0})],[CLIMAX-.2,BP({x:BX0,exp:3,sq:.9,fhx:60,fhy:-120})],[CLIMAX,BP({x:BX0-60,exp:3,fhx:110,fhy:-150,hop:.3}),'snap'],[CLIMAX+.8,BP({x:BX0-80,exp:3,fhx:110,fhy:-150})],[B(11),BP({x:BX0-120,exp:0,fhx:60,fhy:-90,blush:.6})],[27.5,BP({x:BX0-120,exp:0})]);
KBn.sort((a,b)=>a[0]-b[0]);
function kfO(K,T){let i=0;while(i<K.length-1&&K[i+1][0]<=T)i++;const a=K[i],b=K[Math.min(i+1,K.length-1)];if(a===b)return Object.assign({},a[1]);const d=b[0]-a[0];let p=d>0?seg(T,a[0],b[0]):1;p=b[2]=='snap'?eOut(p):eInOut(p);const o={};for(const k in a[1]){o[k]=(k=='dir'||k=='exp'||k=='evil')?(p<.5?a[1][k]:b[1][k]):lerp(a[1][k],b[1][k],p);}return o;}
const CAMS=[[0,580,560,1.9],[2.3,590,580,1.7],[2.67,760,600,1.0],[5.33,700,600,1.06],[7.4,640,580,1.18],[DROP,800,600,.95],[B(5),780,600,1.0],[B(6),700,600,.98],[LOCK,700,600,1.06],[B(7),720,600,.98],[STAMP,720,590,1.04],[B(8),760,600,1.0],[SLAM,720,600,1.06],[B(9),760,620,.98],[CLIMAX-.5,800,620,1.12],[CLIMAX,760,620,.95],[B(11),780,620,1.0]];
function camS(t){let i=0;while(i<CAMS.length-1&&CAMS[i+1][0]<=t)i++;const a=CAMS[i],pv=CAMS[Math.max(0,i-1)];const p=eInOut(seg(t,a[0],a[0]+(i==2?.5:.6)));return[1,2,3].map(j=>lerp(pv[j],a[j],i==0?1:p));}
const SKY=[[0,['#0c0604','#1c100a','#2c1a10']],[DROP,['#1a0a04','#5a2a0c','#ff9a40']],[B(5),['#1a0c04','#4a2a10','#e0a050']],[B(6),['#100408','#300a14','#802030']],[B(7),['#1a1004','#5a3a10','#ffc070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#081420','#1a4a70','#a0e0ff']],[CLIMAX+1.4,['#0a1018','#2a3a5a','#c0c8f0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]];
function skyAt(t){let c=SKY[0][1];for(let i=1;i<SKY.length;i++){const p=seg(t,SKY[i][0]-.15,SKY[i][0]+.4);if(p<=0)break;c=c.map((x,j)=>mixc(x,SKY[i][1][j],p));}return c;}
const STARS=[...Array(200)].map((_,i)=>{const r=rng(i+5);return[r()*W*1.4-W*.2,r()*H*.7,r()*1.6+.4,r()*6];});
const WORDS=['笑里藏刀','口蜜腹剑','两面三刀','虚伪'];

window.draw=function(t){t0g=t;
  PEN=null;ctx.setTransform(1,0,0,1,0,0);ctx.globalAlpha=1;ctx.globalCompositeOperation='source-over';ctx.filter='none';
  const live=t>=DROP,hit=hitAmt(t),endF=1-seg(t,B(11)+.5,27.6),T=rt(t);
  const b1=win(t,B(5)-.4,B(6),.2,.25),b2=win(t,B(6)-.1,B(7),.2,.25),b3=win(t,B(7)-.1,B(8),.2,.25),b4=win(t,B(8)-.1,B(9)+.1,.2,.3),dark=win(t,B(9),CLIMAX,.4,.12),fire=seg(t,CLIMAX,CLIMAX+.8);
  const sky=skyAt(t);const g=ctx.createLinearGradient(0,0,0,H);g.addColorStop(0,sky[0]);g.addColorStop(.62,sky[1]);g.addColorStop(1,sky[2]);ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  const cm=camS(t),sh=shake(t);const z=cm[2]*(1+sh.z);
  ctx.save();ctx.translate(W*.38+sh.x,H*.55+sh.y);ctx.rotate(sh.r);ctx.scale(z,z);ctx.translate(-cm[0],-cm[1]);
  STARS.forEach(s=>{ctx.globalAlpha=(.1+.4*(.5+.5*Math.sin(t*1.5+s[3])))*endF*(1-dark*.8);ctx.fillStyle='#fff';ctx.fillRect(s[0],s[1],s[2],s[2]);});ctx.globalAlpha=1;
  {const r=rng(41);let x=-500;const fc=live?mixc(sky[2],'#ffffff',.25):'#555';while(x<W+700){const w=120+r()*180,h=160+r()*360;ctx.save();ctx.globalAlpha=endF;ctx.fillStyle=mixc('#05050c',sky[1],.25);ctx.fillRect(x,GY-h,w-12,h);ctx.restore();glow(rectP(x,GY-h,x+w-12,GY),eOut(seg(t,2.6,3.6)),fc,1.2,.3*endF,0,false);
      for(let i=0;i<Math.floor((w-30)/34);i++)for(let j=0;j<Math.floor((h-30)/44);j++){if(r()<.62)continue;ctx.save();ctx.globalAlpha=(live?.35:.14)*endF*(1-dark*.8)*(.6+.4*Math.sin(t+i+j));ctx.fillStyle=r()>.75?TC:'#fff0d8';ctx.fillRect(x+16+i*34,GY-h+18+j*44,14,20);ctx.restore();}x+=w;}}
  ctx.fillStyle=mixc('#05040a',sky[2],.12);ctx.fillRect(-1200,GY,W+2400,700);glow([[-1200,GY],[W+1200,GY]],eOut(seg(t,2.6,3.4)),live?mixc(TC,'#777',dark):SKETCH,2,.8*endF,live?10:0,false);
  const to=kfO(KT,T),bo=kfO(KBn,T);
  // ---- shadow tiger on wall ----
  let shA=0;if(t>=5.33&&t<DROP)shA=seg(t,5.33,6.66)*.9;MK.forEach(k=>{const d=t-k;if(d>=0&&d<.35)shA=Math.max(shA,(1-d/.35)*.8);});if(t>=LOCK-.2&&t<B(7))shA=Math.max(shA,win(t,LOCK-.2,B(7),.1,.3)*.8);if(t>=B(8)&&t<B(9)+.3)shA=Math.max(shA,seg(t,B(8),SLAM)*.5+(t>=SLAM?.4:0));if(t>=B(9))shA=Math.max(shA,dark*.6);
  shA*=endF*(1-fire);if(shA>0){tiger(to.x-60*to.dir,GY+20,3.0,to.dir,Object.assign({},to,{evil:1,crack:0,knife:to.knife>.1?1:0,lean:to.lean*.5}),shA,1,'#ff3040',1);}
  // ---- characters ----
  const tprog=t<2.67?seg(t,.1,2.3):1;
  const TG=tiger(to.x,GY+to.oy,1.5,to.dir,to,endF,tprog);
  const BG=bunny(bo.x,GY,1.5,bo.dir,bo,bo.a*endF,1);
  // ---- intro ----
  if(t<DROP&&TG){bubble(TG.hx+20,TG.hy-150,'哈哈，大家好呀~',win(t,1.2,2.6,.12,.2),1,TC,-1);
    if(BG){bubble(TG.hx+30,TG.hy-150,'小兔辛苦啦，你最棒！',win(t,3.6,5.2,.1,.2),1,TC,-1);bubble(BG.hx-10,BG.hy-100,'嘿嘿~',win(t,3.9,5.2,.1,.2),.9,BUN,1);
      if(t>=3.6&&t<4.4)for(let q=0;q<5;q++){const d=t-3.6;heartF(BG.hx+(q-2)*24,BG.hy-30-d*200,1.2,BPK,1-d/.8,true);}}
    if(t>=6.66&&t<7.3)shock(TG.bh[0],TG.bh[1]-40,seg(t,6.66,7.2),1,'#fff',500,.9,5);
    if(t>=6.66)sparks(t,6.66,TG.bh[0],TG.bh[1]-60,24,4,500,.4,'#fff');
    const pv='笑里藏刀'.split('');pv.forEach((c,i)=>{const k=7.2+i*.16;if(t<k)return;const p=eOut(seg(t,k,k+.14));ctx.save();ctx.globalAlpha=1-seg(t,DROP-.05,DROP+.05);ctx.translate(560+i*90,GY-640);ctx.scale(lerp(2,1,p),lerp(2,1,p));ctx.font='900 70px '+SER;ctx.textAlign='center';ctx.fillStyle=i==3?RED:'#fff';ctx.shadowColor=i==3?RED:'#fff';ctx.shadowBlur=18;ctx.fillText(c,0,0);ctx.restore();});}
  if(t>=DROP&&t<DROP+1.6&&TG){const dt=t-DROP;[0,.12,.26].forEach((d,j)=>shock(TG.hx,TG.hy,seg(dt,d,d+1.1),endF,j==1?'#fff':TC,2200,.8,6));sparks(t,DROP,TG.hx,TG.hy,70,8,1300,.9,TC);}
  // 01
  if(b1>0&&TG){const a=b1*endF;const say=['你方案超棒！','你最靠谱了！','有事尽管找我~'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(TG.hx+30,TG.hy-150,say[i],a,eBack(seg(t,k,k+.2))*(1+i*.1),TC,-1);if(t>=k&&t<k+.6&&BG){for(let q=0;q<8;q++){const an=-Math.PI*(.15+q*.1),d=(t-k)*420;dot(BG.hx+Math.cos(an)*(30+d),BG.hy+Math.sin(an)*(30+d),5,[GOLD,BPK,'#fff'][q%3],a*(1-(t-k)/.6));}}});}
  // 02 backstab
  if(b2>0&&TG){const a=b2*endF;const bossX=TX0-420;const bp=SP({x:bossX,f:1,exp:0,a:a*seg(t,B(6),B(6)+.4)*(1-seg(t,B(7)-.3,B(7)))});drawStick(bp,t,'#9a9aa8',1,false);ctx.save();ctx.globalAlpha=bp.a;ctx.font='700 26px '+SER;ctx.textAlign='center';ctx.fillStyle='#c0c0d0';ctx.fillText('领导',bossX,GY+40);ctx.restore();
    const wh=[[WAVES[0],'TA方案是抄的…'],[WAVES[1],'TA可不太靠谱…']];wh.forEach(([k,txt],i)=>{const e=i?LOCK:WAVES[1];if(t>=k&&t<e)bubble(TG.hx-30,TG.hy-150,txt,a,eBack(seg(t,k,k+.2)),'#c08080',1);});
    if(t>=LOCK){const dt=t-LOCK;const trophyX=TX0+300,ty=GY-380;const tk=eOut(seg(dt,0,.25));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(7)-.3,B(7)));ctx.translate(lerp(trophyX,TG.fh[0],tk),lerp(ty,TG.fh[1]-40,tk));ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=20;ctx.beginPath();ctx.moveTo(-30,-40);ctx.lineTo(30,-40);ctx.quadraticCurveTo(30,10,0,14);ctx.quadraticCurveTo(-30,10,-30,-40);ctx.fill();ctx.fillRect(-6,14,12,20);ctx.fillRect(-20,32,40,8);ctx.font='900 18px '+SER;ctx.fillStyle='#5a3a04';ctx.textAlign='center';ctx.shadowBlur=0;ctx.fillText('功劳',0,-12);ctx.restore();
      if(dt<1.2){[0,.1,.22].forEach((d,j)=>shock(TG.bh[0],TG.bh[1],seg(dt,d,d+1),a,j==1?'#fff':RED,1500,.8,7));}
      const p=eBack(seg(dt,0,.3));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(7)-.3,B(7)));ctx.translate(TX0+80,GY-660);ctx.scale(p,p);ctx.font='900 64px '+SER;ctx.textAlign='center';ctx.fillStyle=RED;ctx.shadowColor=RED;ctx.shadowBlur=24;ctx.fillText('你的功劳，归我了',0,0);ctx.restore();}}
  // 03
  if(b3>0&&TG){const a=b3*endF;const lab=['会来事','好人缘','情商高'];JABS.forEach((k,i)=>{if(t>=k&&t<k+.7){const side=i%2?1:-1;wordBox(TG.hx+side*240,TG.hy-60-i*30,lab[i%3],a*(1-seg(t,k+.5,k+.7)),eBack(seg(t,k,k+.2)),GOLD,side*.08);sparks(t,k,TG.fh[0],TG.fh[1],24,i+20,600,.5,GOLD);}});
    if(t>=STAMP){const dt=t-STAMP;if(dt<1.6){[0,.12,.26].forEach((d,j)=>shock(TG.hx,TG.hy,seg(dt,d,d+1.2),a,j==1?'#fff':GOLD,2200,.8,7));sparks(t,STAMP,TG.hx,TG.hy,90,44,1500,1,GOLD);}
      const tp=eBack(seg(dt,.05,.35));ctx.save();ctx.globalAlpha=a*(1-seg(t,B(8)-.3,B(8)));ctx.translate(TX0+120,GY-660);ctx.scale(tp,tp);ctx.font='900 58px '+SER;ctx.textAlign='center';ctx.fillStyle=GOLD;ctx.shadowColor=GOLD;ctx.shadowBlur=24;ctx.fillText('会说话，也是一种本事',0,0);ctx.restore();}}
  // 04
  if(b4>0&&TG&&BG){const a=b4*endF;const qs=['你怎么在领导面前…','原来是你说的？','你一直在骗我？'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{const e=[B(8)+.2,...SNAPS,SLAM][i+1];if(t>=k&&t<e)bubble(BG.hx-10,BG.hy-100,qs[i],a,eBack(seg(t,k,k+.2)),BUN,1);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(TG.hx+30,TG.hy-150,'哈哈，误会误会~',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),TC,-1);
    SNAPS.forEach((k,i)=>{if(t>=k&&t<k+.5){shock(TG.hx,TG.hy,seg(t,k,k+.45),a,'#fff',400,.9,5);shards(t,k,TG.hx,TG.hy,a,i+40,'#fff',8,500);}});
    if(t>=SLAM&&t<SLAM+1.8){const dt=t-SLAM;for(let j=0;j<5;j++)shock(TG.hx,TG.hy,seg(dt,j*.09,j*.09+1.3),endF,j%2?'#fff':RED,3000,.8,8);shards(t,SLAM,TG.hx,TG.hy,endF,61,'#fff',30,1200);
      const p=eBack(seg(dt,0,.25));ctx.save();ctx.globalAlpha=endF*(1-seg(dt,1.3,1.8));ctx.translate(BG.hx+40,BG.hy-170);ctx.scale(p,p);ctx.font='900 58px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=BUN;ctx.shadowBlur=24;ctx.fillText('原来是你！',0,0);ctx.restore();
      if(dt<.4){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,200,200,${.5*(1-dt/.4)*endF})`;ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();}}}
  // storm
  if(dark>0&&TG){const a=dark*endF;WORDS.forEach((w,i)=>{const an=t*.7+i*TAU/4;const rr=lerp(560,360,seg(t,B(9),CLIMAX));wordBox(TG.hx+Math.cos(an)*rr,TG.hy+80+Math.sin(an)*rr*.45,w,a*seg(t,B(9)+.3+i*.25,B(9)+.6+i*.25),1,'#a08880',Math.sin(t+i)*.08);});
    if(BG&&t<CLIMAX-.7)bubble(BG.hx-10,BG.hy-100,'以后…不会再信了',a*seg(t,B(9)+.9,B(9)+1.2),1,BUN,1);
    if(BG&&t>=CLIMAX-.6)bubble(BG.hx-10,BG.hy-100,'我看清你了！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,BUN,1);}
  // climax: mirror beam
  if(t>=CLIMAX-.55&&t<CLIMAX&&BG){const p=seg(t,CLIMAX-.55,CLIMAX);const O=BG.fh;const r=rng(Math.floor(t*30));for(let i=0;i<30;i++){const an=r()*TAU,d0=900*(1-p)*(.5+r());dot(O[0]+Math.cos(an)*d0,O[1]+Math.sin(an)*d0,4,i%2?GOLD:'#9ae8ff',p*endF);}glow(circ(O[0],O[1],700*(1-p)+100,700*(1-p)+100,80),1,'#9ae8ff',2.4,p*endF,12,false);}
  if(t>=CLIMAX&&BG&&TG){const a=endF,dt=t-CLIMAX;const O=[BG.fh[0],BG.fh[1]-50];mirror(O[0],O[1],1.2*eBack(seg(dt,0,.25)),a*(1-seg(t,B(11)-.3,B(11))),1);
    if(dt<1.6){ctx.save();ctx.globalCompositeOperation='lighter';ctx.globalAlpha=a*(1-seg(dt,1.0,1.6));const gg=ctx.createLinearGradient(O[0],O[1],TG.hx,TG.hy);gg.addColorStop(0,'rgba(220,250,255,.9)');gg.addColorStop(1,'rgba(160,220,255,.2)');ctx.fillStyle=gg;ctx.beginPath();ctx.moveTo(O[0],O[1]-30);ctx.lineTo(TG.hx-200,TG.hy-200);ctx.lineTo(TG.hx-200,TG.hy+260);ctx.lineTo(O[0],O[1]+30);ctx.fill();ctx.restore();}
    ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<32;i++){const an=i/32*TAU+t*.05;const L=2400*fire;const gg=ctx.createLinearGradient(O[0],O[1],O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);gg.addColorStop(0,`rgba(190,240,255,${.18*a})`);gg.addColorStop(1,'rgba(190,240,255,0)');ctx.strokeStyle=gg;ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(O[0],O[1]);ctx.lineTo(O[0]+Math.cos(an)*L,O[1]+Math.sin(an)*L);ctx.stroke();}ctx.restore();
    if(dt<2.6){[0,.12,.26,.4].forEach((d,j)=>shock(O[0],O[1],seg(dt,d,d+1.4),a,j%2?'#fff':'#9ae8ff',2800,.8,9));sparks(t,CLIMAX,O[0],O[1],140,100,2000,1.3,GOLD);if(dt<.4)dot(O[0],O[1],300*(1-dt/.4),'#fff',a);
      WORDS.forEach((w,i)=>{shards(t,CLIMAX,TG.hx+Math.cos(i*1.6)*360,TG.hy+80+Math.sin(i*1.6)*160,a,i+140,'#d8d0c8',20,1100);});}
    if(dt>=.5&&dt<1.8)bubble(TG.hx+40,TG.hy-150,'溜了溜了…',a*(1-seg(dt,1.6,1.8)),1,TC,-1);
    const r2=rng(171);for(let i=0;i<40;i++){const st=r2()*1.6,sx=r2()*W*1.4-W*.2,sp=120+r2()*200;const p=dt-st-.1;if(p<0)continue;dot(sx+Math.sin(p*2+i)*40,GY-p*sp,2+r2()*3,[GOLD,'#9ae8ff','#fff'][i%3],a*(1-seg(p,2.4,3.4))*.85);}}
  if(dark>0){ctx.save();ctx.globalAlpha=dark*.3*endF;ctx.fillStyle='#040406';ctx.fillRect(-3000,-3000,W+6000,H+6000);ctx.restore();rain(dark*endF,t);}
  ctx.restore();
  if(hit>.15){const r=rng(Math.floor(t*30)+1);ctx.save();ctx.globalCompositeOperation='lighter';for(let i=0;i<60;i++){const an=r()*TAU,r0=360+r()*200,r1=r0+250+r()*600;ctx.globalAlpha=hit*.5*r();ctx.strokeStyle=[TC,'#fff',RED,BUN,GOLD][i%5];ctx.lineWidth=1+r()*2.5;ctx.beginPath();ctx.moveTo(W*.38+Math.cos(an)*r0,H/2+Math.sin(an)*r0*.6);ctx.lineTo(W*.38+Math.cos(an)*r1,H/2+Math.sin(an)*r1*.6);ctx.stroke();}ctx.restore();}
  if(hit>0){ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=`rgba(255,235,215,${.32*hit*hit})`;ctx.fillRect(0,0,W,H);ctx.restore();}
  chroma(hit*15);
  for(const k of INVERT){if(t>=k&&t<k+.067)invertFrame();}
  const hud=seg(t,DROP+.6,DROP+1.2)*(1-seg(t,B(11)+.6,B(11)+1.2));if(hud>0&&!window.NOCAP){ctx.save();ctx.globalAlpha=hud*.9;glow(circ(71,86,14,12,20),1,TC,2,1,6,false);ctx.textAlign='left';ctx.fillStyle=WHITE;ctx.font='600 26px '+SER;ctx.fillText('人间动物志 · 笑面虎',104,76);ctx.fillStyle='rgba(246,242,255,.65)';ctx.font='500 21px '+SER;ctx.fillText('第二期 · 每种人，都是一种动物',104,104);ctx.restore();}
  if(!window.NOCAP){const s2=ctx.createRadialGradient(TX,450,0,TX,450,480);s2.addColorStop(0,'rgba(8,6,4,.76)');s2.addColorStop(.6,'rgba(8,6,4,.5)');s2.addColorStop(1,'rgba(8,6,4,0)');ctx.save();ctx.translate(TX,450);ctx.scale(1.25,.8);ctx.translate(-TX,-450);ctx.fillStyle=s2;ctx.fillRect(TX-480,-30,960,960);ctx.restore();}
  ctx.save();ctx.translate(sh.x*.35,sh.y*.35);
  const H2=n=>B(n)+BAR/2;
  caption(t,.05,H2(1),[[['有一种人',0]],[['见谁都',0],['笑',1]]]);
  caption(t,H2(1),B(2),[[['嘴甜',0]],[['人缘',0],['超好',1]]]);
  caption(t,B(2),H2(2),[[['当着你的面',0]],[['夸你',0],['最棒',1]]]);
  caption(t,H2(2),B(3),[[['一转身',0]],[['笑容',0],['就没了',1]]]);
  caption(t,B(3),DROP-.03,[[['笑里',0]],[['藏',0],['刀',1]]]);
  if(!window.NOCAP&&t>=DROP&&t<B(5)){const a=win(t,DROP,B(5),.03,.3),k=1+.5*(1-eOut(seg(t,DROP,DROP+.35)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.translate(TX,470);ctx.scale(k,k);
    ctx.font='600 28px '+SER;ctx.fillStyle=WHITE;ctx.letterSpacing='10px';ctx.fillText('SMILING TIGER',5,-140);ctx.letterSpacing='0px';ctx.font='900 170px '+SER;const gg=ctx.createLinearGradient(-260,0,260,0);gg.addColorStop(0,'#fff0c8');gg.addColorStop(.5,TC);gg.addColorStop(1,RED);ctx.fillStyle=gg;ctx.shadowColor='rgba(255,140,60,.9)';ctx.shadowBlur=34;ctx.fillText('笑面虎',0,50);ctx.shadowBlur=0;
    ctx.font='500 26px '+SER;ctx.fillStyle='rgba(255,244,230,.9)';ctx.fillText('人间动物志 · 第二期',0,104);ctx.font='500 24px '+SER;ctx.fillStyle='rgba(255,200,140,.92)';ctx.fillText('当面夸 · 背后捅 · 会来事 · 防不胜防',0,144);ctx.restore();}
  caption(t,B(5),H2(5),[[['当面',0]],[['夸你',0],['上天',1]]],['01','当面一套',TC]);
  caption(t,H2(5),B(6),[[['句句',0]],[['都是',0],['糖',1]]],['01','当面一套',TC]);
  caption(t,B(6),H2(6),[[['背后',0]],[['捅你',0],['一刀',1]]],['02','背后一刀',RED]);
  caption(t,H2(6),B(7),[[['你的功劳',0]],[['TA',0],['来领',1]]],['02','背后一刀',RED]);
  caption(t,B(7),H2(7),[[['好的一面',0]],[['情商',0],['超高',1]]],['03','会来事',GOLD]);
  caption(t,H2(7),B(8),[[['场面话',0]],[['说得',0],['漂亮',1]]],['03','会来事',GOLD]);
  caption(t,B(8),H2(8),[[['坏的一面',0]],[['防不',0],['胜防',1]]],['04','防不胜防','#b0a0a0']);
  caption(t,H2(8),B(9),[[['笑得越甜',0]],[['刀',0],['越狠',1]]],['04','防不胜防','#b0a0a0']);
  caption(t,B(9),H2(9),[[['假笑骗得了',0]],[['一时',1]]]);
  caption(t,H2(9),CLIMAX-.02,[[['骗不了',0]],[['一世',1]]]);
  if(!window.NOCAP&&t>=CLIMAX&&t<B(11)){const a=win(t,CLIMAX,B(11),.02,.3),k=1+.6*(1-eOut(seg(t,CLIMAX,CLIMAX+.3)));ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 58px '+SER;ctx.fillStyle=WHITE;ctx.fillText('看人',TX,380);
    ctx.translate(TX,525);ctx.scale(k,k);ctx.font='900 136px '+SER;ctx.fillStyle=hiFill();ctx.shadowColor='rgba(150,220,255,.85)';ctx.shadowBlur=36;ctx.fillText('别只看笑',0,0);ctx.restore();}
  caption(t,B(11),27.6,[[['真诚',0]],[['才是最高的',0],['情商',1]]]);
  ctx.restore();
  const vg=ctx.createRadialGradient(W/2,H/2,H*.35,W/2,H/2,W*.62);vg.addColorStop(0,'rgba(0,0,0,0)');vg.addColorStop(1,'rgba(0,0,0,.55)');ctx.fillStyle=vg;ctx.fillRect(0,0,W,H);
  if(window.boyCard)boyCard(ctx,t,27.45,{accent:TC,x:735,y:540,sub:'@知识探索者 · 人间动物志'});
  ctx.save();ctx.globalAlpha=.06;ctx.globalCompositeOperation='overlay';ctx.drawImage(NOISE[Math.floor(t*30)%4],0,0,W,H);ctx.restore();
};
