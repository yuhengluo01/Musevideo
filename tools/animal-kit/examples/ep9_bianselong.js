// ===== 人间动物志 · 变色龙 =====
const CG='#6dff8a',CGRAY='#7a7a86',CRB='#ff9ad0';
const RX=560;
function hueHex(h){h=((h%360)+360)%360;const l=.66,a=.34;const f=n=>{const k=(n+h/30)%12;return Math.round(255*(l-a*Math.max(-1,Math.min(k-3,9-k,1)))).toString(16).padStart(2,'0');};return'#'+f(0)+f(8)+f(4);}
// chameleon: feet at (x,y) facing dir. o:{exp 0 normal 1 fawn 2 sad 3 dizzy 4 shock, ct tiger-orange, cw white, cx gray, gold, rb rainbow, tongue}
function cham(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,ct:0,cw:0,cx:0,gold:0,rb:0,sq:1,lean:0,fhx:96,fhy:-60,tongue:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;
  let C=mixc(mixc(mixc(CG,TC,o.ct),BUN,o.cw),CGRAY,o.cx);C=mixc(C,GOLD,o.gold);
  const colOf=i=>o.rb>0?mixc(C,hueHex(i*47+t0g*260),o.rb):C;
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#060c08';ctx.beginPath();ctx.ellipse(0,-122,82,50,0,0,TAU);ctx.fill();ctx.beginPath();ctx.moveTo(56,-164);ctx.lineTo(132,-142);ctx.lineTo(142,-118);ctx.lineTo(110,-98);ctx.lineTo(60,-100);ctx.fill();ctx.restore();
  const P=[['leg',[[-62,0],[-74,-40],[-52,-84]]],['leg2',[[-22,0],[-30,-40],[-16,-76]]],['leg3',[[34,0],[22,-40],[36,-80]]],['body',circ(0,-122,82,50,48)],
    ['head',[[58,-164],[132,-142],[142,-118],[110,-98],[62,-100]]],['casque',Q([58,-164],[66,-206],[104,-150],8)],
    ['tail',cat([[-80,-118],[-112,-118]],spiral(-120,-82,36,1.5,-1,30,-Math.PI/2))],
    ['crest',[[-70,-160],[-56,-176],[-42,-168],[-28,-182],[-14,-172],[0,-186],[14,-174],[28,-184],[42,-170],[56,-170]]],
    ['eye',circ(96,-140,17,17,24)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,colOf(i),w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp;
    [[-40,-130],[-6,-122],[28,-134],[-24,-102],[14,-100]].forEach(([px,py],i)=>glow(circ(px,py,9,7,14),1,colOf(i+3),w*.7,fa*.8,6,false));
    const ex=96,ey=-140;
    if(e==0){dot(ex+5,ey,5,'#fff',fa);}
    else if(e==1){glow(Q([ex-9,ey+2],[ex,ey-8],[ex+9,ey+2],6),1,colOf(1),w,fa,6,false);ctx.save();ctx.globalAlpha=fa*.6;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(102,-112,7,0,TAU);ctx.fill();ctx.restore();}
    else if(e==2){dot(ex+3,ey+6,4.5,'#fff',fa);glow([[ex-12,ey-24],[ex+10,ey-20]],1,colOf(1),w,fa,6,false);const tp=(t0g*1.4)%1;dot(ex+2,ey+18+tp*34,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow(spiral(ex,ey,12,2,1,24,t0g*12),1,'#fff',w*.8,fa,6,false);}
    else{dot(ex,ey,3,'#fff',fa);glow(circ(ex,ey,9,9,14),1,'#fff',w*.8,fa,6,false);}
    if(e==1||e==0)glow(Q([112,-110],[126,-104],[138,-116],6),1,colOf(2),w*.8,fa,6,false);else glow([[114,-108],[136,-112]],1,colOf(2),w*.8,fa,6,false);
    if(o.tongue>0){const L=o.tongue*260;glow([[140,-116],[140+L,-116-L*.15]],1,'#ff6a8a',w*1.3,fa,10,false);dot(140+L,-116-L*.15,10,'#ff6a8a',fa);}
    arm([40,-110],[o.fhx,o.fhy],90,colOf(5),w,fa,-1);dot(o.fhx,o.fhy,8,colOf(5),fa);}
  ctx.restore();return{hx:x+dir*s*96,hy:y+s*o.sq*-140,cx:x+dir*s*20,cy:y+s*o.sq*-125,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy],col:C};}
function chip(x,y,r,col,a,rot){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a*.9;ctx.fillStyle='#0a0a10';ctx.fillRect(-r,-r*1.3,r*2,r*2.6);ctx.restore();
  const c=Math.cos(rot),s=Math.sin(rot);const P=[[-r,-r*1.3],[r,-r*1.3],[r,r*1.3],[-r,r*1.3],[-r,-r*1.3]].map(([px,py])=>[x+px*c-py*s,y+px*s+py*c]);glow(P,1,col,2.4,a,12,false);
  ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a*.7;ctx.fillStyle=col;ctx.fillRect(-r*.7,-r,r*1.4,r*1.3);ctx.restore();}
const RPp=o=>Object.assign({x:RX,dir:1,exp:0,ct:0,cw:0,cx:0,gold:0,rb:0,sq:1,lean:0,fhx:96,fhy:-60,tongue:0},o);
const UP={fhx:120,fhy:-170};
const KR=[[0,RPp({})],[2.67,RPp({})],[3.2,RPp({})],[3.3,RPp({exp:1,ct:1,sq:1.05,...UP}),'snap'],[4.4,RPp({exp:1,ct:1})],[4.55,RPp({exp:1,ct:1,dir:-1})],[4.66,RPp({dir:-1,exp:1,cw:1,sq:1.05,...UP}),'snap'],[5.85,RPp({dir:-1,exp:1,cw:1})],
 [5.95,RPp({exp:3,rb:1,sq:.9}),'snap'],[6.5,RPp({exp:3,rb:1})],[7.0,RPp({exp:4,rb:.3})],
 [DROP,RPp({exp:0,sq:1.08,fhx:130,fhy:-200}),'snap'],[DROP+.8,RPp({exp:0})]];
MK.forEach((k,i)=>KR.push([k-.05,RPp({exp:1,dir:i==1?-1:1})],[k,RPp({exp:1,dir:i==1?-1:1,ct:i==0?1:0,cw:i==1?1:0,rb:i==2?1:0,sq:1.06,...UP}),'snap'],[k+.4,RPp({exp:1,dir:i==1?-1:1,ct:i==0?1:0,cw:i==1?1:0,rb:i==2?1:0})]));
KR.push([B(6)-.1,RPp({exp:1,rb:0})],[WAVES[0],RPp({exp:1,ct:1,sq:1.05,...UP}),'snap'],[WAVES[0]+.4,RPp({exp:1,ct:1})],[WAVES[1]-.05,RPp({exp:1,ct:1})],[WAVES[1],RPp({dir:-1,exp:0,cw:1,lean:.08,fhx:80,fhy:-150}),'snap'],[WAVES[1]+.5,RPp({dir:-1,exp:0,cw:1,lean:.08,fhx:80,fhy:-150})],
 [LOCK,RPp({dir:1,exp:4,rb:1,sq:.9}),'snap'],[LOCK+.5,RPp({dir:1,exp:4,ct:1,sq:.94})],[B(7)-.1,RPp({exp:0,ct:1})],[B(7)+.1,RPp({exp:1})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:1,rb:1,sq:1.06,...UP}),'snap'],[k+.4,RPp({exp:1,rb:.5})]));
