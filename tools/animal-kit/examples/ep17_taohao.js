// ===== 当代人图鉴 · 讨好型人格 =====
const PC='#ffb8d0';
const RX=500;
const PP=o=>SP({x:RX,f:1,...o});
const BOW=o=>PP({lean:.32,hd:.25,fax:70,fay:40,bax:40,bay:60,...o});
const KP=[[0,PP({exp:0})],[2.67,PP({exp:0})],[3.05,PP({exp:4})],[3.3,BOW({exp:0}),'snap'],[4.2,PP({exp:0,fax:90,fay:-20})],[4.45,PP({exp:4})],[4.66,BOW({exp:0}),'snap'],[5.6,PP({exp:0,fax:90,fay:-20})],[5.95,PP({exp:5})],[6.15,PP({exp:0,lean:.1,fax:60,fay:-60,bax:-60,bay:-60}),'snap'],[7.6,PP({exp:0})],
 [DROP,BOW({exp:0,lean:.4,sq:1.02}),'snap'],[DROP+1,PP({exp:0,fax:90,fay:-20})]];
MK.forEach((k,i)=>KP.push([k-.12,PP({exp:4})],[k,BOW({exp:0,lean:.3+i*.05}),'snap'],[k+.35,PP({exp:0,fax:90,fay:-20})]));
KP.push([B(6),PP({exp:0})],[WAVES[0],BOW({exp:0}),'snap'],[WAVES[1],BOW({exp:0,lean:.4}),'snap'],[LOCK-.15,PP({exp:0,fax:90,fay:-20})],[LOCK,PP({exp:2,lean:-.05,hd:.3,sq:.95,fax:30,fay:150,bax:-30,bay:150}),'snap'],[LOCK+.6,PP({exp:2,hd:.35,sq:.94,fax:30,fay:150,bax:-30,bay:150})],[B(7)-.1,PP({exp:2,hd:.3})],[B(7)+.15,PP({exp:0})]);
JABS.forEach((k,i)=>KP.push([k,PP({exp:0,blush:1,fax:100,fay:-60,lean:i?.06:-.06}),'snap'],[k+.4,PP({exp:0,blush:1})]));
KP.push([STAMP,PP({exp:3,blush:1,fax:110,fay:-120,bax:-90,bay:-120,sq:1.05}),'snap'],[STAMP+.6,PP({exp:0,blush:1,fax:90,fay:-20})],[B(8),PP({exp:0})]);
SNAPS.forEach((k,i)=>KP.push([k-.1,PP({exp:4,sq:.96-i*.04})],[k,BOW({exp:5,lean:.38+i*.06,sq:.92-i*.05}),'snap'],[k+.35,BOW({exp:2,lean:.36+i*.06,sq:.9-i*.05})]));
KP.push([SLAM-.2,BOW({exp:2,lean:.45,sq:.84})],[SLAM,PP({exp:4,lean:.1,hd:.5,sq:.8,fax:20,fay:140,bax:-20,bay:140,flx:30,blx:-30}),'snap'],[SLAM+.5,PP({exp:2,hd:.5,sq:.82,fax:20,fay:140,bax:-20,bay:140})],[B(9),PP({exp:2,hd:.5,sq:.82,fax:20,fay:140,bax:-20,bay:140})],[CLIMAX-.7,PP({exp:2,hd:.45,sq:.84,fax:20,fay:140,bax:-20,bay:140})],[CLIMAX-.35,PP({exp:5,hd:0,sq:.9})],[CLIMAX-.15,PP({exp:1,sq:.86})],
 [CLIMAX,PP({exp:1,sq:1.08,lean:-.06,fax:150,fay:-40,flx:50,blx:-50}),'snap'],[CLIMAX+.6,PP({exp:0,sq:1.04,fax:150,fay:-40,flx:40,blx:-40})],[CLIMAX+1.4,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})],[27.5,PP({exp:0,fax:90,fay:-20,flx:30,blx:-30})]);
