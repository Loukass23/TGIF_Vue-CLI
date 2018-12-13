import Vue from 'vue'
import App from './App.vue'
import Nav from './Nav.vue'
import PulseLoader from './PulseLoader.vue'

new Vue({
  el: '#nav',
  render: h => h(Nav),
  
})


new Vue({
  el: '#app',
  components: {
    PulseLoader
  },
  data: {
    retrieved: false,
    senators: null,
    checkedNames: [],
    selected: 'All',
    states: [],
    stats: [],
    showLoader: true

  },
  methods: {
    fetchJson() {
      fetch(url, {
          method: "GET",
          headers: new Headers({
            "X-API-Key": 'yM7WFa1TO8Y2eJQxD31fGVolfpMVNmqu9XOjBvfq'
          })
        }).then(function (response) {
          if (response.ok) {
            return response.json();
          }
        }).then((json) => {
          this.showLoader = false;
          this.senators = json.results[0].members;
          this.retrieved = true;
          this.buildDropdownStates();
          this.stats = buidStatistic(this.senators);

        })
        .catch(function (error) {
          console.log(error)
        })
    },
    buildDropdownStates() {
      let stateArray = this.senators.map(a => a.state);
     this.states = stateArray.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    }
  },
  created() {
    this.fetchJson();
    
    
  },
  computed: {

    filteredList: function () {
      if(this.retrieved){
        console.log(this.selected);
      return this.senators.filter(a => {
        var stateFilterValue = this.selected == "All" || this.selected == a.state;
        var partyFilterValue = this.checkedNames.length == 0 || this.checkedNames.includes(a.party)
        return stateFilterValue && partyFilterValue
      })
    }}
  }
});
