import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioAboutMeComponent } from 'src/app/components/about/bio-about-me/bio-about-me.component';
import { BioExperienceComponent } from 'src/app/components/about/bio-experience/bio-experience.component';
import { SkillsMainComponent } from 'src/app/components/about/skills-main/skills-main.component';
import { SkillsOtherComponent } from 'src/app/components/about/skills-other/skills-other.component';
import { SkillsSoonComponent } from 'src/app/components/about/skills-soon/skills-soon.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: 'bio/about-me',
        component: BioAboutMeComponent,
      },
      {
        path: 'bio/experience',
        component: BioExperienceComponent,
      },
      {
        path: 'skills/main',
        component: SkillsMainComponent,
      },
      {
        path: 'skills/other',
        component: SkillsOtherComponent,
      },
      {
        path: 'skills/soon',
        component: SkillsSoonComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
