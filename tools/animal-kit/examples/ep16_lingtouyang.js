// ===== 人间动物志 · 领头羊 =====
const SWL='#f4f0ff',SHN='#ffd8a0',SFC='#d8c8ff';
const RX=620;
function wool(cx,cy,rx,ry,nb=11,amp=10){const o=[];const n=nb*8;for(let i=0;i<=n;i++){const an=-Math.PI/2+i/n*TAU;const b=Math.abs(Math.sin(i/n*nb*Math.PI));o.push([cx+Math.cos(an)*(rx+b*amp),cy+Math.sin(an)*(ry+b*amp)]);}return o;}
// sheep: o:{exp 0 normal 1 determined 2 sad 3 happy 4 shock, gold, sq, lean, run, droop, sweat}
function sheep(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,gold:0,sq:1,lean:0,run:0,droop:0,sweat:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);ctx.translate(0,30);const w=3.2/s;const C=mixc(SWL,GOLD,o.gold),HN=mixc(SHN,'#ffb040',o.gold),FC=mixc(SFC,GOLD,o.gold*.7);
  const T=t0g*16;const L=(hx,off)=>{const ph=o.run*Math.sin(T+off);return[[hx,-110],[hx+ph*20,-70],[hx+ph*30,-30-Math.max(0,ph)*18]];};
  const hd=o.droop*.5;const R=(p)=>{const c=Math.cos(hd),sn=Math.sin(hd),dx=p[0]-70,dy=p[1]+170;return[70+dx*c-dy*sn,-170+dx*sn+dy*c];};
  const face=circ(118,-196,30,40,36).map(R);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#0a0814';ctx.beginPath();ctx.ellipse(0,-160,96,60,0,0,TAU);ctx.fill();trace(face);ctx.fill();ctx.restore();
  const P=[['leg',L(-50,Math.PI*.5)],['leg',L(-66,Math.PI*1.5)],['body',wool(0,-160,90,52)],['leg',L(48,0)],['leg',L(32,Math.PI)],
    ['face',face],['horn',spiral(...R([100,-226]),26,1.3,-1,30,Math.PI*.2)],['horn2',spiral(...R([138,-226]),24,1.3,1,30,Math.PI*.8)],['ear',[[96,-200],[70,-196],[92,-186]].map(R)],['tail',wool(-98,-176,14,12,5,4)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.75,i/N*.75+.25);if(p>0)glow(pts,p,nm.startsWith('horn')?HN:nm=='face'?FC:C,w,a,14,prog<1);});
  const fp=seg(prog,.55,.85);
  if(fp>0){const fa=a*fp,e=o.exp;glow(wool(...R([118,-236]),22,10,5,4),1,C,w*.8,fa,8,false);
    const bl=R([108,-150]);glow(circ(bl[0],bl[1]+8,10,11,16),1,GOLD,w*.8,fa,10,false);dot(bl[0],bl[1]+14,2.5,GOLD,fa);glow(Q(R([92,-160]),R([108,-148]),R([128,-162]),8),1,'#ff8a8a',w*.6,fa,6,false);
    const E1=R([106,-200]),E2=R([132,-200]);const m=R([120,-172]);
    if(e==0){dot(...E1,3.6,'#fff',fa);dot(...E2,3.6,'#fff',fa);glow(Q([m[0]-7,m[1]],[m[0],m[1]+5],[m[0]+7,m[1]],6),1,FC,w*.7,fa,4,false);}
    else if(e==1){[E1,E2].forEach((E,i)=>{dot(...E,3.6,'#fff',fa);glow([[E[0]-8,E[1]-10+(i?4:-2)],[E[0]+8,E[1]-10+(i?-2:4)]],1,FC,w*.7,fa,4,false);});glow([[m[0]-7,m[1]],[m[0]+7,m[1]]],1,FC,w*.7,fa,4,false);}
    else if(e==2){[E1,E2].forEach((E,i)=>{dot(E[0],E[1]+1,3,'#fff',fa);glow([[E[0]-7,E[1]-8+(i?-3:3)],[E[0]+7,E[1]-8+(i?3:-3)]],1,FC,w*.7,fa,4,false);});glow(Q([m[0]-7,m[1]+3],[m[0],m[1]-3],[m[0]+7,m[1]+3],6),1,FC,w*.7,fa,4,false);const tp=(t0g*1.4)%1;dot(E1[0],E1[1]+8+tp*26,3,'#8ad8ff',fa*(1-tp));}
    else if(e==3){[E1,E2].forEach(E=>glow(Q([E[0]-6,E[1]+2],[E[0],E[1]-5],[E[0]+6,E[1]+2],6),1,'#fff',w*.8,fa,4,false));glow(Q([m[0]-8,m[1]-2],[m[0],m[1]+7],[m[0]+8,m[1]-2],6),1,FC,w*.7,fa,4,false);ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(E1[0]-6,E1[1]+16,6,0,TAU);ctx.arc(E2[0]+6,E2[1]+16,6,0,TAU);ctx.fill();ctx.restore();}
    else{[E1,E2].forEach(E=>{glow(circ(E[0],E[1],6,6,12),1,'#fff',w*.7,fa,4,false);dot(...E,2,'#fff',fa);});glow(circ(m[0],m[1],4,5,10),1,FC,w*.7,fa,4,false);}
    if(o.sweat>0){const sp=(t0g*1.3)%1;dot(...R([150,-232+sp*40]),5,'#8ad8ff',fa*o.sweat*(1-sp));}}
  ctx.restore();const k=s*o.sq;const hc=R([118,-200]);hc[1]+=30;return{hx:x+dir*s*hc[0],hy:y+k*hc[1],cx:x+dir*s*20,cy:y+k*-130,back:[x-dir*s*10,y+k*-188],top:y+k*-230,fl:[x+dir*s*40,y],bl:[x-dir*s*58,y]};}
