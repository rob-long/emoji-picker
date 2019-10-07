import Component from '@glimmer/component';
import EmojiButton from 'emoji-button';
import insertTextAtCursor from 'insert-text-at-cursor';

export default class EmojiPick extends Component {
  picker = null;

  constructor() {
    super(...arguments);
    const picker = new EmojiButton();
    this.picker = picker;
    picker.on('emoji', emoji => {
      insertTextAtCursor(document.querySelector('#caption'), emoji);
    });
  }

  togglePicker() {
    const button = document.querySelector('#emoji-button');
    this.picker.pickerVisible ? this.picker.hidePicker() : this.picker.showPicker(button);
  }
}