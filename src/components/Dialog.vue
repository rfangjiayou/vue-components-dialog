<template>
    <div>
        <transition name="dialog-fade-wrapper">
            <div class="dialog-wrapper" v-show="visible" @click="closeMode">
                <transition name="dialog-fade">
                    <div class="dialog" v-if="visible">
                        <div class="dialog-header">
                            <div class="dialog-title"><b>{{title}}</b></div>
                            <div class="close-dialog" @click="close">
                                <i class="close-dialog-img"></i>
                            </div>
                        </div>
                        <div class="dialog-content">
                            <slot></slot>
                        </div>
                        <div class="dialog-footer">
                            <slot name="footer"></slot>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name : 'dailog',
    props : {
        title : {
            type : String
        },
        visible : {
            type : Boolean,
            default : false
        }
    },
    methods : {
        closeMode (event) {
            if(this.visible){
                document.querySelector('.dialog').contains(event.target) ? '' : this.close();
            }
        },
        close () {
            this.$emit('update:visible', false);
        }
    }
}
</script>

<style lang="less" scoped>
    .dialog-fade-wrapper-enter-active, .dialog-fade-wrapper-leave-active {
        transition: opacity .5s;
    }

    .dialog-fade-wrapper-enter, .dialog-fade-wrapper-leave-to {
        opacity: 0;
    }

    .dialog-fade-enter, .dialog-fade-leave-to {
        transform: translateY(-20px);
    }

    .dialog-fade-enter-active {
        transition: all .5s ease;
    }

    .dialog-fade-leave-active {
        transition: all .5s ease;
    }

    .dialog-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        overflow: auto;
        background-color: #0000006c;
    }
    .dialog {
        position: relative;
        width: 30%;
        margin: 10% auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0,0,0,.3);
        box-sizing: border-box;
        border-radius : 5px;

        .dialog-header {
            padding: 20px;
            display: flex;
            justify-content: center;
            
            .dialog-title {
                font-size: larger;
            }

            .close-dialog {
                position: absolute;
                top: 20px;
                right: 20px;
                border: none;
                width: 20px;
                height: 20px;
                cursor: pointer;
                background-color: transparent;

                .close-dialog-img:before {
                    content: "\2715";
                    font-style: normal;
                }

                .close-dialog-img:hover {
                    color: #40a0ff;
                }
            }
        }

        .dialog-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>

