// ===== 人间动物志 · 刺猬 =====
const SPK='#ffa860',HBD='#ecd0ae',HFC='#ffe6c8';
const HX=560;
// hedgehog: feet at (x,y) facing dir. o:{exp 0 grumpy 1 angry 2 sad 3 soft 4 shock, spike 0..1.8, sq, lean, hands, sg spike gold}
function hedgehog(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,spike:1,sq:1,lean:0,fhx:70,fhy:-90,bhx:-40,bhy:-80,sg:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;
  const sc=mixc(SPK,GOLD,o.sg);
  // spikes
  const sp=seg(prog,.35,.75);const NS=17;
  for(let i=0;i<NS;i++){const f=i/(NS-1);const an=Math.PI*.92+f*Math.PI*.95;const jit=Math.sin(t0g*30+i*2)*.04*Math.max(0,o.spike-1);
    const bx=Math.cos(an)*68,by=-112+Math.sin(an)*80;const L=(30+(i%2)*14)*o.spike;const tx=bx+Math.cos(an+jit)*L,ty=by+Math.sin(an+jit)*L;
    const l0=[bx+Math.cos(an-.5)*10,by+Math.sin(an-.5)*10],l1=[bx+Math.cos(an+.5)*10,by+Math.sin(an+.5)*10];
    if(sp>0&&L>2){const pp=seg(sp,f*.6,f*.6+.4);if(pp>0)glow([l0,[tx,ty],l1],pp,sc,w*.9,a,12,false);if(o.spike>1.3&&pp>=1)dot(tx,ty,3,'#fff',a*(o.spike-1.3)*2);}}
  ctx.save();ctx.globalAlpha=a*.94*Math.min(1,prog*2);ctx.fillStyle='#0e0a08';ctx.beginPath();ctx.ellipse(0,-112,70,80,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-22,0],[-20,-36]]],['leg2',[[24,0],[22,-36]]],['body',circ(0,-112,68,78,48)],['face',cat(Q([20,-178],[64,-182],[78,-130],10),Q([78,-130],[96,-112],[78,-92],8),Q([78,-92],[46,-56],[14,-70],10))],['ear',circ(28,-180,10,10,16)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.5,i/N*.5+.25);if(p>0)glow(pts,p,nm=='face'?HFC:HBD,w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp,C=HFC;
    ctx.save();ctx.globalAlpha=fa;ctx.fillStyle='#fff';ctx.beginPath();ctx.arc(94,-112,6,0,TAU);ctx.fill();ctx.restore();
    const ex=52,ey=-132;
    if(e==0){dot(ex,ey,4.5,'#fff',fa);glow([[ex-12,ey-12],[ex+10,ey-12]],1,C,w,fa,6,false);glow(Q([60,-96],[66,-102],[74,-96],4),1,C,w,fa,6,false);}
    else if(e==1){dot(ex,ey,5,'#fff',fa);glow([[ex-14,ey-18],[ex+10,ey-8]],1,'#ff6a5a',w*1.1,fa,8,false);glow(Q([58,-94],[66,-102],[76,-94],4),1,C,w,fa,6,false);glow(Q([30,-200],[34,-214],[40,-200],4),1,'#ff6a5a',w,fa,8,false);glow(Q([40,-206],[48,-214],[50,-202],4),1,'#ff6a5a',w,fa,8,false);}
    else if(e==2){dot(ex,ey,4.5,'#fff',fa);glow([[ex-10,ey-12],[ex+10,ey-17]],1,C,w,fa,6,false);glow(Q([58,-94],[66,-100],[74,-94],4),1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(ex-4,ey+8+tp*34,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow(Q([ex-8,ey],[ex,ey-8],[ex+8,ey],6),1,C,w,fa,6,false);glow(Q([58,-100],[66,-92],[76,-100],6),1,C,w,fa,6,false);}
    else{glow(circ(ex,ey,7,7,12),1,C,w,fa,6,false);glow(circ(68,-96,5,6,12),1,C,w,fa,6,false);}
    ctx.save();ctx.globalAlpha=fa*(e==3?.8:.4);ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(46,-110,8,0,TAU);ctx.fill();ctx.restore();
    arm([40,-96],[o.fhx,o.fhy],80,HBD,w,fa,-1);arm([-20,-96],[o.bhx,o.bhy],80,HBD,w,fa,1);dot(o.fhx,o.fhy,8,HBD,fa);dot(o.bhx,o.bhy,8,HBD,fa);}
  ctx.restore();return{hx:x+dir*s*50,hy:y+s*o.sq*-125,cx:x,cy:y+s*o.sq*-112};}
const HPp=o=>Object.assign({x:HX,exp:0,spike:1,sq:1,lean:0,fhx:100,fhy:-50,bhx:-50,bhy:-46,sg:0},o);
const BR=o=>HPp({exp:1,spike:1.75,sq:1.08,fhx:100,fhy:-150,bhx:-70,bhy:-150,...o});
const KH=[[0,HPp({})],[2.67,HPp({})],[3.25,HPp({exp:0})],[3.3,BR({}),'snap'],[3.9,HPp({exp:1,spike:1.2})],[4.66,BR({}),'snap'],[5.3,HPp({exp:1,spike:1.2})],[5.95,BR({spike:1.5}),'snap'],[6.3,HPp({exp:1,spike:1.15})],[6.6,BR({spike:1.5}),'snap'],[7.0,HPp({exp:1,spike:1.1})],
 [DROP,BR({spike:1.85}),'snap'],[DROP+.8,HPp({exp:1,spike:1.15})]];
MK.forEach(k=>KH.push([k,BR({}),'snap'],[k+.4,HPp({exp:1,spike:1.15})]));
KH.push([B(6),HPp({exp:0})]);WAVES.forEach(k=>KH.push([k,BR({}),'snap'],[k+.4,HPp({exp:1,spike:1.2})]));
KH.push([LOCK,BR({spike:1.95,sq:1.12}),'snap'],[LOCK+.6,HPp({exp:1,spike:1.3})],[B(7),HPp({exp:0,spike:1.1})]);
JABS.forEach(k=>KH.push([k,HPp({exp:1,spike:1.6,sq:.9,fhx:30,fhy:-80,bhx:0,bhy:-80,lean:-.08}),'snap'],[k+.35,HPp({exp:1,spike:1.4,fhx:30,fhy:-80,bhx:0,bhy:-80})]));
KH.push([STAMP,HPp({exp:1,spike:1.9,sg:1,sq:1.1,fhx:100,fhy:-160,bhx:-70,bhy:-160}),'snap'],[STAMP+.6,HPp({exp:0,spike:1.4,sg:.7})],[B(8),HPp({exp:0,spike:1.2})]);
SNAPS.forEach(k=>KH.push([k,HPp({exp:2,spike:1.4,sq:.92}),'snap'],[k+.35,HPp({exp:2,spike:1.2})]));
KH.push([SLAM-.2,HPp({exp:1,spike:1.2})],[SLAM,BR({spike:2.1,sq:1.15}),'snap'],[SLAM+.5,HPp({exp:2,spike:1.3,sq:.8,fhx:30,fhy:-70,bhx:10,bhy:-70})],[B(9),HPp({exp:2,spike:1.25,sq:.75,fhx:30,fhy:-70,bhx:10,bhy:-70})],[CLIMAX-.6,HPp({exp:2,spike:1.1,sq:.78,fhx:30,fhy:-70,bhx:10,bhy:-70})],[CLIMAX-.15,HPp({exp:3,spike:.7,sq:.8})],
 [CLIMAX,HPp({exp:3,spike:.25,sg:1,sq:1.1,fhx:100,fhy:-150,bhx:-80,bhy:-150}),'snap'],[CLIMAX+.6,HPp({exp:3,spike:.3,sg:1,fhx:-30,fhy:-120,bhx:-90,bhy:-130})],[B(11),HPp({exp:3,spike:.3,sg:1,fhx:-30,fhy:-120,bhx:-90,bhy:-130})],[27.5,HPp({exp:3,spike:.3,sg:1,fhx:-30,fhy:-120,bhx:-90,bhy:-130})]);
KH.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:250,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:150})],[2.5,BPp({a:0,x:150})],[2.67,BPp({a:1,x:250})],[2.8,BPp({x:300,fhx:80,fhy:-110,bhx:70,bhy:-100,blush:1,walk:1})],[3.25,BPp({x:390,fhx:80,fhy:-110,bhx:70,bhy:-100,blush:1})],[3.3,BPp({x:390,exp:1,hop:.4})],[3.6,BPp({x:230,exp:2,hop:0,droop:.8}),'snap'],[B(5)-.4,BPp({x:230,exp:2,droop:.6})],
 [B(6),BPp({x:250,exp:0})],[WAVES[0]-.35,BPp({x:380,fhx:80,fhy:-100,bhx:70,bhy:-100,walk:1})],[WAVES[0],BPp({x:390,exp:1,hop:.3})],[WAVES[0]+.3,BPp({x:250,exp:2,droop:.7}),'snap'],[LOCK,BPp({x:250,exp:1})],[LOCK+.3,BPp({x:150,exp:2,droop:1}),'snap'],[B(7)-.2,BPp({a:0,x:150,exp:2})],
 [B(8)-.4,BPp({a:0,x:250,exp:2})],[B(8)-.1,BPp({a:1,x:250,exp:2,droop:.6})],[SNAPS[0],BPp({x:250,exp:2,droop:.8,dir:-1,walk:1}),'snap'],[SNAPS[0]+1.4,BPp({a:0,x:-80,dir:-1,walk:1})],
 [CLIMAX+.2,BPp({a:0,x:200})],[CLIMAX+.7,BPp({a:1,x:360,exp:0,blush:1,fhx:80,fhy:-100,bhx:70,bhy:-100})],[27.5,BPp({a:1,x:380,exp:0,blush:1,fhx:80,fhy:-100,bhx:70,bhy:-100})]];
