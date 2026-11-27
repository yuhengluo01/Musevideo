// ===== 当代人图鉴 · 工位养生 =====
const PC='#b0ff5a';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{lean:-.03,hd:0,fax:80,fay:-30,bax:-30,bay:60},...o});
const Z=o=>PP({...{lean:.04,hd:.15,fax:90,fay:-40,bax:40,bay:50,exp:0},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:0,sq:1.03}),'snap'],[5.8,M({exp:0})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:4}),'snap'],[7.6,M({exp:4})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:0})],[k,M({exp:0,sq:1.03,lean:(i-1)*.06,...([{fax:100,fay:-110},{fax:60,fay:-160,bax:-60,bay:-160},{fax:90,fay:-120,hd:-.15}][i]||{})}),'snap'],[k+.35,M({exp:0,...([{fax:100,fay:-110},{fax:60,fay:-160,bax:-60,bay:-160},{fax:90,fay:-120,hd:-.15}][i]||{})})]));
KP.push([B(6)-.1,M({exp:5})],[WAVES[0],M({exp:4,sq:1.05,oy:-10}),'snap'],[WAVES[0]+.4,Z({})],[WAVES[1],Z({exp:4,sq:1.03}),'snap'],[LOCK-.15,Z({})],[LOCK,Z({exp:2,sq:.92,hd:.35}),'snap'],[LOCK+.5,Z({exp:2,hd:.4,sq:.92})],[B(7)-.1,Z({exp:2,hd:.35})],[B(7)+.15,M({exp:0,blush:1})]);
JABS.forEach((k,i)=>KP.push([k,M({exp:0,blush:1,lean:i?.05:-.05,sq:1.03}),'snap'],[k+.4,M({exp:0,blush:1})]));
KP.push([STAMP,UP({exp:3,sq:1.06,blush:1}),'snap'],[STAMP+.6,M({exp:0,blush:1})],[B(8),M({exp:5})]);
SNAPS.forEach((k,i)=>KP.push([k-.1,M({exp:4,sq:.96-i*.04})],[k,M({exp:2,lean:.12+i*.08,hd:.4,sq:.92-i*.05}),'snap'],[k+.35,M({exp:2,lean:.12+i*.08,hd:.4,sq:.9-i*.05})]));
const SL={fax:20,fay:140,bax:-20,bay:140};
KP.push([SLAM-.2,M({exp:2,lean:.3,sq:.86})],[SLAM,PP({exp:4,lean:.1,hd:.5,sq:.8,...SL}),'snap'],[SLAM+.5,PP({exp:2,hd:.5,sq:.82,...SL})],[CLIMAX-.7,PP({exp:2,hd:.45,sq:.84,...SL})],[CLIMAX-.35,M({exp:5,hd:.1,sq:.9})],[CLIMAX-.15,M({exp:1,sq:.86})],
 [CLIMAX,UP({exp:0,sq:1.1,fay:-160,bay:-160,flx:40,blx:-40}),'snap'],[CLIMAX+.7,UP({exp:0,sq:1.04,flx:30,blx:-30})],[CLIMAX+1.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})],[27.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})]);
KP.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1100,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.6,TPp({})],[3.9,TPp({})],[4.15,TPp({a:0})],
 [WAVES[1]-.3,TPp({a:0})],[WAVES[1],TPp({a:1,evil:0,fhx:100,fhy:-220}),'snap'],[LOCK,TPp({evil:0})],[B(7)-.3,TPp({evil:0})],[B(7)-.1,TPp({a:0})],
 [CLIMAX+.3,TPp({a:0})],[CLIMAX+.8,TPp({a:1,mouth:1,fhx:80,fhy:-200})],[27.5,TPp({a:1,mouth:1,fhx:80,fhy:-200})]];
