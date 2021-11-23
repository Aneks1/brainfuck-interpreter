<template>
    <textarea rows="10" placeholder="++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++. (Hello World!)" v-model="code"></textarea>
    <br>
    <button @click="run()">Run</button>
    <br>
    <span>Output:<br>{{ output }}</span>
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