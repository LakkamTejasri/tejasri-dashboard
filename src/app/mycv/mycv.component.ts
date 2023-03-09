import { Component, Input } from '@angular/core';
import GcPdfViewer from '@grapecity/gcpdfviewer';

@Component({
  selector: 'app-mycv',
  templateUrl: './mycv.component.html',
  styleUrls: ['./mycv.component.scss']
})
export class MycvComponent {

 ngAfterViewInit() {
  const viewer = new GcPdfViewer("#viewer", {
    workerSrc: "./node_modules/@grapecity/gcpdfviewer/gcpdfviewer.worker.js",
    restoreViewStateOnLoad: false
  });
  viewer.addDefaultPanels();
  viewer.open("../../assets/pdf/sample.pdf");

}
}
