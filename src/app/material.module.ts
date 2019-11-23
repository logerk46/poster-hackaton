import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule
} from '@angular/material';
import {
    DragDropModule
} from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        DragDropModule,
        MatSelectModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        DragDropModule,
        MatSelectModule
    ]
})
export class AppMaterialModule { }