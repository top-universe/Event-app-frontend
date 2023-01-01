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
            <img src="@/assets/images/Ellipse 1.png" alt="" />
          </li>
        </a>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "solomonmarvel97",
        email: "solomonmarvel@hotmail.com",
        firstName: "Marvelous",
        lastName: "Akporowho",
      },
    };
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
