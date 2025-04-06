import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdressComponent } from './pages/adress/adress.component';
import { CookingComponent } from './pages/cooking/cooking.component';
import { FermentationComponent } from './pages/fermentation/fermentation.component';
import { AuthComponent } from './pages/auth/auth.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'address', component: AdressComponent},
    { path: 'cooking', component: CookingComponent},
    { path: 'fermentation', component: FermentationComponent},
    { path: 'login', component: AuthComponent},
];

