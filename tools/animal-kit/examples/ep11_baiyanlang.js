// ===== 人间动物志 · 白眼狼 =====
const WC='#b8c8e8',WE='#e8f4ff',BONE='#fff0d8';
const RX=560;
// wolf (biped): o:{exp 0 normal 1 eye-roll 2 sad 3 happy 4 shock, gold, sq, lean, hands}
function wolf(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,gold:0,sq:1,lean:0,fhx:60,fhy:-120,bhx:-50,bhy:-120},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const C=mixc(WC,GOLD,o.gold);
  const head=[[-30,-200],[-34,-240],[-20,-270],[20,-268],[44,-246],[96,-230],[98,-212],[40,-196],[-10,-188],[-30,-200]];
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#06080e';ctx.beginPath();ctx.ellipse(0,-125,40,58,0,0,TAU);ctx.fill();ctx.beginPath();head.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();ctx.restore();
  const P=[['leg',[[-16,0],[-14,-70]]],['leg2',[[16,0],[14,-70]]],['body',circ(0,-125,40,58,40)],['tail',cat(Q([-34,-110],[-104,-116],[-124,-186],10),Q([-124,-186],[-86,-150],[-36,-132],10))],
    ['head',head],['ear',[[-24,-262],[-32,-310],[-2,-270]]],['ear2',[[6,-268],[18,-314],[30,-262]]]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,C,w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp;
    dot(96,-221,6,'#fff',fa);glow([[-14,-150],[0,-160],[14,-150]],1,C,w*.6,fa*.5,4,false);glow([[-10,-128],[0,-138],[10,-128]],1,C,w*.6,fa*.5,4,false);
    const ex=26,ey=-238;
    if(e==0){dot(ex,ey,5,'#fff',fa);glow([[ex-12,ey-14],[ex+10,ey-10]],1,C,w,fa,6,false);glow([[52,-206],[84,-212]],1,C,w,fa,6,false);}
    else if(e==1){ctx.save();ctx.globalAlpha=fa;ctx.fillStyle=WE;ctx.shadowColor='#fff';ctx.shadowBlur=18;ctx.beginPath();ctx.ellipse(ex,ey,11,9,0,0,TAU);ctx.fill();ctx.restore();dot(ex+2,ey-8,2.5,'#223',fa);glow([[ex-14,ey-18],[ex+12,ey-22]],1,C,w,fa,6,false);glow(Q([50,-208],[70,-204],[88,-214],6),1,C,w,fa,6,false);}
    else if(e==2){dot(ex,ey+2,4.5,'#fff',fa);glow([[ex-10,ey-18],[ex+12,ey-12]],1,C,w,fa,6,false);glow(Q([52,-202],[68,-210],[86,-204],6),1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(ex-2,ey+10+tp*34,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow(Q([ex-9,ey+2],[ex,ey-8],[ex+9,ey+2],6),1,C,w,fa,6,false);glow(Q([50,-212],[68,-198],[88,-212],6),1,C,w,fa,6,false);ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(30,-214,7,0,TAU);ctx.fill();ctx.restore();}
    else{glow(circ(ex,ey,8,8,12),1,'#fff',w*.8,fa,6,false);dot(ex,ey,2.5,'#fff',fa);glow(circ(70,-206,6,6,12),1,C,w*.8,fa,6,false);}
    arm([26,-158],[o.fhx,o.fhy],96,C,w,fa,-1);arm([-26,-158],[o.bhx,o.bhy],96,C,w,fa,1);dot(o.fhx,o.fhy,9,C,fa);dot(o.bhx,o.bhy,9,C,fa);}
  ctx.restore();return{hx:x+dir*s*30,hy:y+s*o.sq*-240,top:y+s*o.sq*-312,cx:x,cy:y+s*o.sq*-160,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy]};}
