const apiKey = 'sG1_rSTIMOS-5UeNRNt8nb12bi1_wvcgkVx149Zmy79meBei_U8R8Stqy6y7dWHHKnjptMMcZY3s2pSUTnPGzkIbXjsOv2RMtSceANZtSUO6vMuZNHH3ueuOCNsLW3Yx';

const Yelp = {
  search: function(term, location, sortBy){
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${term}=&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.busniess){
        jsonResponse.busniess.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.location.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }
        })
      }
    })
  },
}

export default Yelp