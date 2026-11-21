// ===== 人间动物志 · 鸵鸟 =====
const OSC='#d8d0f0',ONK='#ffb4a0',SAND='#e8c890';
const RX=520;
// ostrich: o:{exp 0 normal 1 nervous 2 sad 3 happy 4 shock, bury 0..1, gold, sq, lean, fhx,fhy(wing tip), run}
function ostrich(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,bury:0,gold:0,sq:1,lean:0,fhx:60,fhy:-170,run:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);const w=3.2/s;const C=mixc(OSC,GOLD,o.gold),NK=mixc(ONK,GOLD,o.gold*.6);
  const ph=o.run*Math.sin(t0g*22);const b=o.bury;
  const hx=lerp(70,190,b),hy=lerp(-372,24,b);const ctl=[lerp(96,170,b),lerp(-300,-250,b)];
  ctx.save();ctx.rotate(o.lean);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0a0810';ctx.beginPath();ctx.ellipse(0,-196,72,50,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-20+ph*30,0],[-6+ph*16,-80],[-16,-150]]],['leg2',[[20-ph*30,0],[34-ph*16,-80],[16,-150]]],['body',circ(0,-196,72,50,48)],
    ['tail',cat(Q([-66,-210],[-110,-250],[-120,-206],8),Q([-120,-206],[-130,-180],[-70,-186],8))],['wing',Q([-30,-216],[20,-246],[50,-196],10)]];
  const N=P.length+5;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm.startsWith('leg')?NK:C,w,a,14,prog<1);});
  // neck + head (clipped above ground)
  ctx.save();ctx.beginPath();ctx.rect(-600,-1200,1200,1200);ctx.clip();
  const pn=seg(prog,.45,.75),neck=Q([52,-216],ctl,[hx-6,hy+12],14);if(pn>0)glow(neck,pn,NK,w*1.1,a,14,prog<1);
  const fp=seg(prog,.6,.85);
  if(fp>0){const fa=a*fp,e=o.exp;ctx.save();ctx.globalAlpha=fa*.92;ctx.fillStyle='#0a0810';ctx.beginPath();ctx.ellipse(hx,hy,18,15,0,0,TAU);ctx.fill();ctx.restore();
    glow(circ(hx,hy,18,15,24),1,NK,w,fa,10,false);glow([[hx+14,hy-4],[hx+40,hy+2],[hx+14,hy+8]],1,'#ffd080',w,fa,8,false);
    [[-4,-20],[4,-24],[12,-20]].forEach(([dx,dy])=>glow([[hx+dx,hy-12],[hx+dx,hy+dy]],1,C,w*.6,fa,4,false));
    const ex=hx+4,ey=hy-3;
    if(e==0)dot(ex,ey,3.6,'#fff',fa);
    else if(e==1){dot(ex,ey,3.6,'#fff',fa);const sp=(t0g*1.2)%1;dot(hx-16,hy-20+sp*30,4,'#8ad8ff',fa*(1-sp));}
    else if(e==2){dot(ex,ey+1,3,'#fff',fa);glow([[ex-6,ey-8],[ex+6,ey-5]],1,NK,w*.8,fa,4,false);const tp=(t0g*1.4)%1;dot(ex,ey+6+tp*26,3,'#8ad8ff',fa*(1-tp));}
    else if(e==3)glow(Q([ex-5,ey+1],[ex,ey-5],[ex+5,ey+1],6),1,'#fff',w*.8,fa,4,false);
    else{glow(circ(ex,ey,6,6,12),1,'#fff',w*.7,fa,4,false);dot(ex,ey,2,'#fff',fa);}}
  ctx.restore();
  if(fp>0){const fa=a*fp;arm([30,-206],[o.fhx,o.fhy],90,C,w,fa,-1);glow([[o.fhx,o.fhy],[o.fhx+14,o.fhy-12]],1,C,w,fa,6,false);glow([[o.fhx,o.fhy],[o.fhx+18,o.fhy+2]],1,C,w,fa,6,false);}
  // sand mound
  if(b>.3){const ma=a*seg(b,.3,.7);ctx.save();ctx.globalAlpha=ma*.95;ctx.fillStyle='#1a1408';ctx.beginPath();ctx.ellipse(190,0,62,30,0,Math.PI,TAU);ctx.fill();ctx.restore();glow(circ(190,0,62,30,30).filter(q=>q[1]<=0.5),1,SAND,w,ma,10,false);[[-30,-8],[0,-20],[26,-10],[12,-4]].forEach(([dx,dy])=>dot(190+dx,dy,2.2,SAND,ma));}
  ctx.restore();ctx.restore();
  const k=s*o.sq;return{hx:x+dir*s*hx,hy:y+k*hy,top:y+k*Math.min(hy,-260)-40*s,mx:x+dir*s*190,my:y-40*s,cx:x,cy:y+k*-210,fh:[x+dir*s*o.fhx,y+k*o.fhy]};}