function bone(x,y,a,rot=0,sc=1){if(a<=.01)return;const c=Math.cos(rot),s=Math.sin(rot);const T=(px,py)=>[x+(px*c-py*s)*sc,y+(px*s+py*c)*sc];
  glow([T(-30,-5),T(30,-5)],1,BONE,2.4,a,10,false);glow([T(-30,5),T(30,5)],1,BONE,2.4,a,10,false);[[-34,-8],[-34,8],[34,-8],[34,8]].forEach(([px,py])=>{const q=T(px,py);glow(circ(q[0],q[1],8*sc,8*sc,14),1,BONE,2.4,a,10,false);});}
function gift(x,y,a,col,sc=1){if(a<=.01)return;const r=26*sc;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#120a10';ctx.fillRect(x-r,y-r,r*2,r*2);ctx.restore();glow(rectP(x-r,y-r,x+r,y+r),1,col,2.4,a,10,false);glow([[x,y-r],[x,y+r]],1,GOLD,2,a,8,false);glow([[x-r,y],[x+r,y]],1,GOLD,2,a,8,false);glow(Q([x,y-r],[x-16*sc,y-r-18*sc],[x-4*sc,y-r-4*sc],6),1,GOLD,2,a,8,false);glow(Q([x,y-r],[x+16*sc,y-r-18*sc],[x+4*sc,y-r-4*sc],6),1,GOLD,2,a,8,false);}
function carrot(x,y,a,rot=0){if(a<=.01)return;const c=Math.cos(rot),s=Math.sin(rot);const T=(px,py)=>[x+px*c-py*s,y+px*s+py*c];glow([T(-10,-24),T(0,30),T(10,-24),T(-10,-24)],1,'#ff9a40',2.4,a,10,false);glow([T(0,-24),T(-8,-42)],1,'#7dff7a',2,a,8,false);glow([T(0,-24),T(8,-42)],1,'#7dff7a',2,a,8,false);}
function itemAt(k,x,y,a,rot){if(k==0)bone(x,y,a,rot);else if(k==1)gift(x,y,a,BUN,.8);else carrot(x,y,a,rot);}
function pileN(t){let n=0;if(t>=3.3)n=1;if(t>=4.66)n=2;MK.forEach(k=>{if(t>=k)n+=2;});return n;}
function itemPile(n,a){for(let i=0;i<n;i++){const row=Math.floor(i/3),j=i%3;itemAt(i%3,RX-200+j*56-row*18,GY-28-row*44,a,(i*1.7)%1-.5);}}
const RPp=o=>Object.assign({x:RX,dir:1,exp:0,gold:0,sq:1,lean:0,fhx:60,fhy:-120,bhx:-50,bhy:-120},o);
const GRAB={fhx:120,fhy:-170},TURN={dir:-1,exp:1,lean:.05,fhx:40,fhy:-150,bhx:-30,bhy:-150};
const KR=[[0,RPp({exp:2})],[2.67,RPp({exp:2})],[3.25,RPp({exp:2})],[3.3,RPp({exp:3,sq:1.05,...GRAB}),'snap'],[4.4,RPp({exp:3})],[4.66,RPp({exp:3,sq:1.05,fhx:110,fhy:-210,bhx:-90,bhy:-210}),'snap'],[5.85,RPp({exp:3})],
 [5.95,RPp({...TURN,sq:1.04}),'snap'],[6.8,RPp({...TURN})],[7.0,RPp({exp:1})],[DROP,RPp({exp:1,sq:1.08,fhx:110,fhy:-200,bhx:-90,bhy:-200}),'snap'],[DROP+.8,RPp({exp:0})]];
MK.forEach((k,i)=>KR.push([k-.05,RPp({exp:3})],[k,RPp({exp:3,sq:1.06,...GRAB,lean:i%2?.06:-.06}),'snap'],[k+.4,RPp({exp:3})]));
KR.push([B(6),RPp({exp:0})],[WAVES[0],RPp({...TURN,sq:1.04}),'snap'],[WAVES[0]+.4,RPp({...TURN})],[WAVES[1],RPp({...TURN,sq:1.06,fhx:-40,fhy:-200}),'snap'],[WAVES[1]+.4,RPp({...TURN})],
 [LOCK,RPp({...TURN,sq:1.1,lean:.12,fhx:-60,fhy:-220,bhx:-70,bhy:-100}),'snap'],[LOCK+.6,RPp({...TURN})],[B(7)-.1,RPp({exp:0})],[B(7)+.2,RPp({exp:0})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:0,sq:1.06,fhx:140,fhy:-180,lean:-.08}),'snap'],[k+.4,RPp({exp:0,fhx:90,fhy:-140})]));
