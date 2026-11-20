// ===== 人间动物志 · 铁公鸡 =====
const IRON='#b8cce8',COMB='#ff4a5a',BEAK='#ffc060',STEEL='#9ad0ff',COIN='#ffd24a';
const RX=560,PILEX=780;
// rooster: feet at (x,y) facing dir. o:{exp 0 smug 1 nervous 2 sad 3 happy 4 shock, gold, sq, lean, hands}
function rooster(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,gold:0,sq:1,lean:0,fhx:64,fhy:-110,bhx:-40,bhy:-110,sweat:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const C=mixc(IRON,GOLD,o.gold);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#080a10';ctx.beginPath();ctx.ellipse(0,-122,60,64,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(32,-206,36,36,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-14,0],[-12,-62]]],['leg2',[[14,0],[12,-62]]],['toe',[[-30,0],[0,0]]],['toe2',[[0,0],[30,0]]],['body',circ(0,-122,58,62,44)],['neck',Q([20,-176],[24,-186],[18,-196],4)],['head',circ(32,-206,34,34,36)],
    ['tail',Q([-52,-140],[-120,-180],[-100,-260],12)],['tail2',Q([-56,-122],[-140,-150],[-136,-220],12)],['tail3',Q([-56,-106],[-130,-110],[-142,-170],12)],
    ['comb',cat(Q([10,-236],[8,-262],[22,-252],5),Q([22,-252],[28,-276],[38,-250],5),Q([38,-250],[52,-266],[54,-236],5))],['beak',[[62,-214],[94,-204],[62,-194]]],['wattle',circ(58,-180,8,12,12)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.8,i/N*.8+.25);if(p>0)glow(pts,p,nm=='comb'||nm=='wattle'?COMB:nm=='beak'?BEAK:(nm.startsWith('tail')&&o.gold>.3?GOLD:C),w,a,14,prog<1);});
  const fp=seg(prog,.6,.85);if(fp>0){const fa=a*fp,e=o.exp;
    // rivets (iron)
    [[-30,-150],[0,-166],[30,-150],[-36,-100],[36,-100],[0,-80]].forEach(([rx,ry])=>{glow(circ(rx,ry,4,4,10),1,C,w*.7,fa*(1-o.gold),4,false);});
    glow(Q([-20,-130],[10,-104],[44,-126],8),1,C,w*.8,fa*.7,6,false);
    const ex=40,ey=-212;
    if(e==0){dot(ex,ey,4.5,'#fff',fa);glow([[ex-12,ey-10],[ex+10,ey-6]],1,C,w,fa,6,false);}
    else if(e==1){dot(ex,ey,5,'#fff',fa);glow([[ex-10,ey-14],[ex+10,ey-18]],1,C,w,fa,6,false);}
    else if(e==2){dot(ex,ey,4.5,'#fff',fa);glow([[ex-10,ey-16],[ex+10,ey-12]],1,C,w,fa,6,false);const tp=(t0g*1.4)%1;dot(ex-2,ey+8+tp*34,4,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow(Q([ex-8,ey+2],[ex,ey-8],[ex+8,ey+2],6),1,C,w,fa,6,false);ctx.save();ctx.globalAlpha=fa*.6;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(34,-192,7,0,TAU);ctx.fill();ctx.restore();}
    else{glow(circ(ex,ey,7,7,12),1,C,w,fa,6,false);}
    if(o.sweat>0||e==1){const sp=(t0g*1.2)%1;ctx.save();ctx.globalAlpha=fa*(1-sp);ctx.fillStyle='#8ad8ff';ctx.beginPath();ctx.ellipse(6,-236+sp*36,5,8,0,0,TAU);ctx.fill();ctx.restore();}
    arm([30,-140],[o.fhx,o.fhy],90,C,w,fa,-1);arm([-26,-140],[o.bhx,o.bhy],90,C,w,fa,1);dot(o.fhx,o.fhy,9,C,fa);dot(o.bhx,o.bhy,9,C,fa);}
  ctx.restore();return{hx:x+dir*s*32,hy:y+s*o.sq*-206,fh:[x+dir*s*o.fhx,y+s*o.sq*o.fhy],cx:x,cy:y+s*o.sq*-150};}
