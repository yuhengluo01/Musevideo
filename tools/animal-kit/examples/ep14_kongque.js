// ===== 人间动物志 · 孔雀 =====
const PBL='#6ac8ff',PGR='#6dffc8',PEYE='#3a8aff';
const RX=520;
const NF=13,FRANK=(()=>{const o=[];for(let i=0;i<7;i++){o.push(i);if(NF-1-i!==i)o.push(NF-1-i);}const r=[];o.forEach((f,k)=>r[f]=k);return r;})();
// peacock: o:{exp 0 normal 1 nervous 2 sad 3 proud 4 shock, fan 0..1, gold, sq, lean, fhx,fhy, bald 0..1}
function peacock(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,fan:0,gold:0,sq:1,lean:0,fhx:50,fhy:-150,bald:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const C=mixc(PBL,GOLD,o.gold),TL=mixc(PGR,GOLD,o.gold*.8),EY=mixc(PEYE,'#ffb040',o.gold);
  const pv=[-22,-128],L=lerp(230,330,o.fan),tp=seg(prog,.5,1);
  if(o.fan>.25&&tp>0){ctx.save();ctx.globalAlpha=a*.55*seg(o.fan,.25,.8)*tp;ctx.fillStyle='#04120e';ctx.beginPath();ctx.moveTo(pv[0],pv[1]);ctx.arc(pv[0],pv[1],L*1.03,lerp(-1.1,-1,o.fan)*Math.PI,lerp(-.98,-.04,o.fan)*Math.PI);ctx.closePath();ctx.fill();ctx.restore();}
  for(let i=0;i<NF;i++){if(FRANK[i]<o.bald*NF)continue;const k=i/(NF-1);const ca=-Math.PI*(1.1-k*.12),oa=-Math.PI*(1-k*.96);const an=lerp(ca,oa,o.fan);const LL=L*(1-.08*Math.abs(k-.5));
    const e=[pv[0]+Math.cos(an)*LL,pv[1]+Math.sin(an)*LL];const c=[pv[0]+Math.cos(an+.08)*LL*.55,pv[1]+Math.sin(an+.08)*LL*.55];
    const p=seg(tp,k*.5,k*.5+.5);if(p<=0)continue;glow(Q(pv,c,e,12),p,TL,w*.9,a,10,prog<1);
    if(p>.9){const ea=a*seg(p,.9,1);glow(circ(e[0],e[1],17,21,20),1,TL,w*.8,ea,8,false);glow(circ(e[0],e[1],9,11,16),1,EY,w*.8,ea,8,false);dot(e[0],e[1],3.5,o.gold>.5?'#fff':GOLD,ea);
      [-.5,.5].forEach(d=>glow([[lerp(pv[0],e[0],.5),lerp(pv[1],e[1],.5)],[e[0]+Math.cos(an+d)*-14,e[1]+Math.sin(an+d)*-14]],1,TL,w*.4,ea*.6,4,false));}}
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#060c14';ctx.beginPath();ctx.ellipse(0,-122,46,52,0,0,TAU);ctx.fill();ctx.beginPath();ctx.ellipse(46,-280,21,19,0,0,TAU);ctx.fill();ctx.restore();
  const P=[['leg',[[-14,0],[-10,-36],[-12,-72]]],['leg2',[[14,0],[18,-36],[12,-72]]],['body',circ(0,-122,46,52,44)],['neck',cat(Q([20,-160],[52,-210],[30,-266],12))],['neck2',Q([40,-150],[66,-210],[54,-264],12)],['head',circ(46,-280,21,19,28)]];
  const N=P.length+4;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.7,i/N*.7+.25);if(p>0)glow(pts,p,nm.startsWith('leg')?'#c8b8a0':C,w,a,14,prog<1);});
  const fp=seg(prog,.45,.75);
  if(fp>0){const fa=a*fp,e=o.exp;glow([[62,-286],[84,-279],[62,-272]],1,'#ffd080',w,fa,8,false);
    [[34,-298,26,-334],[44,-299,44,-338],[54,-297,62,-332]].forEach(([x0,y0,x1,y1])=>{glow([[x0,y0],[x1,y1]],1,C,w*.6,fa,6,false);dot(x1,y1,4.5,TL,fa);});
    glow(Q([-20,-130],[10,-150],[30,-118],8),1,C,w*.7,fa*.7,6,false);
    const ex=50,ey=-285;
    if(e==0)dot(ex,ey,3.6,'#fff',fa);
    else if(e==1){dot(ex,ey,3.6,'#fff',fa);const sp=(t0g*1.2)%1;dot(30,-300+sp*30,4,'#8ad8ff',fa*(1-sp));}
    else if(e==2){dot(ex,ey+1,3,'#fff',fa);glow([[ex-7,ey-8],[ex+6,ey-5]],1,C,w*.8,fa,4,false);const tp2=(t0g*1.4)%1;dot(ex,ey+6+tp2*26,3,'#8ad8ff',fa*(1-tp2));}
    else if(e==3){glow(Q([ex-6,ey+1],[ex,ey-6],[ex+6,ey+1],6),1,'#fff',w*.8,fa,4,false);ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;ctx.beginPath();ctx.arc(52,-270,5,0,TAU);ctx.fill();ctx.restore();}
    else{glow(circ(ex,ey,6,6,12),1,'#fff',w*.7,fa,4,false);dot(ex,ey,2,'#fff',fa);}
    arm([22,-136],[o.fhx,o.fhy],90,C,w,fa,-1);glow([[o.fhx,o.fhy],[o.fhx+14,o.fhy-12]],1,C,w,fa,6,false);glow([[o.fhx,o.fhy],[o.fhx+18,o.fhy+2]],1,C,w,fa,6,false);}
  ctx.restore();const k=s*o.sq;return{hx:x+dir*s*46,hy:y+k*-280,top:y+k*-340,cx:x,cy:y+k*-150,pv:[x+dir*s*pv[0],y+k*pv[1]],L:L*s,fh:[x+dir*s*o.fhx,y+k*o.fhy]};}
