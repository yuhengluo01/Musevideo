// ===== 人间动物志 · 狐假虎威 =====
const FXC='#ff6a4a',FTIP='#fff4e8',FBL='#ffd0a0';
const RX=560;
// fox (biped): o:{exp 0 smug 1 arrogant 2 scared 3 happy 4 shock, gold, sq, lean, hands, nose(up tilt)}
function fox(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,gold:0,sq:1,lean:0,fhx:56,fhy:-110,bhx:-46,bhy:-110,nose:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const C=mixc(FXC,GOLD,o.gold);
  ctx.save();ctx.translate(0,-200);ctx.rotate(-o.nose*.25);ctx.translate(0,200);
  const head=[[-28,-196],[-30,-236],[-14,-262],[20,-262],[40,-240],[88,-222],[88,-210],[36,-194],[-6,-186],[-28,-196]];
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#100604';ctx.beginPath();head.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();ctx.restore();ctx.restore();
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#100604';ctx.beginPath();ctx.ellipse(0,-122,36,56,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-14,0],[-12,-68]]],['leg2',[[14,0],[12,-68]]],['body',circ(0,-122,36,56,40)],['tail',cat(Q([-30,-96],[-140,-90],[-150,-200],12),Q([-150,-200],[-100,-150],[-32,-120],12))],['tip',Q([-138,-168],[-160,-190],[-150,-200],6)],
    ['head',head],['ear',[[-20,-256],[-34,-320],[2,-262]]],['ear2',[[8,-262],[22,-326],[34,-252]]]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p<=0)return;const hd=nm=='head'||nm.startsWith('ear');if(hd){ctx.save();ctx.translate(0,-200);ctx.rotate(-o.nose*.25);ctx.translate(0,200);}glow(pts,p,nm=='tip'?FTIP:C,w,a,14,prog<1);if(hd)ctx.restore();});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp;
    glow(Q([-16,-150],[0,-112],[16,-150],8),1,FBL,w*.7,fa*.6,6,false);
    ctx.save();ctx.translate(0,-200);ctx.rotate(-o.nose*.25);ctx.translate(0,200);
    dot(88,-216,5.5,'#fff',fa);glow(Q([-12,-248],[-14,-224],[2,-212],6),1,FBL,w*.6,fa*.5,4,false);
    const ex=26,ey=-232;
    if(e==0){glow([[ex-12,ey-4],[ex+12,ey-6]],1,C,w,fa,6,false);dot(ex+2,ey+2,4,'#fff',fa);glow(Q([46,-204],[66,-200],[84,-212],6),1,C,w,fa,6,false);}
    else if(e==1){glow(Q([ex-10,ey],[ex,ey+6],[ex+10,ey],6),1,C,w,fa,6,false);glow([[ex-12,ey-14],[ex+12,ey-18]],1,C,w,fa,6,false);glow(Q([46,-206],[66,-198],[86,-210],6),1,C,w,fa,6,false);}
    else if(e==2){dot(ex,ey,4.5,'#fff',fa);glow([[ex-10,ey-12],[ex+10,ey-18]],1,C,w,fa,6,false);glow([[48,-202],[56,-206],[64,-202],[72,-206],[80,-202]],1,C,w,fa,6,false);const sp=(t0g*1.2)%1;ctx.save();ctx.globalAlpha=fa*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(-4,-262+sp*40,5,8,0,0,TAU);ctx.fill();ctx.restore();}
    else if(e==3){glow(Q([ex-9,ey+2],[ex,ey-8],[ex+9,ey+2],6),1,C,w,fa,6,false);glow(Q([46,-208],[66,-194],[86,-208],6),1,C,w,fa,6,false);ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(28,-212,7,0,TAU);ctx.fill();ctx.restore();}
    else{glow(circ(ex,ey,8,8,12),1,'#fff',w*.8,fa,6,false);dot(ex,ey,2.5,'#fff',fa);glow(circ(66,-202,6,6,12),1,C,w*.8,fa,6,false);}
    ctx.restore();
    arm([24,-150],[o.fhx,o.fhy],92,C,w,fa,-1);arm([-24,-150],[o.bhx,o.bhy],92,C,w,fa,1);dot(o.fhx,o.fhy,8,C,fa);dot(o.bhx,o.bhy,8,C,fa);}
  ctx.restore();return{hx:x+dir*s*30,hy:y+s*o.sq*-232,top:y+s*o.sq*-320,cx:x,cy:y+s*o.sq*-150,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy]};}
