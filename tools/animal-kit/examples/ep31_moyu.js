// ===== 当代人图鉴 · 摸鱼达人 =====
const PC='#6ad8ff';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const M=o=>PP({...{hd:.28,fax:70,fay:20,bax:40,bay:60},...o});
const Z=o=>PP({...{hd:0,lean:-.05,fax:90,fay:-30,bax:-70,bay:30,exp:4},...o});
const UP=o=>PP({fax:60,fay:-150,bax:-60,bay:-150,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[2.9,M({exp:4})],[4.2,M({exp:5})],[4.45,M({exp:0,sq:1.03}),'snap'],[5.8,M({exp:0})],[5.95,M({exp:4,lean:-.05}),'snap'],[6.4,M({exp:0}),'snap'],[7.6,M({exp:0})],
 [DROP,UP({exp:4,sq:1.05}),'snap'],[DROP+1,M({exp:0})]];
MK.forEach((k,i)=>KP.push([k-.12,M({exp:0})],[k,M({exp:0,sq:1.03,lean:(i-1)*.06,...([][i]||{})}),'snap'],[k+.35,M({exp:0,...([][i]||{})})]));
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
 [WAVES[1]-.3,TPp({a:0})],[WAVES[1],TPp({a:1,evil:1,fhx:100,fhy:-220}),'snap'],[LOCK,TPp({evil:1})],[B(7)-.3,TPp({evil:1})],[B(7)-.1,TPp({a:0})],
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
const TX_={"i1": "（伸个懒腰）", "i2": "方案进度怎样了？", "i3": "在做了在做了！", "i4": "一起去接水吗？", "i5": "走！顺便下楼转转", "pv": "浑水摸鱼", "pvi": 3, "lab1": ["带薪如厕", "绕路接水", "假装开会"], "lab1c": "#6ad8ff", "mk": ["蹲个半小时~", "顺便遛个弯~", "听不懂但点头"], "w0": ["b", "老板来了！快切屏！"], "w1": ["t", "你在看什么呢？"], "lk": "我在…查资料！", "lkBig": "切屏速度，0.1秒", "j0": "休息好，才能干好~", "j1": "你心态真好！", "stBig": "劳逸结合，永不内耗", "lab4": ["堆积", "催促", "加班"], "s0": "完了…还剩这么多", "s1": "今晚能交吗？", "slBig": "摸鱼一时爽，加班火葬场", "d1": "……早知道就不摸了", "d2": "冲！专注一小时！", "e1": "好快！", "e2": "提前完成！"};
const EP={"series": "打工人图鉴", "slogan": "每个工位，都有一个故事", "name": "摸鱼达人", "en": "SLACKING OFF", "epn": "第三十一期", "acc": "#6ad8ff", "grad": ["#ffffff", "#d4f4ff", "#4ac0ff"], "glowC": "rgba(106,216,255,.85)", "kwCol": "rgba(222,246,255,.92)", "kw": "带薪摸鱼 · 秒切屏幕 · 劳逸结合 · 活越堆越多", "slamCol": "#b0e8ff", "words": ["心虚", "堆积", "加班", "焦虑"], cams:CAMS, sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#04101a','#0e3a58','#4ac0ff']],[B(5),['#040c12','#0e2434','#1e4860']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#08141c','#2a6a8a','#d4f4ff']],[B(11)+.6,['#040408','#0c0c14','#16161e']]], "caps": [[[["有一种人", 0]], [["上班", 0], ["像度假", 1]]], [[["打开文档", 0]], [["其实在", 0], ["刷视频", 1]]], [[["老板一来", 0]], [["秒", 0], ["切屏", 1]]], [[["一天下来", 0]], [["啥也", 0], ["没干", 1]]], [[["这就是", 0]], [["摸鱼达人", 1]]], [[["厕所", 0]], [["一蹲", 0], ["半小时", 1]]], [[["接水", 0]], [["绕", 0], ["三层楼", 1]]], [[["老板", 0]], [["突然", 0], ["出现", 1]]], [[["他", 0]], [["演技", 0], ["满分", 1]]], [[["好的一面", 0]], [["劳逸", 0], ["结合", 1]]], [[["心态", 0]], [["永远", 0], ["不崩", 1]]], [[["坏的一面", 0]], [["活儿", 0], ["越堆越多", 1]]], [[["下班前", 0]], [["疯狂", 0], ["补救", 1]]], [[["摸鱼一时爽", 0]], [["加班", 0], ["火葬场", 1]]], [[["该摸就摸", 0]], [["该干", 0], ["就干", 1]]]], tags:[['01',"带薪摸鱼",PC],['02',"秒切屏幕",RED],['03',"劳逸结合",GOLD],['04',"活越堆越多",'#a0a8b8']], "cl": ["摸鱼有度", "干活有劲"], "endCap": [[["效率", 0]], [["才是", 0], ["真自由", 1]]]};
const PHONE=true;

function stepAt(L,t){let r=null;for(const s of L){if(t>=s[0])r=s;}return r;}
function stepBox(L,x,y,t,a,cols,sz){const s=stepAt(L,t);if(!s||a<=.01)return;const col=cols[s[2]||0];const dt=t-s[0];const sh=(s[2]==1&&dt<.5)?Math.sin(t*80)*7*(1-dt/.5):0;const sc=eBack(seg(dt,0,.18));ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);ctx.translate(-x,-y);infoBox(x,y,a,s[1],col,sh,sz||52);ctx.restore();}

const FSX=[[2.67,'工作进度 0%',0],[2.85,'摸鱼时长 1h',0],[4.45,'工作进度 1%',1],[5.95,'摸鱼时长 2h',0],[6.4,'摸鱼时长 3h',1],[DROP,'摸鱼模式 ON',0],[MK[0],'如厕 30min',0],[MK[1],'接水 20min',0],[MK[2],'开会 发呆中',0],[B(6),'老板 靠近中',1],[B(7),'心情 满格',2],[B(8),'待办 ×37',1],[SNAPS[1],'距下班 10min',1],[CLIMAX,'效率 拉满',2]];
function fish(x,y,s,a,col,dir){if(a<=.01)return;const P=[];for(let i=0;i<=20;i++){const u=i/20*TAU;P.push([x+Math.cos(u)*30*s,y+Math.sin(u)*14*s]);}glow(P,1,col,2.6,a,12,false);glow([[x-28*s*dir,y],[x-50*s*dir,y-15*s],[x-50*s*dir,y+15*s],[x-28*s*dir,y]],1,col,2.6,a,12,false);dot(x+16*s*dir,y-3*s,3*s,'#fff',a);}
function propFront(S,G,po){const{t,endF}=S;stepBox(FSX,220,GY-470,t,endF*seg(t,2.6,2.85)*(1-seg(t,B(11)-.2,B(11)+.2)),[PC,'#ff7a8a',GOLD],44);
  const fa=endF*Math.min(1,win(t,2.67,4.3,.2,.2)+win(t,5.95,7.6,.2,.2)+win(t,DROP+.3,WAVES[0],.2,.05)+win(t,B(7)+.1,B(8)-.1,.2,.2)+win(t,CLIMAX+1.5,B(11)+.4,.3,.3));
  for(let i=0;i<3;i++){const an=t*1.6+i*TAU/3;const x=G.hc[0]+Math.cos(an)*175,y=G.hc[1]-20+Math.sin(an)*55;fish(x,y,1+.15*i,fa,i==1?GOLD:PC,-Math.sin(an)>=0?1:-1);}
  if(t>=WAVES[0]&&t<WAVES[0]+.8)shards(t,WAVES[0],G.hc[0],G.hc[1],endF,23,PC,16,700);
  const pn=t<B(8)?0:t<CLIMAX?Math.min(12,Math.floor((t-B(8))*4)+1):Math.max(0,12-Math.floor((t-CLIMAX)*12));
  for(let i=0;i<pn;i++){const y=GY-12-i*22,x=RX+175+Math.sin(i*1.7)*8;glow([[x-50,y],[x+50,y],[x+50,y-17],[x-50,y-17],[x-50,y]],1,'#a0a8b8',2.2,endF,8,false);}}

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
