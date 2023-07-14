class show_key {
     constructor(x) {
         this.x = x;
     }
     mostrar_pass() {
         if (this.x.type === "password") {
             this.x.type = "text";
         } else {
             this.x.type = "password";
         }
     }
 }

 const passwordField = document.getElementById('pass');
 const showPassword = new show_key(passwordField);