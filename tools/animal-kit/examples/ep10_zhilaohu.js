// ===== 人间动物志 · 纸老虎 =====
const PAPER='#f4e6c8',PSTR='#ff5a4a',PSH='#ff3a3a';
const RX=560;
// paper tiger (origami, biped): feet at (x,y). o:{exp 0 fierce 1 proud 2 scared 3 sad 4 shock, roar, puff, tear, gold, shadow}
function ptPaths(){return[['leg',[[-22,0],[-18,-62]]],['leg2',[[22,0],[18,-62]]],['body',[[-44,-60],[44,-60],[56,-128],[30,-180],[-30,-180],[-56,-128],[-44,-60]]],
  ['head',[[-52,-206],[-30,-262],[42,-262],[64,-206],[40,-180],[-28,-180],[-52,-206]]],['ear',[[-30,-262],[-44,-296],[-10,-262]]],['ear2',[[22,-262],[44,-298],[42,-262]]],
  ['tail',[[-50,-100],[-96,-118],[-86,-160],[-118,-190]]]];}
function ptiger(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,roar:0,puff:0,tear:0,gold:0,shadow:0,sq:1,lean:0,fhx:60,fhy:-110,bhx:-60,bhy:-110},o);
  const C=mixc(PAPER,GOLD,o.gold),SC=mixc(PSTR,'#ffb040',o.gold);const ss=s*(1+o.puff*.35);
  // giant shadow behind
  if(o.shadow>.01){ctx.save();ctx.translate(x-dir*60,y);ctx.scale(ss*1.7*dir,ss*1.7);const P=ptPaths();ctx.globalAlpha=a*o.shadow*.35;ctx.fillStyle='#3a0608';ctx.beginPath();P[2][1].forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();ctx.beginPath();P[3][1].forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();ctx.restore();
    ctx.save();ctx.translate(x-dir*60,y);ctx.scale(ss*1.7*dir,ss*1.7);P.forEach(([n,pts])=>glow(pts,1,PSH,2.2/ss,a*o.shadow*.5,20,false));glow([[-30,-236],[-4,-224]],1,PSH,3/ss,a*o.shadow*.8,20,false);glow([[42,-236],[18,-224]],1,PSH,3/ss,a*o.shadow*.8,20,false);ctx.restore();}
  ctx.save();ctx.translate(x,y);ctx.scale(ss*dir,ss*o.sq);ctx.rotate(o.lean);const w=3.2/ss;
  const P=ptPaths();
  ctx.save();ctx.globalAlpha=a*.94*Math.min(1,prog*2);ctx.fillStyle='#120c06';[P[2][1],P[3][1]].forEach(pp=>{ctx.beginPath();pp.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();});ctx.restore();
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,C,w,a,14,prog<1);});
  const fp=seg(prog,.55,.85);if(fp>0){const fa=a*fp,e=o.exp;
    // folds
    glow([[0,-60],[0,-180]],1,C,w*.6,fa*.5,4,false);glow([[-56,-128],[0,-150],[56,-128]],1,C,w*.6,fa*.4,4,false);glow([[6,-262],[6,-180]],1,C,w*.5,fa*.3,4,false);
    // stripes
    [[[-36,-160],[-22,-150],[-36,-140]],[[36,-160],[22,-150],[36,-140]],[[-40,-110],[-26,-100],[-40,-90]],[[40,-110],[26,-100],[40,-90]],[[-8,-262],[0,-248],[8,-262]],[[-44,-214],[-32,-208]],[[56,-214],[44,-208]]].forEach(l=>glow(l,1,SC,w*.9,fa,8,false));
    const ex1=-14,ex2=26,ey=-226;
    if(e==0||e==1){glow([[ex1-14,ey-16],[ex1+8,ey-6]],1,C,w*1.1,fa,6,false);glow([[ex2+14,ey-16],[ex2-8,ey-6]],1,C,w*1.1,fa,6,false);dot(ex1,ey,4.5,e?'#fff':'#ff8a6a',fa);dot(ex2,ey,4.5,e?'#fff':'#ff8a6a',fa);}
    else if(e==2){glow([[ex1-10,ey-14],[ex1+8,ey-20]],1,C,w,fa,6,false);glow([[ex2+10,ey-14],[ex2-8,ey-20]],1,C,w,fa,6,false);dot(ex1,ey,4,'#fff',fa);dot(ex2,ey,4,'#fff',fa);const sp=(t0g*1.2)%1;ctx.save();ctx.globalAlpha=fa*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(58,-250+sp*40,5,8,0,0,TAU);ctx.fill();ctx.restore();}
    else if(e==3){glow(Q([ex1-8,ey-4],[ex1,ey+4],[ex1+8,ey-4],6),1,C,w,fa,6,false);glow(Q([ex2-8,ey-4],[ex2,ey+4],[ex2+8,ey-4],6),1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(ex1,ey+10+tp*30,4,'#8ad8ff',fa*(1-tp));}
    else{glow(circ(ex1,ey,7,7,12),1,'#fff',w*.8,fa,6,false);glow(circ(ex2,ey,7,7,12),1,'#fff',w*.8,fa,6,false);}
    // mouth
    const r=o.roar;if(r>.05){ctx.save();ctx.globalAlpha=fa;ctx.fillStyle='#2a0606';ctx.beginPath();ctx.moveTo(-14,-200);ctx.lineTo(30,-200);ctx.lineTo(8,-200+r*30);ctx.fill();ctx.restore();glow([[-14,-200],[30,-200],[8,-200+r*30],[-14,-200]],1,C,w,fa,6,false);
      ctx.save();ctx.globalAlpha=fa;ctx.fillStyle='#fff';[[-6,-200],[22,-200]].forEach(([fx,fy])=>{ctx.beginPath();ctx.moveTo(fx-4,fy);ctx.lineTo(fx+4,fy);ctx.lineTo(fx,fy+10*r);ctx.fill();});ctx.restore();}
    else if(e==1)glow(Q([-8,-200],[8,-190],[24,-200],6),1,C,w,fa,6,false);else if(e==2||e==3)glow([[-6,-196],[2,-200],[10,-196],[18,-200]],1,C,w,fa,6,false);else glow([[-8,-198],[24,-198]],1,C,w,fa,6,false);
    // tear
    if(o.tear>.01){const tp=o.tear;const L=[[-56,-120],[-30,-134],[-12,-112],[8,-140],[26,-118],[44,-142],[56,-126]];glow(partial(L,Math.min(1,tp*1.3)),1,'#fff',w*1.2,fa,14,false);
      if(tp>.5){ctx.save();ctx.globalAlpha=fa*seg(tp,.5,1);ctx.fillStyle='#000';ctx.beginPath();L.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]+8*tp):ctx.moveTo(q[0],q[1]));for(let i=L.length-1;i>=0;i--)ctx.lineTo(L[i][0],L[i][1]+18*tp);ctx.fill();ctx.restore();}}
    const ap=1;arm([30,-160],[o.fhx,o.fhy],100,C,w,fa,-1);arm([-30,-160],[o.bhx,o.bhy],100,C,w,fa,1);dot(o.fhx,o.fhy,9,C,fa);dot(o.bhx,o.bhy,9,C,fa);}
  ctx.restore();const k=ss;return{hx:x+dir*k*6,hy:y+k*o.sq*-232,top:y+k*o.sq*-296,cx:x,cy:y+k*o.sq*-150,fh:[x+dir*k*o.fhx,y+k*o.sq*o.fhy]};}
