// ===== 人间动物志 · 替罪羊 =====
const WOOL='#ece6ff',HRN2='#ffcf8a',PC='#9aa2b8',LAV='#b8a8ff';
const SX=540;
function woolP(cx,cy,rx,ry,n){const pts=[];for(let i=0;i<=140;i++){const an=-Math.PI/2+i/140*TAU;const k=1+.08*Math.abs(Math.sin(an*n/2));pts.push([cx+Math.cos(an)*rx*k,cy+Math.sin(an)*ry*k]);}return pts;}
// sheep: feet at (x,y), facing dir. o:{exp 0 happy 1 worried 2 sad 3 firm 4 shock, sq, lean, arms, walk, hg horn glow}
function sheep(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,sq:1,lean:0,fhx:52,fhy:-120,bhx:-52,bhy:-120,walk:0,hg:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const ph=o.walk*Math.sin(t0g*12);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0c0a14';ctx.beginPath();ctx.ellipse(0,-124,60,68,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(12,-222,34,42,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(8,-262,32,18,0,0,TAU);ctx.fill();ctx.restore();
  const hc=mixc(HRN2,GOLD,o.hg);
  const P=[['leg',[[-20+ph*14,0],[-18,-64]]],['leg2',[[20-ph*14,0],[18,-64]]],['body',woolP(0,-124,56,64,14)],['head',circ(12,-222,32,40,40)],['tuft',woolP(8,-262,30,16,8)],
    ['horn',spiral(-22,-236,24,1.25,-1,30,-Math.PI*.2)],['horn2',spiral(46,-236,24,1.25,1,30,Math.PI*1.2)],['ear',circ(-26,-206,13,6,16)],['ear2',circ(50,-206,13,6,16)]];
  const N=P.length+4;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm.startsWith('horn')?hc:WOOL,w,a,14,prog<1);});
  if(o.hg>.05){dot(-22,-236,10,GOLD,a*o.hg*.8);dot(46,-236,10,GOLD,a*o.hg*.8);}
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp,C=WOOL;
    glow([[-24,-4],[-10,-4]],1,C,w,fa,6,false);glow([[14,-4],[28,-4]],1,C,w,fa,6,false);
    if(e==0){glow(Q([-4,-226],[2,-234],[8,-226],6),1,C,w,fa,6,false);glow(Q([20,-226],[26,-234],[32,-226],6),1,C,w,fa,6,false);glow(Q([6,-196],[14,-188],[22,-196],6),1,C,w,fa,6,false);}
    else if(e==1){glow([[-6,-238],[8,-242]],1,C,w,fa,6,false);glow([[20,-242],[34,-238]],1,C,w,fa,6,false);dot(2,-226,4.5,'#fff',fa);dot(26,-226,4.5,'#fff',fa);glow(cat(Q([4,-192],[9,-197],[14,-192],4),Q([14,-192],[19,-187],[24,-192],4)),1,C,w,fa,6,false);}
    else if(e==2){glow([[-6,-236],[8,-240]],1,C,w,fa,6,false);glow([[20,-240],[34,-236]],1,C,w,fa,6,false);glow(Q([-4,-226],[2,-222],[8,-226],4),1,C,w,fa,6,false);glow(Q([20,-226],[26,-222],[32,-226],4),1,C,w,fa,6,false);glow(Q([6,-188],[14,-196],[22,-188],6),1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(0,-218+tp*36,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow([[-8,-244],[8,-236]],1,C,w,fa,6,false);glow([[36,-244],[20,-236]],1,C,w,fa,6,false);dot(2,-226,5,'#fff',fa);dot(26,-226,5,'#fff',fa);glow([[6,-192],[22,-192]],1,C,w,fa,6,false);}
    else{glow(circ(2,-228,6,6,12),1,C,w,fa,6,false);glow(circ(26,-228,6,6,12),1,C,w,fa,6,false);glow(circ(14,-192,5,7,12),1,C,w,fa,6,false);}
    ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(-12,-206,6,0,TAU);ctx.arc(40,-206,6,0,TAU);ctx.fill();ctx.restore();
    arm([36,-162],[o.fhx,o.fhy],110,C,w,fa,-1);arm([-36,-162],[o.bhx,o.bhy],110,C,w,fa,1);dot(o.fhx,o.fhy,9,C,fa);dot(o.bhx,o.bhy,9,C,fa);}
  ctx.restore();return{hx:x+dir*s*12,hy:y+s*o.sq*-222,top:y+s*o.sq*-276};}
