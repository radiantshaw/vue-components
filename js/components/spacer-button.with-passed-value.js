Vue.component('spacer-button', {
  template: '\
    <button @click="$emit(\'increase-spacing\', 0.5)">\
      Increase spacing\
    </button>\
  '
});
