<template>
    <div class="verify">
        <!-- <Header/> -->
        <div id="image-area" v-show="cameraEnabled">
            <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
            <div><button class="page_button" id="snap" v-on:click="capture()">Snap Photo</button></div>
            <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        </div>
        <div class="" id="">
            <div class="" id="" role="" aria-labelledby="pills-verify-tab">
                <!-- core part for image upload to verify -->
                <div class="row">
                    <div class="col-md-6">
                        <form enctype="multipart/form-data" @submit.prevent="onSubmit">
                            
                            <div class="form-group" v-show="cameraDisabled">
                                <label for="file">Upload Picture of Person to Recognise:</label><br>
                                <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                            </div>
                            
                            <div class="form-group">
                                <button class="page_button" >Rekognize</button>
                                <span class="fa fa-spin fa-spinner" id="verify_spinner" style="display:none;" aria-hidden="true"></span>
                                <span><p>{{ loading }}</p></span>                            
                                
                            </div>
                        </form>
                    </div>
                    
                    <div class="col-md-6">
                        <p style="text-align:center;">Image Preview</p>
                        <div class="col-md-6" style="text-align:center;">
                            <img v-bind:src="imagePreview" v-show="showPreview" alt="" width="200" height="200"/>
                            <p style="text-align:center;">{{ resultStatus }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'verify',
    components: {
    },
    data() {
        return {
            model: {
                picture: null,
            },
            video: {},
            canvas: {},
            file: '',
            showPreview: false,
            imagePreview: '',
            loading: '',
            uploadStatus: '',
            cameraEnabled: true,
            cameraDisabled: false,
            resultStatus: ''
        }
    },
    mounted() {
        this.mediaDevice()
    },
    created() {
    },
    methods: {
        mediaDevice() {
            this.video = this.$refs.video;
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({video: true})
                .then((stream) => {
                    this.video.srcObject = stream;
                    this.video.play();
                })
                .catch((err) => {
                    console.log(err)
                    this.cameraDisabled = true
                    this.cameraEnabled = false
                });
            }
        },
        capture() {
            // Takes a snap shot and disables the camera
            this.canvas = this.$refs.canvas;
            var context = this.canvas.getContext("2d")
            context.drawImage(this.video, 0, 0, 640, 480);
            this.file = this.canvas.toDataURL("image/png");
            this.showPreview = true;
            this.imagePreview = this.canvas.toDataURL("image/png");
            this.video.srcObject.getVideoTracks().forEach((track) => {
                track.stop();
            });
            this.cameraEnabled = false
            this.model.picture = this.dataURItoBlob(this.canvas.toDataURL());
        },
        dataURItoBlob(dataURI) {
            var byteString = atob(dataURI.split(',')[1]);
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
            var ab = new ArrayBuffer(byteString.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            var blob = new Blob([ab], {type: mimeString});
            return blob;
        },
        handleFileUpload(){
            // Set the local file variable to what the user has selected.
            this.file = this.$refs.file.files[0];
            this.model.picture = this.$refs.file.files[0];
            // Initialize a File Reader object
            let reader  = new FileReader();
            // Add an event listener to the reader that when the 
            // file has been loaded, we flag the show preview
            // as true and set the image to be what was
            // read from the reader.
            reader.addEventListener("load", function () {
            this.showPreview = true;
            this.imagePreview = reader.result;
            }.bind(this), false);
            // Check to see if the file is not empty.
            if( this.file ){
                // Ensure the file is an image file.
                if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
                    // Fire the readAsDataURL method which will read the file in
                    // and upon completion fire a 'load' event which we will
                    // listen to and display the image in the preview.
                    reader.readAsDataURL( this.file );
                }
            }
        },
        onSubmit() {
            // Assemble form data
            const formData = new FormData()
            formData.append('image', this.model.picture);
            formData.append('name', this.model.name);
            this.loading = "Attempting to recognize you..please wait."
            // Post to server
            // axios.post('http://localhost:3000/verify', formData)
            axios.post('https://vuefacerec.herokuapp.com/verify', formData)
            .then(res => {
                // Post a status message saying the upload complete
                this.loading = '';
                if( !res.data.Errors){
                    if(res.data.images[0].transaction.status != "success"){
                        this.resultStatus = '😕 don\'t know who you are! Try uploading a picture of yourself first in upload section';
                    }else{
                        this.resultStatus = 'What\'s good ' + res.data.images[0].transaction.subject_id + '! 🤓';
                    }
                    this.resultDetails = res.data.images[0].transaction;
                }else{
                    this.resultStatus = '😕 don\'t know who you are! Try uploading a picture first in upload section';
                }
            })
        }
    }
}
</script>
<style scoped>
    /* body {
        background-color: #F0F0F0;
    } */
    .capture {
        text-align: center;
        color: #2c3e50;
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
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-around
    }
    .form-group {
        margin: 10px 0;
    }
    .form-control {
        width: 100%;
        line-height: 1.2em;
        border: none;
        border-bottom: 0.5px solid buttonface;
    }
    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        outline: none;
        border-bottom: 2px solid #063C1C;
    }
</style>