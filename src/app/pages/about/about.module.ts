import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { BioAboutMeComponent } from '../../components/about/bio-about-me/bio-about-me.component';
import { SkillsMainComponent } from '../../components/about/skills-main/skills-main.component';
import { SkillsOtherComponent } from '../../components/about/skills-other/skills-other.component';
import { SkillsSoonComponent } from '../../components/about/skills-soon/skills-soon.component';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [
    AboutComponent,
    BioAboutMeComponent,
    SkillsMainComponent,
    SkillsOtherComponent,
    SkillsSoonComponent,
  ],
  imports: [CommonModule, AboutRoutingModule, SharedModule, MatExpansionModule],
})
export class AboutModule {}
