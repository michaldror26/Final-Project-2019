import {Component} from '@angular/core';

@Component({
  selector: 'app-load-image-base64',
  template: `
    <div>
      <div style="width: 200px;height: 150px;">
        <input class="inputfile" type="file" id="filePicker" (change)="handleFileSelect($event)">
        <label for="filePicker">
          <span>בחר תמונה</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
            <path
              d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
          </svg>
          
        </label>
      </div>
      <br>
      <div>
        <textarea id="base64textarea" placeholder="temporary here" cols="15" rows="5">{{base64textString}}</textarea>
      </div>
      <img [src]="'data:image/png;base64,' + base64textString">

    </div>
  `,
  styles: [`
    .inputfile {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }
    .inputfile + label svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      fill: currentColor;
      margin-top: -0.25em;
      margin-right: 0.25em;
    }
    .inputfile + label {
      text-align: right;
      color: #f1e5e6;
      background-color: #d3394c;
    }
    .inputfile + label {
      max-width: 80%;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      display: inline-block;
      overflow: hidden;
      padding: 0.625rem 1.25rem;
    }
  `]
})
export class LoadImageBase64Component {
  base64textString: String = '';

  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(btoa(binaryString));
  }
}