function paperStack(x,y,n,a,lab){if(a<=.01||n<=0)return;for(let i=0;i<n;i++){const yy=y-i*16,dx=Math.sin(i*1.7)*8;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#14100c';ctx.fillRect(x-50+dx,yy-14,100,14);ctx.restore();glow(rectP(x-50+dx,yy-14,x+50+dx,yy),1,'#f0e8e0',1.6,a,6,false);}
  if(lab){ctx.save();ctx.globalAlpha=a;ctx.font='900 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#ff6a6a';ctx.shadowColor='#ff3a3a';ctx.shadowBlur=10;ctx.fillText(lab,x,y-n*16-14);ctx.restore();}}
function probBall(x,y,r,a,rot){if(a<=.01||r<2)return;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#120608';ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();ctx.restore();glow(circ(x,y,r,r,48),1,'#ff5a6a',3,a,18,false);
  for(let i=0;i<5;i++){const an=rot+i*1.26;glow([[x+Math.cos(an)*r*.3,y+Math.sin(an)*r*.3],[x+Math.cos(an+.4)*r*.85,y+Math.sin(an+.4)*r*.85]],1,'#ff8a8a',1.6,a*.6,6,false);}
  ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(r*.55)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#ffd0d0';ctx.shadowColor='#ff3a4a';ctx.shadowBlur=14;ctx.fillText('问题',x,y+r*.2);ctx.restore();}
function zzz(x,y,a,t){if(a<=.01)return;for(let i=0;i<3;i++){const p=((t*.8+i/3)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI);ctx.font='900 '+(26+i*8)+'px '+SER;ctx.fillStyle='#bfe0ff';ctx.shadowColor='#8ac8ff';ctx.shadowBlur=10;ctx.fillText('z',x+p*60+i*10,y-p*90);ctx.restore();}}
const RPp=o=>Object.assign({x:RX,exp:0,bury:0,gold:0,sq:1,lean:0,fhx:60,fhy:-170,run:0},o);
const BUR=o=>RPp({exp:1,bury:1,fhx:-20,fhy:-250,...o});
const KR=[[0,RPp({exp:3})],[2.67,RPp({exp:3})],[3.0,RPp({exp:4})],[3.15,RPp({exp:4})],[3.3,BUR({}),'snap'],[5.8,BUR({})],[5.95,RPp({exp:4,bury:.15,sq:1.04,fhx:90,fhy:-260}),'snap'],[6.4,RPp({exp:4,bury:.1})],[6.6,BUR({}),'snap'],[7.6,BUR({})],
 [DROP,RPp({exp:4,sq:1.06,fhx:90,fhy:-260}),'snap'],[DROP+.8,RPp({exp:1})]];
MK.forEach((k,i)=>KR.push([k-.12,RPp({exp:4,bury:.1})],[k,BUR({sq:.96}),'snap'],[k+.3,BUR({})]));
KR.push([B(6),BUR({})],[WAVES[0],BUR({sq:.94}),'snap'],[WAVES[1],BUR({sq:.92}),'snap'],[LOCK-.15,BUR({})],[LOCK,RPp({exp:4,sq:1.06,fhx:100,fhy:-270}),'snap'],[LOCK+.5,RPp({exp:4})],[LOCK+.9,BUR({})],[B(7)-.1,BUR({})],[B(7)+.15,RPp({exp:3})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:3,sq:1.04,lean:i?.05:-.05,fhx:90,fhy:-240}),'snap'],[k+.4,RPp({exp:3})]));
KR.push([STAMP,RPp({exp:3,gold:.5,sq:1.1,fhx:100,fhy:-280}),'snap'],[STAMP+.6,RPp({exp:3,gold:.3,fhx:90,fhy:-240})],[B(8),RPp({exp:1})]);
SNAPS.forEach((k,i)=>KR.push([k-.1,RPp({exp:4})],[k,BUR({sq:.94-i*.04}),'snap'],[k+.35,BUR({sq:.92-i*.04})]));
KR.push([SLAM-.2,BUR({sq:.88})],[SLAM,BUR({exp:4,sq:.8,lean:.08}),'snap'],[SLAM+.5,BUR({exp:2,sq:.82})],[B(9),BUR({exp:2,sq:.84})],[CLIMAX-.7,BUR({exp:2,sq:.86})],[CLIMAX-.35,RPp({exp:0,bury:.2,sq:.86})],[CLIMAX-.15,RPp({exp:0,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12,fhx:100,fhy:-290,run:0}),'snap'],[CLIMAX+.5,RPp({exp:3,gold:1,fhx:90,fhy:-250,run:1})],[CLIMAX+1.3,RPp({exp:3,gold:1,fhx:90,fhy:-250,run:0})],[27.5,RPp({exp:3,gold:1,fhx:90,fhy:-250})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:200,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:140})],[4.1,BPp({a:0,x:140})],[4.4,BPp({a:1,exp:1,fhx:70,fhy:-110})],[5.4,BPp({exp:2,droop:.5})],[6.0,BPp({exp:1,hop:.2}),'snap'],[B(5),BPp({exp:2,droop:.5})],
 [B(6),BPp({exp:1})],[WAVES[1],BPp({exp:1,fhx:80,fhy:-130})],[LOCK,BPp({exp:1,hop:.3}),'snap'],[B(7)-.3,BPp({a:1,exp:1})],[B(7)-.1,BPp({a:0})],[B(8)-.4,BPp({a:0})],
 [B(8)-.1,BPp({a:1,exp:1})],[SNAPS[0],BPp({exp:1,hop:.3,fhx:70,fhy:-140}),'snap'],[SLAM,BPp({exp:2,droop:.8})],[B(9),BPp({a:1,exp:2})],[B(9)+.4,BPp({a:0})],
 [CLIMAX+.2,BPp({a:0,x:140})],[CLIMAX+.7,BPp({a:1,x:220,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:220,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:220,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1130,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0,x:1200})],[2.5,OPp({a:0,x:1200})],[2.75,OPp({a:1,exp:0,fhx:110,fhy:-170})],[3.3,OPp({exp:1})],[B(5),OPp({exp:1})],[MK[1],OPp({exp:1,sweat:1}),'snap'],
 [B(6),OPp({exp:0,fhx:110,fhy:-160})],[WAVES[0],OPp({exp:0,fhx:120,fhy:-170,lean:-.08}),'snap'],[WAVES[1],OPp({exp:1,fhx:120,fhy:-170}),'snap'],[LOCK,OPp({exp:2})],[B(7)-.3,OPp({exp:2})],[B(7)-.1,OPp({a:0})],[B(8)-.4,OPp({a:0})],
 [B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:3,dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,OPp({a:0,x:1260,dir:1,walk:1})],
 [CLIMAX+.2,OPp({a:0,x:1200})],[CLIMAX+.7,OPp({a:1,x:1130,exp:0,fhx:120,fhy:-210})],[27.5,OPp({a:1,x:1130,exp:0,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
const BALLX=1030;
function ballR(t){if(t<B(8)-.1)return 0;let r=40;if(t>=B(8)+.2)r=60;SNAPS.forEach((k,i)=>{if(t>=k)r+=30+i*10;});if(t>=SLAM)r+=40;if(t>=B(9))r+=seg(t,B(9),CLIMAX-.4)*30;return r;}
const EP={name:'鸵鸟',en:'OSTRICH',epn:'第十三期',acc:ONK,grad:['#ffffff','#ffd8cc','#c8b8ff'],glowC:'rgba(255,170,150,.85)',kwCol:'rgba(255,225,215,.92)',kw:'自欺欺人 · 拖延 · 心态稳 · 越躲越大',slamCol:'#ff8a8a',
  words:['逃避','拖延','焦虑','装睡'],
  cams:[[0,560,560,1.7],[2.3,570,580,1.35],[2.67,640,580,.95],[5.33,630,580,1.0],[7.4,610,570,1.05],[DROP,650,590,.95],[B(5),650,590,.98],[B(6),650,600,.98],[LOCK,630,590,1.02],[B(7),640,580,1.0],[STAMP,640,570,1.02],[B(8),660,600,.96],[SLAM,650,620,.98],[B(9),620,700,1.08],[CLIMAX-.5,610,740,1.18],[CLIMAX,660,570,.92],[B(11),660,590,.96]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0e0a1a','#3a2a5a','#ffb0a0']],[B(5),['#0c0a14','#2a2040','#806090']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['遇事',0],['就躲',1]]],[[['问题一来',0]],[['头往',0],['沙里埋',1]]],[[['看不见',0]],[['就当',0],['没发生',1]]],[[['天塌下来',0]],[['TA也',0],['不抬头',1]]],[[['人称',0]],[['鸵鸟',1]]],
   [[['消息',0]],[['不敢',0],['点开',1]]],[[['电话',0]],[['不敢',0],['接',1]]],
   [[['截止日期',0]],[['越拖',0],['越近',1]]],[[['小问题',0]],[['拖成',0],['大麻烦',1]]],
   [[['好的一面',0]],[['心态',0],['超稳',1]]],[[['天大的事',0]],[['先睡',0],['一觉',1]]],
   [[['坏的一面',0]],[['问题',0],['越滚越大',1]]],[[['躲到最后',0]],[['全砸',0],['身上',1]]],
   [[['把头埋起来',0]],[['问题',0],['还在',1]]],[[['你不面对',0]],[['它就',0],['不走',1]]]],
  tags:[['01','遇事就躲',ONK],['02','拖延',RED],['03','心态稳',GOLD],['04','越躲越大','#a0a8b8']],
  cl:['抬起头','天没塌'],endCap:[[['问题',0]],[['没你想的',0],['那么大',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  // paper stack (02)
  if(b2>0){let n=4;WAVES.forEach(k=>{if(t>=k)n+=5;});if(t>=LOCK)n+=8;paperStack(940,GY,n,b2*endF,'截止日');}
  // problem ball (04 + storm)
  const br=ballR(t);if(br>0&&t<CLIMAX+.05){const a=endF*seg(t,B(8)-.1,B(8)+.2);probBall(BALLX,GY-br,br,a,t*.6);}
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=ostrich(ro.x,GY,1.45,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const buried=ro.bury>.6;const bx=buried?RG.mx+20:RG.hx+20,by=buried?RG.my-230:RG.hy-90;
  if(t>=CLIMAX){const dt=t-CLIMAX;if(dt<1.2){shards(t,CLIMAX,BALLX,GY-ballR(CLIMAX-.01),endF,301,'#ff8a8a',30,1000);}}
  if(b3>0)zzz(RG.hx+30,RG.hy-40,b3*endF*seg(t,JABS[1],JABS[1]+.2)*(t<STAMP?1:0),t);
  // ---- intro ----
  if(t<DROP){bubble(RG.hx+20,RG.hy-90,'今天真美好~',win(t,1.6,2.6,.1,.2),1,ONK,-1);
    bubble(OG.hx-10,OG.top-40,'方案这周交哦！',win(t,2.8,3.3,.06,.06),eBack(seg(t,2.8,2.95)),OC,1);
    bubble(bx,by,'我没听见~',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),ONK,-1);
    bubble(BG.hx+10,BG.hy-110,'你信用卡逾期了…',win(t,4.45,5.1,.06,.1),eBack(seg(t,4.45,4.6)),BUN,-1);
    bubble(bx,by,'看不见就不存在！',win(t,4.66,5.8,.06,.15),eBack(seg(t,4.66,4.8)),ONK,-1);
    if(t>=5.95&&t<6.6){bolt(RG.hx+80,GY-900,RG.hx+40,RG.hy-30,59,120,'#c8d8ff',endF*(1-seg(t,5.95,6.4)));sparks(t,5.95,RG.hx,RG.hy,24,59,600,.4,'#c8d8ff');}
    bubble(RG.hx+20,RG.hy-90,'哇！',win(t,5.95,6.5,.04,.08),eBack(seg(t,5.95,6.1)),'#c8d8ff',-1);
    proverb(t,'自欺欺人',RX-60,GY-640,3,ONK,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['体检报告','催债电话','老板消息'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1000,860,eOut(p)),GY-560+i*90,lab[i],a*(1-seg(t,e-.2,e)),eBack(p),'#ff7a8a',(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by,['不看不看！','明天再说！','睡一觉就好~'][i],a,eBack(seg(t,k,k+.2)),ONK,-1);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(OG.hx-10,OG.top-40,'又加了一堆',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),OC,1);
    if(t>=WAVES[1]&&t<LOCK)bubble(BG.hx+10,BG.hy-110,'只剩一天了！',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),BUN,-1);
    if(t>=LOCK&&t<LOCK+.9)bubble(RG.hx+20,RG.hy-90,'啊！明天就交？！',a,eBack(seg(t,LOCK,LOCK+.2)),'#ff9a9a',-1);
    bigText(t,LOCK,B(7),RX+420,GY-780,'躲着躲着，火烧眉毛',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(RG.hx+20,RG.hy-90,'天塌了，先睡一觉~',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+420,GY-780,'情绪稳定，从不内耗',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['逃避','拖延','装睡'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*240+20,GY-660-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'要来不及了！',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(OG.hx-100,OG.top-40,'我帮不了你了',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    bigText(t,SLAM,SLAM+1.8,RX+420,GY-780,'躲得了一时，躲不了一世','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx-160,by,'……还要躲多久？',a*seg(t,B(9)+.9,B(9)+1.2),1,ONK,-1);
    if(t>=CLIMAX-.6)bubble(RG.hx+20,RG.hy-90,'我来面对！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+10,BG.hy-110,'好样的！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(OG.hx-10,OG.top-40,'跑得真快！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
