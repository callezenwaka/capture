<template>
    <div class="capture">
        <Header/>
        <div class="toggleButtons">
            <button class="toggleButton page_button" @click.prevent="uploading = true">Upload Image</button>
            <button class="toggleButton page_button" @click.prevent="uploading = !uploading">Verify Image</button>
        </div>
        <div class="" id="">
            <template v-if="uploading">
                <Upload/>
            </template>
            <template v-else>
                <Verify/>
            </template>
        </div>
    </div>
</template>

<script>
import Header from '@/components/partials/Header.vue'
import Upload from '@/components/Upload.vue'
import Verify from '@/components/Verify.vue'
export default {
    name: 'capture',
    components: {
        Header,
        Upload,
        Verify
    },
    data() {
        return {
            loading: '',
            uploadStatus: '',
            uploading: true
        }
    },
    methods: {
    }
}
</script>
<style>
/* body {
    background-color: #F0F0F0;
} */
button {
    cursor: pointer;
}
.toggleButtons {
    margin: 20px 0;
}
.capture {
    text-align: center;
    color: #2c3e50;
    margin: 0;
}
#video {
    background-color: #000000;
}
#canvas {
    display: none;
}
li {
    display: inline;
    padding: 5px;
}
</style>