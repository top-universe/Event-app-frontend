<template>
    <nav class="nav-container">
      <div class="nav-left">
        <div class="nav-logo">Evently</div>
        <div class="nav-section">
          <a href="" class="nav-link-features">Features</a>
          <a href="" class="nav-link-features">Pricing</a>
          <a href="" class="nav-link-features">Automation</a>
        </div>
      </div>

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
      <div class="nav-right">
        <button class="btn-customer outline-btn">Customer Login</button>
        <button class="btn-signup primary-btn">Sign up</button>
      </div>

    </nav>

    <section v-show="navToggle" class="mobile-nav-toggle">
      <div class="mobile-nav-section">
          <a href="" class="mobile-nav-link-features">Features</a>
          <a href="" class="mobile-nav-link-features">Pricing</a>
          <a href="" class="mobile-nav-link-features">Automation</a>
        </div>
      <div class="mobile-nav-right">
        <button class="btn-customer outline-btn">Customer Login</button>
        <button class="btn-signup primary-btn">Sign up</button>
      </div>
    </section>
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
    }
</script>

<style scoped>
.nav-container {
  /* position: absolute;
  z-index: 999; */
  padding: 19px 32px;
  /* flex-direction: row; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  /* gap: 20px; */
  background: #ffffff;
  z-index: 2;
}

.nav-left {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav-logo {
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
}

.nav-logo > span {
  color: #f43f5e;
}

.nav-section {
  display: flex;
  margin-left: 70px;
  width: 330px;
  justify-content: space-between;
}

.nav-link-features {
  text-decoration: none;
  font-weight: 500;
  font-size: var(--fontsize-content);
  line-height: 24px;
  color: var(--primary-text-clr);
}

.nav-right {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.nav-right > button {
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  font-size: var(--fontsize-content);
}

.btn-customer {
  border: none;
  background-color: transparent;
}

.btn-signup {
  color: #ffffff;
}

.menu-icon-open, .menu-icon-close {
  display: none;
}

.mobile-nav-toggle {
  display: none;
}

@media screen and (max-width: 800px) {
.menu-icon-open, .menu-icon-close {
    width: 22.5px;
    display: flex;
}

.nav-section, .nav-right {
  display: none;
}

.mobile-nav-toggle {
  display: block;
  position: fixed;
  z-index: 3;
  background: rgba(255, 255, 255, 0.95);
  height: 100vh;
  width: 100vw;
  margin-top: 62px;
  top: 0;
}

.mobile-nav-section {
  display: flex;
  flex-direction: column;
  margin-left: 70px;
  list-style-type: none;
  align-items: center;
  gap: 40px;
  margin-right: 50px;
  padding-top: 30px;
}

.mobile-nav-link-features {
  text-decoration: none;
  font-weight: 800;
  font-size: 18px;
  line-height: 24px;
  color: var(--secondary-text-clr);
}

.mobile-nav-link-features:hover {
  color: #18181b;
}

.mobile-nav-right {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 40px;
}
}

</style>