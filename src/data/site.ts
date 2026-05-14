import { certifications } from './certifications';
import { education } from './education';
import { experience } from './experience';
import { profile } from './profile';
import { projects } from './projects';
import { stackGroups } from './stack';

export const siteData = {
  profile,
  experience,
  projects,
  stackGroups,
  education,
  certifications
};

export type SiteData = typeof siteData;