const TPp=o=>Object.assign({x:920,dir:-1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const KT=[[0,TPp({a:0,x:1100})],[4.2,TPp({a:0,x:1100})],[4.4,TPp({a:1,mouth:1,fhx:110,fhy:-170})],[4.66,TPp({lean:-.2,x:960,fhx:80,fhy:-200,bhx:-80,bhy:-200}),'snap'],[5.4,TPp({x:940})],[B(5),TPp({})],[MK[1]-.3,TPp({mouth:1,fhx:150,fhy:-160})],[MK[1],TPp({lean:-.2,fhx:80,fhy:-220,bhx:-80,bhy:-220}),'snap'],[MK[1]+.5,TPp({})],
 [WAVES[1]-.35,TPp({x:800,fhx:150,fhy:-150,walk:1})],[WAVES[1],TPp({x:780,lean:-.2,fhx:80,fhy:-220,bhx:-80,bhy:-220})],[WAVES[1]+.3,TPp({x:930}),'snap'],[LOCK,TPp({x:930})],[LOCK+.3,TPp({x:1040,lean:-.25}),'snap'],[B(7)-.3,TPp({x:960})],
 [B(7),TPp({x:960,evil:1,knife:1,bhx:60,bhy:-160})],[JABS[0]-.25,TPp({x:900,evil:1,knife:1,bhx:-40,bhy:-200})],[JABS[0],TPp({x:840,evil:1,knife:1,bhx:150,bhy:-140,lean:.1}),'snap'],[JABS[0]+.4,TPp({x:900,evil:1,knife:1,bhx:-40,bhy:-200})],[JABS[1],TPp({x:840,evil:1,knife:1,bhx:150,bhy:-140,lean:.1}),'snap'],[JABS[1]+.4,TPp({x:900,evil:1,knife:1,bhx:-40,bhy:-200})],
 [STAMP,TPp({x:1060,evil:1,knife:0,lean:-.35,crack:1,fhx:80,fhy:-220,bhx:-80,bhy:-220}),'snap'],[STAMP+.8,TPp({x:1150,evil:1,dir:1,walk:1,a:0})],[B(8)-.1,TPp({a:0,x:1050})],[B(8)+.1,TPp({a:1,x:920})],[SNAPS[1],TPp({dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,TPp({a:0,x:1250,dir:1,walk:1})],
 [CLIMAX+.2,TPp({a:0,x:1050})],[CLIMAX+.7,TPp({a:1,x:880,mouth:1,fhx:120,fhy:-200})],[27.5,TPp({a:1,x:880,mouth:1,fhx:120,fhy:-200})]];
KB.sort((a,b)=>a[0]-b[0]);KT.sort((a,b)=>a[0]-b[0]);
const EP={name:'刺猬',en:'HEDGEHOG',epn:'第七期',acc:SPK,grad:['#fff4e8','#ffa860','#ff6a8a'],glowC:'rgba(255,160,90,.85)',kwCol:'rgba(255,210,170,.92)',kw:'一碰就炸 · 拒人千里 · 自我保护 · 伤人伤己',slamCol:SPK,
  words:['孤独','敏感','防备','冷漠'],
  cams:[[0,530,690,1.9],[2.3,540,680,1.5],[2.67,620,620,1.0],[5.33,620,610,1.05],[7.4,600,600,1.12],[DROP,640,620,1.0],[B(5),620,610,1.04],[B(6),620,620,1.02],[LOCK,600,610,1.08],[B(7),640,620,1.02],[STAMP,640,610,1.06],[B(8),640,620,1.02],[SLAM,620,640,1.04],[B(9),580,720,1.12],[CLIMAX-.5,570,760,1.24],[CLIMAX,640,580,.95],[B(11),640,600,1.0]],
  sky:[[0,['#0a0604','#160e0a','#261a12']],[DROP,['#1a0c04','#6a3418','#ffb070']],[B(5),['#140a06','#3a2214','#a06a40']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#1a0a10','#6a2a40','#ffb0c8']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['浑身',0],['是刺',1]]],[[['你想靠近',0]],[['TA就',0],['扎你',1]]],[[['一句玩笑',0]],[['TA就',0],['炸毛',1]]],[[['越亲的人',0]],[['扎得',0],['越疼',1]]],[[['人称',0]],[['刺猬',1]]],
   [[['一句话不对',0]],[['立刻',0],['炸毛',1]]],[[['好心关心',0]],[['也被',0],['扎回来',1]]],
   [[['不让',0]],[['任何人',0],['靠近',1]]],[[['把关心',0]],[['推得',0],['远远的',1]]],
   [[['好的一面',0]],[['懂得',0],['保护自己',1]]],[[['坏人',0]],[['不敢',0],['欺负TA',1]]],
   [[['坏的一面',0]],[['伤人',0],['伤己',1]]],[[['扎走的',0]],[['都是',0],['爱你的人',1]]],
   [[['刺越硬',0]],[['心越',0],['孤单',1]]],[[['其实TA',0]],[['最怕',0],['受伤',1]]]],
  tags:[['01','一碰就炸',SPK],['02','拒人千里',RED],['03','自我保护',GOLD],['04','伤人伤己','#a0a8b8']],
  cl:['放下刺','才能拥抱'],endCap:[[['刺是盔甲',0]],[['不是',0],['武器',1]]]};
function burst(t,k,G,col,big){if(t<k||t>k+.8)return;const dt=t-k;shock(G.cx,G.cy,seg(dt,0,.6),1,col,big?900:500,.9,5);sparks(t,k,G.cx,G.cy,big?50:24,Math.floor(k*10),big?1100:700,.6,col);}
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ho=kfO(KH,T),bo=kfO(KB,T),to=kfO(KT,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170,fh:[bo.x,GY-95]};
  const TG=tiger(to.x,GY,1.25,to.dir,to,to.a*endF,1)||{hx:to.x,hy:GY-280};
  const hprog=t<2.67?seg(t,.5,2.4):1;const HG=hedgehog(ho.x,GY,1.5,1,ho,endF,hprog);FOC=[HG.cx,HG.cy];
  [3.3,4.66,5.95,6.6,...MK,...WAVES].forEach(k=>burst(t,k,HG,SPK,false));burst(t,LOCK,HG,RED,true);JABS.forEach(k=>{if(t>=k&&t<k+.4)sparks(t,k,HG.cx+90,HG.cy-40,30,k*7,800,.4,'#fff');});
  // hearts at climax
  if(t>=CLIMAX+.6){const dt=t-CLIMAX-.6;for(let i=0;i<5;i++){const p=(dt*.5+i/5)%1;heartF(HG.cx-120+i*50+Math.sin(dt*2+i)*14,HG.cy-120-p*240,.9+.3*(i%2),'#ff6a9a',endF*(1-p)*seg(dt,0,.4));}}
  // ---- intro ----
  if(t<DROP){bubble(HG.hx+30,HG.hy-170,'……别烦我',win(t,1.6,2.6,.1,.2),1,SPK,-1);
    bubble(BG.hx-10,BG.hy-110,'抱一个~',win(t,2.8,3.3,.06,.06),eBack(seg(t,2.8,2.95)),BUN,1);
    bubble(BG.hx-20,BG.hy-110,'哎哟！',win(t,3.35,4.3,.06,.15),eBack(seg(t,3.35,3.5)),RED,1);
    bubble(TG.hx-20,TG.hy-150,'你怎么这么凶？',win(t,4.4,4.95,.06,.1),eBack(seg(t,4.4,4.55)),TC,1);
    bubble(HG.hx+30,HG.hy-170,'别管我！',win(t,4.66,5.9,.06,.15),eBack(seg(t,4.66,4.8)),RED,-1);
    bubble(HG.hx+30,HG.hy-170,'都离我远点！',win(t,6.0,7.0,.06,.12),eBack(seg(t,6.0,6.15)),RED,-1);
    proverb(t,'浑身是刺',HX-110,GY-600,3,SPK,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const W1=[[B(5)-.1,MK[0],'开个玩笑嘛',BG],[MK[0]+.1,MK[1],'你胖了？',TG],[MK[1]+.1,MK[2],'你还好吗？',BG]];
    W1.forEach(([k0,k1,txt,G],i)=>{if(t<k0||t>k1+.5)return;const p=seg(t,k0,k1);const x=lerp(G.hx,HG.cx+(G===BG?-130:150),eIn(p)),y=lerp(G.hy-60,HG.cy-80,eIn(p));if(t<k1)wordBox(x,y,txt,a,.8,'#c8c0b8',0);else shards(t,k1,x,y,a,i+40,'#e0d8d0',16,700);});
    MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(HG.hx+40,HG.hy-180,['关你什么事！','你什么意思？！','烦死了！'][i],a,eBack(seg(t,k,k+.2)),RED,-1);});}
  if(b2>0){const a=b2*endF;if(t>=B(6)&&t<WAVES[0])heartF(BG.fh[0]+10,BG.fh[1]-10,1.2,'#ff6a9a',a);if(t>=WAVES[0]&&t<WAVES[0]+.8)shards(t,WAVES[0],BG.fh[0]+10,BG.fh[1],a,51,'#ff6a9a',14,600);
    if(t>=WAVES[0]-.1&&t<LOCK)bubble(BG.hx-10,BG.hy-110,'我只是想关心你',a,eBack(seg(t,WAVES[0]-.1,WAVES[0]+.1)),BUN,1);
    if(t>=WAVES[1]&&t<LOCK)bubble(TG.hx-20,TG.hy-150,'疼疼疼！',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),TC,1);
    bigText(t,LOCK,B(7),HX+400,GY-660,'越想靠近，越被推开',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<JABS[0])bubble(TG.hx-20,TG.hy-150,'嘿嘿，欺负你！',a,eBack(seg(t,B(7),B(7)+.2)),RED,1);
    if(t>=JABS[0]&&t<STAMP)bubble(HG.hx+30,HG.hy-180,'休想！',a,eBack(seg(t,JABS[0],JABS[0]+.2)),GOLD,-1);
    if(t>=STAMP&&t<STAMP+1.2){shards(t,STAMP,TG.hx-60,TG.hy+80,a,88,'#e8eef8',18,900);bubble(TG.hx-20,TG.hy-150,'嗷！扎手！',a*(1-seg(t,STAMP+.9,STAMP+1.2)),eBack(seg(t,STAMP,STAMP+.2)),TC,1);}
    bigText(t,STAMP,B(8),HX+400,GY-660,'有刺，坏人不敢碰',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['难相处','脾气差','刺头'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(HX+(i-1)*250,GY-560-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'算了…',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(TG.hx+10,TG.hy-150,'我走了',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),TC,-1);
    bigText(t,SLAM,SLAM+1.8,HX+400,GY-660,'扎走了所有爱你的人','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(HG.hx+30,HG.hy-150,'其实…我也想被抱抱',a*seg(t,B(9)+.9,B(9)+1.2),1,SPK,-1);
    if(t>=CLIMAX-.6)bubble(HG.hx+30,HG.hy-150,'我愿意…放下刺',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx-10,BG.hy-110,'抱抱！',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(TG.hx-20,TG.hy-150,'这才对嘛',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
