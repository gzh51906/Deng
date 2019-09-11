<template>
  <div class="reg">
    <div class="top">
      <el-row>
        <el-col :span="4">
          <el-button type="text" @click="back">
            <i class="el-icon-back"></i>
          </el-button>
        </el-col>
        <el-col :span="15">
          <el-button type="text">注册</el-button>
        </el-col>
        <el-col :span="5">
          <el-button type="text" @click="goto('/login')">登陆</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="form">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="tel">
          <div class="input_box">
            <i class="el-icon-delete"></i>
            <el-input type="text" v-model="ruleForm.tel" autocomplete="off" placeholder="请输入手机号"></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="pass">
          <div class="input_box">
            <i class="el-icon-lock"></i>
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入登陆密码"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="checkPass">
          <div class="input_box">
            <i class="el-icon-lock"></i>
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
              placeholder="确认密码"
            ></el-input>
          </div>
        </el-form-item>
        <el-form-item class="submitBtn">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-button type="text" @click="submitForm('ruleForm')">注册</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <div class="text">
          <label for class="agree">注册即表示您已阅读并同意</label>
          <label for class="agreeline" @click="goto('/home')">《deng.com会员协议》</label>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        // 校验失败：需要往回调函数传入一个错误对象
        callback(new Error("请再次确认密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        //通过验证
        callback();
      }
    };
    var checkTel = async (rule, value, callback) => {
      // 发起请求校验用户名是否已被注册
      let { data } = await this.$axios.get("http://120.24.156.103:2001/user/check", {
        params: {
          tel: this.ruleForm.tel
        }
      });
      if (data.code === 0) {
        alert("用户名已存在,请登陆");
      } else {
        //通过验证
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        tel: "",
        checkPass: ""
      },
      rules: {
        pass: [
          { required: true, message: "请设置密码！", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
          { min: 6, max: 20, message: "长度在 6 到 20 个字符", trigger: "blur" }
        ],
        tel: [
          { required: true, message: "请输入电话号码！ ", trigger: "blur" },
          { validator: checkTel, trigger: "blur" }
        ],
        checkPass: [{ validator: checkPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let { data } = await this.$axios.post(
            "http://120.24.156.103:2001/user/reg",
            {
              tel: this.ruleForm.tel,
              password: this.ruleForm.pass
            }
          );

          if (data.code === 1) {
            this.$router.push("/login");
          }
        } else {
          return false;
        }
      });
    },
    goto(path) {
      this.$router.push(path);
    },
    back(){
      this.$router.go(-1);    
    }
  }
};
</script>

<style>
.reg {
  width: 100%;
}
.reg .top {
  height: 45px;
  background-color: #ea5413;
}
.reg .top span {
  font-size: 12px;
  color: #fff;
}
.reg .el-col {
  line-height: 45px;
  text-align: center;
}
.reg .form {
  margin-top: 20px;
}
.reg .form .el-form-item {
  margin-bottom: 0px;
}
.reg .form .el-row {
  margin-top: 30px;
  background-color: #ea5413;
}
.reg .form .el-button {
  width: 100%;
}
.reg .submitBtn {
  margin: 0 20px;
}
.reg .submitBtn span {
  font-weight: bold;
  color: #fff;
}
.reg .form i {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 12px;
  top: 15px;
  color: #999;
  z-index: 8;
}
.reg .input_box {
  position: relative;
  background-color: #fff;
  height: 40px;
}
.reg .el-input {
  width: 340px;
  float: right;
}
.reg .el-input__inner {
  border: 0;
  border-bottom: 1px dotted #999;
}

.reg .form .text {
  padding: 0 10px;
  color: #999;
  font-size: 12px;
  margin-top: 10px;
}
.reg .agreeline {
  color: #ea5413;
}
</style>