const BXL=['方案','报表','杂事','加班','背锅','会议','汇报','跑腿','客户','PPT','复盘','值班','周报','对接'];
function boxStack(x,y,n,a,sway,col){if(a<=.01||n<=0)return;for(let i=0;i<n;i++){const yy=y-i*52,dx=Math.sin(i*1.9)*10+sway*i*i*.8;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#14100c';ctx.fillRect(x-62+dx,yy-48,124,48);ctx.restore();glow(rectP(x-62+dx,yy-48,x+62+dx,yy),1,col,2,a,8,false);
  ctx.save();ctx.globalAlpha=a;ctx.font='800 26px '+SER;ctx.textAlign='center';ctx.fillStyle='#f0e8e0';ctx.fillText(BXL[i%BXL.length],x+dx,yy-15);ctx.restore();}}
const RPp=o=>Object.assign({x:RX,exp:0,gold:0,sq:1,lean:0,run:0,droop:0,sweat:0},o);
const KR=[[0,RPp({exp:3})],[2.67,RPp({exp:3})],[3.05,RPp({exp:1})],[3.3,RPp({x:RX+30,exp:1,run:1,lean:-.06,sq:1.05}),'snap'],[4.2,RPp({x:RX+30,exp:1})],[4.66,RPp({x:RX+30,exp:1,sq:1.06,lean:-.04}),'snap'],[5.8,RPp({x:RX+30,exp:1})],[5.95,RPp({x:RX+30,exp:3,sq:1.04}),'snap'],[7.0,RPp({exp:3})],[7.6,RPp({exp:1})],
 [DROP,RPp({exp:1,run:1,sq:1.06,lean:-.06}),'snap'],[DROP+1.2,RPp({exp:1,run:.4})],[B(5)-.2,RPp({exp:1})]];
