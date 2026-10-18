import fs from 'node:fs/promises';
const users=['rakesh9211488-bot','SiripakaRakesh'];
const repos=[];
for (const user of users) {
 let page=1;
 while (page<=5) {
  const url=`https://api.github.com/users/${encodeURIComponent(user)}/repos?per_page=100&page=${page}&sort=updated`;
  const response=await fetch(url,{headers:{'Accept':'application/vnd.github+json','User-Agent':'rakesh-portfolio-sync',...(process.env.GITHUB_TOKEN?{'Authorization':`Bearer ${process.env.GITHUB_TOKEN}`}:{})}});
  if (!response.ok) throw new Error(`GitHub ${user} HTTP ${response.status}`);
  const batch=await response.json();
  repos.push(...batch.filter(r=>!r.private).map(r=>({owner:user,name:r.name,url:r.html_url,description:r.description||'',language:r.language||'',updatedAt:r.updated_at,archived:r.archived,fork:r.fork})));
  if(batch.length<100)break;
  page++;
 }
}
repos.sort((a,b)=>b.updatedAt.localeCompare(a.updatedAt));
await fs.writeFile('data/github-metadata.json',JSON.stringify({generatedAt:new Date().toISOString(),repositories:repos},null,2)+'\n');
console.log(`Synced ${repos.length} public repositories; featured projects remain manually curated.`);