function coin(x,y,r,a,rot=0){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.scale(Math.cos(rot),1);ctx.globalAlpha=a*.95;ctx.fillStyle='#1a1204';ctx.beginPath();ctx.arc(0,0,r,0,TAU);ctx.fill();ctx.restore();
  glow(circ(x,y,r*Math.abs(Math.cos(rot))+.5,r,24),1,COIN,2.4,a,10,false);if(Math.abs(Math.cos(rot))>.4){ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(r*1.2)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#ffe490';ctx.fillText('¥',x,y+r*.42);ctx.restore();}}
function calc(x,y,a){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0c1018';ctx.fillRect(x-30,y-46,60,84);ctx.restore();glow(rectP(x-30,y-46,x+30,y+38),1,STEEL,2.4,a,10,false);glow(rectP(x-22,y-38,x+22,y-18),1,'#7dff9a',1.6,a,8,false);for(let i=0;i<3;i++)for(let j=0;j<3;j++)dot(x-16+i*16,y-4+j*14,2.6,STEEL,a);}
function pileH(t){let n=0;[...JABS].forEach(k=>{if(t>=k)n+=5;});if(t>=B(7))n+=4;if(t>=STAMP)n+=11;return n;}
function coinPile(t,n,a){const r=rng(9);for(let i=0;i<n;i++){const R=[6,5,5,4,3,2,1];let row=0,j=i;while(row<R.length-1&&j>=R[row]){j-=R[row];row++;}const x=PILEX-(R[row]-1)*21+j*42+(r()-.5)*6,y=GY-20-row*30;coin(x,y,20,a,0);}}
const RPp=o=>Object.assign({x:RX,exp:0,gold:0,sq:1,lean:0,fhx:64,fhy:-110,bhx:-40,bhy:-110,sweat:0},o);
const HIDE={bhx:-90,bhy:-90,fhx:70,fhy:-120};
const KR=[[0,RPp({})],[2.67,RPp({})],[3.3,RPp({exp:1,...HIDE,lean:-.06,sq:1.04}),'snap'],[4.4,RPp({exp:1,...HIDE})],[4.66,RPp({exp:0,fhx:110,fhy:-150,bhx:-90,bhy:-90,sq:1.05}),'snap'],[5.9,RPp({exp:0})],[5.95,RPp({exp:4,sq:.9}),'snap'],[6.4,RPp({exp:0,sq:1.04,fhx:60,fhy:-170})],[7.4,RPp({exp:0})],
 [DROP,RPp({exp:0,sq:1.08,fhx:110,fhy:-200,bhx:-90,bhy:-200}),'snap'],[DROP+.8,RPp({exp:0})]];
MK.forEach((k,i)=>KR.push([k,RPp({exp:1,lean:i%2?.08:-.08,fhx:110,fhy:-110,sq:.94}),'snap'],[k+.4,RPp({exp:1,...HIDE})]));
KR.push([B(6),RPp({exp:0,fhx:80,fhy:-140})]);WAVES.forEach(k=>KR.push([k,RPp({exp:0,fhx:96,fhy:-170,sq:1.05}),'snap'],[k+.4,RPp({exp:0,fhx:80,fhy:-140})]));
KR.push([LOCK,RPp({exp:4,fhx:100,fhy:-190,sq:1.08}),'snap'],[LOCK+.6,RPp({exp:0,fhx:80,fhy:-150})],[B(7),RPp({exp:3})]);
JABS.forEach(k=>KR.push([k,RPp({exp:3,fhx:130,fhy:-90,sq:.95}),'snap'],[k+.35,RPp({exp:3,fhx:90,fhy:-130})]));
KR.push([STAMP,RPp({exp:3,sq:1.1,fhx:110,fhy:-210,bhx:-90,bhy:-210}),'snap'],[STAMP+.6,RPp({exp:3,fhx:90,fhy:-180,bhx:-80,bhy:-180})],[B(8),RPp({exp:0})]);
SNAPS.forEach(k=>KR.push([k,RPp({exp:2,sq:.92,fhx:90,fhy:-150}),'snap'],[k+.35,RPp({exp:2})]));
KR.push([SLAM-.2,RPp({exp:2})],[SLAM,RPp({exp:4,sq:.85}),'snap'],[SLAM+.5,RPp({exp:2,sq:.85,fhx:120,fhy:-70})],[B(9),RPp({exp:2,sq:.85,fhx:120,fhy:-70})],[CLIMAX-.6,RPp({exp:2,sq:.88,fhx:120,fhy:-70})],[CLIMAX-.15,RPp({exp:3,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12,fhx:110,fhy:-220,bhx:-90,bhy:-220}),'snap'],[CLIMAX+.6,RPp({exp:3,gold:1,fhx:100,fhy:-190,bhx:-90,bhy:-190})],[B(11),RPp({exp:3,gold:1,fhx:100,fhy:-190,bhx:-90,bhy:-190})],[27.5,RPp({exp:3,gold:1,fhx:100,fhy:-190,bhx:-90,bhy:-190})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:200,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0,x:160})],[4.1,BPp({a:0,x:160})],[4.4,BPp({a:1,fhx:70,fhy:-110})],[5.3,BPp({exp:1})],[5.6,BPp({x:400,fhx:100,fhy:-130,bhx:80,bhy:-120})],[5.95,BPp({x:400,exp:2,fhx:100,fhy:-150,bhx:80,bhy:-140,hop:.2}),'snap'],[6.6,BPp({x:200,exp:2,droop:.6})],[B(5),BPp({exp:2,droop:.4})],[MK[2],BPp({exp:2,droop:.8})],
 [B(6),BPp({exp:0})],[WAVES[1],BPp({exp:1})],[LOCK,BPp({exp:2,droop:.8})],[B(7)-.3,BPp({a:1,exp:2})],[B(7)-.1,BPp({a:0})],[B(8)-.4,BPp({a:0})],
 [B(8)-.1,BPp({a:1,exp:2,droop:.5})],[SNAPS[0],BPp({exp:2,droop:.8,dir:-1,walk:1}),'snap'],[SNAPS[0]+1.4,BPp({a:0,x:-60,dir:-1,walk:1})],
 [CLIMAX+.2,BPp({a:0,x:160})],[CLIMAX+.7,BPp({a:1,x:300,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:300,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:300,exp:0,blush:1,fhx:60,fhy:-140})]];
const TPp=o=>Object.assign({x:960,dir:-1,evil:0,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1,a:1},o);
const KT=[[0,TPp({a:0,x:1100})],[2.5,TPp({a:0,x:1100})],[2.75,TPp({a:1,mouth:1,fhx:120,fhy:-200})],[3.3,TPp({mouth:0})],[3.9,TPp({lean:-.1,fhx:20,fhy:-140})],[B(5),TPp({})],[MK[0]-.4,TPp({mouth:1,fhx:150,fhy:-150})],[MK[0],TPp({lean:-.12})],[MK[1]+.3,TPp({fhx:20,fhy:-140,lean:-.1})],
 [WAVES[0],TPp({mouth:1})],[LOCK,TPp({lean:-.2,fhx:80,fhy:-220,bhx:-80,bhy:-220}),'snap'],[LOCK+.5,TPp({})],[B(7)-.3,TPp({a:1})],[B(7)-.1,TPp({a:0})],[B(8)-.4,TPp({a:0})],
 [B(8)-.1,TPp({a:1})],[SNAPS[1],TPp({dir:1,walk:1}),'snap'],[SNAPS[1]+1.4,TPp({a:0,x:1250,dir:1,walk:1})],
 [CLIMAX+.2,TPp({a:0,x:1080})],[CLIMAX+.7,TPp({a:1,x:960,mouth:1,fhx:120,fhy:-210})],[27.5,TPp({a:1,x:960,mouth:1,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KT.sort((a,b)=>a[0]-b[0]);
const EP={name:'铁公鸡',en:'IRON ROOSTER',epn:'第八期',acc:STEEL,grad:['#ffffff','#b8d8ff','#ffd27a'],glowC:'rgba(150,200,255,.85)',kwCol:'rgba(200,225,255,.92)',kw:'一毛不拔 · 斤斤计较 · 会存钱 · 没朋友',slamCol:IRON,
  words:['抠门','小气','算计','孤单'],
  cams:[[0,560,640,1.9],[2.3,570,640,1.5],[2.67,640,620,1.0],[5.33,630,610,1.05],[7.4,610,600,1.12],[DROP,650,620,1.0],[B(5),640,610,1.04],[B(6),640,620,1.02],[LOCK,620,610,1.08],[B(7),660,620,1.04],[STAMP,660,610,1.06],[B(8),650,620,1.02],[SLAM,640,640,1.04],[B(9),620,720,1.12],[CLIMAX-.5,610,760,1.24],[CLIMAX,660,580,.95],[B(11),660,600,1.0]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#06102a','#1a3a70','#90c0ff']],[B(5),['#060a16','#18284a','#5a80b0']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['一毛',0],['不拔',1]]],[[['一到买单',0]],[['TA就',0],['消失',1]]],[[['AA算到',0]],[['小数点',1]]],[[['想拔TA一根毛',0]],[['比登天',0],['还难',1]]],[[['人称',0]],[['铁公鸡',1]]],
   [[['请客吃饭',0]],[['TA永远',0],['没带钱',1]]],[[['下次我请',0]],[['永远是',0],['下次',1]]],
   [[['一块钱',0]],[['也要',0],['算清',1]]],[[['别人帮TA',0]],[['TA全',0],['忘了',1]]],
   [[['好的一面',0]],[['勤俭',0],['持家',1]]],[[['钱都花在',0]],[['刀刃上',1]]],
   [[['坏的一面',0]],[['抠到',0],['没朋友',1]]],[[['省下了钱',0]],[['丢了',0],['人情',1]]],
   [[['守着一堆钱',0]],[['却没人',0],['陪',1]]],[[['钱能再赚',0]],[['朋友',0],['难找',1]]]],
  tags:[['01','一毛不拔',STEEL],['02','斤斤计较',RED],['03','会存钱',GOLD],['04','没朋友','#a0a8b8']],
  cl:['钱可以省','情别省'],endCap:[[['该省的省',0]],[['该花的',0],['要花',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),to=kfO(KT,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const TG=tiger(to.x,GY,1.25,to.dir,to,to.a*endF,1)||{hx:to.x,hy:GY-280};
  // coin pile 03 -> storm
  const pa=endF*(t>=B(7)-.1&&t<CLIMAX?1:0)*seg(t,B(7)-.1,B(7)+.2);if(pa>0)coinPile(t,pileH(t),pa);
  if(b3>0)JABS.forEach(k=>{for(let j=0;j<3;j++){const lt=k+j*.06;if(t<lt-.35||t>lt+.05)continue;const p=seg(t,lt-.35,lt);coin(PILEX-40+j*40,lerp(GY-700,GY-60,eIn(p)),18,b3*endF,p*9);}});
  if(t>=STAMP&&t<STAMP+.5)for(let j=0;j<10;j++){const p=seg(t,STAMP,STAMP+.4);const an=-Math.PI/2+(j-4.5)*.25;coin(PILEX+Math.cos(an)*300*p,GY-80+Math.sin(an)*300*p+400*p*p,16,endF*(1-p),p*12+j);}
  const rprog=t<2.67?seg(t,.5,2.4):1;const RG=rooster(ro.x,GY,1.5,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  if(b2>0)calc(RG.fh[0]+16,RG.fh[1]-20,b2*endF);
  // climax coin rain + iron shards
  if(t>=CLIMAX){const dt=t-CLIMAX;if(dt<.5)shards(t,CLIMAX,RG.cx,RG.cy,endF,201,IRON,24,900);const r=rng(333);for(let i=0;i<34;i++){const st=r()*1.4,x0=RG.cx+(r()-.5)*200,vx=(r()-.5)*900,vy=-700-r()*500;const p=dt-st*.3;if(p<0||p>2.6)continue;const y=GY-160+vy*p+520*p*p;if(y>GY-10)continue;coin(x0+vx*p,y,14,endF*(1-seg(p,2,2.6)),p*10+i);}}
  // ---- intro ----
  if(t<DROP){bubble(RG.hx+30,RG.hy-110,'今天也很省~',win(t,1.6,2.6,.1,.2),1,STEEL,-1);
    bubble(TG.hx-20,TG.hy-150,'今天谁请客？',win(t,2.8,3.3,.06,.06),eBack(seg(t,2.8,2.95)),TC,1);
    bubble(RG.hx+30,RG.hy-110,'我没带钱包！',win(t,3.3,4.4,.06,.15),eBack(seg(t,3.3,3.45)),STEEL,-1);
    bubble(BG.hx+10,BG.hy-110,'借我一块钱？',win(t,4.45,5.0,.06,.1),eBack(seg(t,4.45,4.6)),BUN,-1);
    bubble(RG.hx+30,RG.hy-110,'一毛都没有！',win(t,4.66,5.85,.06,.15),eBack(seg(t,4.66,4.8)),STEEL,-1);
    if(t>=5.95&&t<6.3)sparks(t,5.95,RG.cx-60,RG.cy-40,26,59,700,.35,'#fff');
    bubble(BG.hx+10,BG.hy-110,'拔不动！',win(t,6.0,6.95,.06,.12),eBack(seg(t,6.0,6.15)),BUN,-1);
    proverb(t,'一毛不拔',RX-60,GY-600,3,STEEL,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const k0=i?MK[i-1]+.15:B(5)-.1;if(t>=k0&&t<k+.5){const p=seg(t,k0,k);const back=seg(t,k,k+.4);const x=lerp(TG.hx-120,RG.hx+120,eOut(p))+back*300,y=GY-300-i*20;wordBox(x,y,'账单 ¥288',a*(1-back),.8,COIN,back*.5);}
      const e=i<2?MK[i+1]:B(6);if(t>=k&&t<e)bubble(RG.hx+30,RG.hy-110,['我去趟厕所！','下次我请！','手机没电了…'][i],a,eBack(seg(t,k,k+.2)),STEEL,-1);});}
  if(b2>0){const a=b2*endF;WAVES.forEach((k,i)=>{const e=i?LOCK:WAVES[1];if(t>=k&&t<e)bubble(RG.hx+30,RG.hy-110,['你多吃了一口！','AA！转我0.5！'][i],a,eBack(seg(t,k,k+.2)),STEEL,-1);if(t>=k&&t<k+1){const p=seg(t,k,k+1);ctx.save();ctx.globalAlpha=a*(1-p);ctx.font='900 44px '+SER;ctx.textAlign='center';ctx.fillStyle='#7dff9a';ctx.shadowColor='#7dff9a';ctx.shadowBlur=12;ctx.fillText(['¥0.3','¥0.5'][i],RG.fh[0]+40+i*30,RG.fh[1]-90-p*120);ctx.restore();}});
    if(t>=LOCK)bubble(TG.hx-20,TG.hy-150,'上次我还请你了！',a,eBack(seg(t,LOCK,LOCK+.2)),TC,1);
    bigText(t,LOCK,B(7),RX+400,GY-680,'一分钱，也要算清',RED,60);}
  if(b3>0){const a=b3*endF;if(t>=JABS[0]&&t<STAMP)bubble(RG.hx+30,RG.hy-110,'存起来存起来~',a,eBack(seg(t,JABS[0],JABS[0]+.2)),GOLD,-1);
    if(t>=B(7)&&t<JABS[0])bubble(RG.hx+30,RG.hy-110,'省一块是一块',a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+400,GY-680,'会过日子，不乱花',GOLD,60);}
  if(b4>0){const a=b4*endF;const lab=['小气','抠门','铁公鸡'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*260+60,GY-560-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx+10,BG.hy-110,'跟你出去太累了',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(TG.hx+10,TG.hy-150,'以后别叫我',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),TC,-1);
    bigText(t,SLAM,SLAM+1.8,RX+400,GY-680,'省下了钱，省没了朋友','#fff',58);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.7)bubble(RG.hx+30,RG.hy-110,'钱有了…朋友呢？',a*seg(t,B(9)+.9,B(9)+1.2),1,STEEL,-1);
    if(t>=CLIMAX-.6)bubble(RG.hx+30,RG.hy-110,'这顿，我请！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx+10,BG.hy-110,'真的假的？！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(TG.hx-20,TG.hy-150,'够意思！',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
