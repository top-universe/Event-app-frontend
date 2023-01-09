<template>

  <div>

  
  <header>
    <div class="logo">
      <img src="../assets/icons/logo.svg" alt="logo" />
      <h1>Evently</h1>
    </div>
    <nav>
      <a href="#" @click="menuClickOpen" v-show="open">
       <img
        src="../assets/icons/navMeun.svg"
        alt="menu-icon"
        class="menu-icon-open"
                   
      />
      </a>
      <a href="#" @click="menuClickClose" v-show="close">
       <img
        src="../assets/icons/Closecancel.svg"
        alt="menu-icon"
        class="menu-icon-close" 
                    
      />
      </a>

      <ul class="nav-links">
        <a href="#"> <li class="link present">Create an Event</li> </a>
        <a href="#"> <li class="link">Help</li> </a>
        <a href="#"> <li class="link">Pricing</li> </a>
        <a href="#"> <li class="link">Resources</li> </a>
        <a href="#">
          <li>
            <img src="../assets/images/Ellipse_1.png" alt="" />
          </li>
        </a>
      </ul>
    </nav>
  </header>
         <!-- mobile navigation toggle -->
  <section v-show="navToggle" class="mobile-nav-toggle" >
      <ul class="nav-links-mobile">
        <a href="#"> <li class="link-mobile present">Create an Event</li> </a>
        <a href="#"> <li class="link-mobile">Help</li> </a>
        <a href="#"> <li class="link-mobile">Pricing</li> </a>
        <a href="#"> <li class="link-mobile">Resources</li> </a>
        <a href="#">
          <li>
            <img src="../assets/images/Ellipse_1.png" alt="" />
          </li>
        </a>
      </ul>
  </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navToggle: false,
      open: true,
      close: false,
    };
  },
  methods: {
      menuClickOpen() {
      this.navToggle = true;
      this.open = false;
      this.close = true;
    },
       menuClickClose() {
      this.navToggle = false;
      this.open = true;
      this.close = false;
       }
    },
};

</script>

<style scoped>


a {
  text-decoration: none;
  color: var(--primary-text-clr);
}

a:hover {
  color: var(--purple-color);
}

header {
  width: 100%;
  display: flex;
  padding: 32px 0;
  align-items: center;
  position: fixed;
  top: 0;
  /* gap: 20px; */
  background: #ffffff;
  justify-content: space-between;
   z-index: 2;
}


ul.nav-links {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

li.links {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--primary-text-clr);
}

li.link:not(:first-child) {
  margin-left: 10px;
}

li.nav-links img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}

.link.present {
  color: var(--purple-color);
}

.menu-icon-open, .menu-icon-close {
  display: none;
}

.logo {
  margin-left: 100px;
}

nav {
  margin-right: 100px;
}

.mobile-nav-toggle {
  display: none;
}


@media screen and (max-width: 800px) {
  ul.nav-links {
    gap: 20px;
  }

  .logo {
  margin-left: 5%;
}

.menu-icon-open, .menu-icon-close {
    width: 22.5px;
    display: flex;
}


nav {
  margin-right: 5%;
}

ul.nav-links {
    display: none;
  }
}

.mobile-nav-toggle {
  display: block;
  position: fixed;
  z-index: 3;
  background: rgba(255, 255, 255, 0.95);
  height: 100vh;
  width: 100vw;
  margin-top: 97px;
}

.nav-links-mobile {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 40px;
  margin-right: 50px;
  padding-top: 30px;
}

.link-mobile {
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 17px;
  color: var(--secondary-text-clr);
}

.link-mobile:hover {
  color: var(--purple-color);
}



</style>
