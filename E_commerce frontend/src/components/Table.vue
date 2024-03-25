<template lang="">
     <div class="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 class="text-3xl font-bold">DATA TABLE</h1>
        <div class="flex flex-col">
          <div class="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full text-center">
                  <thead class="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-lg text-white px-6 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody class="border-black border-b-2">
                    
                      <tr
                        
                        class="bg-white border-b-2 border-black"
                      >
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          shakib
                        </td>
                        <td class="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          rakib
                        </td>
                        <td class="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          mahi
                        </td>
                        <td class="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          rubel
                        </td>
                        <td class="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <button
                            
                            class="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            VIew
                          </button>
                          <button
                            
                            class="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </button>
                          <button
                            
                            class="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
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
<script>
export default {
    
}
</script>
<style lang="">
    
</style>