function paperBits(t,t0,x,y,a,seed,n=18){const dt=t-t0;if(dt<0||dt>1.6)return;const r=rng(seed);for(let i=0;i<n;i++){const an=-Math.PI*(.1+r()*.8),v=300+r()*600;const px=x+Math.cos(an)*v*dt,py=y+Math.sin(an)*v*dt+500*dt*dt;const s=10+r()*12,rot=dt*(r()*10-5);const pts=[[-s,-s*.7],[s,-s*.4],[s*.6,s*.8],[-s*.8,s*.5],[-s,-s*.7]].map(([qx,qy])=>[px+qx*Math.cos(rot)-qy*Math.sin(rot),py+qx*Math.sin(rot)+qy*Math.cos(rot)]);glow(pts,1,PAPER,1.6,a*(1-seg(dt,1,1.6)),8,false);}}
function gust(t,t0,t1,x,y,a){if(t<t0||t>t1)return;const p=seg(t,t0,t1);for(let i=0;i<5;i++){const yy=y-i*60,xx=lerp(x+500,x-400,p)+i*40;glow(Q([xx,yy],[xx-90,yy-30],[xx-180,yy],10),1,'#bfe8ff',2,a*Math.sin(p*Math.PI)*.8,10,false);}}
const RPp=o=>Object.assign({x:RX,exp:0,roar:0,puff:0,tear:0,gold:0,shadow:0,sq:1,lean:0,fhx:60,fhy:-110,bhx:-60,bhy:-110},o);
const ROAR=o=>RPp({exp:0,roar:1,puff:1,shadow:1,fhx:110,fhy:-220,bhx:-100,bhy:-220,sq:1.04,...o});
const KR=[[0,RPp({})],[2.67,RPp({})],[3.2,RPp({})],[3.3,ROAR({}),'snap'],[4.3,RPp({exp:1,puff:.3})],[4.66,ROAR({exp:1,roar:.6}),'snap'],[5.8,RPp({exp:1,puff:.3})],
 [5.95,RPp({exp:4,lean:-.35,sq:.9,fhx:120,fhy:-250,bhx:-120,bhy:-240}),'snap'],[6.5,RPp({exp:2,lean:-.2,sq:.92})],[7.0,RPp({exp:2,lean:0})],
 [DROP,ROAR({}),'snap'],[DROP+.8,RPp({exp:1,puff:.2})]];