// black pot (wok upside-down), rim at (x,y)
function pot(x,y,sc,a,rot,txt){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);const d=[];for(let i=0;i<=30;i++){const an=Math.PI+i/30*Math.PI;d.push([Math.cos(an)*62,Math.sin(an)*40]);}d.push([-62,0]);
  ctx.globalAlpha=a*.96;ctx.fillStyle='#0a0a10';trace(d);ctx.fill();ctx.restore();
  ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);glow(d,1,PC,3,a,12,false);glow([[-74,0],[74,0]],1,PC,3.4,a,10,false);glow([[0,-40],[0,-50]],1,PC,3,a,6,false);glow([[62,-8],[96,-22]],1,PC,4,a,8,false);
  if(txt){ctx.globalAlpha=a;ctx.font='800 '+(txt.length>1?22:28)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=LAV;ctx.shadowBlur=10;ctx.fillText(txt,0,-11);}ctx.restore();}
const SPp=o=>Object.assign({x:SX,exp:0,sq:1,lean:0,fhx:52,fhy:-120,bhx:-52,bhy:-120,walk:0,hg:0},o);
const UP={fhx:40,fhy:-290,bhx:-20,bhy:-290};
const KS=[[0,SPp({})],[2.67,SPp({})],[3.3,SPp({exp:4,sq:1.05,fhx:30,fhy:-170,bhx:-30,bhy:-170}),'snap'],[4.4,SPp({exp:4,fhx:30,fhy:-160,bhx:-30,bhy:-160})],[4.7,SPp({exp:1,fhx:70,fhy:-150,bhx:40,bhy:-150}),'snap'],[5.8,SPp({exp:1})],[5.95,SPp({exp:2,sq:.82}),'snap'],[6.3,SPp({exp:2,sq:.95})],[7.4,SPp({exp:1})],
 [DROP,SPp({exp:1,sq:1.05,fhx:60,fhy:-200,bhx:-60,bhy:-200}),'snap'],[DROP+.8,SPp({exp:1})]];
MK.forEach(k=>KS.push([k,SPp({exp:2,sq:.86}),'snap'],[k+.35,SPp({exp:1,sq:.97})]));
KS.push([B(6),SPp({exp:1})]);WAVES.forEach(k=>KS.push([k,SPp({exp:1,sq:.88,fhx:70,fhy:-160}),'snap'],[k+.4,SPp({exp:1})]));
KS.push([LOCK,SPp({exp:2,sq:.84}),'snap'],[LOCK+.6,SPp({exp:2,sq:.88})],[B(7),SPp({exp:3,...UP})]);
JABS.forEach(k=>KS.push([k,SPp({exp:3,sq:.9,...UP}),'snap'],[k+.35,SPp({exp:3,...UP})]));
KS.push([STAMP,SPp({exp:0,sq:1.08,...UP,hg:1}),'snap'],[STAMP+.6,SPp({exp:0,...UP,hg:.6})],[B(8),SPp({exp:1})]);
SNAPS.forEach(k=>KS.push([k,SPp({exp:2,sq:.86}),'snap'],[k+.35,SPp({exp:2,sq:.9})]));
KS.push([SLAM-.2,SPp({exp:4})],[SLAM,SPp({exp:4,sq:.6}),'snap'],[SLAM+.5,SPp({exp:2,sq:.55})],[B(9),SPp({exp:2,sq:.55})],[CLIMAX-.6,SPp({exp:2,sq:.6})],[CLIMAX-.15,SPp({exp:3,sq:.7})],
 [CLIMAX,SPp({exp:3,sq:1.12,fhx:90,fhy:-260,bhx:-90,bhy:-260,hg:1}),'snap'],[CLIMAX+.6,SPp({exp:0,hg:1})],[B(11),SPp({exp:0,hg:1})],[27.5,SPp({exp:0,hg:1})]);
