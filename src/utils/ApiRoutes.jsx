const ApiRoutes = {
    LOGIN:{
        path:"/user/login",
        Authenticate:false
    },
    SignUp:{
        path:"/user/signup",
        Authenticate:false
    },
    LOGOUT:{
        path:"user/logout"
    },
    addrecipe:{
        path:"/recipe/addrecipe"
    },
    updaterecipe:{
        path:"/recipe/updaterecipe"
    },
    getrecipeByUserId:{
        path:"/recipe"
    },
    deleterecipe:{
        path:"/recipe/deleterecipe"
    },
    getallrecipe:{
        path:"/recipe/all"
    },
    getRecipeById:{
        path:"/recipe"
    }
}

export default  ApiRoutes