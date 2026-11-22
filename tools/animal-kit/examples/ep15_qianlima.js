// ===== 人间动物志 · 千里马 =====
const HC='#cfe4ff',HMN='#8ab8ff';
const RX=430;
// horse: o:{exp 0 normal 1 focused 2 sad 3 happy 4 shock, gold, sq, lean, run, droop}
function horse(x,y,s,dir,o,a=1,prog=1){o=Object.assign({exp:0,gold:0,sq:1,lean:0,run:0,droop:0},o);
  ctx.save();ctx.translate(x,y);ctx.scale(s*dir,s*o.sq);ctx.rotate(o.lean);const w=3.2/s;const C=mixc(HC,GOLD,o.gold),M=mixc(HMN,'#ffb040',o.gold);
  const T=t0g*18;const L=(hx,off)=>{const ph=o.run*Math.sin(T+off);return[[hx,-150],[hx+ph*34,-78],[hx+ph*52,-Math.max(0,ph)*26]];};
  const legs=[L(60,0),L(42,Math.PI),L(-58,Math.PI*.5),L(-74,Math.PI*1.5)];
  const hd=o.droop*.75;const R=(p)=>{const c=Math.cos(hd),sn=Math.sin(hd),dx=p[0]-70,dy=p[1]+200;return[70+dx*c-dy*sn,-200+dx*sn+dy*c];};
  const head=[[106,-322],[132,-338],[190,-294],[198,-278],[182,-266],[136,-280],[110,-298],[106,-322]].map(R);
  ctx.save();ctx.globalAlpha=a*.92*Math.min(1,prog*2);ctx.fillStyle='#060a12';ctx.beginPath();ctx.ellipse(0,-180,95,44,0,0,TAU);ctx.fill();trace(head);ctx.fill();ctx.beginPath();const nkf=cat(Q([60,-206],[90,-262],[110,-312],8),Q([136,-292],[118,-240],[90,-176],8)).map(R);nkf.forEach((q,i)=>i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1]));ctx.fill();ctx.restore();
  const P=[['leg',legs[2]],['leg',legs[3]],['body',circ(0,-180,95,44,48)],['leg',legs[0]],['leg',legs[1]],
    ['neck',Q([60,-206],[90,-262],[110,-312],12).map(R)],['neck2',Q([90,-176],[118,-240],[136,-292],12).map(R)],['head',head],['ear',[[118,-328],[112,-360],[132,-334]].map(R)],
    ['tail',Q([-92,-196],[-160,-200],[-146,-90],12)],['tail2',Q([-92,-188],[-130,-170],[-120,-100],10)]];
  const N=P.length+3;P.forEach(([nm,pts],i)=>{const p=seg(prog,i/N*.75,i/N*.75+.25);if(p>0)glow(pts,p,nm.startsWith('tail')?M:C,w,a,14,prog<1);});
  const fp=seg(prog,.55,.85);
  if(fp>0){const fa=a*fp,e=o.exp;
    for(let i=0;i<6;i++){const f=.15+i*.15;const b=Q([60,-206],[90,-262],[110,-312],12)[Math.round(f*12)];const fl=Math.sin(t0g*8+i)*(4+o.run*10);glow([R(b),R([b[0]-26-o.run*16,b[1]+10+fl])],1,M,w*.9,fa,8,false);}
    const ex=R([146,-312]),ey=ex[1];const X=ex[0];dot(...R([188,-282]),3,C,fa);glow([R([172,-270]),R([190,-272])],1,C,w*.6,fa,4,false);
    if(e==0)dot(X,ey,4,'#fff',fa);
    else if(e==1){dot(X,ey,4,'#fff',fa);glow([[X-10,ey-12],[X+10,ey-8]],1,C,w*.8,fa,4,false);}
    else if(e==2){dot(X,ey+1,3.4,'#fff',fa);glow([[X-9,ey-8],[X+8,ey-12]],1,C,w*.8,fa,4,false);const tp=(t0g*1.4)%1;dot(X,ey+8+tp*26,3,'#8ad8ff',fa*(1-tp));}
    else if(e==3){glow(Q([X-7,ey+2],[X,ey-6],[X+7,ey+2],6),1,'#fff',w*.8,fa,4,false);ctx.save();ctx.globalAlpha=fa*.5;ctx.fillStyle=BPK;const ck=R([160,-292]);ctx.beginPath();ctx.arc(ck[0],ck[1],7,0,TAU);ctx.fill();ctx.restore();}
    else{glow(circ(X,ey,7,7,12),1,'#fff',w*.7,fa,4,false);dot(X,ey,2,'#fff',fa);}}
  ctx.restore();const k=s*o.sq;const hc=R([150,-300]);return{hx:x+dir*s*hc[0],hy:y+k*hc[1],cx:x,cy:y+k*-190,top:y+k*-370,fl:[x+dir*s*60,y],bl:[x-dir*s*60,y]};}
