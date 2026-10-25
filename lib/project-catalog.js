const unique = values => [...new Map(values.filter(value => typeof value === 'string' && value.trim()).map(value => [value.trim().toLowerCase(), value.trim()])).values()];
export function projectSkills(project) {
  return unique(project.skills || project.technologies || []);
}
export function projectCategories(project) {
  if (project.categories?.length) return unique(project.categories);
  const categories = String(project.category || '').split(/[·|]/).map(value => value.trim());
  const evidence = `${project.category || ''} ${projectSkills(project).join(' ')}`.toLowerCase();
  if (/\bn8n\b|workflow|automation/.test(evidence)) categories.push('Automation');
  if (/\biot\b|arduino|soil.moisture|sensor/.test(evidence)) categories.push('IoT');
  if (/robot|rover/.test(evidence)) categories.push('Robotics');
  if (/computer vision|matlab|k.means|glcm/.test(evidence)) categories.push('Computer vision');
  if (/web platform|\breact\b|\bexpress\b|\bnext\.js\b/.test(evidence)) categories.push('Web platforms');
  return unique(categories.map(value => /^(workflow )?automation$/i.test(value) ? 'Automation' : /^web platforms?$/i.test(value) ? 'Web platforms' : value));
}
export function catalogOptions(projects) {
  return {
    categories: unique(projects.flatMap(projectCategories)).sort((a,b) => a.localeCompare(b)),
    skills: unique(projects.flatMap(projectSkills)).sort((a,b) => a.localeCompare(b)),
  };
}
export function matchingProjects(projects, {category='All', skill='All', query=''}={}) {
  const search = query.trim().toLowerCase();
  return projects.filter(project =>
    (category === 'All' || projectCategories(project).includes(category)) &&
    (skill === 'All' || projectSkills(project).includes(skill)) &&
    `${project.title} ${project.summary} ${projectCategories(project).join(' ')} ${projectSkills(project).join(' ')}`.toLowerCase().includes(search)
  );
}
