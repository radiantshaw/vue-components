Vue.component('spacer-button', {
  template: '\
    <button @click="$emit(\'increase-spacing\')">\
      Increase spacing\
    </button>\
  '
});