KP.sort((a,b)=>a[0]-b[0]);
const TPp=o=>Object.assign({x:1100,a:1,evil:0,happy:1,mouth:0,fhx:44,fhy:-110,bhx:-46,bhy:-110,knife:0,walk:0,crack:0,lean:0,sq:1},o);
const KT=[[0,TPp({a:0})],[2.55,TPp({a:0})],[2.8,TPp({a:1,fhx:90,fhy:-200})],[3.3,TPp({mouth:1}),'snap'],[4.2,TPp({a:1})],[4.4,TPp({a:0})],
 [B(5)-.4,TPp({a:0})],[B(5)-.1,TPp({a:1})],[MK[0],TPp({fhx:100,fhy:-210}),'snap'],[MK[0]+.4,TPp({})],[B(6),TPp({})],[WAVES[0],TPp({fhx:100,fhy:-220,sq:1.04}),'snap'],[LOCK-.3,TPp({mouth:1})],[LOCK-.1,TPp({a:0})],
 [B(8)-.4,TPp({a:0})],[B(8)-.1,TPp({a:1})],[SNAPS[0],TPp({evil:1,fhx:100,fhy:-220}),'snap'],[SLAM,TPp({evil:1})],[B(9),TPp({evil:1})],[B(9)+.4,TPp({a:0})],
 [CLIMAX+.1,TPp({a:0})],[CLIMAX+.4,TPp({a:1,mouth:0,sq:.92,fhx:30,fhy:-200,bhx:-30,bhy:-200}),'snap'],[CLIMAX+1.6,TPp({a:1,fhx:60,fhy:-160})],[27.5,TPp({a:1,fhx:60,fhy:-160})]];
const BPp=o=>Object.assign({x:900,a:1,exp:0,hop:0,droop:0,fhx:30,fhy:-70,bhx:-28,bhy:-60,blush:0,dir:-1,walk:0},o);
const KB=[[0,BPp({a:0})],[4.2,BPp({a:0})],[4.4,BPp({a:1,exp:0,fhx:70,fhy:-120})],[4.66,BPp({exp:0,hop:.3,blush:1}),'snap'],[5.4,BPp({exp:0})],[5.7,BPp({a:0})],
 [B(5)-.4,BPp({a:0})],[B(5)-.1,BPp({a:1})],[MK[1],BPp({exp:0,hop:.3,fhx:70,fhy:-120}),'snap'],[MK[1]+.4,BPp({})],[B(6),BPp({})],[WAVES[1],BPp({exp:0,hop:.3,blush:1}),'snap'],[LOCK-.3,BPp({})],[LOCK-.1,BPp({a:0})],
 [B(7)-.3,BPp({a:0})],[B(7)-.05,BPp({a:1,exp:0,blush:1})],[JABS[0],BPp({exp:0,hop:.3,blush:1,fhx:70,fhy:-130}),'snap'],[B(8)-.3,BPp({exp:0})],[B(8)-.1,BPp({a:0})],
 [CLIMAX+.3,BPp({a:0,x:860})],[CLIMAX+.8,BPp({a:1,x:860,exp:0,hop:.5,blush:1,fhx:60,fhy:-140})],[27.5,BPp({a:1,x:860,exp:0,blush:1,fhx:60,fhy:-140})]];
const OPp=o=>Object.assign({x:1100,dir:-1,a:1,exp:0,sweat:0,fhx:50,fhy:-120,bhx:-50,bhy:-120,walk:0,lean:0,sq:1,mouth:0,ring:1},o);
const KO=[[0,OPp({a:0})],[5.7,OPp({a:0})],[5.95,OPp({a:1,exp:0,fhx:110,fhy:-170})],[7.2,OPp({a:1})],[7.5,OPp({a:0})],
 [B(5)-.4,OPp({a:0,x:1260})],[MK[2]-.3,OPp({a:0,x:1260})],[MK[2],OPp({a:1,x:1260,fhx:110,fhy:-180}),'snap'],[B(6)-.3,OPp({a:1,x:1260})],[B(6)-.1,OPp({a:0,x:1260})],
 [B(8)-.4,OPp({a:0,x:840})],[B(8)-.1,OPp({a:1,x:840,exp:1})],[SNAPS[1],OPp({x:840,exp:1,sweat:1,fhx:110,fhy:-180}),'snap'],[B(9),OPp({x:840,exp:1})],[B(9)+.4,OPp({a:0,x:840})],[27.5,OPp({a:0})]];
