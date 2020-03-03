<template>
 <div class="container mt-5" id="move">
    <h1>Product Page</h1>
    <div class="table-responsive" >
      <table class="table table-striped " border="0.25">
        <thead class="tables">
          <tr class="bg-dark text-white">
            <th scope="col"><font color="white"> Serial Number:</font></th>
            <th scope="col"><font color="white"> Name</font></th>
            <th scope="col"><font color="white"> Price</font></th>
            <th scope="col"><font color="white"> Plan</font></th>
            <th scope="col"><font color="white">Status</font></th>
            <th scope="col"><font color="white">Action</font></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product of products" :key="product.id" class="table3">
            <th  scope="row" class="row1">{{product.id}}</th>
          
            <td>{{product.productName}}</td>
            <td>{{product.productPrice}}</td>
            <td>{{product.productPlan}}</td>
               <td>{{product.status}}</td>
            <td> <button class="btn btn-danger" v-on:click="deleteProduct(product)">Delete</button></td>
          </tr>
          <!-- <tr class="table4">
            <th scope="row" class="row2">2</th>
            <td>Granduer</td>
            <td>10000</td>
            <td>Golden</td>
            <td>Available</td>
            <td>DELETE|UPDATE</td>
          </tr>
          <tr class="table2">
            <th scope="row" class="row3">3</th>
            <td>Executive</td>
            <td>15000</td>
            <td>Luxury</td>
            <td class="bg-danger text-white" data-toggle="tooltip" data-placement="left"
              title="Over-Subscribed">Booked</td>
            <td>DELETE|UPDATE</td>
          </tr>
          <tr class="table5">
            <th scope="row" class="row4">4</th>
            <td >Presidential</td>
            <td>20000</td>
            <td>Splendour</td>
            <td>Limited Space</td>
            <td>DELETE|UPDATE</td>
          </tr>
          <tr class="table1">
            <th scope="row" class="row5">5</th>
            
            <td>Royalty</td>
            <td>25000</td>
            <td>Flamboyant</td>
            <td>Limited Space</td>
            <td>DELETE|UPDATE</td>
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
import axios from 'axios';
const BASE_URL = 'http://localhost:8085/spacehubWeb/listProduct'
    export default{
        name: 'ProductList', 

        data(){
          return{
            products: [],
            productName: '',
            productPrice: '',
            productPlan: '',
            status: '',

          }
        },
        
        async created(){
          try {
            const result = await axios.get(BASE_URL);
            this.products = result.data;
          }
          catch(e){
            console.error(e)

          }

        },
        methods:{

        deleteProduct: async function(product){

          if (confirm("Are you sure you want to delete this product?")) {
                await axios.delete("http://localhost:8085/spacehubWeb/deleteProduct/"+ product.id);
          } else {
              // Do nothing!
          }
        
          
        }       
    },

      
    }
    
</script>

<style src="./ProductList.css" scoped>

</style>
