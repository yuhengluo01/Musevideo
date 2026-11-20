// ===== 人间动物志 · 井底之蛙 =====
const FG='#8cff6a',STONE='#a8a0b8',SOIL='#3a2a20',WAT='#6ee8ff';
const FX0=640,WTP=GY-380,WL0=330,WL1=410,WR0=870,WR1=950;
// frog: feet at (x,y). o:{exp 0 smug 1 shock 2 sad 3 firm 4 happy, sq, lean, hands}
function frog(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,sq:1,lean:0,fhx:62,fhy:-30,bhx:-56,bhy:-30},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#07100a';ctx.beginPath();ctx.ellipse(0,-72,72,62,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(6,-148,64,46,0,0,TAU);ctx.fill();ctx.beginPath();ctx.arc(-24,-192,21,0,TAU);ctx.arc(36,-192,21,0,TAU);ctx.fill();ctx.restore();
  const P=[['body',circ(0,-72,72,60,44)],['head',circ(6,-148,64,44,44)],['eye',circ(-24,-192,20,20,24)],['eye2',circ(36,-192,20,20,24)],
    ['leg',cat(Q([-58,-34],[-118,-24],[-74,0],10),Q([-74,0],[-46,4],[-22,0],8))],['leg2',cat(Q([58,-34],[118,-24],[78,0],10),Q([78,0],[52,4],[28,0],8))],['belly',Q([-38,-40],[0,-14],[40,-40],10)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,FG,w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp,C=FG;
    if(e==0){dot(-24,-188,5,'#fff',fa);dot(36,-188,5,'#fff',fa);glow([[-42,-196],[-6,-196]],1,C,w,fa,6,false);glow([[18,-196],[54,-196]],1,C,w,fa,6,false);glow(Q([-30,-130],[10,-118],[48,-136],10),1,C,w,fa,6,false);}
    else if(e==1){dot(-24,-192,7,'#fff',fa);dot(36,-192,7,'#fff',fa);glow(circ(8,-124,11,9,14),1,C,w,fa,6,false);}
    else if(e==2){dot(-24,-188,5,'#fff',fa);dot(36,-188,5,'#fff',fa);glow([[-40,-204],[-10,-210]],1,C,w,fa,6,false);glow([[22,-210],[52,-204]],1,C,w,fa,6,false);glow(Q([-20,-120],[8,-132],[36,-120],8),1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(-30,-176+tp*40,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){dot(-24,-190,6,'#fff',fa);dot(36,-190,6,'#fff',fa);glow([[-42,-214],[-8,-204]],1,C,w,fa,6,false);glow([[54,-214],[20,-204]],1,C,w,fa,6,false);glow([[-20,-128],[36,-128]],1,C,w,fa,6,false);}
    else{glow(Q([-34,-190],[-24,-202],[-14,-190],6),1,C,w,fa,6,false);glow(Q([26,-190],[36,-202],[46,-190],6),1,C,w,fa,6,false);glow(Q([-34,-134],[8,-104],[50,-134],12),1,C,w,fa,6,false);}
    ctx.save();ctx.globalAlpha=fa*.45;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(-40,-146,8,0,TAU);ctx.arc(56,-146,8,0,TAU);ctx.fill();ctx.restore();
    arm([40,-100],[o.fhx,o.fhy],100,C,w,fa,-1);arm([-36,-100],[o.bhx,o.bhy],100,C,w,fa,1);dot(o.fhx,o.fhy,9,C,fa);dot(o.bhx,o.bhy,9,C,fa);}
  ctx.restore();return{hx:x+dir*s*6,hy:y+s*o.sq*-150};}
function well(a,prog,lit){if(a<=.01)return;
  // inside dark
  ctx.save();ctx.globalAlpha=a*.55;ctx.fillStyle='#05070a';ctx.fillRect(WL1,WTP,WR0-WL1,GY-WTP);ctx.restore();
  // soil outside
  ctx.save();ctx.globalAlpha=a*.97;ctx.fillStyle='#0d0907';ctx.fillRect(-1500,WTP,1500+WL0,GY-WTP+4);ctx.fillRect(WR1,WTP,2500,GY-WTP+4);ctx.fillStyle='#14100e';ctx.fillRect(WL0,WTP,WL1-WL0,GY-WTP);ctx.fillRect(WR0,WTP,WR1-WR0,GY-WTP);ctx.restore();
  [[-1500,WL0],[WR1,3000]].forEach(([x0,x1])=>{for(let k=1;k<4;k++)thin([[x0,WTP+k*95],[x1,WTP+k*95+(k%2?6:-6)]],'#5a4434',1.2,a*.35);});
  const c=lit?mixc(STONE,GOLD,lit):STONE;
  glow([[-1500,WTP],[WL0,WTP]],prog,c,2.4,a,8,false);glow([[WR1,WTP],[3000,WTP]],prog,c,2.4,a,8,false);
  glow(rectP(WL0,WTP,WL1,GY),prog,c,3,a,10,false);glow(rectP(WR0,WTP,WR1,GY),prog,c,3,a,10,false);
  if(prog>.5){const pa=a*seg(prog,.5,1);[WL0,WR0].forEach(x0=>{for(let r=1;r<8;r++){const y=WTP+r*47.5;thin([[x0,y],[x0+80,y]],c,1.3,pa*.6);thin([[x0+(r%2?40:20),y-47.5],[x0+(r%2?40:20),y]],c,1.1,pa*.45);}});}}
function lid(x,y,a,rot){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.globalAlpha=a*.96;ctx.fillStyle='#16131c';ctx.fillRect(-360,-44,720,44);ctx.restore();ctx.save();ctx.translate(x,y);ctx.rotate(rot);glow(rectP(-360,-44,360,0),1,STONE,3.4,a,12,false);for(let i=-3;i<=3;i++)thin([[i*100-20,-44],[i*100+20,0]],STONE,1.2,a*.5);ctx.globalAlpha=a;ctx.font='900 30px '+SER;ctx.textAlign='center';ctx.fillStyle='#e8e4f0';ctx.fillText('井 盖',0,-12);ctx.restore();}
function spring(t,t0,h,a){if(a<=.01||h<=0)return;const x=760;for(let i=0;i<9;i++){const ph=(t*2.2+i/9)%1;const xx=x+Math.sin(i*2.3+t*3)*18;glow([[xx,GY],[xx+Math.sin(t*4+i)*10,GY-h*(.6+.4*Math.sin(i*1.7))]],1,i%3?WAT:GOLD,2.6,a*.8,14,false);dot(x+Math.sin(i*5+t*6)*60*ph,GY-h*(1-ph*.3)+ph*ph*h*.4,4,i%2?WAT:GOLD,a*(1-ph));}dot(x,GY-h,22,GOLD,a*.6);}
const FPp=o=>Object.assign({x:FX0,oy:0,exp:0,sq:1,lean:0,fhx:62,fhy:-30,bhx:-56,bhy:-30},o);
const PU={fhx:80,fhy:-250},CR={fhx:-10,fhy:-80,bhx:20,bhy:-84},EAR={fhx:72,fhy:-176,bhx:-58,bhy:-176};
const KF=[[0,FPp({})],[2.67,FPp({})],[3.3,FPp({exp:0,...PU,sq:1.05}),'snap'],[4.4,FPp({exp:0,...PU})],[4.7,FPp({exp:4,fhx:90,fhy:-120,bhx:-80,bhy:-120}),'snap'],[5.9,FPp({exp:0,...CR})],[6.6,FPp({exp:0,...CR,sq:1.06}),'snap'],[7.4,FPp({exp:0,...CR})],
 [DROP,FPp({exp:4,sq:1.08,fhx:90,fhy:-220,bhx:-80,bhy:-220}),'snap'],[DROP+.8,FPp({exp:0,...CR})]];
MK.forEach((k,i)=>KF.push([k,FPp({exp:i==1?4:0,sq:1.08,...PU}),'snap'],[k+.4,FPp({exp:0,...PU,sq:1})]));
KF.push([B(6),FPp({exp:0,...CR})]);WAVES.forEach((k,i)=>KF.push([k,FPp({exp:3,lean:i?-.08:.08,fhx:i?-30:110,fhy:-60}),'snap'],[k+.4,FPp({exp:3,...CR})]));
KF.push([LOCK,FPp({exp:3,...EAR,sq:.9}),'snap'],[LOCK+.6,FPp({exp:3,...EAR})],[B(7),FPp({exp:3})]);
JABS.forEach(k=>KF.push([k,FPp({exp:3,sq:.82,fhx:90,fhy:-4,bhx:-80,bhy:-4}),'snap'],[k+.35,FPp({exp:3,sq:1})]));
KF.push([STAMP,FPp({exp:4,sq:1.1,fhx:90,fhy:-230,bhx:-80,bhy:-230}),'snap'],[STAMP+.6,FPp({exp:4,fhx:90,fhy:-200,bhx:-80,bhy:-200})],[B(8),FPp({exp:0,...CR})]);
SNAPS.forEach(k=>KF.push([k,FPp({exp:0,sq:1.05,...PU}),'snap'],[k+.35,FPp({exp:0,...CR})]));
KF.push([SLAM-.2,FPp({exp:1,fhx:80,fhy:-200,bhx:-70,bhy:-200})],[SLAM,FPp({exp:1,sq:.8,fhx:80,fhy:-200,bhx:-70,bhy:-200}),'snap'],[SLAM+.5,FPp({exp:2,sq:.9})],[B(9),FPp({exp:2,sq:.88})],[CLIMAX-.6,FPp({exp:2,sq:.9})],[CLIMAX-.15,FPp({exp:3,sq:.72})],
 [CLIMAX,FPp({exp:4,sq:1.15,oy:-560,x:840,fhx:90,fhy:-230,bhx:-80,bhy:-230}),'snap'],[CLIMAX+.45,FPp({exp:4,oy:-380,x:960,sq:.9,fhx:90,fhy:-200,bhx:-80,bhy:-200})],[CLIMAX+.7,FPp({exp:4,oy:-380,x:960,sq:1})],[B(11),FPp({exp:4,oy:-380,x:960})],[27.5,FPp({exp:4,oy:-380,x:960})]);
KF.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:220,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0})],[2.7,BPp({a:0,x:120})],[2.85,BPp({a:1}),'snap'],[3.0,BPp({fhx:70,fhy:-120})],[4.4,BPp({exp:1})],[5.9,BPp({exp:2,droop:.6})],[B(5),BPp({exp:2,droop:.6})],[MK[0],BPp({exp:2,droop:.8})],[B(6),BPp({exp:0,droop:0})],[WAVES[0]-.3,BPp({exp:0,fhx:80,fhy:-90})],[WAVES[0],BPp({exp:1,fhx:60,fhy:-40}),'snap'],[LOCK,BPp({exp:2,droop:.8})],
 [B(7),BPp({exp:0,droop:0})],[STAMP,BPp({exp:1,hop:.5,fhx:60,fhy:-140}),'snap'],[STAMP+.4,BPp({exp:0,blush:1,fhx:60,fhy:-140})],[B(8),BPp({exp:2,droop:.5})],[SNAPS[0],BPp({exp:2,droop:.8,dir:-1,walk:1}),'snap'],[SNAPS[0]+1.4,BPp({a:0,x:-120,dir:-1,walk:1})],
 [CLIMAX+.3,BPp({a:0,x:120})],[CLIMAX+.8,BPp({a:1,x:220,exp:0,hop:.4,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1010,dir:-1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,a:1},o);
const KO=[[0,OPp({a:0,x:1250})],[4.25,OPp({a:0,x:1250})],[4.45,OPp({a:1}),'snap'],[4.6,OPp({fhx:170,fhy:-200,exp:0,lean:.12}),'snap'],[5.4,OPp({exp:1})],[MK[1],OPp({exp:2,sweat:1})],[B(6),OPp({exp:0})],[WAVES[1]-.3,OPp({fhx:170,fhy:-100,lean:.15})],[WAVES[1],OPp({fhx:120,fhy:-60,exp:1,lean:.15}),'snap'],[LOCK,OPp({exp:2,sweat:1})],[B(7)-.2,OPp({a:0})],
 [B(8)-.1,OPp({a:1,exp:2})],[SNAPS[1],OPp({exp:2,dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,OPp({a:0,x:1400,dir:1,walk:1})],[CLIMAX+.3,OPp({a:0,x:1250})],[CLIMAX+.8,OPp({a:1,x:1250,exp:0,fhx:170,fhy:-220})],[27.5,OPp({a:1,x:1250,exp:0,fhx:170,fhy:-220})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
const EP={name:'井底之蛙',en:'FROG IN A WELL',epn:'第六期',acc:FG,grad:['#f4ffe8','#8cff6a','#6ee8ff'],glowC:'rgba(140,255,110,.85)',kwCol:'rgba(190,255,170,.92)',kw:'坐井观天 · 听不进去 · 专注 · 眼界窄',slamCol:STONE,
  words:['自大','固执','狭隘','守旧'],
  cams:[[0,609,728,1.9],[2.3,630,700,1.5],[2.67,700,600,1.0],[5.33,700,600,1.03],[7.4,690,590,1.1],[DROP,700,610,1.0],[B(5),700,600,1.04],[B(6),700,610,1.02],[LOCK,690,600,1.08],[B(7),700,640,1.06],[STAMP,700,610,1.04],[B(8),700,610,1.02],[SLAM,700,630,1.04],[B(9),660,720,1.12],[CLIMAX-.5,650,760,1.24],[CLIMAX,820,540,.95],[B(11),820,560,1.0]],
  sky:[[0,['#040a06','#0a160e','#14261a']],[DROP,['#061a10','#145a34','#80f0a0']],[B(5),['#06140c','#1a3a28','#5aa080']],[B(6),['#100808','#30141a','#803040']],[B(7),['#0a1408','#2a5a20','#c0f080']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#06121a','#1a5a6a','#a0f0ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['只信',0],['自己',1]]],[[['自己看到的',0]],[['就是',0],['全世界',1]]],[[['别人说',0]],[['外面',0],['很大',1]]],[[['TA说',0]],[['不可能',1]]],[[['人称',0]],[['井底之蛙',1]]],
   [[['井口那片天',0]],[['就是',0],['全世界',1]]],[[['自己的经验',0]],[['就是',0],['真理',1]]],
   [[['别人的建议',0]],[['一句',0],['不听',1]]],[[['新的东西',0]],[['一概',0],['不信',1]]],
   [[['好的一面',0]],[['心无',0],['旁骛',1]]],[[['一口井',0]],[['也能',0],['挖到底',1]]],
   [[['坏的一面',0]],[['眼界',0],['太窄',1]]],[[['世界在变',0]],[['TA还',0],['在井里',1]]],
   [[['越活',0]],[['天越',0],['小',1]]],[[['想看更大的天',0]],[['就得',0],['跳出去',1]]]],
  tags:[['01','坐井观天',FG],['02','听不进去',RED],['03','专注',GOLD],['04','眼界窄','#a0a8b8']],
  cl:['跳出井口','天地宽'],endCap:[[['别让一口井',0]],[['框住',0],['你的天',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const fo=kfO(KF,T),bo=kfO(KB,T),oo=kfO(KO,T);
  // sky rim glow (what the frog sees)
  const rimA=(t>=2.67&&t<SLAM?1:0)*endF;let rimF=.3;[3.3,6.6,...MK].forEach(k=>{if(t>=k)rimF=Math.max(rimF,1-seg(t,k,k+.6)*.7);});
  if(rimA>0){glow(circ((WL1+WR0)/2,WTP,(WR0-WL1)/2,26,60),1,ICE,2.4,rimA*rimF,16,false);}
  well(endF,seg(t,.1,1.2),b3*seg(t,STAMP,STAMP+.3));
  const BG=bunny(bo.x,WTP,1.3,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:WTP-160,fh:[bo.x,WTP-90]},OXG=ox(oo.x,WTP,1.15,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:WTP-275,fh:[oo.x,WTP-140]};
  // spring in 03
  if(b3>0){let h=0;JABS.forEach(k=>{if(t>=k)h=Math.max(h,120*(1-seg(t,k+.2,k+.6)));});if(t>=STAMP)h=lerp(0,560,eBack(seg(t,STAMP,STAMP+.4)));spring(t,0,h,b3*endF);}
  // thrown objects in 02
  if(b2>0){const a=b2*endF;const objs=[[WAVES[0]-.3,BG,'新方法'],[WAVES[1]-.3,OXG,'世界地图']];objs.forEach(([k,G,txt],i)=>{if(!G||t<k||t>B(7))return;const p=seg(t,k,k+.3);const kick=seg(t,k+.3+.0,k+.8);const sx=G.fh[0],sy=G.fh[1];let x=lerp(sx,FX0+(i?60:-60),eIn(p)),y=lerp(sy,GY-220,eIn(p));x+=kick*(i?500:-500);y-=kick*300-kick*kick*600;wordBox(x,y,txt,a*(1-seg(t,k+.9,k+1.1)),.8,i?OC:BUN,kick*4*(i?1:-1));});}
  const fprog=t<2.67?seg(t,.5,2.4):1;const FGo=frog(fo.x,GY+fo.oy,1.5,1,fo,endF,fprog);FOC=[FGo.hx,FGo.hy];
  // lid
  if(t>=SLAM-.3){let y=lerp(WTP-700,WTP,eIn(seg(t,SLAM-.3,SLAM))),a=endF,rot=0;if(t>=CLIMAX-.05){const dt=t-CLIMAX+.05;y-=dt*1500;rot=dt*3;a*=1-seg(dt,0,.4);if(dt<.06)shards(t,CLIMAX-.05,640,WTP-20,1,77,STONE,26,1200);}lid(640,y,a,rot);}
  // ---- intro ----
  if(t<DROP){bubble(FGo.hx+40,FGo.hy-150,'我最有见识~',win(t,1.6,2.6,.1,.2),1,FG,-1);
    bubble(BG.hx+60,BG.hy-110,'外面世界很大哦！',win(t,2.9,3.35,.06,.08),eBack(seg(t,2.9,3.05)),BUN,-1);
    bubble(FGo.hx+30,FGo.hy-160,'天就井口这么大！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),FG,-1);
    bubble(OXG.hx-40,OXG.hy-150,'大海可宽了！',win(t,4.45,5.0,.06,.1),eBack(seg(t,4.45,4.6)),OC,1);
    bubble(FGo.hx+30,FGo.hy-160,'海？不存在的！',win(t,4.7,5.9,.06,.15),eBack(seg(t,4.7,4.85)),FG,-1);
    bubble(FGo.hx+30,FGo.hy-160,'我说了算！',win(t,6.5,7.05,.06,.1),eBack(seg(t,6.5,6.65)),FG,-1);
    proverb(t,'坐井观天',FX0-142,WTP-280,3,FG,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(FGo.hx+30,FGo.hy-160,['天就这么大！','我最懂！','听我的准没错！'][i],a,eBack(seg(t,k,k+.2)),FG,-1);});
    if(t>=B(5)-.2&&t<MK[0])bubble(BG.hx+60,BG.hy-110,'你上来看看嘛',a,eBack(seg(t,B(5)-.2,B(5))),BUN,-1);}
  if(b2>0){const a=b2*endF;WAVES.forEach((k,i)=>{const e=i?LOCK:WAVES[1];if(t>=k+.25&&t<e)bubble(FGo.hx+30,FGo.hy-160,['没用！','不看！'][i],a,eBack(seg(t,k+.25,k+.45)),FG,-1);});
    if(t>=LOCK)bubble(FGo.hx+30,FGo.hy-160,'我不听我不听！',a,eBack(seg(t,LOCK,LOCK+.2)),RED,-1);
    bigText(t,LOCK,B(7),FX0+130,WTP-320,'听不进，也看不见',RED,60);}
  if(b3>0){const a=b3*endF;if(t<STAMP&&t>=JABS[0])bubble(FGo.hx-60,FGo.hy-150,'挖！再深一点！',a,eBack(seg(t,JABS[0],JABS[0]+.2)),GOLD,1);
    if(t>=STAMP)bubble(BG.hx+60,BG.hy-110,'挖出泉水了！',a,eBack(seg(t,STAMP,STAMP+.2)),BUN,-1);
    bigText(t,STAMP,B(8),FX0+130,WTP-320,'一口井，也能挖到最深',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['固执','落伍','自以为是'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(FX0+(i-1)*250,WTP-170-(i%2)*70,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(FGo.hx+30,FGo.hy-160,'你们不懂！',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),FG,-1);
    bigText(t,SLAM,SLAM+1.8,FX0+130,WTP-320,'井口一盖，天就黑了','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(FGo.hx+40,FGo.hy-150,'外面…真的很大吗',a*seg(t,B(9)+.9,B(9)+1.2),1,FG,-1);
    if(t>=CLIMAX-.6)bubble(FGo.hx+40,FGo.hy-150,'我要跳出去看看！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+60,BG.hy-110,'欢迎出来！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(OXG.hx-40,OXG.hy-150,'天很大吧！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
