import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursosDetailComponent } from './cursos-detail/cursos-detail.component';

@NgModule({
  declarations: [CursosComponent, CursosDetailComponent],
  imports: [CommonModule, CursosModule],
})
export class CursosModule {
  provider: [];
}
