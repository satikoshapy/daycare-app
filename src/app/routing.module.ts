import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { Routes, RouterModule } from '@angular/router';
import { ChildrenComponent } from './dashboard/children/children.component';
import { ParentsComponent } from './dashboard/parents/parents.component';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { PostsComponent } from './dashboard/posts/posts.component';
<<<<<<< HEAD
import { ParentAddComponent } from './dashboard/parents/parent-add/parent-add.component';
=======
import { LoginscreenComponent } from './loginscreen/loginscreen.component';
>>>>>>> a77fe4768e0caff9e6bede238cf3e7b5e59ff165

const routes: Routes = [
    {path: '', redirectTo: '/messageboard', pathMatch: 'full'},
    {path: 'messageboard', component: MessageboardComponent},
    {path: 'dashboard', component: DashboardComponent, children: [
        {path: '', component: ChildrenComponent},
        {path: 'children', component: ChildrenComponent},
        {path: 'parents', component: ParentsComponent, children: [
            {path: 'parent-add', component: ParentAddComponent}
        ]},
        {path: 'calendar', component: CalendarComponent},
        {path: 'posts', component: PostsComponent}
<<<<<<< HEAD
        
    ]}
=======
    ]},
    {path: 'loginscreen', component: LoginscreenComponent}
>>>>>>> a77fe4768e0caff9e6bede238cf3e7b5e59ff165
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}