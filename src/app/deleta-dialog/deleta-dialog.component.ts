import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-deleta-dialog',
  templateUrl: './deleta-dialog.component.html',
  styleUrls: ['./deleta-dialog.component.css']
})
export class DeletaDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private dialogRef: MatDialogRef<DeletaDialogComponent>) {
      dialogRef.disableClose = true;
    }

  ngOnInit() {
    console.log(this.data.id)
  }

}