const BPp=o=>Object.assign({x:860,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[5.7,BPp({a:0})],[5.95,BPp({a:1,exp:1,fhx:70,fhy:-120})],[7.2,BPp({a:1})],[7.5,BPp({a:0})],
 [WAVES[0]-.3,BPp({a:0})],[WAVES[0],BPp({a:1,exp:0,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:0})],[B(7)-.2,BPp({exp:0})],[B(7)+.05,BPp({exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0})],[CLIMAX+.8,BPp({a:1,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function infoBox(x,y,a,txt,col,sh=0,sz=56){if(a<=.01)return;ctx.save();ctx.font='900 '+sz+'px '+SER;const w=Math.max(200,ctx.measureText(txt).width+70),h=sz*1.8;ctx.restore();x+=sh;
  ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.stroke();ctx.shadowBlur=18;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,x,y+sz*.32);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,255,210,${.3*a})`);g.addColorStop(1,'rgba(150,255,210,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];
const TX_={"i1": "（拧开保温杯）", "i2": "昨晚又熬夜了？", "i3": "没事，我泡了枸杞", "i4": "奶茶喝吗？", "i5": "…要三分糖！", "pv": "朋克养生", "pvi": 0, "lab1": ["枸杞", "眼保健操", "护肝片"], "lab1c": "#b0ff5a", "mk": ["再多泡点枸杞", "保护视力！", "吃片护肝的"], "w0": ["b", "奶茶到啦~"], "w1": ["t", "少喝点冰的！"], "lk": "喝完…再养生", "lkBig": "一手枸杞，一手奶茶", "j0": "身体是本钱~", "j1": "你好会照顾自己！", "stBig": "养生意识，拉满", "lab4": ["熬夜", "黑眼圈", "颈椎痛"], "s0": "怎么…还是好累", "s1": "你黑眼圈好重啊", "slBig": "枸杞救不了熬的夜", "d1": "……养了个寂寞", "d2": "今晚早睡！", "e1": "气色真好！", "e2": "精神满满！"};
const EP={"series": "打工人图鉴", "slogan": "每个工位，都有一个故事", "name": "工位养生", "en": "DESK WELLNESS", "epn": "第四十一期", "acc": "#b0ff5a", "grad": ["#ffffff", "#ecffd4", "#90e840"], "glowC": "rgba(176,255,90,.85)", "kwCol": "rgba(242,255,226,.92)", "kw": "保温杯泡枸杞 · 熬夜照旧 · 健康意识 · 养了个寂寞", "slamCol": "#d0f0a8", "words": ["熬夜", "黑眼圈", "颈椎", "焦虑"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0c1404','#2a4410','#90e840']],[B(5),['#080c04','#1a2410','#344a1e']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#0c1406','#4a6a2a','#ecffd4']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["工位", 0], ["养生", 1]]], [[["保温杯里", 0]], [["泡", 0], ["枸杞", 1]]], [[["熬最晚的夜", 0]], [["敷最贵的", 0], ["面膜", 1]]], [[["一边吃药", 0]], [["一边", 0], ["喝奶茶", 1]]], [[["这就是", 0]], [["工位养生", 1]]], [[["枸杞菊花", 0]], [["轮番", 0], ["上阵", 1]]], [[["护颈枕", 0]], [["人手", 0], ["一个", 1]]], [[["同事", 0]], [["递来", 0], ["奶茶", 1]]], [[["他", 0]], [["一口", 0], ["闷了", 1]]], [[["好的一面", 0]], [["有", 0], ["健康意识", 1]]], [[["至少", 0]], [["在", 0], ["努力", 1]]], [[["坏的一面", 0]], [["熬夜", 0], ["照旧", 1]]], [[["枸杞", 0]], [["救不了", 0], ["命", 1]]], [[["养生", 0]], [["不靠", 0], ["枸杞", 1]]], [[["早点睡", 0]], [["才是", 0], ["真的", 1]]]], tags:[['01',"保温杯泡枸杞",PC],['02',"熬夜照旧",RED],['03',"健康意识",GOLD],['04',"养了个寂寞",'#a0a8b8']], "cl": ["今晚早睡", "明天元气"], "endCap": [[["最好的养生", 0]], [["是", 0], ["睡够觉", 1]]]};
const PHONE=false;

function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}

function DODGE(t,k=180){return -k*eOut(seg(t,B(8)-.3,B(8)))*(1-eOut(seg(t,SLAM+.2,SLAM+.6)));}
const YS=[[2.67,'昨晚 2:00睡',1],[2.85,'枸杞 ×10',0],[4.45,'菊花茶 ✓',0],[5.95,'奶茶 +1',1],[6.4,'三分糖 ✓',0],[DROP,'朋克养生 ON',1],[MK[0],'枸杞 +20',0],[MK[1],'眼保健操',0],[MK[2],'护肝片 ✓',0],[B(6),'奶茶 +2',1],[B(7),'心态 平和',2],[B(8),'今晚 3:00睡',1],[SNAPS[1],'颈椎 报警',1],[CLIMAX,'23:00 早睡',2]];
function cup(x,y,s,a,col,t){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#0a1006';ctx.beginPath();ctx.roundRect(x-42*s,y-90*s,84*s,180*s,16*s);ctx.fill();ctx.restore();
  const R=(x0,y0,w,h)=>[[x0,y0],[x0+w,y0],[x0+w,y0+h],[x0,y0+h],[x0,y0]];glow(R(x-42*s,y-90*s,84*s,180*s),1,col,3,a,14,false);glow(R(x-46*s,y-118*s,92*s,28*s),1,col,3,a,10,false);
  glow([[x-42*s,y-50*s],[x+42*s,y-50*s]],1,col,1.6,a*.6,6,false);
  for(let i=0;i<7;i++){const r=rng(i+3);const px=x+(r()-.5)*56*s+Math.sin(t*1.5+i)*6*s,py=y-30*s+r()*100*s+Math.sin(t*2+i*1.7)*8*s;dot(px,py,5*s,'#ff5a4a',a);}
  for(let i=0;i<3;i++){const p=(t*.7+i/3)%1;const sx=x+(i-1)*24*s;const P=[];for(let k=0;k<=10;k++){const u=k/10;P.push([sx+Math.sin(u*6+t*3+i)*10*s,y-125*s-u*70*s-p*30*s]);}glow(P,1,'#ffffff',2,a*.5*Math.sin(p*Math.PI),8,false);}}
function tea(x,y,a,col){if(a<=.01)return;ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#140c06';ctx.beginPath();ctx.moveTo(x-34,y-50);ctx.lineTo(x+34,y-50);ctx.lineTo(x+26,y+50);ctx.lineTo(x-26,y+50);ctx.fill();ctx.restore();
  glow([[x-34,y-50],[x+34,y-50],[x+26,y+50],[x-26,y+50],[x-34,y-50]],1,col,3,a,12,false);glow([[x+6,y-50],[x+18,y-100]],1,col,4,a,8,false);for(let i=0;i<5;i++)dot(x-16+i*8,y+38-(i%2)*8,5,'#c08a5a',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(YS,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const gold=t>=CLIMAX||(t>=B(7)&&t<B(8)),red=t>=B(8)&&t<CLIMAX;const col=gold?GOLD:red?'#ff7a8a':PC;
  const ta=endF*Math.min(1,win(t,5.95,7.6,.1,.2)+win(t,WAVES[0],B(7)-.1,.1,.2));const cupInHand=ta<.5&&t<DROP;
  const ca=endF*seg(t,2.5,2.75)*(1-seg(t,B(11)-.2,B(11)+.2));
  if(cupInHand&&t>=2.5)cup(G.fh[0]+10,G.fh[1]-40,.8,ca,col,t);else cup(G.hc[0]-250+DODGE(t),G.hc[1]-100,1,ca,col,t);
  if(!cupInHand)tea(G.fh[0]+10,G.fh[1]-30,ta,'#ffb07a');
  const ey=endF*Math.min(1,win(t,2.67,4.4,.1,.1)+win(t,B(8),CLIMAX-.2,.2,.2));if(ey>.01){[-16,16].forEach(d=>glow(Q([G.hc[0]+d+14,G.hc[1]+14],[G.hc[0]+d+20,G.hc[1]+22],[G.hc[0]+d+26,G.hc[1]+14],6),1,'#7a6aa0',3,ey,6,false));}
  if(t>=SNAPS[1]&&t<SLAM+.5){const a=endF*seg(t,SNAPS[1],SNAPS[1]+.1);glow([[G.nk[0]-24,G.nk[1]-6],[G.nk[0]-10,G.nk[1]+6],[G.nk[0]-24,G.nk[1]+16],[G.nk[0]-10,G.nk[1]+28]],1,'#ff5a5a',4,a,14,false);}
  if(t>=CLIMAX&&t<CLIMAX+1.2)sparks(t,CLIMAX,G.hc[0]-250,G.hc[1]-100,26,3,620,.9,GOLD,true);}

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
