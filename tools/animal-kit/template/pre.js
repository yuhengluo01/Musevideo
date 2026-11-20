const CLIMAX=B(10),STAMP=17.345,SLAM=20.016;
const kin=(a,b,th=.5)=>KICKS.filter(k=>k[0]>=a&&k[0]<b&&k[1]>th).map(k=>k[0]);
const MK=kin(B(5)+.4,B(6)).slice(0,3);
const LOCK=14.675,WAVES=[13.351,14.013];
const JABS=kin(B(7),STAMP-.05);
const SNAPS=kin(B(8),SLAM-.05);
const STRUMK=kin(B(4),END,.5);
const HITSTOP=[[B(4),.07],[LOCK,.07],[STAMP,.09],[SLAM,.09],[CLIMAX,.13],...MK.map(k=>[k,.05])];
const INVERT=[STAMP,SLAM,CLIMAX];
const BIG=[[B(4),3.2],[STAMP,2.8],[SLAM,3.2],[CLIMAX,4.2],...MK.map(k=>[k,1.6]),[LOCK,2.4],[WAVES[0],.9],[WAVES[1],.9],...JABS.map(k=>[k,1.0]),...SNAPS.map(k=>[k,1.4])];
function rt(t){for(const[k,d]of HITSTOP){if(t>=k&&t<k+d)return k;}return t;}
const TAU=Math.PI*2,FS=1.25;
function shake(t){let x=0,y=0,z=0,r=0;for(const[k,s]of KICKS){const dt=t-k;if(dt<0||dt>.4)continue;const amp=(k<B(4)-.1?.35:1)*s;const e=Math.exp(-dt*16);x+=amp*11*e*Math.sin(dt*95+k*7);y+=amp*9*e*Math.cos(dt*83+k*3);z+=amp*.026*Math.exp(-dt*12);}
  for(const[k,m]of BIG){const dt=t-k;if(dt<0||dt>.8)continue;const e=Math.exp(-dt*7);x+=m*13*e*Math.sin(dt*70+k);y+=m*11*e*Math.cos(dt*61);z+=m*.035*Math.exp(-dt*6);r+=m*.01*e*Math.sin(dt*50);}return{x,y,z,r};}
function hitAmt(t){let h=0;for(const[k,m]of BIG){const dt=t-k;if(dt>=0&&dt<.5)h=Math.max(h,Math.exp(-dt*7)*m/4);}return h;}
