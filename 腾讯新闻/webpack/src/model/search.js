export default {
    data: {
        // 搜索框是否聚焦
        isFousStatus: false,
        //搜索的值
        searchText:''
    },
    methods: {
       focus(){
           console.log(this);
           this.searchModel.isFousStatus = true
       },
       cancel(){
        this.searchModel.isFousStatus = false
       },
       //清空搜索框
       clear(){
        this.searchModel.searchText = ''
       }
    }
}