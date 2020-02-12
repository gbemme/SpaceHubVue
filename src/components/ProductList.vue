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
            <th scope="col"><font color="white"> Images</font></th>
            <th scope="col"><font color="white">Action</font></th>
          </tr>
        </thead>
        <tbody>
          <tr class="table3">
            <th  scope="row" class="row1">1</th>
            <td>Starter</td>
            <td>5000</td>
            <td>Deluxe</td>
            <td>Lite</td>
            <td>Available</td>
          </tr>
          <tr class="table4">
            <th scope="row" class="row2">2</th>
            <td>Granduer</td>
            <td>10000</td>
            <td>Golden</td>
            <td>Compact</td>
            <td>Available</td>
          </tr>
          <tr class="table2">
            <th scope="row" class="row3">3</th>
            <td>Executive</td>
            <td>15000</td>
            <td>Luxury</td>
            <td>Flexible</td>
            <td class="bg-danger text-white" data-toggle="tooltip" data-placement="left"
              title="Over-Subscribed">Booked</td>
          </tr>
          <tr class="table5">
            <th scope="row" class="row4">4</th>
            <td >Presidential</td>
            <td>20000</td>
            <td>Splendour</td>
            <td>Ideal</td>
            <td>Limited Space</td>
          </tr>
          <tr class="table1">
            <th scope="row" class="row5">5</th>
            
            <td>Royalty</td>
            <td>25000</td>
            <td>Flamboyant</td>
            <td>Serene</td>
            <td>Limited Space</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
    export default{
        name: 'ProductList',        
    }
    
</script>

<style src="./ProductList.css" scoped>

</style>