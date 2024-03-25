<template>


  <div>
    <h1>User List</h1>
    
      <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" @click="getData">Get Data</button>
  <div v-if="isLoading">Loading...</div>
  <div v-else>
    <!-- <table class="border-collapse border border-slate-400 ..." >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>E-Mail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button type="button" class="btn btn-warning rounded-pill"
                  ><i class="bi bi-pen"></i>Edit
                  </button>
                  
                  <button type="button" class="btn btn-danger rounded-pill"><i
                    class="bi bi-trash"></i>Delete
                  </button>
          </td>
        </tr>
      </tbody>
    </table> -->

    <div class="flex flex-wrap">
      <div class="w-full md:w-1/3 px-2 my-4">
        <div class="border-b border-gray-200 shadow">
          <table class="w-full table-auto text-xs text-gray-500 divide-y divide-green-400">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-2">#</th>
                <th class="px-4 py-2">Nome</th>
                <th class="px-4 py-2">E-Mail</th>
                <th class="px-4 py-2">Action</th>
              
              </tr>
            </thead>

            <tbody class="text-center bg-white divide-y divide-gray-300">



              <tr class="whitespace-nowrap" v-for="user in users" :key="user.id" >
          <td class="px-4 py-2">{{ user.id }}</td>
          <td class="px-4 py-2">{{ user.name }}</td>
          <td class="px-4 py-2">{{ user.email }}</td>
          <!-- <td class="px-6 py-4 "><a href="#" ><box-icon name='edit' color="#2596be"></box-icon></a></td> -->
          <td class="px-6 py-4 ">
            <!-- <a href="#">
                
              </a>

              <a href="#">
                    
                  </a> -->
           
               
                  







            <button type="button" class="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  ><box-icon name='edit' color="#2596be"></box-icon>
                  Edit
                  </button>
                  
                  <button type="button" class="h-10 px-6 font-semibold rounded-md bg-black text-white">
                    <box-icon name='trash' color="#fc7676" ></box-icon>
                    Delete
                  </button>
          </td>
        </tr>
            </tbody>
          </table>
        </div>
      </div>










  </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { ApiResponse } from '@/stores/models/ApiResponse';
import BaseService from '@/core/services/base.service';


export default defineComponent({
data() {
  return {
    isLoading: false,
    users: ref<any>([]),
    endpoint: "user",
    baseService: new BaseService()
  };
},
methods: {
  async getData() {

    this.isLoading = true;

    this.baseService.get(this.endpoint)
      .subscribe({
        next: (response: ApiResponse) => {
          this.users = response.payload;
        },
        error: (error) => {
          console.error('Error:', error);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
  },
},
});
</script>

<style>

</style>