MK.forEach((k,i)=>KR.push([k-.12,RPp({exp:1,lean:.05})],[k,RPp({exp:1,lean:-.1,sq:1.05,x:RX+20}),'snap'],[k+.35,RPp({exp:1})]));
KR.push([B(6),RPp({exp:0})],[WAVES[0],RPp({exp:4,sq:.96,sweat:.5}),'snap'],[WAVES[1],RPp({exp:1,sq:.93,sweat:1}),'snap'],[LOCK-.15,RPp({exp:1,sq:.93,sweat:1})],[LOCK,RPp({exp:4,sq:.88,sweat:1}),'snap'],[LOCK+.5,RPp({exp:2,sq:.9,sweat:1})],[B(7)-.1,RPp({exp:2,sq:.92})],[B(7)+.15,RPp({exp:1})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:3,sq:1.05,lean:i?.04:-.04}),'snap'],[k+.4,RPp({exp:3})]));
KR.push([STAMP,RPp({exp:3,gold:.6,sq:1.1}),'snap'],[STAMP+.6,RPp({exp:3,gold:.3})],[B(8),RPp({exp:1,sq:.95,sweat:.5})]);
SNAPS.forEach((k,i)=>KR.push([k-.1,RPp({exp:1,sq:.93-i*.04,sweat:1,droop:i*.3})],[k,RPp({exp:2,sq:.88-i*.05,sweat:1,droop:.3+i*.3}),'snap'],[k+.35,RPp({exp:2,sq:.88-i*.05,sweat:1,droop:.3+i*.3})]));
KR.push([SLAM-.2,RPp({exp:2,sq:.8,droop:.8,sweat:1})],[SLAM,RPp({exp:4,sq:.7,lean:.08,droop:1}),'snap'],[SLAM+.5,RPp({exp:2,sq:.74,droop:1})],[B(9),RPp({exp:2,sq:.76,droop:1})],[CLIMAX-.7,RPp({exp:2,sq:.78,droop:1})],[CLIMAX-.35,RPp({exp:1,sq:.86,droop:.2})],[CLIMAX-.15,RPp({exp:1,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12}),'snap'],[CLIMAX+.5,RPp({exp:3,gold:1,run:.6})],[27.5,RPp({exp:3,gold:1,run:.4})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:330,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:1,walk:0},o);
const KB=[[0,BPp({a:0})],[2.55,BPp({a:0})],[2.8,BPp({a:1,exp:1,fhx:70,fhy:-120})],[3.3,BPp({exp:0,hop:.2}),'snap'],[5.95,BPp({exp:0,hop:.4,blush:1,fhx:70,fhy:-130}),'snap'],[6.5,BPp({exp:0,blush:1})],
 [B(5),BPp({exp:0})],[MK[1],BPp({exp:0,hop:.2}),'snap'],[B(6),BPp({exp:0})],[WAVES[0],BPp({exp:0,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:1})],
 [B(7),BPp({exp:0,blush:1})],[JABS[0],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8),BPp({exp:0})],[SNAPS[0],BPp({exp:0,fhx:70,fhy:-120}),'snap'],[SLAM,BPp({exp:1,hop:.3}),'snap'],[B(9),BPp({exp:2,droop:.6})],[B(9)+.4,BPp({a:0})],
 [CLIMAX+.2,BPp({a:0,x:300})],[CLIMAX+.7,BPp({a:1,x:360,exp:0,hop:.4,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:360,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:140,dir:1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[4.2,OPp({a:0})],[4.4,OPp({a:1,exp:1,fhx:110,fhy:-180})],[4.9,OPp({exp:0})],[B(5),OPp({exp:0})],[B(6),OPp({exp:0})],[WAVES[1],OPp({exp:0,fhx:120,fhy:-200}),'snap'],[LOCK,OPp({exp:0})],[B(7),OPp({exp:0})],
 [SNAPS[1],OPp({exp:0,fhx:120,fhy:-200}),'snap'],[SLAM,OPp({exp:1,sweat:1}),'snap'],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],
 [CLIMAX+.2,OPp({a:0,x:110})],[CLIMAX+.7,OPp({a:1,x:150,exp:0,fhx:110,fhy:-230,bhx:-20,bhy:-230})],[27.5,OPp({a:1,x:150,exp:0,fhx:110,fhy:-230,bhx:-20,bhy:-230})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
function stackN(t){if(t<B(6))return 0;let n=1;WAVES.forEach(k=>{if(t>=k)n+=2;});if(t>=LOCK)n+=2;if(t>=B(7)-.1&&t<B(8)-.1)return 0;if(t>=B(8)-.1){n=6;SNAPS.forEach(k=>{if(t>=k)n+=2;});}return n;}
const EP={name:'领头羊',en:'THE LEADER',epn:'第十六期',acc:SHN,grad:['#ffffff','#ffe8c8','#ffc880'],glowC:'rgba(255,210,150,.85)',kwCol:'rgba(255,240,220,.92)',kw:'冲在前 · 被依赖 · 有担当 · 一个人扛',slamCol:'#ffc8a0',
  words:['疲惫','硬撑','孤单','压力'],
  cams:[[0,650,620,1.4],[2.3,640,610,1.18],[2.67,520,570,.92],[5.33,520,570,.95],[7.4,560,570,1.0],[DROP,540,580,.92],[B(5),540,580,.95],[B(6),540,560,.92],[LOCK,560,560,.95],[B(7),540,580,.95],[STAMP,540,570,.97],[B(8),540,550,.9],[SLAM,560,600,.95],[B(9),620,700,1.12],[CLIMAX-.5,640,740,1.2],[CLIMAX,520,570,.92],[B(11),520,590,.95]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#120c08','#4a3018','#ffc880']],[B(5),['#0c0a08','#30241a','#806040']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['永远',0],['冲在最前',1]]],[[['遇到难事',0]],[['TA',0],['先上',1]]],[[['有锅',0]],[['TA',0],['先背',1]]],[[['身后',0]],[['跟着一群人',1]]],[[['人称',0]],[['领头羊',1]]],
   [[['有事',0]],[['第一个',0],['上',1]]],[[['有坑',0]],[['第一个',0],['跳',1]]],
   [[['大家习惯了',0]],[['什么都',0],['找TA',1]]],[[['活越堆',0]],[['越',0],['多',1]]],
   [[['好的一面',0]],[['有',0],['担当',1]]],[[['关键时刻',0]],[['靠得住',1]]],
   [[['坏的一面',0]],[['什么都',0],['自己扛',1]]],[[['累倒了',0]],[['没人',0],['发现',1]]],
   [[['领头的人',0]],[['也会',0],['累',1]]],[[['回头看看',0]],[['身后',0],['有人',1]]]],
  tags:[['01','冲在前',SHN],['02','被依赖',RED],['03','有担当',GOLD],['04','一个人扛','#a0a8b8']],
  cl:['不必独扛','一起走'],endCap:[[['领头',0]],[['不是',0],['扛下所有',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const rprog=t<2.67?seg(t,.4,2.5):1;const RG=sheep(ro.x,GY,1.7,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  const n=stackN(t);const sway=t>=B(8)?Math.sin(t*5)*(.4+n*.06):Math.sin(t*3)*.2;
  if(n>0&&t<SLAM)boxStack(RG.back[0],RG.back[1]+6,n,endF*(t<B(6)+.3?seg(t,B(6),B(6)+.3):1),sway,t>=B(8)?'#c8b8a8':SHN);
  if(t>=SLAM&&t<SLAM+1.3){for(let i=0;i<12;i++){const r=rng(900+i);const dt=t-SLAM;const px=RG.back[0]+(r()-.5)*900*dt,py=RG.back[1]-i*40-500*dt*(r())+900*dt*dt;glow(rectP(px-50,py-40,px+50,py),1,'#c8b8a8',2,endF*(1-seg(dt,.8,1.3)),8,false);}}
  if(t>=CLIMAX){const a=endF*seg(t,CLIMAX+.6,CLIMAX+.9);boxStack(OG.hx+40,OG.hy-120,2,a,0,GOLD);boxStack(BG.hx+10,BG.hy-60,1,a,0,GOLD);boxStack(RG.back[0],RG.back[1]+6,1,a,0,GOLD);}
  if(ro.run>.3){const k=Math.floor(t*10);if(k%2==0){sparks(t,k/10,RG.fl[0],GY-6,6,k,260,.4,'#c8b8a0');}}
  const bx=RG.hx+60,by=RG.hy-130,kbx=BG.hx+20,kby=BG.hy-110,obx=OG.hx+40,oby=OG.top-40;
  if(t<DROP){bubble(bx,by,'大家跟我来~',win(t,1.5,2.6,.1,.2),1,SHN,-1);
    bubble(kbx,kby,'前面有坑！',win(t,2.85,3.3,.06,.06),eBack(seg(t,2.85,3.0)),BUN,-1);
    bubble(bx,by,'我先上！',win(t,3.3,4.35,.06,.12),eBack(seg(t,3.3,3.45)),SHN,-1);
    bubble(obx,oby,'这锅谁背？',win(t,4.42,4.66,.05,.05),eBack(seg(t,4.42,4.55)),OC,-1);
    bubble(bx,by,'我来！',win(t,4.66,5.8,.06,.15),eBack(seg(t,4.66,4.8)),GOLD,-1);
    bubble(kbx,kby,'都听你的！',win(t,5.95,6.8,.04,.1),eBack(seg(t,5.95,6.1)),BUN,-1);
    proverb(t,'身先士卒',RX-160,GY-700,1,SHN,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['难题','加班','背锅'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1180,980,eOut(p)),GY-560+i*80,lab[i],a*(1-seg(t,e-.2,e)),eBack(p),'#ff9a7a',(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by,['我来！','我扛！','交给我！'][i],a,eBack(seg(t,k,k+.2)),SHN,-1);if(t>=k&&t<k+.6)shards(t,k,1000,GY-560+i*80,a,40+i,'#ff9a7a',12,600);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(kbx,kby,'这个你帮我吧~',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),BUN,-1);
    if(t>=WAVES[1]&&t<LOCK)bubble(obx,oby-40,'这个也给你~',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),OC,-1);
    if(t>=LOCK&&t<B(7))bubble(bx+60,by+60,'好…好的…',a,eBack(seg(t,LOCK,LOCK+.2)),'#ff9a9a',-1);
    bigText(t,LOCK,B(7),RX+380,GY-860,'大家都靠你，你靠谁？',RED,56);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(kbx,kby,'跟着你就安心！',a,eBack(seg(t,B(7),B(7)+.2)),BUN,-1);
    if(t>=JABS[1]&&t<STAMP)bubble(bx,by,'有我在！',a,eBack(seg(t,JABS[1],JABS[1]+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+380,GY-860,'敢扛事，天生的领袖',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['不会拒绝','逞强','硬撑'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+300+(i%2)*120,GY-640+i*110,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(kbx,kby,'再帮我一下嘛~',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,-1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(obx,oby-40,'还有这个~',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,-1);
    bigText(t,SLAM,SLAM+1.8,RX+380,GY-860,'什么都扛，最后扛不住','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-150,'……我不能倒',a*seg(t,B(9)+.9,B(9)+1.2),.9,SHN,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-60,'大家一起来！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.9&&dt<2.2){bubble(kbx,kby-60,'我也来！',a*(1-seg(dt,2.0,2.2)),1,BUN,-1);bubble(obx,oby-150,'分我一半！',a*(1-seg(dt,2.0,2.2)),1,OC,-1);}}
}
