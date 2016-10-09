import { AfterViewInit, Directive, Renderer } from '@angular/core';
import 'codemirror/mode/javascript/javascript'

var CodeMirror = require('codemirror');

@Directive({
  selector: '[editor]'
})
export class EditorDirective implements AfterViewInit {
  editor: any;

  constructor(private _renderer: Renderer) {}

  ngAfterViewInit() {
    this.editor = CodeMirror.fromTextArea(
        this._renderer.selectRootElement('[editor]'),
        {
          lineNumbers: true,
          styleActiveLine: true,
          matchBrackets: true,
          tabSize: 2,
          mode: {name: "javascript", globalVars: true}
        }
    );
  }
}