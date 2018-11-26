import 'jquery'
import { mqyunEditor } from '../index'

$(() => {
  let mqyunE = new mqyunEditor({
    'baseDom': '#mqyunEditorExample'
  });
  mqyunE.init();
})
