<template>
    <div class="app">
        <div><b>Dialog component demo</b></div>
        <Dialog :visible.sync="visible" :title="title">
            <div class="username">
                <b class="dialog-label">账号</b>
                <input type="text" class="dialog-input" />
            </div>
            <div class="password">
                <b class="dialog-label">密码</b> 
                <input type="password" class="dialog-input" />
            </div>
            <div class='footer' slot="footer">
                <button class="button dialog-button-default">取消</button>
                <button class="button dialog-button-primary">确定</button>
            </div>
        </Dialog>
        <div class="button-warp">
            <button class="button" @click="openDialog">打开模态窗</button>
        </div>
    </div>
</template>

<script>
import Dialog from './components/Dialog'

export default {
    data () {
        return {
            visible : false,
            title : ''
        }
    },
    components : {Dialog},
    methods : {
        openDialog () {
            this.visible = true;
            this.title = '——登录——';
        }
    }
}
</script>

<style lang="less" scoped>
    .app {
        display : flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .button-warp{
        margin: 100px 0 0 0;
    }
    .button {
        width : 100px;
        height : 40px;
        color: rgb(63, 62, 62);
        background-color: #fff;
        border-radius : 5px;
        border: 1px solid #dcdfe6;
        cursor: pointer;
        text-align: center;
        padding: 10px;
        transition: 0.1s;
        outline: none;
    }
    .button:hover {
        background-color: #40a0ffce;
        color: #fff;
    }

    .username, .password {
        margin: 10px;
        display: flex;
        align-content : space-between;
    }

    .dialog-input {
        border-radius : 5px;
        border: 1px solid #dcdfe6;
        height: 30px;
        width : 350px;
        padding: 0 15px;
        background-color: #fff;
        margin-left: 50px;
        outline: none;
    }
    .dialog-input:focus {
        border: 1px solid #38c9f5a4;
    }

    .dialog-label {
        position: absolute;
        text-align: center;
        left : 50px;
    }

    .footer {
        text-align: right;
        padding: 15px 20px;
    }

    .dialog-button-primary {
        background-color: #409eff;
        border-color: #409eff;
        color: #fff;
    }
    .dialog-button-primary:hover {
        background-color: #40a0ffc4;
    }

    .dialog-button-default:first-child {
        margin-right: 10px;
    }
    .dialog-button-default:hover {
        color: rgb(63, 62, 62);
        background-color: #40a0ff1a;
    }
</style>