function crown(x,y,a){if(a<=.01)return;glow([[x-40,y],[x-46,y-44],[x-20,y-20],[x,y-56],[x+20,y-20],[x+46,y-44],[x+40,y],[x-40,y]],1,GOLD,2.6,a,14,false);dot(x,y-56,5,'#fff',a);}
const RPp=o=>Object.assign({x:RX,exp:0,gold:0,sq:1,lean:0,run:0,droop:0},o);
const KR=[[0,RPp({exp:3})],[2.67,RPp({exp:3})],[3.05,RPp({exp:1})],[3.3,RPp({exp:1,run:1,lean:-.04}),'snap'],[4.2,RPp({exp:3,run:0})],[4.45,RPp({exp:4})],[4.75,RPp({exp:2,droop:.4,sq:.96})],[5.8,RPp({exp:2,droop:.4})],[5.95,RPp({exp:2,droop:.2})],[6.8,RPp({exp:2,droop:.3})],[7.6,RPp({exp:1,droop:0})],
 [DROP,RPp({exp:1,run:1,sq:1.06,lean:-.05}),'snap'],[DROP+1.2,RPp({exp:1,run:.6})],[B(5)-.2,RPp({exp:1,run:0})]];
MK.forEach((k,i)=>KR.push([k-.12,RPp({exp:1,run:.2})],[k,RPp({exp:1,run:1,sq:1.05,lean:-.06}),'snap'],[k+.35,RPp({exp:3,run:.3})]));
KR.push([B(6),RPp({exp:3})],[WAVES[0],RPp({exp:4,sq:.97}),'snap'],[WAVES[1],RPp({exp:2,droop:.3,sq:.95}),'snap'],[LOCK-.15,RPp({exp:2,droop:.3})],[LOCK,RPp({exp:4,droop:.1,sq:.92}),'snap'],[LOCK+.5,RPp({exp:2,droop:.6,sq:.92})],[B(7)-.1,RPp({exp:2,droop:.5})],[B(7)+.15,RPp({exp:1})]);
JABS.forEach((k,i)=>KR.push([k,RPp({exp:1,run:1,sq:1.04,lean:-.05}),'snap'],[k+.4,RPp({exp:3,run:.2})]));
KR.push([STAMP,RPp({exp:3,gold:.6,sq:1.1,run:.6}),'snap'],[STAMP+.6,RPp({exp:3,gold:.3})],[B(8),RPp({exp:0})]);
SNAPS.forEach((k,i)=>KR.push([k-.1,RPp({exp:4,droop:i*.3})],[k,RPp({exp:2,droop:.35+i*.3,sq:.94-i*.04}),'snap'],[k+.35,RPp({exp:2,droop:.35+i*.3,sq:.92-i*.04})]));
KR.push([SLAM-.2,RPp({exp:2,droop:.9,sq:.88})],[SLAM,RPp({exp:4,droop:1,sq:.82,lean:.05}),'snap'],[SLAM+.5,RPp({exp:2,droop:1,sq:.84})],[B(9),RPp({exp:2,droop:1,sq:.85})],[CLIMAX-.7,RPp({exp:2,droop:1,sq:.86})],[CLIMAX-.35,RPp({exp:1,droop:.2,sq:.86})],[CLIMAX-.15,RPp({exp:1,sq:.8})],
 [CLIMAX,RPp({exp:3,gold:1,sq:1.12,run:1,lean:-.06}),'snap'],[CLIMAX+.5,RPp({exp:3,gold:1,run:1})],[27.5,RPp({exp:3,gold:1,run:.8})]);
