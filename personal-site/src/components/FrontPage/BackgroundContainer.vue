<script setup lang="ts">
import { defineExpose, ref } from 'vue'

const movetarget = ref(null);

function onMove(evt: MouseEvent) {
    const amplitude: number = 25;
    const element = <HTMLElement><unknown>movetarget.value;

    const width = amplitude / window.innerWidth;
    const height = amplitude / window.innerHeight;
    const pageX = evt.pageX - window.innerWidth / 2;
    const pageY = evt.pageY - window.innerHeight / 2;
    const newX = width * (pageX * -1);
    const newY = height * (pageY * -1);

    element.style.backgroundPositionX = newX + "px";
    element.style.backgroundPositionY = newY + "px";
}

defineExpose({ movetarget });

</script>

<template>
    <div>
        <!-- Gradient -->
        <div
            v-on:mousemove="onMove"
            class="w-screen h-screen bg-top fixed -z-10 bg-gradient-to-t from-gray-600 to-gray-300 mix-blend-multiply border-8 border-gray-800"
        />
        <!-- BG Image -->
        <!-- backgroundPosition -- bg-parallax -- TODO: Fix positioning by offsetting instead of repositioning. -->
        <div
            ref="movetarget"
            class="w-screen h-screen bg-cover bg-left-top bg-no-repeat bg-gray-900 bg-[url('/src/assets/background-scroller.jpg')] fixed -z-20 filter blur-sm"
        />
    </div>
</template>