KT.sort((a,b)=>a[0]-b[0]);KB.sort((a,b)=>a[0]-b[0]);KO.sort((a,b)=>a[0]-b[0]);
function okStamp(x,y,a,sc,rot){if(a<=.01)return;ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.globalAlpha=a;ctx.strokeStyle=PC;ctx.lineWidth=5;ctx.shadowColor=PC;ctx.shadowBlur=16;ctx.beginPath();ctx.arc(0,0,58,0,TAU);ctx.stroke();ctx.font='900 44px '+SER;ctx.textAlign='center';ctx.fillStyle=PC;ctx.fillText('好的',0,15);ctx.restore();}
const EP={series:'当代人图鉴',slogan:'每种状态，都是一种活法',name:'讨好型人格',en:'PEOPLE PLEASER',epn:'第十七期',acc:PC,grad:['#ffffff','#ffd8e6','#ff9ac0'],glowC:'rgba(255,160,200,.85)',kwCol:'rgba(255,230,240,.92)',kw:'不会拒绝 · 委屈自己 · 人缘好 · 怕得罪人',slamCol:'#ffb0c8',
  words:['委屈','内耗','讨好','疲惫'],
  cams:[[0,520,560,1.25],[2.3,560,580,1.08],[2.67,700,560,.92],[5.33,700,560,.95],[7.4,660,550,1.0],[DROP,700,570,.92],[B(5),700,570,.94],[B(6),700,580,.95],[LOCK,620,600,1.04],[B(7),690,570,.95],[STAMP,690,560,.97],[B(8),700,580,.94],[SLAM,680,600,.96],[B(9),560,660,1.08],[CLIMAX-.5,540,700,1.16],[CLIMAX,700,560,.9],[B(11),700,580,.93]],
  sky:[[0,['#04060c','#0a0e18','#141a28']],[DROP,['#140814','#4a2040','#ff98c0']],[B(5),['#100a14','#30203a','#804870']],[B(6),['#100808','#30141a','#803040']],[B(7),['#140e06','#5a4020','#f0c070']],[B(8),['#08080c','#18161e','#36303e']],[B(9),['#040506','#0e1012','#1c1e22']],[CLIMAX,['#1a1008','#a06020','#ffd890']],[CLIMAX+1.4,['#140c04','#6a4a1a','#ffe0a0']],[B(11)+.6,['#040408','#0c0c14','#16161e']]],
  caps:[[[['有一种人',0]],[['永远在说',0],['好的',1]]],[[['别人开口',0]],[['从不',0],['拒绝',1]]],[[['自己的事',0]],[['永远',0],['排最后',1]]],[[['最怕',0]],[['别人不高兴',1]]],[[['这就是',0]],[['讨好型人格',1]]],
   [[['别人的请求',0]],[['来者',0],['不拒',1]]],[[['心里不愿意',0]],[['嘴上',0],['没问题',1]]],
   [[['人人都夸',0]],[['你人真好',1]]],[[['深夜一个人',0]],[['累到',0],['崩溃',1]]],
   [[['好的一面',0]],[['温柔',0],['体贴',1]]],[[['到哪都是',0]],[['好人缘',1]]],
   [[['坏的一面',0]],[['不敢',0],['说不',1]]],[[['你的好',0]],[['成了',0],['应该的',1]]],
   [[['你那么在意别人',0]],[['谁在意',0],['你',1]]],[[['拒绝别人',0]],[['不是',0],['坏人',1]]]],
  tags:[['01','不会拒绝',PC],['02','委屈自己',RED],['03','人缘好',GOLD],['04','怕得罪人','#a0a8b8']],
  cl:['你可以','说不'],endCap:[[['对自己好',0]],[['也是一种',0],['善良',1]]]};
