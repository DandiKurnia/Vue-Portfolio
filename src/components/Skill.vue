<script setup>
import WelcomeItem from './WelcomeItem.vue'
import Html from './icons/IconHtml.vue'
import Css from './icons/IconCss.vue'
import JavaScript from './icons/IconJavaScript.vue'
import Php from './icons/IconPhp.vue'
import MySql from './icons/IconMySql.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <Html />
    </template>
    <div class="div">
      <div class="flex">
        <h3>HTML</h3>
        <h3>95%</h3>
      </div>
      <div class="skills_bar">
        <span class="skills_percetage skills_html"></span>
      </div>
    </div>  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Css />
    </template>
    <div class="div">
      <div class="flex">
        <h3>CSS</h3>
        <h3>90%</h3>
      </div>
      <div class="skills_bar">
        <span class="skills_percetage skills_css"></span>
      </div>
    </div>  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <JavaScript />
    </template>
    <div class="div">
      <div class="flex">
        <h3>JAVA SCRIPT</h3>
        <h3>70%</h3>
      </div>
      <div class="skills_bar">
        <span class="skills_percetage skills_js"></span>
      </div>
    </div>  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <Php />
    </template>
    <div class="div">
      <div class="flex">
        <h3>PHP</h3>
        <h3>80%</h3>
      </div>
      <div class="skills_bar">
        <span class="skills_percetage skills_php"></span>
      </div>
    </div>  
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <MySql />
    </template>
    <div class="div">
      <div class="flex">
        <h3>MYSQL</h3>
        <h3>75%</h3>
      </div>
      <div class="skills_bar">
        <span class="skills_percetage skills_laravel"></span>
      </div>
    </div>  
  </WelcomeItem>
</template>

<style>
.div{
  height: 90.5px;
}

.flex{
  display: flex;
  justify-content: space-between;
}

h3{
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

.skills_bar,
.skills_percetage{
  margin-top: 5px;
  height: 5px;
  border-radius: .25rem;
}

.skills_bar{
  background-color: #fff;
}

.skills_percetage{
  display: block;
  background-color: hsla(160, 100%, 37%, 1);
}

.skills_html{
  width: 95%;
}

.skills_js{
  width: 70%;
}

.skills_php{
  width: 80%;
}

.skills_laravel{
  width: 85%;
}
</style>