KR.push([STAMP,RPp({exp:1,gold:.6,rb:.6,sq:1.12,fhx:130,fhy:-210}),'snap'],[STAMP+.6,RPp({exp:1,gold:.4,rb:.4,...UP})],[B(8),RPp({exp:0,ct:.5,cw:.5})]);
SNAPS.forEach((k,i)=>KR.push([k,RPp({exp:2,cx:.4+i*.2,ct:i?0:.6,cw:i?.6:0,sq:.92,dir:i?1:-1}),'snap'],[k+.35,RPp({exp:2,cx:.5+i*.2,dir:i?1:-1})]));
KR.push([SLAM-.2,RPp({exp:2,cx:.8})],[SLAM,RPp({exp:4,cx:1,sq:.85}),'snap'],[SLAM+.5,RPp({exp:2,cx:1,sq:.85,fhx:110,fhy:-30})],[B(9),RPp({exp:2,cx:1,sq:.85,fhx:110,fhy:-30})],[CLIMAX-.6,RPp({exp:2,cx:1,sq:.88,fhx:110,fhy:-30})],[CLIMAX-.15,RPp({exp:0,cx:.6,sq:.8})],
 [CLIMAX,RPp({exp:1,gold:.3,rb:1,sq:1.12,fhx:130,fhy:-220}),'snap'],[CLIMAX+.6,RPp({exp:1,gold:.2,rb:1,...UP})],[27.5,RPp({exp:1,gold:.2,rb:1,...UP})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:200,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:160})],[4.1,BPp({a:0,x:160})],[4.4,BPp({a:1,exp:2,fhx:70,fhy:-110})],[5.3,BPp({exp:0})],[5.95,BPp({exp:1,hop:.2}),'snap'],[6.6,BPp({exp:1})],[B(5),BPp({exp:0})],[MK[1],BPp({exp:0,blush:1,hop:.3}),'snap'],[MK[1]+.4,BPp({exp:0,blush:1})],
 [B(6),BPp({exp:0})],[WAVES[1],BPp({exp:1})],[LOCK,BPp({exp:1,hop:.3}),'snap'],[B(7)-.3,BPp({a:1,exp:1})],[B(7)-.1,BPp({a:0})],[B(8)-.4,BPp({a:0})],
 [B(8)-.1,BPp({a:1,exp:2,droop:.5})],[SNAPS[0],BPp({exp:2,droop:.8,dir:-1,walk:1}),'snap'],[SNAPS[0]+1.4,BPp({a:0,x:-60,dir:-1,walk:1})],
 [CLIMAX+.2,BPp({a:0,x:160})],[CLIMAX+.7,BPp({a:1,x:300,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:300,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:300,exp:0,blush:1,fhx:60,fhy:-140})]];