function bigPhone(x,y,a,likes,mode,t){if(a<=.01)return;const w=220,h=380;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0e18';ctx.beginPath();ctx.roundRect(x-w/2,y-h,w,h,28);ctx.fill();ctx.restore();
  glow(cat(rectP(x-w/2,y-h,x+w/2,y)),1,PBL,2.6,a,14,false);glow([[x-30,y-h+20],[x+30,y-h+20]],1,PBL,2,a,6,false);
  glow(rectP(x-80,y-h+50,x+80,y-h+210),1,'#e8e0ff',1.6,a*.8,6,false);glow(circ(x,y-h+120,32,32,24),1,PGR,2,a*.8,8,false);glow(Q([x-60,y-h+200],[x,y-h+130],[x+60,y-h+200],8),1,PGR,1.6,a*.6,6,false);
  ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';if(mode==1){ctx.font='900 34px '+SER;ctx.fillStyle='#ffd0d0';ctx.shadowColor='#ff5a6a';ctx.shadowBlur=12;ctx.fillText('修图中…',x,y-110);ctx.font='700 28px '+SER;ctx.fillText('已用 3 小时',x,y-66);}
   else{heartF(x-46,y-108,1.2,'#ff4a7a',a);ctx.font='900 44px '+SER;ctx.fillStyle='#fff';ctx.shadowColor='#ff4a7a';ctx.shadowBlur=12;ctx.textAlign='left';ctx.fillText(likes,x-20,y-92);ctx.font='600 24px '+SER;ctx.textAlign='center';ctx.fillStyle='#c8c0e0';ctx.fillText('朋友圈 · 刚刚',x,y-44);}ctx.restore();}
function featherFall(t,t0,x,y,a,seed){const dt=t-t0;if(dt<0||dt>1.8)return;const r=rng(seed);for(let i=0;i<3;i++){const sx=x+(r()-.5)*260,sy=y+(r()-.5)*160;const px=sx+Math.sin(dt*4+i)*40,py=sy+dt*260;const an=Math.sin(dt*3+i)*.6+1.2;
  const e=[px+Math.cos(an)*70,py+Math.sin(an)*70];glow([[px,py],e],1,PGR,2,a*(1-seg(dt,1.2,1.8)),8,false);glow(circ(e[0],e[1],10,13,14),1,PGR,1.6,a*(1-seg(dt,1.2,1.8)),6,false);dot(e[0],e[1],3,GOLD,a*(1-seg(dt,1.2,1.8)));}}
