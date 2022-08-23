<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Personal Profil</template>
    iam Dandi Kurnia Putra a position as a Backend Developer. Detail-oriented, a reliable leader and team player with a knowledge in Backend Developer.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Education</template>
    2020-2023 <br>
    <a href="https://smktarunabhakti.net/" target="_blank">SMK Taruna Bhakti</a> <br>
    Software Engginer
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Experice</template>
    <ul>
      <li>School Agenda Guru</li>
      <li>My Blog</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Language</template>
    <ul>
      <li>English</li>
      <li>Indonesia</li>
    </ul>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Contact</template>
    (+62) 896-0309-8131 <br>
    dandikurnia608@gmail.com <br>
    <div class="icon-">
    <a href="https://github.com/DandiKurnia" target="_blank"><fa :icon="['fab', 'github']" class="icon" /></a>
    <a href="https://github.com/DandiKurnia" target="_blank"><fa :icon="['fab', 'instagram']" class="icon" /></a>
    </div>
  </WelcomeItem>
</template>

<style>
  .icon{
    margin-top: 2px;
    font-size: 20px;
    margin-right: 10px;
  }
</style>
