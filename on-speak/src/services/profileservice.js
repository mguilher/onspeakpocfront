import Api from '@/services/api'

export default {
    getTeacher(id) {
        return Api().get('/profile/'+id)
    },
    completeRegistration(teacher) {
        return Api().post('/profile', teacher)
    }
}