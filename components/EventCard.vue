<template>
  <div class="filter-card">
    <div class="card-image">
      <img :src="image" alt="event-image" />
    </div>
    <div class="card-header">{{title}}</div>
    <div class="card-body">
      {{short_description}}
    </div>
    <div class="card-footer">
      <div class="card-date">{{ date }}</div>
      <div class="card-category"> {{ tag }}</div>
    </div>
  </div>

</template>

<!-- <script setup>
const generateImage = computed(() => {
  return "https://source.unsplash.com/random"
})
</script> -->
<script>
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    short_description: {
      type: String,
    },
    date: {
      type: String,
    },
    tag: {
      type: String,
    }
  }
}
</script>


<style scoped>
.filter-card {
  width: 100%;
  max-width: 250px;
  min-height: 230px;
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

.card-date,
.card-catergory {
  border-radius: 100px;
  padding: 3px 10px;
}

@media screen and (max-width: 600px) {

  .filter-card {
    max-width: 550px;
  }

}
</style>