(function() {
  var data = {
    count: 0
  };

  Vue.component('counter-button', {
    data: function() {
      return data;
    },
    template: '\
      <button v-on:click="count++">\
        You clicked me {{ count }} times\
      </button>\
    '
  });
})();
