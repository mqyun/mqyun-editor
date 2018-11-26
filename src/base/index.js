import './index.styl'

class mqyunEditor {

  constructor (setting) {
    this.setting = setting;
    this.key = Date.parse(new Date()) / 1000 + Math.floor(Math.random() * (1 - 1000) + 1000);
  }

  init () {
    const _set = this.setting;
    $(_set.baseDom).html(`
      <div
        contenteditable="true"
        id="mqyun-editor-${this.key}"
        class="mqyun-editor">mqyun-editor</div>
    `)
  }

}

export default mqyunEditor
