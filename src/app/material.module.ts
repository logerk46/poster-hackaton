import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule
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
        MatSelectModule,
        MatDialogModule
    ],
    exports: [
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        DragDropModule,
        MatSelectModule,
        MatDialogModule
    ]
})
export class AppMaterialModule { }