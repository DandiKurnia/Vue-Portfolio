<template>
        <Particles id="tsparticles" :options="options" :particlesInit="particlesInit "/>
</template>

<script lang="ts">
import { Engine } from 'tsparticles-engine';
// import { loadFull } from 'tsparticles';
import { loadSlim } from "tsparticles-slim";

export default {
        data() {
                return{
                        options: {
                                background: {
                                        color: "#000"
                                },
                                fullScreen: {
                                        enable: true,
                                        zIndex: -1,
                                },
                                interactivity: {
                                        events: {
                                                onClick: {
                                                        enable: true,
                                                        mode : "push",
                                                },
                                                onHover: {
                                                        enable: true,
                                                        mode: "repulse"
                                                },
                                        },
                                        nodes: {
                                                push: {
                                                        quantity: 10,
                                                },
                                                respulse: {
                                                        distance: 150,
                                                }
                                        }
                                },
                                particles: {
                                        links: {
                                                distance: 70,
                                                enable: true,
                                        },
                                        move: {
                                                enable: true,
                                                speed: { min:1, max:5 }
                                        },
                                        opacity: {
                                                value: { min: 0.2, max: 0.2 }
                                        },
                                        size:{
                                                value: { min: 0.5, max: 2 }
                                        }
                                }
                        }
                }
        },
        methods: {
                async particlesInit(engine: Engine){
                        await loadSlim(engine);
                }
        }
}
</script>