const RPp=o=>Object.assign({x:RX,exp:0,fan:0,gold:0,sq:1,lean:0,fhx:50,fhy:-150,bald:0},o);
const OP=o=>RPp({exp:3,fan:1,fhx:96,fhy:-230,...o});
const KR=[[0,RPp({exp:0})],[2.67,RPp({exp:0})],[3.0,RPp({exp:4})],[3.3,OP({fan:.75,sq:1.05}),'snap'],[4.4,OP({fan:.65,fhx:60,fhy:-160})],[4.66,OP({exp:3,gold:.35,sq:1.08}),'snap'],[5.8,OP({fan:.95})],[5.95,OP({gold:.7,lean:-.05,sq:1.06}),'snap'],[6.6,OP({gold:.2})],[7.6,RPp({exp:3,fan:.45})],
 [DROP,OP({gold:.4,sq:1.08,fhx:100,fhy:-245}),'snap'],[DROP+.8,OP({fan:.85,fhx:70,fhy:-180})]];
MK.forEach((k,i)=>KR.push([k-.12,RPp({exp:3,fan:.45})],[k,OP({sq:1.06,lean:(i-1)*.04}),'snap'],[k+.3,OP({fan:.9,fhx:70,fhy:-180})]));
KR.push([B(6),RPp({exp:0,fan:.55})],[WAVES[0],RPp({exp:2,fan:.3,sq:.96}),'snap'],[WAVES[1],RPp({exp:1,fan:.4,fhx:90,fhy:-200}),'snap'],[LOCK-.15,RPp({exp:1,fan:.35})],[LOCK,RPp({exp:4,fan:.15,sq:.94}),'snap'],[LOCK+.5,RPp({exp:1,fan:.2})],[B(7)-.1,RPp({exp:1,fan:.3})],[B(7)+.15,OP({fan:.85})]);
JABS.forEach((k,i)=>KR.push([k,OP({sq:1.04,lean:i?.05:-.05}),'snap'],[k+.4,OP({fan:.9,fhx:70,fhy:-180})]));
KR.push([STAMP,OP({gold:.6,sq:1.1,fhx:100,fhy:-265}),'snap'],[STAMP+.6,OP({gold:.3})],[B(8),OP({exp:0,fan:.9,fhx:70,fhy:-180})]);
SNAPS.forEach((k,i)=>KR.push([k-.1,OP({exp:4,fan:.9,bald:i*.32})],[k,OP({exp:4,fan:.75-i*.15,bald:(i+1)*.32,sq:.94-i*.04}),'snap'],[k+.35,OP({exp:1,fan:.7-i*.15,bald:(i+1)*.32,sq:.92-i*.04})]));
KR.push([SLAM-.2,RPp({exp:1,fan:.45,bald:.64,sq:.88})],[SLAM,RPp({exp:4,fan:.3,bald:.86,sq:.82,lean:.07}),'snap'],[SLAM+.5,RPp({exp:2,fan:.15,bald:.86,sq:.84})],[B(9),RPp({exp:2,fan:.05,bald:.86,sq:.85})],[CLIMAX-.7,RPp({exp:2,fan:0,bald:.86,sq:.86})],[CLIMAX-.35,RPp({exp:0,fan:0,bald:.86,sq:.86})],[CLIMAX-.15,RPp({exp:0,fan:0,bald:.4,sq:.8})],
 [CLIMAX,OP({gold:1,bald:0,sq:1.12,fhx:100,fhy:-270}),'snap'],[CLIMAX+.6,OP({gold:1,fhx:80,fhy:-200})],[27.5,OP({gold:1,fhx:80,fhy:-200})]);
