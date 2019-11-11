<template>
    <div>
        用户名：
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
        密码：
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        确认密码：
        <el-input placeholder="确认密码" v-model="input" show-password></el-input>
        <el-row>
            <el-button type="success">注册</el-button>
        </el-row>
    </div>
</template>
<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>