function token(x,y,a,rot=0){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a*.92;ctx.fillStyle='#1a0c04';ctx.fillRect(-30,-64,60,84);ctx.restore();
  const c=Math.cos(rot),s=Math.sin(rot);glow([[-30,-64],[30,-64],[30,20],[-30,20],[-30,-64]].map(([px,py])=>[x+px*c-py*s,y+px*s+py*c]),1,GOLD,2.4,a,12,false);
  ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a;ctx.font='900 32px '+SER;ctx.textAlign='center';ctx.fillStyle='#ffe0a0';ctx.shadowColor=GOLD;ctx.shadowBlur=10;ctx.fillText('虎',0,-28);ctx.fillText('令',0,10);ctx.restore();}
const RPp=o=>Object.assign({x:RX,dir:1,exp:0,gold:0,sq:1,lean:0,fhx:56,fhy:-110,bhx:-46,bhy:-110,nose:0},o);
const STRUT=o=>RPp({exp:1,nose:1,lean:-.08,sq:1.06,fhx:110,fhy:-140,bhx:-70,bhy:-90,...o});
const KR=[[0,RPp({})],[2.67,RPp({})],[3.2,RPp({exp:3})],[3.3,STRUT({}),'snap'],[4.4,STRUT({sq:1})],[4.66,STRUT({fhx:130,fhy:-200}),'snap'],[5.85,STRUT({sq:1})],[5.95,RPp({exp:3,sq:1.06,fhx:110,fhy:-210,bhx:-90,bhy:-210}),'snap'],[6.8,RPp({exp:3})],[7.0,RPp({exp:0})],
 [DROP,STRUT({sq:1.1,fhx:120,fhy:-210}),'snap'],[DROP+.8,RPp({exp:0})]];
MK.forEach((k,i)=>KR.push([k-.05,RPp({exp:0})],[k,STRUT({fhx:140,fhy:-150+i*20,lean:i%2?-.12:-.04}),'snap'],[k+.4,RPp({exp:0,nose:.5})]));
KR.push([B(6),RPp({exp:0})],[WAVES[0],STRUT({fhx:120,fhy:-220}),'snap'],[WAVES[0]+.4,STRUT({fhx:110,fhy:-200,sq:1})],[WAVES[1],STRUT({fhx:130,fhy:-230,sq:1.08}),'snap'],[WAVES[1]+.4,STRUT({fhx:110,fhy:-200,sq:1})],
 [LOCK,STRUT({sq:1.12,fhx:140,fhy:-240,bhx:-90,bhy:-220}),'snap'],[LOCK+.6,STRUT({sq:1,fhx:110,fhy:-200})],[B(7)-.1,RPp({exp:0})],[B(7)+.2,RPp({exp:3})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:3,sq:1.06,fhx:i?130:-60,fhy:-200,bhx:i?-60:-120,bhy:i?-120:-200}),'snap'],[k+.4,RPp({exp:3})]));
