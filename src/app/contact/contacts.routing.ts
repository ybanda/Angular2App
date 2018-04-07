import {Router,RouterModule} from '@angular/router';

import {ContactComponent} from './contact.component';

export const contactRouting =RouterModule.forChild([
 
  { path :'contact/:username/:id',component:ContactComponent},
  { path: '',redirectTo: '/learnings',pathMatch: 'full'}
 
]);