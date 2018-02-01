<template>
  <div id="app">
    <!-- Follow Menu -->
    <transition name="fade">
      <div class="ui large top fixed menu" v-show="headerPassed">
        <div class="ui container">
            <span class="header item">Kennith Loop International</span>
          <router-link v-for="tab in navbars" v-bind:key="tab.name" :to="{ path: tab.path }" 
            class="item" v-on:click.native="toggleActive(tab.name, $event)" v-bind:class="{active: tab.clicked}">
                {{ tab.name }}
          </router-link>      
        </div>
      </div>
    </transition>
    <!-- Follow Menu End -->
    <div class="ui inverted vertical masthead center aligned segmented" v-on:scroll="headerTransition()">
      <div class="ui container">
        <div class="ui massive inverted secondary pointing menu">
          <span class="header item">Kennith Loop International</span>
          <router-link v-for="tab in navbars" v-bind:key="tab.name" :to="{ path: tab.path }" 
            class="item" v-on:click.native="toggleActive(tab.name, $event)" v-bind:class="{active: tab.clicked}">
                {{ tab.name }}
          </router-link>
        </div>
        <!-- conditional headers -->
        <div class="ui text container" v-if="this.$route.name === 'home'">
          <h1 class="ui inverted header">Kennith Loop International</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
          <router-link to="/contact" tag="button" class="ui large primary button" v-on:click.native="setOff">Contact Us</router-link>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'guitar'">
          <h1 class="ui inverted header">Guitar</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'wind'">
          <h1 class="ui inverted header">Wind Instruments</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'percussion'">
          <h1 class="ui inverted header"> Drums Outfit & Percussions</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'bags'">
          <h1 class="ui inverted header">Bags & Cases</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'about'">
          <h1 class="ui inverted header">About</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <div class="ui text container" v-else-if="this.$route.name === 'contact'">
          <h1 class="ui inverted header">Contact Us</h1>
          <h3 class="ui inverted header">Case utamur at pri. Tation convenire ullamcorper duo et. Duis detracto nominavi sed et, at sit tota equidem, te vis viderer noluisse conceptam.</h3>
        </div>
        <!-- Conditional Headers End -->
      </div>
    </div>
    <!-- Page Content -->
    <router-view v-bind:navbars="navbars"></router-view>
    <!-- Footers -->
    <div class="ui fixed vertical inverted footer segment">
      <div class="ui container center aligned">
        <div class="ui stackable inverted grid">
          <div class="ten wide column">
            <h4>KENNITH LOOP INTERNATIONAL</h4>
            Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
          </div>
          <div class="six wide column">
            <div class="ui inverted link list">
              <router-link tag="a" class="item" to="/about" v-on:click.native="setOff">about</router-link>
              <router-link tag="a" class="item" to="/contact" v-on:click.native="setOff">contact us</router-link>
            </div>
          </div>
        </div>
        <div class="ui inverted divider section"></div>
        <div class="ui horizontal small inverted">
          <span>Kennith Loop International Co., LTD</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      headerPassed: false,
      sideBar: false,
      navbars:
      [
        {
          name: 'Home',
          path: '/',
          clicked: true,
        },
        {
          name: 'Guitar',
          path: '/guitar',
          clicked: false,
        },
        {
          name: 'Wind Instruments',
          path: '/wind',
          clicked: false,
        },
        {
          name: 'Drums Outfit & Percussions',
          path: '/percussion',
          clicked: false,
        },
        {
          name: 'Bags & Cases',
          path: '/bags',
          clicked: false,
        },
      ],
    };
  },
  components: {
  },
  methods: {
    setOff() {
      this.navbars.forEach((navbar) => {
        if (navbar.clicked) {
          navbar.clicked = !navbar.clicked;
        }
      });
    },
    toggleActive(i, e) {
      const item = this.navbars.find(obj => obj.name === i);
      if (e.ctrlKey) {
        item.clicked = !item.clicked;
      } else {
        this.navbars.forEach((click) => {
          const clickedItem = click;
          clickedItem.clicked = false;
        });
      }
      item.clicked = true;
    },
    headerTransition() {
      if (window.pageYOffset > 500) {
        this.headerPassed = true;
      } else {
        this.headerPassed = false;
      }
    },
    windowSize() {
      if (document.documentElement.clientWidth < 933) {
        console.log('need to resize');
        this.sideBar = true;
      } else {
        console.log('dont need to resize');
        this.sideBar = false;
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.headerTransition);
    window.addEventListener('resize', this.windowSize);
  },
  destoryed() {
    window.removeEventListener('scroll', this.headerTransition);
    window.addEventListener('resize', this.windowSize);
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.ui.inverted.segmented {
  background: #1B1C1D
}
.masthead.segmented{
  min-height: 500px;
}
.ui.text.container{
  text-align: center;
}
.masthead h1.ui.header {
  margin-top: 5em;
  margin-bottom: 1em;
}
.main.container {
  padding-top: 7em;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.ui.footer.segment {
  margin: 5em 0em 0em;
  padding: 5em 0em;
  flex: 1;
}
.ui.section.divider {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.ui.horizonatal {
  margin-top: 2rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