KS.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:200,dir:1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const PT={fhx:180,fhy:-170};
const KT=[[0,TPp({a:0,x:60})],[2.67,TPp({a:1})],[2.8,TPp({evil:1,mouth:1,fhx:90,fhy:-230,bhx:-90,bhy:-230}),'snap'],[3.3,TPp({evil:1,...PT,lean:.1}),'snap'],[4.2,TPp({evil:1,...PT})],[5.0,TPp({evil:0})],[MK[0],TPp({...PT,lean:.1}),'snap'],[MK[0]+.5,TPp({})],[WAVES[0],TPp({...PT,mouth:1}),'snap'],[LOCK,TPp({mouth:0})],[B(7)-.2,TPp({a:0})],
 [B(8)-.1,TPp({a:1})],[SNAPS[0],TPp({...PT,evil:1,lean:.1}),'snap'],[SLAM,TPp({evil:1})],[SLAM+.4,TPp({evil:1,dir:-1,walk:1})],[SLAM+1.6,TPp({dir:-1,walk:1,x:-150,a:0})],[CLIMAX+.3,TPp({a:0,x:60})],[CLIMAX+.8,TPp({a:1,crack:0,lean:.2,fhx:20,fhy:-150})],[27.5,TPp({a:1,lean:.2,fhx:20,fhy:-150})]];
KT.sort((a,b)=>a[0]-b[0]);
const OPp=o=>Object.assign({x:1000,dir:-1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,a:1},o);
const PO={fhx:200,fhy:-180};
const KO=[[0,OPp({a:0,x:1150})],[4.2,OPp({a:0,x:1150})],[4.45,OPp({a:1})],[4.6,OPp({...PO,exp:2,lean:.1}),'snap'],[5.4,OPp({exp:2})],[MK[1],OPp({...PO,exp:2}),'snap'],[MK[1]+.5,OPp({})],[WAVES[1],OPp({...PO}),'snap'],[LOCK,OPp({})],[B(7)-.2,OPp({a:0})],
 [B(8)-.1,OPp({a:1})],[SNAPS[1],OPp({...PO,exp:2,lean:.1}),'snap'],[SLAM,OPp({exp:2})],[SLAM+.4,OPp({dir:1,walk:1})],[SLAM+1.6,OPp({dir:1,walk:1,x:1350,a:0})],[CLIMAX+.3,OPp({a:0,x:1150})],[CLIMAX+.8,OPp({a:1,exp:1,sweat:1,lean:.15})],[27.5,OPp({a:1,exp:1,sweat:1,lean:.15})]];
