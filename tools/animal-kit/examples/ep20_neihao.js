// ===== 当代人图鉴 · 精神内耗 =====
const PC='#c4a8ff';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{hd:.12,fax:36,fay:-22,bax:34,bay:50},...o});
const Z=o=>PP({...{hd:.4,lean:.08,fax:10,fay:-60,bax:-10,bay:-62,exp:2},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:4,sq:1.03}),'snap'],[5.8,M({exp:4})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:2}),'snap'],[7.6,M({exp:2})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:4})],[k,M({exp:4,sq:1.03,lean:(i-1)*.06,...([][i]||{})}),'snap'],[k+.35,M({exp:4,...([][i]||{})})]));
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
 [WAVES[0]-.3,BPp({a:0})],[WAVES[0],BPp({a:1,exp:4,hop:.3,fhx:70,fhy:-120}),'snap'],[LOCK,BPp({exp:4})],[B(7)-.2,BPp({exp:0})],[B(7)+.05,BPp({exp:0,blush:1})],[JABS[1],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0})],[CLIMAX+.8,BPp({a:1,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:980,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[B(8)-.4,OPp({a:0})],[B(8)-.1,OPp({a:1,exp:1})],[SNAPS[1],OPp({exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[SLAM,OPp({exp:1,sweat:1})],[B(9),OPp({exp:1})],[B(9)+.4,OPp({a:0})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);
function infoBox(x,y,a,txt,col,sh=0,sz=56){if(a<=.01)return;ctx.save();ctx.font='900 '+sz+'px '+SER;const w=Math.max(200,ctx.measureText(txt).width+70),h=sz*1.8;ctx.restore();x+=sh;
  ctx.save();ctx.globalAlpha=a*.95;ctx.fillStyle='#0a0c14';ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.fill();ctx.restore();
  ctx.save();ctx.globalAlpha=a;ctx.strokeStyle=col;ctx.lineWidth=2.6;ctx.shadowColor=col;ctx.shadowBlur=14;ctx.beginPath();ctx.roundRect(x-w/2,y-h*.58,w,h,22);ctx.stroke();ctx.shadowBlur=18;ctx.font='900 '+sz+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.fillText(txt,x,y+sz*.32);ctx.restore();}
function screenGlow(G,a){if(a<=.01)return;const h=G.fh;const g=ctx.createRadialGradient(h[0],h[1]-30,0,h[0],h[1]-30,220);g.addColorStop(0,`rgba(150,255,210,${.3*a})`);g.addColorStop(1,'rgba(150,255,210,0)');ctx.save();ctx.globalCompositeOperation='lighter';ctx.fillStyle=g;ctx.fillRect(h[0]-240,h[1]-260,480,480);ctx.restore();}
const CAMS=[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,660,590,1.0],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]];
const TX_={"i1": "嗯…", "i2": "这方案…再看看", "i3": "他是不是不满意？", "i4": "早点休息哦~", "i5": "她是不是在暗示我？", "pv": "思前想后", "pvi": 2, "lab1": ["他为什么皱眉？", "是不是说错话了", "完了完了"], "lab1c": "#c4a8ff", "mk": ["是不是…", "会不会…", "完了…"], "w0": ["b", "你脸色好差…"], "w1": ["t", "刚才那事别在意~"], "lk": "我好累…可我啥也没干", "lkBig": "什么都没做，却累坏了", "j0": "这里我也想到了~", "j1": "你想得好周到！", "stBig": "心细如发，想得周全", "lab4": ["失眠", "拖延", "自我怀疑"], "s0": "我是不是不行…", "s1": "想那么多干嘛？", "slBig": "想太多，做太少", "d1": "……我是不是哪里不够好", "d2": "想不如做，干就完了！", "e1": "加油！", "e2": "其实挺好的！"};
const EP={"series": "当代人图鉴", "slogan": "每种状态，都是一种活法", "name": "精神内耗", "en": "OVERTHINKING", "epn": "第二十期", "acc": "#c4a8ff", "grad": ["#ffffff", "#e4d8ff", "#a888ff"], "glowC": "rgba(180,150,255,.85)", "kwCol": "rgba(236,228,255,.92)", "kw": "过度脑补 · 身累心更累 · 心思细腻 · 自我怀疑", "slamCol": "#c8b8ff", "words": ["焦虑", "怀疑", "失眠", "后悔"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#0c0618','#2a1850','#8060d0']],[B(5),['#08060e','#1c1430','#403068']],[B(6),['#100810','#301428','#803060']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#120a1a','#5a3a90','#ffd890']],[CLIMAX+1.4,['#0c0818','#3a2a6a','#d0c0ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["一句话", 0], ["想三天", 1]]], [[["别人随口", 0]], [["你却", 0], ["当真", 1]]], [[["躺在床上", 0]], [["脑子", 0], ["停不下来", 1]]], [[["什么都没做", 0]], [["却", 0], ["累坏了", 1]]], [[["这就是", 0]], [["精神内耗", 1]]], [[["一个眼神", 0]], [["脑补", 0], ["一场大戏", 1]]], [[["一句回复", 0]], [["反复", 0], ["琢磨", 1]]], [[["越想", 0]], [["越", 0], ["焦虑", 1]]], [[["身体躺平", 0]], [["脑子", 0], ["加班", 1]]], [[["好的一面", 0]], [["心思", 0], ["细腻", 1]]], [[["考虑问题", 0]], [["特别", 0], ["周全", 1]]], [[["坏的一面", 0]], [["想太多", 0], ["做太少", 1]]], [[["自己", 0]], [["跟自己", 0], ["打架", 1]]], [[["别人早就忘了", 0]], [["只有你", 0], ["还在想", 1]]], [[["放过自己", 0]], [["才能", 0], ["往前走", 1]]]], tags:[['01',"过度脑补",PC],['02',"身累心更累",RED],['03',"心思细腻",GOLD],['04',"自我怀疑",'#a0a8b8']], "cl": ["别想了", "去做吧"], "endCap": [[["你已经", 0]], [["做得", 0], ["很好了", 1]]]};
const PHONE=false;

const TR=[[0,0],[2.9,0],[3.4,40],[4.45,70],[5.95,95],[DROP,120],[MK[0],125],[MK[1],130],[MK[2],135],[WAVES[0],140],[LOCK,150],[B(7),60],[STAMP,0],[B(8),90],[SNAPS[0],115],[SNAPS[1],130],[SLAM,145],[B(9),130],[CLIMAX,140]];
function trAt(t){let i=0;while(i<TR.length-1&&TR[i+1][0]<=t)i++;const a=TR[i],b=TR[Math.min(i+1,TR.length-1)];if(a===b)return a[1];const p=eOut(seg(t,b[0]-.3,b[0]));return lerp(a[1],b[1],p);}
function tangle(x,y,R,a,t,col){if(a<=.01||R<4)return;const r=rng(7);const pts=[];for(let i=0;i<120;i++){const an=i*2.39+Math.sin(t*2.5+i*.7)*.35;const rr=R*(.25+.75*r());pts.push([x+Math.cos(an)*rr,y+Math.sin(an)*rr*.82]);}
  ctx.save();ctx.globalAlpha=a*.55;ctx.fillStyle='#0c0818';ctx.beginPath();ctx.ellipse(x,y,R*1.05,R*.9,0,0,TAU);ctx.fill();ctx.restore();glow(Q(pts[0],pts[1],pts[2],2).concat(pts),1,col,2.2,a,12,false);
  if(R>50){ctx.save();ctx.globalAlpha=a;ctx.font='900 '+Math.round(R*.55)+'px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=col;ctx.shadowBlur=16;ctx.fillText('？',x+Math.sin(t*6)*4,y+R*.2);ctx.restore();}}
function propFront(S,G,po){const{t,endF}=S;const R=trAt(t);const x=G.hc[0]-310,y=G.hc[1]-90;const col=t>=B(7)&&t<B(8)?GOLD:PC;
  if(R>4&&t<CLIMAX){[0,1,2].forEach(i=>{const f=(i+1)/4;dot(lerp(G.hc[0]-40,x+R*.6,f),lerp(G.hc[1]-50,y+R*.5,f),4+i*3,col,endF*.9);});tangle(x,y,R,endF,t,col);}
  if(t>=CLIMAX&&t<CLIMAX+1.4){shards(t,CLIMAX,x,y,endF,77,PC,26,900);}
  if(t>=CLIMAX+.2){const p=eOut(seg(t,CLIMAX+.2,CLIMAX+.7));glow([[x-160,y],[x-160+320*p,y]],1,GOLD,4,endF*(1-seg(t,B(11)-.2,B(11)+.3)),18,false);ctx.save();ctx.globalAlpha=endF*p*(1-seg(t,B(11)-.2,B(11)+.3));ctx.font='900 44px '+SER;ctx.textAlign='center';ctx.fillStyle='#fff';ctx.shadowColor=GOLD;ctx.shadowBlur=14;ctx.fillText('理清了！',x,y-30);ctx.restore();}}

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