KR.push([STAMP,RPp({exp:3,sq:1.1,fhx:110,fhy:-230,bhx:-90,bhy:-230}),'snap'],[STAMP+.6,RPp({exp:3,fhx:100,fhy:-200,bhx:-90,bhy:-200})],[B(8),STRUT({sq:1})]);
SNAPS.forEach((k,i)=>KR.push([k,RPp({exp:4,sq:.92,fhx:80,fhy:-170,dir:i?1:-1}),'snap'],[k+.4,RPp({exp:2,dir:i?1:-1,sq:.92})]));
KR.push([SLAM-.2,RPp({exp:2,sq:.92})],[SLAM,RPp({exp:4,sq:.82}),'snap'],[SLAM+.5,RPp({exp:2,sq:.82,fhx:70,fhy:-60,bhx:-60,bhy:-60})],[B(9),RPp({exp:2,sq:.82,fhx:70,fhy:-60,bhx:-60,bhy:-60})],[CLIMAX-.6,RPp({exp:2,sq:.86,fhx:70,fhy:-60,bhx:-60,bhy:-60})],[CLIMAX-.15,RPp({exp:0,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12,fhx:110,fhy:-230,bhx:-90,bhy:-230}),'snap'],[CLIMAX+.6,RPp({exp:3,gold:1,fhx:100,fhy:-200,bhx:-90,bhy:-200})],[27.5,RPp({exp:3,gold:1,fhx:100,fhy:-200,bhx:-90,bhy:-200})]);
KR.sort((a,b)=>a[0]-b[0]);
const BOW={sq:.84,droop:.8,exp:1};
const BPp=o=>Object.assign({x:880,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0,sq:1},o);
const KB=[[0,BPp({a:0,x:1000})],[4.1,BPp({a:0,x:1000})],[4.4,BPp({a:1,exp:1})],[4.66,BPp({...BOW}),'snap'],[5.5,BPp({...BOW,exp:2})],[B(5),BPp({...BOW,exp:2})],[MK[1],BPp({...BOW,sq:.78}),'snap'],[MK[1]+.4,BPp({...BOW,exp:2})],
 [B(6),BPp({...BOW,exp:2})],[LOCK,BPp({...BOW,sq:.78}),'snap'],[B(7),BPp({exp:0})],[JABS[1],BPp({exp:0,hop:.2}),'snap'],[B(8),BPp({...BOW,exp:2})],
 [SNAPS[0]-.1,BPp({...BOW,exp:2})],[SNAPS[0],BPp({exp:3,sq:1.04,fhx:60,fhy:-120}),'snap'],[SLAM+.4,BPp({exp:3})],[B(9),BPp({a:1,exp:3})],[B(9)+.4,BPp({a:0})],
 [CLIMAX+.2,BPp({a:0,x:1000})],[CLIMAX+.7,BPp({a:1,x:880,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:880,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:880,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1110,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const OBOW={exp:1,lean:.18,sq:.9,sweat:1,fhx:60,fhy:-60,bhx:-20,bhy:-60};
const KO=[[0,OPp({a:0,x:1200})],[5.6,OPp({a:0,x:1200})],[5.85,OPp({a:1,exp:1})],[5.95,OPp({...OBOW}),'snap'],[B(5),OPp({...OBOW})],[MK[0],OPp({...OBOW,lean:.24}),'snap'],[MK[2],OPp({...OBOW,lean:.24}),'snap'],[MK[2]+.4,OPp({...OBOW})],
 [WAVES[0],OPp({exp:1})],[WAVES[1],OPp({exp:1,fhx:90,fhy:-150})],[LOCK,OPp({...OBOW,lean:.24}),'snap'],[B(7),OPp({exp:0})],[B(8),OPp({...OBOW})],
 [SNAPS[1]-.1,OPp({...OBOW})],[SNAPS[1],OPp({exp:2,fhx:110,fhy:-180}),'snap'],[SLAM+.4,OPp({exp:2})],[B(9),OPp({a:1,exp:2})],[B(9)+.4,OPp({a:0})],
 [CLIMAX+.2,OPp({a:0,x:1180})],[CLIMAX+.7,OPp({a:1,x:1110,exp:0,fhx:120,fhy:-210})],[27.5,OPp({a:1,x:1110,exp:0,fhx:120,fhy:-210})]];
const TPp=o=>Object.assign({x:250,dir:1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const KT=[[0,TPp({a:0,x:150})],[2.5,TPp({a:0,x:150})],[2.8,TPp({a:1,mouth:1,fhx:110,fhy:-170})],[3.3,TPp({mouth:0})],[4.66,TPp({evil:1})],[5.3,TPp({evil:0})],[5.95,TPp({evil:1,lean:-.1}),'snap'],[6.5,TPp({evil:0})],
 [MK[0],TPp({evil:1}),'snap'],[MK[0]+.5,TPp({})],[LOCK-.2,TPp({})],[LOCK,TPp({evil:1,lean:-.12}),'snap'],[LOCK+.6,TPp({})],[B(7),TPp({mouth:1})],
 [SNAPS[0]-.4,TPp({})],[SNAPS[0]-.2,TPp({dir:-1,walk:1})],[SNAPS[0]+1.2,TPp({a:0,x:40,dir:-1,walk:1})],[27.5,TPp({a:0,x:40})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);KT.sort((a,b)=>a[0]-b[0]);
const EP={name:'狐假虎威',en:'FOX & TIGER',epn:'第十二期',acc:FXC,grad:['#ffffff','#ffd0a0','#ff6a4a'],glowC:'rgba(255,120,80,.85)',kwCol:'rgba(255,220,200,.92)',kw:'仗势欺人 · 爱摆谱 · 会借力 · 靠山一走',slamCol:'#c8b0a0',
  words:['虚荣','依赖','心虚','空心'],
  cams:[[0,560,640,1.9],[2.3,570,640,1.5],[2.67,600,620,1.0],[5.33,640,610,.98],[7.4,620,600,1.04],[DROP,650,620,.96],[B(5),660,610,.98],[B(6),650,620,.98],[LOCK,630,610,1.02],[B(7),660,620,.96],[STAMP,660,610,.98],[B(8),650,620,.98],[SLAM,640,640,1.0],[B(9),600,720,1.12],[CLIMAX-.5,590,760,1.24],[CLIMAX,660,580,.95],[B(11),660,600,1.0]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#1a0806','#5a2014','#ff9a6a']],[B(5),['#140a08','#3a2014','#a06040']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['背后',0],['有人',1]]],[[['走路',0]],[['都',0],['带风',1]]],[[['见谁',0]],[['都',0],['吆喝',1]]],[[['大家怕的',0]],[['其实是',0],['老虎',1]]],[[['人称',0]],[['狐假虎威',1]]],
   [[['借着老虎',0]],[['使唤',0],['别人',1]]],[[['一口一个',0]],[['我老大',0],['说',1]]],
   [[['老大一句话',0]],[['TA传成',0],['圣旨',1]]],[[['芝麻小事',0]],[['也要',0],['摆谱',1]]],
   [[['好的一面',0]],[['懂得',0],['借力',1]]],[[['人脉资源',0]],[['用得',0],['活',1]]],
   [[['坏的一面',0]],[['靠山',0],['一走',1]]],[[['威风',0]],[['全',0],['没了',1]]],
   [[['借来的威风',0]],[['迟早',0],['要还',1]]],[[['别人敬的',0]],[['从来',0],['不是你',1]]]],
  tags:[['01','仗势欺人',FXC],['02','爱摆谱',RED],['03','会借力',GOLD],['04','靠山一走','#a0a8b8']],
  cl:['借来的威风','不长久'],endCap:[[['自己',0]],[['才是',0],['靠山',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T),to=kfO(KT,T);
  const TG=tiger(to.x,GY,1.2,to.dir,to,to.a*endF,1)||{hx:to.x,hy:GY-290};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=fox(ro.x,GY,1.5,ro.dir,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const bx=RG.hx+(ro.dir>0?20:-20),by=RG.top-50;
  if(b2>0&&t>=WAVES[0]-.1)token(RG.fh[0]+10,RG.fh[1]-10,b2*endF*seg(t,WAVES[0]-.1,WAVES[0]+.1),.1);
  // 03 network lines
  if(b3>0){const a=b3*endF;const nodes=[[TG.hx,TG.hy-20,TC],[BG.hx,BG.hy,BUN],[OG.hx,OG.hy,OC]];nodes.forEach(([nx,ny,c],i)=>{const k=i==0?JABS[0]:i==1?JABS[1]:STAMP;const p=seg(t,k-.25,k+.05);if(p<=0)return;glow([[RG.hx,RG.hy],[nx,ny]],eOut(p),GOLD,2.6,a,14,false);if(p>=1)glow(circ(nx,ny,44,44,30),1,c,2,a*.8,10,false);});glow(circ(RG.hx,RG.hy,50,50,30),1,GOLD,2.4,a*seg(t,JABS[0]-.25,JABS[0]),12,false);}
  // ---- intro ----
  if(t<DROP){bubble(bx,by,'今天去哪儿玩~',win(t,1.6,2.6,.1,.2),1,FXC,-1);
    bubble(TG.hx,TG.hy-150,'跟着我~',win(t,2.85,3.3,.06,.06),eBack(seg(t,2.85,3.0)),TC,-1);
    bubble(bx,by,'我老大在这儿！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),FXC,-1);
    bubble(bx,by,'还不快让开！',win(t,4.66,5.8,.06,.15),eBack(seg(t,4.66,4.8)),FXC,-1);
    bubble(bx,by,'哈哈，都怕我！',win(t,5.95,6.95,.06,.12),eBack(seg(t,5.95,6.1)),FXC,-1);
    if(t>=5.95&&t<6.4)sparks(t,5.95,RG.cx,RG.cy-60,26,59,700,.4,GOLD);
    proverb(t,'狐假虎威',RX-60,GY-640,3,FXC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(bx,by,['给我倒茶！','这活你来干！','叫狐哥！'][i],a,eBack(seg(t,k,k+.2)),FXC,-1);});
    if(t>=MK[1]&&t<B(6))bubble(BG.hx-10,BG.hy-110,'是是是…',a,1,BUN,1);}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(bx,by,'老大说的！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),FXC,-1);
    if(t>=WAVES[1]&&t<LOCK)bubble(OG.hx-10,OG.top-40,'真…真的吗？',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),OC,1);
    if(t>=LOCK)bubble(bx,by,'谁敢不听！',a,eBack(seg(t,LOCK,LOCK+.2)),FXC,-1);
    bigText(t,LOCK,B(7),RX+380,GY-720,'拿着鸡毛当令箭',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(bx,by,'借力打力~',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+380,GY-720,'会借力，也是本事',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['装腔作势','虚','靠山倒'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*260+60,GY-620-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]-.2&&t<SNAPS[0]+.8)bubble(TG.hx,TG.hy-150,'我走啦~',a,1,TC,-1);
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx-10,BG.hy-110,'老虎走了哦~',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(OG.hx-10,OG.top-40,'现在你算啥？',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    bigText(t,SLAM,SLAM+1.8,RX+380,GY-720,'靠山一走，啥也不是','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(bx,by+50,'离了老虎…我算什么？',a*seg(t,B(9)+.9,B(9)+1.2),1,FXC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by+50,'这次，靠我自己！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx-10,BG.hy-110,'厉害！',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(OG.hx-10,OG.top-40,'服气！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