KR.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1080,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.3,TPp({fhx:44,fhy:-110})],[4.45,TPp({fhx:60,fhy:-240,sq:1.05}),'snap'],[5.6,TPp({})],[5.8,TPp({a:0})],
 [B(5)-.4,TPp({a:0})],[B(5)-.1,TPp({a:1,fhx:90,fhy:-200})],...MK.map(k=>[k,TPp({fhx:100,fhy:-210,sq:1.03}),'snap']),[B(6),TPp({})],[WAVES[0],TPp({fhx:60,fhy:-250,sq:1.06}),'snap'],[LOCK,TPp({evil:1,fhx:60,fhy:-200})],[B(7)-.3,TPp({evil:1})],[B(7)-.1,TPp({a:0})],
 [B(8)-.4,TPp({a:0})],[B(8)-.1,TPp({a:1})],[SNAPS[1],TPp({evil:1,fhx:80,fhy:-160}),'snap'],[B(9),TPp({evil:1})],[B(9)+.4,TPp({a:0})],
 [CLIMAX+.2,TPp({a:0,x:1120})],[CLIMAX+.7,TPp({a:1,x:1080,mouth:1,fhx:80,fhy:-220})],[27.5,TPp({a:1,x:1080,mouth:1,fhx:80,fhy:-220})]];
