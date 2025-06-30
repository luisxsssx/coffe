import { Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './pages/home/home.component';
import { FrenchPressComponent } from './pages/french-press/french-press.component';
import { MokaComponent } from './pages/moka/moka.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'french-press', component: FrenchPressComponent },
    { path: 'mocha', component: MokaComponent }
];