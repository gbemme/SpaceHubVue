<template>
    <section class="bg-light" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Portfolio</h2>
            <h4 class="section-subheading text-muted">Most Affordable Coworking Space around | Quiet and Comfortable For Work </h4>
          </div>
        </div>
        <div class="row">
          
            <div class="col-md-6 col-sm-6 portfolio-item" v-for="(obj, key) in portfolioJSON" :key="key">
                <!-- <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2"> -->
                      
                    <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                         
                        </div>
                     
                    </div>
                    <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
                       <!-- <button><a href="./book">Submit</a></button> -->
                <!-- </a> -->
                <div class="portfolio-caption">
                    <h4>{{ obj.caption }}</h4>
                    <p class="text-muted">{{ obj.title }}</p>
                    <button><a href="./book">Book Now</a></button>

                </div>
            </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
    data: () => ({
        portfolioJSON: [
            {
                img: '/something/random/img.jpg',
                caption: 'Deluxe',
                title: 'Affordable'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Queens',
                title: 'Spacious'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Kings',
                title: 'Splendid'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Gold',
                title: 'Excellent'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Platinum',
                title: 'Executive'
            },
            {
                img: '/something/random/img.jpg',
                caption: 'Diamond',
                title: 'Exquisite' 
            }
        ]
    })
}
</script>

<style lang="css">

</style>