const TPp=o=>Object.assign({x:960,dir:-1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const KT=[[0,TPp({a:0,x:1100})],[2.5,TPp({a:0,x:1100})],[2.75,TPp({a:1,mouth:1,fhx:120,fhy:-200})],[3.3,TPp({mouth:1})],[3.9,TPp({lean:-.1,fhx:20,fhy:-140})],[B(5),TPp({})],[MK[0]-.4,TPp({mouth:1,fhx:120,fhy:-190})],[MK[0]+.4,TPp({mouth:1})],[MK[1]+.3,TPp({})],
 [WAVES[0],TPp({mouth:1,fhx:120,fhy:-190})],[WAVES[1],TPp({dir:1,mouth:0})],[LOCK-.1,TPp({dir:1})],[LOCK,TPp({dir:-1,evil:1,lean:-.2,fhx:80,fhy:-220,bhx:-80,bhy:-220}),'snap'],[LOCK+.5,TPp({evil:1})],[B(7)-.3,TPp({a:1,evil:1})],[B(7)-.1,TPp({a:0})],[B(8)-.4,TPp({a:0})],
 [B(8)-.1,TPp({a:1})],[SNAPS[1],TPp({dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,TPp({a:0,x:1250,dir:1,walk:1})],
 [CLIMAX+.2,TPp({a:0,x:1080})],[CLIMAX+.7,TPp({a:1,x:960,mouth:1,fhx:120,fhy:-210})],[27.5,TPp({a:1,x:960,mouth:1,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KT.sort((a,b)=>a[0]-b[0]);
const EP={name:'变色龙',en:'CHAMELEON',epn:'第九期',acc:CG,grad:['#ffffff','#a8ffb8','#ff9ad0'],glowC:'rgba(110,255,140,.85)',kwCol:'rgba(200,255,210,.92)',kw:'八面玲珑 · 见人说话 · 情商高 · 没自我',slamCol:CGRAY,
  words:['讨好','伪装','迎合','迷失'],
  cams:[[0,560,640,1.9],[2.3,570,640,1.5],[2.67,640,620,1.0],[5.33,630,610,1.05],[7.4,610,600,1.12],[DROP,650,620,1.0],[B(5),640,610,1.04],[B(6),640,620,1.02],[LOCK,620,610,1.08],[B(7),660,620,1.04],[STAMP,660,610,1.06],[B(8),650,620,1.02],[SLAM,640,640,1.04],[B(9),620,720,1.12],[CLIMAX-.5,610,760,1.24],[CLIMAX,660,580,.95],[B(11),660,600,1.0]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04140c','#14502e','#80f0a8']],[B(5),['#060e0a','#183a28','#5aa078']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#140a1a','#7a3a80','#ffc8e8']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['随时',0],['变色',1]]],[[['见老虎',0]],[['TA就变',0],['橙色',1]]],[[['见兔子',0]],[['TA就变',0],['白色',1]]],[[['跟谁都',0]],[['处得',0],['来',1]]],[[['人称',0]],[['变色龙',1]]],
   [[['见什么人',0]],[['说什么',0],['话',1]]],[[['三句话',0]],[['哄得人',0],['开心',1]]],
   [[['当面夸你',0]],[['背后',0],['损你',1]]],[[['被抓包',0]],[['秒变',0],['脸色',1]]],
   [[['好的一面',0]],[['情商',0],['超高',1]]],[[['到哪都',0]],[['吃得开',1]]],
   [[['坏的一面',0]],[['没人',0],['敢信',1]]],[[['变来变去',0]],[['丢了',0],['自己',1]]],
   [[['照照镜子',0]],[['认不出',0],['自己',1]]],[[['讨好所有人',0]],[['累坏',0],['自己',1]]]],
  tags:[['01','见人说话',CG],['02','两面派',RED],['03','情商高',GOLD],['04','没自我','#a0a8b8']],
  cl:['不必讨好所有人','做自己'],endCap:[[['你的颜色',0]],[['本来就',0],['很美',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),to=kfO(KT,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const TG=tiger(to.x,GY,1.25,to.dir,to,to.a*endF,1)||{hx:to.x,hy:GY-280};
  // color chips (03)
  if(b3>0){const cols=[TC,BUN,OC,CG,'#6ee8ff','#ff9ad0','#b48cff',GOLD];JABS.forEach((k,ki)=>{for(let j=0;j<4;j++){const lt=k+j*.05;if(t<lt-.05)continue;const p=seg(t,lt-.05,lt+.5);const an=-Math.PI*.5+(j-1.5+ki*.5)*.55;const R=lerp(60,260+ki*40,eOut(p));const y0=GY-220;chip(RX+40+Math.cos(an)*R,y0+Math.sin(an)*R*.8,22,cols[(j+ki*4)%8],b3*endF*(t<STAMP?1:1-seg(t,STAMP,STAMP+.4)),(j-1.5)*.3);}});}
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=cham(ro.x,GY,1.5,ro.dir,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const bx=RG.hx+(ro.dir>0?20:-20);
  if(t>=5.95&&t<6.5)sparks(t,5.95,RG.cx,RG.cy-40,30,59,700,.4,CRB);
  if(t>=CLIMAX){const dt=t-CLIMAX;const r=rng(333);for(let i=0;i<30;i++){const st=r()*1.4,an=r()*TAU,v=300+r()*600;const p=dt-st*.3;if(p<0||p>2.4)continue;dot(RG.cx+Math.cos(an)*v*p,RG.cy+Math.sin(an)*v*p*.6+200*p*p,6,hueHex(i*37+t*200),endF*(1-seg(p,1.8,2.4)));}}
  // ---- intro ----
  if(t<DROP){bubble(bx,RG.hy-120,'大家好呀~',win(t,1.6,2.6,.1,.2),1,CG,-1);
    bubble(TG.hx-20,TG.hy-150,'我说往东！',win(t,2.8,3.3,.06,.06),eBack(seg(t,2.8,2.95)),TC,1);
    bubble(bx,RG.hy-120,'老板英明！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),TC,-1);
    bubble(BG.hx+10,BG.hy-110,'我想往西…',win(t,4.45,5.0,.06,.1),eBack(seg(t,4.45,4.6)),BUN,-1);
    bubble(bx,RG.hy-120,'你说得也对！',win(t,4.66,5.85,.06,.15),eBack(seg(t,4.66,4.8)),BUN,1);
    bubble(TG.hx-20,TG.hy-150,'到底听谁的？',win(t,6.0,6.95,.06,.12),eBack(seg(t,6.0,6.15)),TC,1);
    proverb(t,'八面玲珑',RX-60,GY-600,3,CG,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(bx,RG.hy-120,['领导英明！','兔兔最可爱！','大家都对！'][i],a,eBack(seg(t,k,k+.2)),[TC,BUN,CRB][i],i==1?1:-1);});
    if(t>=MK[0]&&t<MK[1])bubble(TG.hx-20,TG.hy-150,'嗯~会说话',a,1,TC,1);}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<WAVES[1])bubble(bx,RG.hy-120,'虎哥最棒！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),TC,-1);
    if(t>=WAVES[1]&&t<LOCK)bubble(bx,RG.hy-120,'（小声）老虎好凶…',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),BUN,1);
    if(t>=LOCK)bubble(TG.hx-20,TG.hy-150,'我都听见了！',a,eBack(seg(t,LOCK,LOCK+.2)),RED,1);
    bigText(t,LOCK,B(7),RX+400,GY-680,'人前一套，人后一套',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<JABS[0])bubble(bx,RG.hy-120,'跟谁都聊得来~',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    if(t>=JABS[0]&&t<STAMP)bubble(bx,RG.hy-120,'到哪都能融入！',a,eBack(seg(t,JABS[0],JABS[0]+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+400,GY-680,'情商高，到哪都吃得开',GOLD,58);}
  if(b4>0){const a=b4*endF;const lab=['没主见','两面派','假'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*260+60,GY-560-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'你的话还能信吗',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(TG.hx+10,TG.hy-150,'你到底站哪边？',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),TC,-1);
    bigText(t,SLAM,SLAM+1.8,RX+400,GY-680,'变来变去，变丢了自己','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(bx,RG.hy-120,'我本来…是什么颜色？',a*seg(t,B(9)+.9,B(9)+1.2),1,CGRAY,-1);
    if(t>=CLIMAX-.6)bubble(bx,RG.hy-120,'我就是我！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+10,BG.hy-110,'这才是你！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(TG.hx-20,TG.hy-150,'有个性！',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
