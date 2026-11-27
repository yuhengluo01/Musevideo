import json,sys,shutil,os,subprocess
e,date,title,caption=sys.argv[1:5]
R='/home/claude/musevideo';K=R+'/tools/animal-kit';sys.path.insert(0,K)
from specs import SPECS
s=[x for x in SPECS if x['py']==e][0];vid=f'{date}-{e}'
shutil.copy(f'{K}/ep_{e}/OUT.mp4',f'{R}/videos/{vid}.mp4');shutil.copy(f'{K}/ep_{e}/{e}_封面_竖版3比4.png',f'{R}/videos/{vid}-cover.png')
shutil.copy(f'{K}/ep_{e}/ep.js',f'{K}/examples/ep{s["ep"]}_{e}.js');shutil.copy(f'{K}/ep_{e}/audio.py',f'{K}/examples/ep{s["ep"]}_audio.py')
assert os.path.getsize(f'{R}/videos/{vid}.mp4')<95e6
V=json.load(open(R+'/videos.json'));assert not any(v['id']==vid for v in V['videos'])
V['videos'].append(dict(id=vid,file=f'videos/{vid}.mp4',cover=f'videos/{vid}-cover.png',title=title,caption=caption,tags=['打工人图鉴',s['name'],'打工人'],date=date))
json.dump(V,open(R+'/videos.json','w'),ensure_ascii=False,indent=2)
S=json.load(open(R+'/tools/series_state.json'));S['done'].append(dict(ep=s['ep'],name=s['name'],id=vid));S['queue']=[q for q in S['queue'] if q!=s['name']]
json.dump(S,open(R+'/tools/series_state.json','w'),ensure_ascii=False,indent=2)
msg=f"Add video: {vid} (打工人图鉴 {s['epn']} {s['name']})\n\nCo-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01Y52dMusy1cTyFodpKV4R4o"
sh=lambda c:subprocess.run(c,shell=True,cwd=R,check=True)
sh(f'git add videos/{vid}.mp4 videos/{vid}-cover.png videos.json tools/series_state.json tools/animal-kit/examples tools/animal-kit/specs.py tools/animal-kit/mkcover.py tools/animal-kit/publish.py')
subprocess.run(['git','commit','-q','-m',msg],cwd=R,check=True)
sh('git -c push.negotiate=true push origin HEAD:main 2>&1 | tail -2')