KO.sort((a,b)=>a[0]-b[0]);
const POTT=[5.95,...MK,...WAVES,...JABS,...SNAPS];
const POTL=['锅','迟到','报错','超支','漏单','延期','丢件','差评','亏损','甩锅'];
const PILE=[[-215,0,.3],[-135,-4,-.2],[150,0,.25],[235,0,-.3],[-175,-40,.5],[195,-40,-.4],[-70,-150,.35],[75,-150,-.3],[0,-238,.05],[-120,-80,.7]];
const EP={name:'替罪羊',en:'SCAPEGOAT',epn:'第五期',acc:LAV,grad:['#ffffff','#c8b8ff','#ffd27a'],glowC:'rgba(180,160,255,.9)',kwCol:'rgba(210,200,255,.92)',kw:'背锅 · 不敢拒绝 · 有担当 · 被欺负',slamCol:PC,
  words:['背锅侠','受气包','老好人','不敢说'],
  cams:[[0,523,612,1.9],[2.3,540,620,1.5],[2.67,620,620,1.0],[5.33,620,600,1.05],[7.4,600,580,1.12],[DROP,640,610,1.0],[B(5),620,600,1.04],[B(6),620,610,1.02],[LOCK,600,600,1.08],[B(7),620,600,1.02],[STAMP,620,590,1.06],[B(8),640,610,1.02],[SLAM,620,630,1.04],[B(9),600,700,1.1],[CLIMAX-.5,590,740,1.22],[CLIMAX,640,560,.95],[B(11),640,580,1.0]],
  sky:[[0,['#06040c','#100c1a','#1c1828']],[DROP,['#0c0820','#3a2a70','#b0a0ff']],[B(5),['#0a0816','#24204a','#7a70b0']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0c0a18','#3a2e6a','#d0c0ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['总在',0],['背锅',1]]],[[['别人闯了祸',0]],[['锅却',0],['甩给TA',1]]],[[['明明不是TA',0]],[['TA却',0],['不敢说',1]]],[[['一次又一次',0]],[['默默',0],['认下',1]]],[[['人称',0]],[['替罪羊',1]]],
   [[['谁出了错',0]],[['都往TA',0],['身上推',1]]],[[['一口接一口',0]],[['黑锅',0],['越叠越高',1]]],
   [[['心里委屈',0]],[['嘴上',0],['说没事',1]]],[[['一句不是我',0]],[['都',0],['说不出口',1]]],
   [[['好的一面',0]],[['肯',0],['扛事',1]]],[[['关键时刻',0]],[['TA从不',0],['甩锅',1]]],
   [[['坏的一面',0]],[['越忍',0],['越被欺负',1]]],[[['背得越多',0]],[['越',0],['没人在乎',1]]],
   [[['背不动了',0]],[['也没人',0],['心疼',1]]],[[['不是你的错',0]],[['就别',0],['认',1]]]],
  tags:[['01','背锅',LAV],['02','不敢拒绝',RED],['03','有担当',GOLD],['04','被欺负','#a0a8b8']],
  cl:['善良','要有锋芒'],endCap:[[['可以担当',0]],[['但不',0],['替人受过',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const so=kfO(KS,T),to=kfO(KT,T),oo=kfO(KO,T);
  const TG=to.a>.01?tiger(to.x,GY,1.25,to.dir,to,to.a*endF,1):null;
  const OXG=oo.a>.01?ox(oo.x,GY,1.25,oo.dir,oo,oo.a*endF,1):null;
  // bunny in 03
  const bo={exp:t<STAMP?2:0,hop:t>=STAMP?Math.max(0,Math.sin((t-STAMP)*9))*.5*(1-seg(t,STAMP+1,STAMP+1.4)):0,blush:t>=STAMP?1:0,fhx:t>=STAMP?60:30,fhy:t>=STAMP?-140:-70};
  const ba=b3*endF;const BG=ba>.01?bunny(330,GY,1.3,1,bo,ba,1):null;
  const sprog=t<2.67?seg(t,.5,2.4):1;const SG=sheep(so.x,GY,1.5,1,so,endF,sprog);FOC=[SG.hx,SG.hy];
  // pots
  POTT.forEach((lt,i)=>{if(t<lt-.4)return;let x,y,rot=0,a=endF;const sx=SG.hx-6;
    const stackY=SG.top-i*30+4,stackX=sx+Math.sin(t*2.6+i)*i*1.6;
    if(t<SLAM){const p=seg(t,lt-.4,lt);x=stackX+(1-p)*(i%2?120:-120);y=lerp(stackY-800,stackY,eIn(p));rot=(1-p)*(i%2?.6:-.6)+Math.sin(t*2.6+i)*.02*i;if(t>=lt&&t<lt+.3)sparks(t,lt,x,y,10,i+60,400,.3,PC);}
    else{const p=eOut(seg(t,SLAM,SLAM+.45));const pl=PILE[i];x=lerp(stackX,SX+pl[0],p);y=lerp(stackY,GY+pl[1],p);rot=lerp(0,pl[2],p);
      if(t>=CLIMAX){const dt=t-CLIMAX,an=Math.atan2(pl[1]-120,pl[0]);x+=Math.cos(an)*dt*1800;y+=Math.sin(an)*dt*1800;rot+=dt*8;a*=1-seg(dt,0,.35);if(dt<.05)shards(t,CLIMAX,x,y,1,i+300,PC,14,900);}}
    pot(x,y,.9,a,rot,POTL[i]);});
  // ---- intro ----
  if(t<DROP){bubble(SG.hx+30,SG.hy-150,'大家好~',win(t,1.6,2.6,.1,.2),1,LAV,-1);
    if(TG)bubble(TG.hx+20,TG.hy-150,'项目搞砸了！',win(t,2.8,3.3,.06,.08),eBack(seg(t,2.8,2.95)),TC,-1);
    if(TG)bubble(TG.hx+40,TG.hy-150,'是TA的错！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),RED,-1);
    if(OXG)bubble(OXG.hx-10,OXG.hy-160,'对！就是TA！',win(t,4.45,5.4,.06,.15),eBack(seg(t,4.45,4.6)),OC,1);
    bubble(SG.hx+30,SG.hy-150,'我…我没有…',win(t,4.7,5.85,.06,.1),eBack(seg(t,4.7,4.85)),LAV,-1);
    bubble(SG.hx+30,SG.hy-210,'好吧…是我',win(t,6.25,7.0,.06,.12),eBack(seg(t,6.25,6.4)),LAV,-1);
    proverb(t,'背黑锅',SX+240,GY-560,1,LAV);}
  // 01
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(SG.hx+60,SG.top-i*30-200,['是…是我','也是我…','我认…'][i],a,eBack(seg(t,k,k+.2)),LAV,-1);});
    if(t>=B(5)-.2&&t<MK[0])bubble(TG?TG.hx+30:200,(TG?TG.hy:600)-150,'这锅你背！',a,eBack(seg(t,B(5)-.2,B(5))),TC,-1);}
  // 02
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(SG.hx+70,SG.top-5*30-200,'没…没事',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),LAV,-1);
    if(t>=B(6)&&t<WAVES[0]&&OXG)bubble(OXG.hx-10,OXG.hy-160,'你帮我扛一下',a,eBack(seg(t,B(6),B(6)+.2)),OC,1);
    bigText(t,LOCK,B(7),SX+420,GY-640,'委屈全往肚里咽',RED,60);}
  // 03
  if(b3>0){const a=b3*endF;if(BG&&t<JABS[0])bubble(BG.hx-10,BG.hy-110,'我闯祸了…',a,eBack(seg(t,B(7),B(7)+.2)),BUN,1);
    if(t>=JABS[0]&&t<STAMP)bubble(SG.hx+80,SG.top-8*30-170,'我来扛！',a,eBack(seg(t,JABS[0],JABS[0]+.2)),GOLD,-1);
    if(BG&&t>=STAMP)bubble(BG.hx-10,BG.hy-110,'谢谢你！',a,eBack(seg(t,STAMP,STAMP+.2)),BUN,1);
    bigText(t,STAMP,B(8),SX+420,GY-640,'肯扛事，是种担当',GOLD,58);}
  // 04
  if(b4>0){const a=b4*endF;const lab=['好欺负','软柿子','替罪羊'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(SX+330+i*20,GY-520+i*95,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i%2?1:-1)*.06);});
    if(TG&&t>=SNAPS[0]&&t<SLAM)bubble(TG.hx+30,TG.hy-150,'这锅也归你！',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),RED,-1);
    if(OXG&&t>=SNAPS[1]&&t<SLAM)bubble(OXG.hx-10,OXG.hy-160,'反正你不会拒绝',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    bigText(t,SLAM,SLAM+1.8,SX+420,GY-640,'锅越背越多，没人心疼','#fff',58);}
  // storm
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(SG.hx+40,SG.hy-130,'为什么…总是我',a*seg(t,B(9)+.9,B(9)+1.2),1,LAV,-1);
    if(t>=CLIMAX-.6)bubble(SG.hx+40,SG.hy-130,'不是我的锅，我不背！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){if(TG)bubble(TG.hx+30,TG.hy-150,'对不起…',a*(1-seg(dt,2.0,2.2)),1,TC,-1);if(OXG)bubble(OXG.hx-10,OXG.hy-160,'是我们的锅',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
