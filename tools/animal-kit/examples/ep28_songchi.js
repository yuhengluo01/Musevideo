// ===== 当代人图鉴 · 松弛感 =====
const PC='#b8e878';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{lean:-.06,hd:-.05,fax:60,fay:-10,bax:-40,bay:70},...o});
const Z=o=>PP({...{lean:-.12,hd:-.1,fax:-30,fay:-150,bax:-70,bay:-150,exp:0},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:0,sq:1.03}),'snap'],[5.8,M({exp:0})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:0}),'snap'],[7.6,M({exp:0})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:0})],[k,M({exp:0,sq:1.03,lean:(i-1)*.06,...([{fax:60,fay:-10},{fax:100,fay:-60,lean:-.1},{fax:-30,fay:-150,bax:-70,bay:-150,lean:-.12}][i]||{})}),'snap'],[k+.35,M({exp:0,...([{fax:60,fay:-10},{fax:100,fay:-60,lean:-.1},{fax:-30,fay:-150,bax:-70,bay:-150,lean:-.12}][i]||{})})]));
KP.push([B(6)-.1,M({exp:5})],[WAVES[0],M({exp:4,sq:1.05,oy:-10}),'snap'],[WAVES[0]+.4,Z({})],[WAVES[1],Z({exp:4,sq:1.03}),'snap'],[LOCK-.15,Z({})],[LOCK,Z({exp:2,sq:.92,hd:.35}),'snap'],[LOCK+.5,Z({exp:2,hd:.4,sq:.92})],[B(7)-.1,Z({exp:2,hd:.35})],[B(7)+.15,M({exp:0,blush:1})]);
JABS.forEach((k,i)=>KP.push([k,M({exp:0,blush:1,lean:i?.05:-.05,sq:1.03}),'snap'],[k+.4,M({exp:0,blush:1})]));
KP.push([STAMP,UP({exp:3,sq:1.06,blush:1}),'snap'],[STAMP+.6,M({exp:0,blush:1})],[B(8),M({exp:5})]);
SNAPS.forEach((k,i)=>KP.push([k-.1,M({exp:4,sq:.96-i*.04})],[k,M({exp:2,lean:.12+i*.08,hd:.4,sq:.92-i*.05}),'snap'],[k+.35,M({exp:2,lean:.12+i*.08,hd:.4,sq:.9-i*.05})]));
const SL={fax:20,fay:140,bax:-20,bay:140};
KP.push([SLAM-.2,M({exp:2,lean:.3,sq:.86})],[SLAM,PP({exp:4,lean:.1,hd:.5,sq:.8,...SL}),'snap'],[SLAM+.5,PP({exp:2,hd:.5,sq:.82,...SL})],[CLIMAX-.7,PP({exp:2,hd:.45,sq:.84,...SL})],[CLIMAX-.35,M({exp:5,hd:.1,sq:.9})],[CLIMAX-.15,M({exp:1,sq:.86})],
 [CLIMAX,UP({exp:1,sq:1.1,fay:-160,bay:-160,flx:40,blx:-40}),'snap'],[CLIMAX+.7,UP({exp:0,sq:1.04,flx:30,blx:-30})],[CLIMAX+1.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})],[27.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})]);
KP.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1100,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.6,TPp({})],[3.9,TPp({})],[4.15,TPp({a:0})],
 [WAVES[1]-.3,TPp({a:0})],[WAVES[1],TPp({a:1,evil:0,fhx:100,fhy:-220}),'snap'],[LOCK,TPp({evil:0})],[B(7)-.3,TPp({evil:0})],[B(7)-.1,TPp({a:0})],
 [CLIMAX+.3,TPp({a:0})],[CLIMAX+.8,TPp({a:1,mouth:1,fhx:80,fhy:-200})],[27.5,TPp({a:1,mouth:1,fhx:80,fhy:-200})]];
