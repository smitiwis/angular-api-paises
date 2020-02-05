import { RouterModule, Routes  } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'lugares', component: LugaresComponent },
    
    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const Rutas=RouterModule.forRoot(routes);