const BPp=o=>Object.assign({x:880,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[B(7)-.3,BPp({a:0})],[B(7)-.05,BPp({a:1,exp:1,blush:1,fhx:60,fhy:-120})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.1,BPp({exp:0})],
 [SNAPS[0],BPp({exp:1,hop:.2}),'snap'],[SLAM,BPp({exp:2,droop:.7})],[B(9),BPp({exp:2,droop:.7})],[B(9)+.4,BPp({a:0})],
 [CLIMAX+.2,BPp({a:0,x:900})],[CLIMAX+.7,BPp({a:1,x:860,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[CLIMAX+1.2,BPp({a:1,x:860,exp:0,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:860,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1080,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[5.7,OPp({a:0})],[5.95,OPp({a:1,exp:1,fhx:110,fhy:-180})],[6.9,OPp({exp:0})],[7.3,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
const EP={name:'千里马',en:'THE SWIFT HORSE',epn:'第十五期',acc:'#7ab8ff',grad:['#ffffff','#cfe4ff','#8ab8ff'],glowC:'rgba(130,180,255,.85)',kwCol:'rgba(215,230,255,.92)',kw:'能干 · 没人看见 · 实力强 · 怀才不遇',slamCol:'#9ab8ff',
  words:['委屈','不甘','等待','埋没'],
  cams:[[0,520,620,1.35],[2.3,560,610,1.15],[2.67,680,580,.95],[5.33,680,580,.98],[7.4,640,570,1.03],[DROP,680,590,.94],[B(5),680,590,.97],[B(6),680,600,.98],[LOCK,650,600,1.02],[B(7),670,580,.98],[STAMP,670,570,1.0],[B(8),680,600,.96],[SLAM,660,620,.98],[B(9),580,700,1.1],[CLIMAX-.5,560,740,1.18],[CLIMAX,680,570,.92],[B(11),680,590,.95]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#060a1a','#1a2a5a','#80a8ff']],[B(5),['#080c18','#1a2848','#4a6890']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['能力',0],['超强',1]]],[[['什么活',0]],[['都能',0],['搞定',1]]],[[['可功劳',0]],[['总是',0],['别人的',1]]],[[['默默干活',0]],[['没人',0],['看见',1]]],[[['人称',0]],[['千里马',1]]],
   [[['一个人',0]],[['干三个人的',0],['活',1]]],[[['又快',0]],[['又',0],['好',1]]],
   [[['活是TA干的',0]],[['功是',0],['别人的',1]]],[[['升职名单',0]],[['没有',0],['TA',1]]],
   [[['好的一面',0]],[['实力',0],['过硬',1]]],[[['走到哪',0]],[['都',0],['不怕',1]]],
   [[['坏的一面',0]],[['只会',0],['闷头干',1]]],[[['等着伯乐',0]],[['等到',0],['心凉',1]]],
   [[['伯乐',0]],[['不会来了吗',1]]],[[['与其等人发现',0]],[['不如',0],['自己跑',1]]]],
  tags:[['01','超能干','#7ab8ff'],['02','没人看见',RED],['03','实力强',GOLD],['04','怀才不遇','#a0a8b8']],
  cl:['不等伯乐','自己跑'],endCap:[[['你的光',0]],[['自己',0],['点亮',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const ro=kfO(KR,T),to=kfO(KT,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const TG=tiger(to.x,GY,1.3,-1,to,to.a*endF,1)||{hx:to.x,hy:GY-300,fh:[to.x,GY-150]};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const rprog=t<2.67?seg(t,.4,2.5):1;const RG=horse(ro.x,GY,1.7,1,ro,endF,rprog);FOC=[RG.cx,RG.cy];
  if(ro.run>.3){const k=Math.floor(t*10);if(k%2==0){sparks(t,k/10,RG.fl[0],GY-6,6,k,260,.4,'#c8b8a0');sparks(t,k/10,RG.bl[0],GY-6,6,k+50,260,.4,'#c8b8a0');}}
  const bx=RG.hx+40,by=RG.hy-140,tbx=TG.hx-30,tby=TG.hy-120;
  if(t<DROP){bubble(bx,by,'今天也要好好干~',win(t,1.5,2.6,.1,.2),1,HC,-1);
    bubble(tbx,tby,'这活谁来干？',win(t,2.85,3.3,.06,.06),eBack(seg(t,2.85,3.0)),TC,1);
    bubble(bx,by,'我来！',win(t,3.3,4.3,.06,.12),eBack(seg(t,3.3,3.45)),'#7ab8ff',-1);
    bubble(tbx,tby,'功劳算我的哈~',win(t,4.45,5.6,.06,.15),eBack(seg(t,4.45,4.6)),TC,1);
    bubble(bx,by,'啊？',win(t,4.5,5.4,.06,.15),eBack(seg(t,4.5,4.65)),'#ff9a9a',-1);
    bubble(OG.hx-60,OG.top-40,'你这么能干还没升？',win(t,5.95,7.0,.04,.1),eBack(seg(t,5.95,6.1)),OC,1);
    proverb(t,'怀才不遇',RX-60,GY-680,1,'#7ab8ff',7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['方案','报表','PPT'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1000,820,eOut(p)),GY-640+i*80,lab[i]+' ✓',a*(1-seg(t,e-.2,e)),eBack(p),'#7ab8ff',(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by,['搞定！','又搞定！','全搞定！'][i],a,eBack(seg(t,k,k+.2)),'#7ab8ff',-1);});
    if(t>=B(5)&&t<MK[0])bubble(tbx,tby,'这些今天要~',a,eBack(seg(t,B(5),B(5)+.2)),TC,1);}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(tbx,tby,'方案是我做的！',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),TC,1);
    if(t>=LOCK&&t<B(7)){const p=seg(t,LOCK,LOCK+.25);ctx.save();ctx.globalAlpha=a;ctx.translate(840,GY-700);ctx.scale(eBack(p),eBack(p));ctx.fillStyle='#14100c';ctx.fillRect(-120,-70,240,170);ctx.restore();
      if(p>.3){glow(rectP(840-120,GY-770,840+120,GY-600),1,'#ffe0d0',2,a,10,false);ctx.save();ctx.globalAlpha=a;ctx.textAlign='center';ctx.font='900 30px '+SER;ctx.fillStyle=GOLD;ctx.fillText('升职名单',840,GY-728);ctx.font='700 28px '+SER;ctx.fillStyle='#fff';ctx.fillText('1. 笑面虎',840,GY-686);ctx.fillStyle='#888';ctx.fillText('2. ……',840,GY-646);ctx.restore();}
      crown(TG.hx,TG.hy-90,a*seg(t,LOCK+.1,LOCK+.3));}
    bigText(t,LOCK,B(7),RX+440,GY-830,'活全干了，功全没了',RED,56);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(BG.hx-40,BG.hy-110,'你也太厉害了！',a,eBack(seg(t,B(7),B(7)+.2)),BUN,1);
    if(t>=JABS[1]&&t<STAMP)bubble(bx,by,'小意思~',a,eBack(seg(t,JABS[1],JABS[1]+.2)),GOLD,-1);
    bigText(t,STAMP,B(8),RX+440,GY-830,'实力在身，走哪都不怕',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['闷头干','不吭声','等伯乐'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*230+60,GY-720-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(BG.hx-40,BG.hy-110,'你咋不争取？',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),BUN,1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(tbx,tby-40,'升职？下次吧~',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),TC,1);
    bigText(t,SLAM,SLAM+1.8,RX+440,GY-830,'你不说，谁知道你行','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-150,'……要等到什么时候',a*seg(t,B(9)+.9,B(9)+1.2),.9,HC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-60,'我自己跑！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(BG.hx-40,BG.hy-110,'好快！',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(tbx,tby,'这…是千里马？',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
