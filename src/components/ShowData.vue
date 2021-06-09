<template>
  <div>
      <button @click="getData"> Baixar dados </button>
      <button @click="deleteItem"> Deletar 1 </button>
    <div>
        <b-row>
            <b-col cols="6">
                <b-table  striped hover :items="data"></b-table>
            </b-col>
        </b-row>
    </div>

  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    name:'ShowData',
    computed: {
        ... mapGetters([
            'data'
        ])
    },
    methods: {
        ... mapActions([
            'getData', 'deleteItem'
        ])
    },
    data(){
        return {
            fields: ['id', 'title'],
        }
    }
}
</script>

<style>

</style>