MK.forEach((k,i)=>KR.push([k-.05,RPp({exp:1,puff:.2})],[k,ROAR({lean:i%2?.06:-.06}),'snap'],[k+.45,RPp({exp:1,puff:.4,shadow:.4,fhx:90,fhy:-150})]));
KR.push([B(6),RPp({exp:1,puff:.3})],[WAVES[0],RPp({exp:2,puff:0,sq:.94,fhx:40,fhy:-170,bhx:-40,bhy:-170}),'snap'],[WAVES[0]+.4,RPp({exp:2,sq:.94,fhx:70,fhy:-90})],[WAVES[1],RPp({x:RX-80,exp:2,sq:.9,lean:-.1}),'snap'],[WAVES[1]+.4,RPp({x:RX-80,exp:2,sq:.9})],
 [LOCK,RPp({x:RX-120,exp:4,sq:.85,lean:-.15,fhx:100,fhy:-230,bhx:-100,bhy:-230}),'snap'],[LOCK+.6,RPp({x:RX-120,exp:2,sq:.88})],[B(7)-.1,RPp({x:RX,exp:2})],[B(7)+.2,RPp({exp:0})]);
JABS.forEach((k,i)=>KR.push([k,ROAR({puff:.6+i*.3,shadow:.8}),'snap'],[k+.4,RPp({exp:0,puff:.5,shadow:.5,fhx:100,fhy:-160})]));
KR.push([STAMP,ROAR({puff:1.2,shadow:1.2,sq:1.08}),'snap'],[STAMP+.6,RPp({exp:1,puff:.8,shadow:.8,fhx:110,fhy:-200,bhx:-100,bhy:-200})],[B(8),RPp({exp:1,puff:.6,shadow:.3})]);
SNAPS.forEach((k,i)=>KR.push([k,RPp({exp:4,puff:.4-i*.2,tear:.35+i*.3,sq:.92}),'snap'],[k+.35,RPp({exp:2,puff:.3-i*.2,tear:.35+i*.3})]));
KR.push([SLAM-.2,RPp({exp:2,tear:.7})],[SLAM,RPp({exp:4,tear:1,sq:.82,lean:.1}),'snap'],[SLAM+.5,RPp({exp:3,tear:1,sq:.82,fhx:90,fhy:-40,bhx:-80,bhy:-40})],[B(9),RPp({exp:3,tear:1,sq:.82,fhx:90,fhy:-40,bhx:-80,bhy:-40})],[CLIMAX-.6,RPp({exp:3,tear:1,sq:.84,fhx:90,fhy:-40,bhx:-80,bhy:-40})],[CLIMAX-.15,RPp({exp:0,tear:.6,sq:.8})],
 [CLIMAX,RPp({exp:1,gold:1,tear:0,sq:1.12,fhx:110,fhy:-230,bhx:-100,bhy:-230}),'snap'],[CLIMAX+.6,RPp({exp:1,gold:1,fhx:100,fhy:-200,bhx:-90,bhy:-200})],[27.5,RPp({exp:1,gold:1,fhx:100,fhy:-200,bhx:-90,bhy:-200})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:200,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:160})],[4.1,BPp({a:0,x:160})],[4.4,BPp({a:1,exp:1,fhx:70,fhy:-110})],[4.7,BPp({exp:1,droop:.6,hop:.2}),'snap'],[5.5,BPp({exp:1,droop:.4})],[6.0,BPp({exp:0})],[B(5),BPp({exp:1,droop:.5})],[MK[2],BPp({exp:1,droop:.9,hop:.2}),'snap'],
 [B(6),BPp({exp:0})],[B(7)-.3,BPp({a:1,exp:0})],[B(7)-.1,BPp({a:0})],[B(8)-.4,BPp({a:0,x:300})],
 [B(8)-.1,BPp({a:1,x:300,exp:3})],[SNAPS[0]-.1,BPp({x:330,exp:3,fhx:80,fhy:-90})],[SNAPS[0],BPp({x:350,exp:3,fhx:100,fhy:-100}),'snap'],[SNAPS[1],BPp({x:350,exp:1,fhx:100,fhy:-100}),'snap'],[SLAM+.4,BPp({x:300,exp:1})],[B(9)-.2,BPp({a:0,x:300})],
 [CLIMAX+.2,BPp({a:0,x:160})],[CLIMAX+.7,BPp({a:1,x:260,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:260,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:260,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0,x:1120})],[2.5,OPp({a:0,x:1120})],[2.75,OPp({a:1,exp:0,fhx:110,fhy:-180})],[3.3,OPp({exp:1,lean:.12,sq:.94}),'snap'],[4.0,OPp({exp:1})],[B(5),OPp({exp:1})],[MK[0],OPp({exp:1,lean:.1,sweat:1}),'snap'],[MK[2]+.3,OPp({exp:1,sweat:1})],
 [B(6),OPp({exp:0,fhx:90,fhy:-90,bhx:-20,bhy:-90})],[WAVES[0],OPp({exp:0,fhx:120,fhy:-150,bhx:20,bhy:-150})],[LOCK,OPp({exp:2,fhx:110,fhy:-180})],[B(7)-.3,OPp({exp:2})],[B(7)-.1,OPp({a:0})],[B(8)-.4,OPp({a:0})],
 [B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:2,dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,OPp({a:0,x:1260,dir:1,walk:1})],
 [CLIMAX+.2,OPp({a:0,x:1100})],[CLIMAX+.7,OPp({a:1,x:980,exp:0,fhx:120,fhy:-210})],[27.5,OPp({a:1,x:980,exp:0,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
const EP={name:'纸老虎',en:'PAPER TIGER',epn:'第十期',acc:PSTR,grad:['#ffffff','#ffe2b8','#ff6a5a'],glowC:'rgba(255,110,90,.85)',kwCol:'rgba(255,225,210,.92)',kw:'虚张声势 · 遇事就怂 · 能壮胆 · 一戳就破',slamCol:PAPER,
  words:['心虚','逞强','嘴硬','害怕'],
  cams:[[0,560,640,1.9],[2.3,570,640,1.5],[2.67,640,620,1.0],[5.33,630,610,1.05],[7.4,610,600,1.12],[DROP,650,600,.95],[B(5),640,610,1.0],[B(6),640,620,1.02],[LOCK,620,610,1.08],[B(7),660,600,.96],[STAMP,660,590,.94],[B(8),650,620,1.02],[SLAM,640,640,1.04],[B(9),620,720,1.12],[CLIMAX-.5,610,760,1.24],[CLIMAX,660,580,.95],[B(11),660,600,1.0]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#1a0606','#5a1414','#ff8a6a']],[B(5),['#140808','#3a1a14','#a05a40']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['嗓门',0],['最大',1]]],[[['开口就是',0]],[['我最',0],['厉害',1]]],[[['看着',0]],[['凶得',0],['吓人',1]]],[[['一阵风',0]],[['就',0],['吹跑了',1]]],[[['人称',0]],[['纸老虎',1]]],
   [[['张口闭口',0]],[['老子',0],['最牛',1]]],[[['气势',0]],[['拉满',1]]],
   [[['真要上场',0]],[['TA先',0],['溜了',1]]],[[['嘴上',0]],[['天下',0],['无敌',1]]],
   [[['好的一面',0]],[['能给自己',0],['壮胆',1]]],[[['气势在',0]],[['没人敢',0],['欺负',1]]],
   [[['坏的一面',0]],[['一戳',0],['就破',1]]],[[['牛皮吹破',0]],[['没人',0],['再信',1]]],
   [[['吼得越大声',0]],[['心里越',0],['害怕',1]]],[[['纸糊的盔甲',0]],[['护不住',0],['自己',1]]]],
  tags:[['01','虚张声势',PSTR],['02','遇事就怂',RED],['03','能壮胆',GOLD],['04','一戳就破','#a0a8b8']],
  cl:['真正的强大','不靠吼'],endCap:[[['话少一点',0]],[['底气',0],['多一点',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170,fh:[bo.x,GY-100]};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=ptiger(ro.x,GY,1.5,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const bx=RG.hx+30,by=RG.top-70;
  gust(t,5.75,6.5,RG.cx,RG.cy,endF);if(t>=5.95)paperBits(t,5.95,RG.cx,RG.cy-80,endF,61,10);
  SNAPS.forEach((k,i)=>{if(t>=k)paperBits(t,k,RG.cx-20,RG.cy+10,endF*b4,70+i,12);});
  if(t>=SLAM)paperBits(t,SLAM,RG.cx,RG.cy,endF,90,34);
  if(t>=CLIMAX){const dt=t-CLIMAX;if(dt<.6)shards(t,CLIMAX,RG.cx,RG.cy,endF,201,PAPER,26,900);}
  // ---- intro ----
  if(t<DROP){bubble(bx,by,'嗷呜~我最凶！',win(t,1.6,2.6,.1,.2),1,PSTR,-1);
    bubble(OG.hx-10,OG.top-40,'早啊~',win(t,2.8,3.25,.06,.06),eBack(seg(t,2.8,2.95)),OC,1);
    bubble(bx,by,'谁敢惹我！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),PSTR,-1);
    bubble(BG.hx+10,BG.hy-110,'好…好凶…',win(t,4.45,5.0,.06,.1),eBack(seg(t,4.45,4.6)),BUN,-1);
    bubble(bx,by,'怕了吧哈哈！',win(t,4.66,5.75,.06,.15),eBack(seg(t,4.66,4.8)),PSTR,-1);
    bubble(bx,by,'哇啊啊！',win(t,5.95,6.6,.04,.12),eBack(seg(t,5.95,6.1)),'#bfe8ff',-1);
    bubble(BG.hx+10,BG.hy-110,'一阵风就…？',win(t,6.2,6.95,.06,.12),eBack(seg(t,6.2,6.35)),BUN,-1);
    proverb(t,'外强中干',RX-60,GY-620,3,PSTR,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(bx,by,['我一拳一个！','都给我让开！','我可不好惹！'][i],a,eBack(seg(t,k,k+.2)),PSTR,-1);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(OG.hx-10,OG.top-40,'这活你来扛？',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),OC,1);
    if(t>=WAVES[1]&&t<LOCK)bubble(bx-60,by,'我…我肚子疼！',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),'#bfe8ff',-1);
    if(t>=LOCK)bubble(bx-100,by,'下次！下次一定！',a,eBack(seg(t,LOCK,LOCK+.2)),'#bfe8ff',-1);
    bigText(t,LOCK,B(7),RX+400,GY-690,'嘴上无敌，遇事就怂',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<JABS[0])bubble(bx,by,'先吓住再说！',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    if(t>=JABS[0]-.3&&t<STAMP+.4){const p=seg(t,JABS[0],STAMP);wordBox(lerp(1060,1250,eIn(p)),GY-240,'坏蛋',a*(1-seg(t,STAMP,STAMP+.4)),1,'#a0a8b0',p*.3);}
    bigText(t,STAMP,B(8),RX+400,GY-700,'气势，也是一种保护',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['吹牛','空架子','怂'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*260+60,GY-600-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'戳一下~',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(OG.hx+10,OG.top-40,'原来是纸糊的',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,-1);
    bigText(t,SLAM,SLAM+1.8,RX+400,GY-700,'一戳就破，原形毕露','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(bx,by+60,'其实…我好怕',a*seg(t,B(9)+.9,B(9)+1.2),1,PAPER,-1);
    if(t>=CLIMAX-.6)bubble(bx,by+60,'这次，我真上！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+10,BG.hy-110,'好帅！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(OG.hx-10,OG.top-40,'靠谱！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
