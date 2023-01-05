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
      <div class="nav-right">
        <button class="btn-customer outline-btn">Customer Login</button>
        <button class="btn-signup primary-btn">Sign up</button>
      </div>
    </nav>
</template>

<script>
    export default {
        
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
  background: #000000;
  color: #ffffff;
}
</style>