function epWorld(S){const{t,T,endF,b1,b2,b3,b4,dark}=S;
  const po=kfS(KP,T),to=kfO(KT,T),bo=kfO(KB,T),oo=kfO(KO,T);
  const TG=tiger(to.x,GY,1.3,-1,to,to.a*endF,1)||{hx:to.x,hy:GY-300};
  const BG=bunny(bo.x,GY,1.35,bo.dir,bo,bo.a*endF,1)||{hx:bo.x,hy:GY-170};
  const OG=ox(oo.x,GY,1.2,oo.dir,oo,oo.a*endF,1)||{hx:oo.x,hy:GY-290,top:GY-400};
  const pprog=t<2.67?seg(t,.4,2.5):1;po.a=endF;const col=t>=CLIMAX?mixc(PC,GOLD,seg(t,CLIMAX,CLIMAX+.3)):PC;
  const G=drawStick(po,t,col,pprog)||{hc:[RX,GY-560],fh:[RX+60,GY-300],nk:[RX,GY-500]};FOC=[G.nk[0],G.nk[1]+40];
  const bx=G.hc[0]+60,by=G.hc[1]-110,tbx=TG.hx-30,tby=TG.hy-120,kbx=BG.hx-40,kby=BG.hy-110,obx=OG.hx-60,oby=OG.top-40;
  if(t>=CLIMAX&&t<CLIMAX+1.6){const p=seg(t,CLIMAX,CLIMAX+.25);ctx.save();ctx.globalAlpha=endF*(1-seg(t,CLIMAX+1.2,CLIMAX+1.6));ctx.translate(G.fh[0]+40,G.fh[1]);ctx.scale(eBack(p),eBack(p));ctx.strokeStyle=GOLD;ctx.lineWidth=6;ctx.shadowColor=GOLD;ctx.shadowBlur=20;ctx.beginPath();ctx.arc(0,0,60,0,TAU);ctx.moveTo(-42,-42);ctx.lineTo(42,42);ctx.stroke();ctx.restore();}
  if(t<DROP){bubble(bx,by,'好的好的~',win(t,1.5,2.6,.1,.2),1,PC,-1);
    bubble(tbx,tby,'周末来加个班？',win(t,2.85,3.3,.06,.06),eBack(seg(t,2.85,3.0)),TC,1);
    bubble(bx,by,'好的！',win(t,3.3,4.3,.06,.12),eBack(seg(t,3.3,3.45)),PC,-1);
    bubble(kbx,kby,'帮我带杯奶茶~',win(t,4.42,4.66,.05,.05),eBack(seg(t,4.42,4.55)),BUN,1);
    bubble(bx,by,'没问题！',win(t,4.66,5.6,.06,.15),eBack(seg(t,4.66,4.8)),PC,-1);
    bubble(obx,oby,'你没意见吧？',win(t,5.95,6.2,.04,.05),eBack(seg(t,5.95,6.1)),OC,1);
    bubble(bx,by,'我都行~',win(t,6.2,7.0,.05,.1),eBack(seg(t,6.2,6.35)),PC,-1);
    proverb(t,'有求必应',RX-80,GY-760,3,PC,7.0,.2,80);}
  if(b1>0){const a=b1*endF;const lab=['帮我改PPT','替我值个班','借我点钱'];MK.forEach((k,i)=>{const e=i<2?MK[i+1]:B(6);if(t>=k-.3&&t<e){const p=seg(t,k-.3,k);wordBox(lerp(1000,830,eOut(p)),GY-700+i*80,lab[i],a*(1-seg(t,e-.2,e)),eBack(p),'#ff9a9a',(i-1)*.08);}
      if(t>=k&&t<e){bubble(bx,by,['好的！','没问题！','行行行！'][i],a,eBack(seg(t,k,k+.2)),PC,-1);}});
    MK.forEach((k,i)=>{if(t>=k)okStamp(140+i*130,GY-760+(i%2)*60,a*.9,eBack(seg(t,k,k+.2)),(i-1)*.2);});}
  if(b2>0){const a=b2*endF;if(t>=WAVES[0]&&t<LOCK)bubble(tbx,tby,'这个也交给你~',a,eBack(seg(t,WAVES[0],WAVES[0]+.2)),TC,1);
    if(t>=WAVES[1]&&t<LOCK)bubble(kbx,kby-60,'你人真好~',a,eBack(seg(t,WAVES[1],WAVES[1]+.2)),BUN,1);
    if(t>=LOCK&&t<B(7)){bubble(bx,by-20,'其实…我也很累',a,eBack(seg(t,LOCK,LOCK+.2)),'#9ab8ff',-1);ctx.save();ctx.globalAlpha=a*.9;ctx.fillStyle='#fff4c0';ctx.shadowColor='#fff0a0';ctx.shadowBlur=30;ctx.beginPath();ctx.arc(1000,GY-700,46,Math.PI*.35,Math.PI*1.65,false);ctx.arc(1022,GY-716,40,Math.PI*1.55,Math.PI*.45,true);ctx.closePath();ctx.fill();ctx.restore();}
    bigText(t,LOCK,B(7),RX+420,GY-800,'人人都满意，除了自己',RED,56);}
  if(b3>0){const a=b3*endF;if(t>=B(7)&&t<STAMP)bubble(kbx,kby,'有你真好！',a,eBack(seg(t,B(7),B(7)+.2)),BUN,1);
    if(t>=JABS[1]&&t<STAMP)bubble(bx,by,'应该的~',a,eBack(seg(t,JABS[1],JABS[1]+.2)),GOLD,-1);
    if(t>=STAMP)[0,1,2,3,4].forEach(i=>heartF(G.hc[0]-160+i*80,G.hc[1]-150-Math.sin(i*1.3)*40-(t-STAMP)*40,1.2,'#ff6a9a',a*seg(t,STAMP+i*.06,STAMP+i*.06+.2)*(1-seg(t,B(8)-.4,B(8)))));
    bigText(t,STAMP,B(8),RX+420,GY-800,'温柔体贴，人缘超好',GOLD,56);}
  if(b4>0){const a=b4*endF;const lab=['不敢拒绝','怕得罪人','委屈自己'];[B(8)+.2,...SNAPS].slice(0,3).forEach((k,i)=>{if(t<k||t>=SLAM+.3)return;wordBox(RX+(i-1)*250+40,GY-740-(i%2)*80,lab[i],a,eBack(seg(t,k,k+.2))*.95,'#a0a8b0',(i-1)*.06);});
    if(t>=SNAPS[0]&&t<SLAM)bubble(tbx,tby,'今晚把这个做完',a,eBack(seg(t,SNAPS[0],SNAPS[0]+.2)),RED,1);
    if(t>=SNAPS[1]&&t<SLAM)bubble(obx,oby-150,'你又答应了？',a,eBack(seg(t,SNAPS[1],SNAPS[1]+.2)),OC,1);
    bigText(t,SLAM,SLAM+1.8,RX+420,GY-800,'你的好，成了理所当然','#fff',56);}
  if(dark>0){const a=dark*endF;if(t<CLIMAX-.75)bubble(bx,by-40,'……我能不能说不',a*seg(t,B(9)+.9,B(9)+1.2),.9,PC,-1);
    if(t>=CLIMAX-.6)bubble(bx,by-40,'不好意思，我拒绝！',a*win(t,CLIMAX-.6,CLIMAX+.05,.08,.05),1,GOLD,-1);}
  if(t>=CLIMAX){const a=endF,dt=t-CLIMAX;if(dt>=.8&&dt<2.2){bubble(kbx,kby,'好酷！',a*(1-seg(dt,2.0,2.2)),1,BUN,1);bubble(tbx,tby,'那…我自己来',a*(1-seg(dt,2.0,2.2)),1,TC,1);}}
}
