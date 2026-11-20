function rectP(x0,y0,x1,y1){return[[x0,y0],[x1,y0],[x1,y1],[x0,y1],[x0,y0]];}
function spiral(cx,cy,r0,turns,dir,n=30,a0=0){const a=[];for(let i=0;i<=n;i++){const f=i/n,an=a0+dir*f*turns*Math.PI*2,r=r0*(1-f*.85);a.push([cx+Math.cos(an)*r,cy+Math.sin(an)*r]);}return a;}