KR.push([STAMP,RPp({exp:3,sq:1.1,fhx:110,fhy:-230,bhx:-90,bhy:-230}),'snap'],[STAMP+.6,RPp({exp:3,fhx:100,fhy:-200,bhx:-90,bhy:-200})],[B(8),RPp({exp:1})]);
SNAPS.forEach((k,i)=>KR.push([k,RPp({exp:4,sq:.94,fhx:110,fhy:-150}),'snap'],[k+.4,RPp({exp:2})]));
KR.push([SLAM-.2,RPp({exp:2})],[SLAM,RPp({exp:4,sq:.85}),'snap'],[SLAM+.5,RPp({exp:2,sq:.85,fhx:80,fhy:-60,bhx:-60,bhy:-60})],[B(9),RPp({exp:2,sq:.85,fhx:80,fhy:-60,bhx:-60,bhy:-60})],[CLIMAX-.6,RPp({exp:2,sq:.88,fhx:80,fhy:-60,bhx:-60,bhy:-60})],[CLIMAX-.15,RPp({exp:2,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12,fhx:130,fhy:-180,bhx:-90,bhy:-220}),'snap'],[CLIMAX+.6,RPp({exp:3,gold:1,fhx:120,fhy:-160,bhx:-90,bhy:-200})],[27.5,RPp({exp:3,gold:1,fhx:120,fhy:-160,bhx:-90,bhy:-200})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:220,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:160})],[4.1,BPp({a:0,x:160})],[4.4,BPp({a:1,exp:0,fhx:80,fhy:-110})],[4.66,BPp({exp:0,fhx:90,fhy:-120,hop:.2}),'snap'],[5.5,BPp({exp:0})],[6.0,BPp({exp:1})],[B(5),BPp({exp:0})],[MK[1],BPp({exp:0,fhx:90,fhy:-120,hop:.2}),'snap'],[MK[1]+.4,BPp({exp:0})],
 [B(6),BPp({exp:0})],[WAVES[1],BPp({exp:1,fhx:80,fhy:-110})],[LOCK,BPp({exp:2,droop:.8})],[B(7)-.3,BPp({a:1,exp:2})],[B(7)-.1,BPp({a:0})],[B(8)-.4,BPp({a:0})],
 [B(8)-.1,BPp({a:1,exp:2,droop:.5})],[SNAPS[0],BPp({exp:2,droop:.8,dir:-1,walk:1}),'snap'],[SNAPS[0]+1.4,BPp({a:0,x:-60,dir:-1,walk:1})],
 [CLIMAX+.2,BPp({a:0,x:160})],[CLIMAX+.7,BPp({a:1,x:260,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:260,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:260,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:960,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0,x:1120})],[2.5,OPp({a:0,x:1120})],[2.75,OPp({a:1,exp:0,fhx:120,fhy:-150})],[3.3,OPp({exp:0,fhx:110,fhy:-140})],[4.0,OPp({exp:0})],[5.9,OPp({exp:0,fhx:110,fhy:-170})],[5.95,OPp({exp:1,lean:.1}),'snap'],[6.8,OPp({exp:1})],[B(5),OPp({exp:0})],[MK[0],OPp({exp:0,fhx:120,fhy:-150}),'snap'],[MK[2],OPp({exp:0,fhx:120,fhy:-150}),'snap'],
 [B(6),OPp({exp:0})],[WAVES[0],OPp({exp:0,fhx:110,fhy:-170})],[LOCK,OPp({exp:2,sweat:1})],[B(7)-.3,OPp({exp:2})],[B(7)-.1,OPp({a:0})],[B(8)-.4,OPp({a:0})],
 [B(8)-.1,OPp({a:1,exp:2})],[SNAPS[1],OPp({exp:2,dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,OPp({a:0,x:1260,dir:1,walk:1})],
 [CLIMAX+.2,OPp({a:0,x:1100})],[CLIMAX+.7,OPp({a:1,x:960,exp:0,fhx:120,fhy:-210})],[27.5,OPp({a:1,x:960,exp:0,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
const EP={name:'白眼狼',en:'UNGRATEFUL WOLF',epn:'第十一期',acc:WC,grad:['#ffffff','#c8dcff','#8aa8ff'],glowC:'rgba(160,190,255,.85)',kwCol:'rgba(210,225,255,.92)',kw:'忘恩负义 · 用完就扔 · 目标明确 · 寒人心',slamCol:WC,
  words:['自私','冷漠','忘恩','孤独'],
  cams:[[0,560,640,1.9],[2.3,570,640,1.5],[2.67,640,620,1.0],[5.33,630,610,1.05],[7.4,610,600,1.12],[DROP,650,620,1.0],[B(5),640,610,1.04],[B(6),640,620,1.02],[LOCK,620,610,1.08],[B(7),660,620,1.04],[STAMP,660,610,1.06],[B(8),650,620,1.02],[SLAM,640,640,1.04],[B(9),620,720,1.12],[CLIMAX-.5,610,760,1.24],[CLIMAX,660,580,.95],[B(11),660,600,1.0]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#060a1a','#1a2a5a','#8aa8ff']],[B(5),['#060a16','#18284a','#5a80b0']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['吃饱了',0],['就翻脸',1]]],[[['你帮TA时',0]],[['TA叫你',0],['亲哥',1]]],[[['你送TA',0]],[['TA说你',0],['真好',1]]],[[['轮到你求TA',0]],[['TA翻',0],['白眼',1]]],[[['人称',0]],[['白眼狼',1]]],
   [[['你的好',0]],[['TA照单',0],['全收',1]]],[[['TA的好',0]],[['从来',0],['没有',1]]],
   [[['你需要TA',0]],[['TA立刻',0],['失联',1]]],[[['提起旧情',0]],[['TA说',0],['忘了',1]]],
   [[['好的一面',0]],[['目标',0],['明确',1]]],[[['想要的',0]],[['自己',0],['去拿',1]]],
   [[['坏的一面',0]],[['寒了',0],['人心',1]]],[[['一片好心',0]],[['喂了',0],['狼',1]]],
   [[['等你落难',0]],[['身边',0],['没人',1]]],[[['好心被辜负',0]],[['谁还',0],['敢帮',1]]]],
  tags:[['01','只进不出',WC],['02','翻脸不认人',RED],['03','目标明确',GOLD],['04','寒人心','#a0a8b8']],
  cl:['别让好心人','寒了心'],endCap:[[['记住',0]],[['每一份',0],['好',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170,fh:[bo.x,GY-100]};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400,fh:[oo.x,GY-150]};
  // hoard pile (behind wolf) until storm
  const pa=endF*(1-seg(t,SLAM,SLAM+.5));if(t>=3.3&&pa>0)itemPile(pileN(t),pa*(t<B(7)-.1||t>=B(8)-.1?1:0));
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=wolf(ro.x,GY,1.5,ro.dir,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const bx=RG.hx+(ro.dir>0?30:-30),by=RG.top-60;
  // gifts flying in
  const fly=(t0,k,from,a)=>{if(t<t0-.35||t>=t0)return;const p=eOut(seg(t,t0-.35,t0));itemAt(k,lerp(from[0],RG.fh[0],p),lerp(from[1],RG.fh[1],p)-Math.sin(p*Math.PI)*80,a,p*6);};
  fly(3.3,0,OG.fh,endF);fly(4.66,2,BG.fh,endF);
  if(b1>0)MK.forEach((k,i)=>fly(k,i%3,i==1?BG.fh:OG.fh,endF*b1));
  if(t>=CLIMAX){const dt=t-CLIMAX;itemAt(0,lerp(RG.fh[0],OG.fh[0],eOut(seg(dt,.1,.7))),lerp(RG.fh[1],OG.fh[1],eOut(seg(dt,.1,.7)))-Math.sin(seg(dt,.1,.7)*Math.PI)*120,endF*(dt<.8?1:0),dt*8);if(dt>=.75)bone(OG.fh[0],OG.fh[1]-20,endF,.3);
    if(dt>=.75)carrot(BG.fh[0]+10,BG.fh[1]-20,endF*seg(dt,.75,.9),.2);}
  // ---- intro ----
  if(t<DROP){bubble(bx,by,'肚子好饿…',win(t,1.6,2.6,.1,.2),1,WC,-1);
    bubble(OG.hx-10,OG.top-40,'给，吃吧！',win(t,2.8,3.3,.06,.06),eBack(seg(t,2.8,2.95)),OC,1);
    bubble(bx,by,'谢谢牛哥！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),WC,-1);
    bubble(BG.hx+10,BG.hy-110,'我也帮你！',win(t,4.4,4.9,.06,.1),eBack(seg(t,4.4,4.55)),BUN,-1);
    bubble(bx,by,'你们真好！',win(t,4.66,5.8,.06,.15),eBack(seg(t,4.66,4.8)),WC,-1);
    bubble(OG.hx-10,OG.top-40,'帮我搬个家？',win(t,5.95,6.95,.06,.12),eBack(seg(t,5.95,6.1)),OC,1);
    bubble(bx,by,'我很忙！',win(t,6.1,6.95,.06,.12),eBack(seg(t,6.1,6.25)),WE,1);
    proverb(t,'忘恩负义',RX-60,GY-620,3,WC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(bx,by,['还有吗？','再来点！','都是我的！'][i],a,eBack(seg(t,k,k+.2)),WC,-1);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(OG.hx-10,OG.top-40,'借我点钱急用？',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),OC,1);
    if(t>=WAVES[1]&&t<LOCK)bubble(BG.hx+10,BG.hy-110,'上次我帮过你…',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),BUN,-1);
    if(t>=LOCK)bubble(bx,by,'有吗？忘了',a,eBack(seg(t,LOCK,LOCK+.2)),WE,1);
    bigText(t,LOCK,B(7),RX+400,GY-700,'用完就扔，翻脸不认',RED,60);}
  if(b3>0){const a=b3*endF;
    // target board
    const tx=1000,ty=GY-300;[60,40,20].forEach((r,i)=>glow(circ(tx,ty,r,r,30),1,i==2?RED:GOLD,2.4,a,10,false));JABS.forEach((k,i)=>{if(t<k-.3)return;const p=seg(t,k-.3,k);const x=lerp(RG.fh[0]+20,tx-6,p),y=lerp(RG.fh[1],ty-6+i*10,p);glow([[x-50,y],[x,y]],1,'#fff',2.4,a,10,false);});
    if(t>=B(7)&&t<STAMP)bubble(bx,by,'我要的，我自己拿',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+400,GY-720,'目标明确，从不内耗',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['自私','忘恩','冷血'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*260+60,GY-600-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'心凉了…',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(OG.hx+10,OG.top-40,'以后别找我',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,-1);
    bigText(t,SLAM,SLAM+1.8,RX+400,GY-720,'一片好心，喂了狼','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(bx,by+50,'怎么…没人帮我了',a*seg(t,B(9)+.9,B(9)+1.2),1,WC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by+50,'谢谢你们！这次换我！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+10,BG.hy-110,'哇！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(OG.hx-10,OG.top-40,'好兄弟！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