const BPp=o=>Object.assign({x:860,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[5.7,BPp({a:0})],[5.95,BPp({a:1,exp:1,fhx:70,fhy:-120})],[7.2,BPp({a:1})],[7.5,BPp({a:0})],
 [WAVES[0]-.3,BPp({a:0})],[WAVES[0],BPp({a:1,exp:1,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:1})],[B(7)-.2,BPp({exp:0})],[B(7)+.05,BPp({exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0})],[CLIMAX+.8,BPp({a:1,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function infoBox(x,y,a,txt,col,sh=0,sz=56){if(a<=.01)return;ctx.save();ctx.font='900 '+sz+'px '+SER;const w=Math.max(200,ctx.measureText(txt).width+70),h=sz*1.8;ctx.restore();x+=sh;
  ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.stroke();ctx.shadowBlur=18;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,x,y+sz*.32);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,255,210,${.3*a})`);g.addColorStop(1,'rgba(150,255,210,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];
const TX_={"i1": "（伸个懒腰）", "i2": "完了完了要迟到了！", "i3": "不急，来得及~", "i4": "方案被毙了怎么办！", "i5": "再改呗~", "pv": "气定神闲", "pvi": 0, "lab1": ["航班延误", "方案被毙", "堵车两小时"], "lab1c": "#b8e878", "mk": ["喝杯茶~", "再改呗~", "听首歌~"], "w0": ["b", "你怎么一点都不急！"], "w1": ["t", "明天就要交了！"], "lk": "急也没用呀~", "lkBig": "你急你的，我稳我的", "j0": "我来，别慌", "j1": "有你在好安心~", "stBig": "情绪稳定，就是实力", "lab4": ["不上进", "太佛系", "没心没肺"], "s0": "我…是不是太慢了", "s1": "你怎么一点不着急？", "slBig": "松弛，被当成了躺平", "d1": "……慢一点，就错了吗", "d2": "松弛，但不松懈！", "e1": "好从容！", "e2": "佩服佩服！"};
const EP={"series": "当代人图鉴", "slogan": "每种状态，都是一种活法", "name": "松弛感", "en": "EASYGOING", "epn": "第二十八期", "acc": "#b8e878", "grad": ["#ffffff", "#e8f8d0", "#98d850"], "glowC": "rgba(184,232,120,.85)", "kwCol": "rgba(240,252,226,.92)", "kw": "天塌不慌 · 稳如泰山 · 情绪稳定 · 被说佛系", "slamCol": "#d0f0a8", "words": ["质疑", "催促", "比较", "焦虑"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0a1404','#2a4a14','#98d850']],[B(5),['#080c06','#1a2814','#3a5a2a']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0e1408','#4a7a2a','#e0f8c0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["天塌了", 0], ["也不慌", 1]]], [[["航班延误", 0]], [["他在", 0], ["喝茶", 1]]], [[["方案被毙", 0]], [["他说", 0], ["再改呗", 1]]], [[["别人焦虑", 0]], [["他在", 0], ["享受", 1]]], [[["这就是", 0]], [["松弛感", 1]]], [[["不内耗", 0]], [["不", 0], ["攀比", 1]]], [[["慢慢来", 0]], [["反而", 0], ["更快", 1]]], [[["大家", 0]], [["急得", 0], ["跳脚", 1]]], [[["他", 0]], [["稳如", 0], ["泰山", 1]]], [[["好的一面", 0]], [["情绪", 0], ["稳定", 1]]], [[["关键时刻", 0]], [["最", 0], ["靠得住", 1]]], [[["坏的一面", 0]], [["被说", 0], ["不上进", 1]]], [[["被当成", 0]], [["没心", 0], ["没肺", 1]]], [[["松弛不是躺平", 0]], [["是", 0], ["想明白了", 1]]], [[["该冲的时候", 0]], [["一点", 0], ["不含糊", 1]]]], tags:[['01',"天塌不慌",PC],['02',"稳如泰山",RED],['03',"情绪稳定",GOLD],['04',"被说佛系",'#a0a8b8']], "cl": ["松而不散", "从容向前"], "endCap": [[["慢下来", 0]], [["也能", 0], ["到达", 1]]]};
const PHONE=false;

function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}

const HR=[[2.67,'心率 62',0],[2.85,'别人 心率 140',1],[4.45,'我 心率 62',0],[5.95,'别人 心率 160',1],[6.4,'我 心率 62',0],[DROP,'心率 62',2],[MK[0],'航班延误 3h',1],[MK[1],'方案 第5版',1],[MK[2],'堵车 2h',1],[B(6),'全组 心率 150',1],[B(7),'危机 已解除',2],[B(8),'考评：太佛系',1],[SNAPS[1],'被催 第9次',1],[CLIMAX,'松弛 且有力',2]];
function cup(G,a,t){if(a<=.01)return;const h=G.fh,s=G.s;const x=h[0]+6*s,y=h[1]-6*s;const P=[[x-16*s,y-24*s],[x-12*s,y+6*s],[x+12*s,y+6*s],[x+16*s,y-24*s]];ctx.save();ctx.globalAlpha=a*.8;ctx.fillStyle='#0e1408';ctx.beginPath();P.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.fill();ctx.restore();glow(P,1,PC,2.6,a,12,false);glow(circ(x+20*s,y-10*s,7*s,9*s,14),1,PC,2.2,a,8,false);
  for(let i=0;i<3;i++){const p=((t*.6+i/3)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI)*.8;ctx.strokeStyle='#e8f8d0';ctx.lineWidth=2.6;ctx.shadowColor=PC;ctx.shadowBlur=10;ctx.beginPath();for(let k=0;k<=8;k++){const yy=y-30*s-p*70-k*5,xx=x-8*s+i*8*s+Math.sin(k*.9+t*3+i)*6;k?ctx.lineTo(xx,yy):ctx.moveTo(xx,yy);}ctx.stroke();ctx.restore();}}
function rush(a,t){if(a<=.01)return;for(let i=0;i<5;i++){const p=((t*1.2+i/5)%1);ctx.save();ctx.globalAlpha=a*Math.sin(p*Math.PI);ctx.font='900 '+(36+i*4)+'px '+SER;ctx.fillStyle='#ff8a7a';ctx.shadowColor='#ff5a4a';ctx.shadowBlur=10;ctx.textAlign='center';ctx.fillText('急',900+Math.sin(i*2.1)*140,GY-260-p*240);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;stepBox(HR,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const ca=endF*((t>=2.67&&t<4.2)||(t>=4.45&&t<5.9)||(t>=DROP+1&&t<B(6))||(t>=B(7)+.15&&t<STAMP)||(t>=CLIMAX+1.5)?1:0);if(po.fay>-40&&po.fay<40)cup(G,ca,t);
  const ra=endF*Math.min(1,win(t,2.85,4.1,.15,.2)+win(t,5.95,6.4,.1,.1)+win(t,WAVES[0],B(7),.15,.2));rush(ra,t);}

function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const po=kfS(KP,T),to=kfO(KT,T),bo=kfO(KB,T),oo=kfO(KO,T);
  if(typeof propBack=='function')propBack(S);
  const TG=tiger(to.x,GY,1.3,-1,to,to.a*endF,1)||{hx:to.x,hy:GY-300};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const pprog=t<2.67?seg(t,.4,2.5):1;po.a=endF;const col=t>=CLIMAX?mixc(PC,GOLD,seg(t,CLIMAX,CLIMAX+.3)):PC;
  const G=drawStick(po,t,col,pprog)||{hc:[RX,GY-560],fh:[RX+60,GY-300],nk:[RX,GY-500]};FOC=[G.nk[0],G.nk[1]+40];
  if(PHONE){const phA=endF*((t>=2.9&&t<DROP-.05)||(t>=DROP+.6&&t<B(6)-.1)||(t>=B(7)+.15&&t<STAMP)||(t>=B(8)&&t<SLAM-.1)||(t>=CLIMAX-.35&&t<CLIMAX)?1:0);if(phA>0&&po.fay>0&&po.fay<60){screenGlow(G,phA);phone(G,phA);}}
  if(typeof propFront=='function')propFront(S,G,po);
  const bx=G.hc[0]+60,by=G.hc[1]-110,tbx=TG.hx-30,tby=TG.hy-120,kbx=BG.hx-40,kby=BG.hy-110,obx=OG.hx-60,oby=OG.top-40;
  const W_=(who)=>who=='t'?[tbx,tby,TC,1]:who=='b'?[kbx,kby,BUN,1]:who=='o'?[obx,oby-40,OC,1]:[bx,by-40,PC,-1];
  if(t<DROP){bubble(bx,by,TX_.i1,win(t,1.5,2.6,.1,.2),1,PC,-1);
    bubble(tbx,tby,TX_.i2,win(t,2.85,3.9,.06,.1),eBack(seg(t,2.85,3.0)),TC,1);
    bubble(bx,by-40,TX_.i3,win(t,4.45,5.8,.06,.15),eBack(seg(t,4.45,4.6)),PC,-1);
    bubble(kbx,kby,TX_.i4,win(t,5.95,6.4,.04,.05),eBack(seg(t,5.95,6.1)),BUN,1);
    bubble(bx,by-40,TX_.i5,win(t,6.4,7.0,.05,.1),eBack(seg(t,6.4,6.55)),PC,-1);
    proverb(t,TX_.pv,RX-80,GY-780,TX_.pvi,PC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6)-.1;if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1010,840,eOut(p)),GY-700+i*80,TX_.lab1[i],a*(1-seg(t,e-.2,e)),eBack(p),TX_.lab1c||PC,(i-1)*.08);}
      if(t>=k&&t<e)bubble(bx,by-40,TX_.mk[i],a,eBack(seg(t,k,k+.2)),PC,-1);});}
  if(b2>0){const a=b2*endF;let q=W_(TX_.w0[0]);if(t>=WAVES[0]&&t<B(7))bubble(q[0],q[1],TX_.w0[1],a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),q[2],q[3]);
    q=W_(TX_.w1[0]);if(t>=WAVES[1]&&t<B(7))bubble(q[0],q[1],TX_.w1[1],a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),q[2],q[3]);
    if(t>=LOCK&&t<B(7))bubble(bx,by-40,TX_.lk,a,eBack(seg(t,LOCK,LOCK+.2)),'#9ab8ff',-1);
    bigText(t,LOCK,B(7),RX+420,GY-800,TX_.lkBig,RED,56);}
  if(b3>0){const a=b3*endF;if(t>=JABS[1]&&t<STAMP)bubble(kbx,kby,TX_.j1,a,eBack(seg(t,JABS[1],JABS[1]+.2)),BUN,1);
    if(t>=B(7)&&t<STAMP)bubble(bx,by-40,TX_.j0,a,eBack(seg(t,B(7),B(7)+.2)),GOLD,-1);
    if(t>=STAMP)[0,1,2,3,4].forEach(i=>heartF(G.hc[0]-160+i*80,G.hc[1]-150-Math.sin(i*1.3)*40-(t-STAMP)*40,1.2,'#ffcf6a',a*seg(t,STAMP+i*.06,STAMP+i*.06+.2)*(1-seg(t,B(8)-.4,B(8)))));
    bigText(t,STAMP,B(8),RX+420,GY-800,TX_.stBig,GOLD,56);}
  if(b4>0){const a=b4*endF;[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*240+80,GY-740-(i%2)*80,TX_.lab4[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[1]&&t<SLAM)bubble(obx,oby-40,TX_.s1,a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    if(t>=SNAPS[0]&&t<SLAM)bubble(bx,by-40,TX_.s0,a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),'#9ab8ff',-1);
    bigText(t,SLAM,SLAM+1.8,RX+420,GY-800,TX_.slBig,'#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-40,TX_.d1,a*seg(t,B(9)+.9,B(9)+1.2),.9,PC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-40,TX_.d2,a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(kbx,kby,TX_.e1,a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(tbx,tby,TX_.e2,a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