KR.sort((a,b)=>a[0]-b[0]);
const BPp=o=>Object.assign({x:990,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[2.55,BPp({a:0})],[2.8,BPp({a:1,exp:0,fhx:60,fhy:-110})],[3.3,BPp({exp:1,hop:.3}),'snap'],[4.2,BPp({exp:1})],[B(5),BPp({exp:0})],[MK[1],BPp({exp:1,hop:.25}),'snap'],[MK[1]+.4,BPp({exp:1})],
 [B(6)-.3,BPp({a:1})],[B(6)-.1,BPp({a:0})],[B(7)-.3,BPp({a:0})],[B(7)-.05,BPp({a:1,exp:0,blush:1})],[JABS[0],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.1,BPp({exp:0})],
 [SNAPS[0],BPp({exp:1,hop:.2}),'snap'],[SLAM,BPp({exp:2,droop:.7})],[B(9),BPp({exp:2,droop:.7})],[B(9)+.4,BPp({a:0})],
 [CLIMAX+.2,BPp({a:0,x:1000})],[CLIMAX+.7,BPp({a:1,x:940,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:940,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:940,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1210,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[4.15,OPp({a:0})],[4.4,OPp({a:1,exp:0,fhx:110,fhy:-170})],[4.66,OPp({exp:1}),'snap'],[B(5),OPp({exp:1})],[MK[2],OPp({exp:1,sweat:1}),'snap'],
 [B(6)-.3,OPp({a:1,exp:1})],[B(6)-.1,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:0})],[SNAPS[1],OPp({exp:2,fhx:100,fhy:-300}),'snap'],[SLAM,OPp({exp:2,fhx:100,fhy:-300})],[B(9),OPp({exp:2})],[B(9)+.4,OPp({a:0})],
 [CLIMAX+.2,OPp({a:0,x:1200})],[CLIMAX+.7,OPp({a:1,x:1160,exp:0,fhx:120,fhy:-210})],[27.5,OPp({a:1,x:1160,exp:0,fhx:120,fhy:-210})]];
KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
function bill(x,y,a,len){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#16100c';ctx.fillRect(x-36,y,72,len);ctx.restore();glow(rectP(x-36,y,x+36,y+len),1,'#ffe0d0',1.8,a,8,false);for(let j=1;j<len/22;j++)glow([[x-24,y+j*22],[x+(j%3?24:6),y+j*22]],1,'#ff8a8a',1.2,a*.7,4,false);
  ctx.save();ctx.globalAlpha=a;ctx.font='900 26px '+SER;ctx.textAlign='center';ctx.fillStyle='#ff9a9a';ctx.shadowColor='#ff3a4a';ctx.shadowBlur=10;ctx.fillText('账单',x,y-10);ctx.restore();}
const EP={name:'孔雀',en:'PEACOCK',epn:'第十四期',acc:PGR,grad:['#ffffff','#b8fff0','#7ac8ff'],glowC:'rgba(110,255,210,.85)',kwCol:'rgba(215,255,245,.92)',kw:'爱炫耀 · 晒圈 · 自信 · 攀比',slamCol:'#9ad8ff',
  words:['攀比','虚荣','面子','焦虑'],
  cams:[[0,470,640,1.45],[2.3,490,620,1.2],[2.67,660,570,.92],[5.33,650,570,.95],[7.4,620,560,1.0],[DROP,660,560,.9],[B(5),660,570,.94],[B(6),660,590,.96],[LOCK,640,600,1.0],[B(7),650,570,.95],[STAMP,650,560,.97],[B(8),670,590,.94],[SLAM,650,610,.98],[B(9),600,680,1.08],[CLIMAX-.5,590,720,1.16],[CLIMAX,660,560,.9],[B(11),660,580,.94]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#06101a','#1a3a5a','#60e0c0']],[B(5),['#081018','#1a3048','#3a8090']],[B(6),['#100808','#30141a','#803050']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['走到哪',0],['都要发光',1]]],[[['一有机会',0]],[['就',0],['开屏',1]]],[[['你有的',0]],[['TA要',0],['更好',1]]],[[['朋友圈里',0]],[['永远',0],['完美',1]]],[[['人称',0]],[['孔雀',1]]],
   [[['名牌logo',0]],[['永远',0],['朝外',1]]],[[['说话三句',0]],[['不离',0],['价格',1]]],
   [[['一张自拍',0]],[['修',0],['三小时',1]]],[[['点赞少了',0]],[['立刻',0],['删掉',1]]],
   [[['好的一面',0]],[['自信',0],['满满',1]]],[[['活得',0]],[['精致',0],['漂亮',1]]],
   [[['坏的一面',0]],[['处处',0],['攀比',1]]],[[['面子撑住了',0]],[['钱包',0],['空了',1]]],
   [[['一直开屏',0]],[['累',0],['不累',1]]],[[['不晒的日子',0]],[['也是',0],['生活',1]]]],
  tags:[['01','爱炫耀',PBL],['02','晒朋友圈',RED],['03','自信',GOLD],['04','爱攀比','#a0a8b8']],
  cl:['不开屏','也发光'],endCap:[[['真正的光',0]],[['不用',0],['晒',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  if(b2>0){let n=3;if(t>=WAVES[0])n=3;if(t>=WAVES[1])n=12;bigPhone(1000,GY-60,b2*endF*seg(t,B(6)-.1,B(6)+.2),t<WAVES[0]+.01?'0':String(n),t>=LOCK?1:0,t);}
  if(b4>0&&t>=SNAPS[1]){let len=60+seg(t,SNAPS[1],SNAPS[1]+.4)*120+seg(t,SLAM,SLAM+.4)*200;bill(OG.fh[0],OG.fh[1]+10,b4*endF,len);}
  const rprog=t<2.67?seg(t,.4,2.5):1;const RG=peacock(ro.x,GY,1.45,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  SNAPS.forEach((k,i)=>featherFall(t,k,RG.pv[0]-RG.L*.4,RG.pv[1]-RG.L*.5,endF,700+i));featherFall(t,SLAM,RG.pv[0]-RG.L*.3,RG.pv[1]-RG.L*.3,endF,777);
  const bx=RG.hx+60,by=RG.hy-100;
  if(t<DROP){bubble(bx,by,'今天穿哪件呢~',win(t,1.5,2.6,.1,.2),1,PBL,-1);
    bubble(BG.hx-40,BG.hy-110,'你今天好普通哦',win(t,2.85,3.3,.06,.06),eBack(seg(t,2.85,3.0)),BUN,1);
    bubble(bx,by,'普通？看我开屏！',win(t,3.3,4.35,.06,.12),eBack(seg(t,3.3,3.45)),PGR,-1);
    bubble(OG.hx-60,OG.top-40,'我刚买了辆车',win(t,4.42,4.66,.05,.05),eBack(seg(t,4.42,4.55)),OC,1);
    bubble(bx,by,'我的更贵！',win(t,4.66,5.8,.06,.15),eBack(seg(t,4.66,4.8)),GOLD,-1);
    if(t>=5.95&&t<6.8)sparks(t,5.95,RG.pv[0],RG.pv[1]-RG.L*.6,40,59,700,.7,GOLD);
    bubble(BG.hx-40,BG.hy-110,'哇——',win(t,5.95,6.7,.04,.1),eBack(seg(t,5.95,6.1)),BUN,1);
    proverb(t,'孔雀开屏',RX-120,GY-700,2,PGR,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['名牌包','新手表','五星酒店'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1060,900,eOut(p)),GY-640+i*80,lab[i],a*(1-seg(t,e-.2,e)),eBack(p),GOLD,(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by,['不经意露一下~','随手拍的啦~','一般般啦~'][i],a,eBack(seg(t,k,k+.2)),PGR,-1);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<WAVES[1])bubble(bx,by,'才3个赞？删了！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),'#ff9a9a',-1);
    if(t>=WAVES[1]&&t<LOCK)bubble(bx,by,'重拍！再加滤镜~',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),PGR,-1);
    if(t>=LOCK&&t<B(7))bubble(bx,by,'三小时了…',a,eBack(seg(t,LOCK,LOCK+.2)),'#ff9a9a',-1);
    bigText(t,LOCK,B(7),RX+400,GY-800,'生活是拍给别人看的',RED,56);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(BG.hx-40,BG.hy-110,'你好会穿搭！',a,eBack(seg(t,B(7),B(7)+.2)),BUN,1);
    if(t>=JABS[1]&&t<STAMP)bubble(bx,by,'那当然~',a,eBack(seg(t,JABS[1],JABS[1]+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+400,GY-800,'精致自信，自带光芒',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['攀比','虚荣','爱面子'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*230+40,GY-720-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx-40,BG.hy-110,'你羽毛掉了！',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(OG.hx-60,OG.top-120,'信用卡账单~',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    bigText(t,SLAM,SLAM+1.8,RX+400,GY-800,'面子撑满，里子掏空','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx+40,by-150,'不开屏，还有人看我吗…',a*seg(t,B(9)+.9,B(9)+1.2),.9,PBL,-1);
    if(t>=CLIMAX-.6)bubble(bx,by,'我就做我自己！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx-40,BG.hy-110,'这样最美！',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(OG.hx-60,OG.top-40,'真好看！',a*(1-seg(dt,2.0,2.2)),1,OC,1);}}
}
