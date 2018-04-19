import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'members', pathMatch: 'full'},
            { path: 'members', component: MembersComponent, resolve: {users: MemberListResolver}, canActivate: [AuthGuard] },
            { path: 'members/:id', component: MemberDetailsComponent, resolve: {user: MemberDetailResolver}},
            { path: 'member/edit', component: MemberEditComponent, resolve: {user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges]},
            { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
            { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
