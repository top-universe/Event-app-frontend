<template>
    <div>
        <main class="main-container">
      <section class="header-section">
        <h1 class="main-text">Search Events</h1>
        <div class="input-container">
          <input type="text" name="" id="" placeholder="Search Events" />
          <button>
            <img
              class="search-icon"
              src="../assets/images/magnifyingglass.svg"
              alt="search-icon"
            />
          </button>
        </div>
      </section>

      <section class="search-result">
        <ul class="filter-header">
          <p class="hide">Filter Option</p>
          <li class="filter bold">All</li>
          <li class="filter">For you</li>
          <li class="filter">Online</li>
          <li class="filter hide">Today</li>
          <li class="filter hide">This weekend</li>
          <li class="filter hide">Free</li>
          <li class="filter hide">Music</li>
          <li class="filter hide">Food & Drink</li>
          <li class="filter hide">Charity & Causes</li>
          <li class="filter">more...</li>
        </ul>

        <div class="filter-result">
          <h2 class="result-header">Based on your search</h2>
          <div class="card-container">
            <CardResult/>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .main-container {
    display: flex;
    background: #ffffff;
    flex-direction: column;
    align-items: center;
}

.header-section {
  padding: 93px 0;
 
}

.main-text {
  font-weight: 600;
  font-size: 50px;
  line-height: 56px;
  text-align: center;
  color: var(--primary-text-clr);
   margin-bottom: 50px;
 }

 .input-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 30px 16.5px;
  gap: 6px;
  max-width: 398px;
  width: 100%;
  background: #f6f6f6;
  border-radius: 200px;
  height: 55px;
 }

.input-container input {
  border: none;
  background-color: transparent;
  flex: 1;
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  
}

.input-container input:focus {
  outline: none;
}

.input-container input::placeholder {
color: rgba(60, 60, 67, 0.6);
}

.input-container button {
  border: none;
  background: transparent;
  cursor: pointer;
}


.search-result {
  display: flex;
  /* flex-direction: row; */
  /* max-width: 1030px; */
  margin: auto 5%;
}

.filter-header {
    display: flex;
    list-style-type: none;
    max-width: 193px;
    width: 100%;
    padding: 20px;
    gap: 30px;
    flex-direction: column;
}

.filter-header p {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary-text-clr);
}

.filter {
  font-size: 14px;
  cursor: pointer;
}

.result-header,.bold {
  font-weight: 600;
}

.result-header {
  font-size: 20px;
}


.card-container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  align-items: center;
  
}

/* .result-header,.filter-card {
  margin: 0 0 35px 50px;
} */

.result-header {
  margin-bottom: 35px;
}

.filter-card {
  width: 100%; 
  max-width: 250px;
  cursor: pointer;
}

.card-image img {
  width: 100%;
  height: 120px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
}

.card-image img:hover {
  opacity: 0.5;
}

.card-header {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  margin: 10px 0;
  color: var(--primary-text-clr);
}

.card-body {
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  color: #535353;
  margin-bottom: 10px;
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 5px;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
}

.card-date {
  color: #5eb35e;
  background: rgba(148, 255, 148, 0.1);
}

.card-catergory {
  background: var(--white-color);
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--primary-text-clr);
}

.card-date,.card-catergory {
  border-radius: 100px;
  padding: 3px 10px;
}

@media screen and (max-width: 600px) {
  
  .header-section {
    margin: auto 5%;
  }

    .search-result {
    flex-direction: column;
  }

  .hide {
    display: none;
  }

  .filter-header {
    flex-direction: row;
    justify-content: space-between;
  }

  .filter-card, .filter-header {
    max-width: 550px;
  }

  .main-text {
    font-size: 30px;
    line-height: 36px;
    text-align: center;
  }
}
</style>