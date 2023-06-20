<template>
    <div id="container" class="relative">
        <span id="title" class="relative">Brainfuck Interpreter</span>
        <textarea class="relative" rows="10" placeholder="++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++. (Hello World!)" v-model="code"></textarea>
        <div id="outputBox" class="relative">
            <span id="output">Output: </span>
            <span id="data">{{ output }}</span>
        </div>           
        <button id="debug" class="relative" @click="run()">Debug</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import readCode from './readCode'

export default defineComponent({
    name: 'Interpreter',
    data() {
        return {
            code: '',
            output: ''
        }
    },
    methods: {
        run() {
            const outputMsg = readCode(this.code)
            this.output = outputMsg
        }
    }
})
</script>

<style>
    @import "./style.css";
</style>