import Api from '@/services/api'

export default {
    getInfo() {
        return Api().get('/user/info')
    },
    sendUser(user) {
        let nUser = {
            Name: user.name,
            Email:user.email,
            LoginIdentification: user.sub,
            LoginInformation: localStorage.getItem('id_token'),
            IsTeacher: localStorage.getItem('teacher'),
            IsStudent: !localStorage.getItem('teacher'),
        }
        if(nUser.IsTeacher=="undefined"){
            nUser.IsTeacher=false;
        }
        console.log(nUser)
        return Api().post('/user', nUser)
    }
}