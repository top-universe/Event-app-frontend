<template>
  <header v-if="user.username">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
      <h1>Evently</h1>
    </div>
    <nav>
      <img
        src="/assets/icons/Vectormenu.svg"
        alt="menu-icon"
        class="menu-icon"
      />
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

  <header v-if="!user.username">
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
      <h1>Evently</h1>
    </div>
    <nav>
      <img
        src="/assets/icons/Vectormenu.svg"
        alt="menu-icon"
        class="menu-icon"
      />
      <ul class="nav-links">
        <NuxtLink to="login">
          <button class="btn-customer outline-btn">Customer Login</button>
        </NuxtLink>
        <NuxtLink to="signup">
          <button class="btn-signup primary-btn">Sign up</button>
        </NuxtLink>
      </ul>
    </nav>
  </header>

  <!-- <nav class="nav-container" v-if="!user.username">
    <div class="nav-left">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="logo" />
        <h1>Evently</h1>
      </div>
      <div class="nav-section">
        <a href="" class="nav-link-features">Features</a>
        <a href="" class="nav-link-features">Pricing</a>
        <a href="" class="nav-link-features">Automation</a>
      </div>
    </div>
    <div class="nav-right">
      <button class="btn-customer outline-btn">Customer Login</button>
      <button class="btn-signup primary-btn">Sign up</button>
    </div>
  </nav> -->
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "solomonmarvel@hotmail.com",
        firstName: "Marvelous",
        lastName: "Akporowho",
      },
    };
  },
};
</script>

<style scoped>
.nav-container {
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
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
  background: #000000;
  color: #ffffff;
}

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
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
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

.menu-icon {
  display: none;
}

@media (max-width: 820px) {
  ul.nav-links {
    gap: 20px;
  }
}

@media (max-width: 650px) {
  ul.nav-links {
    display: none;
  }

  .menu-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 22.5px;
  }
}
</style>
